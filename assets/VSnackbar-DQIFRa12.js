import{b as N,u as A,V as x,f as F}from"./forwardRefs-C97S0G7w.js";import{p as O,q as Y,R as q,l as G,J as H,v as J,C as V,y as w,X as K,aH as j,K as z,aI as U,L as X,E as _,G as $,aJ as Q,z as W,n as Z,b as o,m as L,a6 as ee,ab as te}from"./index-D2okRfwb.js";import{D as ae,E as ne,c as se,q as oe,F as re,w as ie,f as le,x as ue,y as ce,g as me}from"./VGrid-DuvdOv0C.js";function ve(e){const s=w(e);let a=-1;function t(){clearInterval(a)}function v(){t(),te(()=>s.value=e)}function f(i){const d=i?getComputedStyle(i):{transitionDuration:.2},l=parseFloat(d.transitionDuration)*1e3||200;if(t(),s.value<=0)return;const k=performance.now();a=window.setInterval(()=>{const y=performance.now()-k+l;s.value=Math.max(e-y,0),s.value<=0&&t()},l)}return ee(t),{clear:t,time:s,start:f,reset:v}}const fe=O({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...ae({location:"bottom"}),...ne(),...se(),...oe(),...Y(),...q(N({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),be=G()({name:"VSnackbar",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const t=H(e,"modelValue"),{positionClasses:v}=re(e),{scopeId:f}=A(),{themeClasses:i}=J(e),{colorClasses:d,colorStyles:l,variantClasses:k}=ie(e),{roundedClasses:y}=le(e),u=ve(Number(e.timeout)),h=V(),S=V(),b=w(!1),g=w(0),T=V(),R=K(j,void 0);z(()=>!!R,()=>{const n=U();X(()=>{T.value=n.mainStyles.value})}),_(t,c),_(()=>e.timeout,c),$(()=>{t.value&&c()});let P=-1;function c(){u.reset(),window.clearTimeout(P);const n=Number(e.timeout);if(!t.value||n===-1)return;const r=Q(S.value);u.start(r),P=window.setTimeout(()=>{t.value=!1},n)}function p(){u.reset(),window.clearTimeout(P)}function D(){b.value=!0,p()}function I(){b.value=!1,c()}function B(n){g.value=n.touches[0].clientY}function E(n){Math.abs(g.value-n.changedTouches[0].clientY)>50&&(t.value=!1)}const M=W(()=>e.location.split(" ").reduce((n,r)=>(n[`v-snackbar--${r}`]=!0,n),{}));return Z(()=>{const n=x.filterProps(e),r=!!(a.default||a.text||e.text);return o(x,L({ref:h,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},M.value,v.value,e.class],style:[T.value,e.style]},n,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,contentProps:L({class:["v-snackbar__wrapper",i.value,d.value,y.value,k.value],style:[l.value],onPointerenter:D,onPointerleave:I},n.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:B,onTouchend:E},f),{default:()=>{var m,C;return[ue(!1,"v-snackbar"),e.timer&&!b.value&&o("div",{key:"timer",class:"v-snackbar__timer"},[o(ce,{ref:S,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":u.time.value},null)]),r&&o("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((m=a.text)==null?void 0:m.call(a))??e.text,(C=a.default)==null?void 0:C.call(a)]),a.actions&&o(me,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[o("div",{class:"v-snackbar__actions"},[a.actions({isActive:t})])]})]},activator:a.activator})}),F({},h)}});export{be as V};