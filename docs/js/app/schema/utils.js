// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16639 = arguments.length;
var i__5622__auto___16640 = (0);
while(true){
if((i__5622__auto___16640 < len__5621__auto___16639)){
args__5628__auto__.push((arguments[i__5622__auto___16640]));

var G__16641 = (i__5622__auto___16640 + (1));
i__5622__auto___16640 = G__16641;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
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
})(),(function (){var iter__5335__auto__ = (function schema$utils$iter__16629(s__16630){
return (new cljs.core.LazySeq(null,(function (){
var s__16630__$1 = s__16630;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16630__$1);
if(temp__4425__auto__){
var s__16630__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16630__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16630__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16632 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16631 = (0);
while(true){
if((i__16631 < size__5334__auto__)){
var vec__16637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16631);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16637,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__16632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16642 = (i__16631 + (1));
i__16631 = G__16642;
continue;
} else {
var G__16643 = (i__16631 + (1));
i__16631 = G__16643;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16632),schema$utils$iter__16629(cljs.core.chunk_rest(s__16630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16632),null);
}
} else {
var vec__16638 = cljs.core.first(s__16630__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16638,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16638,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__16629(cljs.core.rest(s__16630__$2)));
} else {
var G__16644 = cljs.core.rest(s__16630__$2);
s__16630__$1 = G__16644;
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

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq16627){
var G__16628 = cljs.core.first(seq16627);
var seq16627__$1 = cljs.core.next(seq16627);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__16628,seq16627__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16647 = arguments.length;
var i__5622__auto___16648 = (0);
while(true){
if((i__5622__auto___16648 < len__5621__auto___16647)){
args__5628__auto__.push((arguments[i__5622__auto___16648]));

var G__16649 = (i__5622__auto___16648 + (1));
i__5622__auto___16648 = G__16649;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq16645){
var G__16646 = cljs.core.first(seq16645);
var seq16645__$1 = cljs.core.next(seq16645);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16646,seq16645__$1);
});
schema.utils.max_value_length = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19)) : cljs.core.atom.call(null,(19)));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) <= (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(schema.utils.max_value_length) : cljs.core.deref.call(null,schema.utils.max_value_length)))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16653){
var vec__16654 = p__16653;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16654,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16654,(1),null);
return clojure.string.replace(s__$1,from,[cljs.core.str(to)].join(''));
}),s,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__16650_SHARP_){
return (- cljs.core.count(cljs.core.second(p1__16650_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
return schema.utils.unmunge((function (){var or__4563__auto__ = cljs.core.not_empty(cljs.core.second(cljs.core.re_find(/function ([^\(]*)\(/,[cljs.core.str(f)].join(''))));
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return "function";
}
})());
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});
schema.utils.validation_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$value,cljs.core.cst$sym$expectation_DASH_delay,cljs.core.cst$sym$fail_DASH_explanation], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write(writer__5162__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__16658 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16658) : cljs.core.deref.call(null,G__16658));
})()),(function (){var or__4563__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.cst$sym$not;
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.named_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$error], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write(writer__5162__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),cljs.core.cst$sym$named);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16660,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16662 = (((k16660 instanceof cljs.core.Keyword))?k16660.fqn:null);
switch (G__16662) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16660,else__5180__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = true;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16659){
var self__ = this;
var G__16659__$1 = this;
return (new cljs.core.RecordIter((0),G__16659__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core._iterator(self__.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
var self__ = this;
var this__5172__auto____$1 = this;
var h__4998__auto__ = self__.__hash;
if(!((h__4998__auto__ == null))){
return h__4998__auto__;
} else {
var h__4998__auto____$1 = cljs.core.hash_imap(this__5172__auto____$1);
self__.__hash = h__4998__auto____$1;

return h__4998__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
var self__ = this;
var this__5173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4551__auto__ = other__5174__auto__;
if(cljs.core.truth_(and__4551__auto__)){
var and__4551__auto____$1 = (this__5173__auto____$1.constructor === other__5174__auto__.constructor);
if(and__4551__auto____$1){
return cljs.core.equiv_map(this__5173__auto____$1,other__5174__auto__);
} else {
return and__4551__auto____$1;
}
} else {
return and__4551__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16659){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16663 = cljs.core.keyword_identical_QMARK_;
var expr__16664 = k__5185__auto__;
if(cljs.core.truth_((pred__16663.cljs$core$IFn$_invoke$arity$2 ? pred__16663.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,expr__16664) : pred__16663.call(null,cljs.core.cst$kw$error,expr__16664)))){
return (new schema.utils.ErrorContainer(G__16659,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16659),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16659){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__16659,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$error], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__16661){
return (new schema.utils.ErrorContainer(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(G__16661),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16661,cljs.core.cst$kw$error),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$x], 0)))].join('')));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_(x))){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

/**
 * @interface
 */
schema.utils.PSimpleCell = function(){};

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$get_cell$arity$1 == null)))){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (schema.utils.get_cell[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (schema.utils.get_cell["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$set_cell$arity$2 == null)))){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (schema.utils.set_cell[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5219__auto__.call(null,this$,x));
} else {
var m__5219__auto____$1 = (schema.utils.set_cell["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5219__auto____$1.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
}
});


/**
* @constructor
 * @implements {schema.utils.PSimpleCell}
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$q,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$volatile_DASH_mutable,true], null))], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write(writer__5162__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
