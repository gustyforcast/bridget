function t(t,e){return(t+1)%e}function e(t,e){return(t+e-1)%e}function n(t){return("0000"+t.toString()).slice(-4)}async function s(){const t=await import("./EY5BO_.js");return[t.gsap,t.Power3]}function o(){const t=sessionStorage.getItem("thresholdsIndex");return null===t?2:parseInt(t)}function a(t){return t.length<2?t:[...new Set(t)]}class i{constructor(t){this.obj=t,this.watchers=[]}get(){return this.obj}set(t){this.obj=t,this.watchers.forEach((t=>{t(this.obj)}))}addWatcher(t){this.watchers.push(t)}}const r=new i(!0);let c;const h=[{threshold:20,trailLength:20},{threshold:40,trailLength:10},{threshold:80,trailLength:5},{threshold:140,trailLength:5},{threshold:200,trailLength:5}],l=new i({index:-1,length:0,threshold:h[o()].threshold,trailLength:h[o()].trailLength}),d=new i(!1),g=new i("none");function u(t){const e=l.get();e.index=t,l.set(e)}function m(){const e=l.get();e.index=t(e.index,e.length),l.set(e)}function f(){const t=l.get();t.index=e(t.index,t.length),l.set(t)}function w(t,e){const n=h.findIndex((e=>t.threshold===e.threshold))+e;if(n<0||n>=h.length)return t;sessionStorage.setItem("thresholdsIndex",n.toString());const s=h[n];return{...t,...s}}const x=document.getElementsByClassName("threshold").item(0),p=Array.from(x.getElementsByClassName("num")),y=x.getElementsByClassName("dec").item(0),E=x.getElementsByClassName("inc").item(0),L=document.getElementsByClassName("index").item(0),j=Array.from(L.getElementsByClassName("num"));document.addEventListener("DOMContentLoaded",(()=>{(async function(){c=document.getElementsByClassName("container").item(0),r.addWatcher((t=>{t?c.classList.remove("disableScroll"):c.classList.add("disableScroll")}));const t=await async function(){if("404"===document.title.split(" | ")[0])return[];try{const t=await fetch(`${window.location.href}index.json`,{headers:{Accept:"application/json"}});return(await t.json()).sort(((t,e)=>t.index<e.index?-1:1))}catch(t){return[]}}();(function(t){const e=l.get();e.length=t,w(e,0),l.set(e)})(t.length),l.addWatcher((t=>{var e,s,o;e=n(t.index+1),s=n(t.length),j.forEach(((t,n)=>{t.innerText=n<4?e[n]:s[n-4]})),o=n(t.threshold),p.forEach(((t,e)=>{t.innerText=o[e]}))})),y.addEventListener("click",(()=>{!function(){let t=l.get();t=w(t,-1),l.set(t)}()}),{passive:!0}),E.addEventListener("click",(()=>{!function(){let t=l.get();t=w(t,1),l.set(t)}()}),{passive:!0}),0!==t.length&&(window.matchMedia("(hover: none)").matches?await import("./sr-IH1.js").then((e=>{e.initMobile(t)})).catch((t=>{console.log(t)})):await import("./LbzzjK.js").then((e=>{e.initDesktop(t)})).catch((t=>{console.log(t)})))})().catch((t=>{console.log(t)}))}));export{i as W,m as a,t as b,c,e as d,f as e,r as f,u as g,n as h,d as i,s as l,g as n,a as r,l as s};