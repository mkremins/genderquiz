// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.display_name[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core.display_name["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.init_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core.init_state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.should_update[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5219__auto__.call(null,this$,next_props,next_state));
} else {
var m__5219__auto____$1 = (om.core.should_update["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5219__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_mount[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.did_mount[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_unmount[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_update[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5219__auto__.call(null,this$,next_props,next_state));
} else {
var m__5219__auto____$1 = (om.core.will_update["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5219__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.did_update[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5219__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__5219__auto____$1 = (om.core.did_update["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5219__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_receive_props[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5219__auto__.call(null,this$,next_props));
} else {
var m__5219__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5219__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.render[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core.render["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.render_props[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5219__auto__.call(null,this$,props,state));
} else {
var m__5219__auto____$1 = (om.core.render_props["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5219__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.render_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5219__auto__.call(null,this$,state));
} else {
var m__5219__auto____$1 = (om.core.render_state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5219__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5219__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__5219__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5219__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args17581 = [];
var len__5621__auto___17584 = arguments.length;
var i__5622__auto___17585 = (0);
while(true){
if((i__5622__auto___17585 < len__5621__auto___17584)){
args17581.push((arguments[i__5622__auto___17585]));

var G__17586 = (i__5622__auto___17585 + (1));
i__5622__auto___17585 = G__17586;
continue;
} else {
}
break;
}

var G__17583 = args17581.length;
switch (G__17583) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17581.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core._get_state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5219__auto__.call(null,this$,ks));
} else {
var m__5219__auto____$1 = (om.core._get_state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5219__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args17588 = [];
var len__5621__auto___17591 = arguments.length;
var i__5622__auto___17592 = (0);
while(true){
if((i__5622__auto___17592 < len__5621__auto___17591)){
args17588.push((arguments[i__5622__auto___17592]));

var G__17593 = (i__5622__auto___17592 + (1));
i__5622__auto___17592 = G__17593;
continue;
} else {
}
break;
}

var G__17590 = args17588.length;
switch (G__17590) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17588.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_render_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_render_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5219__auto__.call(null,this$,ks));
} else {
var m__5219__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5219__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args17595 = [];
var len__5621__auto___17598 = arguments.length;
var i__5622__auto___17599 = (0);
while(true){
if((i__5622__auto___17599 < len__5621__auto___17598)){
args17595.push((arguments[i__5622__auto___17599]));

var G__17600 = (i__5622__auto___17599 + (1));
i__5622__auto___17599 = G__17600;
continue;
} else {
}
break;
}

var G__17597 = args17595.length;
switch (G__17597) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17595.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5219__auto__.call(null,this$,val,render));
} else {
var m__5219__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5219__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5219__auto__.call(null,this$,ks,val,render));
} else {
var m__5219__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5219__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_queue[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5219__auto__.call(null,this$,c));
} else {
var m__5219__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5219__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._value[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5219__auto__.call(null,x));
} else {
var m__5219__auto____$1 = (om.core._value["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5219__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._path[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5219__auto__.call(null,cursor));
} else {
var m__5219__auto____$1 = (om.core._path["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5219__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5219__auto__.call(null,cursor));
} else {
var m__5219__auto____$1 = (om.core._state["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5219__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args17602 = [];
var len__5621__auto___17605 = arguments.length;
var i__5622__auto___17606 = (0);
while(true){
if((i__5622__auto___17606 < len__5621__auto___17605)){
args17602.push((arguments[i__5622__auto___17606]));

var G__17607 = (i__5622__auto___17606 + (1));
i__5622__auto___17606 = G__17607;
continue;
} else {
}
break;
}

var G__17604 = args17602.length;
switch (G__17604) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17602.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5218__auto__ = (((value == null))?null:value);
var m__5219__auto__ = (om.core._to_cursor[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__5219__auto__.call(null,value,state));
} else {
var m__5219__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__5219__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5218__auto__ = (((value == null))?null:value);
var m__5219__auto__ = (om.core._to_cursor[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5219__auto__.call(null,value,state,path));
} else {
var m__5219__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5219__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._derive[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5219__auto__.call(null,cursor,derived,state,path));
} else {
var m__5219__auto____$1 = (om.core._derive["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5219__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5219__auto__.call(null,cursor,korks,f,tag));
} else {
var m__5219__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5219__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5219__auto__.call(null,x,key,tx_listen));
} else {
var m__5219__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5219__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__5219__auto__.call(null,x,key));
} else {
var m__5219__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__5219__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5219__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__5219__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5219__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5219__auto__.call(null,this$,id,p,val));
} else {
var m__5219__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5219__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5219__auto__.call(null,this$,id,p));
} else {
var m__5219__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5219__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5219__auto__.call(null,this$,id));
} else {
var m__5219__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5219__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_property[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5219__auto__.call(null,this$,id,p));
} else {
var m__5219__auto____$1 = (om.core._get_property["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5219__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._root_key[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5219__auto__.call(null,cursor));
} else {
var m__5219__auto____$1 = (om.core._root_key["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5219__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._adapt[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5219__auto__.call(null,this$,other));
} else {
var m__5219__auto____$1 = (om.core._adapt["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5219__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5219__auto__.call(null,this$,c));
} else {
var m__5219__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5219__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5219__auto__.call(null,this$,c));
} else {
var m__5219__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5219__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_deps[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return (m__5219__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto__.call(null,this$));
} else {
var m__5219__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5219__auto____$1 == null))){
return (m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5219__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5219__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))], null);
if(!((tag == null))){
var G__17613 = cursor;
var G__17614 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__17613,G__17614) : om.core.notify_STAR_.call(null,G__17613,G__17614));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args17617 = [];
var len__5621__auto___17621 = arguments.length;
var i__5622__auto___17622 = (0);
while(true){
if((i__5622__auto___17622 < len__5621__auto___17621)){
args17617.push((arguments[i__5622__auto___17622]));

var G__17623 = (i__5622__auto___17622 + (1));
i__5622__auto___17622 = G__17623;
continue;
} else {
}
break;
}

var G__17619 = args17617.length;
switch (G__17619) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17617.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__17620 = (x.props["__om_cursor"]);
var G__17620__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__17620,korks__$1):G__17620);
return G__17620__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args17625 = [];
var len__5621__auto___17628 = arguments.length;
var i__5622__auto___17629 = (0);
while(true){
if((i__5622__auto___17629 < len__5621__auto___17628)){
args17625.push((arguments[i__5622__auto___17629]));

var G__17630 = (i__5622__auto___17629 + (1));
i__5622__auto___17629 = G__17630;
continue;
} else {
}
break;
}

var G__17627 = args17625.length;
switch (G__17627) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17625.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args17632 = [];
var len__5621__auto___17635 = arguments.length;
var i__5622__auto___17636 = (0);
while(true){
if((i__5622__auto___17636 < len__5621__auto___17635)){
args17632.push((arguments[i__5622__auto___17636]));

var G__17637 = (i__5622__auto___17636 + (1));
i__5622__auto___17636 = G__17637;
continue;
} else {
}
break;
}

var G__17634 = args17632.length;
switch (G__17634) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17632.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__17640 = state;
(G__17640["__om_prev_state"] = (state["__om_state"]));

(G__17640["__om_state"] = pending_state);

(G__17640["__om_pending_state"] = null);

return G__17640;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args17641 = [];
var len__5621__auto___17644 = arguments.length;
var i__5622__auto___17645 = (0);
while(true){
if((i__5622__auto___17645 < len__5621__auto___17644)){
args17641.push((arguments[i__5622__auto___17645]));

var G__17646 = (i__5622__auto___17645 + (1));
i__5622__auto___17645 = G__17646;
continue;
} else {
}
break;
}

var G__17643 = args17641.length;
switch (G__17643) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17641.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4563__auto__ = props;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4563__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17649 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17649) : cljs.core.deref.call(null,G__17649));
})(),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref_state) : cljs.core.deref.call(null,ref_state)),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_17672 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4563__auto__ = (state_17672["__om_prev_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (state_17672["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__17653 = cljs.core.seq(refs);
var chunk__17654 = null;
var count__17655 = (0);
var i__17656 = (0);
while(true){
if((i__17656 < count__17655)){
var ref = chunk__17654.cljs$core$IIndexed$_nth$arity$2(null,i__17656);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__17673 = seq__17653;
var G__17674 = chunk__17654;
var G__17675 = count__17655;
var G__17676 = (i__17656 + (1));
seq__17653 = G__17673;
chunk__17654 = G__17674;
count__17655 = G__17675;
i__17656 = G__17676;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__17653);
if(temp__4425__auto____$1){
var seq__17653__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17653__$1)){
var c__5366__auto__ = cljs.core.chunk_first(seq__17653__$1);
var G__17677 = cljs.core.chunk_rest(seq__17653__$1);
var G__17678 = c__5366__auto__;
var G__17679 = cljs.core.count(c__5366__auto__);
var G__17680 = (0);
seq__17653 = G__17677;
chunk__17654 = G__17678;
count__17655 = G__17679;
i__17656 = G__17680;
continue;
} else {
var ref = cljs.core.first(seq__17653__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__17681 = cljs.core.next(seq__17653__$1);
var G__17682 = null;
var G__17683 = (0);
var G__17684 = (0);
seq__17653 = G__17681;
chunk__17654 = G__17682;
count__17655 = G__17683;
i__17656 = G__17684;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4551__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__4551__auto__)){
var and__4551__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__4551__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__4551__auto____$1;
}
} else {
return and__4551__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4551__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4551__auto__){
return cljs.core.some(((function (and__4551__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__17650_SHARP_){
return om.core.ref_changed_QMARK_(p1__17650_SHARP_);
});})(and__4551__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4551__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_17659 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_17660 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_17661 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_17662 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_17663 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17663;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17662;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17661;

om.core._STAR_state_STAR_ = _STAR_state_STAR_17660;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_17659;
}}),(function (next_props,next_state){
var this$ = this;
var c_17685 = om.core.children(this$);
if(((!((c_17685 == null)))?(((false) || (c_17685.om$core$IWillUpdate$))?true:(((!c_17685.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_17685):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_17685))){
var state_17686 = this$.state;
om.core.will_update(c_17685,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4563__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4563__auto__ = id;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_17687 = om.core.children(this$);
if(((!((c_17687 == null)))?(((false) || (c_17687.om$core$IWillMount$))?true:(((!c_17687.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_17687):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_17687))){
om.core.will_mount(c_17687);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x17689 = obj;
x17689.om$core$ISetState$ = true;

x17689.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17689){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4551__auto__ = !((app_state == null));
if(and__4551__auto__){
return render;
} else {
return and__4551__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x17689))
;

x17689.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17689){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4551__auto__ = !((app_state == null));
if(and__4551__auto__){
return render;
} else {
return and__4551__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x17689))
;

x17689.om$core$IGetRenderState$ = true;

x17689.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17689){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x17689))
;

x17689.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17689){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17689))
;

x17689.om$core$IGetState$ = true;

x17689.om$core$IGetState$_get_state$arity$1 = ((function (x17689){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4563__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (state["__om_state"]);
}
});})(x17689))
;

x17689.om$core$IGetState$_get_state$arity$2 = ((function (x17689){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17689))
;

return x17689;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__17692 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__17693 = "reactid";
return goog.dom.dataset.get(G__17692,G__17693);
})();
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4563__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4563__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_17704 = om.core.children(this$);
if(((!((c_17704 == null)))?(((false) || (c_17704.om$core$IWillMount$))?true:(((!c_17704.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_17704):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_17704))){
om.core.will_mount(c_17704);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__17698 = cljs.core.seq(refs);
var chunk__17699 = null;
var count__17700 = (0);
var i__17701 = (0);
while(true){
if((i__17701 < count__17700)){
var ref = chunk__17699.cljs$core$IIndexed$_nth$arity$2(null,i__17701);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__17705 = seq__17698;
var G__17706 = chunk__17699;
var G__17707 = count__17700;
var G__17708 = (i__17701 + (1));
seq__17698 = G__17705;
chunk__17699 = G__17706;
count__17700 = G__17707;
i__17701 = G__17708;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__17698);
if(temp__4425__auto____$1){
var seq__17698__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17698__$1)){
var c__5366__auto__ = cljs.core.chunk_first(seq__17698__$1);
var G__17709 = cljs.core.chunk_rest(seq__17698__$1);
var G__17710 = c__5366__auto__;
var G__17711 = cljs.core.count(c__5366__auto__);
var G__17712 = (0);
seq__17698 = G__17709;
chunk__17699 = G__17710;
count__17700 = G__17711;
i__17701 = G__17712;
continue;
} else {
var ref = cljs.core.first(seq__17698__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__17713 = cljs.core.next(seq__17698__$1);
var G__17714 = null;
var G__17715 = (0);
var G__17716 = (0);
seq__17698 = G__17713;
chunk__17699 = G__17714;
count__17700 = G__17715;
i__17701 = G__17716;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_17717 = this$.props;
var c_17718 = om.core.children(this$);
if(((!((c_17718 == null)))?(((false) || (c_17718.om$core$IWillUpdate$))?true:(((!c_17718.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_17718):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_17718))){
var state_17719 = this$.state;
om.core.will_update(c_17718,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_17720 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4563__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x17724 = cljs.core.clj__GT_js(methods$);
x17724.om$core$ISetState$ = true;

x17724.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17724){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4551__auto__ = !((gstate == null));
if(and__4551__auto__){
return render;
} else {
return and__4551__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x17724))
;

x17724.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17724){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x17724))
;

x17724.om$core$IGetRenderState$ = true;

x17724.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17724){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17725 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17725) : cljs.core.deref.call(null,G__17725));
})(),spath);
});})(x17724))
;

