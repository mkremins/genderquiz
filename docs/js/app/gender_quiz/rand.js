// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('gender_quiz.rand');
goog.require('cljs.core');
/**
 * Like `clojure.core/rand-nth`, but biased towards earlier items in `pool`.
 *   Borrowed from [Martin O'Leary](http://mewo2.com/notes/naming-language).
 */
gender_quiz.rand.biased_rand_nth = (function gender_quiz$rand$biased_rand_nth(pool){
var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var r__$1 = (r * r);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pool,(function (){var G__17565 = (r__$1 * cljs.core.count(pool));
return Math.floor(G__17565);
})());
});
/**
 * Randomly selects `n` items from `pool`, without replacement.
 */
gender_quiz.rand.pick_n = (function gender_quiz$rand$pick_n(n,pool){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(pool));
});
/**
 * Randomly selects `n` items from `pool`, with replacement.
 */
gender_quiz.rand.pick_n_with_replacement = (function gender_quiz$rand$pick_n_with_replacement(n,pool){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(pool);
}));
});
/**
 * Repeatedly runs `gen`, a generator fn, until the output passes `pred`, then
 *   returns the passing output. Extra `args`, if provided, are passed to `gen`.
 */
gender_quiz.rand.restrict = (function gender_quiz$rand$restrict(var_args){
var args__5628__auto__ = [];
var len__5621__auto___17569 = arguments.length;
var i__5622__auto___17570 = (0);
while(true){
if((i__5622__auto___17570 < len__5621__auto___17569)){
args__5628__auto__.push((arguments[i__5622__auto___17570]));

var G__17571 = (i__5622__auto___17570 + (1));
i__5622__auto___17570 = G__17571;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((2) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((2)),(0))):null);
return gender_quiz.rand.restrict.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5629__auto__);
});

gender_quiz.rand.restrict.cljs$core$IFn$_invoke$arity$variadic = (function (pred,gen,args){
var x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
var G__17572 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
x = G__17572;
continue;
}
break;
}
});

gender_quiz.rand.restrict.cljs$lang$maxFixedArity = (2);

gender_quiz.rand.restrict.cljs$lang$applyTo = (function (seq17566){
var G__17567 = cljs.core.first(seq17566);
var seq17566__$1 = cljs.core.next(seq17566);
var G__17568 = cljs.core.first(seq17566__$1);
var seq17566__$2 = cljs.core.next(seq17566__$1);
return gender_quiz.rand.restrict.cljs$core$IFn$_invoke$arity$variadic(G__17567,G__17568,seq17566__$2);
});
/**
 * Returns a generator fn that behaves like `gen`, but will only output values
 *   that pass `pred`. Uses `restrict` internally.
 */
gender_quiz.rand.restricted = (function gender_quiz$rand$restricted(pred,gen){
return (function() { 
var G__17574__delegate = function (rest__17573_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(gender_quiz.rand.restrict,pred,gen,rest__17573_SHARP_);
};
var G__17574 = function (var_args){
var rest__17573_SHARP_ = null;
if (arguments.length > 0) {
var G__17575__i = 0, G__17575__a = new Array(arguments.length -  0);
while (G__17575__i < G__17575__a.length) {G__17575__a[G__17575__i] = arguments[G__17575__i + 0]; ++G__17575__i;}
  rest__17573_SHARP_ = new cljs.core.IndexedSeq(G__17575__a,0);
} 
return G__17574__delegate.call(this,rest__17573_SHARP_);};
G__17574.cljs$lang$maxFixedArity = 0;
G__17574.cljs$lang$applyTo = (function (arglist__17576){
var rest__17573_SHARP_ = cljs.core.seq(arglist__17576);
return G__17574__delegate(rest__17573_SHARP_);
});
G__17574.cljs$core$IFn$_invoke$arity$variadic = G__17574__delegate;
return G__17574;
})()
;
});
/**
 * Returns an infinite lazy sequence of repetitions of the items in `pool`
 *   (much like `clojure.core/cycle`), but randomizes the order of the items on
 *   each iteration of the cycle (much like `clojure.core/shuffle`).
 * 
 *   Useful when you have a finite pool to choose from and need an indefinite
 *   number of items, but want to avoid repetition as much as possible. The items
 *   in the pool will show up in a random order, but you're always guaranteed to
 *   see each item exactly once before any of them are repeated.
 */
gender_quiz.rand.shuffle_cycle = (function gender_quiz$rand$shuffle_cycle(pool){
var temp__4425__auto__ = cljs.core.seq(pool);
if(temp__4425__auto__){
var pool__$1 = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (pool__$1,temp__4425__auto__){
return (function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.shuffle(pool__$1),gender_quiz$rand$shuffle_cycle(pool__$1));
});})(pool__$1,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
/**
 * Returns a pool in which each key from the map `choices-with-weights` appears
 *   exactly N times, where N is the integer value associated with that key.
 */
gender_quiz.rand.weighted_pool = (function gender_quiz$rand$weighted_pool(choices_with_weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17577_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__17577_SHARP_),cljs.core.key(p1__17577_SHARP_));
}),choices_with_weights));
});
/**
 * Randomly selects a key from the map `choices-with-weights`. The likelihood
 *   that a given key will be selected is determined by its weight, i.e. its
 *   associated integer value in the map.
 */
gender_quiz.rand.weighted_choice = (function gender_quiz$rand$weighted_choice(choices_with_weights){
return cljs.core.rand_nth(gender_quiz.rand.weighted_pool(choices_with_weights));
});
