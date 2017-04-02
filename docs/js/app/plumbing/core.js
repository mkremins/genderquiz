// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.cst$kw$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args17188 = [];
var len__5621__auto___17203 = arguments.length;
var i__5622__auto___17204 = (0);
while(true){
if((i__5622__auto___17204 < len__5621__auto___17203)){
args17188.push((arguments[i__5622__auto___17204]));

var G__17205 = (i__5622__auto___17204 + (1));
i__5622__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var G__17196 = args17188.length;
switch (G__17196) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args17188.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5640__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__17197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17197) : f.call(null,G__17197));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__17198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__17199 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17198,G__17199) : f.call(null,G__17198,G__17199));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__17200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__17201 = x1;
var G__17202 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17200,G__17201,G__17202) : f.call(null,G__17200,G__17201,G__17202));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq17189){
var G__17190 = cljs.core.first(seq17189);
var seq17189__$1 = cljs.core.next(seq17189);
var G__17191 = cljs.core.first(seq17189__$1);
var seq17189__$2 = cljs.core.next(seq17189__$1);
var G__17192 = cljs.core.first(seq17189__$2);
var seq17189__$3 = cljs.core.next(seq17189__$2);
var G__17193 = cljs.core.first(seq17189__$3);
var seq17189__$4 = cljs.core.next(seq17189__$3);
var G__17194 = cljs.core.first(seq17189__$4);
var seq17189__$5 = cljs.core.next(seq17189__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__17190,G__17191,G__17192,G__17193,G__17194,seq17189__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__13353__auto__ = (function (){var G__17220 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17220) : cljs.core.atom.call(null,G__17220));
})();
var seq__17221_17231 = cljs.core.seq(m);
var chunk__17222_17232 = null;
var count__17223_17233 = (0);
var i__17224_17234 = (0);
while(true){
if((i__17224_17234 < count__17223_17233)){
var vec__17225_17235 = chunk__17222_17232.cljs$core$IIndexed$_nth$arity$2(null,i__17224_17234);
var k_17236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17225_17235,(0),null);
var v_17237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17225_17235,(1),null);
var m17219_17238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17226_17239 = m_atom__13353__auto__;
var G__17227_17240 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17219_17238,k_17236,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_17237) : f.call(null,v_17237)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17226_17239,G__17227_17240) : cljs.core.reset_BANG_.call(null,G__17226_17239,G__17227_17240));

var G__17241 = seq__17221_17231;
var G__17242 = chunk__17222_17232;
var G__17243 = count__17223_17233;
var G__17244 = (i__17224_17234 + (1));
seq__17221_17231 = G__17241;
chunk__17222_17232 = G__17242;
count__17223_17233 = G__17243;
i__17224_17234 = G__17244;
continue;
} else {
var temp__4425__auto___17245 = cljs.core.seq(seq__17221_17231);
if(temp__4425__auto___17245){
var seq__17221_17246__$1 = temp__4425__auto___17245;
if(cljs.core.chunked_seq_QMARK_(seq__17221_17246__$1)){
var c__5366__auto___17247 = cljs.core.chunk_first(seq__17221_17246__$1);
var G__17248 = cljs.core.chunk_rest(seq__17221_17246__$1);
var G__17249 = c__5366__auto___17247;
var G__17250 = cljs.core.count(c__5366__auto___17247);
var G__17251 = (0);
seq__17221_17231 = G__17248;
chunk__17222_17232 = G__17249;
count__17223_17233 = G__17250;
i__17224_17234 = G__17251;
continue;
} else {
var vec__17228_17252 = cljs.core.first(seq__17221_17246__$1);
var k_17253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17228_17252,(0),null);
var v_17254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17228_17252,(1),null);
var m17219_17255 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17229_17256 = m_atom__13353__auto__;
var G__17230_17257 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17219_17255,k_17253,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_17254) : f.call(null,v_17254)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17229_17256,G__17230_17257) : cljs.core.reset_BANG_.call(null,G__17229_17256,G__17230_17257));