x17724.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17724){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17724))
;

x17724.om$core$IGetState$ = true;

x17724.om$core$IGetState$_get_state$arity$1 = ((function (x17724){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17726 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17726) : cljs.core.deref.call(null,G__17726));
})(),spath);
var or__4563__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x17724))
;

x17724.om$core$IGetState$_get_state$arity$2 = ((function (x17724){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17724))
;

return x17724;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17730){
var vec__17731 = p__17730;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17731,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__17732 = null;
var G__17732__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17732__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17732 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17732__2.call(this,self__,k);
case 3:
return G__17732__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17732.cljs$core$IFn$_invoke$arity$2 = G__17732__2;
G__17732.cljs$core$IFn$_invoke$arity$3 = G__17732__3;
return G__17732;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args17729){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17729)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write(writer__5162__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__17734 = null;
var G__17734__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17734__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17734 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17734__2.call(this,self__,k);
case 3:
return G__17734__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17734.cljs$core$IFn$_invoke$arity$2 = G__17734__2;
G__17734.cljs$core$IFn$_invoke$arity$3 = G__17734__3;
return G__17734;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args17733){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17733)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write(writer__5162__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x17736 = cljs.core.clone(val);
x17736.cljs$core$IDeref$ = true;

x17736.cljs$core$IDeref$_deref$arity$1 = ((function (x17736){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x17736))
;

x17736.om$core$ICursor$ = true;

x17736.om$core$ICursor$_path$arity$1 = ((function (x17736){
return (function (_){
var ___$1 = this;
return path;
});})(x17736))
;

x17736.om$core$ICursor$_state$arity$1 = ((function (x17736){
return (function (_){
var ___$1 = this;
return state;
});})(x17736))
;

x17736.om$core$ITransact$ = true;

x17736.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17736){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x17736))
;

