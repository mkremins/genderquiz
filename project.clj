(defproject mkremins/gender-quiz "0.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.omcljs/om "0.9.0"]
                 [prismatic/om-tools "0.4.0"]]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :cljsbuild {:builds [{:id "app"
                        :source-paths ["src"]
                        :compiler {:main gender-quiz.app
                                   :optimizations :advanced
                                   :output-dir "docs/js/app"
                                   :output-to "docs/js/app.js"}}]})
