import{aF as te,p as J,l as X,J as re,z as U,C as x,y as tt,L as ge,G as pe,E as M,H as at,n as K,a7 as lt,b as t,m as E,F as Q,T as Ce,a8 as ot,aG as nt,ab as oe,az as rt,B as Fe,D as it,aH as st,o as k,c as S,w as o,g as $,t as L,Q as Ae,f as Z,e as Y,r as me,h as q,a2 as ut,al as Re,aj as dt,at as ct,R as mt,a4 as vt,s as qe,X as ft,O as gt,d as W,i as pt,ae as ht,q as yt,af as Vt,v as bt,a9 as xt,u as wt,a5 as _t}from"./index-BLdPmo0X.js";import{a as Pe,s as kt,b as Ct}from"./apiPhoto-Dsc-_Hpb.js";import{V as ze}from"./VSnackbar-DS--Uevr.js";import{I as Pt,V as H,h as ie,a as O,k as St,g as Me,A as Et,B as Tt,b as Dt,u as Bt,e as It}from"./VGrid-2AqWVivO.js";import{d as Le,a as he,V as Ne,b as ve,e as Oe,f as Ut}from"./index-C07GXgUv.js";import{c as $t,d as Ft,e as At,f as Se,g as Rt,h as qt,i as zt,V as He,a as R}from"./VTextField-Bxw26yWj.js";import{f as ye,b as Ge,u as je,V as ne}from"./forwardRefs-DTIWPoyU.js";import{V as Ve}from"./VSpacer-q3eTX0uv.js";import{V as ee}from"./VSheet-BPPxVze8.js";import{c as Mt,V as We,d as Lt,a as fe,b as j}from"./VPagination-D52iBSlf.js";import{V as Qe}from"./VDivider-C1a4wq5d.js";import{V as se}from"./VContainer-_T5mVdcw.js";import{V as Ee}from"./VRating-BL9mVd_E.js";import{m as Nt,V as Te,a as Ot,b as De}from"./VWindowItem-IV8WbSBP.js";import{V as Ht}from"./dialog-transition-Ca0tlpSe.js";const be="/rating";async function Gt(e){const{data:{data:{rating:c}}}=await te.get(`${be}/${e}`);return c}async function jt(e,c){const{data:{data:u}}=await te.post(`${be}/${e}`,{rating:c});return u}async function Be(e){const{data:{data:{rating:c}}}=await te.get(`${be}/avg/${e}`);return c}const Ze="/comments";async function Wt(e){const{data:{data:c}}=await te.get(`${Ze}/${e}`);return c}async function Qt(e){const{data:c}=await te.post(`${Ze}`,e);return c}const Zt=J({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...$t(),...Ft()},"VTextarea"),Je=X()({name:"VTextarea",directives:{Intersect:Pt},inheritAttrs:!1,props:Zt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:u,emit:g,slots:m}=c;const v=re(e,"modelValue"),{isFocused:a,focus:i,blur:y}=At(e),b=U(()=>typeof e.counterValue=="function"?e.counterValue(v.value):(v.value||"").toString().length),p=U(()=>{if(u.maxlength)return u.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function h(P,A){var I,N;!e.autofocus||!P||(N=(I=A[0].target)==null?void 0:I.focus)==null||N.call(I)}const d=x(),n=x(),f=tt(""),V=x(),l=U(()=>e.persistentPlaceholder||a.value||e.active);function r(){var P;V.value!==document.activeElement&&((P=V.value)==null||P.focus()),a.value||i()}function s(P){r(),g("click:control",P)}function w(P){g("mousedown:control",P)}function C(P){P.stopPropagation(),r(),oe(()=>{v.value="",rt(e["onClick:clear"],P)})}function B(P){var I;const A=P.target;if(v.value=A.value,(I=e.modelModifiers)!=null&&I.trim){const N=[A.selectionStart,A.selectionEnd];oe(()=>{A.selectionStart=N[0],A.selectionEnd=N[1]})}}const _=x(),T=x(+e.rows),D=U(()=>["plain","underlined"].includes(e.variant));ge(()=>{e.autoGrow||(T.value=+e.rows)});function z(){e.autoGrow&&oe(()=>{if(!_.value||!n.value)return;const P=getComputedStyle(_.value),A=getComputedStyle(n.value.$el),I=parseFloat(P.getPropertyValue("--v-field-padding-top"))+parseFloat(P.getPropertyValue("--v-input-padding-top"))+parseFloat(P.getPropertyValue("--v-field-padding-bottom")),N=_.value.scrollHeight,ae=parseFloat(P.lineHeight),de=Math.max(parseFloat(e.rows)*ae+I,parseFloat(A.getPropertyValue("--v-input-control-height"))),ce=parseFloat(e.maxRows)*ae+I||1/0,G=it(N??0,de,ce);T.value=Math.floor((G-I)/ae),f.value=Fe(G)})}pe(z),M(v,z),M(()=>e.rows,z),M(()=>e.maxRows,z),M(()=>e.density,z);let F;return M(_,P=>{P?(F=new ResizeObserver(z),F.observe(_.value)):F==null||F.disconnect()}),at(()=>{F==null||F.disconnect()}),K(()=>{const P=!!(m.counter||e.counter||e.counterValue),A=!!(P||m.details),[I,N]=lt(u),{modelValue:ae,...de}=Se.filterProps(e),ce=Rt(e);return t(Se,E({ref:d,modelValue:v.value,"onUpdate:modelValue":G=>v.value=G,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":D.value},e.class],style:e.style},I,de,{centerAffix:T.value===1&&!D.value,focused:a.value}),{...m,default:G=>{let{id:le,isDisabled:xe,isDirty:we,isReadonly:Xe,isValid:Ke}=G;return t(qt,E({ref:n,style:{"--v-textarea-control-height":f.value},onClick:s,onMousedown:w,"onClick:clear":C,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},ce,{id:le.value,active:l.value||we.value,centerAffix:T.value===1&&!D.value,dirty:we.value||e.dirty,disabled:xe.value,focused:a.value,error:Ke.value===!1}),{...m,default:Ye=>{let{props:{class:_e,...ke}}=Ye;return t(Q,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),Ce(t("textarea",E({ref:V,class:_e,value:v.value,onInput:B,autofocus:e.autofocus,readonly:Xe.value,disabled:xe.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:r,onBlur:y},ke,N),null),[[ot("intersect"),{handler:h},null,{once:!0}]]),e.autoGrow&&Ce(t("textarea",{class:[_e,"v-textarea__sizer"],id:`${ke.id}-sizer`,"onUpdate:modelValue":et=>v.value=et,ref:_,readonly:!0,"aria-hidden":"true"},null),[[nt,v.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:A?G=>{var le;return t(Q,null,[(le=m.details)==null?void 0:le.call(m,G),P&&t(Q,null,[t("span",null,null),t(zt,{active:e.persistentCounter||a.value,value:b.value,max:p.value,disabled:e.disabled},m.counter)])])}:void 0})}),ye({},d,n,V)}}),Jt={class:"d-flex"},Xt={__name:"CommentForm",props:{title:String,photo_id:{type:Number,required:!0}},emits:["sendComment"],setup(e,{emit:c}){const u=e,g=c,m=x(!1),v=x(!1),a=x(!1),i=x(null),y=x({comment:""}),{photo_id:b}=st(u),p=async d=>{m.value&&(v.value=!0,Qt({comment:y.value.comment,photo_id:b.value}).then(n=>{d.target.reset(),g("sendComment")}).catch(n=>{var f,V,l,r;a.value=!0,i.value={type:"error",title:"Error",text:((V=(f=n==null?void 0:n.response)==null?void 0:f.data)==null?void 0:V.message)||((r=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:r.detail)||n.message}}).finally(()=>{v.value=!1}))},h={comment:[d=>!!d||"Comment is required"]};return(d,n)=>(k(),S(ee,{class:"align-center"},{default:o(()=>[t(ze,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=f=>a.value=f),location:"right top",color:"error",transition:"slide-x-transition",eager:"",vertical:"",offset:"10000"},{actions:o(()=>[t(H,{variant:"text",onClick:n[0]||(n[0]=f=>a.value=!1)},{default:o(()=>[$(" Close ")]),_:1})]),default:o(()=>{var f;return[$(L((f=i.value)==null?void 0:f.text)+" ",1)]}),_:1},8,["modelValue"]),t(Le,{class:"text-left"},{default:o(()=>[$(L(e.title),1)]),_:1}),t(He,{modelValue:m.value,"onUpdate:modelValue":n[3]||(n[3]=f=>m.value=f),variant:"outlined",onSubmit:Ae(p,["prevent"])},{default:o(()=>[t(Je,{modelValue:y.value.comment,"onUpdate:modelValue":n[2]||(n[2]=f=>y.value.comment=f),modelModifiers:{trim:!0},label:"Comment",variant:"outlined",placeholder:"Enter comment",disabled:v.value,rules:h.comment,rows:"2"},null,8,["modelValue","disabled","rules"]),Z("div",Jt,[t(Ve),t(H,{disabled:!m.value,loading:v.value,color:"success",size:"large",type:"submit","prepend-icon":"mdi-send"},{default:o(()=>[$("Send ")]),_:1},8,["disabled","loading"])])]),_:1},8,["modelValue"])]),_:1}))}},Kt=Z("h1",null,"Comments",-1),Yt={class:"ms-4"},ea={key:2},ta={__name:"CommentsSet",props:{photo_id:{type:Number,required:!0}},setup(e){const c=e,u=x([]),g=x(!1),m=async()=>{g.value=!0,Wt(c.photo_id).then(y=>{u.value=y}).catch(y=>{u.value=[]}).finally(()=>{g.value=!1})};ge(async()=>{m()});const v=U(()=>y=>{const b=y.split(".")[0].split("T");return b[0]+" "+b[1]}),a=U(()=>y=>y.length<80?1:Math.floor(y.length/80)),i=async()=>{m()};return(y,b)=>{const p=Xt;return k(),S(se,{class:"fill-height"},{default:o(()=>[t(ie,{class:"align-center text-center fill-height"},{default:o(()=>[Kt,g.value?(k(),S(St,{key:1,indeterminate:"",size:88,width:9})):(k(),S(Mt,{key:0,items:u.value,"items-per-page":5},{default:o(({items:h})=>[(k(!0),Y(Q,null,me(h,d=>(k(),S(he,{key:d.id,variant:"outlined",class:"my-2",style:{"border-color":"green"}},{prepend:o(()=>[t(Ne,{size:"32"},{default:o(()=>[d.raw.user.avatar?(k(),S(O,{key:0,src:d.raw.user.avatar,alt:d.raw.user.username},null,8,["src","alt"])):q("",!0)]),_:2},1024),Z("span",Yt,L(d.raw.user.username),1)]),append:o(()=>[t(We,{color:"green"},{default:o(()=>[$(L(v.value(d.raw.created_at)),1)]),_:2},1024)]),default:o(()=>[t(ve,null,{default:o(()=>[t(Je,{modelValue:d.raw.comment,"onUpdate:modelValue":n=>d.raw.comment=n,variant:"outlined",rows:a.value(d.raw.comment),disabled:"","no-resize":""},null,8,["modelValue","onUpdate:modelValue","rows"])]),_:2},1024)]),_:2},1024))),128))]),footer:o(({pageCount:h,prevPage:d,nextPage:n,setPage:f})=>{var V;return[(V=u.value)!=null&&V.length&&h>1?(k(),S(Lt,{key:0,length:h,"total-visible":5,rounded:"circle","onUpdate:modelValue":f,onPrev:d,onNext:n},null,8,["length","onUpdate:modelValue","onPrev","onNext"])):q("",!0)]}),_:1},8,["items"])),g.value?q("",!0):(k(),Y("div",ea,[t(Qe,{class:"my-4"}),t(p,{title:"Add comment",photo_id:e.photo_id,onSendComment:i},null,8,["photo_id"])]))]),_:1})]),_:1})}}},aa=Z("h1",null,"Transform",-1),la=Z("div",{class:"d-flex align-center justify-center fill-height"},null,-1),oa={__name:"PhotoTransformForm",props:{photo_id:Number},emits:["close","addTransformation"],setup(e,{emit:c}){const u=c,g=e,m=x(""),v=x(!1),a=x({radius:"20:80",angle:-20,aspect_ratio:"1.5",crop:"fill",background:"red",width:200,height:200,border:"5px_solid_red",gravity:"north",opacity:30,quality:"80",zoom:"1.2"}),i=x(!1),y=x(!1),b=x(!0),p=x(!1),h=x({}),d={radius:[l=>!!l||"Radius is required"],angle:[l=>!!l||"Angle is required"],aspect_ratio:[l=>!!l||"Aspect ratio is required"],crop:[l=>!!l||"Crop is required"],background:[l=>!!l||"Background is required"],width:[l=>!!l||"Width is required"],height:[l=>!!l||"Height is required"],border:[l=>!!l||"Border is required"],gravity:[l=>!!l||"Gravity is required"],opacity:[l=>!!l||"Opacity is required"],quality:[l=>!!l||"Quality is required"],zoom:[l=>!!l||"Zoom is required"]},n=async()=>{y.value=!0,Pe(g.photo_id,V()).then(l=>{m.value=l}).catch(l=>{var r,s,w,C;p.value=!0,h.value={type:"error",title:"Error",text:((s=(r=l==null?void 0:l.response)==null?void 0:r.data)==null?void 0:s.message)||((C=(w=l==null?void 0:l.response)==null?void 0:w.data)==null?void 0:C.detail)||l.message}}).finally(()=>{y.value=!1})},f=()=>{i.value=!0,b.value||Pe(g.photo_id,V()).then(l=>{console.log("onPreview",l),m.value=l}).catch(l=>{var r,s,w,C;p.value=!0,h.value={type:"error",title:"Error",text:((s=(r=l==null?void 0:l.response)==null?void 0:r.data)==null?void 0:s.message)||((C=(w=l==null?void 0:l.response)==null?void 0:w.data)==null?void 0:C.detail)||l.message}}),kt(g.photo_id,m.value).then(l=>{i.value=!1,u("addTransformation")}).catch(l=>{var r,s,w,C;console.log(l),p.value=!0,h.value={type:"error",title:"Error",text:((s=(r=l==null?void 0:l.response)==null?void 0:r.data)==null?void 0:s.message)||((C=(w=l==null?void 0:l.response)==null?void 0:w.data)==null?void 0:C.detail)||l.message}}).finally(()=>{i.value=!1})},V=()=>Object.entries(a.value).reduce((l,[r,s])=>(s&&(l[r]=s),l),{});return(l,r)=>(k(),S(se,null,{default:o(()=>[t(ie,{class:"align-center text-center fill-height"},{default:o(()=>[t(ee,{class:"align-center rounded",width:"100%"},{default:o(()=>[t(ze,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=s=>p.value=s),location:"right top",color:"error",transition:"slide-x-transition",eager:"",vertical:"",offset:"10000"},{actions:o(()=>[t(H,{variant:"text",onClick:r[0]||(r[0]=s=>p.value=!1)},{default:o(()=>[$(" Close ")]),_:1})]),default:o(()=>{var s;return[$(L((s=h.value)==null?void 0:s.text)+" ",1)]}),_:1},8,["modelValue"]),t(H,{icon:"mdi-close",onClick:r[2]||(r[2]=s=>l.$emit("close")),position:"absolute top-0 right-0",variant:"text"}),aa,t(he,{class:"pa-4"},{default:o(()=>[t(fe,null,{default:o(()=>[t(j,{cols:"auto"},{default:o(()=>[b.value?(k(),S(O,{key:0,src:m.value,width:"300px",height:"150px",class:"mx-auto my-4","lazy-src":"https://picsum.photos/id/11/10/6"},{placeholder:o(()=>[la]),_:1},8,["src"])):q("",!0)]),_:1}),t(j,{cols:"auto"},{default:o(()=>[t(He,{modelValue:v.value,"onUpdate:modelValue":r[14]||(r[14]=s=>v.value=s),onSubmit:Ae(f,["prevent"])},{default:o(()=>[t(fe,null,{default:o(()=>[t(j,{cols:"4"},{default:o(()=>[t(R,{modelValue:a.value.crop,"onUpdate:modelValue":r[3]||(r[3]=s=>a.value.crop=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.crop,placeholder:"Enter crop",class:"mb-2",variant:"outlined",density:"compact",label:"Crop"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.radius,"onUpdate:modelValue":r[4]||(r[4]=s=>a.value.radius=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.radius,placeholder:"Enter radius",class:"mb-2",variant:"outlined",density:"compact",label:"Radius"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.angle,"onUpdate:modelValue":r[5]||(r[5]=s=>a.value.angle=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.angle,placeholder:"Enter angle",class:"mb-2",variant:"outlined",density:"compact",label:"Angle"},null,8,["modelValue","readonly","clearable","rules"])]),_:1}),t(j,{cols:"4"},{default:o(()=>[t(R,{modelValue:a.value.background,"onUpdate:modelValue":r[6]||(r[6]=s=>a.value.background=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.background,placeholder:"Enter background",class:"mb-2",variant:"outlined",density:"compact",label:"Background"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.width,"onUpdate:modelValue":r[7]||(r[7]=s=>a.value.width=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.width,placeholder:"Enter width",class:"mb-2",variant:"outlined",density:"compact",label:"Width"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.height,"onUpdate:modelValue":r[8]||(r[8]=s=>a.value.height=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.height,placeholder:"Enter height",class:"mb-2",variant:"outlined",density:"compact",label:"Height"},null,8,["modelValue","readonly","clearable","rules"])]),_:1}),t(j,{cols:"5"},{default:o(()=>[t(R,{modelValue:a.value.quality,"onUpdate:modelValue":r[9]||(r[9]=s=>a.value.quality=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.quality,placeholder:"Enter quality",class:"mb-2",variant:"outlined",density:"compact",label:"Quality"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.opacity,"onUpdate:modelValue":r[10]||(r[10]=s=>a.value.opacity=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.opacity,placeholder:"Enter opacity",class:"mb-2",variant:"outlined",density:"compact",label:"Opacity"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.zoom,"onUpdate:modelValue":r[11]||(r[11]=s=>a.value.zoom=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.zoom,placeholder:"Enter zoom",class:"mb-2",variant:"outlined",density:"compact",label:"Zoom"},null,8,["modelValue","readonly","clearable","rules"])]),_:1}),t(j,{cols:"6"},{default:o(()=>[t(R,{modelValue:a.value.border,"onUpdate:modelValue":r[12]||(r[12]=s=>a.value.border=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.border,placeholder:"Enter border",class:"mb-2",variant:"outlined",density:"compact",label:"Border"},null,8,["modelValue","readonly","clearable","rules"]),t(R,{modelValue:a.value.gravity,"onUpdate:modelValue":r[13]||(r[13]=s=>a.value.gravity=s),modelModifiers:{trim:!0},readonly:i.value,clearable:!i.value,rules:d.gravity,placeholder:"Enter gravity",class:"mb-2",variant:"outlined",density:"compact",label:"Gravity"},null,8,["modelValue","readonly","clearable","rules"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(Oe,{class:"justify-center"},{default:o(()=>[b.value?(k(),S(H,{key:0,type:"button",disabled:!v.value,loading:y.value,color:"success",size:"large","prepend-icon":"mdi-eye",onClick:n},{default:o(()=>[$(" Preview ")]),_:1},8,["disabled","loading"])):q("",!0),t(Ve),t(H,{type:"submit",disabled:!v.value,loading:i.value,color:"success",size:"large","prepend-icon":"mdi-upload",onClick:f},{default:o(()=>[$(" Upload ")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},na=J({color:String,cycle:Boolean,delimiterIcon:{type:ut,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Nt({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),ra=X()({name:"VCarousel",props:na(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:u}=c;const g=re(e,"modelValue"),{t:m}=Re(),v=x();let a=-1;M(g,y),M(()=>e.interval,y),M(()=>e.cycle,b=>{b?y():window.clearTimeout(a)}),pe(i);function i(){!e.cycle||!v.value||(a=window.setTimeout(v.value.group.next,+e.interval>0?+e.interval:6e3))}function y(){window.clearTimeout(a),window.requestAnimationFrame(i)}return K(()=>{const b=Te.filterProps(e);return t(Te,E({ref:v},b,{modelValue:g.value,"onUpdate:modelValue":p=>g.value=p,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Fe(e.height)},e.style]}),{default:u.default,additional:p=>{let{group:h}=p;return t(Q,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&t(Me,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((d,n)=>{const f={id:`carousel-item-${d.id}`,"aria-label":m("$vuetify.carousel.ariaLabel.delimiter",n+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(d.id)&&"v-btn--active"],onClick:()=>h.select(d.id,!0)};return u.item?u.item({props:f,item:d}):t(H,E(d,f),null)})]})]),e.progress&&t(Et,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(h.getItemIndex(g.value)+1)/h.items.value.length*100},null)])},prev:u.prev,next:u.next})}),{}}}),ia=J({...Tt(),...Ot()},"VCarouselItem"),sa=X()({name:"VCarouselItem",inheritAttrs:!1,props:ia(),setup(e,c){let{slots:u,attrs:g}=c;K(()=>{const m=O.filterProps(e),v=De.filterProps(e);return t(De,E({class:["v-carousel-item",e.class]},v),{default:()=>[t(O,E(g,m),u)]})})}}),ua=J({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ge({origin:"center center",scrollStrategy:"block",transition:{component:Ht},zIndex:2400})},"VDialog"),Ie=X()({name:"VDialog",props:ua(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,c){let{emit:u,slots:g}=c;const m=re(e,"modelValue"),{scopeId:v}=je(),a=x();function i(p){var n,f;const h=p.relatedTarget,d=p.target;if(h!==d&&((n=a.value)!=null&&n.contentEl)&&((f=a.value)!=null&&f.globalTop)&&![document,a.value.contentEl].includes(d)&&!a.value.contentEl.contains(d)){const V=ct(a.value.contentEl);if(!V.length)return;const l=V[0],r=V[V.length-1];h===l?r.focus():l.focus()}}dt&&M(()=>m.value&&e.retainFocus,p=>{p?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0});function y(){var p;(p=a.value)!=null&&p.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function b(){u("afterLeave")}return M(m,async p=>{var h;p||(await oe(),(h=a.value.activatorEl)==null||h.focus({preventScroll:!0}))}),K(()=>{const p=ne.filterProps(e),h=E({"aria-haspopup":"dialog","aria-expanded":String(m.value)},e.activatorProps),d=E({tabindex:-1},e.contentProps);return t(ne,E({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},p,{modelValue:m.value,"onUpdate:modelValue":n=>m.value=n,"aria-modal":"true",activatorProps:h,contentProps:d,role:"dialog",onAfterEnter:y,onAfterLeave:b},v),{activator:g.activator,default:function(){for(var n=arguments.length,f=new Array(n),V=0;V<n;V++)f[V]=arguments[V];return t(Me,{root:"VDialog"},{default:()=>{var l;return[(l=g.default)==null?void 0:l.call(g,...f)]}})}})}),ye({},a)}}),da=J({id:String,text:String,...mt(Ge({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),ca=X()({name:"VTooltip",props:da(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:u}=c;const g=re(e,"modelValue"),{scopeId:m}=je(),v=vt(),a=U(()=>e.id||`v-tooltip-${v}`),i=x(),y=U(()=>e.location.split(" ").length>1?e.location:e.location+" center"),b=U(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),p=U(()=>e.transition?e.transition:g.value?"scale-transition":"fade-transition"),h=U(()=>E({"aria-describedby":a.value},e.activatorProps));return K(()=>{const d=ne.filterProps(e);return t(ne,E({ref:i,class:["v-tooltip",e.class],style:e.style,id:a.value},d,{modelValue:g.value,"onUpdate:modelValue":n=>g.value=n,transition:p.value,absolute:!0,location:y.value,origin:b.value,persistent:!0,role:"tooltip",activatorProps:h.value,_disableGlobalStack:!0},m),{activator:u.activator,default:function(){var l;for(var n=arguments.length,f=new Array(n),V=0;V<n;V++)f[V]=arguments[V];return((l=u.default)==null?void 0:l.call(u,...f))??e.text}})}),ye({},i)}}),ma={key:1,class:"mt-1"},va={class:"px-4 mb-2"},fa={class:"text-center mb-2"},ga={__name:"PhotoDetail",props:{photo:{type:Object,required:!0}},emits:["updateData"],setup(e,{emit:c}){const{isAuth:u,user:g}=pt(),m=e,v=c,a=qe(m,"photo"),i=ft("transformations"),y=x(0),b=x(0),p=x(!1);pe(async()=>{u.value&&Gt(a.value.id).then(n=>{y.value=n}).catch(n=>{console.log(n)}),Be(a.value.id).then(n=>{b.value=n}).catch(n=>{console.log(n)})});const h=async n=>{jt(a.value.id,n).then(f=>{Be(a.value.id).then(V=>{b.value=V})}).catch(f=>{console.log(f)})},d=()=>{console.log("handleUpdateData"),v("updateData")};return(n,f)=>{const V=gt("v-carousel-controls");return p.value?q("",!0):(k(),S(ee,{key:0,class:"align-center"},{default:o(()=>{var l,r;return[t(he,{title:(l=a.value)==null?void 0:l.title},{append:o(()=>[t(ca,{location:"bottom"},{activator:o(({props:s})=>[t(Ne,E({size:"64"},s),{default:o(()=>{var w,C,B,_,T,D,z,F;return[(C=(w=a.value)==null?void 0:w.owner)!=null&&C.avatar?(k(),S(O,{key:0,alt:(_=(B=a.value)==null?void 0:B.owner)==null?void 0:_.username,src:(D=(T=a.value)==null?void 0:T.owner)==null?void 0:D.avatar},null,8,["alt","src"])):(k(),Y("span",ma,L((F=(z=a.value)==null?void 0:z.owner)==null?void 0:F.username),1))]}),_:2},1040)]),default:o(()=>[t(Le,null,{default:o(()=>{var s,w;return[$(L((w=(s=a.value)==null?void 0:s.owner)==null?void 0:w.username),1)]}),_:1})]),_:1})]),prepend:o(()=>[t(Ee,{"model-value":b.value,color:"amber",density:"compact","half-increments":"",readonly:""},null,8,["model-value"])]),default:o(()=>{var s;return[(s=a.value)!=null&&s.tags?(k(),S(ve,{key:0},{default:o(()=>{var w;return[Z("div",va,[(k(!0),Y(Q,null,me((w=a.value)==null?void 0:w.tags,C=>(k(),S(We,{key:C.id,class:"mr-2"},{default:o(()=>[$(L(C.name),1)]),_:2},1024))),128))])]}),_:1})):q("",!0),t(Ut,null,{default:o(()=>[t(fe,{class:"justify-center"},{default:o(()=>{var w;return[t(j,{cols:"7",class:"d-flex"},{default:o(()=>{var C,B;return[t(O,{src:(C=a.value)==null?void 0:C.secure_url,alt:(B=a.value)==null?void 0:B.title,width:"300px",height:"300px",class:"mx-auto my-4","lazy-src":"https://picsum.photos/id/11/10/6"},null,8,["src","alt"])]}),_:1}),(w=W(i))!=null&&w.length?(k(),S(j,{key:0,cols:"5",class:"d-flex"},{default:o(()=>[t(Qe,{vertical:"",class:"mx-4"}),t(ee,{class:"d-flex flex-column",width:"100%"},{default:o(()=>{var C,B;return[Z("h3",fa,"Transformations `"+L(W(i).length)+"`",1),(C=W(i))!=null&&C.length?(k(),S(ra,{key:0,"show-arrows":((B=W(i))==null?void 0:B.length)>1,height:"300px","hide-delimiter-background":"","hide-delimiters":""},{default:o(()=>[(k(!0),Y(Q,null,me(W(i),_=>(k(),S(sa,{key:_.id,class:"align-center text-center fill-height cursor-pointer",height:"150px",position:"relative"},{default:o(()=>[t(Ie,null,{activator:o(({props:T})=>{var D;return[t(O,E({src:_.secure_url,alt:_.title,ref_for:!0},T,{pointer:"true"}),null,16,["src","alt"]),t(O,E({ref_for:!0},T,{src:(D=_==null?void 0:_.qr_code)==null?void 0:D.secure_url,alt:_.title,width:"64",height:"64",class:"position-absolute top-0 right-0 fill=white"}),null,16,["src","alt"])]}),default:o(({isActive:T})=>[t(se,{class:"fill-height"},{default:o(()=>[t(ie,{class:"align-center text-end"},{default:o(()=>[t(ee,{class:"mx-auto","max-width":"500px"},{default:o(()=>{var D;return[t(O,{src:(D=_==null?void 0:_.qr_code)==null?void 0:D.secure_url,alt:_.title,style:{"background-color":"white"}},null,8,["src","alt"]),t(H,{variant:"outlined",color:"green",text:"Close",class:"mx-4 my-6",onClick:z=>T.value=!1},null,8,["onClick"])]}),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),t(V,{class:"d-flex justify-center"})]),_:1},8,["show-arrows"])):q("",!0)]}),_:1})]),_:1})):q("",!0)]}),_:1}),t(ve,null,{default:o(()=>{var w;return[$(L((w=a.value)==null?void 0:w.description),1)]}),_:1})]),_:1}),t(Oe,null,{default:o(()=>{var w,C,B;return[((w=W(g))==null?void 0:w.email)===((B=(C=a.value)==null?void 0:C.owner)==null?void 0:B.email)?(k(),S(Ie,{key:0},{activator:o(({props:_})=>[t(H,E(_,{variant:"outlined",color:"green",text:"Make transformation"}),null,16)]),default:o(({isActive:_})=>{var T;return[t(oa,{photo_id:(T=a.value)==null?void 0:T.id,onClose:D=>_.value=!1,onAddTransformation:D=>{_.value=!1,d()}},null,8,["photo_id","onClose","onAddTransformation"])]}),_:1})):q("",!0),t(Ve),W(u)?(k(),S(Ee,{key:1,modelValue:y.value,"onUpdate:modelValue":[f[0]||(f[0]=_=>y.value=_),h],color:"amber",density:"compact"},null,8,["modelValue"])):q("",!0)]}),_:1})]}),_:1},8,["title"]),t(ta,{photo_id:(r=a.value)==null?void 0:r.id},null,8,["photo_id"])]}),_:1}))}}},pa={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ha(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[c])}function Ue(e){const[c,u]=e.split("@");return Array.from({length:u}).map(()=>ue(c))}function ue(e){let c=[];if(!e)return c;const u=pa[e];if(e!==u){if(e.includes(","))return $e(e);if(e.includes("@"))return Ue(e);u.includes(",")?c=$e(u):u.includes("@")?c=Ue(u):u&&c.push(ue(u))}return[ha(e,c)]}function $e(e){return e.replace(/\s/g,"").split(",").map(ue)}const ya=J({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...ht(),...Dt(),...yt()},"VSkeletonLoader"),Va=X()({name:"VSkeletonLoader",props:ya(),setup(e,c){let{slots:u}=c;const{backgroundColorClasses:g,backgroundColorStyles:m}=Bt(qe(e,"color")),{dimensionStyles:v}=Vt(e),{elevationClasses:a}=It(e),{themeClasses:i}=bt(e),{t:y}=Re(),b=U(()=>ue(xt(e.type).join(",")));return K(()=>{var h;const p=!u.default||e.loading;return t("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},i.value,g.value,a.value],style:[m.value,p?v.value:{}],"aria-busy":e.boilerplate?void 0:p,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:y(e.loadingText),role:e.boilerplate?void 0:"alert"},[p?b.value:(h=u.default)==null?void 0:h.call(u)])}),{}}}),Fa={__name:"PhotoDetail",setup(e){const u=wt().params.photo_id,g=x(!1),m=x(null),v=x([]);_t("transformations",v);const a=async y=>{g.value=!0,Ct(y).then(b=>{m.value=b,v.value=b.transformations}).catch(b=>{console.log(b)}).finally(()=>{g.value=!1})},i=()=>{a(u)};return ge(async()=>{a(u)}),(y,b)=>(k(),S(se,{class:"fill-height"},{default:o(()=>[t(ie,{class:"align-center text-center fill-height"},{default:o(()=>[g.value?(k(),S(Va,{key:1,class:"mx-auto border","max-height":"auto",type:"card, avatar, article, actions"})):(k(),S(ga,{key:0,photo:m.value,onUpdateData:i},null,8,["photo"]))]),_:1})]),_:1}))}};export{Fa as default};