x17736.cljs$core$IEquiv$ = true;

x17736.cljs$core$IEquiv$_equiv$arity$2 = ((function (x17736){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x17736))
;

return x17736;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args17737 = [];
var len__5621__auto___17742 = arguments.length;
var i__5622__auto___17743 = (0);
while(true){
if((i__5622__auto___17743 < len__5621__auto___17742)){
args17737.push((arguments[i__5622__auto___17743]));

var G__17744 = (i__5622__auto___17743 + (1));
i__5622__auto___17743 = G__17744;
continue;
} else {
}
break;
}

var G__17739 = args17737.length;
switch (G__17739) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17737.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$atom)], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__17748 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17748) : cljs.core.atom.call(null,G__17748));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x17754 = cljs.core.clone(x);
x17754.cljs$core$ICloneable$ = true;

x17754.cljs$core$ICloneable$_clone$arity$1 = ((function (x17754){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x17754))
;

x17754.om$core$IAdapt$ = true;

x17754.om$core$IAdapt$_adapt$arity$2 = ((function (x17754){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x17754))
;

x17754.om$core$ICursorDerive$ = true;

x17754.om$core$ICursorDerive$_derive$arity$4 = ((function (x17754){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x17754))
;

x17754.om$core$ITransact$ = true;

x17754.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17754){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x17754))
;

return x17754;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__17763 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17763) : cljs.core.atom.call(null,G__17763));
})())),path);
var x17764 = cljs.core.clone(cursor);
x17764.om$core$ICursorDerive$ = true;

