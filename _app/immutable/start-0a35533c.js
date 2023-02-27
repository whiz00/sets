import{S as at,i as rt,s as ot,a as st,e as V,c as it,b as M,g as de,t as B,d as he,f as F,h as G,j as lt,o as Ie,k as ct,l as ft,m as ut,n as ve,p as C,q as dt,r as ht,u as pt,v as H,w as W,x as Ue,y as Y,z as X,A as le}from"./chunks/index-5892b046.js";import{S as tt,I as q,g as ze,f as He,a as Ee,b as ce,s as K,i as We,c as ue,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-97ddc06a.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const s of vt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Rt(a){return a.replace(/\/$/,"")+St}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete($e(a)),pe(a,e));const ee=new Map;function It(a,e){const n=$e(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...f}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&ee.set(n,{body:i,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,f))}return pe(a,e)}function Ot(a,e,n){if(ee.size>0){const s=$e(a,n),i=ee.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);ee.delete(s)}}return pe(e,n)}function $e(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Lt(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,d)=>{if(d%2){if(g.startsWith("x+"))return ke(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ke(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const _=At.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,k,L,T]=_;return e.push({name:L,matcher:T,optional:!!E,rest:!!k,chained:k?d===1&&t[0]==="":!1}),k?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return ke(g)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Ut)}function Nt(a,e,n){const s={},i=a.slice(1);let f="";for(let t=0;t<e.length;t+=1){const l=e[t];let g=i[t];if(l.chained&&l.rest&&f&&(g=g?f+"/"+g:f),f="",g===void 0)l.rest&&(s[l.name]="");else{if(l.matcher&&!n[l.matcher](g)){if(l.optional&&l.chained){let d=i.indexOf(void 0,t);if(d===-1){const _=e[t+1];if(_!=null&&_.rest&&_.chained)f=g;else return}for(;d>=t;)i[d]=i[d-1],d-=1;continue}return}s[l.name]=g}}if(!f)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([l,[g,d,_]])=>{const{pattern:E,params:k}=Pt(l),L={id:l,exec:T=>{const U=E.exec(T);if(U)return Nt(U,k,s)},errors:[1,..._||[]].map(T=>a[T]),layouts:[0,...d||[]].map(t),leaf:f(g)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function f(l){const g=l<0;return g&&(l=~l),[g,a[l]]}function t(l){return l===void 0?l:[i.has(l),a[l]]}}function Tt(a){let e,n,s;var i=a[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=H(i,f(a))),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&Ue(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),M(t,n,l),s=!0},p(t,l){const g={};if(l&4&&(g.data=t[2]),l&2&&(g.form=t[1]),i!==(i=t[0][0])){if(e){de();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),he()}i?(e=H(i,f(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&X(e,t)}}}function Dt(a){let e,n,s;var i=a[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return i&&(e=H(i,f(a))),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&Ue(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),M(t,n,l),s=!0},p(t,l){const g={};if(l&4&&(g.data=t[2]),l&523&&(g.$$scope={dirty:l,ctx:t}),i!==(i=t[0][0])){if(e){de();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),he()}i?(e=H(i,f(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&X(e,t)}}}function Ct(a){let e,n,s;var i=a[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=H(i,f(a))),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&Ue(e.$$.fragment,t),n=V()},m(t,l){e&&Y(e,t,l),M(t,n,l),s=!0},p(t,l){const g={};if(l&8&&(g.data=t[3]),l&2&&(g.form=t[1]),i!==(i=t[0][1])){if(e){de();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),he()}i?(e=H(i,f(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&X(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);n&&n.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,i){M(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=ht(n,a[6])},m(n,s){M(n,e,s)},p(n,s){s&64&&pt(e,n[6])},d(n){n&&G(e)}}}function qt(a){let e,n,s,i,f;const t=[Dt,Tt],l=[];function g(_,E){return _[0][1]?0:1}e=g(a),n=l[e]=t[e](a);let d=a[4]&&Xe(a);return{c(){n.c(),s=st(),d&&d.c(),i=V()},l(_){n.l(_),s=it(_),d&&d.l(_),i=V()},m(_,E){l[e].m(_,E),M(_,s,E),d&&d.m(_,E),M(_,i,E),f=!0},p(_,[E]){let k=e;e=g(_),e===k?l[e].p(_,E):(de(),B(l[k],1,1,()=>{l[k]=null}),he(),n=l[e],n?n.p(_,E):(n=l[e]=t[e](_),n.c()),F(n,1),n.m(s.parentNode,s)),_[4]?d?d.p(_,E):(d=Xe(_),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(_){f||(F(n),f=!0)},o(_){B(n),f=!1},d(_){l[e].d(_),_&&G(s),d&&d.d(_),_&&G(i)}}}function Vt(a,e,n){let{stores:s}=e,{page:i}=e,{components:f}=e,{form:t}=e,{data_0:l=null}=e,{data_1:g=null}=e;lt(s.page.notify);let d=!1,_=!1,E=null;return Ie(()=>{const k=s.page.subscribe(()=>{d&&(n(5,_=!0),n(6,E=document.title||"untitled page"))});return n(4,d=!0),k}),a.$$set=k=>{"stores"in k&&n(7,s=k.stores),"page"in k&&n(8,i=k.page),"components"in k&&n(0,f=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,l=k.data_0),"data_1"in k&&n(3,g=k.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(i)},[f,t,l,g,d,_,E,s,i]}class Bt extends at{constructor(e){super(),rt(this,e,Vt,qt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(a,e){return new URL(a,e).href},Qe={},fe=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Gt(f,s),f in Qe)return;Qe[f]=!0;const t=f.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!s)for(let _=i.length-1;_>=0;_--){const E=i[_];if(E.href===f&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${l}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Ft,t||(d.as="script",d.crossOrigin=""),d.href=f,document.head.appendChild(d),t)return new Promise((_,E)=>{d.addEventListener("load",_),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Jt={},me=[()=>fe(()=>import("./chunks/0-de784b8e.js"),["./chunks/0-de784b8e.js","./components/pages/_layout.svelte-b7e823ac.js","./chunks/index-5892b046.js","./assets/_layout-6b20bcf2.css"],import.meta.url),()=>fe(()=>import("./chunks/1-a06244c4.js"),["./chunks/1-a06244c4.js","./components/error.svelte-c843e7f9.js","./chunks/index-5892b046.js","./chunks/singletons-97ddc06a.js","./chunks/index-721adf8c.js"],import.meta.url),()=>fe(()=>import("./chunks/2-1642ccb2.js"),["./chunks/2-1642ccb2.js","./chunks/_page-fca24c55.js","./components/pages/_page.svelte-ff25c1ab.js","./chunks/index-5892b046.js","./chunks/TableTemplate-6f5d294e.js","./chunks/index-721adf8c.js"],import.meta.url),()=>fe(()=>import("./chunks/3-7a5642fe.js"),["./chunks/3-7a5642fe.js","./chunks/_page-da46b06b.js","./components/pages/analysis/_page.svelte-2cff804b.js","./chunks/index-5892b046.js","./chunks/TableTemplate-6f5d294e.js","./chunks/index-721adf8c.js"],import.meta.url)],Kt=[],Mt={"/":[2],"/analysis":[3]},zt={handleError:({error:a})=>{console.error(a)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Ht(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(f,t=!1){if(f===Wt)return;if(f===Xt)return NaN;if(f===Zt)return 1/0;if(f===Qt)return-1/0;if(f===xt)return-0;if(t)throw new Error("Invalid input");if(f in s)return s[f];const l=n[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],d=e==null?void 0:e[g];if(d)return s[f]=d(i(l[1]));switch(g){case"Date":s[f]=new Date(l[1]);break;case"Set":const _=new Set;s[f]=_;for(let L=1;L<l.length;L+=1)_.add(i(l[L]));break;case"Map":const E=new Map;s[f]=E;for(let L=1;L<l.length;L+=2)E.set(i(l[L]),i(l[L+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const k=Object.create(null);s[f]=k;for(let L=1;L<l.length;L+=2)k[l[L]]=i(l[L+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);s[f]=g;for(let d=0;d<l.length;d+=1){const _=l[d];_!==Yt&&(g[d]=i(_))}}else{const g={};s[f]=g;for(const d in l){const _=l[d];g[d]=i(_)}}return s[f]}return i(0)}const Se=jt(me,Kt,Mt,Jt),Ae=me[0],Pe=me[1];Ae();Pe();let te={};try{te=JSON.parse(sessionStorage[tt])}catch{}function Re(a){te[a]=ue()}function tn({target:a,base:e}){var Je;const n=document.documentElement,s=[];let i=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,g=!1,d=!0,_=!1,E=!1,k=!1,L=!1,T,U=(Je=history.state)==null?void 0:Je[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const _e=te[U];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,Ne,ne;async function je(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),o=oe(r,!0);i=null,await De(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:u=!1,keepFocus:c=!1,state:h={},invalidateAll:p=!1},m,b){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?ue():null,keepfocus:c,redirect_chain:m,details:{state:h,replaceState:u},nav_token:b,accepted:()=>{p&&(L=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=oe(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ve(o).then(u=>(u.type==="loaded"&&u.state.error&&(i=null),u))},i.promise}async function ae(...r){const u=Se.filter(c=>r.some(h=>c.exec(h))).map(c=>Promise.all([...c.layouts,c.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)}async function De(r,o,u,c,h={},p){var b,w;Ne=h;let m=r&&await Ve(r);if(m||(m=await Ge(o,{id:null},await x(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ne!==h)return!1;if(m.type==="redirect")if(u.length>10||u.includes(o.pathname))m=await re({status:500,error:await x(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...u,o.pathname],h),!1;else((w=(b=m.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await K.updated.check()&&await ie(o);if(s.length=0,L=!1,_=!0,c&&c.details){const{details:y}=c,R=y.replaceState?0:1;y.state[q]=U+=R,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,g?(t=m.state,m.props.page&&(m.props.page.url=o),T.$set(m.props)):Ce(m),c){const{scroll:y,keepfocus:R}=c;if(R||Le(),await le(),d){const I=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();d=!0,m.props.page&&(J=m.props.page),p&&p(),_=!1}function Ce(r){var c;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=r.props.page,T=new Bt({target:a,props:{...r.props,stores:K},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(h=>h(u)),g=!0}async function Z({url:r,params:o,branch:u,status:c,error:h,route:p,form:m}){const b=u.filter(Boolean);let w="never";for(const O of u)(O==null?void 0:O.slash)!==void 0&&(w=O.slash);r.pathname=yt(r.pathname,w),r.search=r.search;const y={type:"loaded",state:{url:r,params:o,branch:u,error:h,route:p},props:{components:b.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let R={},I=!J;for(let O=0;O<b.length;O+=1){const v=b[O];R={...R,...v.data},(I||!t.branch.some(N=>N===v))&&(y.props[`data_${O}`]=R,I=I||Object.keys(v.data??{}).length>0)}return I||(I=Object.keys(J.data).length!==Object.keys(R).length),(!t.url||r.href!==t.url.href||t.error!==h||m!==void 0||I)&&(y.props.page={error:h,params:o,route:p,status:c,url:new URL(r),form:m??null,data:I?R:J.data}),y}async function ye({loader:r,parent:o,url:u,params:c,route:h,server_data_node:p}){var y,R,I;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await r();if((y=w.universal)!=null&&y.load){let D=function(...v){for(const N of v){const{href:j}=new URL(N,u);b.dependencies.add(j)}};const O={route:{get id(){return b.route=!0,h.id}},params:new Proxy(c,{get:(v,N)=>(b.params.add(N),v[N])}),data:(p==null?void 0:p.data)??null,url:Et(u,()=>{b.url=!0}),async fetch(v,N){let j;v instanceof Request?(j=v.url,N={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...N}):j=v;const S=new URL(j,u).href;return D(S),g?Ot(j,S,N):It(j,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};m=await w.universal.load.call(null,O)??null,m=m?await Ht(m):null}return{node:w,loader:r,server:p,universal:(R=w.universal)!=null&&R.load?{type:"data",data:m,uses:b}:null,data:m??(p==null?void 0:p.data)??null,slash:((I=w.universal)==null?void 0:I.trailingSlash)??(p==null?void 0:p.slash)}}function qe(r,o,u,c,h){if(L)return!0;if(!c)return!1;if(c.parent&&r||c.route&&o||c.url&&u)return!0;for(const p of c.params)if(h[p]!==t.params[p])return!0;for(const p of c.dependencies)if(s.some(m=>m(new URL(p))))return!0;return!1}function we(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ve({id:r,invalidating:o,url:u,params:c,route:h}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:p,layouts:m,leaf:b}=h,w=[...m,b];p.forEach(S=>S==null?void 0:S().catch(()=>{})),w.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const R=t.url?r!==t.url.pathname+t.url.search:!1,I=t.route?r!==t.route.id:!1,D=w.reduce((S,P,$)=>{var Q;const A=t.branch[$],z=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||qe(S.some(Boolean),I,R,(Q=A.server)==null?void 0:Q.uses,c));return S.push(z),S},[]);if(D.some(Boolean)){try{y=await et(u,D)}catch(S){return re({status:500,error:await x(S,{url:u,params:c,route:{id:h.id}}),url:u,route:h})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let v=!1;const N=w.map(async(S,P)=>{var Q;if(!S)return;const $=t.branch[P],A=O==null?void 0:O[P];if((!A||A.type==="skip")&&S[1]===($==null?void 0:$.loader)&&!qe(v,I,R,(Q=$.universal)==null?void 0:Q.uses,c))return $;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:S[1],url:u,params:c,route:h,parent:async()=>{var Me;const Ke={};for(let be=0;be<P;be+=1)Object.assign(Ke,(Me=await N[be])==null?void 0:Me.data);return Ke},server_data_node:we(A===void 0&&S[0]?{type:"skip"}:A??null,$==null?void 0:$.server)})});for(const S of N)S.catch(()=>{});const j=[];for(let S=0;S<w.length;S+=1)if(w[S])try{j.push(await N[S])}catch(P){if(P instanceof xe)return{type:"redirect",location:P.location};let $=500,A;O!=null&&O.includes(P)?($=P.status??$,A=P.error):P instanceof Oe?($=P.status,A=P.body):A=await x(P,{params:c,url:u,route:{id:h.id}});const z=await Be(S,j,p);return z?await Z({url:u,params:c,branch:j.slice(0,z.idx).concat(z.node),status:$,error:A,route:h}):await Ge(u,{id:h.id},A,$)}else j.push(void 0);return await Z({url:u,params:c,branch:j,status:200,error:null,route:h,form:o?void 0:null})}async function Be(r,o,u){for(;r--;)if(u[r]){let c=r;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await u[r](),loader:u[r],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:r,error:o,url:u,route:c}){const h={},p=await Ae();let m=null;if(p.server)try{const y=await et(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||l)&&await ie(u)}const b=await ye({loader:Ae,url:u,params:h,route:c,parent:()=>Promise.resolve({}),server_data_node:we(m)}),w={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Z({url:u,params:h,branch:[b,w],status:r,error:o,route:null})}function oe(r,o){if(We(r,e))return;const u=wt(r.pathname.slice(e.length)||"/");for(const c of Se){const h=c.exec(u);if(h)return{id:r.pathname+r.search,invalidating:o,route:c,params:bt(h),url:r}}}function Fe({url:r,type:o,intent:u,delta:c}){var b,w;let h=!1;const p={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((w=u==null?void 0:u.route)==null?void 0:w.id)??null},url:r},willUnload:!u,type:o};c!==void 0&&(p.delta=c);const m={...p,cancel:()=>{h=!0}};return E||f.before_navigate.forEach(y=>y(m)),h?null:p}async function se({url:r,scroll:o,keepfocus:u,redirect_chain:c,details:h,type:p,delta:m,nav_token:b,accepted:w,blocked:y}){const R=oe(r,!1),I=Fe({url:r,type:p,delta:m,intent:R});if(!I){y();return}Re(U),w(),E=!0,g&&K.navigating.set(I),await De(R,r,c,{scroll:o,keepfocus:u,details:h},b,()=>{E=!1,f.after_navigate.forEach(D=>D(I)),K.navigating.set(null)})}async function Ge(r,o,u,c){return r.origin===location.origin&&r.pathname===location.pathname&&!l?await re({status:c,error:u,url:r,route:o}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",p=>{const m=p.target;clearTimeout(r),r=setTimeout(()=>{c(m,2)},20)});function o(p){c(p.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const u=new IntersectionObserver(p=>{for(const m of p)m.isIntersecting&&(ae(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function c(p,m){const b=He(p,n);if(!b)return;const{url:w,external:y}=Ee(b,e);if(y)return;const R=ce(b);R.reload||(m<=R.preload_data?Te(w):m<=R.preload_code&&ae(w.pathname))}function h(){u.disconnect();for(const p of n.querySelectorAll("a")){const{url:m,external:b}=Ee(p,e);if(b)continue;const w=ce(p);w.reload||(w.preload_code===Ye.viewport&&u.observe(p),w.preload_code===Ye.eager&&ae(m.pathname))}}f.after_navigate.push(h),h()}return{after_navigate:r=>{Ie(()=>(f.after_navigate.push(r),()=>{const o=f.after_navigate.indexOf(r);f.after_navigate.splice(o,1)}))},before_navigate:r=>{Ie(()=>(f.before_navigate.push(r),()=>{const o=f.before_navigate.indexOf(r);f.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!g)&&(d=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(u=>u.href===o)}return je()},invalidateAll:()=>(L=!0,je()),preload_data:async r=>{const o=new URL(r,ze(document));await Te(o)},preload_code:ae,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:u,route:c}=t;if(!c)return;const h=await Be(t.branch.length,u,c.errors);if(h){const p=await Z({url:o,params:t.params,branch:u.slice(0,h.idx).concat(h.node),status:r.status??500,error:r.error,route:c});t=p.state,T.$set(p.props),le().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...J,form:r.data,status:r.status}};T.$set(o),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c;let u=!1;if(!E){const h={from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};f.before_navigate.forEach(p=>p(h))}u?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(U);try{sessionStorage[tt]=JSON.stringify(te)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const u=He(o.composedPath()[0],n);if(!u)return;const{url:c,external:h,has:p}=Ee(u,e),m=ce(u);if(!c||!(u instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||p.download)return;if(h||m.reload){Fe({url:c,type:"link"})||o.preventDefault(),E=!0;return}const[w,y]=c.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){k=!0,Re(U),t.url=c,K.page.set({...J,url:c}),K.page.notify();return}se({url:c,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var w;if(o.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||u.method)!=="get")return;const p=new URL(((w=o.submitter)==null?void 0:w.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||u.action);if(We(p,e))return;const{noscroll:m,reload:b}=ce(o.target);b||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:p,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var u;if((u=o.state)!=null&&u[q]){if(o.state[q]===U)return;const c=o.state[q]-U;se({url:new URL(location.href),scroll:te[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:u,params:c,route:h,data:p,form:m})=>{l=!0;const b=new URL(location.href);({params:c={},route:h={id:null}}=oe(b,!1)||{});let w;try{const y=u.map(async(R,I)=>{const D=p[I];return ye({loader:me[R],url:b,params:c,route:h,parent:async()=>{const O={};for(let v=0;v<I;v+=1)Object.assign(O,(await y[v]).data);return O},server_data_node:we(D)})});w=await Z({url:b,params:c,branch:await Promise.all(y),status:r,error:o,form:m,route:Se.find(({id:R})=>R===h.id)??null})}catch(y){if(y instanceof xe){await ie(new URL(y.location,location.href));return}w=await re({status:y instanceof Oe?y.status:500,error:await x(y,{url:b,params:c,route:h}),url:b,route:h})}Ce(w)}}}async function et(a,e){var f;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await pe(n.href),i=await s.json();if(!s.ok)throw new Error(i);return(f=i.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function x(a,e){return a instanceof Oe?a.body:zt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function rn({env:a,hydrate:e,paths:n,target:s,version:i}){mt(n),gt(i);const f=tn({target:s,base:n.base});_t({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{rn as start};
