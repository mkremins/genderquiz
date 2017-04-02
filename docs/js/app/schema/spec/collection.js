// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker(e,params);
return ((function (parser,c){
return (function (res,x){
var G__17144 = res;
var G__17145 = (function (){var G__17146 = ((function (G__17144,parser,c){
return (function (t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_(t))?t:(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(t) : c.call(null,t))));
});})(G__17144,parser,c))
;
var G__17147 = x;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__17146,G__17147) : parser.call(null,G__17146,G__17147));
})();
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__17144,G__17145) : then.call(null,G__17144,G__17145));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some(schema.utils.error_QMARK_,l);
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
schema.spec.collection.CollectionSpec = (function (pre,constructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor = constructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17149,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17151 = (((k17149 instanceof cljs.core.Keyword))?k17149.fqn:null);
switch (G__17151) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17149,else__5180__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor__$1 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?self__.constructor:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (constructor__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer(e,params,f);
});})(constructor__$1,this$__$1))
,((function (constructor__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor__$1,this$__$1))
,cljs.core.reverse(self__.elements));
return ((function (constructor__$1,t,this$__$1){
return (function (x){
var or__4563__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
var res = (function (){var G__17152 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17152) : cljs.core.atom.call(null,G__17152));
})();
var remaining = (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(res,x) : t.call(null,res,x));
var res__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(res) : cljs.core.deref.call(null,res));
if(cljs.core.truth_((function (){var or__4563__auto____$1 = cljs.core.seq(remaining);
if(or__4563__auto____$1){
return or__4563__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_(res__$1);
}
})())){
return schema.utils.error((self__.on_error.cljs$core$IFn$_invoke$arity$3 ? self__.on_error.cljs$core$IFn$_invoke$arity$3(x,res__$1,remaining) : self__.on_error.call(null,x,res__$1,remaining)));
} else {
return (constructor__$1.cljs$core$IFn$_invoke$arity$1 ? constructor__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : constructor__$1.call(null,res__$1));
}
}
});
;})(constructor__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17148){
var self__ = this;
var G__17148__$1 = this;
return (new cljs.core.RecordIter((0),G__17148__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$elements,null,cljs.core.cst$kw$constructor,null,cljs.core.cst$kw$on_DASH_error,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17148){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17153 = cljs.core.keyword_identical_QMARK_;
var expr__17154 = k__5185__auto__;
if(cljs.core.truth_((pred__17153.cljs$core$IFn$_invoke$arity$2 ? pred__17153.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__17154) : pred__17153.call(null,cljs.core.cst$kw$pre,expr__17154)))){
return (new schema.spec.collection.CollectionSpec(G__17148,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17153.cljs$core$IFn$_invoke$arity$2 ? pred__17153.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constructor,expr__17154) : pred__17153.call(null,cljs.core.cst$kw$constructor,expr__17154)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__17148,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17153.cljs$core$IFn$_invoke$arity$2 ? pred__17153.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$elements,expr__17154) : pred__17153.call(null,cljs.core.cst$kw$elements,expr__17154)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,G__17148,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17153.cljs$core$IFn$_invoke$arity$2 ? pred__17153.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_error,expr__17154) : pred__17153.call(null,cljs.core.cst$kw$on_DASH_error,expr__17154)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,G__17148,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17148),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17148){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,G__17148,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$constructor,cljs.core.cst$sym$elements,cljs.core.cst$sym$on_DASH_error], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__17150){
return (new schema.spec.collection.CollectionSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__17150),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(G__17150),cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__17150),cljs.core.cst$kw$on_DASH_error.cljs$core$IFn$_invoke$arity$1(G__17150),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17150,cljs.core.cst$kw$pre,cljs.core.array_seq([cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], 0)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec(pre,constructor,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$cardinality,cljs.core.cst$kw$zero_DASH_or_DASH_more,cljs.core.cst$kw$parser,(function (item_fn,coll){
var seq__17161_17165 = cljs.core.seq(coll);
var chunk__17162_17166 = null;
var count__17163_17167 = (0);
var i__17164_17168 = (0);
while(true){
if((i__17164_17168 < count__17163_17167)){
var x_17169 = chunk__17162_17166.cljs$core$IIndexed$_nth$arity$2(null,i__17164_17168);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(x_17169) : item_fn.call(null,x_17169));

var G__17170 = seq__17161_17165;
var G__17171 = chunk__17162_17166;
var G__17172 = count__17163_17167;
var G__17173 = (i__17164_17168 + (1));
seq__17161_17165 = G__17170;
chunk__17162_17166 = G__17171;
count__17163_17167 = G__17172;
i__17164_17168 = G__17173;
continue;
} else {
var temp__4425__auto___17174 = cljs.core.seq(seq__17161_17165);
if(temp__4425__auto___17174){
var seq__17161_17175__$1 = temp__4425__auto___17174;
if(cljs.core.chunked_seq_QMARK_(seq__17161_17175__$1)){
var c__5366__auto___17176 = cljs.core.chunk_first(seq__17161_17175__$1);
var G__17177 = cljs.core.chunk_rest(seq__17161_17175__$1);
var G__17178 = c__5366__auto___17176;
var G__17179 = cljs.core.count(c__5366__auto___17176);
var G__17180 = (0);
seq__17161_17165 = G__17177;
chunk__17162_17166 = G__17178;
count__17163_17167 = G__17179;
i__17164_17168 = G__17180;
continue;
} else {
var x_17181 = cljs.core.first(seq__17161_17175__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(x_17181) : item_fn.call(null,x_17181));

var G__17182 = cljs.core.next(seq__17161_17175__$1);
var G__17183 = null;
var G__17184 = (0);
var G__17185 = (0);
seq__17161_17165 = G__17182;
chunk__17162_17166 = G__17183;
count__17163_17167 = G__17184;
i__17164_17168 = G__17185;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$cardinality,(cljs.core.truth_(required_QMARK_)?cljs.core.cst$kw$exactly_DASH_one:cljs.core.cst$kw$at_DASH_most_DASH_one),cljs.core.cst$kw$parser,parser], null);
});
