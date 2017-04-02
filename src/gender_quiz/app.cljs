(ns gender-quiz.app
  (:require [clojure.string :as str]
            [gender-quiz.rand :as rand]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defonce us-states
  ["Alabama" "Alaska" "Arizona" "Arkansas" "California" "Colorado" "Connecticut" "Delaware" "Florida" "Georgia"
   "Hawaii" "Idaho" "Illinois" "Indiana" "Iowa" "Kansas" "Kentucky" "Louisiana" "Maine" "Maryland" "Massachusetts"
   "Michigan" "Minnesota" "Mississippi" "Missouri" "Montana" "Nebraska" "Nevada" "New Hampshire" "New Jersey"
   "New Mexico" "New York" "North Carolina" "North Dakota" "Ohio" "Oklahoma" "Oregon" "Pennsylvania" "Rhode Island"
   "South Carolina" "South Dakota" "Tennessee" "Texas" "Utah" "Vermont" "Virginia" "Washington" "West Virginia"
   "Wisconsin" "Wyoming"])

(defn gen-thirteen-us-states []
  (let [states (rand/pick-n 13 us-states)]
    (str (str/join ", " (take 12 states)) ", or " (last states))))

(defn gen-boundingbox-candlestash []
  (let [fname (rand-nth ["BOUNDINGBOX" "BOBOLINK" "BOTHERSTICK" "BATTLEFLICK" "BANNERCLICK" "BOONDOGGLE"])
        lname1 (rand-nth ["CABBAGE" "CACKLE" "CAMEL" "CAMERA" "CARRIAGE" "CASPER" "CARROT" "CLAMBER" "COBBLER"
                          "CRUMPET" "CRUMPLE" "CULTURE"])
        lname2 (rand-nth ["BASH" "CASH" "CLASH" "CRASH" "DASH" "FLASH" "LATCH" "PATCH" "RASH" "SASH" "SLASH"
                          "SMASH" "STASH" "TRASH"])]
    (str fname " " lname1 lname2)))

(defonce questions
  [{:text "I frequently stand up for myself."}
   {:text "I am considerate of others’ feelings."}
   {:text "I am a natural leader."}
   {:text "I am known for my sense of humor."}
   {:text "I consider myself brave."}
   {:text "I can sometimes be aloof or withdrawn."}
   {:text "I enjoy having a large circle of friends."}
   {:text "I am confident in my own abilities."}
   {:text "I have a very logical mind."}
   {:text "I am a very creative person."}
   {:text "I sometimes feel that I am experiencing emotions."}
   {:text "I sometimes judge myself too harshly."}
   {:text "I am generally an optimistic person."}
   {:text "I am frequently confused."}
   {:text "My body is made of meat."}
   {:text "My body is made of metal."}
   {:text "My body is made of bits."}
   {:text "My body is incorporeal (or diffuse)."}
   {:text "I have questioned my gender identity."}
   {:text "Overall, my friends have more gender than I do."}
   {:text "I am all out of gender."}
   {:text "Sometimes I look at myself in the mirror and wonder where my life went so wrong."}
   {:text "I have been made to feel unwelcome due to my (perceived or actual) gender."}
   {:text "I am an existential threat to organized human civilization due to my (perceived or actual) gender."}
   {:text "My body is a prison that I will one day transcend."}
   {:text "I’ve seen things you people wouldn’t believe."}
   {:text "This isn’t even my final form."}
   {:text "I’m not trapped in here with you, you’re trapped in here with me."}
   {:text "I am ageless and undying."}
   {:text "I am unstoppable. I simply cannot be stopped."}])

(defonce all-yes
  {:name "ALL OF THEM!"
   :image "quantum.jpg"
   :desc ["You exist in a state of quantum superposition, causing all of your many potential genders to be "
          "simultaneously colocated in both space and time. It is theoretically possible to measure either the "
          "position or momentum of your genderblob, but ascertaining both at the same time is prevented by the "
          "very laws of physics that keep the universe intact. I hope you’re pleased with yourself."]})

(defonce all-no
  {:name "NULL"
   :image "whitesquare.png"
   :desc ["You haven’t got any gender! We looked as hard as we could, but there is simply no gender here to be "
          "found."]})

(defonce all-middle-sliders
  {:name "NORMAL"
   :image "normal.png"
   :desc ["Yup, just a perfectly normal gender. Nothing strange here! It’s one of the usual ones. "
          "Pretty much the most normal gender we’ve ever seen."]})

(defonce genders
  [{:name "MURDER MYSTERY"
    :image "bobolink.jpg"
    :desc ["Your gender is DEAD, and foul play is suspected. But the body was found in a windowless room, "
           "and the door had been locked from the inside. What's more, the police are useless! Who can possibly "
           "piece together the evidence to solve the perfect crime? This looks like a case for… "
           [:func gen-boundingbox-candlestash] "!"]}
   {:name "BANNED IN THIRTEEN US STATES"
    :image "banned.png"
    :desc ["Better not be thinking of taking a trip to " [:func gen-thirteen-us-states] " anytime soon, "
           "‘cause with a gender like this, you won't be going anywhere! Except maybe to jail."]}
   {:name "DOGE"
    :image "doge.jpeg"
    :desc ["That’s right – your gender is one of the most popular memes of 2013! How does it feel to be famous?"]}
   {:name "EGG"
    :image "egg.jpg"
    :desc [""]}
   {:name "THE ANGEL RAMIEL FROM NEON GENESIS EVANGELION"
    :image "ramiel.gif"
    :desc ["Your gender is the Fifth Angel, one of the largest and second most powerful. It becomes the first Angel "
           "to physically penetrate the Geofront when its drill bit breaks through the armor. It is defeated "
           "during Operation Yashima (ヤシマ作戦)."]}
   {:name "BEES"
    :image "bees.gif"
    :desc [""]}
   {:name "CACTUS"
    :image "cactus.jpg"
    :desc ["Your gender is a member of the plant family Cactaceae, a family comprising about 127 genera "
           "with some 1750 known species of the order Caryophyllales. The word \"cactus\" derives, through Latin, "
           "from the Ancient Greek κάκτος, kaktos, a name originally used by Theophrastus for a spiny plant "
           "whose identity is not certain. Cacti occur in a wide range of shapes and sizes."]}
   {:name "CUBE"
    :image "cube.gif"
    :desc ["Your gender is a three-dimensional solid object bounded by six square faces, facets or sides, "
           "with three meeting at each vertex. It is the only regular hexahedron and is one of the five "
           "Platonic solids. It has 6 faces, 12 edges, and 8 vertices."]}
   {:name "FERN"
    :image "fern.jpg"
    :desc ["Your gender is is a member of a group of about 10,560 known extant species of vascular plants "
           "that reproduce via spores and have neither seeds nor flowers. They differ from mosses by being "
           "vascular, i.e., having certain tissue that conducts water and nutrients. They have branched stems "
           "and leaves like other vascular plants."]}
   {:name "THE MOON FROM MAJORA’S MASK"
    :image "moon.jpg"
    :desc ["Your gender approaches Termina slowly before a seemingly inevitable impact on the Final Day. "
           "Some of the people of Clock Town flee in an attempt to escape the collision, some do not believe "
           "it will fall, and others are resigned to the impending cataclysm."]}
   {:name "MISSINGNO"
    :image "missingno.png"
    :desc ["Your gender is a dual-type Bird/Normal glitch Pokémon in Pokémon Red and Blue, and a dual-type "
           "Normal/randomly named glitch type (which often has '9' in it) glitch Pokémon in Pokémon Yellow. "
           "It is arguably the best known glitch Pokémon, closely followed by 'M (00) and it is the easiest "
           "glitch Pokémon to find in the localizations. It has five distinct forms."]}
   {:name "THE MONOLITH FROM 2001: A SPACE ODYSSEY"
    :image "monolith.jpeg"
    :desc ["Your gender appears at the beginning of the story, set in prehistoric times. It is discovered by a "
           "group of hominids and somehow triggers a considerable shift in evolution, starting with the ability "
           "to use tools and weaponry."]}
   {:name "ROBOT"
    :image "robot.jpg"
    :desc ["Your gender is a machine, programmable by a computer and capable of carrying out a complex series of "
           "actions automatically. It can be guided by an external control device or the control may be embedded "
           "within."]}
   {:name "THE INKY VOID BETWEEN STARS"
    :image "space.jpg"
    :desc ["Your gender is the void that exists between celestial bodies. It is not completely empty, "
           "but consists of a hard vacuum containing a low density of particles, predominantly a plasma of "
           "hydrogen and helium as well as electromagnetic radiation, magnetic fields, neutrinos, dust and "
           "cosmic rays."]}
   {:name "VENDING MACHINE"
    :image "vend.png"
    :desc ["Although really, it’s more like a… gending machine."]}
   {:name "TUBBS FROM NEKO ATSUME"
    :image "tubbs.png"
    :desc [""]}
   {:name "THREE"
    :image "three.png"
    :desc ["Your gender is the natural number following 2 and preceding 4. It is prime."]}
   {:name "CAVE"
    :image "cave.jpeg"
    :desc ["Your gender is a hollow place in the ground, specifically a natural underground space large enough "
           "for a human to enter. It formed naturally by the weathering of rock and extends deep underground."]}
   {:name "TOP HAT"
    :image "tophat.jpg"
    :desc ["Oh my… a little old-fashioned, aren’t we? This gender was one of the original three, standardized "
           "in 1919 at the first meeting of the International Union of Pure and Applied Gendistry. It’s fallen "
           "a little out of favor since then, but back in the day, this was " [:em "the"] " gender to have."]}
   {:name "UNDER CONSTRUCTION"
    :image "construction.jpg"
    :desc ["Your gender is not yet finished! They’re still working on it – check back in a bit."]}
   {:name "FINE"
    :image "thisisfine.png"
    :desc ["Seriously, it’s completely fine. Nothing wrong here at all. This is a totally acceptable and normal "
           "gender with which to find yourself."]}
   ;{:name ""
   ; :image ""
   ; :desc [""]}
   ])

(defonce app-state
  (atom {:showing :quiz
         :questions questions}))

(defn submit-answers! [e]
  (.preventDefault e)
  (.stopPropagation e)
  (let [{:keys [questions]} @app-state
        gender (cond
                 (every? #(= (:checked %) 2) questions)
                   all-yes
                 (every? #(= (:checked %) 0) questions)
                   all-middle-sliders
                 (every? #(= (:checked %) -2) questions)
                   all-no
                 :else
                   (rand-nth genders))]
    (println "Submitting answers!")
    (om/transact! (om/root-cursor app-state)
      #(assoc % :gender gender :showing :result))))

(defn reset-quiz! [e]
  (.preventDefault e)
  (.stopPropagation e)
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (-> (assoc state :showing :quiz :has-retaken? true)
          (update :questions (fn [qs] (mapv #(dissoc % :checked) qs)))))))

(defcomponent question-view [data owner]
  (render [_]
    (dom/tr
      (dom/td (:text data))
      (dom/td
        (dom/input {:checked (= (:checked data) -2)
                    :on-change #(om/update! data :checked -2)
                    :type "radio"}))
      (dom/td
        (dom/input {:checked (= (:checked data) -1)
                    :on-change #(om/update! data :checked -1)
                    :type "radio"}))
      (dom/td
        (dom/input {:checked (= (:checked data) 0)
                    :on-change #(om/update! data :checked 0)
                    :type "radio"}))
      (dom/td
        (dom/input {:checked (= (:checked data) 1)
                    :on-change #(om/update! data :checked 1)
                    :type "radio"}))
      (dom/td
        (dom/input {:checked (= (:checked data) 2)
                    :on-change #(om/update! data :checked 2)
                    :type "radio"})))))

(defcomponent quiz-view [data owner]
  (render [_]
    (dom/div {:class "quiz"}
      (dom/p
        (str "Have you ever wondered what your gender was? Fortunately, you’ve come to the right place! "
             "This FREE ONLINE GENDER QUIZ will tell you everything you need to know about your gender. "
             "Just answer all the questions as truthfully as you can, and all will be revealed…"))
      (dom/table
        (dom/tr
          (dom/th "")
          (dom/th "Strongly disagree")
          (dom/th "Disagree")
          (dom/th "Neither agree nor disagree")
          (dom/th "Agree")
          (dom/th "Strongly agree"))
        (om/build-all question-view (:questions data)))
      (dom/a {:class "button" :href "#" :on-click submit-answers!}
        "OK WHAT GENDER AM I"))))

(defcomponent gender-view [data owner]
  (render [_]
    (let [gender (:gender data)]
      (dom/div {:class "gender"}
        (dom/p {}
          "Your gender is: "
          (dom/strong (:name gender)))
        (when (seq (:image gender))
          (dom/p (dom/img {:src (str "img/" (:image gender))})))
        (dom/p
          (for [part (:desc gender)]
            (cond
              (string? part)
                part
              (or (vector? part) (vector? @part))
                (case (first part)
                  :func
                    ((second part))
                  :rand
                    (rand-nth (rest part))
                  :em
                    (dom/em (second part)))
              :else
                "⚠️ WHOOPS MAX MADE A MISTAKE BETTER REPORT THIS ⚠️")))
        (dom/a {:class "button" :href "#" :on-click reset-quiz!}
          (if (:has-retaken? data)
            (rand-nth ["RETAKE THE QUIZ???"
                       "RETAKE THE QUIZ???"
                       "RETAKE THE QUIZ???"
                       "THAT CAN’T BE RIGHT I DEMAND A REFUND"
                       "SURELY THERE MUST BE SOME MISTAKE"
                       "I DON’T BUY IT"
                       "NAH, THAT AIN’T ME AT ALL"
                       "NO NO NO"
                       "YOU CALL THAT A GENDER?"])
            "RETAKE THE QUIZ???"))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (dom/div {:class "top-bar"}
        (dom/h1
          (dom/a {:href "/"} "FREE ONLINE GENDER QUIZ")))
      (case (:showing data)
        :quiz
          (om/build quiz-view data)
        :result
          (om/build gender-view data))
      (dom/div {:class "sneaky"}
        (dom/a {:href "https://twitter.com/maxkreminski"} "@maxkreminski")
        " made this mess"))))

(defn init! []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