var G__17258 = cljs.core.next(seq__17221_17246__$1);
var G__17259 = null;
var G__17260 = (0);
var G__17261 = (0);
seq__17221_17231 = G__17258;
chunk__17222_17232 = G__17259;
count__17223_17233 = G__17260;
i__17224_17234 = G__17261;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__)));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__13353__auto__ = (function (){var G__17275 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17275) : cljs.core.atom.call(null,G__17275));
})();
var seq__17276_17286 = cljs.core.seq(m);
var chunk__17277_17287 = null;
var count__17278_17288 = (0);
var i__17279_17289 = (0);
while(true){
if((i__17279_17289 < count__17278_17288)){
var vec__17280_17290 = chunk__17277_17287.cljs$core$IIndexed$_nth$arity$2(null,i__17279_17289);
var k_17291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17280_17290,(0),null);
var v_17292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17280_17290,(1),null);
var m17274_17293 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17281_17294 = m_atom__13353__auto__;
var G__17282_17295 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17274_17293,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_17291) : f.call(null,k_17291)),v_17292);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17281_17294,G__17282_17295) : cljs.core.reset_BANG_.call(null,G__17281_17294,G__17282_17295));

var G__17296 = seq__17276_17286;
var G__17297 = chunk__17277_17287;
var G__17298 = count__17278_17288;
var G__17299 = (i__17279_17289 + (1));
seq__17276_17286 = G__17296;
chunk__17277_17287 = G__17297;
count__17278_17288 = G__17298;
i__17279_17289 = G__17299;
continue;
} else {
var temp__4425__auto___17300 = cljs.core.seq(seq__17276_17286);
if(temp__4425__auto___17300){
var seq__17276_17301__$1 = temp__4425__auto___17300;
if(cljs.core.chunked_seq_QMARK_(seq__17276_17301__$1)){
var c__5366__auto___17302 = cljs.core.chunk_first(seq__17276_17301__$1);
var G__17303 = cljs.core.chunk_rest(seq__17276_17301__$1);
var G__17304 = c__5366__auto___17302;
var G__17305 = cljs.core.count(c__5366__auto___17302);
var G__17306 = (0);
seq__17276_17286 = G__17303;
chunk__17277_17287 = G__17304;
count__17278_17288 = G__17305;
i__17279_17289 = G__17306;
continue;
} else {
var vec__17283_17307 = cljs.core.first(seq__17276_17301__$1);
var k_17308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17283_17307,(0),null);
var v_17309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17283_17307,(1),null);
var m17274_17310 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17284_17311 = m_atom__13353__auto__;
var G__17285_17312 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17274_17310,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_17308) : f.call(null,k_17308)),v_17309);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17284_17311,G__17285_17312) : cljs.core.reset_BANG_.call(null,G__17284_17311,G__17285_17312));

var G__17313 = cljs.core.next(seq__17276_17301__$1);
var G__17314 = null;
var G__17315 = (0);
var G__17316 = (0);
seq__17276_17286 = G__17313;
chunk__17277_17287 = G__17314;
count__17278_17288 = G__17315;
i__17279_17289 = G__17316;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__13353__auto__ = (function (){var G__17328 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17328) : cljs.core.atom.call(null,G__17328));
})();
var seq__17329_17337 = cljs.core.seq(ks);
var chunk__17330_17338 = null;
var count__17331_17339 = (0);
var i__17332_17340 = (0);
while(true){
if((i__17332_17340 < count__17331_17339)){
var k_17341 = chunk__17330_17338.cljs$core$IIndexed$_nth$arity$2(null,i__17332_17340);
var m17327_17342 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17333_17343 = m_atom__13353__auto__;
var G__17334_17344 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17327_17342,k_17341,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_17341) : f.call(null,k_17341)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17333_17343,G__17334_17344) : cljs.core.reset_BANG_.call(null,G__17333_17343,G__17334_17344));

var G__17345 = seq__17329_17337;
var G__17346 = chunk__17330_17338;
var G__17347 = count__17331_17339;
var G__17348 = (i__17332_17340 + (1));
seq__17329_17337 = G__17345;
chunk__17330_17338 = G__17346;
count__17331_17339 = G__17347;
i__17332_17340 = G__17348;
continue;
} else {
var temp__4425__auto___17349 = cljs.core.seq(seq__17329_17337);
if(temp__4425__auto___17349){
var seq__17329_17350__$1 = temp__4425__auto___17349;
if(cljs.core.chunked_seq_QMARK_(seq__17329_17350__$1)){
var c__5366__auto___17351 = cljs.core.chunk_first(seq__17329_17350__$1);
var G__17352 = cljs.core.chunk_rest(seq__17329_17350__$1);
var G__17353 = c__5366__auto___17351;
var G__17354 = cljs.core.count(c__5366__auto___17351);
var G__17355 = (0);
seq__17329_17337 = G__17352;
chunk__17330_17338 = G__17353;
count__17331_17339 = G__17354;
i__17332_17340 = G__17355;
continue;
} else {
var k_17356 = cljs.core.first(seq__17329_17350__$1);
var m17327_17357 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17335_17358 = m_atom__13353__auto__;
var G__17336_17359 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17327_17357,k_17356,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_17356) : f.call(null,k_17356)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17335_17358,G__17336_17359) : cljs.core.reset_BANG_.call(null,G__17335_17358,G__17336_17359));

