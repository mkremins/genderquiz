// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__4563__auto__ = (cljs.core.count(attr) < (5));
if(or__4563__auto__){
return or__4563__auto__;
} else {
var G__14481 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__14481) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__14484 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__14484) {
case "class":
return cljs.core.cst$kw$className;

break;
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
om_tools.dom.format_opts;
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(opt_val) : om_tools.dom.format_opts.call(null,opt_val));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14488){
var vec__14489 = p__14488;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14489,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__4563__auto__ = React.isValidElement;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__14491 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args14492 = [];
var len__5621__auto___15117 = arguments.length;
var i__5622__auto___15118 = (0);
while(true){
if((i__5622__auto___15118 < len__5621__auto___15117)){
args14492.push((arguments[i__5622__auto___15118]));

var G__15119 = (i__5622__auto___15118 + (1));
i__5622__auto___15118 = G__15119;
continue;
} else {
}
break;
}

var G__14496 = args14492.length;
switch (G__14496) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14492.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.a,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq14493){
var G__14494 = cljs.core.first(seq14493);
var seq14493__$1 = cljs.core.next(seq14493);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__14494,seq14493__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args14497 = [];
var len__5621__auto___15121 = arguments.length;
var i__5622__auto___15122 = (0);
while(true){
if((i__5622__auto___15122 < len__5621__auto___15121)){
args14497.push((arguments[i__5622__auto___15122]));

var G__15123 = (i__5622__auto___15122 + (1));
i__5622__auto___15122 = G__15123;
continue;
} else {
}
break;
}

var G__14501 = args14497.length;
switch (G__14501) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14497.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq14498){
var G__14499 = cljs.core.first(seq14498);
var seq14498__$1 = cljs.core.next(seq14498);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__14499,seq14498__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args14502 = [];
var len__5621__auto___15125 = arguments.length;
var i__5622__auto___15126 = (0);
while(true){
if((i__5622__auto___15126 < len__5621__auto___15125)){
args14502.push((arguments[i__5622__auto___15126]));

var G__15127 = (i__5622__auto___15126 + (1));
i__5622__auto___15126 = G__15127;
continue;
} else {
}
break;
}

var G__14506 = args14502.length;
switch (G__14506) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14502.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.address,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq14503){
var G__14504 = cljs.core.first(seq14503);
var seq14503__$1 = cljs.core.next(seq14503);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__14504,seq14503__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args14507 = [];
var len__5621__auto___15129 = arguments.length;
var i__5622__auto___15130 = (0);
while(true){
if((i__5622__auto___15130 < len__5621__auto___15129)){
args14507.push((arguments[i__5622__auto___15130]));

var G__15131 = (i__5622__auto___15130 + (1));
i__5622__auto___15130 = G__15131;
continue;
} else {
}
break;
}

var G__14511 = args14507.length;
switch (G__14511) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14507.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.area,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq14508){
var G__14509 = cljs.core.first(seq14508);
var seq14508__$1 = cljs.core.next(seq14508);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__14509,seq14508__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args14512 = [];
var len__5621__auto___15133 = arguments.length;
var i__5622__auto___15134 = (0);
while(true){
if((i__5622__auto___15134 < len__5621__auto___15133)){
args14512.push((arguments[i__5622__auto___15134]));

var G__15135 = (i__5622__auto___15134 + (1));
i__5622__auto___15134 = G__15135;
continue;
} else {
}
break;
}

var G__14516 = args14512.length;
switch (G__14516) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14512.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.article,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq14513){
var G__14514 = cljs.core.first(seq14513);
var seq14513__$1 = cljs.core.next(seq14513);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__14514,seq14513__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args14517 = [];
var len__5621__auto___15137 = arguments.length;
var i__5622__auto___15138 = (0);
while(true){
if((i__5622__auto___15138 < len__5621__auto___15137)){
args14517.push((arguments[i__5622__auto___15138]));

var G__15139 = (i__5622__auto___15138 + (1));
i__5622__auto___15138 = G__15139;
continue;
} else {
}
break;
}

var G__14521 = args14517.length;
switch (G__14521) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14517.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.aside,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq14518){
var G__14519 = cljs.core.first(seq14518);
var seq14518__$1 = cljs.core.next(seq14518);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__14519,seq14518__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args14522 = [];
var len__5621__auto___15141 = arguments.length;
var i__5622__auto___15142 = (0);
while(true){
if((i__5622__auto___15142 < len__5621__auto___15141)){
args14522.push((arguments[i__5622__auto___15142]));

var G__15143 = (i__5622__auto___15142 + (1));
i__5622__auto___15142 = G__15143;
continue;
} else {
}
break;
}

var G__14526 = args14522.length;
switch (G__14526) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14522.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.audio,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq14523){
var G__14524 = cljs.core.first(seq14523);
var seq14523__$1 = cljs.core.next(seq14523);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__14524,seq14523__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args14527 = [];
var len__5621__auto___15145 = arguments.length;
var i__5622__auto___15146 = (0);
while(true){
if((i__5622__auto___15146 < len__5621__auto___15145)){
args14527.push((arguments[i__5622__auto___15146]));

var G__15147 = (i__5622__auto___15146 + (1));
i__5622__auto___15146 = G__15147;
continue;
} else {
}
break;
}

var G__14531 = args14527.length;
switch (G__14531) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14527.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.b,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq14528){
var G__14529 = cljs.core.first(seq14528);
var seq14528__$1 = cljs.core.next(seq14528);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__14529,seq14528__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args14532 = [];
var len__5621__auto___15149 = arguments.length;
var i__5622__auto___15150 = (0);
while(true){
if((i__5622__auto___15150 < len__5621__auto___15149)){
args14532.push((arguments[i__5622__auto___15150]));

var G__15151 = (i__5622__auto___15150 + (1));
i__5622__auto___15150 = G__15151;
continue;
} else {
}
break;
}

var G__14536 = args14532.length;
switch (G__14536) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14532.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.base,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq14533){
var G__14534 = cljs.core.first(seq14533);
var seq14533__$1 = cljs.core.next(seq14533);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__14534,seq14533__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args14537 = [];
var len__5621__auto___15153 = arguments.length;
var i__5622__auto___15154 = (0);
while(true){
if((i__5622__auto___15154 < len__5621__auto___15153)){
args14537.push((arguments[i__5622__auto___15154]));

var G__15155 = (i__5622__auto___15154 + (1));
i__5622__auto___15154 = G__15155;
continue;
} else {
}
break;
}

var G__14541 = args14537.length;
switch (G__14541) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14537.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq14538){
var G__14539 = cljs.core.first(seq14538);
var seq14538__$1 = cljs.core.next(seq14538);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__14539,seq14538__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args14542 = [];
var len__5621__auto___15157 = arguments.length;
var i__5622__auto___15158 = (0);
while(true){
if((i__5622__auto___15158 < len__5621__auto___15157)){
args14542.push((arguments[i__5622__auto___15158]));

var G__15159 = (i__5622__auto___15158 + (1));
i__5622__auto___15158 = G__15159;
continue;
} else {
}
break;
}

var G__14546 = args14542.length;
switch (G__14546) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14542.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq14543){
var G__14544 = cljs.core.first(seq14543);
var seq14543__$1 = cljs.core.next(seq14543);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__14544,seq14543__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args14547 = [];
var len__5621__auto___15161 = arguments.length;
var i__5622__auto___15162 = (0);
while(true){
if((i__5622__auto___15162 < len__5621__auto___15161)){
args14547.push((arguments[i__5622__auto___15162]));

var G__15163 = (i__5622__auto___15162 + (1));
i__5622__auto___15162 = G__15163;
continue;
} else {
}
break;
}

var G__14551 = args14547.length;
switch (G__14551) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14547.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.big,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq14548){
var G__14549 = cljs.core.first(seq14548);
var seq14548__$1 = cljs.core.next(seq14548);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__14549,seq14548__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args14552 = [];
var len__5621__auto___15165 = arguments.length;
var i__5622__auto___15166 = (0);
while(true){
if((i__5622__auto___15166 < len__5621__auto___15165)){
args14552.push((arguments[i__5622__auto___15166]));

var G__15167 = (i__5622__auto___15166 + (1));
i__5622__auto___15166 = G__15167;
continue;
} else {
}
break;
}

var G__14556 = args14552.length;
switch (G__14556) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14552.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq14553){
var G__14554 = cljs.core.first(seq14553);
var seq14553__$1 = cljs.core.next(seq14553);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__14554,seq14553__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args14557 = [];
var len__5621__auto___15169 = arguments.length;
var i__5622__auto___15170 = (0);
while(true){
if((i__5622__auto___15170 < len__5621__auto___15169)){
args14557.push((arguments[i__5622__auto___15170]));

var G__15171 = (i__5622__auto___15170 + (1));
i__5622__auto___15170 = G__15171;
continue;
} else {
}
break;
}

var G__14561 = args14557.length;
switch (G__14561) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14557.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.body,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq14558){
var G__14559 = cljs.core.first(seq14558);
var seq14558__$1 = cljs.core.next(seq14558);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__14559,seq14558__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args14562 = [];
var len__5621__auto___15173 = arguments.length;
var i__5622__auto___15174 = (0);
while(true){
if((i__5622__auto___15174 < len__5621__auto___15173)){
args14562.push((arguments[i__5622__auto___15174]));

var G__15175 = (i__5622__auto___15174 + (1));
i__5622__auto___15174 = G__15175;
continue;
} else {
}
break;
}

var G__14566 = args14562.length;
switch (G__14566) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14562.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.br,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq14563){
var G__14564 = cljs.core.first(seq14563);
var seq14563__$1 = cljs.core.next(seq14563);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__14564,seq14563__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args14567 = [];
var len__5621__auto___15177 = arguments.length;
var i__5622__auto___15178 = (0);
while(true){
if((i__5622__auto___15178 < len__5621__auto___15177)){
args14567.push((arguments[i__5622__auto___15178]));

var G__15179 = (i__5622__auto___15178 + (1));
i__5622__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var G__14571 = args14567.length;
switch (G__14571) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14567.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.button,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq14568){
var G__14569 = cljs.core.first(seq14568);
var seq14568__$1 = cljs.core.next(seq14568);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__14569,seq14568__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args14572 = [];
var len__5621__auto___15181 = arguments.length;
var i__5622__auto___15182 = (0);
while(true){
if((i__5622__auto___15182 < len__5621__auto___15181)){
args14572.push((arguments[i__5622__auto___15182]));

var G__15183 = (i__5622__auto___15182 + (1));
i__5622__auto___15182 = G__15183;
continue;
} else {
}
break;
}

var G__14576 = args14572.length;
switch (G__14576) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14572.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq14573){
var G__14574 = cljs.core.first(seq14573);
var seq14573__$1 = cljs.core.next(seq14573);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__14574,seq14573__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args14577 = [];
var len__5621__auto___15185 = arguments.length;
var i__5622__auto___15186 = (0);
while(true){
if((i__5622__auto___15186 < len__5621__auto___15185)){
args14577.push((arguments[i__5622__auto___15186]));

var G__15187 = (i__5622__auto___15186 + (1));
i__5622__auto___15186 = G__15187;
continue;
} else {
}
break;
}

var G__14581 = args14577.length;
switch (G__14581) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14577.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.caption,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq14578){
var G__14579 = cljs.core.first(seq14578);
var seq14578__$1 = cljs.core.next(seq14578);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__14579,seq14578__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args14582 = [];
var len__5621__auto___15189 = arguments.length;
var i__5622__auto___15190 = (0);
while(true){
if((i__5622__auto___15190 < len__5621__auto___15189)){
args14582.push((arguments[i__5622__auto___15190]));

var G__15191 = (i__5622__auto___15190 + (1));
i__5622__auto___15190 = G__15191;
continue;
} else {
}
break;
}

var G__14586 = args14582.length;
switch (G__14586) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14582.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.cite,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq14583){
var G__14584 = cljs.core.first(seq14583);
var seq14583__$1 = cljs.core.next(seq14583);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__14584,seq14583__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args14587 = [];
var len__5621__auto___15193 = arguments.length;
var i__5622__auto___15194 = (0);
while(true){
if((i__5622__auto___15194 < len__5621__auto___15193)){
args14587.push((arguments[i__5622__auto___15194]));

var G__15195 = (i__5622__auto___15194 + (1));
i__5622__auto___15194 = G__15195;
continue;
} else {
}
break;
}

var G__14591 = args14587.length;
switch (G__14591) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14587.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.code,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq14588){
var G__14589 = cljs.core.first(seq14588);
var seq14588__$1 = cljs.core.next(seq14588);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__14589,seq14588__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args14592 = [];
var len__5621__auto___15197 = arguments.length;
var i__5622__auto___15198 = (0);
while(true){
if((i__5622__auto___15198 < len__5621__auto___15197)){
args14592.push((arguments[i__5622__auto___15198]));

var G__15199 = (i__5622__auto___15198 + (1));
i__5622__auto___15198 = G__15199;
continue;
} else {
}
break;
}

var G__14596 = args14592.length;
switch (G__14596) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14592.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.col,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq14593){
var G__14594 = cljs.core.first(seq14593);
var seq14593__$1 = cljs.core.next(seq14593);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__14594,seq14593__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args14597 = [];
var len__5621__auto___15201 = arguments.length;
var i__5622__auto___15202 = (0);
while(true){
if((i__5622__auto___15202 < len__5621__auto___15201)){
args14597.push((arguments[i__5622__auto___15202]));

var G__15203 = (i__5622__auto___15202 + (1));
i__5622__auto___15202 = G__15203;
continue;
} else {
}
break;
}

var G__14601 = args14597.length;
switch (G__14601) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14597.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq14598){
var G__14599 = cljs.core.first(seq14598);
var seq14598__$1 = cljs.core.next(seq14598);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__14599,seq14598__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args14602 = [];
var len__5621__auto___15205 = arguments.length;
var i__5622__auto___15206 = (0);
while(true){
if((i__5622__auto___15206 < len__5621__auto___15205)){
args14602.push((arguments[i__5622__auto___15206]));

var G__15207 = (i__5622__auto___15206 + (1));
i__5622__auto___15206 = G__15207;
continue;
} else {
}
break;
}

var G__14606 = args14602.length;
switch (G__14606) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14602.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.data,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq14603){
var G__14604 = cljs.core.first(seq14603);
var seq14603__$1 = cljs.core.next(seq14603);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__14604,seq14603__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args14607 = [];
var len__5621__auto___15209 = arguments.length;
var i__5622__auto___15210 = (0);
while(true){
if((i__5622__auto___15210 < len__5621__auto___15209)){
args14607.push((arguments[i__5622__auto___15210]));

var G__15211 = (i__5622__auto___15210 + (1));
i__5622__auto___15210 = G__15211;
continue;
} else {
}
break;
}

var G__14611 = args14607.length;
switch (G__14611) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14607.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq14608){
var G__14609 = cljs.core.first(seq14608);
var seq14608__$1 = cljs.core.next(seq14608);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__14609,seq14608__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args14612 = [];
var len__5621__auto___15213 = arguments.length;
var i__5622__auto___15214 = (0);
while(true){
if((i__5622__auto___15214 < len__5621__auto___15213)){
args14612.push((arguments[i__5622__auto___15214]));

var G__15215 = (i__5622__auto___15214 + (1));
i__5622__auto___15214 = G__15215;
continue;
} else {
}
break;
}

var G__14616 = args14612.length;
switch (G__14616) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14612.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.dd,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq14613){
var G__14614 = cljs.core.first(seq14613);
var seq14613__$1 = cljs.core.next(seq14613);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__14614,seq14613__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args14617 = [];
var len__5621__auto___15217 = arguments.length;
var i__5622__auto___15218 = (0);
while(true){
if((i__5622__auto___15218 < len__5621__auto___15217)){
args14617.push((arguments[i__5622__auto___15218]));

var G__15219 = (i__5622__auto___15218 + (1));
i__5622__auto___15218 = G__15219;
continue;
} else {
}
break;
}

var G__14621 = args14617.length;
switch (G__14621) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14617.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.del,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq14618){
var G__14619 = cljs.core.first(seq14618);
var seq14618__$1 = cljs.core.next(seq14618);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__14619,seq14618__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args14622 = [];
var len__5621__auto___15221 = arguments.length;
var i__5622__auto___15222 = (0);
while(true){
if((i__5622__auto___15222 < len__5621__auto___15221)){
args14622.push((arguments[i__5622__auto___15222]));

var G__15223 = (i__5622__auto___15222 + (1));
i__5622__auto___15222 = G__15223;
continue;
} else {
}
break;
}

var G__14626 = args14622.length;
switch (G__14626) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14622.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq14623){
var G__14624 = cljs.core.first(seq14623);
var seq14623__$1 = cljs.core.next(seq14623);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__14624,seq14623__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args14627 = [];
var len__5621__auto___15225 = arguments.length;
var i__5622__auto___15226 = (0);
while(true){
if((i__5622__auto___15226 < len__5621__auto___15225)){
args14627.push((arguments[i__5622__auto___15226]));

var G__15227 = (i__5622__auto___15226 + (1));
i__5622__auto___15226 = G__15227;
continue;
} else {
}
break;
}

var G__14631 = args14627.length;
switch (G__14631) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14627.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.div,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq14628){
var G__14629 = cljs.core.first(seq14628);
var seq14628__$1 = cljs.core.next(seq14628);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__14629,seq14628__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args14632 = [];
var len__5621__auto___15229 = arguments.length;
var i__5622__auto___15230 = (0);
while(true){
if((i__5622__auto___15230 < len__5621__auto___15229)){
args14632.push((arguments[i__5622__auto___15230]));

var G__15231 = (i__5622__auto___15230 + (1));
i__5622__auto___15230 = G__15231;
continue;
} else {
}
break;
}

var G__14636 = args14632.length;
switch (G__14636) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14632.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.dl,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq14633){
var G__14634 = cljs.core.first(seq14633);
var seq14633__$1 = cljs.core.next(seq14633);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__14634,seq14633__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args14637 = [];
var len__5621__auto___15233 = arguments.length;
var i__5622__auto___15234 = (0);
while(true){
if((i__5622__auto___15234 < len__5621__auto___15233)){
args14637.push((arguments[i__5622__auto___15234]));

var G__15235 = (i__5622__auto___15234 + (1));
i__5622__auto___15234 = G__15235;
continue;
} else {
}
break;
}

var G__14641 = args14637.length;
switch (G__14641) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14637.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.dt,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq14638){
var G__14639 = cljs.core.first(seq14638);
var seq14638__$1 = cljs.core.next(seq14638);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__14639,seq14638__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args14642 = [];
var len__5621__auto___15237 = arguments.length;
var i__5622__auto___15238 = (0);
while(true){
if((i__5622__auto___15238 < len__5621__auto___15237)){
args14642.push((arguments[i__5622__auto___15238]));

var G__15239 = (i__5622__auto___15238 + (1));
i__5622__auto___15238 = G__15239;
continue;
} else {
}
break;
}

var G__14646 = args14642.length;
switch (G__14646) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14642.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.em,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq14643){
var G__14644 = cljs.core.first(seq14643);
var seq14643__$1 = cljs.core.next(seq14643);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__14644,seq14643__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args14647 = [];
var len__5621__auto___15241 = arguments.length;
var i__5622__auto___15242 = (0);
while(true){
if((i__5622__auto___15242 < len__5621__auto___15241)){
args14647.push((arguments[i__5622__auto___15242]));

var G__15243 = (i__5622__auto___15242 + (1));
i__5622__auto___15242 = G__15243;
continue;
} else {
}
break;
}

var G__14651 = args14647.length;
switch (G__14651) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14647.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.embed,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq14648){
var G__14649 = cljs.core.first(seq14648);
var seq14648__$1 = cljs.core.next(seq14648);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__14649,seq14648__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args14657 = [];
var len__5621__auto___15245 = arguments.length;
var i__5622__auto___15246 = (0);
while(true){
if((i__5622__auto___15246 < len__5621__auto___15245)){
args14657.push((arguments[i__5622__auto___15246]));

var G__15247 = (i__5622__auto___15246 + (1));
i__5622__auto___15246 = G__15247;
continue;
} else {
}
break;
}

var G__14661 = args14657.length;
switch (G__14661) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14657.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq14658){
var G__14659 = cljs.core.first(seq14658);
var seq14658__$1 = cljs.core.next(seq14658);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__14659,seq14658__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args14662 = [];
var len__5621__auto___15249 = arguments.length;
var i__5622__auto___15250 = (0);
while(true){
if((i__5622__auto___15250 < len__5621__auto___15249)){
args14662.push((arguments[i__5622__auto___15250]));

var G__15251 = (i__5622__auto___15250 + (1));
i__5622__auto___15250 = G__15251;
continue;
} else {
}
break;
}

var G__14666 = args14662.length;
switch (G__14666) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14662.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq14663){
var G__14664 = cljs.core.first(seq14663);
var seq14663__$1 = cljs.core.next(seq14663);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__14664,seq14663__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args14667 = [];
var len__5621__auto___15253 = arguments.length;
var i__5622__auto___15254 = (0);
while(true){
if((i__5622__auto___15254 < len__5621__auto___15253)){
args14667.push((arguments[i__5622__auto___15254]));

var G__15255 = (i__5622__auto___15254 + (1));
i__5622__auto___15254 = G__15255;
continue;
} else {
}
break;
}

var G__14671 = args14667.length;
switch (G__14671) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14667.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.figure,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq14668){
var G__14669 = cljs.core.first(seq14668);
var seq14668__$1 = cljs.core.next(seq14668);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__14669,seq14668__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args14672 = [];
var len__5621__auto___15257 = arguments.length;
var i__5622__auto___15258 = (0);
while(true){
if((i__5622__auto___15258 < len__5621__auto___15257)){
args14672.push((arguments[i__5622__auto___15258]));

var G__15259 = (i__5622__auto___15258 + (1));
i__5622__auto___15258 = G__15259;
continue;
} else {
}
break;
}

var G__14676 = args14672.length;
switch (G__14676) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14672.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.footer,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq14673){
var G__14674 = cljs.core.first(seq14673);
var seq14673__$1 = cljs.core.next(seq14673);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__14674,seq14673__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args14677 = [];
var len__5621__auto___15261 = arguments.length;
var i__5622__auto___15262 = (0);
while(true){
if((i__5622__auto___15262 < len__5621__auto___15261)){
args14677.push((arguments[i__5622__auto___15262]));

var G__15263 = (i__5622__auto___15262 + (1));
i__5622__auto___15262 = G__15263;
continue;
} else {
}
break;
}

var G__14681 = args14677.length;
switch (G__14681) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14677.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.form,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq14678){
var G__14679 = cljs.core.first(seq14678);
var seq14678__$1 = cljs.core.next(seq14678);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__14679,seq14678__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args14682 = [];
var len__5621__auto___15265 = arguments.length;
var i__5622__auto___15266 = (0);
while(true){
if((i__5622__auto___15266 < len__5621__auto___15265)){
args14682.push((arguments[i__5622__auto___15266]));

var G__15267 = (i__5622__auto___15266 + (1));
i__5622__auto___15266 = G__15267;
continue;
} else {
}
break;
}

var G__14686 = args14682.length;
switch (G__14686) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14682.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.h1,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq14683){
var G__14684 = cljs.core.first(seq14683);
var seq14683__$1 = cljs.core.next(seq14683);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__14684,seq14683__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args14687 = [];
var len__5621__auto___15269 = arguments.length;
var i__5622__auto___15270 = (0);
while(true){
if((i__5622__auto___15270 < len__5621__auto___15269)){
args14687.push((arguments[i__5622__auto___15270]));

var G__15271 = (i__5622__auto___15270 + (1));
i__5622__auto___15270 = G__15271;
continue;
} else {
}
break;
}

var G__14691 = args14687.length;
switch (G__14691) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14687.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.h2,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq14688){
var G__14689 = cljs.core.first(seq14688);
var seq14688__$1 = cljs.core.next(seq14688);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__14689,seq14688__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args14692 = [];
var len__5621__auto___15273 = arguments.length;
var i__5622__auto___15274 = (0);
while(true){
if((i__5622__auto___15274 < len__5621__auto___15273)){
args14692.push((arguments[i__5622__auto___15274]));

var G__15275 = (i__5622__auto___15274 + (1));
i__5622__auto___15274 = G__15275;
continue;
} else {
}
break;
}

var G__14696 = args14692.length;
switch (G__14696) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14692.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.h3,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq14693){
var G__14694 = cljs.core.first(seq14693);
var seq14693__$1 = cljs.core.next(seq14693);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__14694,seq14693__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args14697 = [];
var len__5621__auto___15277 = arguments.length;
var i__5622__auto___15278 = (0);
while(true){
if((i__5622__auto___15278 < len__5621__auto___15277)){
args14697.push((arguments[i__5622__auto___15278]));

var G__15279 = (i__5622__auto___15278 + (1));
i__5622__auto___15278 = G__15279;
continue;
} else {
}
break;
}

var G__14701 = args14697.length;
switch (G__14701) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14697.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.h4,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq14698){
var G__14699 = cljs.core.first(seq14698);
var seq14698__$1 = cljs.core.next(seq14698);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__14699,seq14698__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args14702 = [];
var len__5621__auto___15281 = arguments.length;
var i__5622__auto___15282 = (0);
while(true){
if((i__5622__auto___15282 < len__5621__auto___15281)){
args14702.push((arguments[i__5622__auto___15282]));

var G__15283 = (i__5622__auto___15282 + (1));
i__5622__auto___15282 = G__15283;
continue;
} else {
}
break;
}

var G__14706 = args14702.length;
switch (G__14706) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14702.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.h5,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq14703){
var G__14704 = cljs.core.first(seq14703);
var seq14703__$1 = cljs.core.next(seq14703);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__14704,seq14703__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args14707 = [];
var len__5621__auto___15285 = arguments.length;
var i__5622__auto___15286 = (0);
while(true){
if((i__5622__auto___15286 < len__5621__auto___15285)){
args14707.push((arguments[i__5622__auto___15286]));

var G__15287 = (i__5622__auto___15286 + (1));
i__5622__auto___15286 = G__15287;
continue;
} else {
}
break;
}

var G__14711 = args14707.length;
switch (G__14711) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14707.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.h6,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq14708){
var G__14709 = cljs.core.first(seq14708);
var seq14708__$1 = cljs.core.next(seq14708);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__14709,seq14708__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args14712 = [];
var len__5621__auto___15289 = arguments.length;
var i__5622__auto___15290 = (0);
while(true){
if((i__5622__auto___15290 < len__5621__auto___15289)){
args14712.push((arguments[i__5622__auto___15290]));

var G__15291 = (i__5622__auto___15290 + (1));
i__5622__auto___15290 = G__15291;
continue;
} else {
}
break;
}

var G__14716 = args14712.length;
switch (G__14716) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14712.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.head,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq14713){
var G__14714 = cljs.core.first(seq14713);
var seq14713__$1 = cljs.core.next(seq14713);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__14714,seq14713__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args14717 = [];
var len__5621__auto___15293 = arguments.length;
var i__5622__auto___15294 = (0);
while(true){
if((i__5622__auto___15294 < len__5621__auto___15293)){
args14717.push((arguments[i__5622__auto___15294]));

var G__15295 = (i__5622__auto___15294 + (1));
i__5622__auto___15294 = G__15295;
continue;
} else {
}
break;
}

var G__14721 = args14717.length;
switch (G__14721) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14717.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.header,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq14718){
var G__14719 = cljs.core.first(seq14718);
var seq14718__$1 = cljs.core.next(seq14718);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__14719,seq14718__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args14722 = [];
var len__5621__auto___15297 = arguments.length;
var i__5622__auto___15298 = (0);
while(true){
if((i__5622__auto___15298 < len__5621__auto___15297)){
args14722.push((arguments[i__5622__auto___15298]));

var G__15299 = (i__5622__auto___15298 + (1));
i__5622__auto___15298 = G__15299;
continue;
} else {
}
break;
}

var G__14726 = args14722.length;
switch (G__14726) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14722.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.hr,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq14723){
var G__14724 = cljs.core.first(seq14723);
var seq14723__$1 = cljs.core.next(seq14723);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__14724,seq14723__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args14727 = [];
var len__5621__auto___15301 = arguments.length;
var i__5622__auto___15302 = (0);
while(true){
if((i__5622__auto___15302 < len__5621__auto___15301)){
args14727.push((arguments[i__5622__auto___15302]));

var G__15303 = (i__5622__auto___15302 + (1));
i__5622__auto___15302 = G__15303;
continue;
} else {
}
break;
}

var G__14731 = args14727.length;
switch (G__14731) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14727.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.html,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq14728){
var G__14729 = cljs.core.first(seq14728);
var seq14728__$1 = cljs.core.next(seq14728);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__14729,seq14728__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args14732 = [];
var len__5621__auto___15305 = arguments.length;
var i__5622__auto___15306 = (0);
while(true){
if((i__5622__auto___15306 < len__5621__auto___15305)){
args14732.push((arguments[i__5622__auto___15306]));

var G__15307 = (i__5622__auto___15306 + (1));
i__5622__auto___15306 = G__15307;
continue;
} else {
}
break;
}

var G__14736 = args14732.length;
switch (G__14736) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14732.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.i,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq14733){
var G__14734 = cljs.core.first(seq14733);
var seq14733__$1 = cljs.core.next(seq14733);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__14734,seq14733__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args14737 = [];
var len__5621__auto___15309 = arguments.length;
var i__5622__auto___15310 = (0);
while(true){
if((i__5622__auto___15310 < len__5621__auto___15309)){
args14737.push((arguments[i__5622__auto___15310]));

var G__15311 = (i__5622__auto___15310 + (1));
i__5622__auto___15310 = G__15311;
continue;
} else {
}
break;
}

var G__14741 = args14737.length;
switch (G__14741) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14737.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq14738){
var G__14739 = cljs.core.first(seq14738);
var seq14738__$1 = cljs.core.next(seq14738);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__14739,seq14738__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args14742 = [];
var len__5621__auto___15313 = arguments.length;
var i__5622__auto___15314 = (0);
while(true){
if((i__5622__auto___15314 < len__5621__auto___15313)){
args14742.push((arguments[i__5622__auto___15314]));

var G__15315 = (i__5622__auto___15314 + (1));
i__5622__auto___15314 = G__15315;
continue;
} else {
}
break;
}

var G__14746 = args14742.length;
switch (G__14746) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14742.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.img,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq14743){
var G__14744 = cljs.core.first(seq14743);
var seq14743__$1 = cljs.core.next(seq14743);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__14744,seq14743__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args14747 = [];
var len__5621__auto___15317 = arguments.length;
var i__5622__auto___15318 = (0);
while(true){
if((i__5622__auto___15318 < len__5621__auto___15317)){
args14747.push((arguments[i__5622__auto___15318]));

var G__15319 = (i__5622__auto___15318 + (1));
i__5622__auto___15318 = G__15319;
continue;
} else {
}
break;
}

var G__14751 = args14747.length;
switch (G__14751) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14747.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.ins,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq14748){
var G__14749 = cljs.core.first(seq14748);
var seq14748__$1 = cljs.core.next(seq14748);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__14749,seq14748__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args14752 = [];
var len__5621__auto___15321 = arguments.length;
var i__5622__auto___15322 = (0);
while(true){
if((i__5622__auto___15322 < len__5621__auto___15321)){
args14752.push((arguments[i__5622__auto___15322]));

var G__15323 = (i__5622__auto___15322 + (1));
i__5622__auto___15322 = G__15323;
continue;
} else {
}
break;
}

var G__14756 = args14752.length;
switch (G__14756) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14752.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq14753){
var G__14754 = cljs.core.first(seq14753);
var seq14753__$1 = cljs.core.next(seq14753);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__14754,seq14753__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args14757 = [];
var len__5621__auto___15325 = arguments.length;
var i__5622__auto___15326 = (0);
while(true){
if((i__5622__auto___15326 < len__5621__auto___15325)){
args14757.push((arguments[i__5622__auto___15326]));

var G__15327 = (i__5622__auto___15326 + (1));
i__5622__auto___15326 = G__15327;
continue;
} else {
}
break;
}

var G__14761 = args14757.length;
switch (G__14761) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14757.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq14758){
var G__14759 = cljs.core.first(seq14758);
var seq14758__$1 = cljs.core.next(seq14758);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__14759,seq14758__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args14762 = [];
var len__5621__auto___15329 = arguments.length;
var i__5622__auto___15330 = (0);
while(true){
if((i__5622__auto___15330 < len__5621__auto___15329)){
args14762.push((arguments[i__5622__auto___15330]));

var G__15331 = (i__5622__auto___15330 + (1));
i__5622__auto___15330 = G__15331;
continue;
} else {
}
break;
}

var G__14766 = args14762.length;
switch (G__14766) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14762.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.label,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq14763){
var G__14764 = cljs.core.first(seq14763);
var seq14763__$1 = cljs.core.next(seq14763);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__14764,seq14763__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args14767 = [];
var len__5621__auto___15333 = arguments.length;
var i__5622__auto___15334 = (0);
while(true){
if((i__5622__auto___15334 < len__5621__auto___15333)){
args14767.push((arguments[i__5622__auto___15334]));

var G__15335 = (i__5622__auto___15334 + (1));
i__5622__auto___15334 = G__15335;
continue;
} else {
}
break;
}

var G__14771 = args14767.length;
switch (G__14771) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14767.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.legend,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq14768){
var G__14769 = cljs.core.first(seq14768);
var seq14768__$1 = cljs.core.next(seq14768);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__14769,seq14768__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args14772 = [];
var len__5621__auto___15337 = arguments.length;
var i__5622__auto___15338 = (0);
while(true){
if((i__5622__auto___15338 < len__5621__auto___15337)){
args14772.push((arguments[i__5622__auto___15338]));

var G__15339 = (i__5622__auto___15338 + (1));
i__5622__auto___15338 = G__15339;
continue;
} else {
}
break;
}

var G__14776 = args14772.length;
switch (G__14776) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14772.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.li,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq14773){
var G__14774 = cljs.core.first(seq14773);
var seq14773__$1 = cljs.core.next(seq14773);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__14774,seq14773__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args14777 = [];
var len__5621__auto___15341 = arguments.length;
var i__5622__auto___15342 = (0);
while(true){
if((i__5622__auto___15342 < len__5621__auto___15341)){
args14777.push((arguments[i__5622__auto___15342]));

var G__15343 = (i__5622__auto___15342 + (1));
i__5622__auto___15342 = G__15343;
continue;
} else {
}
break;
}

var G__14781 = args14777.length;
switch (G__14781) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14777.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.link,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq14778){
var G__14779 = cljs.core.first(seq14778);
var seq14778__$1 = cljs.core.next(seq14778);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__14779,seq14778__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args14782 = [];
var len__5621__auto___15345 = arguments.length;
var i__5622__auto___15346 = (0);
while(true){
if((i__5622__auto___15346 < len__5621__auto___15345)){
args14782.push((arguments[i__5622__auto___15346]));

var G__15347 = (i__5622__auto___15346 + (1));
i__5622__auto___15346 = G__15347;
continue;
} else {
}
break;
}

var G__14786 = args14782.length;
switch (G__14786) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14782.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.main,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq14783){
var G__14784 = cljs.core.first(seq14783);
var seq14783__$1 = cljs.core.next(seq14783);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__14784,seq14783__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args14787 = [];
var len__5621__auto___15349 = arguments.length;
var i__5622__auto___15350 = (0);
while(true){
if((i__5622__auto___15350 < len__5621__auto___15349)){
args14787.push((arguments[i__5622__auto___15350]));

var G__15351 = (i__5622__auto___15350 + (1));
i__5622__auto___15350 = G__15351;
continue;
} else {
}
break;
}

var G__14791 = args14787.length;
switch (G__14791) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14787.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.map,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq14788){
var G__14789 = cljs.core.first(seq14788);
var seq14788__$1 = cljs.core.next(seq14788);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__14789,seq14788__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args14792 = [];
var len__5621__auto___15353 = arguments.length;
var i__5622__auto___15354 = (0);
while(true){
if((i__5622__auto___15354 < len__5621__auto___15353)){
args14792.push((arguments[i__5622__auto___15354]));

var G__15355 = (i__5622__auto___15354 + (1));
i__5622__auto___15354 = G__15355;
continue;
} else {
}
break;
}

var G__14796 = args14792.length;
switch (G__14796) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14792.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.mark,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq14793){
var G__14794 = cljs.core.first(seq14793);
var seq14793__$1 = cljs.core.next(seq14793);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__14794,seq14793__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args14797 = [];
var len__5621__auto___15357 = arguments.length;
var i__5622__auto___15358 = (0);
while(true){
if((i__5622__auto___15358 < len__5621__auto___15357)){
args14797.push((arguments[i__5622__auto___15358]));

var G__15359 = (i__5622__auto___15358 + (1));
i__5622__auto___15358 = G__15359;
continue;
} else {
}
break;
}

var G__14801 = args14797.length;
switch (G__14801) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14797.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.marquee,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq14798){
var G__14799 = cljs.core.first(seq14798);
var seq14798__$1 = cljs.core.next(seq14798);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__14799,seq14798__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args14802 = [];
var len__5621__auto___15361 = arguments.length;
var i__5622__auto___15362 = (0);
while(true){
if((i__5622__auto___15362 < len__5621__auto___15361)){
args14802.push((arguments[i__5622__auto___15362]));

var G__15363 = (i__5622__auto___15362 + (1));
i__5622__auto___15362 = G__15363;
continue;
} else {
}
break;
}

var G__14806 = args14802.length;
switch (G__14806) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14802.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.menu,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq14803){
var G__14804 = cljs.core.first(seq14803);
var seq14803__$1 = cljs.core.next(seq14803);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__14804,seq14803__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args14807 = [];
var len__5621__auto___15365 = arguments.length;
var i__5622__auto___15366 = (0);
while(true){
if((i__5622__auto___15366 < len__5621__auto___15365)){
args14807.push((arguments[i__5622__auto___15366]));

var G__15367 = (i__5622__auto___15366 + (1));
i__5622__auto___15366 = G__15367;
continue;
} else {
}
break;
}

var G__14811 = args14807.length;
switch (G__14811) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14807.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq14808){
var G__14809 = cljs.core.first(seq14808);
var seq14808__$1 = cljs.core.next(seq14808);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__14809,seq14808__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args14812 = [];
var len__5621__auto___15369 = arguments.length;
var i__5622__auto___15370 = (0);
while(true){
if((i__5622__auto___15370 < len__5621__auto___15369)){
args14812.push((arguments[i__5622__auto___15370]));

var G__15371 = (i__5622__auto___15370 + (1));
i__5622__auto___15370 = G__15371;
continue;
} else {
}
break;
}

var G__14816 = args14812.length;
switch (G__14816) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14812.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.meta,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq14813){
var G__14814 = cljs.core.first(seq14813);
var seq14813__$1 = cljs.core.next(seq14813);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__14814,seq14813__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args14817 = [];
var len__5621__auto___15373 = arguments.length;
var i__5622__auto___15374 = (0);
while(true){
if((i__5622__auto___15374 < len__5621__auto___15373)){
args14817.push((arguments[i__5622__auto___15374]));

var G__15375 = (i__5622__auto___15374 + (1));
i__5622__auto___15374 = G__15375;
continue;
} else {
}
break;
}

var G__14821 = args14817.length;
switch (G__14821) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14817.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.meter,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq14818){
var G__14819 = cljs.core.first(seq14818);
var seq14818__$1 = cljs.core.next(seq14818);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__14819,seq14818__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args14822 = [];
var len__5621__auto___15377 = arguments.length;
var i__5622__auto___15378 = (0);
while(true){
if((i__5622__auto___15378 < len__5621__auto___15377)){
args14822.push((arguments[i__5622__auto___15378]));

var G__15379 = (i__5622__auto___15378 + (1));
i__5622__auto___15378 = G__15379;
continue;
} else {
}
break;
}

var G__14826 = args14822.length;
switch (G__14826) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14822.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.nav,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq14823){
var G__14824 = cljs.core.first(seq14823);
var seq14823__$1 = cljs.core.next(seq14823);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__14824,seq14823__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args14827 = [];
var len__5621__auto___15381 = arguments.length;
var i__5622__auto___15382 = (0);
while(true){
if((i__5622__auto___15382 < len__5621__auto___15381)){
args14827.push((arguments[i__5622__auto___15382]));

var G__15383 = (i__5622__auto___15382 + (1));
i__5622__auto___15382 = G__15383;
continue;
} else {
}
break;
}

var G__14831 = args14827.length;
switch (G__14831) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14827.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq14828){
var G__14829 = cljs.core.first(seq14828);
var seq14828__$1 = cljs.core.next(seq14828);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__14829,seq14828__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args14832 = [];
var len__5621__auto___15385 = arguments.length;
var i__5622__auto___15386 = (0);
while(true){
if((i__5622__auto___15386 < len__5621__auto___15385)){
args14832.push((arguments[i__5622__auto___15386]));

var G__15387 = (i__5622__auto___15386 + (1));
i__5622__auto___15386 = G__15387;
continue;
} else {
}
break;
}

var G__14836 = args14832.length;
switch (G__14836) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14832.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.object,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq14833){
var G__14834 = cljs.core.first(seq14833);
var seq14833__$1 = cljs.core.next(seq14833);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__14834,seq14833__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args14837 = [];
var len__5621__auto___15389 = arguments.length;
var i__5622__auto___15390 = (0);
while(true){
if((i__5622__auto___15390 < len__5621__auto___15389)){
args14837.push((arguments[i__5622__auto___15390]));

var G__15391 = (i__5622__auto___15390 + (1));
i__5622__auto___15390 = G__15391;
continue;
} else {
}
break;
}

var G__14841 = args14837.length;
switch (G__14841) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14837.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.ol,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq14838){
var G__14839 = cljs.core.first(seq14838);
var seq14838__$1 = cljs.core.next(seq14838);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__14839,seq14838__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args14842 = [];
var len__5621__auto___15393 = arguments.length;
var i__5622__auto___15394 = (0);
while(true){
if((i__5622__auto___15394 < len__5621__auto___15393)){
args14842.push((arguments[i__5622__auto___15394]));

var G__15395 = (i__5622__auto___15394 + (1));
i__5622__auto___15394 = G__15395;
continue;
} else {
}
break;
}

var G__14846 = args14842.length;
switch (G__14846) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14842.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq14843){
var G__14844 = cljs.core.first(seq14843);
var seq14843__$1 = cljs.core.next(seq14843);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__14844,seq14843__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args14847 = [];
var len__5621__auto___15397 = arguments.length;
var i__5622__auto___15398 = (0);
while(true){
if((i__5622__auto___15398 < len__5621__auto___15397)){
args14847.push((arguments[i__5622__auto___15398]));

var G__15399 = (i__5622__auto___15398 + (1));
i__5622__auto___15398 = G__15399;
continue;
} else {
}
break;
}

var G__14851 = args14847.length;
switch (G__14851) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14847.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.output,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq14848){
var G__14849 = cljs.core.first(seq14848);
var seq14848__$1 = cljs.core.next(seq14848);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__14849,seq14848__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args14852 = [];
var len__5621__auto___15401 = arguments.length;
var i__5622__auto___15402 = (0);
while(true){
if((i__5622__auto___15402 < len__5621__auto___15401)){
args14852.push((arguments[i__5622__auto___15402]));

var G__15403 = (i__5622__auto___15402 + (1));
i__5622__auto___15402 = G__15403;
continue;
} else {
}
break;
}

var G__14856 = args14852.length;
switch (G__14856) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14852.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.p,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq14853){
var G__14854 = cljs.core.first(seq14853);
var seq14853__$1 = cljs.core.next(seq14853);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__14854,seq14853__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args14857 = [];
var len__5621__auto___15405 = arguments.length;
var i__5622__auto___15406 = (0);
while(true){
if((i__5622__auto___15406 < len__5621__auto___15405)){
args14857.push((arguments[i__5622__auto___15406]));

var G__15407 = (i__5622__auto___15406 + (1));
i__5622__auto___15406 = G__15407;
continue;
} else {
}
break;
}

var G__14861 = args14857.length;
switch (G__14861) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14857.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.param,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq14858){
var G__14859 = cljs.core.first(seq14858);
var seq14858__$1 = cljs.core.next(seq14858);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__14859,seq14858__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args14862 = [];
var len__5621__auto___15409 = arguments.length;
var i__5622__auto___15410 = (0);
while(true){
if((i__5622__auto___15410 < len__5621__auto___15409)){
args14862.push((arguments[i__5622__auto___15410]));

var G__15411 = (i__5622__auto___15410 + (1));
i__5622__auto___15410 = G__15411;
continue;
} else {
}
break;
}

var G__14866 = args14862.length;
switch (G__14866) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14862.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.pre,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq14863){
var G__14864 = cljs.core.first(seq14863);
var seq14863__$1 = cljs.core.next(seq14863);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__14864,seq14863__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args14867 = [];
var len__5621__auto___15413 = arguments.length;
var i__5622__auto___15414 = (0);
while(true){
if((i__5622__auto___15414 < len__5621__auto___15413)){
args14867.push((arguments[i__5622__auto___15414]));

var G__15415 = (i__5622__auto___15414 + (1));
i__5622__auto___15414 = G__15415;
continue;
} else {
}
break;
}

var G__14871 = args14867.length;
switch (G__14871) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14867.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.progress,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq14868){
var G__14869 = cljs.core.first(seq14868);
var seq14868__$1 = cljs.core.next(seq14868);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__14869,seq14868__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args14872 = [];
var len__5621__auto___15417 = arguments.length;
var i__5622__auto___15418 = (0);
while(true){
if((i__5622__auto___15418 < len__5621__auto___15417)){
args14872.push((arguments[i__5622__auto___15418]));

var G__15419 = (i__5622__auto___15418 + (1));
i__5622__auto___15418 = G__15419;
continue;
} else {
}
break;
}

var G__14876 = args14872.length;
switch (G__14876) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14872.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.q,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq14873){
var G__14874 = cljs.core.first(seq14873);
var seq14873__$1 = cljs.core.next(seq14873);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__14874,seq14873__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args14877 = [];
var len__5621__auto___15421 = arguments.length;
var i__5622__auto___15422 = (0);
while(true){
if((i__5622__auto___15422 < len__5621__auto___15421)){
args14877.push((arguments[i__5622__auto___15422]));

var G__15423 = (i__5622__auto___15422 + (1));
i__5622__auto___15422 = G__15423;
continue;
} else {
}
break;
}

var G__14881 = args14877.length;
switch (G__14881) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14877.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.rp,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq14878){
var G__14879 = cljs.core.first(seq14878);
var seq14878__$1 = cljs.core.next(seq14878);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__14879,seq14878__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args14882 = [];
var len__5621__auto___15425 = arguments.length;
var i__5622__auto___15426 = (0);
while(true){
if((i__5622__auto___15426 < len__5621__auto___15425)){
args14882.push((arguments[i__5622__auto___15426]));

var G__15427 = (i__5622__auto___15426 + (1));
i__5622__auto___15426 = G__15427;
continue;
} else {
}
break;
}

var G__14886 = args14882.length;
switch (G__14886) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14882.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.rt,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq14883){
var G__14884 = cljs.core.first(seq14883);
var seq14883__$1 = cljs.core.next(seq14883);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__14884,seq14883__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args14887 = [];
var len__5621__auto___15429 = arguments.length;
var i__5622__auto___15430 = (0);
while(true){
if((i__5622__auto___15430 < len__5621__auto___15429)){
args14887.push((arguments[i__5622__auto___15430]));

var G__15431 = (i__5622__auto___15430 + (1));
i__5622__auto___15430 = G__15431;
continue;
} else {
}
break;
}

var G__14891 = args14887.length;
switch (G__14891) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14887.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq14888){
var G__14889 = cljs.core.first(seq14888);
var seq14888__$1 = cljs.core.next(seq14888);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__14889,seq14888__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args14892 = [];
var len__5621__auto___15433 = arguments.length;
var i__5622__auto___15434 = (0);
while(true){
if((i__5622__auto___15434 < len__5621__auto___15433)){
args14892.push((arguments[i__5622__auto___15434]));

var G__15435 = (i__5622__auto___15434 + (1));
i__5622__auto___15434 = G__15435;
continue;
} else {
}
break;
}

var G__14896 = args14892.length;
switch (G__14896) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14892.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.s,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq14893){
var G__14894 = cljs.core.first(seq14893);
var seq14893__$1 = cljs.core.next(seq14893);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__14894,seq14893__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args14897 = [];
var len__5621__auto___15437 = arguments.length;
var i__5622__auto___15438 = (0);
while(true){
if((i__5622__auto___15438 < len__5621__auto___15437)){
args14897.push((arguments[i__5622__auto___15438]));

var G__15439 = (i__5622__auto___15438 + (1));
i__5622__auto___15438 = G__15439;
continue;
} else {
}
break;
}

var G__14901 = args14897.length;
switch (G__14901) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14897.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.samp,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq14898){
var G__14899 = cljs.core.first(seq14898);
var seq14898__$1 = cljs.core.next(seq14898);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__14899,seq14898__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args14902 = [];
var len__5621__auto___15441 = arguments.length;
var i__5622__auto___15442 = (0);
while(true){
if((i__5622__auto___15442 < len__5621__auto___15441)){
args14902.push((arguments[i__5622__auto___15442]));

var G__15443 = (i__5622__auto___15442 + (1));
i__5622__auto___15442 = G__15443;
continue;
} else {
}
break;
}

var G__14906 = args14902.length;
switch (G__14906) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14902.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.script,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq14903){
var G__14904 = cljs.core.first(seq14903);
var seq14903__$1 = cljs.core.next(seq14903);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__14904,seq14903__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args14907 = [];
var len__5621__auto___15445 = arguments.length;
var i__5622__auto___15446 = (0);
while(true){
if((i__5622__auto___15446 < len__5621__auto___15445)){
args14907.push((arguments[i__5622__auto___15446]));

var G__15447 = (i__5622__auto___15446 + (1));
i__5622__auto___15446 = G__15447;
continue;
} else {
}
break;
}

var G__14911 = args14907.length;
switch (G__14911) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14907.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.section,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq14908){
var G__14909 = cljs.core.first(seq14908);
var seq14908__$1 = cljs.core.next(seq14908);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__14909,seq14908__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(var_args){
var args14912 = [];
var len__5621__auto___15449 = arguments.length;
var i__5622__auto___15450 = (0);
while(true){
if((i__5622__auto___15450 < len__5621__auto___15449)){
args14912.push((arguments[i__5622__auto___15450]));

var G__15451 = (i__5622__auto___15450 + (1));
i__5622__auto___15450 = G__15451;
continue;
} else {
}
break;
}

var G__14916 = args14912.length;
switch (G__14916) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14912.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.select,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq14913){
var G__14914 = cljs.core.first(seq14913);
var seq14913__$1 = cljs.core.next(seq14913);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__14914,seq14913__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args14917 = [];
var len__5621__auto___15453 = arguments.length;
var i__5622__auto___15454 = (0);
while(true){
if((i__5622__auto___15454 < len__5621__auto___15453)){
args14917.push((arguments[i__5622__auto___15454]));

var G__15455 = (i__5622__auto___15454 + (1));
i__5622__auto___15454 = G__15455;
continue;
} else {
}
break;
}

var G__14921 = args14917.length;
switch (G__14921) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14917.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.small,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq14918){
var G__14919 = cljs.core.first(seq14918);
var seq14918__$1 = cljs.core.next(seq14918);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__14919,seq14918__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args14922 = [];
var len__5621__auto___15457 = arguments.length;
var i__5622__auto___15458 = (0);
while(true){
if((i__5622__auto___15458 < len__5621__auto___15457)){
args14922.push((arguments[i__5622__auto___15458]));

var G__15459 = (i__5622__auto___15458 + (1));
i__5622__auto___15458 = G__15459;
continue;
} else {
}
break;
}

var G__14926 = args14922.length;
switch (G__14926) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14922.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.source,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq14923){
var G__14924 = cljs.core.first(seq14923);
var seq14923__$1 = cljs.core.next(seq14923);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__14924,seq14923__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args14927 = [];
var len__5621__auto___15461 = arguments.length;
var i__5622__auto___15462 = (0);
while(true){
if((i__5622__auto___15462 < len__5621__auto___15461)){
args14927.push((arguments[i__5622__auto___15462]));

var G__15463 = (i__5622__auto___15462 + (1));
i__5622__auto___15462 = G__15463;
continue;
} else {
}
break;
}

var G__14931 = args14927.length;
switch (G__14931) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14927.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.span,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq14928){
var G__14929 = cljs.core.first(seq14928);
var seq14928__$1 = cljs.core.next(seq14928);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__14929,seq14928__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args14932 = [];
var len__5621__auto___15465 = arguments.length;
var i__5622__auto___15466 = (0);
while(true){
if((i__5622__auto___15466 < len__5621__auto___15465)){
args14932.push((arguments[i__5622__auto___15466]));

var G__15467 = (i__5622__auto___15466 + (1));
i__5622__auto___15466 = G__15467;
continue;
} else {
}
break;
}

var G__14936 = args14932.length;
switch (G__14936) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14932.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.strong,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq14933){
var G__14934 = cljs.core.first(seq14933);
var seq14933__$1 = cljs.core.next(seq14933);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__14934,seq14933__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args14937 = [];
var len__5621__auto___15469 = arguments.length;
var i__5622__auto___15470 = (0);
while(true){
if((i__5622__auto___15470 < len__5621__auto___15469)){
args14937.push((arguments[i__5622__auto___15470]));

var G__15471 = (i__5622__auto___15470 + (1));
i__5622__auto___15470 = G__15471;
continue;
} else {
}
break;
}

var G__14941 = args14937.length;
switch (G__14941) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14937.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.style,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq14938){
var G__14939 = cljs.core.first(seq14938);
var seq14938__$1 = cljs.core.next(seq14938);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__14939,seq14938__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args14942 = [];
var len__5621__auto___15473 = arguments.length;
var i__5622__auto___15474 = (0);
while(true){
if((i__5622__auto___15474 < len__5621__auto___15473)){
args14942.push((arguments[i__5622__auto___15474]));

var G__15475 = (i__5622__auto___15474 + (1));
i__5622__auto___15474 = G__15475;
continue;
} else {
}
break;
}

var G__14946 = args14942.length;
switch (G__14946) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14942.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.sub,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq14943){
var G__14944 = cljs.core.first(seq14943);
var seq14943__$1 = cljs.core.next(seq14943);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__14944,seq14943__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args14947 = [];
var len__5621__auto___15477 = arguments.length;
var i__5622__auto___15478 = (0);
while(true){
if((i__5622__auto___15478 < len__5621__auto___15477)){
args14947.push((arguments[i__5622__auto___15478]));

var G__15479 = (i__5622__auto___15478 + (1));
i__5622__auto___15478 = G__15479;
continue;
} else {
}
break;
}

var G__14951 = args14947.length;
switch (G__14951) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14947.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.summary,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq14948){
var G__14949 = cljs.core.first(seq14948);
var seq14948__$1 = cljs.core.next(seq14948);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__14949,seq14948__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args14952 = [];
var len__5621__auto___15481 = arguments.length;
var i__5622__auto___15482 = (0);
while(true){
if((i__5622__auto___15482 < len__5621__auto___15481)){
args14952.push((arguments[i__5622__auto___15482]));

var G__15483 = (i__5622__auto___15482 + (1));
i__5622__auto___15482 = G__15483;
continue;
} else {
}
break;
}

var G__14956 = args14952.length;
switch (G__14956) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14952.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.sup,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq14953){
var G__14954 = cljs.core.first(seq14953);
var seq14953__$1 = cljs.core.next(seq14953);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__14954,seq14953__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args14957 = [];
var len__5621__auto___15485 = arguments.length;
var i__5622__auto___15486 = (0);
while(true){
if((i__5622__auto___15486 < len__5621__auto___15485)){
args14957.push((arguments[i__5622__auto___15486]));

var G__15487 = (i__5622__auto___15486 + (1));
i__5622__auto___15486 = G__15487;
continue;
} else {
}
break;
}

var G__14961 = args14957.length;
switch (G__14961) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14957.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.table,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq14958){
var G__14959 = cljs.core.first(seq14958);
var seq14958__$1 = cljs.core.next(seq14958);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__14959,seq14958__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args14962 = [];
var len__5621__auto___15489 = arguments.length;
var i__5622__auto___15490 = (0);
while(true){
if((i__5622__auto___15490 < len__5621__auto___15489)){
args14962.push((arguments[i__5622__auto___15490]));

var G__15491 = (i__5622__auto___15490 + (1));
i__5622__auto___15490 = G__15491;
continue;
} else {
}
break;
}

var G__14966 = args14962.length;
switch (G__14966) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14962.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq14963){
var G__14964 = cljs.core.first(seq14963);
var seq14963__$1 = cljs.core.next(seq14963);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__14964,seq14963__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args14967 = [];
var len__5621__auto___15493 = arguments.length;
var i__5622__auto___15494 = (0);
while(true){
if((i__5622__auto___15494 < len__5621__auto___15493)){
args14967.push((arguments[i__5622__auto___15494]));

var G__15495 = (i__5622__auto___15494 + (1));
i__5622__auto___15494 = G__15495;
continue;
} else {
}
break;
}

var G__14971 = args14967.length;
switch (G__14971) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14967.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.td,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq14968){
var G__14969 = cljs.core.first(seq14968);
var seq14968__$1 = cljs.core.next(seq14968);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__14969,seq14968__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args14972 = [];
var len__5621__auto___15497 = arguments.length;
var i__5622__auto___15498 = (0);
while(true){
if((i__5622__auto___15498 < len__5621__auto___15497)){
args14972.push((arguments[i__5622__auto___15498]));

var G__15499 = (i__5622__auto___15498 + (1));
i__5622__auto___15498 = G__15499;
continue;
} else {
}
break;
}

var G__14976 = args14972.length;
switch (G__14976) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14972.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq14973){
var G__14974 = cljs.core.first(seq14973);
var seq14973__$1 = cljs.core.next(seq14973);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__14974,seq14973__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args14977 = [];
var len__5621__auto___15501 = arguments.length;
var i__5622__auto___15502 = (0);
while(true){
if((i__5622__auto___15502 < len__5621__auto___15501)){
args14977.push((arguments[i__5622__auto___15502]));

var G__15503 = (i__5622__auto___15502 + (1));
i__5622__auto___15502 = G__15503;
continue;
} else {
}
break;
}

var G__14981 = args14977.length;
switch (G__14981) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14977.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.th,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq14978){
var G__14979 = cljs.core.first(seq14978);
var seq14978__$1 = cljs.core.next(seq14978);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__14979,seq14978__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args14982 = [];
var len__5621__auto___15505 = arguments.length;
var i__5622__auto___15506 = (0);
while(true){
if((i__5622__auto___15506 < len__5621__auto___15505)){
args14982.push((arguments[i__5622__auto___15506]));

var G__15507 = (i__5622__auto___15506 + (1));
i__5622__auto___15506 = G__15507;
continue;
} else {
}
break;
}

var G__14986 = args14982.length;
switch (G__14986) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14982.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.thead,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq14983){
var G__14984 = cljs.core.first(seq14983);
var seq14983__$1 = cljs.core.next(seq14983);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__14984,seq14983__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args14987 = [];
var len__5621__auto___15509 = arguments.length;
var i__5622__auto___15510 = (0);
while(true){
if((i__5622__auto___15510 < len__5621__auto___15509)){
args14987.push((arguments[i__5622__auto___15510]));

var G__15511 = (i__5622__auto___15510 + (1));
i__5622__auto___15510 = G__15511;
continue;
} else {
}
break;
}

var G__14991 = args14987.length;
switch (G__14991) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14987.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.time,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq14988){
var G__14989 = cljs.core.first(seq14988);
var seq14988__$1 = cljs.core.next(seq14988);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__14989,seq14988__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args14992 = [];
var len__5621__auto___15513 = arguments.length;
var i__5622__auto___15514 = (0);
while(true){
if((i__5622__auto___15514 < len__5621__auto___15513)){
args14992.push((arguments[i__5622__auto___15514]));

var G__15515 = (i__5622__auto___15514 + (1));
i__5622__auto___15514 = G__15515;
continue;
} else {
}
break;
}

var G__14996 = args14992.length;
switch (G__14996) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14992.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.title,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq14993){
var G__14994 = cljs.core.first(seq14993);
var seq14993__$1 = cljs.core.next(seq14993);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__14994,seq14993__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args14997 = [];
var len__5621__auto___15517 = arguments.length;
var i__5622__auto___15518 = (0);
while(true){
if((i__5622__auto___15518 < len__5621__auto___15517)){
args14997.push((arguments[i__5622__auto___15518]));

var G__15519 = (i__5622__auto___15518 + (1));
i__5622__auto___15518 = G__15519;
continue;
} else {
}
break;
}

var G__15001 = args14997.length;
switch (G__15001) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14997.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.tr,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq14998){
var G__14999 = cljs.core.first(seq14998);
var seq14998__$1 = cljs.core.next(seq14998);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__14999,seq14998__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args15002 = [];
var len__5621__auto___15521 = arguments.length;
var i__5622__auto___15522 = (0);
while(true){
if((i__5622__auto___15522 < len__5621__auto___15521)){
args15002.push((arguments[i__5622__auto___15522]));

var G__15523 = (i__5622__auto___15522 + (1));
i__5622__auto___15522 = G__15523;
continue;
} else {
}
break;
}

var G__15006 = args15002.length;
switch (G__15006) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15002.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.track,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq15003){
var G__15004 = cljs.core.first(seq15003);
var seq15003__$1 = cljs.core.next(seq15003);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__15004,seq15003__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args15007 = [];
var len__5621__auto___15525 = arguments.length;
var i__5622__auto___15526 = (0);
while(true){
if((i__5622__auto___15526 < len__5621__auto___15525)){
args15007.push((arguments[i__5622__auto___15526]));

var G__15527 = (i__5622__auto___15526 + (1));
i__5622__auto___15526 = G__15527;
continue;
} else {
}
break;
}

var G__15011 = args15007.length;
switch (G__15011) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15007.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.u,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq15008){
var G__15009 = cljs.core.first(seq15008);
var seq15008__$1 = cljs.core.next(seq15008);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__15009,seq15008__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args15012 = [];
var len__5621__auto___15529 = arguments.length;
var i__5622__auto___15530 = (0);
while(true){
if((i__5622__auto___15530 < len__5621__auto___15529)){
args15012.push((arguments[i__5622__auto___15530]));

var G__15531 = (i__5622__auto___15530 + (1));
i__5622__auto___15530 = G__15531;
continue;
} else {
}
break;
}

var G__15016 = args15012.length;
switch (G__15016) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15012.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.ul,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq15013){
var G__15014 = cljs.core.first(seq15013);
var seq15013__$1 = cljs.core.next(seq15013);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__15014,seq15013__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args15017 = [];
var len__5621__auto___15533 = arguments.length;
var i__5622__auto___15534 = (0);
while(true){
if((i__5622__auto___15534 < len__5621__auto___15533)){
args15017.push((arguments[i__5622__auto___15534]));

var G__15535 = (i__5622__auto___15534 + (1));
i__5622__auto___15534 = G__15535;
continue;
} else {
}
break;
}

var G__15021 = args15017.length;
switch (G__15021) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15017.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.var$,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq15018){
var G__15019 = cljs.core.first(seq15018);
var seq15018__$1 = cljs.core.next(seq15018);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__15019,seq15018__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args15022 = [];
var len__5621__auto___15537 = arguments.length;
var i__5622__auto___15538 = (0);
while(true){
if((i__5622__auto___15538 < len__5621__auto___15537)){
args15022.push((arguments[i__5622__auto___15538]));

var G__15539 = (i__5622__auto___15538 + (1));
i__5622__auto___15538 = G__15539;
continue;
} else {
}
break;
}

var G__15026 = args15022.length;
switch (G__15026) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15022.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.video,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq15023){
var G__15024 = cljs.core.first(seq15023);
var seq15023__$1 = cljs.core.next(seq15023);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__15024,seq15023__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args15027 = [];
var len__5621__auto___15541 = arguments.length;
var i__5622__auto___15542 = (0);
while(true){
if((i__5622__auto___15542 < len__5621__auto___15541)){
args15027.push((arguments[i__5622__auto___15542]));

var G__15543 = (i__5622__auto___15542 + (1));
i__5622__auto___15542 = G__15543;
continue;
} else {
}
break;
}

var G__15031 = args15027.length;
switch (G__15031) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15027.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq15028){
var G__15029 = cljs.core.first(seq15028);
var seq15028__$1 = cljs.core.next(seq15028);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__15029,seq15028__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args15032 = [];
var len__5621__auto___15545 = arguments.length;
var i__5622__auto___15546 = (0);
while(true){
if((i__5622__auto___15546 < len__5621__auto___15545)){
args15032.push((arguments[i__5622__auto___15546]));

var G__15547 = (i__5622__auto___15546 + (1));
i__5622__auto___15546 = G__15547;
continue;
} else {
}
break;
}

var G__15036 = args15032.length;
switch (G__15036) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15032.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.circle,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq15033){
var G__15034 = cljs.core.first(seq15033);
var seq15033__$1 = cljs.core.next(seq15033);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__15034,seq15033__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args15037 = [];
var len__5621__auto___15549 = arguments.length;
var i__5622__auto___15550 = (0);
while(true){
if((i__5622__auto___15550 < len__5621__auto___15549)){
args15037.push((arguments[i__5622__auto___15550]));

var G__15551 = (i__5622__auto___15550 + (1));
i__5622__auto___15550 = G__15551;
continue;
} else {
}
break;
}

var G__15041 = args15037.length;
switch (G__15041) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15037.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq15038){
var G__15039 = cljs.core.first(seq15038);
var seq15038__$1 = cljs.core.next(seq15038);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__15039,seq15038__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args15042 = [];
var len__5621__auto___15553 = arguments.length;
var i__5622__auto___15554 = (0);
while(true){
if((i__5622__auto___15554 < len__5621__auto___15553)){
args15042.push((arguments[i__5622__auto___15554]));

var G__15555 = (i__5622__auto___15554 + (1));
i__5622__auto___15554 = G__15555;
continue;
} else {
}
break;
}

var G__15046 = args15042.length;
switch (G__15046) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15042.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.g,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq15043){
var G__15044 = cljs.core.first(seq15043);
var seq15043__$1 = cljs.core.next(seq15043);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__15044,seq15043__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args15047 = [];
var len__5621__auto___15557 = arguments.length;
var i__5622__auto___15558 = (0);
while(true){
if((i__5622__auto___15558 < len__5621__auto___15557)){
args15047.push((arguments[i__5622__auto___15558]));

var G__15559 = (i__5622__auto___15558 + (1));
i__5622__auto___15558 = G__15559;
continue;
} else {
}
break;
}

var G__15051 = args15047.length;
switch (G__15051) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15047.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.line,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq15048){
var G__15049 = cljs.core.first(seq15048);
var seq15048__$1 = cljs.core.next(seq15048);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__15049,seq15048__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args15052 = [];
var len__5621__auto___15561 = arguments.length;
var i__5622__auto___15562 = (0);
while(true){
if((i__5622__auto___15562 < len__5621__auto___15561)){
args15052.push((arguments[i__5622__auto___15562]));

var G__15563 = (i__5622__auto___15562 + (1));
i__5622__auto___15562 = G__15563;
continue;
} else {
}
break;
}

var G__15056 = args15052.length;
switch (G__15056) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15052.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.path,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq15053){
var G__15054 = cljs.core.first(seq15053);
var seq15053__$1 = cljs.core.next(seq15053);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__15054,seq15053__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args15057 = [];
var len__5621__auto___15565 = arguments.length;
var i__5622__auto___15566 = (0);
while(true){
if((i__5622__auto___15566 < len__5621__auto___15565)){
args15057.push((arguments[i__5622__auto___15566]));

var G__15567 = (i__5622__auto___15566 + (1));
i__5622__auto___15566 = G__15567;
continue;
} else {
}
break;
}

var G__15061 = args15057.length;
switch (G__15061) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15057.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq15058){
var G__15059 = cljs.core.first(seq15058);
var seq15058__$1 = cljs.core.next(seq15058);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__15059,seq15058__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args15062 = [];
var len__5621__auto___15569 = arguments.length;
var i__5622__auto___15570 = (0);
while(true){
if((i__5622__auto___15570 < len__5621__auto___15569)){
args15062.push((arguments[i__5622__auto___15570]));

var G__15571 = (i__5622__auto___15570 + (1));
i__5622__auto___15570 = G__15571;
continue;
} else {
}
break;
}

var G__15066 = args15062.length;
switch (G__15066) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15062.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.rect,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq15063){
var G__15064 = cljs.core.first(seq15063);
var seq15063__$1 = cljs.core.next(seq15063);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__15064,seq15063__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args15067 = [];
var len__5621__auto___15573 = arguments.length;
var i__5622__auto___15574 = (0);
while(true){
if((i__5622__auto___15574 < len__5621__auto___15573)){
args15067.push((arguments[i__5622__auto___15574]));

var G__15575 = (i__5622__auto___15574 + (1));
i__5622__auto___15574 = G__15575;
continue;
} else {
}
break;
}

var G__15071 = args15067.length;
switch (G__15071) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15067.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.svg,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq15068){
var G__15069 = cljs.core.first(seq15068);
var seq15068__$1 = cljs.core.next(seq15068);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__15069,seq15068__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args15072 = [];
var len__5621__auto___15577 = arguments.length;
var i__5622__auto___15578 = (0);
while(true){
if((i__5622__auto___15578 < len__5621__auto___15577)){
args15072.push((arguments[i__5622__auto___15578]));

var G__15579 = (i__5622__auto___15578 + (1));
i__5622__auto___15578 = G__15579;
continue;
} else {
}
break;
}

var G__15076 = args15072.length;
switch (G__15076) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15072.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.text,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq15073){
var G__15074 = cljs.core.first(seq15073);
var seq15073__$1 = cljs.core.next(seq15073);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__15074,seq15073__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args15077 = [];
var len__5621__auto___15581 = arguments.length;
var i__5622__auto___15582 = (0);
while(true){
if((i__5622__auto___15582 < len__5621__auto___15581)){
args15077.push((arguments[i__5622__auto___15582]));

var G__15583 = (i__5622__auto___15582 + (1));
i__5622__auto___15582 = G__15583;
continue;
} else {
}
break;
}

var G__15081 = args15077.length;
switch (G__15081) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15077.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.defs,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq15078){
var G__15079 = cljs.core.first(seq15078);
var seq15078__$1 = cljs.core.next(seq15078);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__15079,seq15078__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args15082 = [];
var len__5621__auto___15585 = arguments.length;
var i__5622__auto___15586 = (0);
while(true){
if((i__5622__auto___15586 < len__5621__auto___15585)){
args15082.push((arguments[i__5622__auto___15586]));

var G__15587 = (i__5622__auto___15586 + (1));
i__5622__auto___15586 = G__15587;
continue;
} else {
}
break;
}

var G__15086 = args15082.length;
switch (G__15086) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15082.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq15083){
var G__15084 = cljs.core.first(seq15083);
var seq15083__$1 = cljs.core.next(seq15083);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__15084,seq15083__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args15087 = [];
var len__5621__auto___15589 = arguments.length;
var i__5622__auto___15590 = (0);
while(true){
if((i__5622__auto___15590 < len__5621__auto___15589)){
args15087.push((arguments[i__5622__auto___15590]));

var G__15591 = (i__5622__auto___15590 + (1));
i__5622__auto___15590 = G__15591;
continue;
} else {
}
break;
}

var G__15091 = args15087.length;
switch (G__15091) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15087.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq15088){
var G__15089 = cljs.core.first(seq15088);
var seq15088__$1 = cljs.core.next(seq15088);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__15089,seq15088__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args15092 = [];
var len__5621__auto___15593 = arguments.length;
var i__5622__auto___15594 = (0);
while(true){
if((i__5622__auto___15594 < len__5621__auto___15593)){
args15092.push((arguments[i__5622__auto___15594]));

var G__15595 = (i__5622__auto___15594 + (1));
i__5622__auto___15594 = G__15595;
continue;
} else {
}
break;
}

var G__15096 = args15092.length;
switch (G__15096) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15092.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq15093){
var G__15094 = cljs.core.first(seq15093);
var seq15093__$1 = cljs.core.next(seq15093);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__15094,seq15093__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args15097 = [];
var len__5621__auto___15597 = arguments.length;
var i__5622__auto___15598 = (0);
while(true){
if((i__5622__auto___15598 < len__5621__auto___15597)){
args15097.push((arguments[i__5622__auto___15598]));

var G__15599 = (i__5622__auto___15598 + (1));
i__5622__auto___15598 = G__15599;
continue;
} else {
}
break;
}

var G__15101 = args15097.length;
switch (G__15101) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15097.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.stop,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq15098){
var G__15099 = cljs.core.first(seq15098);
var seq15098__$1 = cljs.core.next(seq15098);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__15099,seq15098__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args15102 = [];
var len__5621__auto___15601 = arguments.length;
var i__5622__auto___15602 = (0);
while(true){
if((i__5622__auto___15602 < len__5621__auto___15601)){
args15102.push((arguments[i__5622__auto___15602]));

var G__15603 = (i__5622__auto___15602 + (1));
i__5622__auto___15602 = G__15603;
continue;
} else {
}
break;
}

var G__15106 = args15102.length;
switch (G__15106) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15102.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq15103){
var G__15104 = cljs.core.first(seq15103);
var seq15103__$1 = cljs.core.next(seq15103);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__15104,seq15103__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args15107 = [];
var len__5621__auto___15605 = arguments.length;
var i__5622__auto___15606 = (0);
while(true){
if((i__5622__auto___15606 < len__5621__auto___15605)){
args15107.push((arguments[i__5622__auto___15606]));

var G__15607 = (i__5622__auto___15606 + (1));
i__5622__auto___15606 = G__15607;
continue;
} else {
}
break;
}

var G__15111 = args15107.length;
switch (G__15111) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15107.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(om.dom.input,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq15108){
var G__15109 = cljs.core.first(seq15108);
var seq15108__$1 = cljs.core.next(seq15108);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__15109,seq15108__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args15112 = [];
var len__5621__auto___15609 = arguments.length;
var i__5622__auto___15610 = (0);
while(true){
if((i__5622__auto___15610 < len__5621__auto___15609)){
args15112.push((arguments[i__5622__auto___15610]));

var G__15611 = (i__5622__auto___15610 + (1));
i__5622__auto___15610 = G__15611;
continue;
} else {
}
break;
}

var G__15116 = args15112.length;
switch (G__15116) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args15112.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(om.dom.textarea,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq15113){
var G__15114 = cljs.core.first(seq15113);
var seq15113__$1 = cljs.core.next(seq15113);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__15114,seq15113__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args14652 = [];
var len__5621__auto___15613 = arguments.length;
var i__5622__auto___15614 = (0);
while(true){
if((i__5622__auto___15614 < len__5621__auto___15613)){
args14652.push((arguments[i__5622__auto___15614]));

var G__15615 = (i__5622__auto___15614 + (1));
i__5622__auto___15614 = G__15615;
continue;
} else {
}
break;
}

var G__14656 = args14652.length;
switch (G__14656) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5640__auto__ = (new cljs.core.IndexedSeq(args14652.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5640__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9948__auto__,children__9949__auto__){
return om_tools.dom.element(om.dom.option,opts__9948__auto__,children__9949__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq14653){
var G__14654 = cljs.core.first(seq14653);
var seq14653__$1 = cljs.core.next(seq14653);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__14654,seq14653__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