x17764.om$core$ICursorDerive$_derive$arity$4 = ((function (x17764,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x17764,path,storage))
;

x17764.om$core$IOmRef$ = true;

x17764.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x17764,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x17764,path,storage))
;

x17764.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x17764,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x17764,path,storage))
;

x17764.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x17764,path,storage){
return (function (_){
var ___$1 = this;
var seq__17765 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage))));
var chunk__17766 = null;
var count__17767 = (0);
var i__17768 = (0);
while(true){
if((i__17768 < count__17767)){
var c = chunk__17766.cljs$core$IIndexed$_nth$arity$2(null,i__17768);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__17769 = seq__17765;
var G__17770 = chunk__17766;
var G__17771 = count__17767;
var G__17772 = (i__17768 + (1));
seq__17765 = G__17769;
chunk__17766 = G__17770;
count__17767 = G__17771;
i__17768 = G__17772;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17765);
if(temp__4425__auto__){
var seq__17765__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17765__$1)){
var c__5366__auto__ = cljs.core.chunk_first(seq__17765__$1);
var G__17773 = cljs.core.chunk_rest(seq__17765__$1);
var G__17774 = c__5366__auto__;
var G__17775 = cljs.core.count(c__5366__auto__);
var G__17776 = (0);
seq__17765 = G__17773;
chunk__17766 = G__17774;
count__17767 = G__17775;
i__17768 = G__17776;
continue;
} else {
var c = cljs.core.first(seq__17765__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__17777 = cljs.core.next(seq__17765__$1);
var G__17778 = null;
var G__17779 = (0);
var G__17780 = (0);
seq__17765 = G__17777;
chunk__17766 = G__17778;
count__17767 = G__17779;
i__17768 = G__17780;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17764,path,storage))
;

x17764.om$core$IOmRef$_get_deps$arity$1 = ((function (x17764,path,storage){
return (function (_){
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage));
});})(x17764,path,storage))
;

x17764.om$core$ITransact$ = true;

x17764.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17764,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x17764,path,storage))
;

return x17764;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4563__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_(ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$ref)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ref_DASH_cursor_QMARK_,cljs.core.cst$sym$ref)], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__17781 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17781) : cljs.core.atom.call(null,G__17781));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4563__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args17782 = [];
var len__5621__auto___17789 = arguments.length;
var i__5622__auto___17790 = (0);
while(true){
if((i__5622__auto___17790 < len__5621__auto___17789)){
args17782.push((arguments[i__5622__auto___17790]));

var G__17791 = (i__5622__auto___17790 + (1));
i__5622__auto___17790 = G__17791;
continue;
} else {
}
break;
}

var G__17784 = args17782.length;
switch (G__17784) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17782.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__17785_17793 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)));
var chunk__17786_17794 = null;
var count__17787_17795 = (0);
var i__17788_17796 = (0);
while(true){
if((i__17788_17796 < count__17787_17795)){
var f_17797 = chunk__17786_17794.cljs$core$IIndexed$_nth$arity$2(null,i__17788_17796);
(f_17797.cljs$core$IFn$_invoke$arity$0 ? f_17797.cljs$core$IFn$_invoke$arity$0() : f_17797.call(null));

var G__17798 = seq__17785_17793;
var G__17799 = chunk__17786_17794;
var G__17800 = count__17787_17795;
var G__17801 = (i__17788_17796 + (1));
seq__17785_17793 = G__17798;
chunk__17786_17794 = G__17799;
count__17787_17795 = G__17800;
i__17788_17796 = G__17801;
continue;
} else {
var temp__4425__auto___17802 = cljs.core.seq(seq__17785_17793);
if(temp__4425__auto___17802){
var seq__17785_17803__$1 = temp__4425__auto___17802;
if(cljs.core.chunked_seq_QMARK_(seq__17785_17803__$1)){
var c__5366__auto___17804 = cljs.core.chunk_first(seq__17785_17803__$1);
var G__17805 = cljs.core.chunk_rest(seq__17785_17803__$1);
var G__17806 = c__5366__auto___17804;
var G__17807 = cljs.core.count(c__5366__auto___17804);
var G__17808 = (0);
seq__17785_17793 = G__17805;
chunk__17786_17794 = G__17806;
count__17787_17795 = G__17807;
i__17788_17796 = G__17808;
continue;
} else {
var f_17809 = cljs.core.first(seq__17785_17803__$1);
(f_17809.cljs$core$IFn$_invoke$arity$0 ? f_17809.cljs$core$IFn$_invoke$arity$0() : f_17809.call(null));

var G__17810 = cljs.core.next(seq__17785_17803__$1);
var G__17811 = null;
var G__17812 = (0);
var G__17813 = (0);
seq__17785_17793 = G__17810;
chunk__17786_17794 = G__17811;
count__17787_17795 = G__17812;
i__17788_17796 = G__17813;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = (function (){var G__17814 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17814) : cljs.core.atom.call(null,G__17814));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4563__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,x));
if(or__4563__auto__){
return or__4563__auto__;
} else {
var or__4563__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x));
if(or__4563__auto____$1){
return or__4563__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRender,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRenderProps,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRenderState,cljs.core.cst$sym$x))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args17825 = [];
var len__5621__auto___17829 = arguments.length;
var i__5622__auto___17830 = (0);
while(true){
if((i__5622__auto___17830 < len__5621__auto___17829)){
args17825.push((arguments[i__5622__auto___17830]));

var G__17831 = (i__5622__auto___17830 + (1));
i__5622__auto___17830 = G__17831;
continue;
} else {
}
break;
}

