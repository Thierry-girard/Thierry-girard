self.babelHelpers={asyncToGenerator:function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,i){try{var l=r[o](i),c=l.value}catch(e){return void t(e)}if(!l.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}("next")})}}},this.workbox=this.workbox||{},this.workbox.core=function(){"use strict";try{self.workbox.v["workbox:core:3.0.1"]=1}catch(e){}var e={debug:0,log:1,warn:2,error:3,silent:4};const r=(e,...r)=>{let t=e;return r.length>0&&(t+=` :: ${JSON.stringify(r)}`),t};class t extends Error{constructor(e,t){let n=r(e,t);super(n),this.name=e,this.details=t}}const n={prefix:"workbox",suffix:self.registration.scope,googleAnalytics:"googleAnalytics",precache:"precache",runtime:"runtime"},o=e=>[n.prefix,e,n.suffix].filter(e=>e.length>0).join("-"),i={updateDetails:e=>{Object.keys(n).forEach(r=>{void 0!==e[r]&&(n[r]=e[r])})},getGoogleAnalyticsName:e=>e||o(n.googleAnalytics),getPrecacheName:e=>e||o(n.precache),getRuntimeName:e=>e||o(n.runtime)},l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let c=e.warn;const s=e=>c<=e,u=e=>c=e,a=()=>c,f=e.error,d=function(r,t,n){const o=0===r.indexOf("group")?f:e[r];if(!s(o))return;if(!n||"groupCollapsed"===r&&l)return void console[r](...t);const i=["%cworkbox",`background: ${n}; color: white; padding: 2px 0.5em; `+"border-radius: 0.5em;"];console[r](...i,...t)},h=()=>{s(f)&&console.groupEnd()},p={groupEnd:h,unprefixed:{groupEnd:h}},y={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db"};Object.keys(y).forEach(e=>(b=e,g=y[e],p[b]=((...e)=>d(b,e,g)),void(p.unprefixed[b]=((...e)=>d(b,e)))));var b,g;var v=new class{constructor(){try{self.workbox.v=self.workbox.v||{}}catch(e){}}get cacheNames(){return{googleAnalytics:i.getGoogleAnalyticsName(),precache:i.getPrecacheName(),runtime:i.getRuntimeName()}}setCacheNameDetails(e){i.updateDetails(e)}get logLevel(){return a()}setLogLevel(r){if(r>e.silent||r<e.debug)throw new t("invalid-value",{paramName:"logLevel",validValueDescription:"Please use a value from LOG_LEVELS, i.e 'logLevel = workbox.core.LOG_LEVELS.debug'.",value:r});u(r)}};const w=e=>{const r=new URL(e,location);return r.origin===location.origin?r.pathname:r.href};var m="cacheDidUpdate",L="cacheWillUpdate",E="cachedResponseWillBeUsed",H="fetchDidFail",x="requestWillFetch",q=(e,r)=>e.filter(e=>r in e);const N=(()=>{var e=babelHelpers.asyncToGenerator(function*(e,r,n,o=[]){if(!n)throw new t("cache-put-with-no-response",{url:w(r.url)});let i=yield k(r,n,o);if(!i)return;const l=yield caches.open(e),c=q(o,m);let s=c.length>0?yield O(e,r):null;yield l.put(r,i);for(let t of c)yield t[m].call(t,{cacheName:e,request:r,oldResponse:s,newResponse:i})});return function(r,t,n){return e.apply(this,arguments)}})(),O=(()=>{var e=babelHelpers.asyncToGenerator(function*(e,r,t,n=[]){let o=yield(yield caches.open(e)).match(r,t);for(let i of n)E in i&&(o=yield i[E].call(i,{cacheName:e,request:r,matchOptions:t,cachedResponse:o}));return o});return function(r,t,n){return e.apply(this,arguments)}})(),k=(()=>{var e=babelHelpers.asyncToGenerator(function*(e,r,t){let n=r,o=!1;for(let r of t)if(L in r&&(o=!0,!(n=yield r[L].call(r,{request:e,response:n}))))break;return o||(n=n.ok?n:null),n||null});return function(r,t,n){return e.apply(this,arguments)}})(),R={put:N,match:O},A={fetch:(()=>{var e=babelHelpers.asyncToGenerator(function*(e,r,n=[]){"string"==typeof e&&(e=new Request(e));const o=q(n,H),i=o.length>0?e.clone():null;try{for(let r of n)x in r&&(e=yield r[x].call(r,{request:e.clone()}))}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const l=e.clone();try{return yield fetch(e,r)}catch(e){for(let e of o)yield e[H].call(e,{originalRequest:i.clone(),request:l.clone()});throw e}});return function(r,t){return e.apply(this,arguments)}})()};class D{constructor(e,r,{onupgradeneeded:t,onversionchange:n=this.e}={}){this.r=e,this.t=r,this.n=t,this.e=n,this.o=null}open(){var e=this;return babelHelpers.asyncToGenerator(function*(){if(!e.o)return e.o=yield new Promise(function(r,t){let n=!1;setTimeout(function(){n=!0,t(new Error("The open request was blocked and timed out"))},e.OPEN_TIMEOUT);const o=indexedDB.open(e.r,e.t);o.onerror=function(e){return t(o.error)},o.onupgradeneeded=function(r){n?(o.transaction.abort(),r.target.result.close()):e.n&&e.n(r)},o.onsuccess=function(t){const o=t.target.result;n?o.close():(o.onversionchange=e.e,r(o))}}),e})()}get(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.i("get",e,"readonly",...r)})()}add(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.i("add",e,"readwrite",...r)})()}put(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.i("put",e,"readwrite",...r)})()}delete(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){yield t.i("delete",e,"readwrite",...r)})()}getAll(e,r,t){var n=this;return babelHelpers.asyncToGenerator(function*(){return"getAll"in IDBObjectStore.prototype?yield n.i("getAll",e,"readonly",r,t):yield n.getAllMatching(e,{query:r,count:t})})()}getAllMatching(e,r={}){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.transaction([e],"readonly",function(t,n){const o=t[e],i=[];(r.index?o.index(r.index):o).openCursor(r.query,r.direction).onsuccess=function(e){const t=e.target.result;if(t){const{primaryKey:e,key:o,value:l}=t;i.push(r.includeKeys?{primaryKey:e,key:o,value:l}:l),r.count&&i.length>=r.count?n(i):t.continue()}else n(i)}})})()}transaction(e,r,t){var n=this;return babelHelpers.asyncToGenerator(function*(){yield n.open();return yield new Promise(function(o,i){const l=n.o.transaction(e,r);l.onerror=function(e){return i(e.target.error)},l.onabort=function(e){return i(e.target.error)},l.oncomplete=function(){return o()};const c={};for(const r of e)c[r]=l.objectStore(r);t(c,function(e){return o(e)},function(){i(new Error("The transaction was manually aborted")),l.abort()})})})()}i(e,r,t,...n){var o=this;return babelHelpers.asyncToGenerator(function*(){yield o.open();return yield o.transaction([r],t,function(t,o){t[r][e](...n).onsuccess=function(e){o(e.target.result)}})})()}e(e){this.close()}close(){this.o&&this.o.close()}}D.prototype.OPEN_TIMEOUT=2e3;var W=Object.freeze({logger:p,assert:null,cacheNames:i,cacheWrapper:R,fetchWrapper:A,WorkboxError:t,DBWrapper:D,getFriendlyURL:w});return Object.assign(v,{LOG_LEVELS:e,_private:W})}();

//# sourceMappingURL=workbox-core.prod.js.map
