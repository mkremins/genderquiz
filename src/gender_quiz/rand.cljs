(ns gender-quiz.rand)

(defn biased-rand-nth
  "Like `clojure.core/rand-nth`, but biased towards earlier items in `pool`.
  Borrowed from [Martin O'Leary](http://mewo2.com/notes/naming-language)."
  [pool]
  (let [r (rand)
        r (* r r)] ; square to bias towards the low end
    (nth pool (js/Math.floor (* r (count pool))))))

(defn pick-n
  "Randomly selects `n` items from `pool`, without replacement."
  [n pool]
  (take n (shuffle pool)))

(defn pick-n-with-replacement
  "Randomly selects `n` items from `pool`, with replacement."
  [n pool]
  (repeatedly n #(rand-nth pool)))

(defn restrict
  "Repeatedly runs `gen`, a generator fn, until the output passes `pred`, then
  returns the passing output. Extra `args`, if provided, are passed to `gen`."
  [pred gen & args]
  (loop [x (apply gen args)]
    (if (pred x) x (recur (apply gen args)))))

(defn restricted
  "Returns a generator fn that behaves like `gen`, but will only output values
  that pass `pred`. Uses `restrict` internally."
  [pred gen]
  #(apply restrict pred gen %&))

(defn shuffle-cycle
  "Returns an infinite lazy sequence of repetitions of the items in `pool`
  (much like `clojure.core/cycle`), but randomizes the order of the items on
  each iteration of the cycle (much like `clojure.core/shuffle`).

  Useful when you have a finite pool to choose from and need an indefinite
  number of items, but want to avoid repetition as much as possible. The items
  in the pool will show up in a random order, but you're always guaranteed to
  see each item exactly once before any of them are repeated."
  [pool]
  (when-let [pool (seq pool)]
    (lazy-seq (concat (shuffle pool) (shuffle-cycle pool)))))

(defn weighted-pool
  "Returns a pool in which each key from the map `choices-with-weights` appears
  exactly N times, where N is the integer value associated with that key."
  [choices-with-weights]
  (->> choices-with-weights
       (map #(repeat (val %) (key %)))
       (reduce into [])))

(defn weighted-choice
  "Randomly selects a key from the map `choices-with-weights`. The likelihood
  that a given key will be selected is determined by its weight, i.e. its
  associated integer value in the map."
  [choices-with-weights]
  (rand-nth (weighted-pool choices-with-weights)))

(comment
  ;; like weighted-choice, but returns a generator fn.
  ;; saves work restructuring choices-with-weights into a pool
  ;; if you use the same gen repeatedly.
  (defn weighted-gen [choices-with-weights]
    (let [pool (weighted-pool choices-with-weights)]
      #(rand-nth pool)))

  ;; like weighted-gen, but maybe faster?
  ;; haven't actually tested so not sure.
  (defn weighted-gen [choices-with-weights]
    (let [total-weight (reduce + (vals choices-with-weights))
          choices-with-thresholds
          (reduce (fn [choices-with-thresholds [choice weight]]
                    (let [threshold (+ weight (or (val (peek choices-with-thresholds)) 0))]
                      (conj choices-with-thresholds [choice threshold])))
                  [] (seq choices-with-weights))]
      (fn []
        (let [r (rand-int total-weight)]
          (->> choices-with-thresholds (filter #(< r (val %))) first key)))))
)