var G__17360 = cljs.core.next(seq__17329_17350__$1);
var G__17361 = null;
var G__17362 = (0);
var G__17363 = (0);
seq__17329_17337 = G__17360;
chunk__17330_17338 = G__17361;
count__17331_17339 = G__17362;
i__17332_17340 = G__17363;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__13353__auto__ = (function (){var G__17375 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17375) : cljs.core.atom.call(null,G__17375));
})();
var seq__17376_17384 = cljs.core.seq(vs);
var chunk__17377_17385 = null;
var count__17378_17386 = (0);
var i__17379_17387 = (0);
while(true){
if((i__17379_17387 < count__17378_17386)){
var v_17388 = chunk__17377_17385.cljs$core$IIndexed$_nth$arity$2(null,i__17379_17387);
var m17374_17389 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17380_17390 = m_atom__13353__auto__;
var G__17381_17391 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17374_17389,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_17388) : f.call(null,v_17388)),v_17388);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17380_17390,G__17381_17391) : cljs.core.reset_BANG_.call(null,G__17380_17390,G__17381_17391));

var G__17392 = seq__17376_17384;
var G__17393 = chunk__17377_17385;
var G__17394 = count__17378_17386;
var G__17395 = (i__17379_17387 + (1));
seq__17376_17384 = G__17392;
chunk__17377_17385 = G__17393;
count__17378_17386 = G__17394;
i__17379_17387 = G__17395;
continue;
} else {
var temp__4425__auto___17396 = cljs.core.seq(seq__17376_17384);
if(temp__4425__auto___17396){
var seq__17376_17397__$1 = temp__4425__auto___17396;
if(cljs.core.chunked_seq_QMARK_(seq__17376_17397__$1)){
var c__5366__auto___17398 = cljs.core.chunk_first(seq__17376_17397__$1);
var G__17399 = cljs.core.chunk_rest(seq__17376_17397__$1);
var G__17400 = c__5366__auto___17398;
var G__17401 = cljs.core.count(c__5366__auto___17398);
var G__17402 = (0);
seq__17376_17384 = G__17399;
chunk__17377_17385 = G__17400;
count__17378_17386 = G__17401;
i__17379_17387 = G__17402;
continue;
} else {
var v_17403 = cljs.core.first(seq__17376_17397__$1);
var m17374_17404 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17382_17405 = m_atom__13353__auto__;
var G__17383_17406 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17374_17404,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_17403) : f.call(null,v_17403)),v_17403);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17382_17405,G__17383_17406) : cljs.core.reset_BANG_.call(null,G__17382_17405,G__17383_17406));

var G__17407 = cljs.core.next(seq__17376_17397__$1);
var G__17408 = null;
var G__17409 = (0);
var G__17410 = (0);
seq__17376_17384 = G__17407;
chunk__17377_17385 = G__17408;
count__17378_17386 = G__17409;
i__17379_17387 = G__17410;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__17411){
var vec__17415 = p__17411;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17415,(0),null);
var ks = cljs.core.nthnext(vec__17415,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__4551__auto__ = ks;
if(cljs.core.truth_(and__4551__auto__)){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__4551__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__13353__auto__ = (function (){var G__17429 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17429) : cljs.core.atom.call(null,G__17429));
})();
var seq__17430_17440 = cljs.core.seq(x);
var chunk__17431_17441 = null;
var count__17432_17442 = (0);
var i__17433_17443 = (0);
while(true){
if((i__17433_17443 < count__17432_17442)){
var vec__17434_17444 = chunk__17431_17441.cljs$core$IIndexed$_nth$arity$2(null,i__17433_17443);
var k_17445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17434_17444,(0),null);
var v_17446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17434_17444,(1),null);
var m17428_17447 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17435_17448 = m_atom__13353__auto__;
var G__17436_17449 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17428_17447,((typeof k_17445 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_17445):k_17445),plumbing$core$keywordize_map(v_17446));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17435_17448,G__17436_17449) : cljs.core.reset_BANG_.call(null,G__17435_17448,G__17436_17449));

