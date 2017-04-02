// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__11550__11551__auto__){
if(!((p1__11550__11551__auto__ == null))){
if((false) || (p1__11550__11551__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__11550__11551__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__11550__11551__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__11550__11551__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.OutputSchema,cljs.core.cst$sym$output)], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16292_SHARP_){
return (cljs.core.val(p1__16292_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__16294 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16294,(1),null);
var p = vec__16294;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$missing_DASH_key,cljs.core.cst$kw$key,k,cljs.core.cst$kw$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___16300 = schema.utils.use_fn_validation;
var output_schema16295_16301 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema16296_16302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker16297_16303 = schema.core.checker(input_schema16296_16302);
var output_checker16298_16304 = schema.core.checker(output_schema16295_16301);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___16300,output_schema16295_16301,input_schema16296_16302,input_checker16297_16303,output_checker16298_16304){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__16299){
var validate__10822__auto__ = ufv___16300.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16299], null);
var temp__4425__auto___16306 = (input_checker16297_16303.cljs$core$IFn$_invoke$arity$1 ? input_checker16297_16303.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16305) : input_checker16297_16303.call(null,args__10823__auto___16305));
if(cljs.core.truth_(temp__4425__auto___16306)){
var error__10824__auto___16307 = temp__4425__auto___16306;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16307], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16296_16302,cljs.core.cst$kw$value,args__10823__auto___16305,cljs.core.cst$kw$error,error__10824__auto___16307], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var k = G__16299;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),cljs.core.cst$sym$schema$core_SLASH_optional_DASH_key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16308 = (output_checker16298_16304.cljs$core$IFn$_invoke$arity$1 ? output_checker16298_16304.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16298_16304.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16308)){
var error__10824__auto___16309 = temp__4425__auto___16308;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16309], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16295_16301,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16309], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16300,output_schema16295_16301,input_schema16296_16302,input_checker16297_16303,output_checker16298_16304))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema16295_16301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16296_16302], null)));
var ufv___16315 = schema.utils.use_fn_validation;
var output_schema16310_16316 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema16311_16317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker16312_16318 = schema.core.checker(input_schema16311_16317);
var output_checker16313_16319 = schema.core.checker(output_schema16310_16316);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___16315,output_schema16310_16316,input_schema16311_16317,input_checker16312_16318,output_checker16313_16319){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__16314){
var validate__10822__auto__ = ufv___16315.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16314], null);
var temp__4425__auto___16321 = (input_checker16312_16318.cljs$core$IFn$_invoke$arity$1 ? input_checker16312_16318.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16320) : input_checker16312_16318.call(null,args__10823__auto___16320));
if(cljs.core.truth_(temp__4425__auto___16321)){
var error__10824__auto___16322 = temp__4425__auto___16321;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16322], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16311_16317,cljs.core.cst$kw$value,args__10823__auto___16320,cljs.core.cst$kw$error,error__10824__auto___16322], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var s = G__16314;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16323 = (output_checker16313_16319.cljs$core$IFn$_invoke$arity$1 ? output_checker16313_16319.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16313_16319.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16323)){
var error__10824__auto___16324 = temp__4425__auto___16323;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16324], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16310_16316,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16324], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16315,output_schema16310_16316,input_schema16311_16317,input_checker16312_16318,output_checker16313_16319))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema16310_16316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16311_16317], null)));
var ufv___16330 = schema.utils.use_fn_validation;
var output_schema16325_16331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema16326_16332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker16327_16333 = schema.core.checker(input_schema16326_16332);
var output_checker16328_16334 = schema.core.checker(output_schema16325_16331);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___16330,output_schema16325_16331,input_schema16326_16332,input_checker16327_16333,output_checker16328_16334){
return (function plumbing$fnk$schema$split_schema_keys(G__16329){
var validate__10822__auto__ = ufv___16330.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16329], null);
var temp__4425__auto___16336 = (input_checker16327_16333.cljs$core$IFn$_invoke$arity$1 ? input_checker16327_16333.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16335) : input_checker16327_16333.call(null,args__10823__auto___16335));
if(cljs.core.truth_(temp__4425__auto___16336)){
var error__10824__auto___16337 = temp__4425__auto___16336;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16337], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16326_16332,cljs.core.cst$kw$value,args__10823__auto___16335,cljs.core.cst$kw$error,error__10824__auto___16337], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var s = G__16329;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16338 = (output_checker16328_16334.cljs$core$IFn$_invoke$arity$1 ? output_checker16328_16334.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16328_16334.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16338)){
var error__10824__auto___16339 = temp__4425__auto___16338;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16339], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16325_16331,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16339], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16330,output_schema16325_16331,input_schema16326_16332,input_checker16327_16333,output_checker16328_16334))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema16325_16331,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16326_16332], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__5628__auto__ = [];
var len__5621__auto___16347 = arguments.length;
var i__5622__auto___16348 = (0);
while(true){
if((i__5622__auto___16348 < len__5621__auto___16347)){
args__5628__auto__.push((arguments[i__5622__auto___16348]));

var G__16349 = (i__5622__auto___16348 + (1));
i__5622__auto___16348 = G__16349;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((3) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5629__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16344){
var vec__16345 = p__16344;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16345,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__16346 = temp__4423__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq16340){
var G__16341 = cljs.core.first(seq16340);
var seq16340__$1 = cljs.core.next(seq16340);
var G__16342 = cljs.core.first(seq16340__$1);
var seq16340__$2 = cljs.core.next(seq16340__$1);
var G__16343 = cljs.core.first(seq16340__$2);
var seq16340__$3 = cljs.core.next(seq16340__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__16341,G__16342,G__16343,seq16340__$3);
});
var ufv___16357 = schema.utils.use_fn_validation;
var output_schema16351_16358 = plumbing.fnk.schema.InputSchema;
var input_schema16352_16359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker16353_16360 = schema.core.checker(input_schema16352_16359);
var output_checker16354_16361 = schema.core.checker(output_schema16351_16358);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361){
return (function plumbing$fnk$schema$union_input_schemata(G__16355,G__16356){
var validate__10822__auto__ = ufv___16357.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16355,G__16356], null);
var temp__4425__auto___16363 = (input_checker16353_16360.cljs$core$IFn$_invoke$arity$1 ? input_checker16353_16360.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16362) : input_checker16353_16360.call(null,args__10823__auto___16362));
if(cljs.core.truth_(temp__4425__auto___16363)){
var error__10824__auto___16364 = temp__4425__auto___16363;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16364], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16352_16359,cljs.core.cst$kw$value,args__10823__auto___16362,cljs.core.cst$kw$error,error__10824__auto___16364], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var i1 = G__16355;
var i2 = G__16356;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10822__auto__,ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361){
return (function (p1__16350_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__16350_SHARP_))){
return schema.core.explicit_schema_key(p1__16350_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__10822__auto__,ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361))
,((function (validate__10822__auto__,ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$k1,cljs.core.cst$sym$k2)], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__10822__auto__,ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361))
,((function (validate__10822__auto__,ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__4551__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__4551__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__4551__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10822__auto__,ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16365 = (output_checker16354_16361.cljs$core$IFn$_invoke$arity$1 ? output_checker16354_16361.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16354_16361.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16365)){
var error__10824__auto___16366 = temp__4425__auto___16365;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16366], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16351_16358,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16366], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16357,output_schema16351_16358,input_schema16352_16359,input_checker16353_16360,output_checker16354_16361))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema16351_16358,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16352_16359], null)));
var ufv___16372 = schema.utils.use_fn_validation;
var output_schema16367_16373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema16368_16374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker16369_16375 = schema.core.checker(input_schema16368_16374);
var output_checker16370_16376 = schema.core.checker(output_schema16367_16373);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___16372,output_schema16367_16373,input_schema16368_16374,input_checker16369_16375,output_checker16370_16376){
return (function plumbing$fnk$schema$required_toplevel_keys(G__16371){
var validate__10822__auto__ = ufv___16372.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16371], null);
var temp__4425__auto___16378 = (input_checker16369_16375.cljs$core$IFn$_invoke$arity$1 ? input_checker16369_16375.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16377) : input_checker16369_16375.call(null,args__10823__auto___16377));
if(cljs.core.truth_(temp__4425__auto___16378)){
var error__10824__auto___16379 = temp__4425__auto___16378;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16379], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16368_16374,cljs.core.cst$kw$value,args__10823__auto___16377,cljs.core.cst$kw$error,error__10824__auto___16379], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var input_schema = G__16371;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10822__auto__,ufv___16372,output_schema16367_16373,input_schema16368_16374,input_checker16369_16375,output_checker16370_16376){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__10822__auto__,ufv___16372,output_schema16367_16373,input_schema16368_16374,input_checker16369_16375,output_checker16370_16376))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16380 = (output_checker16370_16376.cljs$core$IFn$_invoke$arity$1 ? output_checker16370_16376.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16370_16376.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16380)){
var error__10824__auto___16381 = temp__4425__auto___16380;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16381], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16367_16373,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16381], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16372,output_schema16367_16373,input_schema16368_16374,input_checker16369_16375,output_checker16370_16376))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema16367_16373,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16368_16374], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__16392(s__16393){
return (new cljs.core.LazySeq(null,(function (){
var s__16393__$1 = s__16393;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16393__$1);
if(temp__4425__auto__){
var s__16393__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16393__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16393__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16395 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16394 = (0);
while(true){
if((i__16394 < size__5334__auto__)){
var vec__16400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16394);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400,(1),null);
cljs.core.chunk_append(b__16395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__16402 = (i__16394 + (1));
i__16394 = G__16402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16395),plumbing$fnk$schema$guess_expr_output_schema_$_iter__16392(cljs.core.chunk_rest(s__16393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16395),null);
}
} else {
var vec__16401 = cljs.core.first(s__16393__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16401,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__16392(cljs.core.rest(s__16393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__(expr);
})());
} else {
return cljs.core.cst$sym$schema$core_SLASH_Any;
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),cljs.core.cst$sym$map_QMARK_);
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__16421(s__16422){
return (new cljs.core.LazySeq(null,(function (){
var s__16422__$1 = s__16422;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16422__$1);
if(temp__4425__auto__){
var s__16422__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16422__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16422__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16424 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16423 = (0);
while(true){
if((i__16423 < size__5334__auto__)){
var vec__16429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16423);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4563__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__16424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__16431 = (i__16423 + (1));
i__16423 = G__16431;
continue;
} else {
var G__16432 = (i__16423 + (1));
i__16423 = G__16432;
continue;
}
} else {
var G__16433 = (i__16423 + (1));
i__16423 = G__16433;
continue;
}
} else {
var G__16434 = (i__16423 + (1));
i__16423 = G__16434;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16424),plumbing$fnk$schema$schema_diff_$_iter__16421(cljs.core.chunk_rest(s__16422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16424),null);
}
} else {
var vec__16430 = cljs.core.first(s__16422__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16430,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4563__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__16421(cljs.core.rest(s__16422__$2)));
} else {
var G__16435 = cljs.core.rest(s__16422__$2);
s__16422__$1 = G__16435;
continue;
}
} else {
var G__16436 = cljs.core.rest(s__16422__$2);
s__16422__$1 = G__16436;
continue;
}
} else {
var G__16437 = cljs.core.rest(s__16422__$2);
s__16422__$1 = G__16437;
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
return iter__5335__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.cst$kw$failures,fails], null));
} else {
return null;
}
});
var ufv___16460 = schema.utils.use_fn_validation;
var output_schema16438_16461 = schema.core.Any;
var input_schema16439_16462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker16440_16463 = schema.core.checker(input_schema16439_16462);
var output_checker16441_16464 = schema.core.checker(output_schema16438_16461);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___16460,output_schema16438_16461,input_schema16439_16462,input_checker16440_16463,output_checker16441_16464){
return (function plumbing$fnk$schema$compose_schemata(G__16442,G__16443){
var validate__10822__auto__ = true;
if(validate__10822__auto__){
var args__10823__auto___16465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16442,G__16443], null);
var temp__4425__auto___16466 = (input_checker16440_16463.cljs$core$IFn$_invoke$arity$1 ? input_checker16440_16463.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16465) : input_checker16440_16463.call(null,args__10823__auto___16465));
if(cljs.core.truth_(temp__4425__auto___16466)){
var error__10824__auto___16467 = temp__4425__auto___16466;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16467], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16439_16462,cljs.core.cst$kw$value,args__10823__auto___16465,cljs.core.cst$kw$error,error__10824__auto___16467], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var G__16454 = G__16442;
var vec__16456 = G__16454;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16456,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16456,(1),null);
var G__16455 = G__16443;
var vec__16457 = G__16455;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(1),null);
var G__16454__$1 = G__16454;
var G__16455__$1 = G__16455;
while(true){
var vec__16458 = G__16454__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16458,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16458,(1),null);
var vec__16459 = G__16455__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16459,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16459,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10822__auto__){
var temp__4425__auto___16468 = (output_checker16441_16464.cljs$core$IFn$_invoke$arity$1 ? output_checker16441_16464.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16441_16464.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16468)){
var error__10824__auto___16469 = temp__4425__auto___16468;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16469], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16438_16461,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16469], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16460,output_schema16438_16461,input_schema16439_16462,input_checker16440_16463,output_checker16441_16464))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema16438_16461,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16439_16462], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___16568 = schema.utils.use_fn_validation;
var output_schema16470_16569 = schema.core.Any;
var input_schema16471_16570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker16472_16571 = schema.core.checker(input_schema16471_16570);
var output_checker16473_16572 = schema.core.checker(output_schema16470_16569);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function plumbing$fnk$schema$split_schema(G__16474,G__16475){
var validate__10822__auto__ = ufv___16568.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16474,G__16475], null);
var temp__4425__auto___16574 = (input_checker16472_16571.cljs$core$IFn$_invoke$arity$1 ? input_checker16472_16571.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16573) : input_checker16472_16571.call(null,args__10823__auto___16573));
if(cljs.core.truth_(temp__4425__auto___16574)){
var error__10824__auto___16575 = temp__4425__auto___16574;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16575], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16471_16570,cljs.core.cst$kw$value,args__10823__auto___16573,cljs.core.cst$kw$error,error__10824__auto___16575], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var s = G__16474;
var ks = G__16475;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__5335__auto__ = ((function (ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function plumbing$fnk$schema$split_schema_$_iter__16522(s__16523){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function (){
var s__16523__$1 = s__16523;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16523__$1);
if(temp__4425__auto__){
var s__16523__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16523__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16523__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16525 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16524 = (0);
while(true){
if((i__16524 < size__5334__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16524);
cljs.core.chunk_append(b__16525,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = ((function (i__16524,in_QMARK_,c__5333__auto__,size__5334__auto__,b__16525,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function plumbing$fnk$schema$split_schema_$_iter__16522_$_iter__16548(s__16549){
return (new cljs.core.LazySeq(null,((function (i__16524,in_QMARK_,c__5333__auto__,size__5334__auto__,b__16525,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function (){
var s__16549__$1 = s__16549;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16549__$1);
if(temp__4425__auto____$1){
var s__16549__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16549__$2)){
var c__5333__auto____$1 = cljs.core.chunk_first(s__16549__$2);
var size__5334__auto____$1 = cljs.core.count(c__5333__auto____$1);
var b__16551 = cljs.core.chunk_buffer(size__5334__auto____$1);
if((function (){var i__16550 = (0);
while(true){
if((i__16550 < size__5334__auto____$1)){
var vec__16556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto____$1,i__16550);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556,(1),null);
if(cljs.core.truth_((function (){var and__4551__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4551__auto__;
}
})())){
cljs.core.chunk_append(b__16551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16576 = (i__16550 + (1));
i__16550 = G__16576;
continue;
} else {
var G__16577 = (i__16550 + (1));
i__16550 = G__16577;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16551),plumbing$fnk$schema$split_schema_$_iter__16522_$_iter__16548(cljs.core.chunk_rest(s__16549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16551),null);
}
} else {
var vec__16557 = cljs.core.first(s__16549__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16557,(1),null);
if(cljs.core.truth_((function (){var and__4551__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4551__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__16522_$_iter__16548(cljs.core.rest(s__16549__$2)));
} else {
var G__16578 = cljs.core.rest(s__16549__$2);
s__16549__$1 = G__16578;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__16524,in_QMARK_,c__5333__auto__,size__5334__auto__,b__16525,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
,null,null));
});})(i__16524,in_QMARK_,c__5333__auto__,size__5334__auto__,b__16525,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
;
return iter__5335__auto__(s);
})()));

var G__16579 = (i__16524 + (1));
i__16524 = G__16579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16525),plumbing$fnk$schema$split_schema_$_iter__16522(cljs.core.chunk_rest(s__16523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16525),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__16523__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = ((function (in_QMARK_,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function plumbing$fnk$schema$split_schema_$_iter__16522_$_iter__16558(s__16559){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572){
return (function (){
var s__16559__$1 = s__16559;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16559__$1);
if(temp__4425__auto____$1){
var s__16559__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16559__$2)){
var c__5333__auto__ = cljs.core.chunk_first(s__16559__$2);
var size__5334__auto__ = cljs.core.count(c__5333__auto__);
var b__16561 = cljs.core.chunk_buffer(size__5334__auto__);
if((function (){var i__16560 = (0);
while(true){
if((i__16560 < size__5334__auto__)){
var vec__16566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5333__auto__,i__16560);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566,(1),null);
if(cljs.core.truth_((function (){var and__4551__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4551__auto__;
}
})())){
cljs.core.chunk_append(b__16561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16580 = (i__16560 + (1));
i__16560 = G__16580;
continue;
} else {
var G__16581 = (i__16560 + (1));
i__16560 = G__16581;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16561),plumbing$fnk$schema$split_schema_$_iter__16522_$_iter__16558(cljs.core.chunk_rest(s__16559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16561),null);
}
} else {
var vec__16567 = cljs.core.first(s__16559__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16567,(1),null);
if(cljs.core.truth_((function (){var and__4551__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4551__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__16522_$_iter__16558(cljs.core.rest(s__16559__$2)));
} else {
var G__16582 = cljs.core.rest(s__16559__$2);
s__16559__$1 = G__16582;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
,null,null));
});})(in_QMARK_,s__16523__$2,temp__4425__auto__,ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
;
return iter__5335__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__16522(cljs.core.rest(s__16523__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
,null,null));
});})(ks__$1,validate__10822__auto__,ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
;
return iter__5335__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16583 = (output_checker16473_16572.cljs$core$IFn$_invoke$arity$1 ? output_checker16473_16572.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16473_16572.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16583)){
var error__10824__auto___16584 = temp__4425__auto___16583;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16584], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16470_16569,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16584], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16568,output_schema16470_16569,input_schema16471_16570,input_checker16472_16571,output_checker16473_16572))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema16470_16569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16471_16570], null)));
var ufv___16615 = schema.utils.use_fn_validation;
var output_schema16585_16616 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema16586_16617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker16587_16618 = schema.core.checker(input_schema16586_16617);
var output_checker16588_16619 = schema.core.checker(output_schema16585_16616);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___16615,output_schema16585_16616,input_schema16586_16617,input_checker16587_16618,output_checker16588_16619){
return (function plumbing$fnk$schema$sequence_schemata(G__16589,G__16590){
var validate__10822__auto__ = ufv___16615.get_cell();
if(cljs.core.truth_(validate__10822__auto__)){
var args__10823__auto___16620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16589,G__16590], null);
var temp__4425__auto___16621 = (input_checker16587_16618.cljs$core$IFn$_invoke$arity$1 ? input_checker16587_16618.cljs$core$IFn$_invoke$arity$1(args__10823__auto___16620) : input_checker16587_16618.call(null,args__10823__auto___16620));
if(cljs.core.truth_(temp__4425__auto___16621)){
var error__10824__auto___16622 = temp__4425__auto___16621;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16622], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16586_16617,cljs.core.cst$kw$value,args__10823__auto___16620,cljs.core.cst$kw$error,error__10824__auto___16622], null));
} else {
}
} else {
}

var o__10825__auto__ = (function (){var G__16606 = G__16589;
var vec__16608 = G__16606;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16608,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16608,(1),null);
var G__16607 = G__16590;
var vec__16609 = G__16607;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(0),null);
var vec__16610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(1),null);
var G__16606__$1 = G__16606;
var G__16607__$1 = G__16607;
while(true){
var vec__16611 = G__16606__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16611,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16611,(1),null);
var vec__16612 = G__16607__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var vec__16613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__16614 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16614,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16614,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10822__auto__)){
var temp__4425__auto___16623 = (output_checker16588_16619.cljs$core$IFn$_invoke$arity$1 ? output_checker16588_16619.cljs$core$IFn$_invoke$arity$1(o__10825__auto__) : output_checker16588_16619.call(null,o__10825__auto__));
if(cljs.core.truth_(temp__4425__auto___16623)){
var error__10824__auto___16624 = temp__4425__auto___16623;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10824__auto___16624], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16585_16616,cljs.core.cst$kw$value,o__10825__auto__,cljs.core.cst$kw$error,error__10824__auto___16624], null));
} else {
}
} else {
}

return o__10825__auto__;
});})(ufv___16615,output_schema16585_16616,input_schema16586_16617,input_checker16587_16618,output_checker16588_16619))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema16585_16616,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16586_16617], null)));