var G__17827 = args17825.length;
switch (G__17827) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17825.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_17833 = (function (){var or__4563__auto__ = descriptor;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
var or__4563__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4563__auto____$1)){
return or__4563__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_17833 === goog.object.get(f,"om$tag"))))){
var factory_17834 = (function (){var G__17828 = React.createClass(rdesc_17833);
return React.createFactory(G__17828);
})();
goog.object.set(f,"om$descriptor",factory_17834);

goog.object.set(f,"om$tag",rdesc_17833);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args17835 = [];
var len__5621__auto___17838 = arguments.length;
var i__5622__auto___17839 = (0);
while(true){
if((i__5622__auto___17839 < len__5621__auto___17838)){
args17835.push((arguments[i__5622__auto___17839]));

var G__17840 = (i__5622__auto___17839 + (1));
i__5622__auto___17839 = G__17840;
continue;
} else {
}
break;
}

var G__17837 = args17835.length;
switch (G__17837) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17835.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args17842 = [];
var len__5621__auto___17849 = arguments.length;
var i__5622__auto___17850 = (0);
while(true){
if((i__5622__auto___17850 < len__5621__auto___17849)){
args17842.push((arguments[i__5622__auto___17850]));

var G__17851 = (i__5622__auto___17850 + (1));
i__5622__auto___17850 = G__17851;
continue;
} else {
}
break;
}

var G__17844 = args17842.length;
switch (G__17844) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17842.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_opts_QMARK_,cljs.core.cst$sym$m)], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__17845 = {"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__17845) : ctor.call(null,G__17845));
} else {
var map__17846 = m;
var map__17846__$1 = ((((!((map__17846 == null)))?((((map__17846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17846):map__17846);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__4563__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__17848 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__17846,map__17846__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__17846,map__17846__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__17846,map__17846__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__17846,map__17846__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4563__auto__ = rkey;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__17848) : ctor.call(null,G__17848));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args17853 = [];
var len__5621__auto___17856 = arguments.length;
var i__5622__auto___17857 = (0);
while(true){
if((i__5622__auto___17857 < len__5621__auto___17856)){
args17853.push((arguments[i__5622__auto___17857]));

var G__17858 = (i__5622__auto___17857 + (1));
i__5622__auto___17857 = G__17858;
continue;
} else {
}
break;
}

var G__17855 = args17853.length;
switch (G__17855) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17853.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args17860 = [];
var len__5621__auto___17863 = arguments.length;
var i__5622__auto___17864 = (0);
while(true){
if((i__5622__auto___17864 < len__5621__auto___17863)){
args17860.push((arguments[i__5622__auto___17864]));

var G__17865 = (i__5622__auto___17864 + (1));
i__5622__auto___17864 = G__17865;
continue;
} else {
}
break;
}

var G__17862 = args17860.length;
switch (G__17862) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17860.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_17889 = (function (){var G__17879 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17879) : cljs.core.atom.call(null,G__17879));
})();
var listeners_17890 = (function (){var G__17880 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17880) : cljs.core.atom.call(null,G__17880));
})();
var render_queue_17891 = (function (){var G__17881 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17881) : cljs.core.atom.call(null,G__17881));
})();
var x17882_17892 = state;
x17882_17892.om$core$IRootProperties$ = true;

x17882_17892.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_17889,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_17889,cljs.core.dissoc,id,k);
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_17889,cljs.core.dissoc,id);
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$IRootProperties$_get_property$arity$3 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(properties_17889) : cljs.core.deref.call(null,properties_17889)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$INotify$ = true;

x17882_17892.om$core$INotify$_listen_BANG_$arity$3 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_17890,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_17890,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$INotify$_notify_BANG_$arity$3 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__17883_17893 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(listeners_17890) : cljs.core.deref.call(null,listeners_17890)));
var chunk__17884_17894 = null;
var count__17885_17895 = (0);
var i__17886_17896 = (0);
while(true){
if((i__17886_17896 < count__17885_17895)){
var vec__17887_17897 = chunk__17884_17894.cljs$core$IIndexed$_nth$arity$2(null,i__17886_17896);
var __17898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887_17897,(0),null);
var f_17899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887_17897,(1),null);
(f_17899.cljs$core$IFn$_invoke$arity$2 ? f_17899.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_17899.call(null,tx_data,root_cursor));

var G__17900 = seq__17883_17893;
var G__17901 = chunk__17884_17894;
var G__17902 = count__17885_17895;
var G__17903 = (i__17886_17896 + (1));
seq__17883_17893 = G__17900;
chunk__17884_17894 = G__17901;
count__17885_17895 = G__17902;
i__17886_17896 = G__17903;
continue;
} else {
var temp__4425__auto___17904 = cljs.core.seq(seq__17883_17893);
if(temp__4425__auto___17904){
var seq__17883_17905__$1 = temp__4425__auto___17904;
if(cljs.core.chunked_seq_QMARK_(seq__17883_17905__$1)){
var c__5366__auto___17906 = cljs.core.chunk_first(seq__17883_17905__$1);
var G__17907 = cljs.core.chunk_rest(seq__17883_17905__$1);
var G__17908 = c__5366__auto___17906;
var G__17909 = cljs.core.count(c__5366__auto___17906);
var G__17910 = (0);
seq__17883_17893 = G__17907;
chunk__17884_17894 = G__17908;
count__17885_17895 = G__17909;
i__17886_17896 = G__17910;
continue;
} else {
var vec__17888_17911 = cljs.core.first(seq__17883_17905__$1);
var __17912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17888_17911,(0),null);
var f_17913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17888_17911,(1),null);
(f_17913.cljs$core$IFn$_invoke$arity$2 ? f_17913.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_17913.call(null,tx_data,root_cursor));

var G__17914 = cljs.core.next(seq__17883_17905__$1);
var G__17915 = null;
var G__17916 = (0);
var G__17917 = (0);
seq__17883_17893 = G__17914;
chunk__17884_17894 = G__17915;
count__17885_17895 = G__17916;
i__17886_17896 = G__17917;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$IRenderQueue$ = true;

x17882_17892.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (this$){
var this$__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_17891) : cljs.core.deref.call(null,render_queue_17891));
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_17891) : cljs.core.deref.call(null,render_queue_17891)),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_17891,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

