// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (schema.core.spec[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (schema.core.spec["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (schema.core.explain[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (schema.core.explain["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___16669 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__4425__auto___16669)){
var error_16670 = temp__4425__auto___16669;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_16670], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_16670], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__16671_SHARP_){
var and__4551__auto__ = !((p1__16671_SHARP_ == null));
if(and__4551__auto__){
var or__4563__auto__ = (klass === p1__16671_SHARP_.constructor);
if(or__4563__auto__){
return or__4563__auto__;
} else {
return p1__16671_SHARP_ instanceof klass;
}
} else {
return and__4551__auto__;
}
}),(function (p1__16672_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16672_SHARP_),klass),cljs.core.cst$sym$instance_QMARK_);
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__4423__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain(more_schema);
} else {
var pred__16673 = cljs.core._EQ_;
var expr__16674 = this$;
if(cljs.core.truth_((pred__16673.cljs$core$IFn$_invoke$arity$2 ? pred__16673.cljs$core$IFn$_invoke$arity$2(null,expr__16674) : pred__16673.call(null,null,expr__16674)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__16673.cljs$core$IFn$_invoke$arity$2 ? pred__16673.cljs$core$IFn$_invoke$arity$2(Boolean,expr__16674) : pred__16673.call(null,Boolean,expr__16674)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__16673.cljs$core$IFn$_invoke$arity$2 ? pred__16673.cljs$core$IFn$_invoke$arity$2(Number,expr__16674) : pred__16673.call(null,Number,expr__16674)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__16673.cljs$core$IFn$_invoke$arity$2 ? pred__16673.cljs$core$IFn$_invoke$arity$2(null,expr__16674) : pred__16673.call(null,null,expr__16674)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__16673.cljs$core$IFn$_invoke$arity$2 ? pred__16673.cljs$core$IFn$_invoke$arity$2(Date,expr__16674) : pred__16673.call(null,Date,expr__16674)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__16673.cljs$core$IFn$_invoke$arity$2 ? pred__16673.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__16674) : pred__16673.call(null,cljs.core.UUID,expr__16674)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16677,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16679 = (((k16677 instanceof cljs.core.Keyword))?k16677.fqn:null);
switch (G__16679) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16677,else__5180__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.AnythingSchema{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16676){
var self__ = this;
var G__16676__$1 = this;
return (new cljs.core.RecordIter((0),G__16676__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16676){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16680 = cljs.core.keyword_identical_QMARK_;
var expr__16681 = k__5185__auto__;
if(cljs.core.truth_((pred__16680.cljs$core$IFn$_invoke$arity$2 ? pred__16680.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_,expr__16681) : pred__16680.call(null,cljs.core.cst$kw$_,expr__16681)))){
return (new schema.core.AnythingSchema(G__16676,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16676),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16676){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__16676,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__16678){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__16678),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16678,cljs.core.cst$kw$_),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16687,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16689 = (((k16687 instanceof cljs.core.Keyword))?k16687.fqn:null);
switch (G__16689) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16687,else__5180__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.EqSchema{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16686){
var self__ = this;
var G__16686__$1 = this;
return (new cljs.core.RecordIter((0),G__16686__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16686){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16690 = cljs.core.keyword_identical_QMARK_;
var expr__16691 = k__5185__auto__;
if(cljs.core.truth_((pred__16690.cljs$core$IFn$_invoke$arity$2 ? pred__16690.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,expr__16691) : pred__16690.call(null,cljs.core.cst$kw$v,expr__16691)))){
return (new schema.core.EqSchema(G__16686,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16686),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16686){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__16686,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16684_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__16684_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16685_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16685_SHARP_),self__.v),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__16688){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__16688),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16688,cljs.core.cst$kw$v),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16697,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16699 = (((k16697 instanceof cljs.core.Keyword))?k16697.fqn:null);
switch (G__16699) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16697,else__5180__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Isa{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16696){
var self__ = this;
var G__16696__$1 = this;
return (new cljs.core.RecordIter((0),G__16696__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16696){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16700 = cljs.core.keyword_identical_QMARK_;
var expr__16701 = k__5185__auto__;
if(cljs.core.truth_((pred__16700.cljs$core$IFn$_invoke$arity$2 ? pred__16700.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h,expr__16701) : pred__16700.call(null,cljs.core.cst$kw$h,expr__16701)))){
return (new schema.core.Isa(G__16696,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16700.cljs$core$IFn$_invoke$arity$2 ? pred__16700.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,expr__16701) : pred__16700.call(null,cljs.core.cst$kw$parent,expr__16701)))){
return (new schema.core.Isa(self__.h,G__16696,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16696),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16696){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__16696,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16694_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__16694_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16695_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),p1__16695_SHARP_),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__16698){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__16698),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__16698),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16698,cljs.core.cst$kw$h,cljs.core.array_seq([cljs.core.cst$kw$parent], 0)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args16704 = [];
var len__5621__auto___16707 = arguments.length;
var i__5622__auto___16708 = (0);
while(true){
if((i__5622__auto___16708 < len__5621__auto___16707)){
args16704.push((arguments[i__5622__auto___16708]));

var G__16709 = (i__5622__auto___16708 + (1));
i__5622__auto___16708 = G__16709;
continue;
} else {
}
break;
}

var G__16706 = args16704.length;
switch (G__16706) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16704.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16714,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16716 = (((k16714 instanceof cljs.core.Keyword))?k16714.fqn:null);
switch (G__16716) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16714,else__5180__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.EnumSchema{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16713){
var self__ = this;
var G__16713__$1 = this;
return (new cljs.core.RecordIter((0),G__16713__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16713){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16717 = cljs.core.keyword_identical_QMARK_;
var expr__16718 = k__5185__auto__;
if(cljs.core.truth_((pred__16717.cljs$core$IFn$_invoke$arity$2 ? pred__16717.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vs,expr__16718) : pred__16717.call(null,cljs.core.cst$kw$vs,expr__16718)))){
return (new schema.core.EnumSchema(G__16713,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16713),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16713){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__16713,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16711_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__16711_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16712_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16712_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__16715){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__16715),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16715,cljs.core.cst$kw$vs),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16722 = arguments.length;
var i__5622__auto___16723 = (0);
while(true){
if((i__5622__auto___16723 < len__5621__auto___16722)){
args__5628__auto__.push((arguments[i__5622__auto___16723]));

var G__16724 = (i__5622__auto___16723 + (1));
i__5622__auto___16723 = G__16724;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq16721){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16721));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16727,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16729 = (((k16727 instanceof cljs.core.Keyword))?k16727.fqn:null);
switch (G__16729) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16727,else__5180__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Predicate{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16726){
var self__ = this;
var G__16726__$1 = this;
return (new cljs.core.RecordIter((0),G__16726__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16726){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16730 = cljs.core.keyword_identical_QMARK_;
var expr__16731 = k__5185__auto__;
if(cljs.core.truth_((pred__16730.cljs$core$IFn$_invoke$arity$2 ? pred__16730.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p_QMARK_,expr__16731) : pred__16730.call(null,cljs.core.cst$kw$p_QMARK_,expr__16731)))){
return (new schema.core.Predicate(G__16726,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16730.cljs$core$IFn$_invoke$arity$2 ? pred__16730.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pred_DASH_name,expr__16731) : pred__16730.call(null,cljs.core.cst$kw$pred_DASH_name,expr__16731)))){
return (new schema.core.Predicate(self__.p_QMARK_,G__16726,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16726),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16726){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__16726,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__16725_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16725_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),cljs.core.cst$sym$pred);

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__16728){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16728),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__16728),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16728,cljs.core.cst$kw$p_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$pred_DASH_name], 0)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args16734 = [];
var len__5621__auto___16737 = arguments.length;
var i__5622__auto___16738 = (0);
while(true){
if((i__5622__auto___16738 < len__5621__auto___16737)){
args16734.push((arguments[i__5622__auto___16738]));

var G__16739 = (i__5622__auto___16738 + (1));
i__5622__auto___16738 = G__16739;
continue;
} else {
}
break;
}

var G__16736 = args16734.length;
switch (G__16736) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16734.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16744,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16746 = (((k16744 instanceof cljs.core.Keyword))?k16744.fqn:null);
switch (G__16746) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16744,else__5180__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Protocol{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16743){
var self__ = this;
var G__16743__$1 = this;
return (new cljs.core.RecordIter((0),G__16743__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16743){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16747 = cljs.core.keyword_identical_QMARK_;
var expr__16748 = k__5185__auto__;
if(cljs.core.truth_((pred__16747.cljs$core$IFn$_invoke$arity$2 ? pred__16747.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,expr__16748) : pred__16747.call(null,cljs.core.cst$kw$p,expr__16748)))){
return (new schema.core.Protocol(G__16743,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16743),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16743){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__16743,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16741_SHARP_){
return cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,p1__16741_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16742_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16742_SHARP_),schema.core.protocol_name(this$__$1)),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__16745){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__16745),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16745,cljs.core.cst$kw$p),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__11018__11019__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11018__11019__auto__),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16751_SHARP_){
return cljs.core.re_find(this$__$1,p1__16751_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16752_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16752_SHARP_),schema.core.explain(this$__$1)),cljs.core.cst$sym$re_DASH_find);
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core16755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core16755 = (function (meta16756){
this.meta16756 = meta16756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core16755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16757,meta16756__$1){
var self__ = this;
var _16757__$1 = this;
return (new schema.core.t_schema$core16755(meta16756__$1));
});

