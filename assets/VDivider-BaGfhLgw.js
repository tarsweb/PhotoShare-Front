import{p as c}from"./VGrid-DuvdOv0C.js";import{p as u,j as m,q as h,l as g,v as f,s as y,z as _,n as b,b as r,B as s}from"./index-D2okRfwb.js";const C=u({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...m(),...h()},"VDivider"),S=g()({name:"VDivider",props:C(),setup(e,l){let{attrs:i,slots:a}=l;const{themeClasses:n}=f(e),{textColorClasses:o,textColorStyles:v}=c(y(e,"color")),d=_(()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return b(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,o.value,e.class],style:[d.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{S as V};