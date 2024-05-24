import{p as se,J as T,y as ie,K as re,z as ce,k as v,L as M,j as c,n as de,G as fe,M as me,b as t,m as I,F as _,N as ve,O as pe,o as k,c as F,w as s,P as Ve,g as j,h as E,f as O,B as he,H as ye,e as ge,d as be,i as _e}from"./index-J3b4gt5S.js";import{g as ke}from"./apiPhoto-DcVcg5h3.js";import{V as Ce,_ as we}from"./VSelect-d0Kwk5uL.js";import{V as H}from"./position-zUPWdk23.js";import{V as Se}from"./VSheet-C5uBdeOP.js";import{a as Ie}from"./index-BHtxuQah.js";import{m as Fe,a as Pe,u as Be,V as L,f as Ae,b as ze,c as xe,d as Re,e as U}from"./VTextField-CGGhZgU3.js";import{f as Ne,V as $e}from"./forwardRefs-C6WD5Szl.js";import{V as De}from"./VListItem-DfChEZ7z.js";import{V as G}from"./VGrid-Db5IO_WL.js";import{V as J}from"./VContainer-Cheo4B_Z.js";import{V as Me}from"./VSpacer-xHBrv1l_.js";import{V as Le}from"./VToolbar-DaV-kf36.js";import"./VMenu-D0z64i3X.js";import"./VDivider-CdqzP79e.js";const Ue=se({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...Fe({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>T(e).every(i=>i!=null&&typeof i=="object")},...Pe({clearable:!0})},"VFileInput"),Te=ie()({name:"VFileInput",inheritAttrs:!1,props:Ue(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:d,emit:r,slots:n}=i;const{t:p}=re(),a=ce(e,"modelValue",e.modelValue,l=>T(l),l=>e.multiple||Array.isArray(e.modelValue)?l:l[0]??null),{isFocused:u,focus:C,blur:g}=Be(e),P=v(()=>typeof e.showSize!="boolean"?e.showSize:void 0),B=v(()=>(a.value??[]).reduce((l,o)=>{let{size:V=0}=o;return l+V},0)),A=v(()=>M(B.value,P.value)),w=v(()=>(a.value??[]).map(l=>{const{name:o="",size:V=0}=l;return e.showSize?`${o} (${M(V,P.value)})`:o})),K=v(()=>{var o;const l=((o=a.value)==null?void 0:o.length)??0;return e.showSize?p(e.counterSizeString,l,A.value):p(e.counterString,l)}),z=c(),x=c(),f=c(),q=v(()=>u.value||e.active),R=v(()=>["plain","underlined"].includes(e.variant));function S(){var l;f.value!==document.activeElement&&((l=f.value)==null||l.focus()),u.value||C()}function Q(l){var o;(o=f.value)==null||o.click()}function W(l){r("mousedown:control",l)}function X(l){var o;(o=f.value)==null||o.click(),r("click:control",l)}function Y(l){l.stopPropagation(),S(),ve(()=>{a.value=[],pe(e["onClick:clear"],l)})}return de(a,l=>{(!Array.isArray(l)||!l.length)&&f.value&&(f.value.value="")}),fe(()=>{const l=!!(n.counter||e.counter),o=!!(l||n.details),[V,Z]=me(d),{modelValue:He,...ee}=L.filterProps(e),le=Ae(e);return t(L,I({ref:z,modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":R.value},e.class],style:e.style,"onClick:prepend":Q},V,ee,{centerAffix:!R.value,focused:u.value}),{...n,default:h=>{let{id:b,isDisabled:y,isDirty:N,isReadonly:$,isValid:te}=h;return t(ze,I({ref:x,"prepend-icon":e.prependIcon,onMousedown:W,onClick:X,"onClick:clear":Y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},le,{id:b.value,active:q.value||N.value,dirty:N.value||e.dirty,disabled:y.value,focused:u.value,error:te.value===!1}),{...n,default:ae=>{var D;let{props:{class:ne,...oe}}=ae;return t(_,null,[t("input",I({ref:f,type:"file",readonly:$.value,disabled:y.value,multiple:e.multiple,name:e.name,onClick:m=>{m.stopPropagation(),$.value&&m.preventDefault(),S()},onChange:m=>{if(!m.target)return;const ue=m.target;a.value=[...ue.files??[]]},onFocus:S,onBlur:g},oe,Z),null),t("div",{class:ne},[!!((D=a.value)!=null&&D.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:w.value,totalBytes:B.value,totalBytesReadable:A.value}):e.chips?w.value.map(m=>t(De,{key:m,size:"small",text:m},null)):w.value.join(", "))])])}})},details:o?h=>{var b,y;return t(_,null,[(b=n.details)==null?void 0:b.call(n,h),l&&t(_,null,[t("span",null,null),t(xe,{active:!!((y=a.value)!=null&&y.length),value:K.value,disabled:e.disabled},n.counter)])])}:void 0})}),Ne({},z,x,f)}}),je=O("h1",null,"Add New Photo",-1),Ee={__name:"NewPhotoForm",setup(e){const i=c(!1),d=c({title:"",description:"",file:null,tags:[]}),r=c(!1),n=async()=>{console.log("submit")};return(p,a)=>(k(),F(J,{class:"fill-height"},{default:s(()=>[t(H,{class:"align-center text-center fill-height"},{default:s(()=>[r.value?E("",!0):(k(),F(Se,{key:0,class:"align-center",width:"500"},{default:s(()=>[je,t(Ie,{flat:"",class:"mx-auto px-6 py-8"},{default:s(()=>[t(Re,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=u=>i.value=u),onSubmit:Ve(n,["prevent"])},{default:s(()=>[t(U,{modelValue:d.value.title,"onUpdate:modelValue":a[0]||(a[0]=u=>d.value.title=u),readonly:r.value,label:"Title"},null,8,["modelValue","readonly"]),t(U,{label:"Description"}),t(Te,{label:"File input"}),t(Ce),t(G,{disabled:!i.value,loading:r.value,block:"",color:"success",size:"large",type:"submit"},{default:s(()=>[j(" Save ")]),_:1},8,["disabled","loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1}))]),_:1})]),_:1}))}},Oe=O("h1",null,"Photos",-1),ul={__name:"Home",setup(e){const{isAuth:i}=_e(),d=c(!1),r=c([]),n=c(!1),p=async()=>{const a=await ke();r.value=a.data,console.log(a.data)};return he(async()=>{d.value=!0,p(),d.value=!1}),(a,u)=>{const C=ye("router-view");return k(),ge(_,null,[t(J,{class:"fill-height"},{default:s(()=>[t(H,{class:"align-center text-center fill-height"},{default:s(()=>[be(i)?(k(),F(Le,{key:0},{default:s(()=>[t(Me),t(G,{type:"button",onClick:u[0]||(u[0]=g=>n.value=!n.value),prependIcon:"mdi-plus"},{default:s(()=>[j(" Add photo")]),_:1})]),_:1})):E("",!0),t(C),Oe,t(we,{photos:r.value,isLoading:d.value,owerlay:n.value},null,8,["photos","isLoading","owerlay"])]),_:1})]),_:1}),t($e,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=g=>n.value=g),scrim:"black"},{default:s(()=>[t(Ee)]),_:1},8,["modelValue"])],64)}}};export{ul as default};