schema.core.t_schema$core16755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16757){
var self__ = this;
var _16757__$1 = this;
return self__.meta16756;
});

schema.core.t_schema$core16755.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core16755.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__16753_SHARP_){
return (p1__16753_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__16754_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16754_SHARP_),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core16755.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core16755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta16756], null);
});

schema.core.t_schema$core16755.cljs$lang$type = true;

schema.core.t_schema$core16755.cljs$lang$ctorStr = "schema.core/t_schema$core16755";

schema.core.t_schema$core16755.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write(writer__5162__auto__,"schema.core/t_schema$core16755");
});

schema.core.__GT_t_schema$core16755 = (function schema$core$__GT_t_schema$core16755(meta16756){
return (new schema.core.t_schema$core16755(meta16756));
});

}

return (new schema.core.t_schema$core16755(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16759,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16761 = (((k16759 instanceof cljs.core.Keyword))?k16759.fqn:null);
switch (G__16761) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16759,else__5180__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Maybe{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16758){
var self__ = this;
var G__16758__$1 = this;
return (new cljs.core.RecordIter((0),G__16758__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16758){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16762 = cljs.core.keyword_identical_QMARK_;
var expr__16763 = k__5185__auto__;
if(cljs.core.truth_((pred__16762.cljs$core$IFn$_invoke$arity$2 ? pred__16762.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16763) : pred__16762.call(null,cljs.core.cst$kw$schema,expr__16763)))){
return (new schema.core.Maybe(G__16758,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16758),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16758){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__16758,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__16760){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16760),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16760,cljs.core.cst$kw$schema),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16768,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16770 = (((k16768 instanceof cljs.core.Keyword))?k16768.fqn:null);
switch (G__16770) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16768,else__5180__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.NamedSchema{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16767){
var self__ = this;
var G__16767__$1 = this;
return (new cljs.core.RecordIter((0),G__16767__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16767){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16771 = cljs.core.keyword_identical_QMARK_;
var expr__16772 = k__5185__auto__;
if(cljs.core.truth_((pred__16771.cljs$core$IFn$_invoke$arity$2 ? pred__16771.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__16772) : pred__16771.call(null,cljs.core.cst$kw$schema,expr__16772)))){
return (new schema.core.NamedSchema(G__16767,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16771.cljs$core$IFn$_invoke$arity$2 ? pred__16771.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__16772) : pred__16771.call(null,cljs.core.cst$kw$name,expr__16772)))){
return (new schema.core.NamedSchema(self__.schema,G__16767,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16767),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16767){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__16767,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__16766_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__16766_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__16769){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__16769),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__16769),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16769,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$name], 0)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16777,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16779 = (((k16777 instanceof cljs.core.Keyword))?k16777.fqn:null);
switch (G__16779) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16777,else__5180__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Either{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16776){
var self__ = this;
var G__16776__$1 = this;
return (new cljs.core.RecordIter((0),G__16776__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16776){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16780 = cljs.core.keyword_identical_QMARK_;
var expr__16781 = k__5185__auto__;
if(cljs.core.truth_((pred__16780.cljs$core$IFn$_invoke$arity$2 ? pred__16780.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__16781) : pred__16780.call(null,cljs.core.cst$kw$schemas,expr__16781)))){
return (new schema.core.Either(G__16776,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16776),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16776){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__16776,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5335__auto__ = ((function (this$__$1){
return (function schema$core$iter__16783(s__16784){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16784__$1 = s__16784;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16784__$1);
if(temp__4425__auto__){
var s__16784__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16784__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16784__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16786 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16785 = (0);
while(true){
if((i__16785 < size__5334__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16785);
cljs.core.chunk_append(b__16786,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__16790 = (i__16785 + (1));
i__16785 = G__16790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16786),schema$core$iter__16783(cljs.core.chunk_rest(s__16784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16786),null);
}
} else {
var s = cljs.core.first(s__16784__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__16783(cljs.core.rest(s__16784__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5335__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__16775_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16775_SHARP_),cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_);
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__16778){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__16778),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16778,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16792 = arguments.length;
var i__5622__auto___16793 = (0);
while(true){
if((i__5622__auto___16793 < len__5621__auto___16792)){
args__5628__auto__.push((arguments[i__5622__auto___16793]));

var G__16794 = (i__5622__auto___16793 + (1));
i__5622__auto___16793 = G__16794;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq16791){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16791));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16797,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16799 = (((k16797 instanceof cljs.core.Keyword))?k16797.fqn:null);
switch (G__16799) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16797,else__5180__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16796){
var self__ = this;
var G__16796__$1 = this;
return (new cljs.core.RecordIter((0),G__16796__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16796){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16800 = cljs.core.keyword_identical_QMARK_;
var expr__16801 = k__5185__auto__;
if(cljs.core.truth_((pred__16800.cljs$core$IFn$_invoke$arity$2 ? pred__16800.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preds_DASH_and_DASH_schemas,expr__16801) : pred__16800.call(null,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,expr__16801)))){
return (new schema.core.ConditionalSchema(G__16796,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16800.cljs$core$IFn$_invoke$arity$2 ? pred__16800.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error_DASH_symbol,expr__16801) : pred__16800.call(null,cljs.core.cst$kw$error_DASH_symbol,expr__16801)))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__16796,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16796),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16796){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__16796,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5335__auto__ = ((function (this$__$1){
return (function schema$core$iter__16803(s__16804){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16804__$1 = s__16804;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16804__$1);
if(temp__4425__auto__){
var s__16804__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16804__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16804__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16806 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16805 = (0);
while(true){
if((i__16805 < size__5334__auto__)){
var vec__16811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16805);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(1),null);
cljs.core.chunk_append(b__16806,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__16816 = (i__16805 + (1));
i__16805 = G__16816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16806),schema$core$iter__16803(cljs.core.chunk_rest(s__16804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16806),null);
}
} else {
var vec__16812 = cljs.core.first(s__16804__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16812,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16812,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__16803(cljs.core.rest(s__16804__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5335__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__16795_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16795_SHARP_),(function (){var or__4563__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__16813){
var vec__16814 = p__16813;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__16798){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__16798),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__16798),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16798,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.array_seq([cljs.core.cst$kw$error_DASH_symbol], 0)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16828 = arguments.length;
var i__5622__auto___16829 = (0);
while(true){
if((i__5622__auto___16829 < len__5621__auto___16828)){
args__5628__auto__.push((arguments[i__5622__auto___16829]));

var G__16830 = (i__5622__auto___16829 + (1));
i__5622__auto___16829 = G__16830;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__5335__auto__ = (function schema$core$iter__16818(s__16819){
return (new cljs.core.LazySeq(null,(function (){
var s__16819__$1 = s__16819;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16819__$1);
if(temp__4425__auto__){
var s__16819__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16819__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16819__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16821 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16820 = (0);
while(true){
if((i__16820 < size__5334__auto__)){
var vec__16826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16820);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(1),null);
cljs.core.chunk_append(b__16821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null));

var G__16831 = (i__16820 + (1));
i__16820 = G__16831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16821),schema$core$iter__16818(cljs.core.chunk_rest(s__16819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16821),null);
}
} else {
var vec__16827 = cljs.core.first(s__16819__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16827,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16827,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null),schema$core$iter__16818(cljs.core.rest(s__16819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq16817){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16817));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (schema.core.precondition[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (schema.core.precondition["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__5335__auto__ = ((function (this$__$1){
return (function schema$core$iter__16832(s__16833){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16833__$1 = s__16833;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16833__$1);
if(temp__4425__auto__){
var s__16833__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16833__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16833__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16835 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16834 = (0);
while(true){
if((i__16834 < size__5334__auto__)){
var map__16842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16834);
var map__16842__$1 = ((((!((map__16842 == null)))?((((map__16842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16842):map__16842);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16842__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16842__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__16835,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__16846 = (i__16834 + (1));
i__16834 = G__16846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16835),schema$core$iter__16832(cljs.core.chunk_rest(s__16833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16835),null);
}
} else {
var map__16844 = cljs.core.first(s__16833__$2);
var map__16844__$1 = ((((!((map__16844 == null)))?((((map__16844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16844):map__16844);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__16832(cljs.core.rest(s__16833__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5335__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16849,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16851 = (((k16849 instanceof cljs.core.Keyword))?k16849.fqn:null);
switch (G__16851) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16849,else__5180__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.CondPre{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16848){
var self__ = this;
var G__16848__$1 = this;
return (new cljs.core.RecordIter((0),G__16848__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16848){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16852 = cljs.core.keyword_identical_QMARK_;
var expr__16853 = k__5185__auto__;
if(cljs.core.truth_((pred__16852.cljs$core$IFn$_invoke$arity$2 ? pred__16852.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__16853) : pred__16852.call(null,cljs.core.cst$kw$schemas,expr__16853)))){
return (new schema.core.CondPre(G__16848,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16848),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16848){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__16848,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5335__auto__ = ((function (this$__$1){
return (function schema$core$iter__16855(s__16856){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__16856__$1 = s__16856;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16856__$1);
if(temp__4425__auto__){
var s__16856__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16856__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16856__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16858 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16857 = (0);
while(true){
if((i__16857 < size__5334__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16857);
cljs.core.chunk_append(b__16858,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__16862 = (i__16857 + (1));
i__16857 = G__16862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16858),schema$core$iter__16855(cljs.core.chunk_rest(s__16856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16858),null);
}
} else {
var s = cljs.core.first(s__16856__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__16855(cljs.core.rest(s__16856__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5335__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__16847_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__16847_SHARP_),cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_);
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__16850){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__16850),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16850,cljs.core.cst$kw$schemas),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16864 = arguments.length;
var i__5622__auto___16865 = (0);
while(true){
if((i__5622__auto___16865 < len__5621__auto___16864)){
args__5628__auto__.push((arguments[i__5622__auto___16865]));

var G__16866 = (i__5622__auto___16865 + (1));
i__5622__auto___16865 = G__16866;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq16863){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16863));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16869,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16871 = (((k16869 instanceof cljs.core.Keyword))?k16869.fqn:null);
switch (G__16871) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16869,else__5180__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__16872 = (function (){var or__4563__auto__ = tx;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16872) : f.call(null,G__16872));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__16867_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__16867_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Both{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16868){
var self__ = this;
var G__16868__$1 = this;
return (new cljs.core.RecordIter((0),G__16868__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16868){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16873 = cljs.core.keyword_identical_QMARK_;
var expr__16874 = k__5185__auto__;
if(cljs.core.truth_((pred__16873.cljs$core$IFn$_invoke$arity$2 ? pred__16873.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__16874) : pred__16873.call(null,cljs.core.cst$kw$schemas,expr__16874)))){
return (new schema.core.Both(G__16868,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16868),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16868){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__16868,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__16870){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__16870),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16870,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16878 = arguments.length;
var i__5622__auto___16879 = (0);
while(true){
if((i__5622__auto___16879 < len__5621__auto___16878)){
args__5628__auto__.push((arguments[i__5622__auto___16879]));

var G__16880 = (i__5622__auto___16879 + (1));
i__5622__auto___16879 = G__16880;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq16877){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16877));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__16883 = cljs.core.meta(v);
var map__16883__$1 = ((((!((map__16883 == null)))?((((map__16883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16883):map__16883);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16883__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16883__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16886,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16888 = (((k16886 instanceof cljs.core.Keyword))?k16886.fqn:null);
switch (G__16888) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16886,else__5180__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Recursive{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16885){
var self__ = this;
var G__16885__$1 = this;
return (new cljs.core.RecordIter((0),G__16885__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16885){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16889 = cljs.core.keyword_identical_QMARK_;
var expr__16890 = k__5185__auto__;
if(cljs.core.truth_((pred__16889.cljs$core$IFn$_invoke$arity$2 ? pred__16889.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$derefable,expr__16890) : pred__16889.call(null,cljs.core.cst$kw$derefable,expr__16890)))){
return (new schema.core.Recursive(G__16885,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16885),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16885){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__16885,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.derefable) : cljs.core.deref.call(null,self__.derefable))], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.var_name(self__.derefable)),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$)),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__16887){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__16887),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16887,cljs.core.cst$kw$derefable),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.array_seq([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16896,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16898 = (((k16896 instanceof cljs.core.Keyword))?k16896.fqn:null);
switch (G__16898) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16896,else__5180__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.RequiredKey{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16895){
var self__ = this;
var G__16895__$1 = this;
return (new cljs.core.RecordIter((0),G__16895__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16895){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16899 = cljs.core.keyword_identical_QMARK_;
var expr__16900 = k__5185__auto__;
if(cljs.core.truth_((pred__16899.cljs$core$IFn$_invoke$arity$2 ? pred__16899.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k,expr__16900) : pred__16899.call(null,cljs.core.cst$kw$k,expr__16900)))){
return (new schema.core.RequiredKey(G__16895,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16895),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16895){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__16895,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__16897){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__16897),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16897,cljs.core.cst$kw$k),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16904,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16906 = (((k16904 instanceof cljs.core.Keyword))?k16904.fqn:null);
switch (G__16906) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16904,else__5180__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.OptionalKey{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16903){
var self__ = this;
var G__16903__$1 = this;
return (new cljs.core.RecordIter((0),G__16903__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16903){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16907 = cljs.core.keyword_identical_QMARK_;
var expr__16908 = k__5185__auto__;
if(cljs.core.truth_((pred__16907.cljs$core$IFn$_invoke$arity$2 ? pred__16907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k,expr__16908) : pred__16907.call(null,cljs.core.cst$kw$k,expr__16908)))){
return (new schema.core.OptionalKey(G__16903,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16903),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16903){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__16903,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__16905){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__16905),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16905,cljs.core.cst$kw$k),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__4563__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k16912,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__16914 = (((k16912 instanceof cljs.core.Keyword))?k16912.fqn:null);
switch (G__16914) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16912,else__5180__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.MapEntry{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16911){
var self__ = this;
var G__16911__$1 = this;
return (new cljs.core.RecordIter((0),G__16911__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__16911){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__16915 = cljs.core.keyword_identical_QMARK_;
var expr__16916 = k__5185__auto__;
if(cljs.core.truth_((pred__16915.cljs$core$IFn$_invoke$arity$2 ? pred__16915.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_schema,expr__16916) : pred__16915.call(null,cljs.core.cst$kw$key_DASH_schema,expr__16916)))){
return (new schema.core.MapEntry(G__16911,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16915.cljs$core$IFn$_invoke$arity$2 ? pred__16915.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val_DASH_schema,expr__16916) : pred__16915.call(null,cljs.core.cst$kw$val_DASH_schema,expr__16916)))){
return (new schema.core.MapEntry(self__.key_schema,G__16911,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__16911),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__16911){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__16911,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__16918_16925 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16918_16925) : item_fn.call(null,G__16918_16925));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__16919_16926 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16919_16926) : item_fn.call(null,G__16919_16926));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__16920,p__16921,_){
var vec__16922 = p__16920;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922,(0),null);
var vec__16923 = p__16921;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16923,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16923,(1),null);
var temp__4423__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain(self__.key_schema)),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__16913){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__16913),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__16913),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16913,cljs.core.cst$kw$key_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$val_DASH_schema], 0)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null)));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_16956 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__16927_SHARP_){
return (cljs.core.count(p1__16927_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_16956)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([duplicate_keys_16956], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5335__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__16942(s__16943){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__16943__$1 = s__16943;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16943__$1);
if(temp__4425__auto__){
var s__16943__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16943__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16943__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16945 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16944 = (0);
while(true){
if((i__16944 < size__5334__auto__)){
var vec__16952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16944);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16952,(1),null);
cljs.core.chunk_append(b__16945,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__16944,rk,required_QMARK_,vec__16952,k,v,c__5333__auto__,size__5334__auto__,b__16945,s__16943__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__16953_16957 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16953_16957) : item_fn.call(null,G__16953_16957));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__16944,rk,required_QMARK_,vec__16952,k,v,c__5333__auto__,size__5334__auto__,b__16945,s__16943__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__16958 = (i__16944 + (1));
i__16944 = G__16958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16945),schema$core$map_elements_$_iter__16942(cljs.core.chunk_rest(s__16943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16945),null);
}
} else {
var vec__16954 = cljs.core.first(s__16943__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16954,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__16954,k,v,s__16943__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__16955_16959 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__16955_16959) : item_fn.call(null,G__16955_16959));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__16954,k,v,s__16943__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__16942(cljs.core.rest(s__16943__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__5335__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__5335__auto__ = (function schema$core$map_error_$_iter__16970(s__16971){
return (new cljs.core.LazySeq(null,(function (){
var s__16971__$1 = s__16971;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16971__$1);
if(temp__4425__auto__){
var s__16971__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16971__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16971__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16973 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16972 = (0);
while(true){
if((i__16972 < size__5334__auto__)){
var vec__16978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16972);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16978,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16978,(1),null);
cljs.core.chunk_append(b__16973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__16980 = (i__16972 + (1));
i__16972 = G__16980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16973),schema$core$map_error_$_iter__16970(cljs.core.chunk_rest(s__16971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16973),null);
}
} else {
var vec__16979 = cljs.core.first(s__16971__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16979,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16979,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__16970(cljs.core.rest(s__16971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__11018__11019__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11018__11019__auto__),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__16981_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__16981_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = (function schema$core$map_explain_$_iter__16992(s__16993){
return (new cljs.core.LazySeq(null,(function (){
var s__16993__$1 = s__16993;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16993__$1);
if(temp__4425__auto__){
var s__16993__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16993__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16993__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16995 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16994 = (0);
while(true){
if((i__16994 < size__5334__auto__)){
var vec__17000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16994);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17000,(1),null);
cljs.core.chunk_append(b__16995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__17002 = (i__16994 + (1));
i__16994 = G__17002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16995),schema$core$map_explain_$_iter__16992(cljs.core.chunk_rest(s__16993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16995),null);
}
} else {
var vec__17001 = cljs.core.first(s__16993__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17001,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__16992(cljs.core.rest(s__16993__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__11018__11019__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11018__11019__auto__),cljs.core.cst$sym$set_QMARK_);
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17004,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17006 = (((k17004 instanceof cljs.core.Keyword))?k17004.fqn:null);
switch (G__17006) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17004,else__5180__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Queue{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17003){
var self__ = this;
var G__17003__$1 = this;
return (new cljs.core.RecordIter((0),G__17003__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17003){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17007 = cljs.core.keyword_identical_QMARK_;
var expr__17008 = k__5185__auto__;
if(cljs.core.truth_((pred__17007.cljs$core$IFn$_invoke$arity$2 ? pred__17007.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__17008) : pred__17007.call(null,cljs.core.cst$kw$schema,expr__17008)))){
return (new schema.core.Queue(G__17003,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17003),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17003){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__17003,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__11018__11019__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11018__11019__auto__),cljs.core.cst$sym$queue_QMARK_);
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__17005){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__17005),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17005,cljs.core.cst$kw$schema),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17012,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17014 = (((k17012 instanceof cljs.core.Keyword))?k17012.fqn:null);
switch (G__17014) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17012,else__5180__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.One{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17011){
var self__ = this;
var G__17011__$1 = this;
return (new cljs.core.RecordIter((0),G__17011__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17011){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17015 = cljs.core.keyword_identical_QMARK_;
var expr__17016 = k__5185__auto__;
if(cljs.core.truth_((pred__17015.cljs$core$IFn$_invoke$arity$2 ? pred__17015.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__17016) : pred__17015.call(null,cljs.core.cst$kw$schema,expr__17016)))){
return (new schema.core.One(G__17011,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17015.cljs$core$IFn$_invoke$arity$2 ? pred__17015.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optional_QMARK_,expr__17016) : pred__17015.call(null,cljs.core.cst$kw$optional_QMARK_,expr__17016)))){
return (new schema.core.One(self__.schema,G__17011,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17015.cljs$core$IFn$_invoke$arity$2 ? pred__17015.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__17016) : pred__17015.call(null,cljs.core.cst$kw$name,expr__17016)))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__17011,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17011),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17011){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__17011,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__17013){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__17013),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17013),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__17013),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17013,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__17024 = cljs.core.split_with((function (p1__17019_SHARP_){
return ((p1__17019_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__17019_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17024,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17024,(1),null);
var vec__17025 = cljs.core.split_with(((function (vec__17024,required,more){
return (function (p1__17020_SHARP_){
var and__4551__auto__ = (p1__17020_SHARP_ instanceof schema.core.One);
if(and__4551__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__17020_SHARP_);
} else {
return and__4551__auto__;
}
});})(vec__17024,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17025,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17025,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__17024,required,more,vec__17025,optional,more__$1){
return (function (p1__17021_SHARP_){
return !((p1__17021_SHARP_ instanceof schema.core.One));
});})(vec__17024,required,more,vec__17025,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_(x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__17026_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__17026_SHARP_),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__17027 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17027,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17027,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5335__auto__ = ((function (vec__17027,singles,multi,this$__$1){
return (function schema$core$iter__17028(s__17029){
return (new cljs.core.LazySeq(null,((function (vec__17027,singles,multi,this$__$1){
return (function (){
var s__17029__$1 = s__17029;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17029__$1);
if(temp__4425__auto__){
var s__17029__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17029__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__17029__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__17031 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__17030 = (0);
while(true){
if((i__17030 < size__5334__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__17030);
cljs.core.chunk_append(b__17031,(function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (i__17030,required_QMARK_,s,c__5333__auto__,size__5334__auto__,b__17031,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq(x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
var G__17038_17049 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__17038_17049) : item_fn.call(null,G__17038_17049));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__17039_17050 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (i__17030,temp__4423__auto__,required_QMARK_,s,c__5333__auto__,size__5334__auto__,b__17031,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s.name),cljs.core.cst$sym$present_QMARK_);
});})(i__17030,temp__4423__auto__,required_QMARK_,s,c__5333__auto__,size__5334__auto__,b__17031,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__17039_17050) : item_fn.call(null,G__17039_17050));
} else {
}

return null;
}
});})(i__17030,required_QMARK_,s,c__5333__auto__,size__5334__auto__,b__17031,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1))
);
})());

var G__17051 = (i__17030 + (1));
i__17030 = G__17051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17031),schema$core$iter__17028(cljs.core.chunk_rest(s__17029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17031),null);
}
} else {
var s = cljs.core.first(s__17029__$2);
return cljs.core.cons((function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (required_QMARK_,s,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq(x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
var G__17040_17052 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__17040_17052) : item_fn.call(null,G__17040_17052));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__17041_17053 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s.name),cljs.core.cst$sym$present_QMARK_);
});})(temp__4423__auto__,required_QMARK_,s,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__17041_17053) : item_fn.call(null,G__17041_17053));
} else {
}

return null;
}
});})(required_QMARK_,s,s__17029__$2,temp__4425__auto__,vec__17027,singles,multi,this$__$1))
);
})(),schema$core$iter__17028(cljs.core.rest(s__17029__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17027,singles,multi,this$__$1))
,null,null));
});})(vec__17027,singles,multi,this$__$1))
;
return iter__5335__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(extra)),cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_);
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__17042 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17042,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17042,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5335__auto__ = ((function (vec__17042,singles,multi,this$__$1){
return (function schema$core$iter__17043(s__17044){
return (new cljs.core.LazySeq(null,((function (vec__17042,singles,multi,this$__$1){
return (function (){
var s__17044__$1 = s__17044;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17044__$1);
if(temp__4425__auto__){
var s__17044__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17044__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__17044__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__17046 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__17045 = (0);
while(true){
if((i__17045 < size__5334__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__17045);
cljs.core.chunk_append(b__17046,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one)));

var G__17054 = (i__17045 + (1));
i__17045 = G__17054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17046),schema$core$iter__17043(cljs.core.chunk_rest(s__17044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17046),null);
}
} else {
var s = cljs.core.first(s__17044__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one)),schema$core$iter__17043(cljs.core.rest(s__17044__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17042,singles,multi,this$__$1))
,null,null));
});})(vec__17042,singles,multi,this$__$1))
;
return iter__5335__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17059,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17061 = (((k17059 instanceof cljs.core.Keyword))?k17059.fqn:null);
switch (G__17061) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17059,else__5180__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.Record{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17058){
var self__ = this;
var G__17058__$1 = this;
return (new cljs.core.RecordIter((0),G__17058__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17058){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17062 = cljs.core.keyword_identical_QMARK_;
var expr__17063 = k__5185__auto__;
if(cljs.core.truth_((pred__17062.cljs$core$IFn$_invoke$arity$2 ? pred__17062.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$klass,expr__17063) : pred__17062.call(null,cljs.core.cst$kw$klass,expr__17063)))){
return (new schema.core.Record(G__17058,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17062.cljs$core$IFn$_invoke$arity$2 ? pred__17062.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__17063) : pred__17062.call(null,cljs.core.cst$kw$schema,expr__17063)))){
return (new schema.core.Record(self__.klass,G__17058,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17058),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17058){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__17058,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__17055_SHARP_){
return (p1__17055_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__17056_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__17056_SHARP_),self__.klass),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__4423__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__17057_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__17057_SHARP_),cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_);
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__17060){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__17060),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__17060),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17060,cljs.core.cst$kw$klass,cljs.core.array_seq([cljs.core.cst$kw$schema], 0)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__17069 = cljs.core.split_with((function (p1__17066_SHARP_){
return (p1__17066_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__17069,required,more){
return (function (p1__17067_SHARP_){
return schema.core.explain(p1__17067_SHARP_.schema);
});})(vec__17069,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5177__auto__,k__5178__auto__){
var self__ = this;
var this__5177__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5177__auto____$1,k__5178__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5179__auto__,k17071,else__5180__auto__){
var self__ = this;
var this__5179__auto____$1 = this;
var G__17073 = (((k17071 instanceof cljs.core.Keyword))?k17071.fqn:null);
switch (G__17073) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17071,else__5180__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5191__auto__,writer__5192__auto__,opts__5193__auto__){
var self__ = this;
var this__5191__auto____$1 = this;
var pr_pair__5194__auto__ = ((function (this__5191__auto____$1){
return (function (keyval__5195__auto__){
return cljs.core.pr_sequential_writer(writer__5192__auto__,cljs.core.pr_writer,""," ","",opts__5193__auto__,keyval__5195__auto__);
});})(this__5191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5192__auto__,pr_pair__5194__auto__,"#schema.core.FnSchema{",", ","}",opts__5193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17070){
var self__ = this;
var G__17070__$1 = this;
return (new cljs.core.RecordIter((0),G__17070__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5175__auto__){
var self__ = this;
var this__5175__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5171__auto__){
var self__ = this;
var this__5171__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5181__auto__){
var self__ = this;
var this__5181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5172__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5173__auto__,other__5174__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5186__auto__,k__5187__auto__){
var self__ = this;
var this__5186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__5187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5186__auto____$1),self__.__meta),k__5187__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5187__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5184__auto__,k__5185__auto__,G__17070){
var self__ = this;
var this__5184__auto____$1 = this;
var pred__17074 = cljs.core.keyword_identical_QMARK_;
var expr__17075 = k__5185__auto__;
if(cljs.core.truth_((pred__17074.cljs$core$IFn$_invoke$arity$2 ? pred__17074.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$output_DASH_schema,expr__17075) : pred__17074.call(null,cljs.core.cst$kw$output_DASH_schema,expr__17075)))){
return (new schema.core.FnSchema(G__17070,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17074.cljs$core$IFn$_invoke$arity$2 ? pred__17074.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input_DASH_schemas,expr__17075) : pred__17074.call(null,cljs.core.cst$kw$input_DASH_schemas,expr__17075)))){
return (new schema.core.FnSchema(self__.output_schema,G__17070,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5185__auto__,G__17070),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5189__auto__){
var self__ = this;
var this__5189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5176__auto__,G__17070){
var self__ = this;
var this__5176__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__17070,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5182__auto__,entry__5183__auto__){
var self__ = this;
var this__5182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5183__auto__)){
return cljs.core._assoc(this__5182__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5182__auto____$1,entry__5183__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__11018__11019__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11018__11019__auto__),cljs.core.cst$sym$ifn_QMARK_);
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__5211__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__5211__auto__,writer__5212__auto__){
return cljs.core._write(writer__5212__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__17072){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__17072),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__17072),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17072,cljs.core.cst$kw$output_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$input_DASH_schemas], 0)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__4563__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
var m__10753__auto__ = cljs.core.meta(f);
var k__10754__auto__ = cljs.core.cst$kw$schema;
var temp__4423__auto__ = cljs.core.find(m__10753__auto__,k__10754__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__10755__auto__ = temp__4423__auto__;
return cljs.core.val(pair__10755__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__10754__auto__,m__10753__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(schema.utils.max_value_length,max_length) : cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length));
});
