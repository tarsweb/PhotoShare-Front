import{C as V,L as y,o as r,c as i,w as e,b as a,e as h,F as U,r as b,g as l,t as s,h as B,aA as N,aB as L,f as P}from"./index-BLdPmo0X.js";import{h as w,V as g,k as D}from"./VGrid-2AqWVivO.js";import{V as E}from"./VSheet-BPPxVze8.js";import{c as I,a as T,b as A,V as S,d as $}from"./VPagination-D52iBSlf.js";import{a as F,f as R,e as z}from"./index-C07GXgUv.js";import{V as n,e as c}from"./VListItem-DkUT9Gfh.js";import{V as j}from"./VDivider-C1a4wq5d.js";import{V as q}from"./VSpacer-q3eTX0uv.js";import{V as k}from"./VContainer-_T5mVdcw.js";const G={key:0,class:"mt-10"},H={__name:"Users",setup(v){const d=V(!1),p=V([]),m=async()=>{const o=await N();p.value=o,console.log("users.vue",o)};y(async()=>{d.value=!0,m(),d.value=!1});const C=async(o,f)=>{await L({email:o,blocked:f}),m()};return(o,f)=>(r(),i(k,{class:"fill-height"},{default:e(()=>[a(w,{class:"align-center text-center fill-height"},{default:e(()=>[d.value?(r(),i(D,{key:1,indeterminate:"",size:88,width:9})):(r(),i(E,{key:0,class:"align-center my-12"},{default:e(()=>[a(I,{items:p.value,"items-per-page":6,class:"mx-12"},{default:e(({items:u})=>[a(T,null,{default:e(()=>[(r(!0),h(U,null,b(u,t=>(r(),i(A,{key:t.id,cols:"auto",class:"mx-auto my-auto"},{default:e(()=>[a(F,{lg:"4",elevation:14,title:t.raw.username,"prepend-avatar":t.raw.avatar},{append:e(()=>[a(S,{color:"primary"},{default:e(()=>[l(s(t.raw.role),1)]),_:2},1024)]),default:e(()=>[a(R,null,{default:e(()=>[a(n,{"prepend-icon":"mdi-email",title:"Email"},{default:e(()=>[a(c,null,{default:e(()=>[l(s(t.raw.email),1)]),_:2},1024)]),_:2},1024),a(n,{"prepend-icon":"mdi-calendar",title:"Created"},{default:e(()=>[a(c,null,{default:e(()=>[l(s(t.raw.created_at.split("T")[0]),1)]),_:2},1024)]),_:2},1024),a(n,{"prepend-icon":"mdi-calendar",title:"Update"},{default:e(()=>[a(c,null,{default:e(()=>[l(s(t.raw.updated_at.split("T")[0]),1)]),_:2},1024)]),_:2},1024),a(j),a(n,{"prepend-icon":"mdi-camera",title:"Photos"},{default:e(()=>[a(c,null,{default:e(()=>[l(s(t.raw.count_photos),1)]),_:2},1024)]),_:2},1024),a(n,{"prepend-icon":"mdi-comment",title:"Comment"},{default:e(()=>[a(c,null,{default:e(()=>[l(s(t.raw.count_comments),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(z,null,{default:e(()=>[a(g,{"prepend-icon":"mdi-pencil",color:"success"},{default:e(()=>[l(" Edit ")]),_:1}),a(q),a(g,{icon:t.raw.blocked?"mdi-lock":"mdi-lock-open",color:t.raw.blocked?"error":"success",onClick:_=>C(t.raw.email,!t.raw.blocked)},null,8,["icon","color","onClick"])]),_:2},1024)]),_:2},1032,["title","prepend-avatar"])]),_:2},1024))),128))]),_:2},1024)]),footer:e(({pageCount:u,prevPage:t,nextPage:_,setPage:x})=>[u>1?(r(),h("div",G,[a($,{length:u,"total-visible":5,rounded:"circle","onUpdate:modelValue":x,onPrev:t,onNext:_},null,8,["length","onUpdate:modelValue","onPrev","onNext"])])):B("",!0)]),_:1},8,["items"])]),_:1}))]),_:1})]),_:1}))}},J=P("h1",null,"Users",-1),ae={__name:"Users",setup(v){return(d,p)=>(r(),i(k,{class:"fill-height"},{default:e(()=>[a(w,{class:"align-center text-center fill-height"},{default:e(()=>[J,a(H)]),_:1})]),_:1}))}};export{ae as default};
