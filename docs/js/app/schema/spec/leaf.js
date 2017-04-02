// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17081,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17083 = (((k17081 instanceof cljs.core.Keyword))?k17081.fqn:null);
switch (G__17083) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17081,else__5180__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__4563__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17080){
var self__ = this;
var G__17080__$1 = this;
return (new cljs.core.RecordIter((0),G__17080__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17080){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17084 = cljs.core.keyword_identical_QMARK_;
var expr__17085 = k__5185__auto__;
if(cljs.core.truth_((pred__17084.cljs$core$IFn$_invoke$arity$2 ? pred__17084.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__17085) : pred__17084.call(null,cljs.core.cst$kw$pre,expr__17085)))){
return (new schema.spec.leaf.LeafSpec(G__17080,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17080),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17080){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__17080,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__17082){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__17082),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17082,cljs.core.cst$kw$pre),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});
