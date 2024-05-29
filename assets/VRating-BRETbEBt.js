import{p as T,a2 as L,j as F,k as $,q as w,l as A,s as N,al as z,aK as H,n as D,aL as j,b as n,T as U,U as X,m as _,v as Y,J as q,z as g,D as E,aM as G,y as J,a4 as K,F as R,g as W}from"./index-D2okRfwb.js";import{D as O,c as Q,j as Z,u as p,f as ee,p as ae,G as te,M as ne,n as le,l as oe,H as ie,V as se}from"./VGrid-DuvdOv0C.js";const ue=T({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:L,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...F(),...O({location:"top end"}),...Q(),...$(),...w(),...Z({transition:"scale-rotate-transition"})},"VBadge"),me=A()({name:"VBadge",inheritAttrs:!1,props:ue(),setup(e,u){const{backgroundColorClasses:s,backgroundColorStyles:f}=p(N(e,"color")),{roundedClasses:x}=ee(e),{t:h}=z(),{textColorClasses:r,textColorStyles:y}=ae(N(e,"textColor")),{themeClasses:S}=H(),{locationStyles:d}=te(e,!0,i=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(i)?+(e.offsetY??0):["left","right"].includes(i)?+(e.offsetX??0):0));return D(()=>{const i=Number(e.content),V=!e.max||isNaN(i)?e.content:i<=+e.max?i:`${e.max}+`,[C,c]=j(u.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return n(e.tag,_({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},c,{style:e.style}),{default:()=>{var v,a;return[n("div",{class:"v-badge__wrapper"},[(a=(v=u.slots).default)==null?void 0:a.call(v),n(ne,{transition:e.transition},{default:()=>{var l,t;return[U(n("span",_({class:["v-badge__badge",S.value,s.value,x.value,r.value],style:[f.value,y.value,e.inline?{}:d.value],"aria-atomic":"true","aria-label":h(e.label,i),"aria-live":"polite",role:"status"},C),[e.dot?void 0:u.slots.badge?(t=(l=u.slots).badge)==null?void 0:t.call(l):e.icon?n(le,{icon:e.icon},null):V]),[[X,e.modelValue]])]}})])]}})}),{}}}),re=T({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:L,default:"$ratingEmpty"},fullIcon:{type:L,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...F(),...oe(),...ie(),...$(),...w()},"VRating"),ge=A()({name:"VRating",props:re(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const{t:f}=z(),{themeClasses:x}=Y(e),h=q(e,"modelValue"),r=g(()=>E(parseFloat(h.value),0,+e.length)),y=g(()=>G(Number(e.length),1)),S=g(()=>y.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),d=J(-1),i=g(()=>S.value.map(a=>{const l=e.hover&&d.value>-1,t=r.value>=a,o=d.value>=a,m=(l?o:t)?e.fullIcon:e.emptyIcon,B=e.activeColor??e.color,k=t||o?B:e.color;return{isFilled:t,isHovered:o,icon:m,color:k}})),V=g(()=>[0,...S.value].map(a=>{function l(){d.value=a}function t(){d.value=-1}function o(){e.disabled||e.readonly||(h.value=r.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?l:void 0,onMouseleave:e.hover?t:void 0,onClick:o}})),C=g(()=>e.name??`v-rating-${K()}`);function c(a){var P,M;let{value:l,index:t,showStar:o=!0}=a;const{onMouseenter:b,onMouseleave:m,onClick:B}=V.value[t+1],k=`${C.value}-${String(l).replace(".","-")}`,I={color:(P=i.value[t])==null?void 0:P.color,density:e.density,disabled:e.disabled,icon:(M=i.value[t])==null?void 0:M.icon,ripple:e.ripple,size:e.size,variant:"plain"};return n(R,null,[n("label",{for:k,class:{"v-rating__item--half":e.halfIncrements&&l%1>0,"v-rating__item--full":e.halfIncrements&&l%1===0},onMouseenter:b,onMouseleave:m,onClick:B},[n("span",{class:"v-rating__hidden"},[f(e.itemAriaLabel,l,e.length)]),o?s.item?s.item({...i.value[t],props:I,value:l,index:t,rating:r.value}):n(se,_({"aria-label":f(e.itemAriaLabel,l,e.length)},I),null):void 0]),n("input",{class:"v-rating__hidden",name:C.value,id:k,type:"radio",value:l,checked:r.value===l,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function v(a){return s["item-label"]?s["item-label"](a):a.label?n("span",null,[a.label]):n("span",null,[W(" ")])}return D(()=>{var l;const a=!!((l=e.itemLabels)!=null&&l.length)||s["item-label"];return n(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},x.value,e.class],style:e.style},{default:()=>[n(c,{value:0,index:-1,showStar:!1},null),y.value.map((t,o)=>{var b,m;return n("div",{class:"v-rating__wrapper"},[a&&e.itemLabelPosition==="top"?v({value:t,index:o,label:(b=e.itemLabels)==null?void 0:b[o]}):void 0,n("div",{class:"v-rating__item"},[e.halfIncrements?n(R,null,[n(c,{value:t-.5,index:o*2},null),n(c,{value:t,index:o*2+1},null)]):n(c,{value:t,index:o},null)]),a&&e.itemLabelPosition==="bottom"?v({value:t,index:o,label:(m=e.itemLabels)==null?void 0:m[o]}):void 0])})]})}),{}}});export{ge as V,me as a};