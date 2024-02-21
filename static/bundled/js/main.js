const e={},t=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link");o=Promise.all(n.map((n=>{if((n=function(e){return"/"+e}(n))in e)return;e[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(r)for(let e=t.length-1;e>=0;e--){const r=t[e];if(r.href===n&&(!o||"stylesheet"===r.rel))return}else if(document.querySelector(`link[href="${n}"]${s}`))return;const l=document.createElement("link");return l.rel=o?"stylesheet":"modulepreload",o||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),o?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${n}`))))})):void 0})))}return o.then((()=>t())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},n={context:void 0,registry:void 0};function r(e){n.context=e}const o=Symbol("solid-track"),s={equals:(e,t)=>e===t};let l=q;const i=1,u=2,c={owned:null,cleanups:null,context:null,owner:null},a={};var f=null;let d,h=null,p=null,g=null,v=null,y=0;function b(e,t){const n=p,r=f,o=0===e.length,s=void 0===t?r:t,l=o?c:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e((()=>T((()=>D(l)))));f=l,p=null;try{return B(i,!0)}finally{p=n,f=r}}function w(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},s,t):s).equals||void 0};return[C.bind(n),e=>("function"==typeof e&&(e=e(n.value)),$(n,e))]}function x(e,t,n){N(P(e,t,!0,i))}function m(e,t,n){N(P(e,t,!1,i))}function A(e,t,n){l=O;const r=P(e,t,!1,i);n&&n.render||(r.user=!0),v?v.push(r):N(r)}function S(e,t,n){n=n?Object.assign({},s,n):s;const r=P(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,N(r),C.bind(r)}function E(e,t,r){let o,s,l;2===arguments.length&&"object"==typeof t||1===arguments.length?(o=!0,s=e,l=t||{}):(o=e,s=t,l=r||{});let i=null,u=a,c=null,f=!1,h="initialValue"in l,g="function"==typeof o&&S(o);const v=new Set,[y,b]=(l.storage||w)(l.initialValue),[m,A]=w(void 0),[E,k]=w(void 0,{equals:!1}),[_,L]=w(h?"ready":"unresolved");if(n.context){let e;c=`${n.context.id}${n.context.count++}`,"initial"===l.ssrLoadFrom?u=l.initialValue:n.load&&(e=n.load(c))&&(u=e)}function j(e,t,n,r){return i===e&&(i=null,void 0!==r&&(h=!0),e!==u&&t!==u||!l.onHydrated||queueMicrotask((()=>l.onHydrated(r,{value:t}))),u=a,function(e,t){B((()=>{void 0===t&&b((()=>e)),L(void 0!==t?"errored":h?"ready":"unresolved"),A(t);for(const e of v.keys())e.decrement();v.clear()}),!1)}(t,n)),t}function C(){const e=d,t=y(),n=m();if(void 0!==n&&!i)throw n;return p&&!p.user&&e&&x((()=>{E(),i&&(e.resolved||v.has(e)||(e.increment(),v.add(e)))})),t}function $(e=!0){if(!1!==e&&f)return;f=!1;const t=g?g():o;if(null==t||!1===t)return void j(i,T(y));const n=u!==a?u:T((()=>s(t,{value:y(),refetching:e})));return(r=n)&&"object"==typeof r&&"then"in r?(i=n,"value"in n?("success"===n.status?j(i,n.value,void 0,t):j(i,void 0,void 0,t),n):(f=!0,queueMicrotask((()=>f=!1)),B((()=>{L(h?"refreshing":"pending"),k()}),!1),n.then((e=>j(n,e,void 0,t)),(e=>j(n,void 0,H(e),t))))):(j(i,n,void 0,t),n);var r}return Object.defineProperties(C,{state:{get:()=>_()},error:{get:()=>m()},loading:{get(){const e=_();return"pending"===e||"refreshing"===e}},latest:{get(){if(!h)return C();const e=m();if(e&&!i)throw e;return y()}}}),g?x((()=>$(!1))):$(!1),[C,{refetch:$,mutate:b}]}function T(e){if(null===p)return e();const t=p;p=null;try{return e()}finally{p=t}}function k(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return n=>{let l;if(r){l=Array(e.length);for(let t=0;t<e.length;t++)l[t]=e[t]()}else l=e();if(s)return void(s=!1);const i=T((()=>t(l,o,n)));return o=l,i}}function _(e){A((()=>T(e)))}function L(e){return null===f||(null===f.cleanups?f.cleanups=[e]:f.cleanups.push(e)),e}function j(e){const t=S(e),n=S((()=>R(t())));return n.toArray=()=>{const e=n();return Array.isArray(e)?e:null!=e?[e]:[]},n}function C(){if(this.sources&&this.state)if(this.state===i)N(this);else{const e=g;g=null,B((()=>M(this)),!1),g=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function $(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&B((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=h&&h.running;r&&h.disposed.has(n),(r?n.tState:n.state)||(n.pure?g.push(n):v.push(n),n.observers&&V(n)),r||(n.state=i)}if(g.length>1e6)throw g=[],new Error}),!1)),t}function N(e){if(!e.fn)return;D(e);const t=y;!function(e,t,n){let r;const o=f,s=p;p=f=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=i,e.owned&&e.owned.forEach(D),e.owned=null),e.updatedAt=n+1,F(l)}finally{p=s,f=o}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?$(e,r):e.value=r,e.updatedAt=n)}(e,e.value,t)}function P(e,t,n,r=i,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:f?f.context:null,pure:n};return null===f||f!==c&&(f.owned?f.owned.push(s):f.owned=[s]),s}function I(e){if(0===e.state)return;if(e.state===u)return M(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if((e=t[n]).state===i)N(e);else if(e.state===u){const n=g;g=null,B((()=>M(e,t[0])),!1),g=n}}function B(e,t){if(g)return e();let n=!1;t||(g=[]),v?n=!0:v=[],y++;try{const t=e();return function(e){if(g&&(q(g),g=null),e)return;const t=v;v=null,t.length&&B((()=>l(t)),!1)}(n),t}catch(r){n||(v=null),g=null,F(r)}}function q(e){for(let t=0;t<e.length;t++)I(e[t])}function O(e){let t,o=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[o++]=n:I(n)}if(n.context){if(n.count)return n.effects||(n.effects=[]),void n.effects.push(...e.slice(0,o));n.effects&&(e=[...n.effects,...e],o+=n.effects.length,delete n.effects),r()}for(t=0;t<o;t++)I(e[t])}function M(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const e=r.state;e===i?r!==t&&(!r.updatedAt||r.updatedAt<y)&&I(r):e===u&&M(r,t)}}}function V(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=u,n.pure?g.push(n):v.push(n),n.observers&&V(n))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function H(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}function F(e,t=f){throw H(e)}function R(e){if("function"==typeof e&&!e.length)return R(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=R(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function U(e,t){return function(t){let n;return m((()=>n=T((()=>(f.context={...f.context,[e]:t.value},j((()=>t.children)))))),void 0),n}}const G=Symbol("fallback");function W(e){for(let t=0;t<e.length;t++)e[t]()}function X(e,t){return T((()=>e(t||{})))}function Y(e){let t,o;const s=s=>{const l=n.context;if(l){const[s,i]=w();n.count||(n.count=0),n.count++,(o||(o=e())).then((e=>{r(l),n.count--,i((()=>e.default)),r()})),t=s}else if(!t){const[n]=E((()=>(o||(o=e())).then((e=>e.default))));t=n}let i;return S((()=>(i=t())&&T((()=>{if(!l)return i(s);const e=n.context;r(l);const t=i(s);return r(e),t}))))};return s.preload=()=>o||((o=e()).then((e=>t=()=>e.default)),o),s}const z=e=>`Stale read from <${e}>.`;function J(e){const t="fallback"in e&&{fallback:()=>e.fallback};return S(function(e,t,n={}){let r=[],s=[],l=[],i=0,u=t.length>1?[]:null;return L((()=>W(l))),()=>{let c,a,f=e()||[];return f[o],T((()=>{let e,t,o,h,p,g,v,y,w,x=f.length;if(0===x)0!==i&&(W(l),l=[],r=[],s=[],i=0,u&&(u=[])),n.fallback&&(r=[G],s[0]=b((e=>(l[0]=e,n.fallback()))),i=1);else if(0===i){for(s=new Array(x),a=0;a<x;a++)r[a]=f[a],s[a]=b(d);i=x}else{for(o=new Array(x),h=new Array(x),u&&(p=new Array(x)),g=0,v=Math.min(i,x);g<v&&r[g]===f[g];g++);for(v=i-1,y=x-1;v>=g&&y>=g&&r[v]===f[y];v--,y--)o[y]=s[v],h[y]=l[v],u&&(p[y]=u[v]);for(e=new Map,t=new Array(y+1),a=y;a>=g;a--)w=f[a],c=e.get(w),t[a]=void 0===c?-1:c,e.set(w,a);for(c=g;c<=v;c++)w=r[c],a=e.get(w),void 0!==a&&-1!==a?(o[a]=s[c],h[a]=l[c],u&&(p[a]=u[c]),a=t[a],e.set(w,a)):l[c]();for(a=g;a<x;a++)a in o?(s[a]=o[a],l[a]=h[a],u&&(u[a]=p[a],u[a](a))):s[a]=b(d);s=s.slice(0,i=x),r=f.slice(0)}return s}));function d(e){if(l[a]=e,u){const[e,n]=w(a);return u[a]=n,t(f[a],e)}return t(f[a])}}}((()=>e.each),e.children,t||void 0))}function K(e){const t=e.keyed,n=S((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return S((()=>{const r=n();if(r){const o=e.children;return"function"==typeof o&&o.length>0?T((()=>o(t?r:()=>{if(!T(n))throw z("Show");return e.when}))):o}return e.fallback}),void 0,void 0)}function Q(e){let t=!1;const n=j((()=>e.children)),r=S((()=>{let e=n();Array.isArray(e)||(e=[e]);for(let n=0;n<e.length;n++){const r=e[n].when;if(r)return t=!!e[n].keyed,[n,r,e[n]]}return[-1]}),void 0,{equals:(e,n)=>(t?e[1]===n[1]:!e[1]==!n[1])&&e[2]===n[2]});return S((()=>{const[n,o,s]=r();if(n<0)return e.fallback;const l=s.children;return"function"==typeof l&&l.length>0?T((()=>l(t?o:()=>{if(T(r)[0]!==n)throw z("Match");return s.when}))):l}),void 0,void 0)}function Z(e){return e}const ee="_$DX_DELEGATE";function te(e,t,n){let r;const o=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},s=t?()=>T((()=>document.importNode(r||(r=o()),!0))):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function ne(e,t=window.document){const n=t[ee]||(t[ee]=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,le))}}function re(e,t,r){n.context||(null==r?e.removeAttribute(t):e.setAttribute(t,r))}function oe(e,t,n){return T((()=>e(t,n)))}function se(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return ie(e,t,r,n);m((r=>ie(e,t(),r,n)),r)}function le(e){const t=`$$${e.type}`;let r=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==r&&Object.defineProperty(e,"target",{configurable:!0,value:r}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>r||document}),n.registry&&!n.done&&(n.done=_$HY.done=!0);r;){const n=r[t];if(n&&!r.disabled){const o=r[`${t}Data`];if(void 0!==o?n.call(r,o,e):n.call(r,e),e.cancelBubble)return}r=r._$host||r.parentNode||r.host}}function ie(e,t,r,o,s){if(n.context){!r&&(r=[...e.childNodes]);let t=[];for(let e=0;e<r.length;e++){const n=r[e];8===n.nodeType&&"!$"===n.data.slice(0,2)?n.remove():t.push(n)}r=t}for(;"function"==typeof r;)r=r();if(t===r)return r;const l=typeof t,i=void 0!==o;if(e=i&&r[0]&&r[0].parentNode||e,"string"===l||"number"===l){if(n.context)return r;if("number"===l&&(t=t.toString()),i){let n=r[0];n&&3===n.nodeType?n.data!==t&&(n.data=t):n=document.createTextNode(t),r=ae(e,r,o,n)}else r=""!==r&&"string"==typeof r?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===l){if(n.context)return r;r=ae(e,r,o)}else{if("function"===l)return m((()=>{let n=t();for(;"function"==typeof n;)n=n();r=ie(e,n,r,o)})),()=>r;if(Array.isArray(t)){const l=[],u=r&&Array.isArray(r);if(ue(l,t,r,s))return m((()=>r=ie(e,l,r,o,!0))),()=>r;if(n.context){if(!l.length)return r;if(void 0===o)return[...e.childNodes];let t=l[0],n=[t];for(;(t=t.nextSibling)!==o;)n.push(t);return r=n}if(0===l.length){if(r=ae(e,r,o),i)return r}else u?0===r.length?ce(e,l,o):function(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,c=null;for(;l<o||i<s;)if(t[l]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)c&&c.has(t[l])||t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!c){c=new Map;let e=i;for(;e<s;)c.set(n[e],e++)}const r=c.get(t[l]);if(null!=r)if(i<r&&r<s){let u,a=l,f=1;for(;++a<o&&a<s&&null!=(u=c.get(t[a]))&&u===r+f;)f++;if(f>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(e,r,l):(r&&ae(e),ce(e,l));r=l}else if(t.nodeType){if(n.context&&t.parentNode)return r=i?[t]:t;if(Array.isArray(r)){if(i)return r=ae(e,r,o,t);ae(e,r,null,t)}else null!=r&&""!==r&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);r=t}}return r}function ue(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let l,i=t[s],u=n&&n[s];if(null==i||!0===i||!1===i);else if("object"==(l=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ue(e,i,u)||o;else if("function"===l)if(r){for(;"function"==typeof i;)i=i();o=ue(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||o}else e.push(i),o=!0;else{const t=String(i);u&&3===u.nodeType&&u.data===t?e.push(u):e.push(document.createTextNode(t))}}return o}function ce(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ae(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&l.remove():t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}async function fe(){if("404"===document.title.split(" | ")[0])return[];try{const e=await fetch(`${window.location.href}index.json`,{headers:{Accept:"application/json"}});return(await e.json()).sort(((e,t)=>e.index<t.index?-1:1))}catch(e){return[]}}var de="Invariant failed";function he(e,t){if(!e)throw new Error(de)}function pe(e,t){return(e+1)%t}function ge(e,t){return(e+t-1)%t}function ve(e){return("0000"+e.toString()).slice(-4)}async function ye(){return(await t((()=>import("./y-IY8l.js")),__vite__mapDeps([]))).gsap}function be(){const e=sessionStorage.getItem("thresholdsIndex");return null===e?2:parseInt(e)}const we=[{threshold:20,trailLength:20},{threshold:40,trailLength:10},{threshold:80,trailLength:5},{threshold:140,trailLength:5},{threshold:200,trailLength:5}],xe=(e,t)=>[e,{setIndex:e=>{t((t=>({...t,index:e})))},incIndex:()=>{t((e=>({...e,index:pe(e.index,e.length)})))},decIndex:()=>{t((e=>({...e,index:ge(e.index,e.length)})))},incThreshold:()=>{t((e=>({...e,...Ae(e.threshold,we,1)})))},decThreshold:()=>{t((e=>({...e,...Ae(e.threshold,we,-1)})))}}],me=function(e,t){const n=Symbol("context");return{id:n,Provider:U(n),defaultValue:void 0}}();function Ae(e,t,n){const r=t.findIndex((t=>t.threshold===e))+n;return r<0||r>=t.length?t[r-n]:(sessionStorage.setItem("thresholdsIndex",r.toString()),t[r])}function Se(e){const t={index:-1,length:e.length,threshold:we[be()].threshold,trailLength:we[be()].trailLength},[n,r]=w(t),o=xe(n,r);return X(me.Provider,{value:o,get children(){return e.children}})}function Ee(){const e=(t=me,f&&f.context&&void 0!==f.context[t.id]?f.context[t.id]:t.defaultValue);var t;return he(e),e}var Te=te("<div>Error");const ke=document.getElementsByClassName("container")[0],_e=Y((async()=>await t((()=>import("./koP2V7.js")),__vite__mapDeps([])))),Le=Y((async()=>await t((()=>import("./B6XYrL.js")),__vite__mapDeps([]))));function je(){const[e]=E(fe),t=window.matchMedia("(hover: none)").matches,[n,r]=w(!0);return A((()=>{n()?ke.classList.remove("disableScroll"):ke.classList.add("disableScroll")})),X(K,{get when(){return"ready"===e.state},get children(){return X(Se,{get length(){var t;return(null==(t=e())?void 0:t.length)??0},get children(){return X(Q,{get fallback(){return Te()},get children(){return[X(Z,{when:t,get children(){return X(Le,{get ijs(){return e()??[]},get closeText(){return ke.dataset.close},get loadingText(){return ke.dataset.loading},setScrollable:r})}}),X(Z,{when:!t,get children(){return X(_e,{get ijs(){return e()??[]},get prevText(){return ke.dataset.prev},get closeText(){return ke.dataset.close},get nextText(){return ke.dataset.next},get loadingText(){return ke.dataset.loading}})}})]}})}})}})}!function(e,t,n,r={}){let o;b((r=>{o=r,t===document?e():se(t,e(),t.firstChild?null:void 0,n)}),r.owner)}((()=>X(je,{})),ke);export{J as F,K as S,t as _,L as a,m as b,w as c,A as d,ve as e,k as f,X as g,oe as h,se as i,ne as j,ge as k,ye as l,pe as m,S as n,_ as o,he as p,re as s,te as t,Ee as u};function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
