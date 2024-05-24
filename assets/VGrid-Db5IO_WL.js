import{y as $,b3 as Ze,W as xe,p as x,aC as Z,aK as et,b4 as tt,X as I,ag as re,Q as j,R as q,S as U,j as ee,T as H,b5 as nt,k as g,E as L,G as N,b6 as at,b7 as st,b as o,aW as lt,m as ve,b2 as it,af as Be,b8 as fe,aw as X,s as O,n as A,aG as rt,N as me,v as te,_ as oe,$ as ot,F as Ve,a2 as ut,d as ue,ak as ct,Z as Pe,a1 as dt,aO as vt,z as Ee,q as ft,b9 as mt,am as pe,J as gt,ba as bt,at as ht,B as yt,U as Ct,l as ye,bb as _t,bc as Ce,av as St,a6 as kt,bd as wt,be as _e,aq as It,ar as xt}from"./index-J3b4gt5S.js";import{i as J,q as Bt,b as ne,u as K,e as ae,V as Se,r as Vt,m as Te,a as Le,c as Re,d as ze,f as $e,j as Ne,g as Pt,h as Et}from"./position-zUPWdk23.js";const pt=x({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),se=$(!1)({name:"VDefaultsProvider",props:pt(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:s,reset:l,root:d,scoped:u}=Ze(e);return xe(t,{reset:l,root:d,scoped:u,disabled:s}),()=>{var f;return(f=a.default)==null?void 0:f.call(a)}}}),Tt=["x-small","small","default","large","x-large"],ge=x({size:{type:[String,Number],default:"default"}},"size");function be(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z();return et(()=>{let a,t;return tt(Tt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:I(e.size),height:I(e.size)}),{sizeClasses:a,sizeStyles:t}})}const Lt=x({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:re,...j(),...ge(),...q({tag:"i"}),...U()},"VIcon"),le=$()({name:"VIcon",props:Lt(),setup(e,n){let{attrs:a,slots:t}=n;const s=ee(),{themeClasses:l}=H(e),{iconData:d}=nt(g(()=>s.value||e.icon)),{sizeClasses:u}=be(e),{textColorClasses:f,textColorStyles:v}=J(L(e,"color"));return N(()=>{var i,r;const m=(i=t.default)==null?void 0:i.call(t);m&&(s.value=(r=at(m).filter(h=>h.type===st&&h.children&&typeof h.children=="string")[0])==null?void 0:r.children);const b=!!(a.onClick||a.onClickOnce);return o(d.value.component,{tag:e.tag,icon:d.value.icon,class:["v-icon","notranslate",l.value,u.value,f.value,{"v-icon--clickable":b,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},v.value,e.style],role:b?"button":void 0,"aria-hidden":!b,tabindex:b?e.disabled?-1:0:void 0},{default:()=>[m]})}),{}}}),Rt=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Y=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:s,group:l,...d}=e,{component:u=l?it:Be,...f}=typeof t=="object"?t:{};return lt(u,ve(typeof t=="string"?{name:s?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:l}).filter(v=>{let[m,b]=v;return b!==void 0})),d),a)};function zt(e,n){if(!fe)return;const a=n.modifiers||{},t=n.value,{handler:s,options:l}=typeof t=="object"?t:{handler:t,options:{}},d=new IntersectionObserver(function(){var b;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const v=(b=e._observe)==null?void 0:b[n.instance.$.uid];if(!v)return;const m=u.some(i=>i.isIntersecting);s&&(!a.quiet||v.init)&&(!a.once||m||v.init)&&s(m,u,f),m&&a.once?Oe(e,n):v.init=!0},l);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:d},d.observe(e)}function Oe(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const $t={mounted:zt,unmounted:Oe},Nt=x({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Bt(),...j(),...ne(),...Rt()},"VImg"),mn=$()({name:"VImg",directives:{intersect:$t},props:Nt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=K(L(e,"color")),{roundedClasses:d}=ae(e),u=X("VImg"),f=O(""),v=ee(),m=O(e.eager?"loading":"idle"),b=O(),i=O(),r=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=g(()=>r.value.aspect||b.value/i.value||0);A(()=>e.src,()=>{c(m.value!=="idle")}),A(h,(y,S)=>{!y&&S&&v.value&&w(v.value)}),rt(()=>c());function c(y){if(!(e.eager&&y)&&!(fe&&!y&&!e.eager)){if(m.value="loading",r.value.lazySrc){const S=new Image;S.src=r.value.lazySrc,w(S,null)}r.value.src&&me(()=>{var S;a("loadstart",((S=v.value)==null?void 0:S.currentSrc)||r.value.src),setTimeout(()=>{var B;if(!u.isUnmounted)if((B=v.value)!=null&&B.complete){if(v.value.naturalWidth||_(),m.value==="error")return;h.value||w(v.value,null),m.value==="loading"&&C()}else h.value||w(v.value),P()})})}}function C(){var y;u.isUnmounted||(P(),w(v.value),m.value="loaded",a("load",((y=v.value)==null?void 0:y.currentSrc)||r.value.src))}function _(){var y;u.isUnmounted||(m.value="error",a("error",((y=v.value)==null?void 0:y.currentSrc)||r.value.src))}function P(){const y=v.value;y&&(f.value=y.currentSrc||y.src)}let E=-1;te(()=>{clearTimeout(E)});function w(y){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const B=()=>{if(clearTimeout(E),u.isUnmounted)return;const{naturalHeight:G,naturalWidth:he}=y;G||he?(b.value=he,i.value=G):!y.complete&&m.value==="loading"&&S!=null?E=window.setTimeout(B,S):(y.currentSrc.endsWith(".svg")||y.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,i.value=1)};B()}const R=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),p=()=>{var B;if(!r.value.src||m.value==="idle")return null;const y=o("img",{class:["v-img__img",R.value],style:{objectPosition:e.position},src:r.value.src,srcset:r.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:v,onLoad:C,onError:_},null),S=(B=t.sources)==null?void 0:B.call(t);return o(Y,{transition:e.transition,appear:!0},{default:()=>[oe(S?o("picture",{class:"v-img__picture"},[S,y]):y,[[ut,m.value==="loaded"]])]})},z=()=>o(Y,{transition:e.transition},{default:()=>[r.value.lazySrc&&m.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",R.value],style:{objectPosition:e.position},src:r.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),D=()=>t.placeholder?o(Y,{transition:e.transition,appear:!0},{default:()=>[(m.value==="loading"||m.value==="error"&&!t.error)&&o("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,F=()=>t.error?o(Y,{transition:e.transition,appear:!0},{default:()=>[m.value==="error"&&o("div",{class:"v-img__error"},[t.error()])]}):null,k=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=O(!1);{const y=A(h,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),y())})}return N(()=>{const y=Se.filterProps(e);return oe(o(Se,ve({class:["v-img",{"v-img--booting":!T.value},s.value,d.value,e.class],style:[{width:I(e.width==="auto"?b.value:e.width)},l.value,e.style]},y,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(Ve,null,[o(p,null,null),o(z,null,null),o(k,null,null),o(D,null,null),o(F,null,null)]),default:t.default}),[[ot("intersect"),{handler:c,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:v,state:m,naturalWidth:b,naturalHeight:i}}}),Ot=[null,"default","comfortable","compact"],Ae=x({density:{type:String,default:"default",validator:e=>Ot.includes(e)}},"density");function je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z();return{densityClasses:g(()=>`${n}--density-${e.density}`)}}const At=["elevated","flat","tonal","outlined","text","plain"];function jt(e,n){return o(Ve,null,[e&&o("span",{key:"overlay",class:`${n}__overlay`},null),o("span",{key:"underlay",class:`${n}__underlay`},null)])}const De=x({color:String,variant:{type:String,default:"elevated",validator:e=>At.includes(e)}},"variant");function Dt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z();const a=g(()=>{const{variant:l}=ue(e);return`${n}--variant-${l}`}),{colorClasses:t,colorStyles:s}=Vt(g(()=>{const{variant:l,color:d}=ue(e);return{[["elevated","flat"].includes(l)?"background":"text"]:d}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const Fe=x({baseColor:String,divided:Boolean,...Te(),...j(),...Ae(),...Le(),...ne(),...q(),...U(),...De()},"VBtnGroup"),ke=$()({name:"VBtnGroup",props:Fe(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=H(e),{densityClasses:s}=je(e),{borderClasses:l}=Re(e),{elevationClasses:d}=ze(e),{roundedClasses:u}=ae(e);xe({VBtn:{height:"auto",baseColor:L(e,"baseColor"),color:L(e,"color"),density:L(e,"density"),flat:!0,variant:L(e,"variant")}}),N(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,l.value,s.value,d.value,u.value,e.class],style:e.style},a))}}),Ft=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Gt=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function Mt(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=X("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=ct();Pe(Symbol.for(`${n.description}:id`),s);const l=dt(n,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const d=L(e,"value"),u=g(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:d,disabled:u},t),te(()=>{l.unregister(s)});const f=g(()=>l.isSelected(s)),v=g(()=>l.items.value[0].id===s),m=g(()=>l.items.value[l.items.value.length-1].id===s),b=g(()=>f.value&&[l.selectedClass.value,e.selectedClass]);return A(f,i=>{t.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:f,isFirst:v,isLast:m,toggle:()=>l.select(s,!f.value),select:i=>l.select(s,i),selectedClass:b,value:d,disabled:u,group:l}}function Wt(e,n){let a=!1;const t=vt([]),s=Ee(e,"modelValue",[],i=>i==null?[]:Ge(t,gt(i)),i=>{const r=Ut(t,i);return e.multiple?r:r[0]}),l=X("useGroup");function d(i,r){const h=i,c=Symbol.for(`${n.description}:id`),_=bt(c,l==null?void 0:l.vnode).indexOf(r);ue(h.value)==null&&(h.value=_,h.useIndexAsValue=!0),_>-1?t.splice(_,0,h):t.push(h)}function u(i){if(a)return;f();const r=t.findIndex(h=>h.id===i);t.splice(r,1)}function f(){const i=t.find(r=>!r.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}ft(()=>{f()}),te(()=>{a=!0}),mt(()=>{for(let i=0;i<t.length;i++)t[i].useIndexAsValue&&(t[i].value=i)});function v(i,r){const h=t.find(c=>c.id===i);if(!(r&&(h!=null&&h.disabled)))if(e.multiple){const c=s.value.slice(),C=c.findIndex(P=>P===i),_=~C;if(r=r??!_,_&&e.mandatory&&c.length<=1||!_&&e.max!=null&&c.length+1>e.max)return;C<0&&r?c.push(i):C>=0&&!r&&c.splice(C,1),s.value=c}else{const c=s.value.includes(i);if(e.mandatory&&c)return;s.value=r??!c?[i]:[]}}function m(i){if(e.multiple,s.value.length){const r=s.value[0],h=t.findIndex(_=>_.id===r);let c=(h+i)%t.length,C=t[c];for(;C.disabled&&c!==h;)c=(c+i)%t.length,C=t[c];if(C.disabled)return;s.value=[t[c].id]}else{const r=t.find(h=>!h.disabled);r&&(s.value=[r.id])}}const b={register:d,unregister:u,selected:s,select:v,disabled:L(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:i=>s.value.includes(i),selectedClass:g(()=>e.selectedClass),items:g(()=>t),getItemIndex:i=>qt(t,i)};return Pe(n,b),b}function qt(e,n){const a=Ge(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function Ge(e,n){const a=[];return n.forEach(t=>{const s=e.find(d=>pe(t,d.value)),l=e[t];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Ut(e,n){const a=[];return n.forEach(t=>{const s=e.findIndex(l=>l.id===t);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const Me=Symbol.for("vuetify:v-btn-toggle"),Ht=x({...Fe(),...Ft()},"VBtnToggle");$()({name:"VBtnToggle",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:l,select:d,selected:u}=Wt(e,Me);return N(()=>{const f=ke.filterProps(e);return o(ke,ve({class:["v-btn-toggle",e.class]},f,{style:e.style}),{default:()=>{var v;return[(v=a.default)==null?void 0:v.call(a,{isSelected:t,next:s,prev:l,select:d,selected:u})]}})}),{next:s,prev:l,select:d}}});function We(e,n){const a=ee(),t=O(!1);if(fe){const s=new IntersectionObserver(l=>{t.value=!!l.find(d=>d.isIntersecting)},n);te(()=>{s.disconnect()}),A(a,(l,d)=>{d&&(s.unobserve(d),t.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Xt=x({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...j(),...ge(),...q({tag:"div"}),...U()},"VProgressCircular"),Yt=$()({name:"VProgressCircular",props:Xt(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,l=ee(),{themeClasses:d}=H(e),{sizeClasses:u,sizeStyles:f}=be(e),{textColorClasses:v,textColorStyles:m}=J(L(e,"color")),{textColorClasses:b,textColorStyles:i}=J(L(e,"bgColor")),{intersectionRef:r,isIntersecting:h}=We(),{resizeRef:c,contentRect:C}=ht(),_=g(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),P=g(()=>Number(e.width)),E=g(()=>f.value?Number(e.size):C.value?C.value.width:Math.max(P.value,32)),w=g(()=>t/(1-P.value/E.value)*2),R=g(()=>P.value/E.value*w.value),p=g(()=>I((100-_.value)/100*s));return yt(()=>{r.value=l.value,c.value=l.value}),N(()=>o(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},d.value,u.value,v.value,e.class],style:[f.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[o("circle",{class:["v-progress-circular__underlay",b.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":p.value},null)]),a.default&&o("div",{class:"v-progress-circular__content"},[a.default({value:_.value})])]})),{}}}),Kt=x({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...j(),...$e({location:"top"}),...ne(),...q(),...U()},"VProgressLinear"),Jt=$()({name:"VProgressLinear",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Ee(e,"modelValue"),{isRtl:s,rtlClasses:l}=Ct(),{themeClasses:d}=H(e),{locationStyles:u}=Ne(e),{textColorClasses:f,textColorStyles:v}=J(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:b}=K(g(()=>e.bgColor||e.color)),{backgroundColorClasses:i,backgroundColorStyles:r}=K(g(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:c}=K(e,"color"),{roundedClasses:C}=ae(e),{intersectionRef:_,isIntersecting:P}=We(),E=g(()=>parseFloat(e.max)),w=g(()=>parseFloat(e.height)),R=g(()=>ye(parseFloat(e.bufferValue)/E.value*100,0,100)),p=g(()=>ye(parseFloat(t.value)/E.value*100,0,100)),z=g(()=>s.value!==e.reverse),D=g(()=>e.indeterminate?"fade-transition":"slide-x-transition");function F(k){if(!_.value)return;const{left:T,right:y,width:S}=_.value.getBoundingClientRect(),B=z.value?S-k.clientX+(y-S):k.clientX-T;t.value=Math.round(B/S*E.value)}return N(()=>o(e.tag,{ref:_,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&P.value,"v-progress-linear--reverse":z.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,d.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?I(w.value):0,"--v-progress-linear-height":I(w.value),...e.absolute?u.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:p.value,onClick:e.clickable&&F},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",f.value],style:{...v.value,[z.value?"left":"right"]:I(-w.value),borderTop:`${I(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${I(w.value/4)})`,width:I(100-R.value,"%"),"--v-progress-linear-stream-to":I(w.value*(z.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",m.value],style:[b.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),o("div",{class:["v-progress-linear__buffer",i.value],style:[r.value,{opacity:parseFloat(e.bufferOpacity),width:I(R.value,"%")}]},null),o(Be,{name:D.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>o("div",{key:k,class:["v-progress-linear__indeterminate",k,h.value],style:c.value},null))]):o("div",{class:["v-progress-linear__determinate",h.value],style:[c.value,{width:I(p.value,"%")}]},null)]}),a.default&&o("div",{class:"v-progress-linear__content"},[a.default({value:p.value,buffer:R.value})])]})),{}}}),Qt=x({loading:[Boolean,String]},"loader");function Zt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z();return{loaderClasses:g(()=>({[`${n}--loading`]:e.loading}))}}function gn(e,n){var t;let{slots:a}=n;return o("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||o(Jt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}function en(){const e=X("useRoute");return g(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function bn(){var e,n;return(n=(e=X("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function tn(e,n){var v,m;const a=_t("RouterLink"),t=g(()=>!!(e.href||e.to)),s=g(()=>(t==null?void 0:t.value)||Ce(n,"click")||Ce(e,"click"));if(typeof a=="string"||!("useLink"in a))return{isLink:t,isClickable:s,href:L(e,"href")};const l=g(()=>({...e,to:L(()=>e.to||"")})),d=a.useLink(l.value),u=g(()=>e.to?d:void 0),f=en();return{isLink:t,isClickable:s,route:(v=u.value)==null?void 0:v.route,navigate:(m=u.value)==null?void 0:m.navigate,isActive:g(()=>{var b,i,r;return u.value?e.exact?f.value?((r=u.value.isExactActive)==null?void 0:r.value)&&pe(u.value.route.value.query,f.value.query):((i=u.value.isExactActive)==null?void 0:i.value)??!1:((b=u.value.isActive)==null?void 0:b.value)??!1:!1}),href:g(()=>{var b;return e.to?(b=u.value)==null?void 0:b.route.value.href:e.href})}}const nn=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ie=!1;function hn(e,n){let a=!1,t,s;St&&(me(()=>{window.addEventListener("popstate",l),t=e==null?void 0:e.beforeEach((d,u,f)=>{ie?a?n(f):f():setTimeout(()=>a?n(f):f()),ie=!0}),s=e==null?void 0:e.afterEach(()=>{ie=!1})}),kt(()=>{window.removeEventListener("popstate",l),t==null||t(),s==null||s()}));function l(d){var u;(u=d.state)!=null&&u.replaced||(a=!0,setTimeout(()=>a=!1))}}function an(e,n){A(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&me(()=>{n(!0)})},{immediate:!0})}const ce=Symbol("rippleStop"),sn=80;function we(e,n){e.style.transform=n,e.style.webkitTransform=n}function de(e){return e.constructor.name==="TouchEvent"}function qe(e){return e.constructor.name==="KeyboardEvent"}const ln=function(e,n){var b;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!qe(e)){const i=n.getBoundingClientRect(),r=de(e)?e.touches[e.touches.length-1]:e;t=r.clientX-i.left,s=r.clientY-i.top}let l=0,d=.3;(b=n._ripple)!=null&&b.circle?(d=.15,l=n.clientWidth/2,l=a.center?l:l+Math.sqrt((t-l)**2+(s-l)**2)/4):l=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const u=`${(n.clientWidth-l*2)/2}px`,f=`${(n.clientHeight-l*2)/2}px`,v=a.center?u:`${t-l}px`,m=a.center?f:`${s-l}px`;return{radius:l,scale:d,x:v,y:m,centerX:u,centerY:f}},Q={show(e,n){var r;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((r=n==null?void 0:n._ripple)!=null&&r.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:l,scale:d,x:u,y:f,centerX:v,centerY:m}=ln(e,n,a),b=`${l*2}px`;s.className="v-ripple__animation",s.style.width=b,s.style.height=b,n.appendChild(t);const i=window.getComputedStyle(n);i&&i.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),we(s,`translate(${u}, ${f}) scale3d(${d},${d},${d})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),we(s,`translate(${v}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function Ue(e){return typeof e>"u"||!!e}function M(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ce])){if(e[ce]=!0,de(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||qe(e),a._ripple.class&&(n.class=a._ripple.class),de(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{Q.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},sn)}else Q.show(e,a,n)}}function Ie(e){e[ce]=!0}function V(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),Q.hide(n)}}function He(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let W=!1;function Xe(e){!W&&(e.keyCode===_e.enter||e.keyCode===_e.space)&&(W=!0,M(e))}function Ye(e){W=!1,V(e)}function Ke(e){W&&(W=!1,V(e))}function Je(e,n,a){const{value:t,modifiers:s}=n,l=Ue(t);if(l||Q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,wt(t)&&t.class&&(e._ripple.class=t.class),l&&!a){if(s.stop){e.addEventListener("touchstart",Ie,{passive:!0}),e.addEventListener("mousedown",Ie);return}e.addEventListener("touchstart",M,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",He,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",M),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",Xe),e.addEventListener("keyup",Ye),e.addEventListener("blur",Ke),e.addEventListener("dragstart",V,{passive:!0})}else!l&&a&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",M),e.removeEventListener("touchstart",M),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",He),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",Xe),e.removeEventListener("keyup",Ye),e.removeEventListener("dragstart",V),e.removeEventListener("blur",Ke)}function rn(e,n){Je(e,n,!1)}function on(e){delete e._ripple,Qe(e)}function un(e,n){if(n.value===n.oldValue)return;const a=Ue(n.oldValue);Je(e,n,a)}const cn={mounted:rn,unmounted:on,updated:un},dn=x({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Me},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:re,appendIcon:re,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Te(),...j(),...Ae(),...It(),...Le(),...Gt(),...Qt(),...$e(),...Pt(),...ne(),...nn(),...ge(),...q({tag:"button"}),...U(),...De({variant:"elevated"})},"VBtn"),yn=$()({name:"VBtn",props:dn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=H(e),{borderClasses:l}=Re(e),{densityClasses:d}=je(e),{dimensionStyles:u}=xt(e),{elevationClasses:f}=ze(e),{loaderClasses:v}=Zt(e),{locationStyles:m}=Ne(e),{positionClasses:b}=Et(e),{roundedClasses:i}=ae(e),{sizeClasses:r,sizeStyles:h}=be(e),c=Mt(e,e.symbol,!1),C=tn(e,a),_=g(()=>{var k;return e.active!==void 0?e.active:C.isLink.value?(k=C.isActive)==null?void 0:k.value:c==null?void 0:c.isSelected.value}),P=g(()=>{var T,y;return{color:(c==null?void 0:c.isSelected.value)&&(!C.isLink.value||((T=C.isActive)==null?void 0:T.value))||!c||((y=C.isActive)==null?void 0:y.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:E,colorStyles:w,variantClasses:R}=Dt(P),p=g(()=>(c==null?void 0:c.disabled.value)||e.disabled),z=g(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),D=g(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function F(k){var T;p.value||C.isLink.value&&(k.metaKey||k.ctrlKey||k.shiftKey||k.button!==0||a.target==="_blank")||((T=C.navigate)==null||T.call(C,k),c==null||c.toggle())}return an(C,c==null?void 0:c.select),N(()=>{const k=C.isLink.value?"a":e.tag,T=!!(e.prependIcon||t.prepend),y=!!(e.appendIcon||t.append),S=!!(e.icon&&e.icon!==!0);return oe(o(k,{type:k==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":_.value,"v-btn--block":e.block,"v-btn--disabled":p.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,E.value,d.value,f.value,v.value,b.value,i.value,r.value,R.value,e.class],style:[w.value,u.value,m.value,h.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:p.value||void 0,href:C.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:F,value:D.value},{default:()=>{var B;return[jt(!0,"v-btn"),!e.icon&&T&&o("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?o(se,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):o(le,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&S?o(le,{key:"content-icon",icon:e.icon},null):o(se,{key:"content-defaults",disabled:!S,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var G;return[((G=t.default)==null?void 0:G.call(t))??e.text]}})]),!e.icon&&y&&o("span",{key:"append",class:"v-btn__append"},[t.append?o(se,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):o(le,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((B=t.loader)==null?void 0:B.call(t))??o(Yt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[cn,!p.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:c}}});export{$t as I,gn as L,Y as M,cn as R,yn as V,mn as a,se as b,Mt as c,De as d,Dt as e,Jt as f,jt as g,bn as h,Rt as i,le as j,Ae as k,ge as l,Gt as m,je as n,Qt as o,Zt as p,hn as q,Ft as r,nn as s,be as t,Wt as u,tn as v};