x17882_17892.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x17882_17892,properties_17889,listeners_17890,render_queue_17891){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_17891,cljs.core.empty);
});})(x17882_17892,properties_17889,listeners_17890,render_queue_17891))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x17923 = cljs.core.clone(cursor);
x17923.cljs$core$ICloneable$ = true;

x17923.cljs$core$ICloneable$_clone$arity$1 = ((function (x17923){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x17923))
;

x17923.om$core$IAdapt$ = true;

x17923.om$core$IAdapt$_adapt$arity$2 = ((function (x17923){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x17923))
;

x17923.om$core$IRootKey$ = true;

x17923.om$core$IRootKey$_root_key$arity$1 = ((function (x17923){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x17923))
;

return x17923;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__17924){
var map__17993 = p__17924;
var map__17993__$1 = ((((!((map__17993 == null)))?((((map__17993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17993):map__17993);
var options = map__17993__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,cljs.core.cst$kw$raf);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$target))], 0)))].join('')));
}

var roots_SINGLEQUOTE__18061 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots));
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__18061,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__18061,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.atom.call(null,value)));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4563__auto__ = adapt;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.array_seq([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state__$1) : cljs.core.deref.call(null,state__$1));
var cursor = (function (){var G__18027 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__18027) : adapt__$1.call(null,G__18027));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_18062 = om.dom.render((function (){var _STAR_descriptor_STAR_18028 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_18029 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_18030 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_18031 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18031;

om.core._STAR_state_STAR_ = _STAR_state_STAR_18030;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18029;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18028;
}})(),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c_18062) : cljs.core.reset_BANG_.call(null,ret,c_18062));
} else {
}
}

var queue_18063 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_18063)){
} else {
var seq__18032_18064 = cljs.core.seq(queue_18063);
var chunk__18033_18065 = null;
var count__18034_18066 = (0);
var i__18035_18067 = (0);
while(true){
if((i__18035_18067 < count__18034_18066)){
var c_18068 = chunk__18033_18065.cljs$core$IIndexed$_nth$arity$2(null,i__18035_18067);
if(cljs.core.truth_(c_18068.isMounted())){
var temp__4425__auto___18069 = (c_18068.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___18069)){
var next_props_18070 = temp__4425__auto___18069;
(c_18068.props["__om_cursor"] = next_props_18070);

(c_18068.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4563__auto__ = !((function (){var G__18037 = om.core.children(c_18068);
if(!((G__18037 == null))){
if((false) || (G__18037.om$core$ICheckState$)){
return true;
} else {
if((!G__18037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18037);
}
})());
if(or__4563__auto__){
return or__4563__auto__;
} else {
return c_18068.shouldComponentUpdate(c_18068.props,c_18068.state);
}
})())){
c_18068.forceUpdate();
} else {
}
} else {
}

var G__18071 = seq__18032_18064;
var G__18072 = chunk__18033_18065;
var G__18073 = count__18034_18066;
var G__18074 = (i__18035_18067 + (1));
seq__18032_18064 = G__18071;
chunk__18033_18065 = G__18072;
count__18034_18066 = G__18073;
i__18035_18067 = G__18074;
continue;
} else {
var temp__4425__auto___18075 = cljs.core.seq(seq__18032_18064);
if(temp__4425__auto___18075){
var seq__18032_18076__$1 = temp__4425__auto___18075;
if(cljs.core.chunked_seq_QMARK_(seq__18032_18076__$1)){
var c__5366__auto___18077 = cljs.core.chunk_first(seq__18032_18076__$1);
var G__18078 = cljs.core.chunk_rest(seq__18032_18076__$1);
var G__18079 = c__5366__auto___18077;
var G__18080 = cljs.core.count(c__5366__auto___18077);
var G__18081 = (0);
seq__18032_18064 = G__18078;
chunk__18033_18065 = G__18079;
count__18034_18066 = G__18080;
i__18035_18067 = G__18081;
continue;
} else {
var c_18082 = cljs.core.first(seq__18032_18076__$1);
if(cljs.core.truth_(c_18082.isMounted())){
var temp__4425__auto___18083__$1 = (c_18082.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___18083__$1)){
var next_props_18084 = temp__4425__auto___18083__$1;
(c_18082.props["__om_cursor"] = next_props_18084);

(c_18082.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4563__auto__ = !((function (){var G__18039 = om.core.children(c_18082);
if(!((G__18039 == null))){
if((false) || (G__18039.om$core$ICheckState$)){
return true;
} else {
if((!G__18039.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18039);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18039);
}
})());
if(or__4563__auto__){
return or__4563__auto__;
} else {
return c_18082.shouldComponentUpdate(c_18082.props,c_18082.state);
}
})())){
c_18082.forceUpdate();
} else {
}
} else {
}

var G__18085 = cljs.core.next(seq__18032_18076__$1);
var G__18086 = null;
var G__18087 = (0);
var G__18088 = (0);
seq__18032_18064 = G__18085;
chunk__18033_18065 = G__18086;
count__18034_18066 = G__18087;
i__18035_18067 = G__18088;
continue;
}
} else {
}
}
break;
}
}