var G__17450 = seq__17430_17440;
var G__17451 = chunk__17431_17441;
var G__17452 = count__17432_17442;
var G__17453 = (i__17433_17443 + (1));
seq__17430_17440 = G__17450;
chunk__17431_17441 = G__17451;
count__17432_17442 = G__17452;
i__17433_17443 = G__17453;
continue;
} else {
var temp__4425__auto___17454 = cljs.core.seq(seq__17430_17440);
if(temp__4425__auto___17454){
var seq__17430_17455__$1 = temp__4425__auto___17454;
if(cljs.core.chunked_seq_QMARK_(seq__17430_17455__$1)){
var c__5366__auto___17456 = cljs.core.chunk_first(seq__17430_17455__$1);
var G__17457 = cljs.core.chunk_rest(seq__17430_17455__$1);
var G__17458 = c__5366__auto___17456;
var G__17459 = cljs.core.count(c__5366__auto___17456);
var G__17460 = (0);
seq__17430_17440 = G__17457;
chunk__17431_17441 = G__17458;
count__17432_17442 = G__17459;
i__17433_17443 = G__17460;
continue;
} else {
var vec__17437_17461 = cljs.core.first(seq__17430_17455__$1);
var k_17462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17437_17461,(0),null);
var v_17463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17437_17461,(1),null);
var m17428_17464 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__));
var G__17438_17465 = m_atom__13353__auto__;
var G__17439_17466 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m17428_17464,((typeof k_17462 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_17462):k_17462),plumbing$core$keywordize_map(v_17463));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17438_17465,G__17439_17466) : cljs.core.reset_BANG_.call(null,G__17438_17465,G__17439_17466));

