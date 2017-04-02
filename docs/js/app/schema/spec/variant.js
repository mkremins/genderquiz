// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.variant');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker(o,params);
var step = (cljs.core.truth_(g)?((function (g,c){
return (function (x){
var guard_result = (function (){try{return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}catch (e17091){if((e17091 instanceof Object)){
var e_SHARP_ = e17091;
return cljs.core.cst$kw$schema$spec$variant_SLASH_exception;
} else {
throw e17091;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$variant_SLASH_exception,guard_result)){
return schema.utils.error(schema.utils.make_ValidationError(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay(((function (guard_result,g,c){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(g)));
});})(guard_result,g,c))
,null)),cljs.core.cst$sym$throws_QMARK_));
} else {
if(cljs.core.truth_(guard_result)){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(x) : c.call(null,x));
} else {
return (else$.cljs$core$IFn$_invoke$arity$1 ? else$.cljs$core$IFn$_invoke$arity$1(x) : else$.call(null,x));

}
}
});})(g,c))
:c);
var temp__4423__auto__ = cljs.core.cst$kw$wrap_DASH_error.cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__4423__auto__)){
var wrap_error = temp__4423__auto__;
return ((function (wrap_error,temp__4423__auto__,g,c,step){
return (function (x){
var res = (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(x) : step.call(null,x));
var temp__4423__auto____$1 = schema.utils.error_val(res);
if(cljs.core.truth_(temp__4423__auto____$1)){
var e = temp__4423__auto____$1;
return schema.utils.error((wrap_error.cljs$core$IFn$_invoke$arity$1 ? wrap_error.cljs$core$IFn$_invoke$arity$1(e) : wrap_error.call(null,e)));
} else {
return res;
}
});
;})(wrap_error,temp__4423__auto__,g,c,step))
} else {
return step;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.variant.VariantSpec = (function (pre,options,err_f,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17093,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17095 = (((k17093 instanceof cljs.core.Keyword))?k17093.fqn:null);
switch (G__17095) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17093,else__5180__auto__);

}
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.options);
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (f,o){
return schema.spec.variant.option_step(o,params,f);
});})(this$__$1))
,((function (this$__$1){
return (function (x){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
var G__17096 = schema.utils.value_name(x);
return (self__.err_f.cljs$core$IFn$_invoke$arity$1 ? self__.err_f.cljs$core$IFn$_invoke$arity$1(G__17096) : self__.err_f.call(null,G__17096));
});})(this$__$1))
,null)),null));
});})(this$__$1))
,cljs.core.reverse(self__.options));
return ((function (t,this$__$1){
return (function (x){
var or__4563__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
}
});
;})(t,this$__$1))
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17092){
var self__ = this;
var G__17092__$1 = this;
return (new cljs.core.RecordIter((0),G__17092__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$err_DASH_f,null,cljs.core.cst$kw$options,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17092){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17097 = cljs.core.keyword_identical_QMARK_;
var expr__17098 = k__5185__auto__;
if(cljs.core.truth_((pred__17097.cljs$core$IFn$_invoke$arity$2 ? pred__17097.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__17098) : pred__17097.call(null,cljs.core.cst$kw$pre,expr__17098)))){
return (new schema.spec.variant.VariantSpec(G__17092,self__.options,self__.err_f,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17097.cljs$core$IFn$_invoke$arity$2 ? pred__17097.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$options,expr__17098) : pred__17097.call(null,cljs.core.cst$kw$options,expr__17098)))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__17092,self__.err_f,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17097.cljs$core$IFn$_invoke$arity$2 ? pred__17097.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$err_DASH_f,expr__17098) : pred__17097.call(null,cljs.core.cst$kw$err_DASH_f,expr__17098)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__17092,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17092),null));
}
}
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17092){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__17092,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$options,cljs.core.cst$sym$err_DASH_f], null);
});

schema.spec.variant.VariantSpec.cljs$lang$type = true;

schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,null,null,null));
});

schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__17094){
return (new schema.spec.variant.VariantSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__17094),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__17094),cljs.core.cst$kw$err_DASH_f.cljs$core$IFn$_invoke$arity$1(G__17094),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17094,cljs.core.cst$kw$pre,cljs.core.array_seq([cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f], 0)),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var args17101 = [];
var len__5621__auto___17104 = arguments.length;
var i__5622__auto___17105 = (0);
while(true){
if((i__5622__auto___17105 < len__5621__auto___17104)){
args17101.push((arguments[i__5622__auto___17105]));

var G__17106 = (i__5622__auto___17105 + (1));
i__5622__auto___17105 = G__17106;
continue;
} else {
}
break;
}

var G__17103 = args17101.length;
switch (G__17103) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17101.length)].join('')));

}
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(pre,options,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
if(cljs.core.truth_((function (){var or__4563__auto__ = err_f;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(cljs.core.last(options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_("when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec(pre,options,err_f);
});

schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 3;