var _refs_18089 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core._refs) : cljs.core.deref.call(null,om.core._refs));
if(cljs.core.empty_QMARK_(_refs_18089)){
} else {
var seq__18040_18090 = cljs.core.seq(_refs_18089);
var chunk__18041_18091 = null;
var count__18042_18092 = (0);
var i__18043_18093 = (0);
while(true){
if((i__18043_18093 < count__18042_18092)){
var vec__18044_18094 = chunk__18041_18091.cljs$core$IIndexed$_nth$arity$2(null,i__18043_18093);
var path_18095__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18044_18094,(0),null);
var cs_18096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18044_18094,(1),null);
var cs_18097__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_18096) : cljs.core.deref.call(null,cs_18096));
var seq__18045_18098 = cljs.core.seq(cs_18097__$1);
var chunk__18046_18099 = null;
var count__18047_18100 = (0);
var i__18048_18101 = (0);
while(true){
if((i__18048_18101 < count__18047_18100)){
var vec__18049_18102 = chunk__18046_18099.cljs$core$IIndexed$_nth$arity$2(null,i__18048_18101);
var id_18103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049_18102,(0),null);
var c_18104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049_18102,(1),null);
if(cljs.core.truth_(c_18104.shouldComponentUpdate(c_18104.props,c_18104.state))){
c_18104.forceUpdate();
} else {
}

var G__18105 = seq__18045_18098;
var G__18106 = chunk__18046_18099;
var G__18107 = count__18047_18100;
var G__18108 = (i__18048_18101 + (1));
seq__18045_18098 = G__18105;
chunk__18046_18099 = G__18106;
count__18047_18100 = G__18107;
i__18048_18101 = G__18108;
continue;
} else {
var temp__4425__auto___18109 = cljs.core.seq(seq__18045_18098);
if(temp__4425__auto___18109){
var seq__18045_18110__$1 = temp__4425__auto___18109;
if(cljs.core.chunked_seq_QMARK_(seq__18045_18110__$1)){
var c__5366__auto___18111 = cljs.core.chunk_first(seq__18045_18110__$1);
var G__18112 = cljs.core.chunk_rest(seq__18045_18110__$1);
var G__18113 = c__5366__auto___18111;
var G__18114 = cljs.core.count(c__5366__auto___18111);
var G__18115 = (0);
seq__18045_18098 = G__18112;
chunk__18046_18099 = G__18113;
count__18047_18100 = G__18114;
i__18048_18101 = G__18115;
continue;
} else {
var vec__18050_18116 = cljs.core.first(seq__18045_18110__$1);
var id_18117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18050_18116,(0),null);
var c_18118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18050_18116,(1),null);
if(cljs.core.truth_(c_18118.shouldComponentUpdate(c_18118.props,c_18118.state))){
c_18118.forceUpdate();
} else {
}

var G__18119 = cljs.core.next(seq__18045_18110__$1);
var G__18120 = null;
var G__18121 = (0);
var G__18122 = (0);
seq__18045_18098 = G__18119;
chunk__18046_18099 = G__18120;
count__18047_18100 = G__18121;
i__18048_18101 = G__18122;
continue;
}
} else {
}
}
break;
}

var G__18123 = seq__18040_18090;
var G__18124 = chunk__18041_18091;
var G__18125 = count__18042_18092;
var G__18126 = (i__18043_18093 + (1));
seq__18040_18090 = G__18123;
chunk__18041_18091 = G__18124;
count__18042_18092 = G__18125;
i__18043_18093 = G__18126;
continue;
} else {
var temp__4425__auto___18127 = cljs.core.seq(seq__18040_18090);
if(temp__4425__auto___18127){
var seq__18040_18128__$1 = temp__4425__auto___18127;
if(cljs.core.chunked_seq_QMARK_(seq__18040_18128__$1)){
var c__5366__auto___18129 = cljs.core.chunk_first(seq__18040_18128__$1);
var G__18130 = cljs.core.chunk_rest(seq__18040_18128__$1);
var G__18131 = c__5366__auto___18129;
var G__18132 = cljs.core.count(c__5366__auto___18129);
var G__18133 = (0);
seq__18040_18090 = G__18130;
chunk__18041_18091 = G__18131;
count__18042_18092 = G__18132;
i__18043_18093 = G__18133;
continue;
} else {
var vec__18051_18134 = cljs.core.first(seq__18040_18128__$1);
var path_18135__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051_18134,(0),null);
var cs_18136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051_18134,(1),null);
var cs_18137__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_18136) : cljs.core.deref.call(null,cs_18136));
var seq__18052_18138 = cljs.core.seq(cs_18137__$1);
var chunk__18053_18139 = null;
var count__18054_18140 = (0);
var i__18055_18141 = (0);
while(true){
if((i__18055_18141 < count__18054_18140)){
var vec__18056_18142 = chunk__18053_18139.cljs$core$IIndexed$_nth$arity$2(null,i__18055_18141);
var id_18143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18056_18142,(0),null);
var c_18144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18056_18142,(1),null);
if(cljs.core.truth_(c_18144.shouldComponentUpdate(c_18144.props,c_18144.state))){
c_18144.forceUpdate();
} else {
}

var G__18145 = seq__18052_18138;
var G__18146 = chunk__18053_18139;
var G__18147 = count__18054_18140;
var G__18148 = (i__18055_18141 + (1));
seq__18052_18138 = G__18145;
chunk__18053_18139 = G__18146;
count__18054_18140 = G__18147;
i__18055_18141 = G__18148;
continue;
} else {
var temp__4425__auto___18149__$1 = cljs.core.seq(seq__18052_18138);
if(temp__4425__auto___18149__$1){
var seq__18052_18150__$1 = temp__4425__auto___18149__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18052_18150__$1)){
var c__5366__auto___18151 = cljs.core.chunk_first(seq__18052_18150__$1);
var G__18152 = cljs.core.chunk_rest(seq__18052_18150__$1);
var G__18153 = c__5366__auto___18151;
var G__18154 = cljs.core.count(c__5366__auto___18151);
var G__18155 = (0);
seq__18052_18138 = G__18152;
chunk__18053_18139 = G__18153;
count__18054_18140 = G__18154;
i__18055_18141 = G__18155;
continue;
} else {
var vec__18057_18156 = cljs.core.first(seq__18052_18150__$1);
var id_18157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18057_18156,(0),null);
var c_18158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18057_18156,(1),null);
if(cljs.core.truth_(c_18158.shouldComponentUpdate(c_18158.props,c_18158.state))){
c_18158.forceUpdate();
} else {
}