var G__17467 = cljs.core.next(seq__17430_17455__$1);
var G__17468 = null;
var G__17469 = (0);
var G__17470 = (0);
seq__17430_17440 = G__17467;
chunk__17431_17441 = G__17468;
count__17432_17442 = G__17469;
i__17433_17443 = G__17470;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__13353__auto__) : cljs.core.deref.call(null,m_atom__13353__auto__)));
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__13429__auto__ = temp__4423__auto__;
return cljs.core.val(pair__13429__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__17471 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__17472 = cljs.core.next(ks);
m = G__17471;
ks = G__17472;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__5628__auto__ = [];
var len__5621__auto___17485 = arguments.length;
var i__5622__auto___17486 = (0);
while(true){
if((i__5622__auto___17486 < len__5621__auto___17485)){
args__5628__auto__.push((arguments[i__5622__auto___17486]));

var G__17487 = (i__5622__auto___17486 + (1));
i__5622__auto___17486 = G__17487;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4563__auto__ = m;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5335__auto__ = (function plumbing$core$iter__17475(s__17476){
return (new cljs.core.LazySeq(null,(function (){
var s__17476__$1 = s__17476;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17476__$1);
if(temp__4425__auto__){
var s__17476__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17476__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__17476__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__17478 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__17477 = (0);
while(true){
if((i__17477 < size__5334__auto__)){
var vec__17483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__17477);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__17478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__17488 = (i__17477 + (1));
i__17477 = G__17488;
continue;
} else {
var G__17489 = (i__17477 + (1));
i__17477 = G__17489;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17478),plumbing$core$iter__17475(cljs.core.chunk_rest(s__17476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17478),null);
}
} else {
var vec__17484 = cljs.core.first(s__17476__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17484,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__17475(cljs.core.rest(s__17476__$2)));
} else {
var G__17490 = cljs.core.rest(s__17476__$2);
s__17476__$1 = G__17490;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq17473){
var G__17474 = cljs.core.first(seq17473);
var seq17473__$1 = cljs.core.next(seq17473);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__17474,seq17473__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__5628__auto__ = [];
var len__5621__auto___17495 = arguments.length;
var i__5622__auto___17496 = (0);
while(true){
if((i__5622__auto___17496 < len__5621__auto___17495)){
args__5628__auto__.push((arguments[i__5622__auto___17496]));

var G__17497 = (i__5622__auto___17496 + (1));
i__5622__auto___17496 = G__17497;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((3) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5629__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq17491){
var G__17492 = cljs.core.first(seq17491);
var seq17491__$1 = cljs.core.next(seq17491);
var G__17493 = cljs.core.first(seq17491__$1);
var seq17491__$2 = cljs.core.next(seq17491__$1);
var G__17494 = cljs.core.first(seq17491__$2);
var seq17491__$3 = cljs.core.next(seq17491__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__17492,G__17493,G__17494,seq17491__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next(s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args17499 = [];
var len__5621__auto___17502 = arguments.length;
var i__5622__auto___17503 = (0);
while(true){
if((i__5622__auto___17503 < len__5621__auto___17502)){
args17499.push((arguments[i__5622__auto___17503]));

var G__17504 = (i__5622__auto___17503 + (1));
i__5622__auto___17503 = G__17504;
continue;
} else {
}
break;
}

var G__17501 = args17499.length;
switch (G__17501) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17499.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq(xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__17513 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17513) : cljs.core.atom.call(null,G__17513));
})();
var iter__5335__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__17514(s__17515){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__17515__$1 = s__17515;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17515__$1);
if(temp__4425__auto__){
var s__17515__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17515__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__17515__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__17517 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__17516 = (0);
while(true){
if((i__17516 < size__5334__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__17516);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__17517,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__17520 = (i__17516 + (1));
i__17516 = G__17520;
continue;
} else {
var G__17521 = (i__17516 + (1));
i__17516 = G__17521;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17517),plumbing$core$distinct_by_$_iter__17514(cljs.core.chunk_rest(s__17515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17517),null);
}
} else {
var x = cljs.core.first(s__17515__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__17514(cljs.core.rest(s__17515__$2)));
} else {
var G__17522 = cljs.core.rest(s__17515__$2);
s__17515__$1 = G__17522;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__5335__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__5628__auto__ = [];
var len__5621__auto___17525 = arguments.length;
var i__5622__auto___17526 = (0);
while(true){
if((i__5622__auto___17526 < len__5621__auto___17525)){
args__5628__auto__.push((arguments[i__5622__auto___17526]));

var G__17527 = (i__5622__auto___17526 + (1));
i__5622__auto___17526 = G__17527;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq17523){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17523));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args17528 = [];
var len__5621__auto___17534 = arguments.length;
var i__5622__auto___17535 = (0);
while(true){
if((i__5622__auto___17535 < len__5621__auto___17534)){
args17528.push((arguments[i__5622__auto___17535]));

var G__17536 = (i__5622__auto___17535 + (1));
i__5622__auto___17535 = G__17536;
continue;
} else {
}
break;
}

var G__17533 = args17528.length;
switch (G__17533) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args17528.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5640__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__17538 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__17539 = cljs.core.first(xs);
var G__17540 = cljs.core.next(xs);
coll = G__17538;
x = G__17539;
xs = G__17540;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq17529){
var G__17530 = cljs.core.first(seq17529);
var seq17529__$1 = cljs.core.next(seq17529);
var G__17531 = cljs.core.first(seq17529__$1);
var seq17529__$2 = cljs.core.next(seq17529__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__17530,G__17531,seq17529__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args17542 = [];
var len__5621__auto___17548 = arguments.length;
var i__5622__auto___17549 = (0);
while(true){
if((i__5622__auto___17549 < len__5621__auto___17548)){
args17542.push((arguments[i__5622__auto___17549]));

var G__17550 = (i__5622__auto___17549 + (1));
i__5622__auto___17549 = G__17550;
continue;
} else {
}
break;
}

var G__17547 = args17542.length;
switch (G__17547) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args17542.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5640__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__17541_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__17541_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq17543){
var G__17544 = cljs.core.first(seq17543);
var seq17543__$1 = cljs.core.next(seq17543);
var G__17545 = cljs.core.first(seq17543__$1);
var seq17543__$2 = cljs.core.next(seq17543__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17544,G__17545,seq17543__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args17552 = [];
var len__5621__auto___17558 = arguments.length;
var i__5622__auto___17559 = (0);
while(true){
if((i__5622__auto___17559 < len__5621__auto___17558)){
args17552.push((arguments[i__5622__auto___17559]));

var G__17560 = (i__5622__auto___17559 + (1));
i__5622__auto___17559 = G__17560;
continue;
} else {
}
break;
}

var G__17557 = args17552.length;
switch (G__17557) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args17552.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5640__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq17553){
var G__17554 = cljs.core.first(seq17553);
var seq17553__$1 = cljs.core.next(seq17553);
var G__17555 = cljs.core.first(seq17553__$1);
var seq17553__$2 = cljs.core.next(seq17553__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__17554,G__17555,seq17553__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);
