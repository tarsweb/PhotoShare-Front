import{X as O,y as V,a5 as L,aA as b,a9 as X,C as w,p as j,J as N,z as f,H as Q,ak as ke,s as H,a4 as we,j as W,k as Y,l as Z,n as ee,b as g,a2 as K,aB as U,ae as Ae,q as Pe,E as Ce,v as Ie,af as Ve,aC as Oe,T as Le,a8 as Me,F as q}from"./index-D2okRfwb.js";import{g as Be,V as z}from"./index-Dwa7o3MB.js";import{m as Ne,l as _e,b as je,c as De,s as Re,q as Te,R as Fe,v as Ge,d as xe,w as Ee,o as He,e as Ke,f as Ue,x as qe,n as $,g as J}from"./VGrid-DuvdOv0C.js";const _=Symbol.for("vuetify:list");function ct(){const e=O(_,{hasPrepend:V(!1),updateHasPrepend:()=>null}),i={hasPrepend:V(!1),updateHasPrepend:l=>{l&&(i.hasPrepend.value=l)}};return L(_,i),e}function ze(){return O(_,null)}const D=e=>{const i={activate:l=>{let{id:a,value:n,activated:t}=l;return a=b(a),e&&!n&&t.size===1&&t.has(a)||(n?t.add(a):t.delete(a)),t},in:(l,a,n)=>{let t=new Set;if(l!=null)for(const s of X(l))t=i.activate({id:s,value:!0,activated:new Set(t),children:a,parents:n});return t},out:l=>Array.from(l)};return i},te=e=>{const i=D(e);return{activate:a=>{let{activated:n,id:t,...s}=a;t=b(t);const u=n.has(t)?new Set([t]):new Set;return i.activate({...s,id:t,activated:u})},in:(a,n,t)=>{let s=new Set;if(a!=null){const u=X(a);u.length&&(s=i.in(u.slice(0,1),n,t))}return s},out:(a,n,t)=>i.out(a,n,t)}},$e=e=>{const i=D(e);return{activate:a=>{let{id:n,activated:t,children:s,...u}=a;return n=b(n),s.has(n)?t:i.activate({id:n,activated:t,children:s,...u})},in:i.in,out:i.out}},Je=e=>{const i=te(e);return{activate:a=>{let{id:n,activated:t,children:s,...u}=a;return n=b(n),s.has(n)?t:i.activate({id:n,activated:t,children:s,...u})},in:i.in,out:i.out}},Xe={open:e=>{let{id:i,value:l,opened:a,parents:n}=e;if(l){const t=new Set;t.add(i);let s=n.get(i);for(;s!=null;)t.add(s),s=n.get(s);return t}else return a.delete(i),a},select:()=>null},ae={open:e=>{let{id:i,value:l,opened:a,parents:n}=e;if(l){let t=n.get(i);for(a.add(i);t!=null&&t!==i;)a.add(t),t=n.get(t);return a}else a.delete(i);return a},select:()=>null},Qe={open:ae.open,select:e=>{let{id:i,value:l,opened:a,parents:n}=e;if(!l)return a;const t=[];let s=n.get(i);for(;s!=null;)t.push(s),s=n.get(s);return new Set(t)}},R=e=>{const i={select:l=>{let{id:a,value:n,selected:t}=l;if(a=b(a),e&&!n){const s=Array.from(t.entries()).reduce((u,k)=>{let[m,y]=k;return y==="on"&&u.push(m),u},[]);if(s.length===1&&s[0]===a)return t}return t.set(a,n?"on":"off"),t},in:(l,a,n)=>{let t=new Map;for(const s of l||[])t=i.select({id:s,value:!0,selected:new Map(t),children:a,parents:n});return t},out:l=>{const a=[];for(const[n,t]of l.entries())t==="on"&&a.push(n);return a}};return i},ne=e=>{const i=R(e);return{select:a=>{let{selected:n,id:t,...s}=a;t=b(t);const u=n.has(t)?new Map([[t,n.get(t)]]):new Map;return i.select({...s,id:t,selected:u})},in:(a,n,t)=>{let s=new Map;return a!=null&&a.length&&(s=i.in(a.slice(0,1),n,t)),s},out:(a,n,t)=>i.out(a,n,t)}},We=e=>{const i=R(e);return{select:a=>{let{id:n,selected:t,children:s,...u}=a;return n=b(n),s.has(n)?t:i.select({id:n,selected:t,children:s,...u})},in:i.in,out:i.out}},Ye=e=>{const i=ne(e);return{select:a=>{let{id:n,selected:t,children:s,...u}=a;return n=b(n),s.has(n)?t:i.select({id:n,selected:t,children:s,...u})},in:i.in,out:i.out}},Ze=e=>{const i={select:l=>{let{id:a,value:n,selected:t,children:s,parents:u}=l;a=b(a);const k=new Map(t),m=[a];for(;m.length;){const S=m.shift();t.set(S,n?"on":"off"),s.has(S)&&m.push(...s.get(S))}let y=u.get(a);for(;y;){const S=s.get(y),h=S.every(c=>t.get(c)==="on"),r=S.every(c=>!t.has(c)||t.get(c)==="off");t.set(y,h?"on":r?"off":"indeterminate"),y=u.get(y)}return e&&!n&&Array.from(t.entries()).reduce((h,r)=>{let[c,o]=r;return o==="on"&&h.push(c),h},[]).length===0?k:t},in:(l,a,n)=>{let t=new Map;for(const s of l||[])t=i.select({id:s,value:!0,selected:new Map(t),children:a,parents:n});return t},out:(l,a)=>{const n=[];for(const[t,s]of l.entries())s==="on"&&!a.has(t)&&n.push(t);return n}};return i},C=Symbol.for("vuetify:nested"),le={id:V(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:w(!1),selectable:w(!1),opened:w(new Set),activated:w(new Set),selected:w(new Map),selectedValues:w([])}},ut=j({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),ot=e=>{let i=!1;const l=w(new Map),a=w(new Map),n=N(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),t=f(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return $e(e.mandatory);case"single-leaf":return Je(e.mandatory);case"independent":return D(e.mandatory);case"single-independent":default:return te(e.mandatory)}}),s=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ye(e.mandatory);case"leaf":return We(e.mandatory);case"independent":return R(e.mandatory);case"single-independent":return ne(e.mandatory);case"classic":default:return Ze(e.mandatory)}}),u=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Qe;case"single":return Xe;case"multiple":default:return ae}}),k=N(e,"activated",e.activated,r=>t.value.in(r,l.value,a.value),r=>t.value.out(r,l.value,a.value)),m=N(e,"selected",e.selected,r=>s.value.in(r,l.value,a.value),r=>s.value.out(r,l.value,a.value));Q(()=>{i=!0});function y(r){const c=[];let o=r;for(;o!=null;)c.unshift(o),o=a.value.get(o);return c}const S=ke("nested"),h={id:V(),root:{opened:n,activatable:H(e,"activatable"),selectable:H(e,"selectable"),activated:k,selected:m,selectedValues:f(()=>{const r=[];for(const[c,o]of m.value.entries())o==="on"&&r.push(c);return r}),register:(r,c,o)=>{c&&r!==c&&a.value.set(r,c),o&&l.value.set(r,[]),c!=null&&l.value.set(c,[...l.value.get(c)||[],r])},unregister:r=>{if(i)return;l.value.delete(r);const c=a.value.get(r);if(c){const o=l.value.get(c)??[];l.value.set(c,o.filter(d=>d!==r))}a.value.delete(r),n.value.delete(r)},open:(r,c,o)=>{S.emit("click:open",{id:r,value:c,path:y(r),event:o});const d=u.value.open({id:r,value:c,opened:new Set(n.value),children:l.value,parents:a.value,event:o});d&&(n.value=d)},openOnSelect:(r,c,o)=>{const d=u.value.select({id:r,value:c,selected:new Map(m.value),opened:new Set(n.value),children:l.value,parents:a.value,event:o});d&&(n.value=d)},select:(r,c,o)=>{S.emit("click:select",{id:r,value:c,path:y(r),event:o});const d=s.value.select({id:r,value:c,selected:new Map(m.value),children:l.value,parents:a.value,event:o});d&&(m.value=d),h.root.openOnSelect(r,c,o)},activate:(r,c,o)=>{if(!e.activatable)return h.root.select(r,!0,o);S.emit("click:activate",{id:r,value:c,path:y(r),event:o});const d=t.value.activate({id:r,value:c,activated:new Set(k.value),children:l.value,parents:a.value,event:o});d&&(k.value=d)},children:l,parents:a}};return L(C,h),h.root},et=(e,i)=>{const l=O(C,le),a=Symbol(we()),n=f(()=>e.value!==void 0?e.value:a),t={...l,id:n,open:(s,u)=>l.root.open(n.value,s,u),openOnSelect:(s,u)=>l.root.openOnSelect(n.value,s,u),isOpen:f(()=>l.root.opened.value.has(n.value)),parent:f(()=>l.root.parents.value.get(n.value)),activate:(s,u)=>l.root.activate(n.value,s,u),isActivated:f(()=>l.root.activated.value.has(b(n.value))),select:(s,u)=>l.root.select(n.value,s,u),isSelected:f(()=>l.root.selected.value.get(b(n.value))==="on"),isIndeterminate:f(()=>l.root.selected.value.get(n.value)==="indeterminate"),isLeaf:f(()=>!l.root.children.value.get(n.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(n.value,l.id.value,i),Q(()=>{!l.isGroupActivator&&l.root.unregister(n.value)}),i&&L(C,t),t},dt=()=>{const e=O(C,le);L(C,{...e,isGroupActivator:!0})},tt=j({opacity:[Number,String],...W(),...Y()},"VListItemSubtitle"),at=Z()({name:"VListItemSubtitle",props:tt(),setup(e,i){let{slots:l}=i;return ee(()=>g(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l)),{}}}),nt=Be("v-list-item-title"),lt=j({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:K,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:K,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:U(),onClickOnce:U(),...Ne(),...W(),..._e(),...Ae(),...je(),...De(),...Re(),...Y(),...Pe(),...Te({variant:"text"})},"VListItem"),vt=Z()({name:"VListItem",directives:{Ripple:Fe},props:lt(),emits:{click:e=>!0},setup(e,i){let{attrs:l,slots:a,emit:n}=i;const t=Ge(e,l),s=f(()=>e.value===void 0?t.href.value:e.value),{activate:u,isActivated:k,select:m,isSelected:y,isIndeterminate:S,isGroupActivator:h,root:r,parent:c,openOnSelect:o}=et(s,!1),d=ze(),P=f(()=>{var v;return e.active!==!1&&(e.active||((v=t.isActive)==null?void 0:v.value)||(r.activatable.value?k.value:y.value))}),T=f(()=>e.link!==!1&&t.isLink.value),A=f(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||!!d&&(r.selectable.value||r.activatable.value||e.value!=null))),se=f(()=>e.rounded||e.nav),ie=f(()=>e.color??e.activeColor),re=f(()=>({color:P.value?ie.value??e.baseColor:e.baseColor,variant:e.variant}));Ce(()=>{var v;return(v=t.isActive)==null?void 0:v.value},v=>{v&&c.value!=null&&r.open(c.value,!0),v&&o(v)},{immediate:!0});const{themeClasses:ce}=Ie(e),{borderClasses:ue}=xe(e),{colorClasses:oe,colorStyles:de,variantClasses:ve}=Ee(re),{densityClasses:fe}=He(e),{dimensionStyles:ye}=Ve(e),{elevationClasses:ge}=Ke(e),{roundedClasses:me}=Ue(se),Se=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),M=f(()=>({isActive:P.value,select:m,isSelected:y.value,isIndeterminate:S.value}));function F(v){var I;n("click",v),A.value&&((I=t.navigate)==null||I.call(t,v),!h&&(r.activatable.value?u(!k.value,v):(r.selectable.value||e.value!=null)&&m(!y.value,v)))}function he(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),F(v))}return ee(()=>{const v=T.value?"a":e.tag,I=a.title||e.title!=null,pe=a.subtitle||e.subtitle!=null,G=!!(e.appendAvatar||e.appendIcon),be=!!(G||a.append),x=!!(e.prependAvatar||e.prependIcon),B=!!(x||a.prepend);return d==null||d.updateHasPrepend(B),e.activeColor&&Oe("active-color",["color","base-color"]),Le(g(v,{class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!B&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},ce.value,ue.value,oe.value,fe.value,ge.value,Se.value,me.value,ve.value,e.class],style:[de.value,ye.value,e.style],href:t.href.value,tabindex:A.value?d?-2:0:void 0,onClick:F,onKeydown:A.value&&!T.value&&he},{default:()=>{var E;return[qe(A.value||P.value,"v-list-item"),B&&g("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?g(J,{key:"prepend-defaults",disabled:!x,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var p;return[(p=a.prepend)==null?void 0:p.call(a,M.value)]}}):g(q,null,[e.prependAvatar&&g(z,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&g($,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),g("div",{class:"v-list-item__spacer"},null)]),g("div",{class:"v-list-item__content","data-no-activator":""},[I&&g(nt,{key:"title"},{default:()=>{var p;return[((p=a.title)==null?void 0:p.call(a,{title:e.title}))??e.title]}}),pe&&g(at,{key:"subtitle"},{default:()=>{var p;return[((p=a.subtitle)==null?void 0:p.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(E=a.default)==null?void 0:E.call(a,M.value)]),be&&g("div",{key:"append",class:"v-list-item__append"},[a.append?g(J,{key:"append-defaults",disabled:!G,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var p;return[(p=a.append)==null?void 0:p.call(a,M.value)]}}):g(q,null,[e.appendIcon&&g($,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&g(z,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),g("div",{class:"v-list-item__spacer"},null)])]}}),[[Me("ripple"),A.value&&e.ripple]])}),{isGroupActivator:h,isSelected:y,list:d,select:m}}});export{vt as V,et as a,ze as b,ct as c,ot as d,nt as e,ut as m,dt as u};