var G__18159 = cljs.core.next(seq__18052_18150__$1);
var G__18160 = null;
var G__18161 = (0);
var G__18162 = (0);
seq__18052_18138 = G__18159;
chunk__18053_18139 = G__18160;
count__18054_18140 = G__18161;
i__18055_18141 = G__18162;
continue;
}
} else {
}
}
break;
}

var G__18163 = cljs.core.next(seq__18040_18128__$1);
var G__18164 = null;
var G__18165 = (0);
var G__18166 = (0);
seq__18040_18090 = G__18163;
chunk__18041_18091 = G__18164;
count__18042_18092 = G__18165;
i__18043_18093 = G__18166;
continue;
}
} else {
}
}
break;
}
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__18058 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__18059 = (16);
return setTimeout(G__18058,G__18059);
} else {
var G__18060 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__18060);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17993,map__17993__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$gdom_SLASH_isElement,cljs.core.cst$sym$target)], 0)))].join('')));
}

var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots)),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args18169 = [];
var len__5621__auto___18172 = arguments.length;
var i__5622__auto___18173 = (0);
while(true){
if((i__5622__auto___18173 < len__5621__auto___18172)){
args18169.push((arguments[i__5622__auto___18173]));

var G__18174 = (i__5622__auto___18173 + (1));
i__5622__auto___18173 = G__18174;
continue;
} else {
}
break;
}

var G__18171 = args18169.length;
switch (G__18171) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18169.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$transactable_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args18176 = [];
var len__5621__auto___18179 = arguments.length;
var i__5622__auto___18180 = (0);
while(true){
if((i__5622__auto___18180 < len__5621__auto___18179)){
args18176.push((arguments[i__5622__auto___18180]));

var G__18181 = (i__5622__auto___18180 + (1));
i__5622__auto___18180 = G__18181;
continue;
} else {
}
break;
}

var G__18178 = args18176.length;
switch (G__18178) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18176.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args18185 = [];
var len__5621__auto___18189 = arguments.length;
var i__5622__auto___18190 = (0);
while(true){
if((i__5622__auto___18190 < len__5621__auto___18189)){
args18185.push((arguments[i__5622__auto___18190]));

var G__18191 = (i__5622__auto___18190 + (1));
i__5622__auto___18190 = G__18191;
continue;
} else {
}
break;
}

var G__18187 = args18185.length;
switch (G__18187) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18185.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

var G__18188 = owner.refs;
var G__18188__$1 = (((G__18188 == null))?null:(G__18188[name]));
var G__18188__$2 = (((G__18188__$1 == null))?null:G__18188__$1.getDOMNode());
return G__18188__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

var G__18194 = owner.refs;
var G__18194__$1 = (((G__18194 == null))?null:goog.object.get(G__18194,name));
return G__18194__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args18195 = [];
var len__5621__auto___18198 = arguments.length;
var i__5622__auto___18199 = (0);
while(true){
if((i__5622__auto___18199 < len__5621__auto___18198)){
args18195.push((arguments[i__5622__auto___18199]));

var G__18200 = (i__5622__auto___18199 + (1));
i__5622__auto___18199 = G__18200;
continue;
} else {
}
break;
}

var G__18197 = args18195.length;
switch (G__18197) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18195.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args18202 = [];
var len__5621__auto___18205 = arguments.length;
var i__5622__auto___18206 = (0);
while(true){
if((i__5622__auto___18206 < len__5621__auto___18205)){
args18202.push((arguments[i__5622__auto___18206]));

var G__18207 = (i__5622__auto___18206 + (1));
i__5622__auto___18206 = G__18207;
continue;
} else {
}
break;
}

var G__18204 = args18202.length;
switch (G__18204) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18202.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args18209 = [];
var len__5621__auto___18214 = arguments.length;
var i__5622__auto___18215 = (0);
while(true){
if((i__5622__auto___18215 < len__5621__auto___18214)){
args18209.push((arguments[i__5622__auto___18215]));

var G__18216 = (i__5622__auto___18215 + (1));
i__5622__auto___18215 = G__18216;
continue;
} else {
}
break;
}

var G__18211 = args18209.length;
switch (G__18211) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18209.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__18212 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18212) : f.call(null,G__18212));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__18213 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18213) : f.call(null,G__18213));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args18218 = [];
var len__5621__auto___18223 = arguments.length;
var i__5622__auto___18224 = (0);
while(true){
if((i__5622__auto___18224 < len__5621__auto___18223)){
args18218.push((arguments[i__5622__auto___18224]));

var G__18225 = (i__5622__auto___18224 + (1));
i__5622__auto___18224 = G__18225;
continue;
} else {
}
break;
}

var G__18220 = args18218.length;
switch (G__18220) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18218.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__18221 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18221) : f.call(null,G__18221));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__18222 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18222) : f.call(null,G__18222));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args18227 = [];
var len__5621__auto___18230 = arguments.length;
var i__5622__auto___18231 = (0);
while(true){
if((i__5622__auto___18231 < len__5621__auto___18230)){
args18227.push((arguments[i__5622__auto___18231]));

var G__18232 = (i__5622__auto___18231 + (1));
i__5622__auto___18231 = G__18232;
continue;
} else {
}
break;
}

var G__18229 = args18227.length;
switch (G__18229) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18227.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
