/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qd(t,e){const n=new Set(t.split(","));return e?l=>n.has(l.toLowerCase()):l=>n.has(l)}const kt={},Sn=[],ie=()=>{},Eo=()=>!1,wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hd=t=>t.startsWith("onUpdate:"),Mt=Object.assign,Ud=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Co=Object.prototype.hasOwnProperty,ft=(t,e)=>Co.call(t,e),Z=Array.isArray,Tn=t=>ks(t)==="[object Map]",Zi=t=>ks(t)==="[object Set]",lt=t=>typeof t=="function",Dt=t=>typeof t=="string",Hn=t=>typeof t=="symbol",_t=t=>t!==null&&typeof t=="object",tr=t=>(_t(t)||lt(t))&&lt(t.then)&&lt(t.catch),er=Object.prototype.toString,ks=t=>er.call(t),Io=t=>ks(t).slice(8,-1),nr=t=>ks(t)==="[object Object]",Wd=t=>Dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=qd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_s=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},So=/-(\w)/g,ne=_s(t=>t.replace(So,(e,n)=>n?n.toUpperCase():"")),To=/\B([A-Z])/g,Ze=_s(t=>t.replace(To,"-$1").toLowerCase()),El=_s(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ws=_s(t=>t?`on${El(t)}`:""),we=(t,e)=>!Object.is(t,e),ss=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},is=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},md=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Lo=t=>{const e=Dt(t)?Number(t):NaN;return isNaN(e)?t:e};let Oa;const lr=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const l=t[n],s=Dt(l)?Oo(l):ws(l);if(s)for(const d in s)e[d]=s[d]}return e}else if(Dt(t)||_t(t))return t}const Po=/;(?![^(]*\))/g,Ao=/:([^]+)/,Do=/\/\*[^]*?\*\//g;function Oo(t){const e={};return t.replace(Do,"").split(Po).forEach(n=>{if(n){const l=n.split(Ao);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function Es(t){let e="";if(Dt(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const l=Es(t[n]);l&&(e+=l+" ")}else if(_t(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function b0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Dt(e)&&(t.class=Es(e)),n&&(t.style=ws(n)),t}const Ro="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mo=qd(Ro);function sr(t){return!!t||t===""}const k0=t=>Dt(t)?t:t==null?"":Z(t)||_t(t)&&(t.toString===er||!lt(t.toString))?JSON.stringify(t,dr,2):String(t),dr=(t,e)=>e&&e.__v_isRef?dr(t,e.value):Tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[l,s],d)=>(n[Gs(l,d)+" =>"]=s,n),{})}:Zi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gs(n))}:Hn(e)?Gs(e):_t(e)&&!Z(e)&&!nr(e)?String(e):e,Gs=(t,e="")=>{var n;return Hn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let te;class Vo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=te,!e&&te&&(this.index=(te.scopes||(te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=te;try{return te=this,e()}finally{te=n}}}on(){te=this}off(){te=this.parent}stop(e){if(this._active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bo(t,e=te){e&&e.active&&e.effects.push(t)}function ar(){return te}function No(t){te&&te.cleanups.push(t)}let on;class Gd{constructor(e,n,l,s){this.fn=e,this.trigger=n,this.scheduler=l,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bo(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Fo(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),un()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Qe,n=on;try{return Qe=!0,on=this,this._runnings++,Ra(this),this.fn()}finally{Ma(this),this._runnings--,on=n,Qe=e}}stop(){var e;this.active&&(Ra(this),Ma(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Fo(t){return t.value}function Ra(t){t._trackId++,t._depsLength=0}function Ma(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ir(t.deps[e],t);t.deps.length=t._depsLength}}function ir(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Qe=!0,vd=0;const rr=[];function pn(){rr.push(Qe),Qe=!1}function un(){const t=rr.pop();Qe=t===void 0?!0:t}function Kd(){vd++}function Jd(){for(vd--;!vd&&bd.length;)bd.shift()()}function fr(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const l=t.deps[t._depsLength];l!==e?(l&&ir(l,t),t.deps[t._depsLength++]=e):t._depsLength++}}const bd=[];function gr(t,e,n){Kd();for(const l of t.keys()){let s;l._dirtyLevel<e&&(s??(s=t.get(l)===l._trackId))&&(l._shouldSchedule||(l._shouldSchedule=l._dirtyLevel===0),l._dirtyLevel=e),l._shouldSchedule&&(s??(s=t.get(l)===l._trackId))&&(l.trigger(),(!l._runnings||l.allowRecurse)&&l._dirtyLevel!==2&&(l._shouldSchedule=!1,l.scheduler&&bd.push(l.scheduler)))}Jd()}const or=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},rs=new WeakMap,yn=Symbol(""),kd=Symbol("");function Qt(t,e,n){if(Qe&&on){let l=rs.get(t);l||rs.set(t,l=new Map);let s=l.get(n);s||l.set(n,s=or(()=>l.delete(n))),fr(on,s)}}function Pe(t,e,n,l,s,d){const a=rs.get(t);if(!a)return;let r=[];if(e==="clear")r=[...a.values()];else if(n==="length"&&Z(t)){const g=Number(l);a.forEach((f,o)=>{(o==="length"||!Hn(o)&&o>=g)&&r.push(f)})}else switch(n!==void 0&&r.push(a.get(n)),e){case"add":Z(t)?Wd(n)&&r.push(a.get("length")):(r.push(a.get(yn)),Tn(t)&&r.push(a.get(kd)));break;case"delete":Z(t)||(r.push(a.get(yn)),Tn(t)&&r.push(a.get(kd)));break;case"set":Tn(t)&&r.push(a.get(yn));break}Kd();for(const g of r)g&&gr(g,4);Jd()}function zo(t,e){var n;return(n=rs.get(t))==null?void 0:n.get(e)}const $o=qd("__proto__,__v_isRef,__isVue"),yr=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hn)),Va=jo();function jo(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const l=at(this);for(let d=0,a=this.length;d<a;d++)Qt(l,"get",d+"");const s=l[e](...n);return s===-1||s===!1?l[e](...n.map(at)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn(),Kd();const l=at(this)[e].apply(this,n);return Jd(),un(),l}}),t}function qo(t){const e=at(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class xr{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,l){const s=this._isReadonly,d=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return d;if(n==="__v_raw")return l===(s?d?ny:hr:d?ur:pr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(l)?e:void 0;const a=Z(e);if(!s){if(a&&ft(Va,n))return Reflect.get(Va,n,l);if(n==="hasOwnProperty")return qo}const r=Reflect.get(e,n,l);return(Hn(n)?yr.has(n):$o(n))||(s||Qt(e,"get",n),d)?r:jt(r)?a&&Wd(n)?r:r.value:_t(r)?s?hn(r):Cl(r):r}}class cr extends xr{constructor(e=!1){super(!1,e)}set(e,n,l,s){let d=e[n];if(!this._isShallow){const g=Bn(d);if(!fs(l)&&!Bn(l)&&(d=at(d),l=at(l)),!Z(e)&&jt(d)&&!jt(l))return g?!1:(d.value=l,!0)}const a=Z(e)&&Wd(n)?Number(n)<e.length:ft(e,n),r=Reflect.set(e,n,l,s);return e===at(s)&&(a?we(l,d)&&Pe(e,"set",n,l):Pe(e,"add",n,l)),r}deleteProperty(e,n){const l=ft(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&l&&Pe(e,"delete",n,void 0),s}has(e,n){const l=Reflect.has(e,n);return(!Hn(n)||!yr.has(n))&&Qt(e,"has",n),l}ownKeys(e){return Qt(e,"iterate",Z(e)?"length":yn),Reflect.ownKeys(e)}}class Ho extends xr{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uo=new cr,Wo=new Ho,Go=new cr(!0),Qd=t=>t,Cs=t=>Reflect.getPrototypeOf(t);function jl(t,e,n=!1,l=!1){t=t.__v_raw;const s=at(t),d=at(e);n||(we(e,d)&&Qt(s,"get",e),Qt(s,"get",d));const{has:a}=Cs(s),r=l?Qd:n?Zd:ol;if(a.call(s,e))return r(t.get(e));if(a.call(s,d))return r(t.get(d));t!==s&&t.get(e)}function ql(t,e=!1){const n=this.__v_raw,l=at(n),s=at(t);return e||(we(t,s)&&Qt(l,"has",t),Qt(l,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Hl(t,e=!1){return t=t.__v_raw,!e&&Qt(at(t),"iterate",yn),Reflect.get(t,"size",t)}function Ba(t){t=at(t);const e=at(this);return Cs(e).has.call(e,t)||(e.add(t),Pe(e,"add",t,t)),this}function Na(t,e){e=at(e);const n=at(this),{has:l,get:s}=Cs(n);let d=l.call(n,t);d||(t=at(t),d=l.call(n,t));const a=s.call(n,t);return n.set(t,e),d?we(e,a)&&Pe(n,"set",t,e):Pe(n,"add",t,e),this}function Fa(t){const e=at(this),{has:n,get:l}=Cs(e);let s=n.call(e,t);s||(t=at(t),s=n.call(e,t)),l&&l.call(e,t);const d=e.delete(t);return s&&Pe(e,"delete",t,void 0),d}function za(){const t=at(this),e=t.size!==0,n=t.clear();return e&&Pe(t,"clear",void 0,void 0),n}function Ul(t,e){return function(l,s){const d=this,a=d.__v_raw,r=at(a),g=e?Qd:t?Zd:ol;return!t&&Qt(r,"iterate",yn),a.forEach((f,o)=>l.call(s,g(f),g(o),d))}}function Wl(t,e,n){return function(...l){const s=this.__v_raw,d=at(s),a=Tn(d),r=t==="entries"||t===Symbol.iterator&&a,g=t==="keys"&&a,f=s[t](...l),o=n?Qd:e?Zd:ol;return!e&&Qt(d,"iterate",g?kd:yn),{next(){const{value:y,done:x}=f.next();return x?{value:y,done:x}:{value:r?[o(y[0]),o(y[1])]:o(y),done:x}},[Symbol.iterator](){return this}}}}function Fe(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ko(){const t={get(d){return jl(this,d)},get size(){return Hl(this)},has:ql,add:Ba,set:Na,delete:Fa,clear:za,forEach:Ul(!1,!1)},e={get(d){return jl(this,d,!1,!0)},get size(){return Hl(this)},has:ql,add:Ba,set:Na,delete:Fa,clear:za,forEach:Ul(!1,!0)},n={get(d){return jl(this,d,!0)},get size(){return Hl(this,!0)},has(d){return ql.call(this,d,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Ul(!0,!1)},l={get(d){return jl(this,d,!0,!0)},get size(){return Hl(this,!0)},has(d){return ql.call(this,d,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Ul(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{t[d]=Wl(d,!1,!1),n[d]=Wl(d,!0,!1),e[d]=Wl(d,!1,!0),l[d]=Wl(d,!0,!0)}),[t,n,e,l]}const[Jo,Qo,Yo,Xo]=Ko();function Yd(t,e){const n=e?t?Xo:Yo:t?Qo:Jo;return(l,s,d)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?l:Reflect.get(ft(n,s)&&s in l?n:l,s,d)}const Zo={get:Yd(!1,!1)},ty={get:Yd(!1,!0)},ey={get:Yd(!0,!1)},pr=new WeakMap,ur=new WeakMap,hr=new WeakMap,ny=new WeakMap;function ly(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sy(t){return t.__v_skip||!Object.isExtensible(t)?0:ly(Io(t))}function Cl(t){return Bn(t)?t:Xd(t,!1,Uo,Zo,pr)}function mr(t){return Xd(t,!1,Go,ty,ur)}function hn(t){return Xd(t,!0,Wo,ey,hr)}function Xd(t,e,n,l,s){if(!_t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const d=s.get(t);if(d)return d;const a=sy(t);if(a===0)return t;const r=new Proxy(t,a===2?l:n);return s.set(t,r),r}function Pn(t){return Bn(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function Bn(t){return!!(t&&t.__v_isReadonly)}function fs(t){return!!(t&&t.__v_isShallow)}function vr(t){return Pn(t)||Bn(t)}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function br(t){return Object.isExtensible(t)&&is(t,"__v_skip",!0),t}const ol=t=>_t(t)?Cl(t):t,Zd=t=>_t(t)?hn(t):t;class kr{constructor(e,n,l,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Gd(()=>e(this._value),()=>ll(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=l}get value(){const e=at(this);return(!e._cacheable||e.effect.dirty)&&we(e._value,e._value=e.effect.run())&&ll(e,4),ta(e),e.effect._dirtyLevel>=2&&ll(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function dy(t,e,n=!1){let l,s;const d=lt(t);return d?(l=t,s=ie):(l=t.get,s=t.set),new kr(l,s,d||!s,n)}function ta(t){var e;Qe&&on&&(t=at(t),fr(on,(e=t.dep)!=null?e:t.dep=or(()=>t.dep=void 0,t instanceof kr?t:void 0)))}function ll(t,e=4,n){t=at(t);const l=t.dep;l&&gr(l,e)}function jt(t){return!!(t&&t.__v_isRef===!0)}function X(t){return _r(t,!1)}function Ct(t){return _r(t,!0)}function _r(t,e){return jt(t)?t:new ay(t,e)}class ay{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:at(e),this._value=n?e:ol(e)}get value(){return ta(this),this._value}set value(e){const n=this.__v_isShallow||fs(e)||Bn(e);e=n?e:at(e),we(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ol(e),ll(this,4))}}function xn(t){return jt(t)?t.value:t}const iy={get:(t,e,n)=>xn(Reflect.get(t,e,n)),set:(t,e,n,l)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,l)}};function wr(t){return Pn(t)?t:new Proxy(t,iy)}class ry{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:l}=e(()=>ta(this),()=>ll(this));this._get=n,this._set=l}get value(){return this._get()}set value(e){this._set(e)}}function Is(t){return new ry(t)}class fy{constructor(e,n,l){this._object=e,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zo(at(this._object),this._key)}}class gy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Un(t,e,n){return jt(t)?t:lt(t)?new gy(t):_t(t)&&arguments.length>1?oy(t,e,n):X(t)}function oy(t,e,n){const l=t[e];return jt(l)?l:new fy(t,e,n)}/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ye(t,e,n,l){try{return l?t(...l):t()}catch(s){Il(s,e,n)}}function re(t,e,n,l){if(lt(t)){const d=Ye(t,e,n,l);return d&&tr(d)&&d.catch(a=>{Il(a,e,n)}),d}const s=[];for(let d=0;d<t.length;d++)s.push(re(t[d],e,n,l));return s}function Il(t,e,n,l=!0){const s=e?e.vnode:null;if(e){let d=e.parent;const a=e.proxy,r=`https://vuejs.org/error-reference/#runtime-${n}`;for(;d;){const f=d.ec;if(f){for(let o=0;o<f.length;o++)if(f[o](t,a,r)===!1)return}d=d.parent}const g=e.appContext.config.errorHandler;if(g){Ye(g,null,10,[t,a,r]);return}}yy(t,n,s,l)}function yy(t,e,n,l=!0){console.error(t)}let yl=!1,_d=!1;const Ht=[];let ke=0;const An=[];let Ue=null,an=0;const Er=Promise.resolve();let ea=null;function mn(t){const e=ea||Er;return t?e.then(this?t.bind(this):t):e}function xy(t){let e=ke+1,n=Ht.length;for(;e<n;){const l=e+n>>>1,s=Ht[l],d=xl(s);d<t||d===t&&s.pre?e=l+1:n=l}return e}function Ss(t){(!Ht.length||!Ht.includes(t,yl&&t.allowRecurse?ke+1:ke))&&(t.id==null?Ht.push(t):Ht.splice(xy(t.id),0,t),Cr())}function Cr(){!yl&&!_d&&(_d=!0,ea=Er.then(Ir))}function cy(t){const e=Ht.indexOf(t);e>ke&&Ht.splice(e,1)}function py(t){Z(t)?An.push(...t):(!Ue||!Ue.includes(t,t.allowRecurse?an+1:an))&&An.push(t),Cr()}function $a(t,e,n=yl?ke+1:0){for(;n<Ht.length;n++){const l=Ht[n];if(l&&l.pre){if(t&&l.id!==t.uid)continue;Ht.splice(n,1),n--,l()}}}function gs(t){if(An.length){const e=[...new Set(An)].sort((n,l)=>xl(n)-xl(l));if(An.length=0,Ue){Ue.push(...e);return}for(Ue=e,an=0;an<Ue.length;an++)Ue[an]();Ue=null,an=0}}const xl=t=>t.id==null?1/0:t.id,uy=(t,e)=>{const n=xl(t)-xl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ir(t){_d=!1,yl=!0,Ht.sort(uy);try{for(ke=0;ke<Ht.length;ke++){const e=Ht[ke];e&&e.active!==!1&&Ye(e,null,14)}}finally{ke=0,Ht.length=0,gs(),yl=!1,ea=null,(Ht.length||An.length)&&Ir()}}function hy(t,e,...n){if(t.isUnmounted)return;const l=t.vnode.props||kt;let s=n;const d=e.startsWith("update:"),a=d&&e.slice(7);if(a&&a in l){const o=`${a==="modelValue"?"model":a}Modifiers`,{number:y,trim:x}=l[o]||kt;x&&(s=n.map(p=>Dt(p)?p.trim():p)),y&&(s=n.map(md))}let r,g=l[r=Ws(e)]||l[r=Ws(ne(e))];!g&&d&&(g=l[r=Ws(Ze(e))]),g&&re(g,t,6,s);const f=l[r+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[r])return;t.emitted[r]=!0,re(f,t,6,s)}}function Sr(t,e,n=!1){const l=e.emitsCache,s=l.get(t);if(s!==void 0)return s;const d=t.emits;let a={},r=!1;if(!lt(t)){const g=f=>{const o=Sr(f,e,!0);o&&(r=!0,Mt(a,o))};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}return!d&&!r?(_t(t)&&l.set(t,null),null):(Z(d)?d.forEach(g=>a[g]=null):Mt(a,d),_t(t)&&l.set(t,a),a)}function Ts(t,e){return!t||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(t,e[0].toLowerCase()+e.slice(1))||ft(t,Ze(e))||ft(t,e))}let Bt=null,Ls=null;function os(t){const e=Bt;return Bt=t,Ls=t&&t.type.__scopeId||null,e}function _0(t){Ls=t}function w0(){Ls=null}function my(t,e=Bt,n){if(!e||t._n)return t;const l=(...s)=>{l._d&&Za(-1);const d=os(e);let a;try{a=t(...s)}finally{os(d),l._d&&Za(1)}return a};return l._n=!0,l._c=!0,l._d=!0,l}function Ks(t){const{type:e,vnode:n,proxy:l,withProxy:s,props:d,propsOptions:[a],slots:r,attrs:g,emit:f,render:o,renderCache:y,data:x,setupState:p,ctx:m,inheritAttrs:w}=t;let _,b;const C=os(t);try{if(n.shapeFlag&4){const S=s||l,V=S;_=ce(o.call(V,S,y,d,p,x,m)),b=g}else{const S=e;_=ce(S.length>1?S(d,{attrs:g,slots:r,emit:f}):S(d,null)),b=e.props?g:vy(g)}}catch(S){il.length=0,Il(S,t,1),_=Pt(ee)}let v=_;if(b&&w!==!1){const S=Object.keys(b),{shapeFlag:V}=v;S.length&&V&7&&(a&&S.some(Hd)&&(b=by(b,a)),v=Xe(v,b))}return n.dirs&&(v=Xe(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),_=v,os(C),_}const vy=t=>{let e;for(const n in t)(n==="class"||n==="style"||wl(n))&&((e||(e={}))[n]=t[n]);return e},by=(t,e)=>{const n={};for(const l in t)(!Hd(l)||!(l.slice(9)in e))&&(n[l]=t[l]);return n};function ky(t,e,n){const{props:l,children:s,component:d}=t,{props:a,children:r,patchFlag:g}=e,f=d.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&g>=0){if(g&1024)return!0;if(g&16)return l?ja(l,a,f):!!a;if(g&8){const o=e.dynamicProps;for(let y=0;y<o.length;y++){const x=o[y];if(a[x]!==l[x]&&!Ts(f,x))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:l===a?!1:l?a?ja(l,a,f):!0:!!a;return!1}function ja(t,e,n){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let s=0;s<l.length;s++){const d=l[s];if(e[d]!==t[d]&&!Ts(n,d))return!0}return!1}function _y({vnode:t,parent:e},n){for(;e;){const l=e.subTree;if(l.suspense&&l.suspense.activeBranch===t&&(l.el=t.el),l===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tr="components";function fe(t,e){return Ey(Tr,t,!0,e)||t}const wy=Symbol.for("v-ndc");function Ey(t,e,n=!0,l=!1){const s=Bt||zt;if(s){const d=s.type;if(t===Tr){const r=vx(d,!1);if(r&&(r===e||r===ne(e)||r===El(ne(e))))return d}const a=qa(s[t]||d[t],e)||qa(s.appContext[t],e);return!a&&l?d:a}}function qa(t,e){return t&&(t[e]||t[ne(e)]||t[El(ne(e))])}const Cy=t=>t.__isSuspense;function Lr(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):py(t)}const Iy=Symbol.for("v-scx"),Sy=()=>bt(Iy);function na(t,e){return Ps(t,null,e)}function Ty(t,e){return Ps(t,null,{flush:"sync"})}const Gl={};function gt(t,e,n){return Ps(t,e,n)}function Ps(t,e,{immediate:n,deep:l,flush:s,once:d,onTrack:a,onTrigger:r}=kt){if(e&&d){const I=e;e=(...B)=>{I(...B),V()}}const g=zt,f=I=>l===!0?I:fn(I,l===!1?1:void 0);let o,y=!1,x=!1;if(jt(t)?(o=()=>t.value,y=fs(t)):Pn(t)?(o=()=>f(t),y=!0):Z(t)?(x=!0,y=t.some(I=>Pn(I)||fs(I)),o=()=>t.map(I=>{if(jt(I))return I.value;if(Pn(I))return f(I);if(lt(I))return Ye(I,g,2)})):lt(t)?e?o=()=>Ye(t,g,2):o=()=>(p&&p(),re(t,g,3,[m])):o=ie,e&&l){const I=o;o=()=>fn(I())}let p,m=I=>{p=v.onStop=()=>{Ye(I,g,4),p=v.onStop=void 0}},w;if(Ll)if(m=ie,e?n&&re(e,g,3,[o(),x?[]:void 0,m]):o(),s==="sync"){const I=Sy();w=I.__watcherHandles||(I.__watcherHandles=[])}else return ie;let _=x?new Array(t.length).fill(Gl):Gl;const b=()=>{if(!(!v.active||!v.dirty))if(e){const I=v.run();(l||y||(x?I.some((B,O)=>we(B,_[O])):we(I,_)))&&(p&&p(),re(e,g,3,[I,_===Gl?void 0:x&&_[0]===Gl?[]:_,m]),_=I)}else v.run()};b.allowRecurse=!!e;let C;s==="sync"?C=b:s==="post"?C=()=>Kt(b,g&&g.suspense):(b.pre=!0,g&&(b.id=g.uid),C=()=>Ss(b));const v=new Gd(o,ie,C),S=ar(),V=()=>{v.stop(),S&&Ud(S.effects,v)};return e?n?b():_=v.run():s==="post"?Kt(v.run.bind(v),g&&g.suspense):v.run(),w&&w.push(V),V}function Ly(t,e,n){const l=this.proxy,s=Dt(t)?t.includes(".")?Pr(l,t):()=>l[t]:t.bind(l,l);let d;lt(e)?d=e:(d=e.handler,n=e);const a=Tl(this),r=Ps(s,d.bind(l),n);return a(),r}function Pr(t,e){const n=e.split(".");return()=>{let l=t;for(let s=0;s<n.length&&l;s++)l=l[n[s]];return l}}function fn(t,e,n=0,l){if(!_t(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(l=l||new Set,l.has(t))return t;if(l.add(t),jt(t))fn(t.value,e,n,l);else if(Z(t))for(let s=0;s<t.length;s++)fn(t[s],e,n,l);else if(Zi(t)||Tn(t))t.forEach(s=>{fn(s,e,n,l)});else if(nr(t))for(const s in t)fn(t[s],e,n,l);return t}function E0(t,e){if(Bt===null)return t;const n=Os(Bt)||Bt.proxy,l=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[d,a,r,g=kt]=e[s];d&&(lt(d)&&(d={mounted:d,updated:d}),d.deep&&fn(a),l.push({dir:d,instance:n,value:a,oldValue:void 0,arg:r,modifiers:g}))}return t}function be(t,e,n,l){const s=t.dirs,d=e&&e.dirs;for(let a=0;a<s.length;a++){const r=s[a];d&&(r.oldValue=d[a].value);let g=r.dir[l];g&&(pn(),re(g,n,8,[t.el,r,t,e]),un())}}const We=Symbol("_leaveCb"),Kl=Symbol("_enterCb");function Ar(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pt(()=>{t.isMounted=!0}),Vr(()=>{t.isUnmounting=!0}),t}const se=[Function,Array],Dr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:se,onEnter:se,onAfterEnter:se,onEnterCancelled:se,onBeforeLeave:se,onLeave:se,onAfterLeave:se,onLeaveCancelled:se,onBeforeAppear:se,onAppear:se,onAfterAppear:se,onAppearCancelled:se},Py={name:"BaseTransition",props:Dr,setup(t,{slots:e}){const n=Gn(),l=Ar();return()=>{const s=e.default&&la(e.default(),!0);if(!s||!s.length)return;let d=s[0];if(s.length>1){for(const x of s)if(x.type!==ee){d=x;break}}const a=at(t),{mode:r}=a;if(l.isLeaving)return Js(d);const g=Ha(d);if(!g)return Js(d);const f=cl(g,a,l,n);pl(g,f);const o=n.subTree,y=o&&Ha(o);if(y&&y.type!==ee&&!rn(g,y)){const x=cl(y,a,l,n);if(pl(y,x),r==="out-in")return l.isLeaving=!0,x.afterLeave=()=>{l.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Js(d);r==="in-out"&&g.type!==ee&&(x.delayLeave=(p,m,w)=>{const _=Or(l,y);_[String(y.key)]=y,p[We]=()=>{m(),p[We]=void 0,delete f.delayedLeave},f.delayedLeave=w})}return d}}},Ay=Py;function Or(t,e){const{leavingVNodes:n}=t;let l=n.get(e.type);return l||(l=Object.create(null),n.set(e.type,l)),l}function cl(t,e,n,l){const{appear:s,mode:d,persisted:a=!1,onBeforeEnter:r,onEnter:g,onAfterEnter:f,onEnterCancelled:o,onBeforeLeave:y,onLeave:x,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:w,onAppear:_,onAfterAppear:b,onAppearCancelled:C}=e,v=String(t.key),S=Or(n,t),V=(O,J)=>{O&&re(O,l,9,J)},I=(O,J)=>{const D=J[1];V(O,J),Z(O)?O.every(U=>U.length<=1)&&D():O.length<=1&&D()},B={mode:d,persisted:a,beforeEnter(O){let J=r;if(!n.isMounted)if(s)J=w||r;else return;O[We]&&O[We](!0);const D=S[v];D&&rn(t,D)&&D.el[We]&&D.el[We](),V(J,[O])},enter(O){let J=g,D=f,U=o;if(!n.isMounted)if(s)J=_||g,D=b||f,U=C||o;else return;let R=!1;const tt=O[Kl]=Tt=>{R||(R=!0,Tt?V(U,[O]):V(D,[O]),B.delayedLeave&&B.delayedLeave(),O[Kl]=void 0)};J?I(J,[O,tt]):tt()},leave(O,J){const D=String(t.key);if(O[Kl]&&O[Kl](!0),n.isUnmounting)return J();V(y,[O]);let U=!1;const R=O[We]=tt=>{U||(U=!0,J(),tt?V(m,[O]):V(p,[O]),O[We]=void 0,S[D]===t&&delete S[D])};S[D]=t,x?I(x,[O,R]):R()},clone(O){return cl(O,e,n,l)}};return B}function Js(t){if(Sl(t))return t=Xe(t),t.children=null,t}function Ha(t){return Sl(t)?t.children?t.children[0]:void 0:t}function pl(t,e){t.shapeFlag&6&&t.component?pl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function la(t,e=!1,n){let l=[],s=0;for(let d=0;d<t.length;d++){let a=t[d];const r=n==null?a.key:String(n)+String(a.key!=null?a.key:d);a.type===Wt?(a.patchFlag&128&&s++,l=l.concat(la(a.children,e,r))):(e||a.type!==ee)&&l.push(r!=null?Xe(a,{key:r}):a)}if(s>1)for(let d=0;d<l.length;d++)l[d].patchFlag=-2;return l}/*! #__NO_SIDE_EFFECTS__ */function z(t,e){return lt(t)?Mt({name:t.name},e,{setup:t}):t}const Dn=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Dy(t){lt(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:l,delay:s=200,timeout:d,suspensible:a=!0,onError:r}=t;let g=null,f,o=0;const y=()=>(o++,g=null,x()),x=()=>{let p;return g||(p=g=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),r)return new Promise((w,_)=>{r(m,()=>w(y()),()=>_(m),o+1)});throw m}).then(m=>p!==g&&g?g:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),f=m,m)))};return z({name:"AsyncComponentWrapper",__asyncLoader:x,get __asyncResolved(){return f},setup(){const p=zt;if(f)return()=>Qs(f,p);const m=C=>{g=null,Il(C,p,13,!l)};if(a&&p.suspense||Ll)return x().then(C=>()=>Qs(C,p)).catch(C=>(m(C),()=>l?Pt(l,{error:C}):null));const w=X(!1),_=X(),b=X(!!s);return s&&setTimeout(()=>{b.value=!1},s),d!=null&&setTimeout(()=>{if(!w.value&&!_.value){const C=new Error(`Async component timed out after ${d}ms.`);m(C),_.value=C}},d),x().then(()=>{w.value=!0,p.parent&&Sl(p.parent.vnode)&&(p.parent.effect.dirty=!0,Ss(p.parent.update))}).catch(C=>{m(C),_.value=C}),()=>{if(w.value&&f)return Qs(f,p);if(_.value&&l)return Pt(l,{error:_.value});if(n&&!b.value)return Pt(n)}}})}function Qs(t,e){const{ref:n,props:l,children:s,ce:d}=e.vnode,a=Pt(t,l,s);return a.ref=n,a.ce=d,delete e.vnode.ce,a}const Sl=t=>t.type.__isKeepAlive;function Oy(t,e){Rr(t,"a",e)}function Ry(t,e){Rr(t,"da",e)}function Rr(t,e,n=zt){const l=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(As(e,l,n),n){let s=n.parent;for(;s&&s.parent;)Sl(s.parent.vnode)&&My(l,e,n,s),s=s.parent}}function My(t,e,n,l){const s=As(e,t,l,!0);Wn(()=>{Ud(l[e],s)},n)}function As(t,e,n=zt,l=!1){if(n){const s=n[t]||(n[t]=[]),d=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;pn();const r=Tl(n),g=re(e,n,t,a);return r(),un(),g});return l?s.unshift(d):s.push(d),d}}const Me=t=>(e,n=zt)=>(!Ll||t==="sp")&&As(t,(...l)=>e(...l),n),Vy=Me("bm"),pt=Me("m"),By=Me("bu"),Mr=Me("u"),Vr=Me("bum"),Wn=Me("um"),Ny=Me("sp"),Fy=Me("rtg"),zy=Me("rtc");function $y(t,e=zt){As("ec",t,e)}function C0(t,e,n,l){let s;const d=n&&n[l];if(Z(t)||Dt(t)){s=new Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=e(t[a],a,void 0,d&&d[a])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,d&&d[a])}else if(_t(t))if(t[Symbol.iterator])s=Array.from(t,(a,r)=>e(a,r,void 0,d&&d[r]));else{const a=Object.keys(t);s=new Array(a.length);for(let r=0,g=a.length;r<g;r++){const f=a[r];s[r]=e(t[f],f,r,d&&d[r])}}else s=[];return n&&(n[l]=s),s}function I0(t,e,n={},l,s){if(Bt.isCE||Bt.parent&&Dn(Bt.parent)&&Bt.parent.isCE)return e!=="default"&&(n.name=e),Pt("slot",n,l&&l());let d=t[e];d&&d._c&&(d._d=!1),Kr();const a=d&&Br(d(n)),r=Qr(Wt,{key:n.key||a&&a.key||`_${e}`},a||(l?l():[]),a&&t._===1?64:-2);return!s&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),d&&d._c&&(d._d=!0),r}function Br(t){return t.some(e=>cs(e)?!(e.type===ee||e.type===Wt&&!Br(e.children)):!0)?t:null}const wd=t=>t?tf(t)?Os(t)||t.proxy:wd(t.parent):null,sl=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wd(t.parent),$root:t=>wd(t.root),$emit:t=>t.emit,$options:t=>sa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ss(t.update)}),$nextTick:t=>t.n||(t.n=mn.bind(t.proxy)),$watch:t=>Ly.bind(t)}),Ys=(t,e)=>t!==kt&&!t.__isScriptSetup&&ft(t,e),jy={get({_:t},e){const{ctx:n,setupState:l,data:s,props:d,accessCache:a,type:r,appContext:g}=t;let f;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return l[e];case 2:return s[e];case 4:return n[e];case 3:return d[e]}else{if(Ys(l,e))return a[e]=1,l[e];if(s!==kt&&ft(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&ft(f,e))return a[e]=3,d[e];if(n!==kt&&ft(n,e))return a[e]=4,n[e];Ed&&(a[e]=0)}}const o=sl[e];let y,x;if(o)return e==="$attrs"&&Qt(t,"get",e),o(t);if((y=r.__cssModules)&&(y=y[e]))return y;if(n!==kt&&ft(n,e))return a[e]=4,n[e];if(x=g.config.globalProperties,ft(x,e))return x[e]},set({_:t},e,n){const{data:l,setupState:s,ctx:d}=t;return Ys(s,e)?(s[e]=n,!0):l!==kt&&ft(l,e)?(l[e]=n,!0):ft(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(d[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:l,appContext:s,propsOptions:d}},a){let r;return!!n[a]||t!==kt&&ft(t,a)||Ys(e,a)||(r=d[0])&&ft(r,a)||ft(l,a)||ft(sl,a)||ft(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ft(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ua(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ed=!0;function qy(t){const e=sa(t),n=t.proxy,l=t.ctx;Ed=!1,e.beforeCreate&&Wa(e.beforeCreate,t,"bc");const{data:s,computed:d,methods:a,watch:r,provide:g,inject:f,created:o,beforeMount:y,mounted:x,beforeUpdate:p,updated:m,activated:w,deactivated:_,beforeDestroy:b,beforeUnmount:C,destroyed:v,unmounted:S,render:V,renderTracked:I,renderTriggered:B,errorCaptured:O,serverPrefetch:J,expose:D,inheritAttrs:U,components:R,directives:tt,filters:Tt}=e;if(f&&Hy(f,l,null),a)for(const et in a){const G=a[et];lt(G)&&(l[et]=G.bind(n))}if(s){const et=s.call(n,n);_t(et)&&(t.data=Cl(et))}if(Ed=!0,d)for(const et in d){const G=d[et],Ot=lt(G)?G.bind(n,n):lt(G.get)?G.get.bind(n,n):ie,he=!lt(G)&&lt(G.set)?G.set.bind(n):ie,le=k({get:Ot,set:he});Object.defineProperty(l,et,{enumerable:!0,configurable:!0,get:()=>le.value,set:Nt=>le.value=Nt})}if(r)for(const et in r)Nr(r[et],l,n,et);if(g){const et=lt(g)?g.call(n):g;Reflect.ownKeys(et).forEach(G=>{ge(G,et[G])})}o&&Wa(o,t,"c");function W(et,G){Z(G)?G.forEach(Ot=>et(Ot.bind(n))):G&&et(G.bind(n))}if(W(Vy,y),W(pt,x),W(By,p),W(Mr,m),W(Oy,w),W(Ry,_),W($y,O),W(zy,I),W(Fy,B),W(Vr,C),W(Wn,S),W(Ny,J),Z(D))if(D.length){const et=t.exposed||(t.exposed={});D.forEach(G=>{Object.defineProperty(et,G,{get:()=>n[G],set:Ot=>n[G]=Ot})})}else t.exposed||(t.exposed={});V&&t.render===ie&&(t.render=V),U!=null&&(t.inheritAttrs=U),R&&(t.components=R),tt&&(t.directives=tt)}function Hy(t,e,n=ie){Z(t)&&(t=Cd(t));for(const l in t){const s=t[l];let d;_t(s)?"default"in s?d=bt(s.from||l,s.default,!0):d=bt(s.from||l):d=bt(s),jt(d)?Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:()=>d.value,set:a=>d.value=a}):e[l]=d}}function Wa(t,e,n){re(Z(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nr(t,e,n,l){const s=l.includes(".")?Pr(n,l):()=>n[l];if(Dt(t)){const d=e[t];lt(d)&&gt(s,d)}else if(lt(t))gt(s,t.bind(n));else if(_t(t))if(Z(t))t.forEach(d=>Nr(d,e,n,l));else{const d=lt(t.handler)?t.handler.bind(n):e[t.handler];lt(d)&&gt(s,d,t)}}function sa(t){const e=t.type,{mixins:n,extends:l}=e,{mixins:s,optionsCache:d,config:{optionMergeStrategies:a}}=t.appContext,r=d.get(e);let g;return r?g=r:!s.length&&!n&&!l?g=e:(g={},s.length&&s.forEach(f=>ys(g,f,a,!0)),ys(g,e,a)),_t(e)&&d.set(e,g),g}function ys(t,e,n,l=!1){const{mixins:s,extends:d}=e;d&&ys(t,d,n,!0),s&&s.forEach(a=>ys(t,a,n,!0));for(const a in e)if(!(l&&a==="expose")){const r=Uy[a]||n&&n[a];t[a]=r?r(t[a],e[a]):e[a]}return t}const Uy={data:Ga,props:Ka,emits:Ka,methods:el,computed:el,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:el,directives:el,watch:Gy,provide:Ga,inject:Wy};function Ga(t,e){return e?t?function(){return Mt(lt(t)?t.call(this,this):t,lt(e)?e.call(this,this):e)}:e:t}function Wy(t,e){return el(Cd(t),Cd(e))}function Cd(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function el(t,e){return t?Mt(Object.create(null),t,e):e}function Ka(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Mt(Object.create(null),Ua(t),Ua(e??{})):e}function Gy(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const l in e)n[l]=Ut(t[l],e[l]);return n}function Fr(){return{app:null,config:{isNativeTag:Eo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ky=0;function Jy(t,e){return function(l,s=null){lt(l)||(l=Mt({},l)),s!=null&&!_t(s)&&(s=null);const d=Fr(),a=new WeakSet;let r=!1;const g=d.app={_uid:Ky++,_component:l,_props:s,_container:null,_context:d,_instance:null,version:nf,get config(){return d.config},set config(f){},use(f,...o){return a.has(f)||(f&&lt(f.install)?(a.add(f),f.install(g,...o)):lt(f)&&(a.add(f),f(g,...o))),g},mixin(f){return d.mixins.includes(f)||d.mixins.push(f),g},component(f,o){return o?(d.components[f]=o,g):d.components[f]},directive(f,o){return o?(d.directives[f]=o,g):d.directives[f]},mount(f,o,y){if(!r){const x=Pt(l,s);return x.appContext=d,y===!0?y="svg":y===!1&&(y=void 0),o&&e?e(x,f):t(x,f,y),r=!0,g._container=f,f.__vue_app__=g,Os(x.component)||x.component.proxy}},unmount(){r&&(t(null,g._container),delete g._container.__vue_app__)},provide(f,o){return d.provides[f]=o,g},runWithContext(f){const o=dl;dl=g;try{return f()}finally{dl=o}}};return g}}let dl=null;function ge(t,e){if(zt){let n=zt.provides;const l=zt.parent&&zt.parent.provides;l===n&&(n=zt.provides=Object.create(l)),n[t]=e}}function bt(t,e,n=!1){const l=zt||Bt;if(l||dl){const s=l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:dl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&lt(e)?e.call(l&&l.proxy):e}}function Qy(t,e,n,l=!1){const s={},d={};is(d,Ds,1),t.propsDefaults=Object.create(null),zr(t,e,s,d);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=l?s:mr(s):t.type.props?t.props=s:t.props=d,t.attrs=d}function Yy(t,e,n,l){const{props:s,attrs:d,vnode:{patchFlag:a}}=t,r=at(s),[g]=t.propsOptions;let f=!1;if((l||a>0)&&!(a&16)){if(a&8){const o=t.vnode.dynamicProps;for(let y=0;y<o.length;y++){let x=o[y];if(Ts(t.emitsOptions,x))continue;const p=e[x];if(g)if(ft(d,x))p!==d[x]&&(d[x]=p,f=!0);else{const m=ne(x);s[m]=Id(g,r,m,p,t,!1)}else p!==d[x]&&(d[x]=p,f=!0)}}}else{zr(t,e,s,d)&&(f=!0);let o;for(const y in r)(!e||!ft(e,y)&&((o=Ze(y))===y||!ft(e,o)))&&(g?n&&(n[y]!==void 0||n[o]!==void 0)&&(s[y]=Id(g,r,y,void 0,t,!0)):delete s[y]);if(d!==r)for(const y in d)(!e||!ft(e,y))&&(delete d[y],f=!0)}f&&Pe(t,"set","$attrs")}function zr(t,e,n,l){const[s,d]=t.propsOptions;let a=!1,r;if(e)for(let g in e){if(Ln(g))continue;const f=e[g];let o;s&&ft(s,o=ne(g))?!d||!d.includes(o)?n[o]=f:(r||(r={}))[o]=f:Ts(t.emitsOptions,g)||(!(g in l)||f!==l[g])&&(l[g]=f,a=!0)}if(d){const g=at(n),f=r||kt;for(let o=0;o<d.length;o++){const y=d[o];n[y]=Id(s,g,y,f[y],t,!ft(f,y))}}return a}function Id(t,e,n,l,s,d){const a=t[n];if(a!=null){const r=ft(a,"default");if(r&&l===void 0){const g=a.default;if(a.type!==Function&&!a.skipFactory&&lt(g)){const{propsDefaults:f}=s;if(n in f)l=f[n];else{const o=Tl(s);l=f[n]=g.call(null,e),o()}}else l=g}a[0]&&(d&&!r?l=!1:a[1]&&(l===""||l===Ze(n))&&(l=!0))}return l}function $r(t,e,n=!1){const l=e.propsCache,s=l.get(t);if(s)return s;const d=t.props,a={},r=[];let g=!1;if(!lt(t)){const o=y=>{g=!0;const[x,p]=$r(y,e,!0);Mt(a,x),p&&r.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}if(!d&&!g)return _t(t)&&l.set(t,Sn),Sn;if(Z(d))for(let o=0;o<d.length;o++){const y=ne(d[o]);Ja(y)&&(a[y]=kt)}else if(d)for(const o in d){const y=ne(o);if(Ja(y)){const x=d[o],p=a[y]=Z(x)||lt(x)?{type:x}:Mt({},x);if(p){const m=Xa(Boolean,p.type),w=Xa(String,p.type);p[0]=m>-1,p[1]=w<0||m<w,(m>-1||ft(p,"default"))&&r.push(y)}}}const f=[a,r];return _t(t)&&l.set(t,f),f}function Ja(t){return t[0]!=="$"&&!Ln(t)}function Qa(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ya(t,e){return Qa(t)===Qa(e)}function Xa(t,e){return Z(e)?e.findIndex(n=>Ya(n,t)):lt(e)&&Ya(e,t)?0:-1}const jr=t=>t[0]==="_"||t==="$stable",da=t=>Z(t)?t.map(ce):[ce(t)],Xy=(t,e,n)=>{if(e._n)return e;const l=my((...s)=>da(e(...s)),n);return l._c=!1,l},qr=(t,e,n)=>{const l=t._ctx;for(const s in t){if(jr(s))continue;const d=t[s];if(lt(d))e[s]=Xy(s,d,l);else if(d!=null){const a=da(d);e[s]=()=>a}}},Hr=(t,e)=>{const n=da(e);t.slots.default=()=>n},Zy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=at(e),is(e,"_",n)):qr(e,t.slots={})}else t.slots={},e&&Hr(t,e);is(t.slots,Ds,1)},tx=(t,e,n)=>{const{vnode:l,slots:s}=t;let d=!0,a=kt;if(l.shapeFlag&32){const r=e._;r?n&&r===1?d=!1:(Mt(s,e),!n&&r===1&&delete s._):(d=!e.$stable,qr(e,s)),a=e}else e&&(Hr(t,e),a={default:1});if(d)for(const r in s)!jr(r)&&a[r]==null&&delete s[r]};function xs(t,e,n,l,s=!1){if(Z(t)){t.forEach((x,p)=>xs(x,e&&(Z(e)?e[p]:e),n,l,s));return}if(Dn(l)&&!s)return;const d=l.shapeFlag&4?Os(l.component)||l.component.proxy:l.el,a=s?null:d,{i:r,r:g}=t,f=e&&e.r,o=r.refs===kt?r.refs={}:r.refs,y=r.setupState;if(f!=null&&f!==g&&(Dt(f)?(o[f]=null,ft(y,f)&&(y[f]=null)):jt(f)&&(f.value=null)),lt(g))Ye(g,r,12,[a,o]);else{const x=Dt(g),p=jt(g);if(x||p){const m=()=>{if(t.f){const w=x?ft(y,g)?y[g]:o[g]:g.value;s?Z(w)&&Ud(w,d):Z(w)?w.includes(d)||w.push(d):x?(o[g]=[d],ft(y,g)&&(y[g]=o[g])):(g.value=[d],t.k&&(o[t.k]=g.value))}else x?(o[g]=a,ft(y,g)&&(y[g]=a)):p&&(g.value=a,t.k&&(o[t.k]=a))};a?(m.id=-1,Kt(m,n)):m()}}}let ze=!1;const ex=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",nx=t=>t.namespaceURI.includes("MathML"),Jl=t=>{if(ex(t))return"svg";if(nx(t))return"mathml"},Ql=t=>t.nodeType===8;function lx(t){const{mt:e,p:n,o:{patchProp:l,createText:s,nextSibling:d,parentNode:a,remove:r,insert:g,createComment:f}}=t,o=(v,S)=>{if(!S.hasChildNodes()){n(null,v,S),gs(),S._vnode=v;return}ze=!1,y(S.firstChild,v,null,null,null),gs(),S._vnode=v,ze&&console.error("Hydration completed but contains mismatches.")},y=(v,S,V,I,B,O=!1)=>{const J=Ql(v)&&v.data==="[",D=()=>w(v,S,V,I,B,J),{type:U,ref:R,shapeFlag:tt,patchFlag:Tt}=S;let It=v.nodeType;S.el=v,Tt===-2&&(O=!1,S.dynamicChildren=null);let W=null;switch(U){case Nn:It!==3?S.children===""?(g(S.el=s(""),a(v),v),W=v):W=D():(v.data!==S.children&&(ze=!0,v.data=S.children),W=d(v));break;case ee:C(v)?(W=d(v),b(S.el=v.content.firstChild,v,V)):It!==8||J?W=D():W=d(v);break;case al:if(J&&(v=d(v),It=v.nodeType),It===1||It===3){W=v;const et=!S.children.length;for(let G=0;G<S.staticCount;G++)et&&(S.children+=W.nodeType===1?W.outerHTML:W.data),G===S.staticCount-1&&(S.anchor=W),W=d(W);return J?d(W):W}else D();break;case Wt:J?W=m(v,S,V,I,B,O):W=D();break;default:if(tt&1)(It!==1||S.type.toLowerCase()!==v.tagName.toLowerCase())&&!C(v)?W=D():W=x(v,S,V,I,B,O);else if(tt&6){S.slotScopeIds=B;const et=a(v);if(J?W=_(v):Ql(v)&&v.data==="teleport start"?W=_(v,v.data,"teleport end"):W=d(v),e(S,et,null,V,I,Jl(et),O),Dn(S)){let G;J?(G=Pt(Wt),G.anchor=W?W.previousSibling:et.lastChild):G=v.nodeType===3?Zr(""):Pt("div"),G.el=v,S.component.subTree=G}}else tt&64?It!==8?W=D():W=S.type.hydrate(v,S,V,I,B,O,t,p):tt&128&&(W=S.type.hydrate(v,S,V,I,Jl(a(v)),B,O,t,y))}return R!=null&&xs(R,null,I,S),W},x=(v,S,V,I,B,O)=>{O=O||!!S.dynamicChildren;const{type:J,props:D,patchFlag:U,shapeFlag:R,dirs:tt,transition:Tt}=S,It=J==="input"||J==="option";if(It||U!==-1){tt&&be(S,null,V,"created");let W=!1;if(C(v)){W=Ur(I,Tt)&&V&&V.vnode.props&&V.vnode.props.appear;const G=v.content.firstChild;W&&Tt.beforeEnter(G),b(G,v,V),S.el=v=G}if(R&16&&!(D&&(D.innerHTML||D.textContent))){let G=p(v.firstChild,S,v,V,I,B,O);for(;G;){ze=!0;const Ot=G;G=G.nextSibling,r(Ot)}}else R&8&&v.textContent!==S.children&&(ze=!0,v.textContent=S.children);if(D)if(It||!O||U&48)for(const G in D)(It&&(G.endsWith("value")||G==="indeterminate")||wl(G)&&!Ln(G)||G[0]===".")&&l(v,G,null,D[G],void 0,void 0,V);else D.onClick&&l(v,"onClick",null,D.onClick,void 0,void 0,V);let et;(et=D&&D.onVnodeBeforeMount)&&de(et,V,S),tt&&be(S,null,V,"beforeMount"),((et=D&&D.onVnodeMounted)||tt||W)&&Lr(()=>{et&&de(et,V,S),W&&Tt.enter(v),tt&&be(S,null,V,"mounted")},I)}return v.nextSibling},p=(v,S,V,I,B,O,J)=>{J=J||!!S.dynamicChildren;const D=S.children,U=D.length;for(let R=0;R<U;R++){const tt=J?D[R]:D[R]=ce(D[R]);if(v)v=y(v,tt,I,B,O,J);else{if(tt.type===Nn&&!tt.children)continue;ze=!0,n(null,tt,V,null,I,B,Jl(V),O)}}return v},m=(v,S,V,I,B,O)=>{const{slotScopeIds:J}=S;J&&(B=B?B.concat(J):J);const D=a(v),U=p(d(v),S,D,V,I,B,O);return U&&Ql(U)&&U.data==="]"?d(S.anchor=U):(ze=!0,g(S.anchor=f("]"),D,U),U)},w=(v,S,V,I,B,O)=>{if(ze=!0,S.el=null,O){const U=_(v);for(;;){const R=d(v);if(R&&R!==U)r(R);else break}}const J=d(v),D=a(v);return r(v),n(null,S,D,J,V,I,Jl(D),B),J},_=(v,S="[",V="]")=>{let I=0;for(;v;)if(v=d(v),v&&Ql(v)&&(v.data===S&&I++,v.data===V)){if(I===0)return d(v);I--}return v},b=(v,S,V)=>{const I=S.parentNode;I&&I.replaceChild(v,S);let B=V;for(;B;)B.vnode.el===S&&(B.vnode.el=B.subTree.el=v),B=B.parent},C=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[o,y]}const Kt=Lr;function sx(t){return dx(t,lx)}function dx(t,e){const n=lr();n.__VUE__=!0;const{insert:l,remove:s,patchProp:d,createElement:a,createText:r,createComment:g,setText:f,setElementText:o,parentNode:y,nextSibling:x,setScopeId:p=ie,insertStaticContent:m}=t,w=(u,h,E,P=null,L=null,N=null,j=void 0,M=null,F=!!h.dynamicChildren)=>{if(u===h)return;u&&!rn(u,h)&&(P=T(u),Nt(u,L,N,!0),u=null),h.patchFlag===-2&&(F=!1,h.dynamicChildren=null);const{type:A,ref:H,shapeFlag:Y}=h;switch(A){case Nn:_(u,h,E,P);break;case ee:b(u,h,E,P);break;case al:u==null&&C(h,E,P,j);break;case Wt:R(u,h,E,P,L,N,j,M,F);break;default:Y&1?V(u,h,E,P,L,N,j,M,F):Y&6?tt(u,h,E,P,L,N,j,M,F):(Y&64||Y&128)&&A.process(u,h,E,P,L,N,j,M,F,K)}H!=null&&L&&xs(H,u&&u.ref,N,h||u,!h)},_=(u,h,E,P)=>{if(u==null)l(h.el=r(h.children),E,P);else{const L=h.el=u.el;h.children!==u.children&&f(L,h.children)}},b=(u,h,E,P)=>{u==null?l(h.el=g(h.children||""),E,P):h.el=u.el},C=(u,h,E,P)=>{[u.el,u.anchor]=m(u.children,h,E,P,u.el,u.anchor)},v=({el:u,anchor:h},E,P)=>{let L;for(;u&&u!==h;)L=x(u),l(u,E,P),u=L;l(h,E,P)},S=({el:u,anchor:h})=>{let E;for(;u&&u!==h;)E=x(u),s(u),u=E;s(h)},V=(u,h,E,P,L,N,j,M,F)=>{h.type==="svg"?j="svg":h.type==="math"&&(j="mathml"),u==null?I(h,E,P,L,N,j,M,F):J(u,h,L,N,j,M,F)},I=(u,h,E,P,L,N,j,M)=>{let F,A;const{props:H,shapeFlag:Y,transition:Q,dirs:nt}=u;if(F=u.el=a(u.type,N,H&&H.is,H),Y&8?o(F,u.children):Y&16&&O(u.children,F,null,P,L,Xs(u,N),j,M),nt&&be(u,null,P,"created"),B(F,u,u.scopeId,j,P),H){for(const ht in H)ht!=="value"&&!Ln(ht)&&d(F,ht,null,H[ht],N,u.children,P,L,Rt);"value"in H&&d(F,"value",null,H.value,N),(A=H.onVnodeBeforeMount)&&de(A,P,u)}nt&&be(u,null,P,"beforeMount");const st=Ur(L,Q);st&&Q.beforeEnter(F),l(F,h,E),((A=H&&H.onVnodeMounted)||st||nt)&&Kt(()=>{A&&de(A,P,u),st&&Q.enter(F),nt&&be(u,null,P,"mounted")},L)},B=(u,h,E,P,L)=>{if(E&&p(u,E),P)for(let N=0;N<P.length;N++)p(u,P[N]);if(L){let N=L.subTree;if(h===N){const j=L.vnode;B(u,j,j.scopeId,j.slotScopeIds,L.parent)}}},O=(u,h,E,P,L,N,j,M,F=0)=>{for(let A=F;A<u.length;A++){const H=u[A]=M?Ge(u[A]):ce(u[A]);w(null,H,h,E,P,L,N,j,M)}},J=(u,h,E,P,L,N,j)=>{const M=h.el=u.el;let{patchFlag:F,dynamicChildren:A,dirs:H}=h;F|=u.patchFlag&16;const Y=u.props||kt,Q=h.props||kt;let nt;if(E&&ln(E,!1),(nt=Q.onVnodeBeforeUpdate)&&de(nt,E,h,u),H&&be(h,u,E,"beforeUpdate"),E&&ln(E,!0),A?D(u.dynamicChildren,A,M,E,P,Xs(h,L),N):j||G(u,h,M,null,E,P,Xs(h,L),N,!1),F>0){if(F&16)U(M,h,Y,Q,E,P,L);else if(F&2&&Y.class!==Q.class&&d(M,"class",null,Q.class,L),F&4&&d(M,"style",Y.style,Q.style,L),F&8){const st=h.dynamicProps;for(let ht=0;ht<st.length;ht++){const St=st[ht],Ft=Y[St],ye=Q[St];(ye!==Ft||St==="value")&&d(M,St,Ft,ye,L,u.children,E,P,Rt)}}F&1&&u.children!==h.children&&o(M,h.children)}else!j&&A==null&&U(M,h,Y,Q,E,P,L);((nt=Q.onVnodeUpdated)||H)&&Kt(()=>{nt&&de(nt,E,h,u),H&&be(h,u,E,"updated")},P)},D=(u,h,E,P,L,N,j)=>{for(let M=0;M<h.length;M++){const F=u[M],A=h[M],H=F.el&&(F.type===Wt||!rn(F,A)||F.shapeFlag&70)?y(F.el):E;w(F,A,H,null,P,L,N,j,!0)}},U=(u,h,E,P,L,N,j)=>{if(E!==P){if(E!==kt)for(const M in E)!Ln(M)&&!(M in P)&&d(u,M,E[M],null,j,h.children,L,N,Rt);for(const M in P){if(Ln(M))continue;const F=P[M],A=E[M];F!==A&&M!=="value"&&d(u,M,A,F,j,h.children,L,N,Rt)}"value"in P&&d(u,"value",E.value,P.value,j)}},R=(u,h,E,P,L,N,j,M,F)=>{const A=h.el=u?u.el:r(""),H=h.anchor=u?u.anchor:r("");let{patchFlag:Y,dynamicChildren:Q,slotScopeIds:nt}=h;nt&&(M=M?M.concat(nt):nt),u==null?(l(A,E,P),l(H,E,P),O(h.children||[],E,H,L,N,j,M,F)):Y>0&&Y&64&&Q&&u.dynamicChildren?(D(u.dynamicChildren,Q,E,L,N,j,M),(h.key!=null||L&&h===L.subTree)&&Wr(u,h,!0)):G(u,h,E,H,L,N,j,M,F)},tt=(u,h,E,P,L,N,j,M,F)=>{h.slotScopeIds=M,u==null?h.shapeFlag&512?L.ctx.activate(h,E,P,j,F):Tt(h,E,P,L,N,j,F):It(u,h,F)},Tt=(u,h,E,P,L,N,j)=>{const M=u.component=cx(u,P,L);if(Sl(u)&&(M.ctx.renderer=K),px(M),M.asyncDep){if(L&&L.registerDep(M,W),!u.el){const F=M.subTree=Pt(ee);b(null,F,h,E)}}else W(M,u,h,E,L,N,j)},It=(u,h,E)=>{const P=h.component=u.component;if(ky(u,h,E))if(P.asyncDep&&!P.asyncResolved){et(P,h,E);return}else P.next=h,cy(P.update),P.effect.dirty=!0,P.update();else h.el=u.el,P.vnode=h},W=(u,h,E,P,L,N,j)=>{const M=()=>{if(u.isMounted){let{next:H,bu:Y,u:Q,parent:nt,vnode:st}=u;{const _n=Gr(u);if(_n){H&&(H.el=st.el,et(u,H,j)),_n.asyncDep.then(()=>{u.isUnmounted||M()});return}}let ht=H,St;ln(u,!1),H?(H.el=st.el,et(u,H,j)):H=st,Y&&ss(Y),(St=H.props&&H.props.onVnodeBeforeUpdate)&&de(St,nt,H,st),ln(u,!0);const Ft=Ks(u),ye=u.subTree;u.subTree=Ft,w(ye,Ft,y(ye.el),T(ye),u,L,N),H.el=Ft.el,ht===null&&_y(u,Ft.el),Q&&Kt(Q,L),(St=H.props&&H.props.onVnodeUpdated)&&Kt(()=>de(St,nt,H,st),L)}else{let H;const{el:Y,props:Q}=h,{bm:nt,m:st,parent:ht}=u,St=Dn(h);if(ln(u,!1),nt&&ss(nt),!St&&(H=Q&&Q.onVnodeBeforeMount)&&de(H,ht,h),ln(u,!0),Y&&vt){const Ft=()=>{u.subTree=Ks(u),vt(Y,u.subTree,u,L,null)};St?h.type.__asyncLoader().then(()=>!u.isUnmounted&&Ft()):Ft()}else{const Ft=u.subTree=Ks(u);w(null,Ft,E,P,u,L,N),h.el=Ft.el}if(st&&Kt(st,L),!St&&(H=Q&&Q.onVnodeMounted)){const Ft=h;Kt(()=>de(H,ht,Ft),L)}(h.shapeFlag&256||ht&&Dn(ht.vnode)&&ht.vnode.shapeFlag&256)&&u.a&&Kt(u.a,L),u.isMounted=!0,h=E=P=null}},F=u.effect=new Gd(M,ie,()=>Ss(A),u.scope),A=u.update=()=>{F.dirty&&F.run()};A.id=u.uid,ln(u,!0),A()},et=(u,h,E)=>{h.component=u;const P=u.vnode.props;u.vnode=h,u.next=null,Yy(u,h.props,P,E),tx(u,h.children,E),pn(),$a(u),un()},G=(u,h,E,P,L,N,j,M,F=!1)=>{const A=u&&u.children,H=u?u.shapeFlag:0,Y=h.children,{patchFlag:Q,shapeFlag:nt}=h;if(Q>0){if(Q&128){he(A,Y,E,P,L,N,j,M,F);return}else if(Q&256){Ot(A,Y,E,P,L,N,j,M,F);return}}nt&8?(H&16&&Rt(A,L,N),Y!==A&&o(E,Y)):H&16?nt&16?he(A,Y,E,P,L,N,j,M,F):Rt(A,L,N,!0):(H&8&&o(E,""),nt&16&&O(Y,E,P,L,N,j,M,F))},Ot=(u,h,E,P,L,N,j,M,F)=>{u=u||Sn,h=h||Sn;const A=u.length,H=h.length,Y=Math.min(A,H);let Q;for(Q=0;Q<Y;Q++){const nt=h[Q]=F?Ge(h[Q]):ce(h[Q]);w(u[Q],nt,E,null,L,N,j,M,F)}A>H?Rt(u,L,N,!0,!1,Y):O(h,E,P,L,N,j,M,F,Y)},he=(u,h,E,P,L,N,j,M,F)=>{let A=0;const H=h.length;let Y=u.length-1,Q=H-1;for(;A<=Y&&A<=Q;){const nt=u[A],st=h[A]=F?Ge(h[A]):ce(h[A]);if(rn(nt,st))w(nt,st,E,null,L,N,j,M,F);else break;A++}for(;A<=Y&&A<=Q;){const nt=u[Y],st=h[Q]=F?Ge(h[Q]):ce(h[Q]);if(rn(nt,st))w(nt,st,E,null,L,N,j,M,F);else break;Y--,Q--}if(A>Y){if(A<=Q){const nt=Q+1,st=nt<H?h[nt].el:P;for(;A<=Q;)w(null,h[A]=F?Ge(h[A]):ce(h[A]),E,st,L,N,j,M,F),A++}}else if(A>Q)for(;A<=Y;)Nt(u[A],L,N,!0),A++;else{const nt=A,st=A,ht=new Map;for(A=st;A<=Q;A++){const Zt=h[A]=F?Ge(h[A]):ce(h[A]);Zt.key!=null&&ht.set(Zt.key,A)}let St,Ft=0;const ye=Q-st+1;let _n=!1,Pa=0;const Qn=new Array(ye);for(A=0;A<ye;A++)Qn[A]=0;for(A=nt;A<=Y;A++){const Zt=u[A];if(Ft>=ye){Nt(Zt,L,N,!0);continue}let ve;if(Zt.key!=null)ve=ht.get(Zt.key);else for(St=st;St<=Q;St++)if(Qn[St-st]===0&&rn(Zt,h[St])){ve=St;break}ve===void 0?Nt(Zt,L,N,!0):(Qn[ve-st]=A+1,ve>=Pa?Pa=ve:_n=!0,w(Zt,h[ve],E,null,L,N,j,M,F),Ft++)}const Aa=_n?ax(Qn):Sn;for(St=Aa.length-1,A=ye-1;A>=0;A--){const Zt=st+A,ve=h[Zt],Da=Zt+1<H?h[Zt+1].el:P;Qn[A]===0?w(null,ve,E,Da,L,N,j,M,F):_n&&(St<0||A!==Aa[St]?le(ve,E,Da,2):St--)}}},le=(u,h,E,P,L=null)=>{const{el:N,type:j,transition:M,children:F,shapeFlag:A}=u;if(A&6){le(u.component.subTree,h,E,P);return}if(A&128){u.suspense.move(h,E,P);return}if(A&64){j.move(u,h,E,K);return}if(j===Wt){l(N,h,E);for(let Y=0;Y<F.length;Y++)le(F[Y],h,E,P);l(u.anchor,h,E);return}if(j===al){v(u,h,E);return}if(P!==2&&A&1&&M)if(P===0)M.beforeEnter(N),l(N,h,E),Kt(()=>M.enter(N),L);else{const{leave:Y,delayLeave:Q,afterLeave:nt}=M,st=()=>l(N,h,E),ht=()=>{Y(N,()=>{st(),nt&&nt()})};Q?Q(N,st,ht):ht()}else l(N,h,E)},Nt=(u,h,E,P=!1,L=!1)=>{const{type:N,props:j,ref:M,children:F,dynamicChildren:A,shapeFlag:H,patchFlag:Y,dirs:Q}=u;if(M!=null&&xs(M,null,E,u,!0),H&256){h.ctx.deactivate(u);return}const nt=H&1&&Q,st=!Dn(u);let ht;if(st&&(ht=j&&j.onVnodeBeforeUnmount)&&de(ht,h,u),H&6)me(u.component,E,P);else{if(H&128){u.suspense.unmount(E,P);return}nt&&be(u,null,h,"beforeUnmount"),H&64?u.type.remove(u,h,E,L,K,P):A&&(N!==Wt||Y>0&&Y&64)?Rt(A,h,E,!1,!0):(N===Wt&&Y&384||!L&&H&16)&&Rt(F,h,E),P&&Xt(u)}(st&&(ht=j&&j.onVnodeUnmounted)||nt)&&Kt(()=>{ht&&de(ht,h,u),nt&&be(u,null,h,"unmounted")},E)},Xt=u=>{const{type:h,el:E,anchor:P,transition:L}=u;if(h===Wt){Ie(E,P);return}if(h===al){S(u);return}const N=()=>{s(E),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(u.shapeFlag&1&&L&&!L.persisted){const{leave:j,delayLeave:M}=L,F=()=>j(E,N);M?M(u.el,N,F):F()}else N()},Ie=(u,h)=>{let E;for(;u!==h;)E=x(u),s(u),u=E;s(h)},me=(u,h,E)=>{const{bum:P,scope:L,update:N,subTree:j,um:M}=u;P&&ss(P),L.stop(),N&&(N.active=!1,Nt(j,u,h,E)),M&&Kt(M,h),Kt(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Rt=(u,h,E,P=!1,L=!1,N=0)=>{for(let j=N;j<u.length;j++)Nt(u[j],h,E,P,L)},T=u=>u.shapeFlag&6?T(u.component.subTree):u.shapeFlag&128?u.suspense.next():x(u.anchor||u.el);let q=!1;const $=(u,h,E)=>{u==null?h._vnode&&Nt(h._vnode,null,null,!0):w(h._vnode||null,u,h,null,null,null,E),q||(q=!0,$a(),gs(),q=!1),h._vnode=u},K={p:w,um:Nt,m:le,r:Xt,mt:Tt,mc:O,pc:G,pbc:D,n:T,o:t};let it,vt;return e&&([it,vt]=e(K)),{render:$,hydrate:it,createApp:Jy($,it)}}function Xs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ur(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wr(t,e,n=!1){const l=t.children,s=e.children;if(Z(l)&&Z(s))for(let d=0;d<l.length;d++){const a=l[d];let r=s[d];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[d]=Ge(s[d]),r.el=a.el),n||Wr(a,r)),r.type===Nn&&(r.el=a.el)}}function ax(t){const e=t.slice(),n=[0];let l,s,d,a,r;const g=t.length;for(l=0;l<g;l++){const f=t[l];if(f!==0){if(s=n[n.length-1],t[s]<f){e[l]=s,n.push(l);continue}for(d=0,a=n.length-1;d<a;)r=d+a>>1,t[n[r]]<f?d=r+1:a=r;f<t[n[d]]&&(d>0&&(e[l]=n[d-1]),n[d]=l)}}for(d=n.length,a=n[d-1];d-- >0;)n[d]=a,a=e[a];return n}function Gr(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gr(e)}const ix=t=>t.__isTeleport,Wt=Symbol.for("v-fgt"),Nn=Symbol.for("v-txt"),ee=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),il=[];let pe=null;function Kr(t=!1){il.push(pe=t?null:[])}function rx(){il.pop(),pe=il[il.length-1]||null}let ul=1;function Za(t){ul+=t}function Jr(t){return t.dynamicChildren=ul>0?pe||Sn:null,rx(),ul>0&&pe&&pe.push(t),t}function S0(t,e,n,l,s,d){return Jr(Xr(t,e,n,l,s,d,!0))}function Qr(t,e,n,l,s){return Jr(Pt(t,e,n,l,s,!0))}function cs(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Ds="__vInternal",Yr=({key:t})=>t??null,ds=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Dt(t)||jt(t)||lt(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function Xr(t,e=null,n=null,l=0,s=null,d=t===Wt?0:1,a=!1,r=!1){const g={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yr(e),ref:e&&ds(e),scopeId:Ls,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:l,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return r?(aa(g,n),d&128&&t.normalize(g)):n&&(g.shapeFlag|=Dt(n)?8:16),ul>0&&!a&&pe&&(g.patchFlag>0||d&6)&&g.patchFlag!==32&&pe.push(g),g}const Pt=fx;function fx(t,e=null,n=null,l=0,s=null,d=!1){if((!t||t===wy)&&(t=ee),cs(t)){const r=Xe(t,e,!0);return n&&aa(r,n),ul>0&&!d&&pe&&(r.shapeFlag&6?pe[pe.indexOf(t)]=r:pe.push(r)),r.patchFlag|=-2,r}if(bx(t)&&(t=t.__vccOpts),e){e=gx(e);let{class:r,style:g}=e;r&&!Dt(r)&&(e.class=Es(r)),_t(g)&&(vr(g)&&!Z(g)&&(g=Mt({},g)),e.style=ws(g))}const a=Dt(t)?1:Cy(t)?128:ix(t)?64:_t(t)?4:lt(t)?2:0;return Xr(t,e,n,l,s,a,d,!0)}function gx(t){return t?vr(t)||Ds in t?Mt({},t):t:null}function Xe(t,e,n=!1){const{props:l,ref:s,patchFlag:d,children:a}=t,r=e?ox(l||{},e):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:r,key:r&&Yr(r),ref:e&&e.ref?n&&s?Z(s)?s.concat(ds(e)):[s,ds(e)]:ds(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?d===-1?16:d|16:d,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xe(t.ssContent),ssFallback:t.ssFallback&&Xe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Zr(t=" ",e=0){return Pt(Nn,null,t,e)}function T0(t,e){const n=Pt(al,null,t);return n.staticCount=e,n}function L0(t="",e=!1){return e?(Kr(),Qr(ee,null,t)):Pt(ee,null,t)}function ce(t){return t==null||typeof t=="boolean"?Pt(ee):Z(t)?Pt(Wt,null,t.slice()):typeof t=="object"?Ge(t):Pt(Nn,null,String(t))}function Ge(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xe(t)}function aa(t,e){let n=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(l&65){const s=e.default;s&&(s._c&&(s._d=!1),aa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ds in e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else lt(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),l&64?(n=16,e=[Zr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ox(...t){const e={};for(let n=0;n<t.length;n++){const l=t[n];for(const s in l)if(s==="class")e.class!==l.class&&(e.class=Es([e.class,l.class]));else if(s==="style")e.style=ws([e.style,l.style]);else if(wl(s)){const d=e[s],a=l[s];a&&d!==a&&!(Z(d)&&d.includes(a))&&(e[s]=d?[].concat(d,a):a)}else s!==""&&(e[s]=l[s])}return e}function de(t,e,n,l=null){re(t,e,7,[n,l])}const yx=Fr();let xx=0;function cx(t,e,n){const l=t.type,s=(e?e.appContext:t.appContext)||yx,d={uid:xx++,vnode:t,type:l,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$r(l,s),emitsOptions:Sr(l,s),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:l.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=e?e.root:d,d.emit=hy.bind(null,d),t.ce&&t.ce(d),d}let zt=null;const Gn=()=>zt||Bt;let ps,Sd;{const t=lr(),e=(n,l)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(l),d=>{s.length>1?s.forEach(a=>a(d)):s[0](d)}};ps=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),Sd=e("__VUE_SSR_SETTERS__",n=>Ll=n)}const Tl=t=>{const e=zt;return ps(t),t.scope.on(),()=>{t.scope.off(),ps(e)}},ti=()=>{zt&&zt.scope.off(),ps(null)};function tf(t){return t.vnode.shapeFlag&4}let Ll=!1;function px(t,e=!1){e&&Sd(e);const{props:n,children:l}=t.vnode,s=tf(t);Qy(t,n,s,e),Zy(t,l);const d=s?ux(t,e):void 0;return e&&Sd(!1),d}function ux(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=br(new Proxy(t.ctx,jy));const{setup:l}=n;if(l){const s=t.setupContext=l.length>1?mx(t):null,d=Tl(t);pn();const a=Ye(l,t,0,[t.props,s]);if(un(),d(),tr(a)){if(a.then(ti,ti),e)return a.then(r=>{ei(t,r,e)}).catch(r=>{Il(r,t,0)});t.asyncDep=a}else ei(t,a,e)}else ef(t,e)}function ei(t,e,n){lt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_t(e)&&(t.setupState=wr(e)),ef(t,n)}let ni;function ef(t,e,n){const l=t.type;if(!t.render){if(!e&&ni&&!l.render){const s=l.template||sa(t).template;if(s){const{isCustomElement:d,compilerOptions:a}=t.appContext.config,{delimiters:r,compilerOptions:g}=l,f=Mt(Mt({isCustomElement:d,delimiters:r},a),g);l.render=ni(s,f)}}t.render=l.render||ie}{const s=Tl(t);pn();try{qy(t)}finally{un(),s()}}}function hx(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}}))}function mx(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return hx(t)},slots:t.slots,emit:t.emit,expose:e}}function Os(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wr(br(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sl)return sl[n](t)},has(e,n){return n in e||n in sl}}))}function vx(t,e=!0){return lt(t)?t.displayName||t.name:t.name||e&&t.__name}function bx(t){return lt(t)&&"__vccOpts"in t}const k=(t,e)=>dy(t,e,Ll);function P0(t,e,n=kt){const l=Gn(),s=ne(e),d=Ze(e),a=Is((g,f)=>{let o;return Ty(()=>{const y=t[e];we(o,y)&&(o=y,f())}),{get(){return g(),n.get?n.get(o):o},set(y){const x=l.vnode.props;!(x&&(e in x||s in x||d in x)&&(`onUpdate:${e}`in x||`onUpdate:${s}`in x||`onUpdate:${d}`in x))&&we(y,o)&&(o=y,f()),l.emit(`update:${e}`,n.set?n.set(y):y)}}}),r=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return a[Symbol.iterator]=()=>{let g=0;return{next(){return g<2?{value:g++?t[r]||{}:a,done:!1}:{done:!0}}}},a}function i(t,e,n){const l=arguments.length;return l===2?_t(e)&&!Z(e)?cs(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&cs(n)&&(n=[n]),Pt(t,e,n))}const nf="3.4.20";/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kx="http://www.w3.org/2000/svg",_x="http://www.w3.org/1998/Math/MathML",Ke=typeof document<"u"?document:null,li=Ke&&Ke.createElement("template"),wx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,l)=>{const s=e==="svg"?Ke.createElementNS(kx,t):e==="mathml"?Ke.createElementNS(_x,t):Ke.createElement(t,n?{is:n}:void 0);return t==="select"&&l&&l.multiple!=null&&s.setAttribute("multiple",l.multiple),s},createText:t=>Ke.createTextNode(t),createComment:t=>Ke.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ke.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,l,s,d){const a=n?n.previousSibling:e.lastChild;if(s&&(s===d||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===d||!(s=s.nextSibling)););else{li.innerHTML=l==="svg"?`<svg>${t}</svg>`:l==="mathml"?`<math>${t}</math>`:t;const r=li.content;if(l==="svg"||l==="mathml"){const g=r.firstChild;for(;g.firstChild;)r.appendChild(g.firstChild);r.removeChild(g)}e.insertBefore(r,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$e="transition",Yn="animation",Fn=Symbol("_vtc"),Oe=(t,{slots:e})=>i(Ay,sf(t),e);Oe.displayName="Transition";const lf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ex=Oe.props=Mt({},Dr,lf),sn=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},si=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function sf(t){const e={};for(const R in t)R in lf||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:l,duration:s,enterFromClass:d=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:g=d,appearActiveClass:f=a,appearToClass:o=r,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:x=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=Cx(s),w=m&&m[0],_=m&&m[1],{onBeforeEnter:b,onEnter:C,onEnterCancelled:v,onLeave:S,onLeaveCancelled:V,onBeforeAppear:I=b,onAppear:B=C,onAppearCancelled:O=v}=e,J=(R,tt,Tt)=>{qe(R,tt?o:r),qe(R,tt?f:a),Tt&&Tt()},D=(R,tt)=>{R._isLeaving=!1,qe(R,y),qe(R,p),qe(R,x),tt&&tt()},U=R=>(tt,Tt)=>{const It=R?B:C,W=()=>J(tt,R,Tt);sn(It,[tt,W]),di(()=>{qe(tt,R?g:d),Te(tt,R?o:r),si(It)||ai(tt,l,w,W)})};return Mt(e,{onBeforeEnter(R){sn(b,[R]),Te(R,d),Te(R,a)},onBeforeAppear(R){sn(I,[R]),Te(R,g),Te(R,f)},onEnter:U(!1),onAppear:U(!0),onLeave(R,tt){R._isLeaving=!0;const Tt=()=>D(R,tt);Te(R,y),af(),Te(R,x),di(()=>{R._isLeaving&&(qe(R,y),Te(R,p),si(S)||ai(R,l,_,Tt))}),sn(S,[R,Tt])},onEnterCancelled(R){J(R,!1),sn(v,[R])},onAppearCancelled(R){J(R,!0),sn(O,[R])},onLeaveCancelled(R){D(R),sn(V,[R])}})}function Cx(t){if(t==null)return null;if(_t(t))return[Zs(t.enter),Zs(t.leave)];{const e=Zs(t);return[e,e]}}function Zs(t){return Lo(t)}function Te(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Fn]||(t[Fn]=new Set)).add(e)}function qe(t,e){e.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const n=t[Fn];n&&(n.delete(e),n.size||(t[Fn]=void 0))}function di(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ix=0;function ai(t,e,n,l){const s=t._endId=++Ix,d=()=>{s===t._endId&&l()};if(n)return setTimeout(d,n);const{type:a,timeout:r,propCount:g}=df(t,e);if(!a)return l();const f=a+"end";let o=0;const y=()=>{t.removeEventListener(f,x),d()},x=p=>{p.target===t&&++o>=g&&y()};setTimeout(()=>{o<g&&y()},r+1),t.addEventListener(f,x)}function df(t,e){const n=window.getComputedStyle(t),l=m=>(n[m]||"").split(", "),s=l(`${$e}Delay`),d=l(`${$e}Duration`),a=ii(s,d),r=l(`${Yn}Delay`),g=l(`${Yn}Duration`),f=ii(r,g);let o=null,y=0,x=0;e===$e?a>0&&(o=$e,y=a,x=d.length):e===Yn?f>0&&(o=Yn,y=f,x=g.length):(y=Math.max(a,f),o=y>0?a>f?$e:Yn:null,x=o?o===$e?d.length:g.length:0);const p=o===$e&&/\b(transform|all)(,|$)/.test(l(`${$e}Property`).toString());return{type:o,timeout:y,propCount:x,hasTransform:p}}function ii(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,l)=>ri(n)+ri(t[l])))}function ri(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function af(){return document.body.offsetHeight}function Sx(t,e,n){const l=t[Fn];l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const us=Symbol("_vod"),rf=Symbol("_vsh"),A0={beforeMount(t,{value:e},{transition:n}){t[us]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:l}){!e!=!n&&(l?e?(l.beforeEnter(t),Xn(t,!0),l.enter(t)):l.leave(t,()=>{Xn(t,!1)}):Xn(t,e))},beforeUnmount(t,{value:e}){Xn(t,e)}};function Xn(t,e){t.style.display=e?t[us]:"none",t[rf]=!e}const Tx=Symbol(""),Lx=/(^|;)\s*display\s*:/;function Px(t,e,n){const l=t.style,s=Dt(n);let d=!1;if(n&&!s){if(e)if(Dt(e))for(const a of e.split(";")){const r=a.slice(0,a.indexOf(":")).trim();n[r]==null&&as(l,r,"")}else for(const a in e)n[a]==null&&as(l,a,"");for(const a in n)a==="display"&&(d=!0),as(l,a,n[a])}else if(s){if(e!==n){const a=l[Tx];a&&(n+=";"+a),l.cssText=n,d=Lx.test(n)}}else e&&t.removeAttribute("style");us in t&&(t[us]=d?l.display:"",t[rf]&&(l.display="none"))}const fi=/\s*!important$/;function as(t,e,n){if(Z(n))n.forEach(l=>as(t,e,l));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const l=Ax(t,e);fi.test(n)?t.setProperty(Ze(l),n.replace(fi,""),"important"):t[l]=n}}const gi=["Webkit","Moz","ms"],td={};function Ax(t,e){const n=td[e];if(n)return n;let l=ne(e);if(l!=="filter"&&l in t)return td[e]=l;l=El(l);for(let s=0;s<gi.length;s++){const d=gi[s]+l;if(d in t)return td[e]=d}return e}const oi="http://www.w3.org/1999/xlink";function Dx(t,e,n,l,s){if(l&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(oi,e.slice(6,e.length)):t.setAttributeNS(oi,e,n);else{const d=Mo(e);n==null||d&&!sr(n)?t.removeAttribute(e):t.setAttribute(e,d?"":n)}}function Ox(t,e,n,l,s,d,a){if(e==="innerHTML"||e==="textContent"){l&&a(l,s,d),t[e]=n??"";return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){t._value=n;const f=r==="OPTION"?t.getAttribute("value")||"":t.value,o=n??"";f!==o&&(t.value=o),n==null&&t.removeAttribute(e);return}let g=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=sr(n):n==null&&f==="string"?(n="",g=!0):f==="number"&&(n=0,g=!0)}try{t[e]=n}catch{}g&&t.removeAttribute(e)}function En(t,e,n,l){t.addEventListener(e,n,l)}function Rx(t,e,n,l){t.removeEventListener(e,n,l)}const yi=Symbol("_vei");function Mx(t,e,n,l,s=null){const d=t[yi]||(t[yi]={}),a=d[e];if(l&&a)a.value=l;else{const[r,g]=Vx(e);if(l){const f=d[e]=Fx(l,s);En(t,r,f,g)}else a&&(Rx(t,r,a,g),d[e]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function Vx(t){let e;if(xi.test(t)){e={};let l;for(;l=t.match(xi);)t=t.slice(0,t.length-l[0].length),e[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ze(t.slice(2)),e]}let ed=0;const Bx=Promise.resolve(),Nx=()=>ed||(Bx.then(()=>ed=0),ed=Date.now());function Fx(t,e){const n=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=n.attached)return;re(zx(l,n.value),e,5,[l])};return n.value=t,n.attached=Nx(),n}function zx(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(l=>s=>!s._stopped&&l&&l(s))}else return e}const ci=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$x=(t,e,n,l,s,d,a,r,g)=>{const f=s==="svg";e==="class"?Sx(t,l,f):e==="style"?Px(t,n,l):wl(e)?Hd(e)||Mx(t,e,n,l,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jx(t,e,l,f))?Ox(t,e,l,d,a,r,g):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),Dx(t,e,l,f))};function jx(t,e,n,l){if(l)return!!(e==="innerHTML"||e==="textContent"||e in t&&ci(e)&&lt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ci(e)&&Dt(n)?!1:e in t}const ff=new WeakMap,gf=new WeakMap,hs=Symbol("_moveCb"),pi=Symbol("_enterCb"),of={name:"TransitionGroup",props:Mt({},Ex,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gn(),l=Ar();let s,d;return Mr(()=>{if(!s.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!Kx(s[0].el,n.vnode.el,a))return;s.forEach(Ux),s.forEach(Wx);const r=s.filter(Gx);af(),r.forEach(g=>{const f=g.el,o=f.style;Te(f,a),o.transform=o.webkitTransform=o.transitionDuration="";const y=f[hs]=x=>{x&&x.target!==f||(!x||/transform$/.test(x.propertyName))&&(f.removeEventListener("transitionend",y),f[hs]=null,qe(f,a))};f.addEventListener("transitionend",y)})}),()=>{const a=at(t),r=sf(a);let g=a.tag||Wt;s=d,d=e.default?la(e.default()):[];for(let f=0;f<d.length;f++){const o=d[f];o.key!=null&&pl(o,cl(o,r,l,n))}if(s)for(let f=0;f<s.length;f++){const o=s[f];pl(o,cl(o,r,l,n)),ff.set(o,o.el.getBoundingClientRect())}return Pt(g,null,d)}}},qx=t=>delete t.mode;of.props;const Hx=of;function Ux(t){const e=t.el;e[hs]&&e[hs](),e[pi]&&e[pi]()}function Wx(t){gf.set(t,t.el.getBoundingClientRect())}function Gx(t){const e=ff.get(t),n=gf.get(t),l=e.left-n.left,s=e.top-n.top;if(l||s){const d=t.el.style;return d.transform=d.webkitTransform=`translate(${l}px,${s}px)`,d.transitionDuration="0s",t}}function Kx(t,e,n){const l=t.cloneNode(),s=t[Fn];s&&s.forEach(r=>{r.split(/\s+/).forEach(g=>g&&l.classList.remove(g))}),n.split(/\s+/).forEach(r=>r&&l.classList.add(r)),l.style.display="none";const d=e.nodeType===1?e:e.parentNode;d.appendChild(l);const{hasTransform:a}=df(l);return d.removeChild(l),a}const ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>ss(e,n):e};function Jx(t){t.target.composing=!0}function hi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nd=Symbol("_assign"),D0={created(t,{modifiers:{lazy:e,trim:n,number:l}},s){t[nd]=ui(s);const d=l||s.props&&s.props.type==="number";En(t,e?"change":"input",a=>{if(a.target.composing)return;let r=t.value;n&&(r=r.trim()),d&&(r=md(r)),t[nd](r)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",Jx),En(t,"compositionend",hi),En(t,"change",hi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:l,number:s}},d){if(t[nd]=ui(d),t.composing)return;const a=s||t.type==="number"?md(t.value):t.value,r=e??"";a!==r&&(document.activeElement===t&&t.type!=="range"&&(n||l&&t.value.trim()===r)||(t.value=r))}},Qx=["ctrl","shift","alt","meta"],Yx={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qx.some(n=>t[`${n}Key`]&&!e.includes(n))},O0=(t,e)=>{const n=t._withMods||(t._withMods={}),l=e.join(".");return n[l]||(n[l]=(s,...d)=>{for(let a=0;a<e.length;a++){const r=Yx[e[a]];if(r&&r(s,e))return}return t(s,...d)})},Xx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},R0=(t,e)=>{const n=t._withKeys||(t._withKeys={}),l=e.join(".");return n[l]||(n[l]=s=>{if(!("key"in s))return;const d=Ze(s.key);if(e.some(a=>a===d||Xx[a]===d))return t(s)})},Zx=Mt({patchProp:$x},wx);let ld,mi=!1;function tc(){return ld=mi?ld:sx(Zx),mi=!0,ld}const ec=(...t)=>{const e=tc().createApp(...t),{mount:n}=e;return e.mount=l=>{const s=lc(l);if(s)return n(s,!0,nc(s))},e};function nc(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lc(t){return Dt(t)?document.querySelector(t):t}var sc=["link","meta","script","style","noscript","template"],dc=["title","base"],ac=([t,e,n])=>dc.includes(t)?t:sc.includes(t)?t==="meta"&&e.name?`${t}.${e.name}`:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,Object.entries(e).map(([l,s])=>typeof s=="boolean"?s?[l,""]:null:[l,s]).filter(l=>l!=null).sort(([l],[s])=>l.localeCompare(s)),n]):null,ic=t=>{const e=new Set,n=[];return t.forEach(l=>{const s=ac(l);s&&!e.has(s)&&(e.add(s),n.push(l))}),n},rc=t=>t[0]==="/"?t:`/${t}`,yf=t=>t[t.length-1]==="/"||t.endsWith(".html")?t:`${t}/`,Ve=t=>/^(https?:)?\/\//.test(t),fc=/.md((\?|#).*)?$/,zn=(t,e="/")=>!!(Ve(t)||t.startsWith("/")&&!t.startsWith(e)&&!fc.test(t)),xf=t=>/^[a-z][a-z0-9+.-]*:/.test(t),Ae=t=>Object.prototype.toString.call(t)==="[object Object]",gc=t=>{const[e,...n]=t.split(/(\?|#)/);if(!e||e.endsWith("/"))return t;let l=e.replace(/(^|\/)README.md$/i,"$1index.html");return l.endsWith(".md")?l=l.substring(0,l.length-3)+".html":l.endsWith(".html")||(l=l+".html"),l.endsWith("/index.html")&&(l=l.substring(0,l.length-10)),l+n.join("")},Rs=t=>t[t.length-1]==="/"?t.slice(0,-1):t,cf=t=>t[0]==="/"?t.slice(1):t,oc=(t,e)=>{const n=Object.keys(t).sort((l,s)=>{const d=s.split("/").length-l.split("/").length;return d!==0?d:s.length-l.length});for(const l of n)if(e.startsWith(l))return l;return"/"},yc=t=>typeof t=="function",Lt=t=>typeof t=="string";const xc="modulepreload",cc=function(t){return"/"+t},vi={},c=function(e,n,l){let s=Promise.resolve();if(n&&n.length>0){const d=document.getElementsByTagName("link");s=Promise.all(n.map(a=>{if(a=cc(a),a in vi)return;vi[a]=!0;const r=a.endsWith(".css"),g=r?'[rel="stylesheet"]':"";if(!!l)for(let y=d.length-1;y>=0;y--){const x=d[y];if(x.href===a&&(!r||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${g}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":xc,r||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),r)return new Promise((y,x)=>{o.addEventListener("load",y),o.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(d=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=d,window.dispatchEvent(a),!a.defaultPrevented)throw d})},pc=JSON.parse("{}"),uc=Object.fromEntries([["/",{loader:()=>c(()=>import("./index.html-Dyn4XJbr.js"),__vite__mapDeps([0,1])),meta:{y:"h",t:"主页",i:"/assets/svg/home.svg"}}],["/about/",{loader:()=>c(()=>import("./index.html-CMoJnN1l.js"),__vite__mapDeps([2,1])),meta:{d:16848e8,l:"2023年5月23日",e:`<p>一个基于 VuePress 的个人博客，主要记录日常生活、开发问题和一些笔记。</p>
<h2>服务支持</h2>
`,r:{minutes:.62,words:187},y:"a",t:"关于",i:"/assets/svg/me.svg"}}],["/books/",{loader:()=>c(()=>import("./index.html-C6HDoYLz.js"),__vite__mapDeps([3,1])),meta:{d:1687231704e3,c:["书籍"],g:["增广贤文"],u:99999,e:`<p>昔 时 贤 文 , 诲 汝 谆 谆 , 集 韵 增 文 , 多 见 多 闻 。</p>
<p>观 今 宜 鉴 古 , 无 古 不 成 今 。</p>
<p>知 己 知 彼 , 将 心 比 心 。</p>
<p>酒 逢 知 己 饮 , 诗 向 会 人 吟 。</p>
<p>相 识 满 天 下 , 知 心 能 几 人 。</p>
<p>相 逢 好 似 初 相 识 , 到 老 终 无 怨 恨 心 。</p>
<p>近 水 知 鱼 性 , 近 山 识 鸟 音 。</p>
<p>易 涨 易 退 山 溪 水 , 易 反 易 覆 小 人 心 。</p>
<p>运 去 金 成 铁 , 时 来 铁 似 金 , 读 书 须 用 意 , 一 字 值 千 金 。</p>`,r:{minutes:12.79,words:3836},y:"a",t:"增广贤文",i:"/assets/svg/book.svg"}}],["/cs/",{loader:()=>c(()=>import("./index.html-DVVqNaaX.js"),__vite__mapDeps([4,1])),meta:{y:"p",t:"桌面端"}}],["/hope/",{loader:()=>c(()=>import("./index.html-BR2ZqeQ9.js"),__vite__mapDeps([5,1])),meta:{d:16847392e5,c:["Neverland"],v:"/assets/images/cover3.jpg",e:`<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> <a href="https://nas.ilyl.life:8091/" target="_blank" rel="noopener noreferrer">家庭影院</a></label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> <a href="https://nas.ilyl.life:8089/audio" target="_blank" rel="noopener noreferrer">音乐电台</a></label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> <a href="https://nas.ilyl.life:8089/file/" target="_blank" rel="noopener noreferrer">网盘</a></label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> <a href="https://nas.ilyl.life:8092/default.png" target="_blank" rel="noopener noreferrer">图床</a></label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> <a href="https://docker.ilyl.life:8094" target="_blank" rel="noopener noreferrer">Docker私库</a></label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> NAS接口</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 基于NAS接口的移动端APP</label></p>
</li>
</ul>`,r:{minutes:.21,words:64},y:"a",t:"梦幻岛",i:"/assets/svg/island2.svg"}}],["/tools/regular-expressions.html",{loader:()=>c(()=>import("./regular-expressions.html-DqUxApc-.js"),__vite__mapDeps([6,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["正则表达式"],o:!0,e:`<h2>快速参考</h2>
<table>
<thead>
<tr>
<th style="text-align:left">用法</th>
<th style="text-align:left">匹配内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">a|b</td>
<td style="text-align:left">匹配a或b</td>
</tr>
<tr>
<td style="text-align:left">gr(a|e)y</td>
<td style="text-align:left">匹配gray或grey</td>
</tr>
<tr>
<td style="text-align:left">.</td>
<td style="text-align:left">匹配任一字符</td>
</tr>
<tr>
<td style="text-align:left">[abc]</td>
<td style="text-align:left">匹配任意字符:a或b或c</td>
</tr>
<tr>
<td style="text-align:left">[^abc]</td>
<td style="text-align:left">匹配任一字符,但不包括a,b,c</td>
</tr>
<tr>
<td style="text-align:left">a-z</td>
<td style="text-align:left">匹配从a到z之间的任一字符</td>
</tr>
<tr>
<td style="text-align:left">a-zA-Z</td>
<td style="text-align:left">匹配从a到z,及A到Z之间的任一字符</td>
</tr>
<tr>
<td style="text-align:left">^</td>
<td style="text-align:left">匹配文件名的头部</td>
</tr>
<tr>
<td style="text-align:left">$</td>
<td style="text-align:left">匹配文件名的尾部</td>
</tr>
<tr>
<td style="text-align:left">()</td>
<td style="text-align:left">匹配标记的子表达式</td>
</tr>
<tr>
<td style="text-align:left">\\n</td>
<td style="text-align:left">匹配第nth个标记的子表达式,nth代表1到9</td>
</tr>
<tr>
<td style="text-align:left">\\b</td>
<td style="text-align:left">匹配字词边界</td>
</tr>
<tr>
<td style="text-align:left">*</td>
<td style="text-align:left">匹配前一项内容0或多次</td>
</tr>
<tr>
<td style="text-align:left">?</td>
<td style="text-align:left">匹配前一项内容0或1次</td>
</tr>
<tr>
<td style="text-align:left">+</td>
<td style="text-align:left">匹配前一项内容1或多次</td>
</tr>
<tr>
<td style="text-align:left">*?</td>
<td style="text-align:left">匹配前一项内容0或多次(懒人模式)</td>
</tr>
<tr>
<td style="text-align:left">+?</td>
<td style="text-align:left">匹配前一项内容1或多次(懒人模式)</td>
</tr>
<tr>
<td style="text-align:left">{x}</td>
<td style="text-align:left">匹配前一项内容x次</td>
</tr>
<tr>
<td style="text-align:left">{x,}</td>
<td style="text-align:left">匹配前一项内容x或多次</td>
</tr>
<tr>
<td style="text-align:left">{x,y}</td>
<td style="text-align:left">匹配前一项内容次数介于x和y之间</td>
</tr>
<tr>
<td style="text-align:left">\\</td>
<td style="text-align:left">特殊转义字符</td>
</tr>
</tbody>
</table>`,r:{minutes:.99,words:297},y:"a",t:"正则表达式",i:"/assets/svg/regular-expression.svg",O:1}}],["/web/",{loader:()=>c(()=>import("./index.html-NtoNHsaJ.js"),__vite__mapDeps([7,1])),meta:{y:"p",t:"Web"}}],["/web/download.html",{loader:()=>c(()=>import("./download.html-BKS9gwFz.js"),__vite__mapDeps([8,1])),meta:{d:16933536e5,l:"2023年8月30日",c:["Web"],o:!0,e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在部署时，上传或者下载时需要设置以下两个方面，以IIS为例</p>
<ol>
<li>设置<code>MIME类型</code></li>
<li>设置网站权限</li>
<li>设置文件大小</li>
</ol>
</div>
<p>Web端下载有几种方式：</p>
<ol>
<li>后端提供文件下载地址</li>
<li>后端提供文件流</li>
<li>前端自己组织数据下载</li>
</ol>
<h2>后端提供文件下载地址</h2>
<h3><a class="header-anchor" href="#location-href"><span></span></a><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Location/href" target="_blank" rel="noopener noreferrer">location.href</a></h3>`,r:{minutes:1.5,words:449},y:"a",t:"Web下载"}}],["/web/lint.html",{loader:()=>c(()=>import("./lint.html-Ye_gxSeE.js"),__vite__mapDeps([9,1])),meta:{d:16860096e5,l:"2023年6月6日",c:["Web"],g:["ESLint","prettier","stylelint","husky","nano-staged","commitlint"],o:!0,e:`<p>项目提交规范涉及以下几个包</p>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">包名</th>
<th style="text-align:left">简介</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left"><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a></td>
<td style="text-align:left">检查js问题并修复</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier</a></td>
<td style="text-align:left">格式化代码</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">stylelint</a></td>
<td style="text-align:left">检查css问题并修复</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><a href="https://typicode.github.io/husky/" target="_blank" rel="noopener noreferrer">husky</a></td>
<td style="text-align:left">Git钩子</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left"><a href="https://github.com/usmanyunusov/nano-staged#readme" target="_blank" rel="noopener noreferrer">nano-staged</a></td>
<td style="text-align:left">轻量级的,将检查范围定位在提交的文件中,同<a href="https://github.com/okonet/lint-staged#readme" target="_blank" rel="noopener noreferrer">lint-staged</a></td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left"><a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">commitlint</a></td>
<td style="text-align:left">配置提交约定</td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left"><a href="https://www.npmjs.com/package/@commitlint/cz-commitlint" target="_blank" rel="noopener noreferrer">cz-commitlint</a></td>
<td style="text-align:left">提交时选择</td>
</tr>
</tbody>
</table>`,r:{minutes:3.09,words:926},y:"a",t:"规范约束",O:1}}],["/web/npm.html",{loader:()=>c(()=>import("./npm.html-B2tW5pEd.js"),__vite__mapDeps([10,1])),meta:{d:16998336e5,l:"2023年11月13日",c:["Web"],o:!0,e:`<p>经常会出现NPM升级的问题，无论是全局升级<code>npm up -g npm@latest</code>还是局部升级<code>npm up npm@latest</code></p>
<p>升级成功，但是查询版本号时<code>npm -v</code>还是老版本。</p>
<p>网上很多说路径问题，但是怎么改都无效，其实该问题在<a href="https://docs.npmjs.com/try-the-latest-stable-version-of-npm#upgrading-on-windows" target="_blank" rel="noopener noreferrer">npm升级</a>文档已说明。</p>`,r:{minutes:.62,words:186},y:"a",t:"NPM更新"}}],["/web/proxy.html",{loader:()=>c(()=>import("./proxy.html-DEWsvhMJ.js"),__vite__mapDeps([11,1])),meta:{d:16928352e5,l:"2023年8月24日",c:["Web"],g:["IIS","反向代理","跨域"],o:!0,e:`<p>第三方<code>Https</code>接口不支持跨域，前端又想调用。</p>
<p>在Vite开发环境中，<code>vite.config.ts</code>配置了<a href="https://cn.vitejs.dev/config/server-options.html#server-proxy" target="_blank" rel="noopener noreferrer">代理</a>正常访问，如下，但是生产环境又不行了...</p>
<div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineApplicationConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  overrides<span class="token operator">:</span> <span class="token punctuation">{</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'/proxy-api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">'XXXXXXXXXX'</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/proxy-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:4.27,words:1281},y:"a",t:"反向代理"}}],["/web/rsa.html",{loader:()=>c(()=>import("./rsa.html-D9uypEt9.js"),__vite__mapDeps([12,1])),meta:{d:16932672e5,l:"2023年8月29日",c:["Web"],g:["RSA"],o:!0,e:`<p>前端需要RSA加密，使用<code>JSEncrypt</code>加密对长文本支持不友好，<code>Encryptlong</code>在<code>JSEncrypt</code>基础上进行了扩展。</p>
<p>但是实际情况是前端利用公钥加密，后端私钥加密，前端需要公钥解密。</p>
<p>因此在<code>Encryptlong</code>的基础上继续扩展，支持以下功能</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 中文长文本加解密</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 公钥解密</label></li>
</ul>`,r:{minutes:4.21,words:1264},y:"a",t:"RSA"}}],["/web/upload-sortable.html",{loader:()=>c(()=>import("./upload-sortable.html-Gkngq1vW.js"),__vite__mapDeps([13,1])),meta:{d:16937856e5,l:"2023年9月4日",c:["Web"],o:!0,e:`<p>在使用<code>ant-design-vue</code>上传组件与<code>sortablejs</code>排序组合时，为了实现上传图片后可以排序时，出现了一些问题。</p>
<ol>
<li>vue获取不到上传组件的实例，即<code>ref</code>始终为null。</li>
<li>sortablejs有排序效果，但是vue绑定的图片数据未变动。</li>
<li>在sortablejs里添加事件处理图片数据顺序，但是排序效果失效。</li>
<li>上传成功显示的预览图片，很小又模糊，除非再次点击预览。</li>
</ol>
<p>为了解决这些问题，使用<code>document</code>对象操作。</p>`,r:{minutes:2.17,words:651},y:"a",t:"上传与排序"}}],["/cs/cpp/",{loader:()=>c(()=>import("./index.html-Cx4uq4s_.js"),__vite__mapDeps([14,1])),meta:{y:"p",t:"C++",i:"/assets/svg/cpp.svg"}}],["/cs/cpp/array.html",{loader:()=>c(()=>import("./array.html-aafPwf-6.js"),__vite__mapDeps([15,1])),meta:{d:16859232e5,l:"2023年6月5日",c:["C++"],g:["C++"],o:!0,e:`<p>类型<code>&amp;</code>,将值类型改为引用类型。</p>
<div class="language-c++" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int a[] = { 1,2,3,4 };
int* b = a;
int&amp; c = a[0];
(&amp;c)[1] = 4;
copy(a, a + 4, ostream_iterator&lt;int&gt;(cout," "));
cout &lt;&lt; endl;
int* d = &amp;a[2];
*(d+1) = 8;
copy(a, a + 4, ostream_iterator&lt;int&gt;(cout," "));
cout &lt;&lt; endl;

//输出
1 4 3 4
1 4 6 8
</code></pre></div>`,r:{minutes:.96,words:289},y:"a",t:"数组",O:3}}],["/cs/cpp/ref.html",{loader:()=>c(()=>import("./ref.html-DZy55Qez.js"),__vite__mapDeps([16,1])),meta:{d:16855776e5,l:"2023年6月1日",c:["C++"],g:["C++"],o:!0,e:`<p>类型<code>&amp;</code>,将值类型改为引用类型。</p>
<div class="language-c++" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int a = 123;
int&amp; b = a;
b = 456;
cout &lt;&lt;"a:" &lt;&lt; a &lt;&lt;" 引用b：" &lt;&lt; b &lt;&lt; endl;
a = 789;
cout &lt;&lt; "a:" &lt;&lt; a &lt;&lt; " 引用b：" &lt;&lt; b &lt;&lt; endl;

//输出
a:456 引用b：456
a:789 引用b：789
</code></pre></div>`,r:{minutes:.26,words:77},y:"a",t:"引用变量",O:2}}],["/cs/cpp/variable.html",{loader:()=>c(()=>import("./variable.html-B0EjX8z1.js"),__vite__mapDeps([17,1])),meta:{d:16855776e5,l:"2023年6月1日",c:["C++"],g:["C++"],o:!0,e:`<p><code>普通类型</code>、<a href="/cs/cpp/ref.html" target="_blank">引用类型(&amp;)</a>、<code>指针类型(*)</code>的区别。</p>
<p><code>&amp;</code>取地址，标明不显示直接值，而是显示该值下的存储地址值。
<code>*</code>指针，存储的是计算机地址。</p>
<div class="language-c++" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int a = 123;
int&amp; b = a;
int* c = &amp;b;
*c = 456;
cout &lt;&lt;"a:" &lt;&lt; a &lt;&lt;" 引用b：" &lt;&lt; b &lt;&lt; " 指针c: " &lt;&lt;*c&lt;&lt; endl;
a = 789;
cout &lt;&lt; "a:" &lt;&lt; a &lt;&lt; " 引用b：" &lt;&lt; b &lt;&lt; " 指针c: " &lt;&lt; *c &lt;&lt; endl;

//输出
a:456 引用b：456 指针c: 456
a:789 引用b：789 指针c: 789
</code></pre></div>`,r:{minutes:1.08,words:323},y:"a",t:"类型变量",O:1}}],["/cs/design-pattern/",{loader:()=>c(()=>import("./index.html-63W0UjQw.js"),__vite__mapDeps([18,1])),meta:{y:"p",t:"设计模式",i:"/assets/svg/design.svg"}}],["/cs/design-pattern/abstract-factory.html",{loader:()=>c(()=>import("./abstract-factory.html-BJ7PAuth.js"),__vite__mapDeps([19,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>AbstractFactory(<code>ContinentFactory</code>)</p>
<ul>
<li>为创建抽象产品的操作声明一个接口。</li>
</ul>
</li>
<li>
<p>ConcreteFactory(<code>AfricaFacotry</code>,<code>AmericaFactory</code>)</p>
<ul>
<li>实现创建具体产品对象的操作。</li>
</ul>
</li>
<li>
<p>AbstractProduct(<code>Herbivore</code>,<code>Carnivore</code>)</p>
<ul>
<li>声明一种产品对象的接口。</li>
</ul>
</li>
<li>
<p>Product(<code>Wildebeest</code>,<code>Lion</code>,<code>Bison</code>,<code>Wolf</code>)</p>
<ul>
<li>定义要由相应的具体工厂创建的产品对象。</li>
<li>实现AbstractProduct接口。</li>
</ul>
</li>
<li>
<p>Client(<code>AnimalWorld</code>)</p>
<ul>
<li>使用AbstractFactory和AbstractProduct类声明的接口。</li>
</ul>
</li>
</ul>`,r:{minutes:1.85,words:556},y:"a",t:"抽象工厂",O:1}}],["/cs/design-pattern/adapter.html",{loader:()=>c(()=>import("./adapter.html-CEw5x0MC.js"),__vite__mapDeps([20,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Target(<code>ChemicalCompound</code>)</p>
<ul>
<li>定义客户端使用的特定于域的接口。</li>
</ul>
</li>
<li>
<p>Adapter(<code>Compund</code>)</p>
<ul>
<li>使接口适配器适应目标接口。</li>
</ul>
</li>
<li>
<p>Adaptee(<code>ChemicalDatabank</code>)</p>
</li>
<li>
<p>定义需要调整的现有接口。</p>
</li>
<li>
<p>Client(<code>AdapterApp</code>)</p>
<ul>
<li>与符合"目标"接口的对象协作。</li>
</ul>
</li>
</ul>`,r:{minutes:1.65,words:495},y:"a",t:"适配器模式",O:2}}],["/cs/design-pattern/bridge.html",{loader:()=>c(()=>import("./bridge.html-O7nnEpyn.js"),__vite__mapDeps([21,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Abstraction(<code>BusinessObject</code>)</p>
<ul>
<li>定义抽象的接口。</li>
<li>维护对实现器类型对象的引用。</li>
</ul>
</li>
<li>
<p>RefinedAbstraction(<code>CustomerBusinessObject</code>)</p>
<ul>
<li>扩展抽象定义的接口。</li>
</ul>
</li>
<li>
<p>Implementor(<code>DataObject</code>)</p>
<ul>
<li>定义实现类的接口。这个接口不必完全对应于抽象的接口；实际上，这两个接口可能完全不同。通常，实现接口仅提供基元操作，抽象基于这些基元定义更高级别的操作。</li>
</ul>
</li>
<li>
<p>ConcreteImplementor(<code>CustomerDataObject</code>)</p>
<ul>
<li>实现实现器接口并定义其具体实现。</li>
</ul>
</li>
</ul>`,r:{minutes:1.97,words:591},y:"a",t:"桥接模式",O:3}}],["/cs/design-pattern/builder.html",{loader:()=>c(()=>import("./builder.html-CNKHexbH.js"),__vite__mapDeps([22,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Builder(<code>VehicleBuilder</code>)</p>
<ul>
<li>指定用于创建Product对象的部分的抽象接口。</li>
</ul>
</li>
<li>
<p>ConcreteBuilder(<code>MotorCycleBuilder</code>,<code>CarBuilder</code>,<code>ScooterBuilder</code>)</p>
<ul>
<li>通过实现Builder接口来构造和组装产品的各个部分。</li>
<li>定义并跟踪它创建的表示。</li>
<li>提供检索产品的接口。</li>
</ul>
</li>
<li>
<p>Director(<code>Shop</code>)</p>
<ul>
<li>使用Builder接口构造一个对象。</li>
</ul>
</li>
<li>
<p>Product(<code>Vehicle</code>)</p>
<ul>
<li>表示正在构建的复杂对象。ConcreteBuilder构建产品的内部表示并定义其组装过程。</li>
<li>包括定义组成部分的类，包括将这些部分组装成最终结果的接口。</li>
</ul>
</li>
</ul>`,r:{minutes:2.47,words:741},y:"a",t:"建造者模式",O:4}}],["/cs/design-pattern/chain-of-responsibility.html",{loader:()=>c(()=>import("./chain-of-responsibility.html-CQDedBuE.js"),__vite__mapDeps([23,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Handler(<code>Approver</code>)</p>
<ul>
<li>定义处理请求的接口。</li>
<li>（可选）实现后继链接。</li>
</ul>
</li>
<li>
<p>ConcreteHandler(<code>Director</code>,<code>VicePresident</code>,<code>President</code>)</p>
<ul>
<li>处理它负责的请求。</li>
<li>可以访问其继任者。</li>
<li>如果ConcreteHandler可以处理请求，它会这样做；否则它将请求转发给它的继承者。</li>
</ul>
</li>
<li>
<p>Client(<code>ChainApp</code>)</p>
<ul>
<li>向链上的ConcreteHandler对象发起请求。</li>
</ul>
</li>
</ul>`,r:{minutes:2.04,words:611},y:"a",t:"职责链模式",O:5}}],["/cs/design-pattern/command.html",{loader:()=>c(()=>import("./command.html-ClKAosHW.js"),__vite__mapDeps([24,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Command(<code>Command</code>)</p>
<ul>
<li>声明一个用于执行操作的接口</li>
</ul>
</li>
<li>
<p>ConcreteCommand(<code>CalculatorCommand</code>)</p>
<ul>
<li>定义Receiver对象和动作之间的绑定</li>
<li>通过调用Receiver上的相应操作来实现Execute</li>
</ul>
</li>
<li>
<p>Client(<code>CommandApp</code>)</p>
<ul>
<li>创建一个ConcreteCommand对象并设置它的接收者。</li>
</ul>
</li>
<li>
<p>Invoker(<code>User</code>)</p>
<ul>
<li>要求命令执行请求</li>
</ul>
</li>
<li>
<p>Receiver(<code>Calculator</code>)</p>
<ul>
<li>知道如何执行与执行请求相关的操作。</li>
</ul>
</li>
</ul>`,r:{minutes:2.08,words:624},y:"a",t:"命令模式",O:6}}],["/cs/design-pattern/composite.html",{loader:()=>c(()=>import("./composite.html-QNW6B51P.js"),__vite__mapDeps([25,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Component(<code>DrawingElement</code>)</p>
<ul>
<li>声明组合对象的接口。</li>
<li>酌情为所有类通用的接口实现默认行为。</li>
<li>声明一个用于访问和管理其子组件的接口。</li>
<li>（可选）在递归结构中定义一个用于访问组件父级的接口，并在适当的情况下实现它。</li>
</ul>
</li>
<li>
<p>Leaf(<code>PrimitiveElement</code>)</p>
<ul>
<li>表示组合中的叶对象。叶子没有孩子。</li>
<li>定义组合中原始对象的行为。</li>
</ul>
</li>
<li>
<p>Composite(<code>CompositeElement</code>)</p>
<ul>
<li>定义具有子组件的行为。</li>
<li>存储子组件。</li>
<li>在组件接口中实现子相关的操作。</li>
</ul>
</li>
<li>
<p>Client(<code>CompositeApp</code>)</p>
<ul>
<li>通过组件接口操作组合中的对象。</li>
</ul>
</li>
</ul>`,r:{minutes:2.35,words:706},y:"a",t:"组合模式",O:7}}],["/cs/design-pattern/decorator.html",{loader:()=>c(()=>import("./decorator.html-q0g7_FkJ.js"),__vite__mapDeps([26,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Component(<code>LibraryItem</code>)</p>
<ul>
<li>定义对象的接口，这些对象可以动态地向其添加职责。</li>
</ul>
</li>
<li>
<p>ConcreteComponent(<code>Book</code>,<code>Video</code>)</p>
<ul>
<li>定义可附加其他职责的对象。</li>
</ul>
</li>
<li>
<p>Decorator(<code>Decorator</code>)</p>
<ul>
<li>维护对组件对象的引用，并定义符合Component接口的接口。</li>
</ul>
</li>
<li>
<p>ConcreteDecorator(<code>Borrowable</code>)</p>
<ul>
<li>向组件添加职责。</li>
</ul>
</li>
</ul>`,r:{minutes:1.79,words:537},y:"a",t:"装饰模式",O:8}}],["/cs/design-pattern/facade.html",{loader:()=>c(()=>import("./facade.html-O0BcoGIQ.js"),__vite__mapDeps([27,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Facade(<code>MortgageApplication</code>)</p>
<ul>
<li>知道哪些子系统类负责请求。</li>
<li>将客户端请求委托给适当的子系统对象。</li>
</ul>
</li>
<li>
<p>Subsystem classes(<code>Bank</code>,<code>Credit</code>,<code>Loan</code>)</p>
<ul>
<li>实现子系统功能。</li>
<li>处理由Facade对象分配的工作。</li>
<li>对外观一无所知，也不对其进行参考。</li>
</ul>
</li>
</ul>`,r:{minutes:1.61,words:482},y:"a",t:"外观模式",O:9}}],["/cs/design-pattern/factory-method.html",{loader:()=>c(()=>import("./factory-method.html-DQ2inXA7.js"),__vite__mapDeps([28,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Product(<code>Page</code>)</p>
<ul>
<li>定义工厂方法创建的对象的接口。</li>
</ul>
</li>
<li>
<p>ConcreteProduct(<code>SkillsPage</code>,<code>EducationPage</code>,<code>ExperiencePage</code>)</p>
<ul>
<li>实现产品接口。</li>
</ul>
</li>
<li>
<p>Creator(<code>Document</code>)</p>
<ul>
<li>声明工厂方法，它返回一个Product类型的对象。Creator还可以定义返回默认ConcreteProduct对象的工厂方法的默认实现。</li>
<li>可以调用工厂方法来创建Product对象。</li>
</ul>
</li>
<li>
<p>ConcreteCreator(<code>Report</code>,<code>Resume</code>)</p>
<ul>
<li>重写工厂方法以返回ConcreteProduct的实例。</li>
</ul>
</li>
</ul>`,r:{minutes:1.68,words:505},y:"a",t:"工厂方法模式",O:10}}],["/cs/design-pattern/flyweight.html",{loader:()=>c(()=>import("./flyweight.html-CxnsEy81.js"),__vite__mapDeps([29,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Flyweight(<code>Character</code>)</p>
<ul>
<li>声明一个接口，享元可以通过该接口接收外部状态并对其进行操作。</li>
</ul>
</li>
<li>
<p>ConcreteFlyweight(<code>CharacterA</code>,<code>CharacterB</code>,<code>...</code>,<code>CharacterZ</code>)</p>
<ul>
<li>实现享元接口并为内在状态添加存储(如果有)。ConcreteFlyweight对象必须是可共享的。它存储的任何状态都必须是内在的，也就是说，它必须独立于ConcreteFlyweight对象的上下文。</li>
</ul>
</li>
<li>
<p>UnsharedConcreteFlyweight(<code>not used</code>)</p>
<ul>
<li>并非所有享元子类都需要共享。Flyweight接口支持共享，但不强制执行。UnsharedConcreteFlyweight对象通常在享元对象结构中的某个级别将ConcreteFlyweight对象作为子对象(如Row和Column类所具有的)。</li>
</ul>
</li>
<li>
<p>FlyweightFactory(<code>CharacterFactory</code>)</p>
<ul>
<li>创建和管理享元对象。</li>
<li>确保享元被正确共享。当客户端请求享元时，FlyweightFactory对象资产现有实例或创建一个(如果不存在)。</li>
</ul>
</li>
<li>
<p>Client(<code>FlyweightApp</code>)</p>
<ul>
<li>维护对享元的引用。</li>
<li>计算或存储享元的外在状态。</li>
</ul>
</li>
</ul>`,r:{minutes:2.28,words:684},y:"a",t:"享元模式",O:11}}],["/cs/design-pattern/interpreter.html",{loader:()=>c(()=>import("./interpreter.html-nCIGgfo9.js"),__vite__mapDeps([30,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>AbstractExpression(<code>Expression</code>)</p>
<ul>
<li>声明一个用于执行操作的接口</li>
</ul>
</li>
<li>
<p>TerminalExpression(<code>ThousandExpression</code>,<code>HUndredExpression</code>,<code>TenExpression</code>,<code>OneExpression</code>)</p>
<ul>
<li>实现与语法中的终结符合关联的解释操作。</li>
<li>句子中的每个终结符号都需要一个实例。</li>
</ul>
</li>
<li>
<p>NonterminalExpression(<code>not used</code>)</p>
<ul>
<li>语法中的每个规则R::=R1R2...Rn都需要一个这样的类。</li>
<li>为每个符号R1到Rn维护AbstractExpression类型的实例变量。</li>
<li>为语法中的非终结符号实现解释操作。Interpret通常在表示R1到Rn的变量上递归调用自身。</li>
</ul>
</li>
<li>
<p>Context(<code>Context</code>)</p>
<ul>
<li>包含对解释器来说是全局的信息。</li>
</ul>
</li>
<li>
<p>Client(<code>InterpreterApp</code>)</p>
<ul>
<li>构建(或给出)抽象语法树，表示语法定义的语言中的特定句子。抽象语法树由NonterminalExpression和TerminalExpression类的实例组装而成。</li>
<li>调用解释操作。</li>
</ul>
</li>
</ul>`,r:{minutes:2.15,words:646},y:"a",t:"解释器模式",O:12}}],["/cs/design-pattern/iterator.html",{loader:()=>c(()=>import("./iterator.html-CZsONtWW.js"),__vite__mapDeps([31,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Iterator(<code>AbstractIterator</code>)</p>
<ul>
<li>定义了访问的遍历元素的接口。</li>
</ul>
</li>
<li>
<p>ConcreteIterator(<code>Iterator</code>)</p>
<ul>
<li>实现迭代器接口</li>
<li>在聚合的遍历中跟踪当前位置。</li>
</ul>
</li>
<li>
<p>Aggregate(<code>AbstractCollection</code>)</p>
<ul>
<li>定义了一个用于创建Iterator对象的接口。</li>
</ul>
</li>
<li>
<p>ConcreteAggregate(<code>Collection</code>)</p>
<ul>
<li>实现Iterator创建接口以返回正确的ConcreteIterator的实例。</li>
</ul>
</li>
</ul>`,r:{minutes:1.93,words:579},y:"a",t:"迭代器模式",O:13}}],["/cs/design-pattern/mediator.html",{loader:()=>c(()=>import("./mediator.html-51Tjg1x1.js"),__vite__mapDeps([32,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Mediator(<code>IChatroom</code>)</p>
<ul>
<li>定义了一个与同事对象通信的接口。</li>
</ul>
</li>
<li>
<p>ConcreteMediator(<code>Chatroom</code>)</p>
<ul>
<li>通过协调Colleague对象来实现合作行为.</li>
<li>了解并维护其同事。</li>
</ul>
</li>
<li>
<p>Colleague classes(<code>Participant</code>)</p>
<ul>
<li>每个同事类都知道它的Mediator对象。</li>
<li>每位同事在本应与另一位同事沟通时都与其调解员沟通。</li>
</ul>
</li>
</ul>`,r:{minutes:2.41,words:723},y:"a",t:"中介者模式",O:14}}],["/cs/design-pattern/memento.html",{loader:()=>c(()=>import("./memento.html-CxyCpmpF.js"),__vite__mapDeps([33,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Memento(<code>Memento</code>)</p>
<ul>
<li>存储Originator对象的内部状态。Memento可以根据其发起者的判断，尽可能多地或尽可能少地存储发起者的内部状态。</li>
<li>防止发起者以外的对象访问。Mementos实际上有两个接口。Caretaker看到了Memento的狭窄接口---它只能将Memento传递给其他对象。相比之下，originator看到了一个广泛的界面，它可以访问所有必要的数据以将自己恢复到之前的状态。理想情况下，只有产生备忘录的始发者才被允许访问备忘录的内部状态。</li>
</ul>
</li>
<li>
<p>Originator(<code>SalesProspect</code>)</p>
<ul>
<li>创建一个包含其当前内部状态快照的Memento。</li>
<li>使用Memento恢复其内部状态。</li>
</ul>
</li>
<li>
<p>Caretaker(<code>Caretaker</code>)</p>
<ul>
<li>负责Memento的保管。</li>
<li>从不操作或检测Memento的内容。</li>
</ul>
</li>
</ul>`,r:{minutes:1.96,words:589},y:"a",t:"备忘录模式",O:15}}],["/cs/design-pattern/observer.html",{loader:()=>c(()=>import("./observer.html-Cec5VSN0.js"),__vite__mapDeps([34,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Subject(<code>Stock</code>)</p>
<ul>
<li>知道它的观察者。任意数量的Observer对象都可以观察一个主题。</li>
<li>提供了附加和分离观察者对象的接口。</li>
</ul>
</li>
<li>
<p>ConcreteSubject(<code>IBM</code>)</p>
<ul>
<li>将感兴趣的状态存储到ConcreteObserver。</li>
<li>当状态改变时向观察者发送通知。</li>
</ul>
</li>
<li>
<p>Observer(<code>IInvestor</code>)</p>
<ul>
<li>为应该通知主题更改的对象定义更新接口。</li>
</ul>
</li>
<li>
<p>ConcreteObserver(<code>Investor</code>)</p>
<ul>
<li>维护对ConcreteSubject对象的引用。</li>
<li>商店状态应该与主题保存一致。</li>
<li>实现观察者更新接口，使其状态与主体的状态保存一致。</li>
</ul>
</li>
</ul>`,r:{minutes:2.07,words:620},y:"a",t:"观察者模式",O:16}}],["/cs/design-pattern/prototype.html",{loader:()=>c(()=>import("./prototype.html-BlpNZ_U5.js"),__vite__mapDeps([35,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Prototype(<code>ColorPrototype</code>)</p>
<ul>
<li>声明用于克隆自身的接口。</li>
</ul>
</li>
<li>
<p>ConcretePrototype(<code>Color</code>)</p>
<ul>
<li>实现克隆本身的操作。</li>
</ul>
</li>
<li>
<p>Client(<code>ColorManager</code>)</p>
<ul>
<li>通过要求原型克隆自身来创建新对象。</li>
</ul>
</li>
</ul>

`,r:{minutes:1.44,words:432},y:"a",t:"原型模式",O:17}}],["/cs/design-pattern/proxy.html",{loader:()=>c(()=>import("./proxy.html-BF1NeS-a.js"),__vite__mapDeps([36,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Proxy(<code>MathProxy</code>)</p>
<ul>
<li>维护一个让代理访问真实主题的引用。如果RealSubject和Subject接口相同，Proxy可以引用Subject。</li>
<li>提供与Subject相同的接口，以便可以用代理代替真实的主题。</li>
<li>控制对真实主题的访问，并可能负责创建和删除它。</li>
<li>其他职责取决于代理的类型：
<ul>
<li>远程代理负责对请求机器参数进行编码，并将编码后的请求发送到不同地址空间中的真实主体。</li>
<li>虚拟代理可以换成有关真实主题的附加信息，以便它们可以推迟访问它。例如，来自Motivation的ImageProxy缓存了真实图像的范围。</li>
<li>保护代理检测调用者是否具有执行请求所需的访问权限。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Subject(<code>IMath</code>)</p>
<ul>
<li>定义RealSubject和proxy的公共接口，以便在任何需要RealSubject的地方都可以使用Proxy。</li>
</ul>
</li>
<li>
<p>RealSubject(<code>Math</code>)</p>
<ul>
<li>定义代理所代表的真实对象。</li>
</ul>
</li>
</ul>`,r:{minutes:1.91,words:572},y:"a",t:"代理模式",O:18}}],["/cs/design-pattern/singleton.html",{loader:()=>c(()=>import("./singleton.html-B8IAz7br.js"),__vite__mapDeps([37,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>Singleton(<code>LoadBalancer</code>)
<ul>
<li>定义一个Instance操作，允许客户端访问其唯一的实例。实例是一个类操作。</li>
<li>负责创建和维护自己的唯一实例。</li>
</ul>
</li>
</ul>

`,r:{minutes:1.6,words:481},y:"a",t:"单例模式",O:19}}],["/cs/design-pattern/state.html",{loader:()=>c(()=>import("./state.html-Dl6TCeBQ.js"),__vite__mapDeps([38,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Context(Account)</p>
<ul>
<li>定义客户感兴趣的接口</li>
<li>维护定义当前状态的ConcreteState子类的实例。</li>
</ul>
</li>
<li>
<p>State(State)</p>
<ul>
<li>定义了一个接口，用于封装与上下文的特定状态相关的行为。</li>
</ul>
</li>
<li>
<p>Concrete State(RedState,SilverState,GoldState)</p>
<ul>
<li>每个子类实现与上下文状态相关联的行为。</li>
</ul>
</li>
</ul>`,r:{minutes:2.44,words:731},y:"a",t:"状态模式",O:20}}],["/cs/design-pattern/strategy.html",{loader:()=>c(()=>import("./strategy.html-B9KkHuix.js"),__vite__mapDeps([39,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Strategy(<code>SortStrategy</code>)</p>
<ul>
<li>声明所有支持的算法通用的接口。Context使用这个接口调用一个ConcreteStrategy定义的算法。</li>
</ul>
</li>
<li>
<p>ConcreteStrategy(<code>QuickSort</code>,<code>ShellSort</code>,<code>MergeSort</code>)</p>
<ul>
<li>使用Strategy接口实现算法。</li>
</ul>
</li>
<li>
<p>Context(<code>SortedList</code>)</p>
<ul>
<li>配置有一个ConcreteStrategy对象。</li>
<li>维护对Strategy对象的引用。</li>
<li>可以定义一个让Strategy访问其数据的接口。</li>
</ul>
</li>
</ul>`,r:{minutes:1.58,words:474},y:"a",t:"策略模式",O:21}}],["/cs/design-pattern/template-method.html",{loader:()=>c(()=>import("./template-method.html-hZmT52hK.js"),__vite__mapDeps([40,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>AbstractClass(<code>DataObject</code>)</p>
<ul>
<li>定义具体子类定义的抽象原始操作以实现算法的步骤。</li>
<li>实现定义算法骨架的模板方法。模板方法调用原始操作以及在AbstractClass中定义的操作或其他对象的操作。</li>
</ul>
</li>
<li>
<p>ConcreteClass(<code>CustomerDataObject</code>)</p>
<ul>
<li>实现元素操作以执行算法的子类特定步骤。</li>
</ul>
</li>
</ul>`,r:{minutes:1.69,words:508},y:"a",t:"模板方法",O:22}}],["/cs/design-pattern/visitor.html",{loader:()=>c(()=>import("./visitor.html-Cx1GQhuf.js"),__vite__mapDeps([41,1])),meta:{d:168696e7,l:"2023年6月17日",c:["设计模式"],g:["设计模式"],e:`<p>参与此模式的类和对象包括：</p>
<ul>
<li>
<p>Visitor(<code>Visitor</code>)</p>
<ul>
<li>为对象结构中的每个ConcrteElement类声明一个访问操作。该操作的名称和签名标识了向访问者发送访问请求的类。这让访问者可以确定被访问元素的具体类。然后访问者可以通过其特定的界面直接访问元素。</li>
</ul>
</li>
<li>
<p>ConcreteVisitor(<code>IncomeVisitor</code>,<code>VacationVisitor</code>)</p>
<ul>
<li>实现访问者声明的每个操作。每个操作都实现了为结构中的相应类或对象定义的算法片段。ConcreteVisitor为算法提供上下文并存储其本地状态。这个状态通常会在结构的遍历过程中累积结果。</li>
</ul>
</li>
<li>
<p>Element(<code>Element</code>)</p>
<ul>
<li>定义一个以访问者为参数的Accept操作。</li>
</ul>
</li>
<li>
<p>ConcreteElement(<code>Employee</code>)</p>
<ul>
<li>实现以访问者为参数的Accept操作。</li>
</ul>
</li>
<li>
<p>ObjectStructure(<code>Employees</code>)</p>
<ul>
<li>可以枚举它的元素。</li>
<li>可以提供高级界面以允许访问者访问其元素。</li>
<li>可以是组合(模式)或集合，例如列表或集合。</li>
</ul>
</li>
</ul>`,r:{minutes:2.87,words:860},y:"a",t:"访问者模式",O:23}}],["/cs/maui/Note.html",{loader:()=>c(()=>import("./Note.html-BjFx4oKl.js"),__vite__mapDeps([42,1])),meta:{d:16923168e5,l:"2023年8月18日",c:["C#"],g:["MAUI"],o:!0,e:'<p>一个<a href="https://learn.microsoft.com/zh-cn/dotnet/maui/what-is-maui" target="_blank" rel="noopener noreferrer">MAUI</a>官方示例<a href="https://learn.microsoft.com/zh-cn/dotnet/maui/tutorials/notes-app/" target="_blank" rel="noopener noreferrer">Note</a>，<a href="https://github.com/ly2jr/notes" target="_blank" rel="noopener noreferrer">源代码地址</a></p>',r:{minutes:.15,words:45},y:"a",t:"Note",O:1}}],["/cs/maui/",{loader:()=>c(()=>import("./index.html-DQ3s8rR8.js"),__vite__mapDeps([43,1])),meta:{y:"p",t:"概述",i:"/assets/svg/csharp2.svg"}}],["/cs/vb/Interop.html",{loader:()=>c(()=>import("./Interop.html-DI4GWCjz.js"),__vite__mapDeps([44,1])),meta:{d:16876512e5,l:"2023年6月25日",c:["VB"],g:["VB","C#"],e:`<p><a href="https://learn.microsoft.com/zh-cn/previous-versions/dotnet/articles/ms973800(v=msdn.10)?redirectedfrom=MSDN" target="_blank" rel="noopener noreferrer">互操作</a>是将代码进行抽象分离，供其它地方及语言使用，更多说明见<a href="/tools/csharp/com.html" target="_blank">COM</a></p>
<p>这里以C#调用VB为例</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>C#调用VB：在开发环境生产xxx.dll时自动注册，生产环境需要<a href="https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/regsvr32" target="_blank" rel="noopener noreferrer">regsvr32</a>进行注册</p>
<p>VB调用C#：需要将C#类库设置为互COM操作,开发环境自动注册，生产环境需要<a href="https://learn.microsoft.com/zh-cn/dotnet/framework/tools/regasm-exe-assembly-registration-tool" target="_blank" rel="noopener noreferrer">regasm</a>生成tlb文件。</p>
</div>`,r:{minutes:1.68,words:503},y:"a",t:"互操作",O:3}}],["/cs/vb/",{loader:()=>c(()=>import("./index.html-ygFP0dEb.js"),__vite__mapDeps([45,1])),meta:{y:"p",t:"入门三招"}}],["/cs/vb/crud.html",{loader:()=>c(()=>import("./crud.html-KYrDw9IM.js"),__vite__mapDeps([46,1])),meta:{d:16876512e5,l:"2023年6月25日",c:["VB"],e:`<p>Visual Basic 对数据库操作，引用<code>Microsoft ActiveX Data Objects 2.6 Library</code>，两个对象<code>ADODB.Connection</code>和<code>ADODB.Recordset</code></p>
<h2>表结构</h2>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">Create</span> <span class="token keyword">table</span> Test
<span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">identity</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  content nvarchar<span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:1.18,words:355},y:"a",t:"CRUD",O:1}}],["/cs/vb/fun.html",{loader:()=>c(()=>import("./fun.html-gr6PkFuW.js"),__vite__mapDeps([47,1])),meta:{d:16876512e5,l:"2023年6月25日",c:["VB"],e:`<p>在基础的CRUD操作中，发现很多代码都是重复的，可能就是SQL语句的区别。</p>
<h2>函数</h2>
<p>Visual Basic函数有两种形式，无返回值的<code>Sub</code>和有返回值的<code>Function</code></p>

<p>将CRUD操作中的对数据库部分进行提取为<code>Function</code>函数，事件本身就是一个<code>Sub</code>函数</p>
<div class="language-vb" data-ext="vb" data-title="vb"><pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Function</span> CRUD<span class="token punctuation">(</span><span class="token keyword">ByVal</span> sSql <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">Dim</span> conn <span class="token keyword">As</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
<span class="token keyword">Dim</span> connString <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token keyword">Dim</span> affected <span class="token keyword">As</span> <span class="token keyword">Integer</span>
CRUD <span class="token operator">=</span> <span class="token number">0</span>
connString <span class="token operator">=</span> <span class="token string">"Provider=SQLOLEDB.1;Data Source=...;Initial Catalog=...;Uid=...;Password=..."</span>
conn<span class="token punctuation">.</span>Open connString

conn<span class="token punctuation">.</span>Execute sSql<span class="token punctuation">,</span> CRUD

conn<span class="token punctuation">.</span>Close
<span class="token keyword">Set</span> conn <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre></div>`,r:{minutes:2.15,words:646},y:"a",t:"函数、类、模块",O:2}}],["/cs/wpf/",{loader:()=>c(()=>import("./index.html-Dxr3tUbp.js"),__vite__mapDeps([48,1])),meta:{y:"p",t:"WPF",i:"/assets/svg/csharp2.svg"}}],["/cs/wpf/angle-animation.html",{loader:()=>c(()=>import("./angle-animation.html-CZ-5ygMa.js"),__vite__mapDeps([49,1])),meta:{d:17061408e5,l:"2024年1月25日",c:["C#"],g:["WPF","动画"],o:!0,e:`<p>在做主题控件时，涉及到了<code>Loading</code>加载控件，无从下手，本着学习的目的，参考了<a href="https://handyorg.github.io/handycontrol/extend_controls/loading/index.html" target="_blank" rel="noopener noreferrer">HandryOrg</a>。</p>
<p>发现HC的Loading是通过代码方式实现，为了学习以及简化的目的，通过XAML方式一步一步梳理。</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/controls/loading/loading-animation.gif" alt="Loading" width="200" height="200" tabindex="0" loading="lazy"><figcaption>Loading</figcaption></figure>`,r:{minutes:8.48,words:2543},y:"a",t:"旋转动画"}}],["/cs/wpf/binding.html",{loader:()=>c(()=>import("./binding.html-DCWUhELl.js"),__vite__mapDeps([50,1])),meta:{d:17066592e5,l:"2024年1月31日",c:["C#"],g:["WPF"],o:!0,e:`<p>WPF中<a href="https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/data/?view=netdesktop-8.0" target="_blank" rel="noopener noreferrer">Binding</a>随处可见,简化代码量，整理一些常用的示例供参考。</p>
<h2>绑定控件</h2>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name"><span class="token namespace">x:</span>Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Slider<span class="token punctuation">"</span></span>
    <span class="token attr-name">Maximum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
    <span class="token attr-name">Minimum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBlock</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{Binding ElementName=Slider, Path=Value}<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBox</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{Binding ElementName=Slider, Path=Value}<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,r:{minutes:5.13,words:1539},y:"a",t:"Binding"}}],["/cs/wpf/canvas.html",{loader:()=>c(()=>import("./canvas.html-fvFGfry6.js"),__vite__mapDeps([51,1])),meta:{d:1691712e6,l:"2023年8月11日",c:["C#"],g:["WPF"],o:!0,e:'<p>WPF提供<a href="https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/getting-started-with-ink?view=netframeworkdesktop-4.8" target="_blank" rel="noopener noreferrer">数字墨迹</a>，简单几行代码就可以运行，<a href="https://github.com/Ly2JR/wpf-samples/tree/main/src/InkCanvasDemo" target="_blank" rel="noopener noreferrer">源代码地址</a></p>',r:{minutes:3.88,words:1163},y:"a",t:"墨迹画布"}}],["/cs/wpf/checkbox.html",{loader:()=>c(()=>import("./checkbox.html-CqcKqfdt.js"),__vite__mapDeps([52,1])),meta:{d:16994016e5,l:"2023年11月8日",c:["工具箱"],g:["自定义控件"],o:!0,e:`<p>自定义控件多种多样</p>
<h2>改颜色</h2>
<figure><img src="https://nas.ilyl.life:8092/wpf/controls/checkbox1.gif" alt="改颜色" tabindex="0" loading="lazy"><figcaption>改颜色</figcaption></figure>
<p>这里使用两个Border来实现Checkbox的外观和选中的效果</p>
<p>最外层的Border样式</p>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Border</span>
     <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>14<span class="token punctuation">"</span></span>
     <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>14<span class="token punctuation">"</span></span>
     <span class="token attr-name">Margin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
     <span class="token attr-name">Background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#4F9BFF<span class="token punctuation">"</span></span>
     <span class="token attr-name">BorderBrush</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#4F9BFF<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Border</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:1.01,words:302},y:"a",t:"自定义Checkbox"}}],["/cs/wpf/combobx.html",{loader:()=>c(()=>import("./combobx.html-CS1NOLcG.js"),__vite__mapDeps([53,1])),meta:{d:17006112e5,l:"2023年11月22日",c:["C#"],g:["WPF","Behaviors"],o:!0,e:`<p>ComboxBox如何在VM中触发事件。</p>
<p>引入<a href="https://github.com/Microsoft/XamlBehaviorsWpf" target="_blank" rel="noopener noreferrer">Microsoft.Xaml.Behaviors.Wpf</a></p>
<p>在当前根节点下添加如下声明<code>xmlns:i="http://schemas.microsoft.com/xaml/behaviors"</code></p>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComboBox</span> <span class="token attr-name"><span class="token namespace">x:</span>Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ComBo<span class="token punctuation">"</span></span>
        <span class="token attr-name">DisplayMemberPath</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Text<span class="token punctuation">"</span></span>
        <span class="token attr-name">ItemsSource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{Binding Items}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">i:</span>Interaction.Triggers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">i:</span>EventTrigger</span> <span class="token attr-name">EventName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SelectionChanged<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">i:</span>InvokeCommandAction</span> <span class="token attr-name">Command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{Binding TextChanged}<span class="token punctuation">"</span></span> <span class="token attr-name">CommandParameter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{Binding ElementName=ComBo, Path=SelectedItem}<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">i:</span>EventTrigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">i:</span>Interaction.Triggers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ComboBox</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:.27,words:82},y:"a",t:"ComboBox"}}],["/cs/wpf/command.html",{loader:()=>c(()=>import("./command.html-DuTG5D1F.js"),__vite__mapDeps([54,1])),meta:{d:1691712e6,l:"2023年8月11日",c:["C#"],g:["WPF"],o:!0,e:`<p>没有使用第三方框架提供的命令，自带的命令在使用中有点繁琐。</p>
<p>需要对<a href="https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/commanding-overview?view=netframeworkdesktop-4.8" target="_blank" rel="noopener noreferrer">ICommand</a>命令进行包装。</p>
<p>在写demo时很方便使用。</p>
<h2>基本命令</h2>
<p>将<code>ICommand</code>里的<code>Execute</code>执行方法迁移到MVVM中。</p>`,r:{minutes:2.34,words:702},y:"a",t:"命令"}}],["/cs/wpf/design.html",{loader:()=>c(()=>import("./design.html-B4TZkcPZ.js"),__vite__mapDeps([55,1])),meta:{d:17001792e5,l:"2023年11月17日",c:["C#"],g:["WPF"],o:!0,e:'<p>官方文档提供了<a href="https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2010/july/design-patterns-problems-and-solutions-with-model-view-viewmodel" target="_blank" rel="noopener noreferrer">设计模式</a>和<a href="https://learn.microsoft.com/zh-cn/visualstudio/xaml-tools/xaml-design-time-sample-data?view=vs-2022" target="_blank" rel="noopener noreferrer">XAML设计时示例数据</a></p>',r:{minutes:.31,words:92},y:"a",t:"设计时数据"}}],["/cs/wpf/download.html",{loader:()=>c(()=>import("./download.html-BIuEoyFB.js"),__vite__mapDeps([56,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["C#"],g:["WPF"],o:!0,e:`<p>下载时太快UI不显示时，可以加个延时，代码高亮处。</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/download.gif" alt="下载" width="420" height="200" tabindex="0" loading="lazy"><figcaption>下载</figcaption></figure>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//主机地址</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> BASE_URL <span class="token operator">=</span> <span class="token string">"http://localhost:80/"</span><span class="token punctuation">;</span>
<span class="token comment">//文件大小Byte</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> ByteSize <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">//文件大小Kb</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> KByteSize <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">//缓存大小</span>
<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> DEFAULT_BUFFER_SIZE <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token comment">//下载文件长度</span>
<span class="token class-name"><span class="token keyword">string</span></span> FileLength <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token comment">//已下载文件长度</span>
<span class="token class-name"><span class="token keyword">string</span></span> CurrentLength <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token comment">//下载文件最大进度</span>
<span class="token class-name"><span class="token keyword">int</span></span> MaxProgress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//已下载文件当前进度</span>
<span class="token class-name"><span class="token keyword">int</span></span> CurrentProgress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"任意键开始下载..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">ExecuteDownFileAsync</span><span class="token punctuation">(</span><span class="token string">"iisstart.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ExecuteDownFileAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> fileName<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> token <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CancellationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> url <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">BASE_URL</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">fileName</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> uri <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Uri</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> httpClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> httpClient<span class="token punctuation">.</span><span class="token function">GetAsync</span><span class="token punctuation">(</span>uri<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureAwait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>IsSuccessStatusCode<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> allFileLength <span class="token operator">=</span> response<span class="token punctuation">.</span>Content<span class="token punctuation">.</span>Headers<span class="token punctuation">.</span>ContentLength<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>allFileLength<span class="token punctuation">.</span>HasValue<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>allFileLength <span class="token operator">&lt;</span> ByteSize<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            FileLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">allFileLength</span><span class="token punctuation">}</span></span><span class="token string">B"</span></span><span class="token punctuation">;</span>
            MaxProgress <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>allFileLength<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>allFileLength <span class="token operator">&gt;</span> KByteSize<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            FileLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">allFileLength<span class="token punctuation">.</span>Value <span class="token operator">/</span> KByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">MB"</span></span><span class="token punctuation">;</span>
            MaxProgress <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>allFileLength <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            FileLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">allFileLength<span class="token punctuation">.</span>Value <span class="token operator">/</span> ByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">KB"</span></span><span class="token punctuation">;</span>
            MaxProgress <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>allFileLength <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name"><span class="token keyword">var</span></span> title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"正在下载:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">url</span><span class="token punctuation">}</span></span><span class="token string">\\t文件大小:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">FileLength</span><span class="token punctuation">}</span></span><span class="token string">\\t"</span></span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> savePath <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Environment<span class="token punctuation">.</span>CurrentDirectory</span><span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">fileName</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>savePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            File<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>savePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name"><span class="token keyword">var</span></span> stream <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>Content<span class="token punctuation">.</span><span class="token function">ReadAsStreamAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureAwait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stream <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> fileStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FileStream</span><span class="token punctuation">(</span>savePath<span class="token punctuation">,</span> FileMode<span class="token punctuation">.</span>Create<span class="token punctuation">,</span> FileAccess<span class="token punctuation">.</span>Write<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> streamReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StreamReader</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> bufferByte <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">byte</span></span><span class="token punctuation">[</span>DEFAULT_BUFFER_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">int</span></span> startByte <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>allFileLength <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> downByte <span class="token operator">=</span> <span class="token keyword">await</span> stream<span class="token punctuation">.</span><span class="token function">ReadAsync</span><span class="token punctuation">(</span>bufferByte<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bufferByte<span class="token punctuation">.</span>Length<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>downByte <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

                    fileStream<span class="token punctuation">.</span>Position <span class="token operator">=</span> startByte<span class="token punctuation">;</span>
                    
                    <span class="token keyword">await</span> fileStream<span class="token punctuation">.</span><span class="token function">WriteAsync</span><span class="token punctuation">(</span>bufferByte<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> downByte<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    startByte <span class="token operator">+=</span> downByte<span class="token punctuation">;</span>
                    allFileLength <span class="token operator">-=</span> downByte<span class="token punctuation">;</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>startByte <span class="token operator">&lt;</span> ByteSize<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        CurrentLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">startByte</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">;</span>
                        CurrentProgress <span class="token operator">=</span> startByte<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>startByte <span class="token operator">&gt;</span> KByteSize<span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        CurrentLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">startByte <span class="token operator">/</span> KByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">MB"</span></span><span class="token punctuation">;</span>
                        CurrentProgress <span class="token operator">=</span> startByte <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">else</span>
                    <span class="token punctuation">{</span>
                        CurrentLength <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$"</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">startByte <span class="token operator">/</span> ByteSize</span><span class="token format-string"><span class="token punctuation">:</span>F2</span><span class="token punctuation">}</span></span><span class="token string">KB"</span></span><span class="token punctuation">;</span>
                        CurrentProgress <span class="token operator">=</span> startByte <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    Console<span class="token punctuation">.</span><span class="token function">SetCursorPosition</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>Length<span class="token operator">+</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"已完成:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">CurrentLength</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            fileStream<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.17,words:350},y:"a",t:"下载"}}],["/cs/wpf/dynamic-layout.html",{loader:()=>c(()=>import("./dynamic-layout.html-BdJWu-OV.js"),__vite__mapDeps([57,1])),meta:{d:169776e7,l:"2023年10月20日",c:["C#"],g:["WPF"],o:!0,e:`<p>WPF提供了控件样式，供自己定制化需求。</p>
<p>但是有个别特殊需求时，需要在重复生成时控件,显示不同的效果或者大小。</p>
<p>以海康视频布局，一分屏、四分屏、六分屏为例。</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/hik_layout.gif" alt="不等布局" width="420" height="200" tabindex="0" loading="lazy"><figcaption>不等布局</figcaption></figure>
<h2>通过代码方式</h2>
<p>通过代码方式进行布局,不在WPF范围考虑之内。</p>`,r:{minutes:2.66,words:798},y:"a",t:"不等布局"}}],["/cs/wpf/dynamic-resource.html",{loader:()=>c(()=>import("./dynamic-resource.html-Dftl1jlf.js"),__vite__mapDeps([58,1])),meta:{d:17084736e5,l:"2024年2月21日",c:["C#"],g:["WPF"],o:!0,e:`<p>通过<a href="https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/advanced/dynamicresource-markup-extension?view=netframeworkdesktop-4.8" target="_blank" rel="noopener noreferrer">DynamicResource</a>可以实现本地资源的替换，实现多语切换或者主题切换功能。</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/dynamic-resource.gif" alt="动态资源" width="200" height="200" tabindex="0" loading="lazy"><figcaption>动态资源</figcaption></figure>`,r:{minutes:1.54,words:462},y:"a",t:"动态资源"}}],["/cs/wpf/format.html",{loader:()=>c(()=>import("./format.html-DkRjS6IU.js"),__vite__mapDeps([59,1])),meta:{d:16879104e5,l:"2023年6月28日",c:["C#"],g:["WPF"],o:!0,e:'<p><a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.data.bindingbase.stringformat?view=windowsdesktop-7.0" target="_blank" rel="noopener noreferrer">StringFormat</a>和<a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.controls.contentcontrol.contentstringformat?view=windowsdesktop-7.0" target="_blank" rel="noopener noreferrer">ContentStringFormat</a>的区别，示例代码高亮显示。</p>',r:{minutes:.7,words:211},y:"a",t:"格式化"}}],["/cs/wpf/hk.html",{loader:()=>c(()=>import("./hk.html-DTpysTrk.js"),__vite__mapDeps([60,1])),meta:{d:16867872e5,l:"2023年6月15日",c:["C#"],g:["WPF","FFMPEG","海康视频"],o:!0,e:`<p>默认都是最新的版本</p>
<ul>
<li>
<p><a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">Visual Studio 2022</a></p>
</li>
<li>
<p><a href="https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/net48" target="_blank" rel="noopener noreferrer">.NET Framework 4.8</a></p>
</li>
<li>
<p><a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/7.0" target="_blank" rel="noopener noreferrer">.NET 7</a></p>
</li>
</ul>`,r:{minutes:3.28,words:983},y:"a",t:"海康视频"}}],["/cs/wpf/notifyproperty.html",{loader:()=>c(()=>import("./notifyproperty.html-BSnuIf-B.js"),__vite__mapDeps([61,1])),meta:{d:16879104e5,l:"2023年6月28日",c:["C#"],g:["WPF"],o:!0,e:`<p>WPF的VM中常用到<a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.componentmodel.inotifypropertychanged?view=net-7.0" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a>接口，来通知属性变更，但需要填写具体属性名。</p>
<p>这里有个编译器解释属性<a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/attributes/caller-information" target="_blank" rel="noopener noreferrer">CallerMemberName</a>可以简化这部分工作量。</p>`,r:{minutes:.52,words:157},y:"a",t:"属性通知"}}],["/cs/wpf/opacity-animation.html",{loader:()=>c(()=>import("./opacity-animation.html-D5zjPkwB.js"),__vite__mapDeps([62,1])),meta:{d:16976736e5,l:"2023年10月19日",c:["C#"],g:["WPF","动画"],o:!0,e:`<p>WPF可以样式里添加触发器和动画，实现更好的效果。</p>
<p>以Image鼠标移动和移除效果为例</p>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">Width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span>
        <span class="token attr-name">Height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span>
        <span class="token attr-name">Panel.ZIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1000<span class="token punctuation">"</span></span>
        <span class="token attr-name">Cursor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hand<span class="token punctuation">"</span></span>
        <span class="token attr-name">Source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pack://application:,,,/XXX;component/Resources/Logo.png<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image.Style</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style</span> <span class="token attr-name">TargetType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{x:Type Image}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style.Setters</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Setter</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Opacity<span class="token punctuation">"</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.3<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style.Setters</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Style.Triggers</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Trigger</span> <span class="token attr-name">Property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IsMouseOver<span class="token punctuation">"</span></span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>True<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Trigger.EnterActions</span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeginStoryboard</span><span class="token punctuation">&gt;</span></span>
                             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Storyboard</span><span class="token punctuation">&gt;</span></span>
                                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DoubleAnimation</span> <span class="token attr-name">Storyboard.TargetProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Opacity<span class="token punctuation">"</span></span>
                                                  <span class="token attr-name">To</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
                                                  <span class="token attr-name">Duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0:0:1<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
                             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Storyboard</span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeginStoryboard</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Trigger.EnterActions</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Trigger.ExitActions</span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeginStoryboard</span><span class="token punctuation">&gt;</span></span>
                             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Storyboard</span><span class="token punctuation">&gt;</span></span>
                                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DoubleAnimation</span> <span class="token attr-name">Storyboard.TargetProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Opacity<span class="token punctuation">"</span></span>
                                                  <span class="token attr-name">To</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.25<span class="token punctuation">"</span></span>
                                                  <span class="token attr-name">Duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0:0:1<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
                             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Storyboard</span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeginStoryboard</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Trigger.ExitActions</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Trigger</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style.Triggers</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Style</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Image.Style</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Image</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:.43,words:128},y:"a",t:"透明度动画"}}],["/cs/wpf/plugin.html",{loader:()=>c(()=>import("./plugin.html-BoNFNphH.js"),__vite__mapDeps([63,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["C#"],g:["WPF","Prism"],o:!0,e:`<h2>开发包</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这里有很多关于<a href="https://github.com/PrismLibrary/Prism-Samples-Wpf" target="_blank" rel="noopener noreferrer">Prism 示例</a></p>
<p>WPF 入门可以看下<code>深入浅出WPF</code>以及<code>WPF编程宝典</code></p>
</div>
<ol>
<li><a href="https://prismlibrary.com/index.html" target="_blank" rel="noopener noreferrer">Prism</a></li>
</ol>`,r:{minutes:3.92,words:1176},y:"a",t:"模块化"}}],["/cs/wpf/prism-tabcontrol.html",{loader:()=>c(()=>import("./prism-tabcontrol.html-LYemQIAL.js"),__vite__mapDeps([64,1])),meta:{d:17006112e5,l:"2023年11月22日",c:["C#"],g:["WPF","Prism"],o:!0,e:`<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> TabControl如何添加Tab页?</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> TabControl如何删除Tab页?</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> IsNavigationTarget的用途？</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 如何关闭全部Tab页?</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 多个Tab页如何同时接收消息?</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 如何指定Tab页接收消息？</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 关闭Tab页后消息为何还能接收？</label></li>
</ul>`,r:{minutes:2.43,words:729},y:"a",t:"TabControl"}}],["/cs/wpf/prismshell.html",{loader:()=>c(()=>import("./prismshell.html-DcGh27eB.js"),__vite__mapDeps([65,1])),meta:{d:16975872e5,l:"2023年10月18日",c:["C#"],g:["WPF","Prism"],o:!0,e:`<p>使用Prism时，一个最常见的问题就是登录与主页面切换，启用只有一个Shell，如何切换到另外一个Shell。</p>
<h2>Application.Current.MainWindow</h2>
<p>通过Application.Current.MainWindow切换登录和主页面</p>
<p><code>LoginView</code>为登录页面</p>
<p><code>ShellView</code>为主页面</p>
<ol>
<li>
<p>在Bootstrapper里设置登录页面启动</p>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name">DependencyObject</span> <span class="token function">CreateShell</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> Container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>LoginView<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>登录成功后</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>代码高亮处缺少时，无法使用IRegionManager中的导航功能</p>
</div>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> shellView <span class="token operator">=</span> _container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ShellView<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
RegionManager<span class="token punctuation">.</span><span class="token function">SetRegionManager</span><span class="token punctuation">(</span>shellView<span class="token punctuation">,</span> _regionManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
RegionManager<span class="token punctuation">.</span><span class="token function">UpdateRegions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Application<span class="token punctuation">.</span>Current<span class="token punctuation">.</span>MainWindow<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Application<span class="token punctuation">.</span>Current<span class="token punctuation">.</span>MainWindow <span class="token operator">=</span> shellView<span class="token punctuation">;</span>
shellView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li>
</ol>`,r:{minutes:2.75,words:824},y:"a",t:"Prism多Shell"}}],["/cs/wpf/quartz-net.html",{loader:()=>c(()=>import("./quartz-net.html-BEVBH_zs.js"),__vite__mapDeps([66,1])),meta:{d:16993152e5,l:"2023年11月7日",c:["C#"],g:["quartz.net","Prism"],o:!0,e:`<p>在WPF项目，使用Prism和Quartz.net搭配时，发现IJob，无法注入<code>IContainerExtension</code>。</p>
<p>此时需要自己实现<code>IJobFactory</code>接口即可。</p>
<p>以定时生成CSV文件的Job为例</p>
<h2>实现IJobFactory</h2>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CsvJobFactory</span><span class="token punctuation">:</span><span class="token type-list"><span class="token class-name">IJobFactory</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IContainerExtension</span> _container<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">CsvJobFactory</span><span class="token punctuation">(</span><span class="token class-name">IContainerExtension</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _container<span class="token operator">=</span>container<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">IJob</span> <span class="token function">NewJob</span><span class="token punctuation">(</span>TriggerFiredBundle bundle，<span class="token class-name">IScheduler</span> scheduler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> container<span class="token punctuation">.</span><span class="token function">Resolve</span><span class="token punctuation">(</span>bundle<span class="token punctuation">.</span>JobDetail<span class="token punctuation">.</span>JobType<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">IJob</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ReturnJob</span><span class="token punctuation">(</span><span class="token class-name">IJob</span> job<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> disposable <span class="token operator">=</span> job <span class="token keyword">as</span> <span class="token class-name">IDisposable</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>disposable <span class="token operator">!=</span> nul1<span class="token punctuation">)</span><span class="token punctuation">{</span>
            disposable<span class="token punctuation">.</span><span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.49,words:147},y:"a",t:"Quartz.net"}}],["/cs/wpf/ratio.html",{loader:()=>c(()=>import("./ratio.html-C8dI5vPK.js"),__vite__mapDeps([67,1])),meta:{d:16916256e5,l:"2023年8月10日",c:["C#"],g:["WPF","FFMPEG","海康视频"],o:!0,e:`<p>之前使用WPF配合FFMPEG进行转码显示海康视频，本次将转码的视频近一步处理，按指定比例显示。</p>
<h2>屏幕比</h2>
<p>屏幕比例即屏幕的宽度和高度的比例。</p>
<p>常见的有:<code>4:3</code>,<code>16:9</code>。</p>
<p>这里需要用到它们的比值即：</p>
<p><code>4:3</code>: 4/3=1.33D</p>
<p><code>16:9</code>:16/9=1.77D</p>
<h2>转换方式</h2>
<p>当视频源固定按指定屏幕比显示转换有两种方式：</p>
<ol>
<li>使用FFMPEG进行转换时同时更改输出大小</li>
<li>通过布局调整显示的大小</li>
</ol>`,r:{minutes:2.57,words:771},y:"a",t:"屏幕比"}}],["/cs/wpf/static-button-auth.html",{loader:()=>c(()=>import("./static-button-auth.html-B-4gO9bm.js"),__vite__mapDeps([68,1])),meta:{d:170424e7,l:"2024年1月3日",c:["C#"],g:["WPF","权限"],o:!0,e:`<p>在WPF中按钮组常用，按钮组权限相应的也需要。</p>
<p>除了通过后台或者代码的方式实现之外，也可以使用转换器的方式实现，对于按钮不多的时候非常适用。</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/button-group-auth.gif" alt="按钮权限切换" width="420" height="200" tabindex="0" loading="lazy"><figcaption>按钮权限切换</figcaption></figure>
<p>以常见的操作按钮<code>新增</code>、<code>修改</code>、<code>删除</code>、<code>保存</code>、<code>查询</code>五个按钮为例。</p>`,r:{minutes:2.51,words:752},y:"a",t:"按钮组权限"}}],["/cs/wpf/svg.html",{loader:()=>c(()=>import("./svg.html-BEY7PQ0S.js"),__vite__mapDeps([69,1])),meta:{d:16974144e5,l:"2023年10月16日",c:["C#"],g:["WPF","SVG"],o:!0,e:`<p>在WPF中使用<code>SVG</code>文件，一种是安装第三方包<a href="https://github.com/ElinamLLC/SharpVectors" target="_blank" rel="noopener noreferrer">SharpVectors.Wpf</a>，直接包裹即可。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>路径格式:pack://application:,,,/XXX;component/Resources/XXX.svg</p>
</div>`,r:{minutes:.7,words:209},y:"a",t:"SVG"}}],["/cs/wpf/teeview.html",{loader:()=>c(()=>import("./teeview.html-CXG530hi.js"),__vite__mapDeps([70,1])),meta:{d:17041536e5,l:"2024年1月2日",c:["C#"],g:["WPF","自定义控件"],o:!0,e:`<p>自带的TreeView没有Checkbox，需要自定义设计实现效果</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/treeview.gif" alt="自定义TreeView" width="240" height="280" tabindex="0" loading="lazy"><figcaption>自定义TreeView</figcaption></figure>
<h2>定义模型</h2>
<h3>定义需要显示的数据<code>ViewModel</code></h3>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeItemViewModel</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">INotifyPropertyChanged</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> required <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Visibility</span> HasPath <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Parent <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Visibility<span class="token punctuation">.</span>Collapsed<span class="token punctuation">;</span> <span class="token keyword">return</span> Visibility<span class="token punctuation">.</span>Visible<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">bool</span></span> _isChecked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsChecked <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> _isChecked<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">set</span> <span class="token punctuation">{</span> _isChecked <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
            <span class="token function">OnPropertyChanged</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>IsChecked<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">TreeItemViewModel<span class="token punctuation">?</span></span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>TreeItemViewModel<span class="token punctuation">&gt;</span><span class="token punctuation">?</span></span> Children <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">event</span> <span class="token class-name">PropertyChangedEventHandler<span class="token punctuation">?</span></span> PropertyChanged<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnPropertyChanged</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> propName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PropertyChanged <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">PropertyChanged</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PropertyChangedEventArgs</span><span class="token punctuation">(</span>propName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:4.07,words:1220},y:"a",t:"自定义控件TreeView"}}],["/cs/wpf/update.html",{loader:()=>c(()=>import("./update.html-PuDjvTtw.js"),__vite__mapDeps([71,1])),meta:{d:16879104e5,l:"2023年6月28日",c:["C#"],g:["WPF","异步编程"],o:!0,e:`<p>之前一篇<a href="/cs/wpf/download.html" target="_blank">下载</a>用控制台演示了下载的功能，而本次更新是在这基础上加了UI界面实现软件更新的功能，<a href="https://github.com/Ly2JR/wpf-samples/tree/main/src/update" target="_blank" rel="noopener noreferrer">源代码地址</a>。</p>
<p>受<a href="https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2014/april/async-programming-patterns-for-asynchronous-mvvm-applications-commands" target="_blank" rel="noopener noreferrer">异步编程</a>启发，借用了大量代码。</p>`,r:{minutes:4.16,words:1248},y:"a",t:"软件更新"}}],["/cs/wpf/watermark.html",{loader:()=>c(()=>import("./watermark.html-C_R9_saE.js"),__vite__mapDeps([72,1])),meta:{d:17000064e5,l:"2023年11月15日",c:["C#"],g:["WPF"],o:!0,e:`<p>微软官方文档提供了一个Textbox的<a href="https://learn.microsoft.com/zh-cn/dotnet/desktop/wpf/controls/how-to-add-a-watermark-to-a-textbox?view=netframeworkdesktop-4.8" target="_blank" rel="noopener noreferrer">水印示例</a></p>
<p>升级改造，利用触发器实现相同效果</p>
<figure><img src="https://nas.ilyl.life:8092/wpf/watermark.gif" alt="watermark" width="420" height="200" tabindex="0" loading="lazy"><figcaption>watermark</figcaption></figure>`,r:{minutes:.37,words:111},y:"a",t:"水印"}}],["/cs/wpf-theme/",{loader:()=>c(()=>import("./index.html-DwWIe2vY.js"),__vite__mapDeps([73,1])),meta:{y:"p",t:"WPF主题"}}],["/cs/wpf-theme/border.html",{loader:()=>c(()=>import("./border.html-BgKc4rbj.js"),__vite__mapDeps([74,1])),meta:{d:1706832e6,l:"2024年2月2日",c:["C#"],g:["WPF","主题控件"],o:!0,e:`<p>仿<a href="https://element-plus.org/zh-CN/component/border.html" target="_blank" rel="noopener noreferrer">Element Plus</a>的一款WPF主题控件。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>需要应用<code>BorderDefaultStyle</code>样式生效</p>
</div>
<h2>圆角</h2>
<p>我们提供了以下几种圆角样式，以供选择。</p>`,r:{minutes:1.27,words:380},y:"a",t:"Border 边框"}}],["/cs/wpf-theme/button.html",{loader:()=>c(()=>import("./button.html-CQiZ7jiP.js"),__vite__mapDeps([75,1])),meta:{d:17050176e5,l:"2024年1月12日",c:["C#"],g:["WPF","主题控件"],o:!0,e:`<p>仿<a href="https://element-plus.org/zh-CN/component/button.html" target="_blank" rel="noopener noreferrer">Element Plus</a>的一款WPF主题控件。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Button 按钮全局生效</p>
</div>
<p>常用的操作按钮</p>
<h2>基础用法</h2>
<p>使用<code>type</code>、<code>isplain</code>、<code>isround</code> 和 <code>iscircle</code> 来定义按钮的样式。</p>`,r:{minutes:3.7,words:1109},y:"a",t:"Button 按钮"}}],["/tools/csharp/",{loader:()=>c(()=>import("./index.html-CZB1VbNS.js"),__vite__mapDeps([76,1])),meta:{y:"p",t:"C#",i:"/assets/svg/csharp.svg"}}],["/tools/csharp/auth.html",{loader:()=>c(()=>import("./auth.html-lR0z0x48.js"),__vite__mapDeps([77,1])),meta:{d:17006112e5,l:"2023年11月22日",c:["工具箱"],g:["权限设计"],o:!0,e:`<p>应用程序中常用权限，又如何设计权限。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>仅供参考，实际根据生产坏境进行调整。</p>
<p>例如在大型生产系统中，对菜单库、功能库、数据库分离。</p>
<p>菜单库可能上千个，每个页面的功能权限上百个。</p>
<p>将每个用户的具体权限存储到缓存表中。</p>
<p>权限不应是经常变更的数据。</p>
</div>
<p>常用的权限有<code>菜单权限</code>、<code>功能权限</code>以及<code>数据权限</code></p>`,r:{minutes:4.2,words:1260},y:"a",t:"权限设计"}}],["/tools/csharp/base-conversion.html",{loader:()=>c(()=>import("./base-conversion.html-CjzFQTKR.js"),__vite__mapDeps([78,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["C#"],o:!0,e:`<h2>二进制与十六进制</h2>

`,r:{minutes:1.03,words:309},y:"a",t:"进制转换"}}],["/tools/csharp/batch-process.html",{loader:()=>c(()=>import("./batch-process.html-BRkliqN5.js"),__vite__mapDeps([79,1])),meta:{d:17022528e5,l:"2023年12月11日",c:["工具箱"],g:["Winform"],o:!0,e:`<p>在Winform中常见的一个功能是配置，需要赋值取值，而且还是大批量的地方，一个一个手动处理非常繁琐。</p>
<p>如何进行批量化一键赋值和一键取值，更近一步的衍生，就是一个标准的动态模板功能。</p>
<p>以批量赋值取值为例进行说明。</p>
<h2>设置基类用户控件</h2>
<p>设置基类控件为了适应不同的子控件。</p>
<p>新增了一个属性<code>Key</code>,一个<code>GetValue()</code>和一个<code>SetValue()</code>方法。</p>
<p><code>Key</code>用于与数据库字段名匹配</p>
<p><code>GetValue</code>方法用户获取用户输入的值</p>`,r:{minutes:1.9,words:570},y:"a",t:"批量赋取值"}}],["/tools/csharp/codesnippet.html",{loader:()=>c(()=>import("./codesnippet.html-CYwuz2ja.js"),__vite__mapDeps([80,1])),meta:{d:17019072e5,l:"2023年12月7日",c:["工具箱"],g:["C#"],o:!0,e:`<p>VS提供了<a href="https://learn.microsoft.com/zh-cn/visualstudio/ide/walkthrough-creating-a-code-snippet?view=vs-2022" target="_blank" rel="noopener noreferrer">代码片段</a>减少开发工作量。</p>
<figure><img src="https://nas.ilyl.life:8092/dotnet/codesnippet.gif" alt="自定义代码片段" tabindex="0" loading="lazy"><figcaption>自定义代码片段</figcaption></figure>`,r:{minutes:1.4,words:419},y:"a",t:"代码片段"}}],["/tools/csharp/com.html",{loader:()=>c(()=>import("./com.html-BMCKNoX4.js"),__vite__mapDeps([81,1])),meta:{d:16886016e5,l:"2023年7月6日",c:["工具箱"],g:["C#"],o:!0,e:`<p><a href="https://github.com/dotnet/runtime/blob/main/docs/design/features/COM-activation.md" target="_blank" rel="noopener noreferrer">Com激活说明</a></p>
<table>
<thead>
<tr>
<th>Server</th>
<th>Client</th>
<th style="text-align:center">Current Support</th>
</tr>
</thead>
<tbody>
<tr>
<td>COM*</td>
<td>.NET Core</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td>.NET Core</td>
<td>COM*</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td>.NET Core</td>
<td>.NET Core</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td>.NET Framework</td>
<td>.NET Core</td>
<td style="text-align:center">No</td>
</tr>
<tr>
<td>.NET Core</td>
<td>.NET Framework</td>
<td style="text-align:center">No</td>
</tr>
</tbody>
</table>`,r:{minutes:5.21,words:1564},y:"a",t:"COM"}}],["/tools/csharp/cpluscplus.html",{loader:()=>c(()=>import("./cpluscplus.html-BkwHMcMH.js"),__vite__mapDeps([82,1])),meta:{d:1708992e6,l:"2024年2月27日",c:["工具箱"],g:["C#","C++"],o:!0,e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>参考资料<a href="https://learn.microsoft.com/zh-cn/dotnet/framework/interop/" target="_blank" rel="noopener noreferrer">与非托管代码进行交互操作</a></p>
</div>
<h2><a class="header-anchor" href="#数据类型对照"><span></span></a><a href="https://learn.microsoft.com/zh-cn/dotnet/framework/interop/marshalling-data-with-platform-invoke" target="_blank" rel="noopener noreferrer">数据类型对照</a></h2>`,r:{minutes:4.9,words:1470},y:"a",t:"调用C++"}}],["/tools/csharp/docker-debug.html",{loader:()=>c(()=>import("./docker-debug.html-BPxkAF0_.js"),__vite__mapDeps([83,1])),meta:{d:17053632e5,l:"2024年1月16日",c:["工具箱"],g:["C#","Docker"],o:!0,e:`<p>VS进行Docker调试时，半天卡住不动，查看日志显示</p>
<div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>&gt;Info: Using vsdbg version '17.8.11212.2'
&gt;Info: Using Runtime ID 'linux-x64'
&gt;Info: c:\\用户\\admin\\vsdbg\\vs2017u5 exists,deleting.
</code></pre></div><h2>解决方法</h2>
<ol>
<li>
<p>下载文件<code>vsdbg-linux-x64.zip</code>，替换自动的版本号</p>
<p>链接：<code>https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-x64.zip</code></p>
</li>
<li>
<p>下载文件<code>vsdbg-linux-musl-x64</code>，替换自动的版本号</p>
<p>链接<code>https://vsdebugger.azureedge.net/vsdbg-17-8-11212-2/vsdbg-linux-musl-x64.zip</code></p>
</li>
<li>
<p>打开<code>vsdbg</code>目录,新建<code>vs2017u5</code>文件夹</p>
</li>
<li>
<p>将<code>vsdbg-linux-x64.zip</code>解压到<code>vs2017u5</code>文件夹下</p>
</li>
<li>
<p>将<code>vsdbg-linux-musl-x64.zip</code>解压到<code>vs2017u5/linux-musl-x64</code>文件夹下</p>
</li>
<li>
<p>重启VS</p>
</li>
</ol>`,r:{minutes:.55,words:164},y:"a",t:"vs2017u5 exists,deleting."}}],["/tools/csharp/encryption.html",{loader:()=>c(()=>import("./encryption.html-Ch0GWrwD.js"),__vite__mapDeps([84,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["C#","JAVA"],o:!0,e:`<h2>AES</h2>
<h3>CBC加密</h3>

`,r:{minutes:1.32,words:397},y:"a",t:"加密解密"}}],["/tools/csharp/intptr-and-pointer.html",{loader:()=>c(()=>import("./intptr-and-pointer.html-BJ4nPTZr.js"),__vite__mapDeps([85,1])),meta:{d:16867872e5,l:"2023年6月15日",c:["工具箱"],g:["C#","C++"],o:!0,e:'<p><a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.intptr?view=net-7.0" target="_blank" rel="noopener noreferrer">Intptr</a>与<a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/unsafe-code" target="_blank" rel="noopener noreferrer">指针</a>转换，涉及两个方法<a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.allochglobal?view=net-6.0" target="_blank" rel="noopener noreferrer">Marshal.AllocHGlobal</a>和<a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal.freehglobal?view=net-6.0#system-runtime-interopservices-marshal-freehglobal(system-intptr)" target="_blank" rel="noopener noreferrer">Marshal.FreeHGlobal</a>，他们成对出现。</p>',r:{minutes:.42,words:126},y:"a",t:"托管指针转换指针"}}],["/tools/csharp/ioc.html",{loader:()=>c(()=>import("./ioc.html-DyTVewYg.js"),__vite__mapDeps([86,1])),meta:{d:16884288e5,l:"2023年7月4日",c:["工具箱"],g:["C#"],o:!0,e:`<h2>Winform使用IOC</h2>
<p>在Winfrom里使用<a href="https://learn.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection-usage" target="_blank" rel="noopener noreferrer">Microsoft.Extensions.DependencyInjection</a>、<a href="https://www.donet5.com/Home/Doc" target="_blank" rel="noopener noreferrer">SqlSugar</a>、<a href="https://www.quartz-scheduler.net/" target="_blank" rel="noopener noreferrer">Quartz</a>、<a href="https://serilog.net/" target="_blank" rel="noopener noreferrer">Serilog</a>、<a href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">Sqlite</a>。<a href="https://github.com/Ly2JR/wpf-samples/tree/main/src/WindowsFormsApp1" target="_blank" rel="noopener noreferrer">源代码地址</a>。</p>`,r:{minutes:2.98,words:894},y:"a",t:"IOC"}}],["/tools/csharp/jwt.html",{loader:()=>c(()=>import("./jwt.html-CsONIXMP.js"),__vite__mapDeps([87,1])),meta:{d:16993152e5,l:"2023年11月7日",c:["JWT"],g:["C#"],o:!0,e:`<p>基于.NET 7<a href="https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-7.0" target="_blank" rel="noopener noreferrer">最小API</a>创建的一个JWT项目。</p>
<p>添加JwtBearer包<code>Microsoft.AspNetCore.Authentication.JwtBearer</code></p>
<h2>设置Jwt选项配置</h2>
<p>在<code>appsettings.json</code>添加新节点</p>`,r:{minutes:2.04,words:612},y:"a",t:"JWT"}}],["/tools/csharp/log.html",{loader:()=>c(()=>import("./log.html-DV61PZBI.js"),__vite__mapDeps([88,1])),meta:{d:1699488e6,l:"2023年11月9日",c:["日志记录"],g:["C#"],o:!0,e:'<p>日志记录有很多，如<a href="https://nlog-project.org/" target="_blank" rel="noopener noreferrer">NLog</a>,<a href="https://logging.apache.org/log4net/release/manual/introduction.html" target="_blank" rel="noopener noreferrer">Log4Net</a>,<a href="https://serilog.net/" target="_blank" rel="noopener noreferrer">Serilog</a>等等。</p>',r:{minutes:.91,words:273},y:"a",t:"日志记录"}}],["/tools/csharp/machine-code.html",{loader:()=>c(()=>import("./machine-code.html-FfdR6TTO.js"),__vite__mapDeps([89,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["C#"],o:!0,e:`<p><a href="https://stackoverflow.com/questions/99880/generating-a-unique-machine-id" target="_blank" rel="noopener noreferrer">Stackoverflow</a></p>
<h2>注册表</h2>
<p><code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography</code></p>
<h2>PowerShell</h2>
<p><code>get-wmiobject Win32_ComputerSystemProduct |  select-Object -expandProperty UUID</code></p>`,r:{minutes:.47,words:140},y:"a",t:"机器码"}}],["/tools/csharp/signalr.html",{loader:()=>c(()=>import("./signalr.html-DtDXXmQr.js"),__vite__mapDeps([90,1])),meta:{d:17011296e5,l:"2023年11月28日",c:["Signalr"],g:["C#"],o:!0,e:`<p><a href="https://learn.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-8.0" target="_blank" rel="noopener noreferrer">SignalR</a>是一个很好的实时应用。</p>
<p>并且提供Android和IOS以及Web相关包。但是文档有点抽象，除非自己下手写才能更深的理解，这里疏浅的总结几个点，更快的理解SignalR，并配上示例代码。</p>
<h2>要点</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Hub抽象代理，对参数名，参数类型需要完全一致</p>
</div>`,r:{minutes:9.43,words:2829},y:"a",t:"Signalr"}}],["/tools/csharp/sound.html",{loader:()=>c(()=>import("./sound.html-Qglk_k9W.js"),__vite__mapDeps([91,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["C#"],o:!0,e:'<p>Nuget下载<a href="https://www.nuget.org/packages/System.Speech" target="_blank" rel="noopener noreferrer">System.Speech</a>，这里有相关<a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=netframework-4.8" target="_blank" rel="noopener noreferrer">文档</a></p>',r:{minutes:.28,words:85},y:"a",t:"播放声音"}}],["/tools/csharp/string-and-intptr.html",{loader:()=>c(()=>import("./string-and-intptr.html-ChnOuivp.js"),__vite__mapDeps([92,1])),meta:{d:17090784e5,l:"2024年2月28日",c:["工具箱"],g:["C#","C++"],o:!0,e:`<h2>字符串转指针</h2>
<h3><a class="header-anchor" href="#marshal"><span></span></a><a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.marshal?view=net-8.0" target="_blank" rel="noopener noreferrer">Marshal</a></h3>
<p>引用<code>using System.Runtime.InteropServices;</code>，具体查看C++提供的字符集编码</p>`,r:{minutes:.62,words:186},y:"a",t:"字符串和指针转换"}}],["/tools/csharp/struct-and-intptr.html",{loader:()=>c(()=>import("./struct-and-intptr.html-C259zzOd.js"),__vite__mapDeps([93,1])),meta:{d:16861824e5,l:"2023年6月8日",c:["工具箱"],g:["C#","C++"],o:!0,e:'<p><a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.intptr?view=net-7.0" target="_blank" rel="noopener noreferrer">Intptr</a>与<a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.interopservices.structlayoutattribute?view=net-6.0" target="_blank" rel="noopener noreferrer">StructLayout</a>转换</p>',r:{minutes:.29,words:87},y:"a",t:"结构和托管指针转换"}}],["/tools/csharp/task.html",{loader:()=>c(()=>import("./task.html-CyuyhWcT.js"),__vite__mapDeps([94,1])),meta:{d:17010432e5,l:"2023年11月27日",c:["Task"],g:["C#"],o:!0,e:`<p><a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task?view=net-8.0" target="_blank" rel="noopener noreferrer">Task</a>简化了线程操作。</p>
<p>Task 使用又离不开<code>async</code>和<code>await</code>，如何正确的使用<code>Task</code>，以一个简单的示例演示。</p>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Print---</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">PrintAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> times<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>times <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"PrintAsync---</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        times<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">PrintTaskAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> times<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>times <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"PrintTaskAsync---</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        times<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:3.51,words:1054},y:"a",t:"Task"}}],["/tools/csharp/wince.html",{loader:()=>c(()=>import("./wince.html-C2YAOw2s.js"),__vite__mapDeps([95,1])),meta:{d:16870464e5,l:"2023年6月18日",c:["工具箱"],g:["C#"],o:!0,e:`<p>VS2008是最后一版支持Wince移动端开发，用在条码设备上开发条码应用。</p>
<p>以下是遇见的问题及解决方案，以此怀念:</p>
<h2>用什么开发Wince系统条码应用？</h2>
<p><code>A</code>: 最后一版是VS2008，记得安装SP1补丁。</p>
<h2>Wince系统条码开发环境支持哪些?</h2>
<p><code>A</code>: Wince有个精简版的.NET Framework框架，VS2008开发支持Framewrok 3.5。</p>
<h2>Wince系统条码开发用到哪些技术?</h2>
<p><code>A</code>: 常见的<code>DataSet</code>、<code>Xml</code>、<code>Linq</code>、<code>Lambda</code>、<code>WebSerice</code>、Wince数据库<code>SDF</code>都支持。</p>`,r:{minutes:5.87,words:1760},y:"a",t:"WINCE"}}],["/tools/csharp/xml.html",{loader:()=>c(()=>import("./xml.html-CxcjPsca.js"),__vite__mapDeps([96,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["C#"],o:!0,e:`<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="ISO-8859-1"?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bookstore</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eng<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Harry Potter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">&gt;</span></span>29.99<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eng<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Learning XML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">&gt;</span></span>39.95<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bookstore</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:1.49,words:446},y:"a",t:"XML"}}],["/tools/databases/",{loader:()=>c(()=>import("./index.html-BERulWxT.js"),__vite__mapDeps([97,1])),meta:{y:"p",t:"概述"}}],["/tools/databases/mariadb.html",{loader:()=>c(()=>import("./mariadb.html-Bg4IFkam.js"),__vite__mapDeps([98,1])),meta:{d:16924032e5,l:"2023年8月19日",c:["工具箱"],g:["Mariadb"],o:!0,e:`<p>如何开通外网？</p>
<ol>
<li>
<p>NAS-&gt;控制面板-&gt;终端机和SNMP-&gt;终端机-&gt;勾选<code>启动SSH功能</code></p>
</li>
<li>
<p>利用Xshell登录系统</p>
</li>
<li>
<p>进入Mariadb目录,<code>volume1</code>为安装目录</p>
<div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>cd /volume1/@appstore/MariaDB10/usr/local/mariadb10/bin
</code></pre></div></li>
<li>
<p>进入marialdb,输入以下命令，之后输入密码，登录成功显示<code>MariaDB[(none)]&gt;</code></p>
<div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>./mysql -u root -p
</code></pre></div></li>
<li>
<p>切换数据库</p>
<div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>use mysql
</code></pre></div></li>
<li>
<p>更改管理员<code>root</code>host，忽略提示<code>Duplicate entry '%-root' for key 'PRIMARY'</code></p>
<div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>update user set host='%' where user='root';
</code></pre></div></li>
<li>
<p>更新权限</p>
<div class="language-cmd" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>FLUSH PRIVILEGES;
</code></pre></div></li>
<li>
<p>开启MarialDB端口防火墙</p>
</li>
<li>
<p>设置端口转发</p>
</li>
</ol>`,r:{minutes:.53,words:160},y:"a",t:"Mariadb",O:2}}],["/tools/databases/mysql.html",{loader:()=>c(()=>import("./mysql.html-BOcIyBGX.js"),__vite__mapDeps([99,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["MYSQL"],o:!0,e:`<h2>表</h2>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> tb_student
<span class="token punctuation">(</span>
    studentNo <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    studentName <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    studentSex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    studentAge <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    classNo <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> tb_score
<span class="token punctuation">(</span>
    studentNo <span class="token keyword">int</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    className <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    score <span class="token keyword">int</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:8.61,words:2584},y:"a",t:"MYSQL",O:1}}],["/tools/databases/paramaters.html",{loader:()=>c(()=>import("./paramaters.html-CIznm56r.js"),__vite__mapDeps([100,1])),meta:{d:16927488e5,l:"2023年8月23日",c:["工具箱"],g:["参数化查询"],o:!0,e:`<p>测试表<code>Test</code>,结构及数据如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">ID</th>
<th style="text-align:left">Name</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">1111</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">2222</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">3333</td>
</tr>
</tbody>
</table>`,r:{minutes:.51,words:152},y:"a",t:"参数化查询"}}],["/tools/docker/",{loader:()=>c(()=>import("./index.html-BQtjcupg.js"),__vite__mapDeps([101,1])),meta:{y:"p",t:"概述"}}],["/tools/docker/aliyun-ddns.html",{loader:()=>c(()=>import("./aliyun-ddns.html-DOQ7Pp_n.js"),__vite__mapDeps([102,1])),meta:{d:16892064e5,l:"2023年7月13日",c:["DOCKER"],o:!0,e:`<p>在<a href="/tools/nas/cloud.html#%E7%A7%81%E6%9C%89%E4%BA%91%E5%8A%A8%E6%80%81ip%E9%97%AE%E9%A2%98" target="_blank">NAS自动同步DDNS</a>上使用的是<a href="chenhw2/aliyun-ddns-cli:latest">chenhw2/aliyun-ddns-cli:latest</a>，使用的是Go。</p>
<p>作为一名普通的C#开发者，有必要自己来实现，以及顺便学习下Docker，<a href="https://github.com/Ly2JR/aliyun.ddns" target="_blank" rel="noopener noreferrer">原代码地址</a>。</p>`,r:{minutes:3.91,words:1174},y:"a",t:"阿里云DDNS"}}],["/tools/docker/registry.html",{loader:()=>c(()=>import("./registry.html-KXVMyIiN.js"),__vite__mapDeps([103,1])),meta:{d:1689552e6,l:"2023年7月17日",c:["DOCKER"],o:!0,e:`<p>为了使用自己开发的<a href="/tools/docker/aliyun-ddns.html" target="_blank">阿里云解析</a>而生。</p>
<p>同时解决无法登录及发布Docker Hub的问题。</p>
<p>包括SSL、基本认证、Docker Registry UI、删除镜像内容。</p>
<p>更多的配置可在<a href="https://docs.docker.com/registry/deploying/" target="_blank" rel="noopener noreferrer">Docker Resistry</a>和<a href="https://github.com/Joxit/docker-registry-ui" target="_blank" rel="noopener noreferrer">Docker Resistry UI</a>找到。</p>`,r:{minutes:4.04,words:1211},y:"a",t:"私有仓库",O:2}}],["/tools/excel/",{loader:()=>c(()=>import("./index.html-BBU9hyfw.js"),__vite__mapDeps([104,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["EXCEL"],o:!0,e:`<h2><a class="header-anchor" href="#npoi"><span></span></a><a href="https://github.com/nissl-lab/npoi" target="_blank" rel="noopener noreferrer">NPOI</a></h2>
<p>这里有一些<a href="https://github.com/nissl-lab/npoi-examples" target="_blank" rel="noopener noreferrer">NPOI示例</a>。</p>
<h2><a class="header-anchor" href="#accessdatabaseengine"><span></span></a><a href="https://www.microsoft.com/en-us/download/details.aspx?id=54920" target="_blank" rel="noopener noreferrer">AccessDataBaseEngine</a></h2>`,r:{minutes:.55,words:165},y:"a",t:"读写操作"}}],["/tools/excel/vba1.html",{loader:()=>c(()=>import("./vba1.html-a5MIffii.js"),__vite__mapDeps([105,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["EXCEL"],o:!0,e:`<h2>模板</h2>
<p>需要统计出所有员工中午考勤情况，比如中午11:00:00~12:00:00作为午餐时间。</p>
<p>考勤统计显示内容如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">工号</th>
<th style="text-align:left">英文名</th>
<th style="text-align:left">中文名</th>
<th style="text-align:left">部门</th>
<th style="text-align:left">职位</th>
<th style="text-align:left">卡号</th>
<th style="text-align:left">打卡时间</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 06:00:12</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 11:31:21</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 11:57:40</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 17:03:00</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 17:55:51</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 20:01:04</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
</tr>
</tbody>
</table>`,r:{minutes:3.07,words:921},y:"a",t:"考勤时间间隔统计",O:1}}],["/tools/excel/vba2.html",{loader:()=>c(()=>import("./vba2.html-BlipQZBV.js"),__vite__mapDeps([106,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["EXCEL"],o:!0,e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>统计学中的专有名词，是按顺序排列的一组数据中居于中间位置的数</p>
</div>
<h2>模板</h2>
<p>原始数据显示如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间</th>
<th style="text-align:left">...</th>
<th style="text-align:left">数据1</th>
<th style="text-align:left">数据2</th>
<th style="text-align:left">数据3</th>
<th style="text-align:left">数据4</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.31</td>
<td style="text-align:left">620.41</td>
<td style="text-align:left">8.97</td>
<td style="text-align:left">1134.76</td>
</tr>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.42</td>
<td style="text-align:left">611.12</td>
<td style="text-align:left">9.12</td>
<td style="text-align:left">1214.11</td>
</tr>
<tr>
<td style="text-align:left">01/01</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.34</td>
<td style="text-align:left">600.42</td>
<td style="text-align:left">8.99</td>
<td style="text-align:left">1206.87</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.41</td>
<td style="text-align:left">623.57</td>
<td style="text-align:left">9.18</td>
<td style="text-align:left">1138.21</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.43</td>
<td style="text-align:left">623.57</td>
<td style="text-align:left">9.05</td>
<td style="text-align:left">1175.29</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.51</td>
<td style="text-align:left">624.09</td>
<td style="text-align:left">9.14</td>
<td style="text-align:left">1165.84</td>
</tr>
<tr>
<td style="text-align:left">01/02</td>
<td style="text-align:left">...</td>
<td style="text-align:left">9.42</td>
<td style="text-align:left">611.12</td>
<td style="text-align:left">9.11</td>
<td style="text-align:left">1157.75</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
</tr>
</tbody>
</table>`,r:{minutes:3.24,words:972},y:"a",t:"中位数统计",O:2}}],["/tools/excel/vba3.html",{loader:()=>c(()=>import("./vba3.html-DAG2vhZv.js"),__vite__mapDeps([107,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["EXCEL"],o:!0,e:`<h2>模板说明</h2>
<p>需要统计出所有员工考勤打卡迟到或早退的问题，07：54-08：01早班迟到，19：54-20：01晚班迟到。</p>
<p>考勤统计显示内容如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">工号</th>
<th style="text-align:left">英文名</th>
<th style="text-align:left">中文名</th>
<th style="text-align:left">部门</th>
<th style="text-align:left">职位</th>
<th style="text-align:left">卡号</th>
<th style="text-align:left">打卡时间</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 06:00:12</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 11:31:21</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 11:57:40</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 17:03:00</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 17:55:51</td>
</tr>
<tr>
<td style="text-align:left">0001</td>
<td style="text-align:left">...</td>
<td style="text-align:left">王一</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">2021-08-01 20:01:04</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
</tr>
</tbody>
</table>`,r:{minutes:3.36,words:1008},y:"a",t:"考勤迟到早退统计",O:3}}],["/tools/excel/vba4.html",{loader:()=>c(()=>import("./vba4.html-A7rv1O-p.js"),__vite__mapDeps([108,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["EXCEL"],o:!0,e:`<h2>模板</h2>
<p>统计出所有员工每个月<code>迟到</code>、<code>早退</code>、<code>请假</code>等次数，按不同规则进行不同分值权重进行统计,分值和权重值自定义。</p>
<p>例如:</p>
<ul>
<li>
<p>规则1(权重分10分)</p>
<ol>
<li><code>迟到</code>、<code>早退</code>小于等于2次，每次扣0.5分，超过2次，每次1分；</li>
<li><code>请假</code>每次扣1分；</li>
</ol>
</li>
<li>
<p>规则2(...)</p>
<ol>
<li><code>加分项</code>每次加3分;</li>
</ol>
</li>
<li>
<p>...</p>
</li>
</ul>`,r:{minutes:2.63,words:789},y:"a",t:"考勤规则统计",O:4}}],["/tools/ffmpeg/",{loader:()=>c(()=>import("./index.html-DUaL8I06.js"),__vite__mapDeps([109,1])),meta:{y:"p",t:"FFMPEG",i:"/assets/svg/ffmpeg.svg"}}],["/tools/ffmpeg/avpixelformat.html",{loader:()=>c(()=>import("./avpixelformat.html-Dam43Oik.js"),__vite__mapDeps([110,1])),meta:{d:16868736e5,l:"2023年6月16日",c:["工具箱"],g:["FFMPEG"],o:!0,e:`<h2>参数</h2>
<p><code>BitsPerPixel</code>：根据色度类型获取用于像素的位数</p>
<p><code>NumberOfPlanes</code>：获取像素平面数</p>
<p><code>Pitches</code>：获取每个像素平面的间距大小数组</p>
<p><code>Lines</code>：获取每个像素平面的扫描线（高度）数组</p>
<p><code>PlaneSizes</code>：获取像素平面大小的数组</p>
<h2>像素格式</h2>
<h3>AV_PIX_FMT_YUV420P</h3>
<p><code>I420</code>：与<code>YV12</code>相同，但是V和U互换</p>`,r:{minutes:2.13,words:639},y:"a",t:"像素格式"}}],["/tools/github/",{loader:()=>c(()=>import("./index.html-Cs8s303m.js"),__vite__mapDeps([111,1])),meta:{d:17056224e5,l:"2024年1月19日",c:["工具箱"],g:["Github"],e:`<ol>
<li>
<p>浏览器打开<a href="https://sites.ipaddress.com/github.com/" target="_blank" rel="noopener noreferrer">https://sites.ipaddress.com/github.com/</a></p>
</li>
<li>
<p>往下浏览到<code>DNS Resource Records</code>部分，显示</p>
<div class="language-txt" data-ext="txt" data-title="txt"><pre class="language-txt"><code>github.com IN A 140.82.112.3
</code></pre></div></li>
<li>
<p>打开<code>hosts</code>文件,路径<code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p>
</li>
<li>
<p>在结尾处添加<code>github</code> dns映射,并保存</p>
<div class="language-txt" data-ext="txt" data-title="txt"><pre class="language-txt"><code># github
140.82.112.3 github.com
</code></pre></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>提示没有权限或者错误时</p>
<p>右击属性\\安全\\添加当前角色</p>
</div>
</li>
<li>
<p>打开<code>cmd</code>，运行<code>ipconfg/flushdns</code></p>
</li>
</ol>`,r:{minutes:.37,words:111},y:"a",t:"Github无法访问"}}],["/tools/ifly/",{loader:()=>c(()=>import("./index.html-BRV8qAON.js"),__vite__mapDeps([112,1])),meta:{y:"p",t:"科大讯飞"}}],["/tools/ifly/voice.html",{loader:()=>c(()=>import("./voice.html-BIpP6dQ8.js"),__vite__mapDeps([113,1])),meta:{d:16911072e5,l:"2023年8月4日",c:["讯飞"],g:["语音合成"],o:!0,e:`<p>将讯飞语音合成集成到VUE项目<code>Vite+TS</code>中，其中有一点点变化，作此记录。</p>
<ul>
<li>
<p><a href="https://www.xfyun.cn/doc/tts/online_tts/API.html" target="_blank" rel="noopener noreferrer">语音合成文档</a></p>
</li>
<li>
<p><a href="https://www.xfyun.cn/doc/tts/online_tts/API.html#%E8%B0%83%E7%94%A8%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">WebApi示例:<code>es6</code></a></p>
</li>
</ul>`,r:{minutes:5.89,words:1767},y:"a",t:"语音合成",O:1}}],["/tools/installer/vsinstaller.html",{loader:()=>c(()=>import("./vsinstaller.html-CK6-nHio.js"),__vite__mapDeps([114,1])),meta:{d:16966368e5,l:"2023年10月7日",c:["打包"],o:!0,e:'<p>VS提供打包工具<a href="https://marketplace.visualstudio.com/items?itemName=visualstudioclient.MicrosoftVisualStudio2022InstallerProjects" target="_blank" rel="noopener noreferrer">Microsoft Visual Studio Installer Projects 2022</a>在打包.net framework 4.8框架下的Signalr应用时，安装后提示：<code>Invalid negotiation response received.</code></p>',r:{minutes:.32,words:95},y:"a",t:"VS打包工具",O:1}}],["/tools/nas/",{loader:()=>c(()=>import("./index.html-SiRO1B8I.js"),__vite__mapDeps([115,1])),meta:{y:"p",t:"NAS",i:"/assets/svg/nas.svg"}}],["/tools/nas/broadband.html",{loader:()=>c(()=>import("./broadband.html-DyTgkT4g.js"),__vite__mapDeps([116,1])),meta:{d:16847136e5,l:"2023年5月22日",c:["工具箱"],g:["公网"],o:!0,e:`<p>默认开通的宽带是一个大的局域网，可以访问外网，但是外网不能访问你的设备。所以需要向营业厅咨询开通外网才行。</p>
<p>外网分为<code>固定</code>和<code>动态</code>IP。</p>
<p><code>固定IP</code>只允许企业办理，开放<code>80</code>和<code>443</code>端口。</p>
<p>而家用宽带外网都是<code>动态IP</code>，不开放<code>80</code>和<code>443</code>端口,重启光猫之后<code>IP</code>地址变更。</p>
<p>为了解决断电或者重启光猫导致的<code>动态IP</code>地址变更问题，可以通过<code>域名</code>来解决。</p>`,r:{minutes:.77,words:231},y:"a",t:"宽带",O:1}}],["/tools/nas/cloud.html",{loader:()=>c(()=>import("./cloud.html-qPCgKTS-.js"),__vite__mapDeps([117,1])),meta:{d:168696e7,l:"2023年6月17日",c:["工具箱"],g:["网络"],o:!0,e:`<p>私有云部署离不开<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>和<a href="https://nginx.org/en/" target="_blank" rel="noopener noreferrer">nginx</a></p>
<p>以群晖为例:</p>
<h2>域名无法访问私有云</h2>
<p><code>Q</code>：一切配置正常，解析正常，测试正常，但就是无法通过域名访问私有云?</p>
<p><code>A</code>：<code>80</code>和<code>443</code>端口不对个人开放，需要加上非<code>80</code>和<code>443</code>端口。</p>`,r:{minutes:2.73,words:819},y:"a",t:"私有云",O:5}}],["/tools/nas/deploy.html",{loader:()=>c(()=>import("./deploy.html-DxrZPRJy.js"),__vite__mapDeps([118,1])),meta:{d:168696e7,l:"2023年6月17日",c:["工具箱"],g:["部署"],o:!0,e:`<h2>PC端IIS部署</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>域名默认是80端口可以不输入，其他端口需要加上端口号</p>
<p>Https默认443端口可以不输入，其他端口需要加上端口号</p>
</div>
<h3>普通网站</h3>
<ol>
<li>
<p>在<code>D</code>盘新建文件夹<code>test</code>，放入一张图片<code>1.jpg</code></p>
</li>
<li>
<p>打开IIS，选择网站右击，点击新建网站，网站名称随便输入,例如<code>test</code>，物理路径选择<code>D:\\test</code>，其他默认，确认后多出一个<code>test</code>的网站</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code>Default Web Site</code>默认80端口，可以将相关资源放在该目录下，这里将其停止</p>
</div>
<figure><img src="https://nas.ilyl.life:8092/network/iis1.png" alt="新建网站" width="420" height="200" tabindex="0" loading="lazy"><figcaption>新建网站</figcaption></figure>
</li>
<li>
<p>右击<code>test</code>选择<code>管理网站</code>、选择<code>浏览</code>,浏览器出现<code>Web 服务器被配置为不列出此目录的内容。</code>，通过<code>目录浏览</code>启用它即可，这里不这么做，在浏览器地址之后输入<code>/1.jpg</code>，显示图片</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>出现问题不要慌，IIS默认为网站服务的,地址之后隐藏了一个首页地址<code>Index.html</code></p>
</div>
<figure><img src="https://nas.ilyl.life:8092/network/iis2.png" alt="新建网站" width="420" height="200" tabindex="0" loading="lazy"><figcaption>新建网站</figcaption></figure>
</li>
<li>
<p>防火墙出入站规则，添加当前网站的端口</p>
</li>
<li>
<p>在浏览器中将<code>localhost</code>替换成<code>域名</code>，回车确认</p>
</li>
</ol>`,r:{minutes:3.07,words:922},y:"a",t:"部署",O:6}}],["/tools/nas/domain.html",{loader:()=>c(()=>import("./domain.html-DoXomUPd.js"),__vite__mapDeps([119,1])),meta:{d:168696e7,l:"2023年6月17日",c:["工具箱"],g:["域名","SSL"],o:!0,e:`<p>云服务器虽然可以公网访问，但是无法向外发布，通过域名可以解决</p>
<h2>域名</h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>域名需要ICP备案和公安备案</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>域名在哪里购买都行，但是完整的流程需要域名、备案、SSL、DNS解析</p>
</div>
<p>以阿里云为例，可以在<a href="https://wanwang.aliyun.com/" target="_blank" rel="noopener noreferrer">万网</a>选择自己喜欢的域名，或自己注册。</p>`,r:{minutes:1.42,words:427},y:"a",t:"域名",O:4}}],["/tools/nas/ont.html",{loader:()=>c(()=>import("./ont.html-04lnBoRk.js"),__vite__mapDeps([120,1])),meta:{d:16845408e5,l:"2023年5月20日",c:["工具箱"],g:["光猫"],o:!0,e:`<h2>IPv4改造</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>访问地址在光猫设备的背面，这只是<code>普通账户</code></p>
</div>
<p>将光猫的IPv4改造支持IPv6时，首先看提供的光猫本身是不是自带IPv6，进入光猫访问地址，查看选项有没有IPv6相关内容。</p>
<p>但是，很多光猫设备都是老款，只支持IPv4，这时就需要买个<code>支持IPv6的路由器</code>。</p>
<h3>获取超级管理员</h3>
<p>以华为光猫，型号HG8245为例；</p>`,r:{minutes:1.15,words:345},y:"a",t:"光猫",O:2}}],["/tools/nas/plex.html",{loader:()=>c(()=>import("./plex.html-BjxCEgQ2.js"),__vite__mapDeps([121,1])),meta:{d:16998336e5,l:"2023年11月13日",c:["工具箱"],g:["Plex"],o:!0,e:`<p>Plex最新版本，使用自定义证书发现无论如何都识别不到。相关问题在<a href="https://forums.plex.tv/t/plex-media-server-1-32-0-6918-custom-certificate-must-be-regenerated-with-new-openssl-arguments/837643" target="_blank" rel="noopener noreferrer">官方论坛</a>讨论过，解决方式如下。</p>
<h2>解决方式</h2>
<ol>
<li>下载并安装<a href="https://www.openssl.org/source/" target="_blank" rel="noopener noreferrer">OPENSSL</a>,由于Windows需要自己编译而无法直接安装,需要安装<a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank" rel="noopener noreferrer">windows OPENSSL</a>，默认路径<code>C:\\Program Files\\OpenSSL-Win64</code></li>
<li>下载域名证书<code>*.pem</code>和<code>*.key</code>两个文件</li>
<li>打开OPENSSL安装目录，输入<code>cmd</code></li>
<li>输入转换<code>openssl pkcs12 -export -out new.pfx -certpbe AES-256-CBC -keypbe AES-256-CBC -macalg SHA256 -inkey domain.key -in domain.pem -password pass:?????</code></li>
<li>生成新的<code>new.pfx</code>文件</li>
<li>在Plex设置里找到<code>网络</code></li>
<li>在自定义证书位置输入新的<code>*.pfx</code>证书位置</li>
<li>在自定义证书加密密钥输入<code>pass:???</code>pass后的密钥</li>
<li>在自定义证书域输入自己的域名</li>
<li>在自定义服务器访问URL输入自己的Plex服务器URL路径</li>
<li>点击保存修改</li>
<li>重启Plex服务</li>
</ol>`,r:{minutes:1.74,words:523},y:"a",t:"Plex证书无效"}}],["/tools/nas/router.html",{loader:()=>c(()=>import("./router.html-BN3zPWhc.js"),__vite__mapDeps([122,1])),meta:{d:16847136e5,l:"2023年5月22日",c:["工具箱"],g:["路由器"],o:!0,e:`<h2>启用IPv6</h2>
<p>以小米路由器为例</p>
<p>连接小米路由器Wifi时，在向导里，输入<code>宽带账户</code>、<code>宽带密码</code>，按流程配置完成之后，确认是否能连接到外网。</p>
<p>确认能上网之后，找到<code>常用设置</code>/<code>上网设置</code></p>
<p>工作模式切换选择<code>在路由器工作模式和中继工作模式之间进行切换</code></p>
<p>IPv6网络设置<code>开启</code></p>
<p><strong>重新</strong>选择<code>Native</code></p>
<p>自动配置DNS</p>`,r:{minutes:.72,words:216},y:"a",t:"路由",O:3}}],["/tools/nas/tv.html",{loader:()=>c(()=>import("./tv.html-D0nKbjZG.js"),__vite__mapDeps([123,1])),meta:{d:1704672e6,l:"2024年1月8日",c:["工具箱"],g:["TV"],o:!0,e:`<p>现在智能电视非常普及，但是很多频道需要收费，一种是需要开通IPTV，另外一种就是各个APP里的会员，但是其他端与TV端还不通用。</p>
<p>没钱的话就想办法自己搭建服务了。</p>
<p>以<a href="/tools/nas/plex.html" target="_blank">plex</a>作为服务端，客户端使用<a href="https://kodi.tv/" target="_blank" rel="noopener noreferrer">Kodi</a></p>
<h2>安装KODI</h2>
<p>启用智能电视里的<code>允许安装未知应用</code>。</p>`,r:{minutes:1.62,words:485},y:"a",t:"家庭影院"}}],["/tools/ts/",{loader:()=>c(()=>import("./index.html-B8y1GRj6.js"),__vite__mapDeps([124,1])),meta:{y:"p",t:"TypeScript",i:"/assets/svg/ts.svg"}}],["/tools/ts/promise.html",{loader:()=>c(()=>import("./promise.html-CpWrZ--n.js"),__vite__mapDeps([125,1])),meta:{d:16923168e5,l:"2023年8月18日",c:["工具箱"],g:["TS"],e:`<p>前端需要把数据多次提交给后端，然后返回的数据填充到真正的数据，在提交给后端。</p>
<p>正常数据由后端处理，但是放在了前端。</p>
<p>另外使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise</a>没有问题，但是有问题的在于后端不支持并发，比如多次提交文件等耗时作业。</p>
<p>这时需要将Promise调整为队列，依次提交处理，然后在一并最终提交给后端。</p>`,r:{minutes:1.9,words:569},y:"a",t:"Promise队列"}}],["/tools/ts/reflect_has.html",{loader:()=>c(()=>import("./reflect_has.html-BmSX_XHL.js"),__vite__mapDeps([126,1])),meta:{d:16854048e5,l:"2023年5月30日",c:["工具箱"],g:["TS"],e:'<p>在<code>ts</code>中使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has" target="_blank" rel="noopener noreferrer"><code>Reflect.has</code></a>方法来检查对象属性,同<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in" target="_blank" rel="noopener noreferrer"><code>in</code></a>。</p>',r:{minutes:.8,words:241},y:"a",t:"检查对象属性"}}],["/tools/vision/",{loader:()=>c(()=>import("./index.html-kD3z5GC-.js"),__vite__mapDeps([127,1])),meta:{d:17083008e5,l:"2024年2月19日",c:["工具箱"],g:["画质"],e:`<h2>画质标准</h2>
<h3>Dolby Vision</h3>
<p>Dolby Vision 是一项高动态范围（High Dynamic Range，HDR）视频技术，Dolby Vision 提供了比常规视频技术更多的颜色和明亮度等级，包括 12 位颜色和 10,000 尼特的亮度。</p>
<p>Dolby Vision 基于 Perceptual Quantizer（SMPTE ST 2084）制定的 HDR 视频标准，以及一个动态元数据系统，它可以在每个视频场景中对颜色、明亮度和对比度进行微调，以获得更准确的图像表现。</p>
<p>如需点亮蓝光原盘电影杜比视界图标，则需支持 Dolby Vision 的电视、播放器、及对应Dolby Vision的内容。</p>`,r:{minutes:12.39,words:3718},y:"a",t:"画质"}}],["/tools/vmware/",{loader:()=>c(()=>import("./index.html-BrZW-E5C.js"),__vite__mapDeps([128,1])),meta:{y:"p",t:"VMware",i:"/assets/svg/vmware.svg"}}],["/tools/vmware/cd.html",{loader:()=>c(()=>import("./cd.html--0sJvA7y.js"),__vite__mapDeps([129,1])),meta:{d:16848e8,l:"2023年5月23日",c:["工具箱"],g:["VMWARE"],o:!0,e:`<p>在<code>编辑虚拟机设置</code>,<code>CD/DVD(SATA)</code>高级选项里<code>SATA</code>选择<code>SATA 0:0</code></p>
<figure><img src="https://nas.ilyl.life:8092/vmware/vm1.png" alt="识别不到ISO问题" width="420" height="200" tabindex="0" loading="lazy"><figcaption>识别不到ISO问题</figcaption></figure>
`,r:{minutes:.2,words:60},y:"a",t:"识别不到ISO文件",O:1}}],["/tools/vmware/intel_vt.html",{loader:()=>c(()=>import("./intel_vt.html-CejvM_7D.js"),__vite__mapDeps([130,1])),meta:{d:16848e8,l:"2023年5月23日",c:["工具箱"],g:["VMWARE"],o:!0,e:`<p>启动虚拟机出现"此主机支持Intel VT-x,但Intel VT-x处于禁用状态"</p>
<h2>原因</h2>
<p>电脑没有开启虚拟化,进入BIOS开启即可。</p>
<h2>解决方式</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ol>
<li>
<p>不同电脑进入BIOS按键不一样，常见的有<code>F2</code>、<code>F12</code>、<code>F10</code>以及它们的组合键<code>Fn</code>+<code>F2</code>...</p>
</li>
<li>
<p>不同电脑BIOS也不一样，需要自己查找，总体上是相差不大。</p>
</li>
</ol>
</div>`,r:{minutes:.62,words:185},y:"a",t:"启动虚拟化错误",O:1}}],["/tools/yonyou/",{loader:()=>c(()=>import("./index.html-B-YgmgEm.js"),__vite__mapDeps([131,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<p>不在维护及更新，仅此怀念。</p>
<h2>通用接口</h2>
<p>通用支持yonyou U8 10.1及以上版本</p>
<h2>定制开发</h2>
<p>定制开发支持yonyou U8 10.1及以上版本，涉及<code>门户按钮</code>、<code>档案</code>、<code>单据</code>、<code>预警</code>、<code>定时</code>、<code>打包</code>等常用开发功能。</p>
<h2>JSON数据基本结构</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>其他特殊结构请参考具体示例</p>
</div>`,r:{minutes:2.32,words:696},y:"a",t:"关于接口"}}],["/web/vue/",{loader:()=>c(()=>import("./index.html-FJ9sMDI2.js"),__vite__mapDeps([132,1])),meta:{y:"p",t:"VUE",i:"/assets/svg/vue.svg"}}],["/web/vue/antd.html",{loader:()=>c(()=>import("./antd.html-CTrZYcGq.js"),__vite__mapDeps([133,1])),meta:{d:16855776e5,l:"2023年6月1日",c:["Web"],g:["ant-design-vue"],o:!0,e:`<p><a href="https://www.antdv.com/docs/vue/introduce-cn" target="_blank" rel="noopener noreferrer">ant-design-vue</a> 浏览器直接引入</p>
<div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/dayjs.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/customParseFormat.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/weekday.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/localeData.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/weekOfYear.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/weekYear.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/advancedFormat.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/dayjs/plugin/quarterOfYear.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.20/dist/antd.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">&gt;</span></span>ant-design-vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>antd<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:.4,words:120},y:"a",t:"antd",O:2}}],["/web/vue/element-plus.html",{loader:()=>c(()=>import("./element-plus.html-Dn10KM4T.js"),__vite__mapDeps([134,1])),meta:{d:16905024e5,l:"2023年7月28日",c:["Web"],g:["element-plus"],o:!0,e:`
`,r:{minutes:.39,words:118},y:"a",t:"element-plus",O:1}}],["/web/vue/event.html",{loader:()=>c(()=>import("./event.html-D43jNwMt.js"),__vite__mapDeps([135,1])),meta:{d:16892928e5,l:"2023年7月14日",c:["Web"],o:!0,e:`<p>在某些情况下需要禁用事件，通常会提供<code>disabled</code>或者<code>readonly</code>满足，但是会存在部分局限性。</p>
<p>例如：<code>disabled</code>是置灰了，而<code>readonly</code>不是每个控件都有，这时需要其他方式控制禁用事件。</p>
<p>场景: <code>ant-design-vue</code>里的<code>checkbox-group</code>禁用，<code>disabled</code>置灰了，调整原样，但是不能点击。</p>
<h2>CSS</h2>
<p>使用CSS来禁用，<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events" target="_blank" rel="noopener noreferrer">pointer-events</a></p>`,r:{minutes:1.36,words:407},y:"a",t:"禁止事件",O:4}}],["/web/vue/star.html",{loader:()=>c(()=>import("./star.html-DfrLdxKk.js"),__vite__mapDeps([136,1])),meta:{d:16905024e5,l:"2023年7月28日",c:["Web"],o:!0,e:`<p>在某些情况下需要在内容的前方加一些特殊内容显示，使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before" target="_blank" rel="noopener noreferrer">::before</a>能很好的解决这个问题。</p>
<div class="language-csharp" data-ext="cs" data-title="cs"><pre class="language-csharp"><code> label<span class="token punctuation">.</span>xrequired<span class="token punctuation">::</span>before <span class="token punctuation">{</span>
    color<span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    content<span class="token punctuation">:</span> <span class="token char">'*'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.28,words:85},y:"a",t:"必填项*",O:5}}],["/web/vue/theme.html",{loader:()=>c(()=>import("./theme.html-Bm-ac8A4.js"),__vite__mapDeps([137,1])),meta:{d:16849728e5,l:"2023年5月25日",c:["Web"],g:["Vue","主题色"],o:!0,e:`<p>全局更改主题色有多种方式。</p>
<p>关键在于使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS 变量</a>，定义在伪根类<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer"><code>:root</code></a>下，可以全局访问，并通过改变变量的值，使全局生效。</p>`,r:{minutes:2.13,words:640},y:"a",t:"主题色",O:3}}],["/tools/databases/mssql/",{loader:()=>c(()=>import("./index.html-CS-YMdrW.js"),__vite__mapDeps([138,1])),meta:{y:"p",t:"SQL Server"}}],["/tools/databases/mssql/date.html",{loader:()=>c(()=>import("./date.html-BauLY7Uu.js"),__vite__mapDeps([139,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["MSSQL"],o:!0,e:`<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">convert</span><span class="token punctuation">(</span>nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dateadd<span class="token punctuation">(</span><span class="token keyword">day</span><span class="token punctuation">,</span>number<span class="token punctuation">,</span><span class="token string">'2021-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">121</span><span class="token punctuation">)</span> <span class="token keyword">as</span> dt
<span class="token keyword">from</span> master<span class="token punctuation">.</span>dbo<span class="token punctuation">.</span>spt_values  
<span class="token keyword">where</span> <span class="token keyword">type</span> <span class="token operator">=</span><span class="token string">'P'</span> <span class="token operator">and</span> number <span class="token operator">&lt;=</span>DATEDIFF<span class="token punctuation">(</span><span class="token keyword">day</span><span class="token punctuation">,</span> <span class="token string">'2021-01-01'</span><span class="token punctuation">,</span>   <span class="token string">'2021-12-31'</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:.18,words:55},y:"a",t:"连续的日期",O:1}}],["/tools/databases/mssql/pageation.html",{loader:()=>c(()=>import("./pageation.html-B92751gT.js"),__vite__mapDeps([140,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["MSSQL"],o:!0,e:`<h2><code>offset</code>...<code>rows fetch next</code>...<code>rows only</code></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Sql Server 2012及以上才可以使用</p>
</div>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Persons <span class="token keyword">order</span> <span class="token keyword">by</span> FirstName <span class="token keyword">offset</span> <span class="token number">10</span> <span class="token keyword">rows</span> <span class="token keyword">fetch</span> <span class="token keyword">next</span> <span class="token number">10</span> <span class="token keyword">rows</span> only<span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:.23,words:70},y:"a",t:"分页",O:2}}],["/tools/databases/mssql/sqlserver-sync-to-mysql.html",{loader:()=>c(()=>import("./sqlserver-sync-to-mysql.html-B4hNB5Ll.js"),__vite__mapDeps([141,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["工具箱"],g:["MSSQL","MYSQL"],o:!0,e:`<h2>说明</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用MSSQL数据库自带的功能，配置即可实现双向同步</p>
</div>
<h2>下载</h2>
<p><a href="https://dev.mysql.com/downloads/installer/" target="_blank" rel="noopener noreferrer">MySql传送门</a></p>
<p><a href="https://dev.mysql.com/downloads/connector/odbc/" target="_blank" rel="noopener noreferrer">MySql ODBC传送门</a></p>`,r:{minutes:2.12,words:635},y:"a",t:"同步MySQL",O:3}}],["/tools/yonyou/financial/",{loader:()=>c(()=>import("./index.html-DGqYoNBj.js"),__vite__mapDeps([142,1])),meta:{y:"p",t:"财务"}}],["/tools/yonyou/financial/accept.html",{loader:()=>c(()=>import("./accept.html-ayOPZ6gU.js"),__vite__mapDeps([143,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/accept.gif" alt="收款单" tabindex="0" loading="lazy"><figcaption>收款单</figcaption></figure>
<h2>资源符</h2>
<p><code>accept</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">vouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">vouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据编号</td>
</tr>
<tr>
<td style="text-align:left">vouchdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据日期</td>
</tr>
<tr>
<td style="text-align:left">period</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">期间</td>
</tr>
<tr>
<td style="text-align:left">customercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编码</td>
</tr>
<tr>
<td style="text-align:left">departmentcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">itemclasscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类编号</td>
</tr>
<tr>
<td style="text-align:left">itemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">itemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目名称</td>
</tr>
<tr>
<td style="text-align:left">orderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">balancecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式</td>
</tr>
<tr>
<td style="text-align:left">notecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">应收应付票据编号</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">oppositebankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行帐号</td>
</tr>
<tr>
<td style="text-align:left">foreigncurrency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currencyrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">originalamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">录入人</td>
</tr>
<tr>
<td style="text-align:left">balanceitemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码(结算科目)</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">应收应付标志</td>
</tr>
<tr>
<td style="text-align:left">sitemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结算项目</td>
</tr>
<tr>
<td style="text-align:left">oppositebankname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对方单位银行名称</td>
</tr>
<tr>
<td style="text-align:left">bankname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本单位银行名称</td>
</tr>
<tr>
<td style="text-align:left">bankaccount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本单位银行账号</td>
</tr>
<tr>
<td style="text-align:left">define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项1</td>
</tr>
<tr>
<td style="text-align:left">define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项2</td>
</tr>
<tr>
<td style="text-align:left">define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项3</td>
</tr>
<tr>
<td style="text-align:left">define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项4</td>
</tr>
<tr>
<td style="text-align:left">define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项5</td>
</tr>
<tr>
<td style="text-align:left">define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项6</td>
</tr>
<tr>
<td style="text-align:left">define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项7</td>
</tr>
<tr>
<td style="text-align:left">define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项8</td>
</tr>
<tr>
<td style="text-align:left">define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项9</td>
</tr>
<tr>
<td style="text-align:left">define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项10</td>
</tr>
<tr>
<td style="text-align:left">define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项11</td>
</tr>
<tr>
<td style="text-align:left">define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项12</td>
</tr>
<tr>
<td style="text-align:left">define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项13</td>
</tr>
<tr>
<td style="text-align:left">define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项14</td>
</tr>
<tr>
<td style="text-align:left">define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项15</td>
</tr>
<tr>
<td style="text-align:left">define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项16</td>
</tr>
<tr>
<td style="text-align:left">ccontracttype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">合同类型</td>
</tr>
<tr>
<td style="text-align:left">ccontractid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">合同号</td>
</tr>
<tr>
<td style="text-align:left">iamount_s</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">startflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期初标志</td>
</tr>
<tr>
<td style="text-align:left">mainid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">主子表关联</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">款项类型</td>
</tr>
<tr>
<td style="text-align:left">customercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客商编码</td>
</tr>
<tr>
<td style="text-align:left">originalamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">itemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目</td>
</tr>
<tr>
<td style="text-align:left">projectclass</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类编号</td>
</tr>
<tr>
<td style="text-align:left">project</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目编号</td>
</tr>
<tr>
<td style="text-align:left">departmentcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">orderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">itemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目名称</td>
</tr>
<tr>
<td style="text-align:left">ccontype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">合同类型</td>
</tr>
<tr>
<td style="text-align:left">cconid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">合同号</td>
</tr>
<tr>
<td style="text-align:left">iamt_s</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">iramt_s</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">剩余数量</td>
</tr>
<tr>
<td style="text-align:left">define22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">define23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">define24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">define25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">define26</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">define27</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">define28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">define29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">define30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">define31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">define32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">define33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">define34</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">define35</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">define36</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">define37</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
</tbody>
</table>`,r:{minutes:2.56,words:769},y:"a",t:"收款单"}}],["/tools/yonyou/financial/capital-vouchers.html",{loader:()=>c(()=>import("./capital-vouchers.html-DwFHm41R.js"),__vite__mapDeps([144,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/capitalvouchers.gif" alt="固定资产变动单" tabindex="0" loading="lazy"><figcaption>固定资产变动单</figcaption></figure>
<h2>资源符</h2>
<p><code>capitalvouchers</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>请求参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">vouchertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动单类型</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">voucherdata</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动内容</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种名称</td>
</tr>
<tr>
<td style="text-align:left">exchangerate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">memreason</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动原因</td>
</tr>
<tr>
<td style="text-align:left">siteafter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动后存放地点</td>
</tr>
<tr>
<td style="text-align:left">worktotal</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作总量</td>
</tr>
<tr>
<td style="text-align:left">accwork</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计工作量</td>
</tr>
<tr>
<td style="text-align:left">workunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作量单位</td>
</tr>
<tr>
<td style="text-align:left">transdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动日期</td>
</tr>
<tr>
<td style="text-align:left">transperiod</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变动期间</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">经手人</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">deptno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">使用比例</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目名称</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应项目编码</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应项目名称</td>
</tr>
<tr>
<td style="text-align:left">relativecItemclsId</td>
<td style="text-align:left">string</td>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">deptno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">depreciationitemno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">depreciationitemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">relativeprojectno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">relativeprojectname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">relativecItemclsId</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\deptscale</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">sourceno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\sourcescale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
</tr>
<tr>
<td style="text-align:left">sourcescale</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry\\sourcescale</td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应折旧科目编码</td>
</tr>
</tbody>
</table>`,r:{minutes:1.18,words:353},y:"a",t:"固定资产变动单"}}],["/tools/yonyou/financial/ought-pay.html",{loader:()=>c(()=>import("./ought-pay.html-BBdzY4JS.js"),__vite__mapDeps([145,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/oughtpay.gif" alt="应付单" tabindex="0" loading="lazy"><figcaption>应付单</figcaption></figure>
<h2>资源符</h2>
<p><code>oughtpay</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>请求参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">子表关联项</td>
</tr>
<tr>
<td style="text-align:left">vouchertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">应收付单据号</td>
</tr>
<tr>
<td style="text-align:left">relatevouchercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应单据号</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据日期</td>
</tr>
<tr>
<td style="text-align:left">cust_vendor_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编号</td>
</tr>
<tr>
<td style="text-align:left">deptcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">item_classcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">item_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">currency_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currency_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">bdebitcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">借贷方向</td>
</tr>
<tr>
<td style="text-align:left">natamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">paycondition_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">付款条件</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">操作员姓名</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">标志</td>
</tr>
<tr>
<td style="text-align:left">quantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
</tr>
<tr>
<td style="text-align:left">startflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期初标志</td>
</tr>
<tr>
<td style="text-align:left">headid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">主表关联项</td>
</tr>
<tr>
<td style="text-align:left">cust_vendor_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客商编号</td>
</tr>
<tr>
<td style="text-align:left">deptcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">item_classcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">item_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">currency_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currency_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">bdebitcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">借贷方向</td>
</tr>
<tr>
<td style="text-align:left">natamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">define22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">define23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">define24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">define25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">define26</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">define27</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">define28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">define29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">define30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">define31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">define32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">define33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">define34</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">define35</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">define36</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">define37</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
</tbody>
</table>`,r:{minutes:2.34,words:702},y:"a",t:"应付单"}}],["/tools/yonyou/financial/ought-receive.html",{loader:()=>c(()=>import("./ought-receive.html-CnudnY1w.js"),__vite__mapDeps([146,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/oughreceive.gif" alt="应收单" tabindex="0" loading="lazy"><figcaption>应收单</figcaption></figure>
<h2>资源符</h2>
<p><code>oughreceive</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>请求参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">子表关联项</td>
</tr>
<tr>
<td style="text-align:left">vouchertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">应收付单据号</td>
</tr>
<tr>
<td style="text-align:left">relatevouchercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应单据号</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">单据日期</td>
</tr>
<tr>
<td style="text-align:left">cust_vendor_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客商编号</td>
</tr>
<tr>
<td style="text-align:left">deptcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">item_classcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">item_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">currency_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currency_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">bdebitcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">借贷方向</td>
</tr>
<tr>
<td style="text-align:left">natamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">paycondition_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">付款条件</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">操作员姓名</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">标志</td>
</tr>
<tr>
<td style="text-align:left">quantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
</tr>
<tr>
<td style="text-align:left">startflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期初标志</td>
</tr>
<tr>
<td style="text-align:left">headid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">主表关联项</td>
</tr>
<tr>
<td style="text-align:left">cust_vendor_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客商编号</td>
</tr>
<tr>
<td style="text-align:left">deptcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">personcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">职员编码</td>
</tr>
<tr>
<td style="text-align:left">item_classcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">item_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">digest</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">currency_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">currency_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">bdebitcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">借贷方向</td>
</tr>
<tr>
<td style="text-align:left">natamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">define22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">define23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">define24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">define25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">define26</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">define27</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">define28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">define29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">define30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">define31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">define32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">define33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">define34</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">define35</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">define36</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">define37</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
</tbody>
</table>`,r:{minutes:2.33,words:700},y:"a",t:"应收单"}}],["/tools/yonyou/financial/voucher.html",{loader:()=>c(()=>import("./voucher.html-DkoMNzuI.js"),__vite__mapDeps([147,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/voucher.gif" alt="凭证" tabindex="0" loading="lazy"><figcaption>凭证</figcaption></figure>
<h2>资源符</h2>
<p><code>voucher</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">voucher_type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证类别</td>
</tr>
<tr>
<td style="text-align:left">fiscal_year</td>
<td style="text-align:left">number</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证所属的会计年度，不填写取当前年</td>
</tr>
<tr>
<td style="text-align:left">accounting_period</td>
<td style="text-align:left">number</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属的会计期间，不填写取当前月份</td>
</tr>
<tr>
<td style="text-align:left">voucher_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证号</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">制单日期</td>
</tr>
<tr>
<td style="text-align:left">enter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">制单人名称</td>
</tr>
<tr>
<td style="text-align:left">cashier</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">出纳名称</td>
</tr>
<tr>
<td style="text-align:left">attachment_number</td>
<td style="text-align:left">number</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">附单据数</td>
</tr>
<tr>
<td style="text-align:left">voucher_making_system</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">外部系统类型</td>
</tr>
<tr>
<td style="text-align:left">reserve2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">外部凭证业务号</td>
</tr>
<tr>
<td style="text-align:left">account_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">abstract</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种，默认人民币</td>
</tr>
<tr>
<td style="text-align:left">unit_price</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">单价,在科目有数量核算时，填写此项</td>
</tr>
<tr>
<td style="text-align:left">exchange_rate1</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率1，主辅币核算时使用，NC用户使用</td>
</tr>
<tr>
<td style="text-align:left">exchange_rate2</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率2，折本汇率，U8用户使用</td>
</tr>
<tr>
<td style="text-align:left">quantity</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">借方数量,在科目有数量核算时，填写此项</td>
</tr>
<tr>
<td style="text-align:left">primary_amount</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">原币借方发生额</td>
</tr>
<tr>
<td style="text-align:left">secondary_amount</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">辅币借方发生额</td>
</tr>
<tr>
<td style="text-align:left">natural_currency</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币借方发生额*与本币贷方发生额不能同时为空</td>
</tr>
<tr>
<td style="text-align:left">dept_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">personnel_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">人员</td>
</tr>
<tr>
<td style="text-align:left">cust_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户</td>
</tr>
<tr>
<td style="text-align:left">supplier_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">item_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">item_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目档案</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">业务员</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/auxiliary</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
</tr>
<tr>
<td style="text-align:left">cexch_name</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">RowGuid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">行标识</td>
</tr>
<tr>
<td style="text-align:left">iYPeriod</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">年期间</td>
</tr>
<tr>
<td style="text-align:left">iyear</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">年</td>
</tr>
<tr>
<td style="text-align:left">csign</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证类别字</td>
</tr>
<tr>
<td style="text-align:left">nd_s</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">数量借方</td>
</tr>
<tr>
<td style="text-align:left">md_f</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">外币借方</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">md</td>
<td style="text-align:left">number</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">借方金额</td>
</tr>
<tr>
<td style="text-align:left">cCashItem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">现金项目</td>
</tr>
<tr>
<td style="text-align:left">cash_item</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">现金项目</td>
</tr>
<tr>
<td style="text-align:left">natural_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本币借方发生额*与本币贷方发生额不能同时为空</td>
</tr>
<tr>
<td style="text-align:left">cdept_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">cperson_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">人员</td>
</tr>
<tr>
<td style="text-align:left">ccus_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户</td>
</tr>
<tr>
<td style="text-align:left">csup_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">citem_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目档案</td>
</tr>
<tr>
<td style="text-align:left">cDefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">cDefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">cDefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">cDefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">cDefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">cDefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">cDefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">cDefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">cDefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">cDefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">cDefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">cDefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">cDefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">cDefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">cDefine15</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">cDefine16</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry/cash_flow</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
</tr>
</tbody>
</table>`,r:{minutes:3.3,words:991},y:"a",t:"凭证"}}],["/tools/yonyou/archives/",{loader:()=>c(()=>import("./index.html-CBdSO5U7.js"),__vite__mapDeps([148,1])),meta:{y:"p",t:"基础档案"}}],["/tools/yonyou/archives/aa_bank.html",{loader:()=>c(()=>import("./aa_bank.html-DN0co768.js"),__vite__mapDeps([149,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/aa_bank.gif" alt="银行档案" tabindex="0" loading="lazy"><figcaption>银行档案</figcaption></figure>
<h2>资源符</h2>
<p><code>aa_bank</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行名称</td>
</tr>
<tr>
<td style="text-align:left">bindfixlen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">个人账号是否定长</td>
</tr>
<tr>
<td style="text-align:left">iindaccnolen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">个人账号长度</td>
</tr>
<tr>
<td style="text-align:left">iindautoinputlen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自动带出的个人账号长度</td>
</tr>
<tr>
<td style="text-align:left">cindunitcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单位编码</td>
</tr>
<tr>
<td style="text-align:left">bcomdfixlen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">企业账号是否定长</td>
</tr>
<tr>
<td style="text-align:left">icomaccnolen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">企业账号长度</td>
</tr>
<tr>
<td style="text-align:left">i_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行标识</td>
</tr>
</tbody>
</table>`,r:{minutes:.58,words:174},y:"a",t:"银行档案"}}],["/tools/yonyou/archives/assembly.html",{loader:()=>c(()=>import("./assembly.html-Dj2POCGx.js"),__vite__mapDeps([150,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/assembly.gif" alt="成套件" tabindex="0" loading="lazy"><figcaption>成套件</figcaption></figure>
<h2>资源符</h2>
<p><code>assembly</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">assemblycode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">套装件编码</td>
</tr>
<tr>
<td style="text-align:left">fittingcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单件编码</td>
</tr>
<tr>
<td style="text-align:left">fittingquantity</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单件数量</td>
</tr>
<tr>
<td style="text-align:left">fittingnumber</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单件件数</td>
</tr>
<tr>
<td style="text-align:left">fittingcost</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单件成本</td>
</tr>
<tr>
<td style="text-align:left">fittingprice</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单件单价</td>
</tr>
<tr>
<td style="text-align:left">cAComunitCode</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">辅计量单位编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.46,words:139},y:"a",t:"成套件"}}],["/tools/yonyou/archives/balance-type.html",{loader:()=>c(()=>import("./balance-type.html-C6FfmuwY.js"),__vite__mapDeps([151,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/balancetype.gif" alt="结算方式" tabindex="0" loading="lazy"><figcaption>结算方式</figcaption></figure>
<h2>资源符</h2>
<p><code>balancetype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">结算方式名称</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否票据管理</td>
</tr>
<tr>
<td style="text-align:left">code_rank</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_rank_flag</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否末级</td>
</tr>
<tr>
<td style="text-align:left">issbilltype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应票据类型</td>
</tr>
<tr>
<td style="text-align:left">bPortalSettle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">允许门户结算</td>
</tr>
<tr>
<td style="text-align:left">iNEInBillType</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应网报支付方式</td>
</tr>
</tbody>
</table>`,r:{minutes:.53,words:158},y:"a",t:"结算方式"}}],["/tools/yonyou/archives/bank-account.html",{loader:()=>c(()=>import("./bank-account.html-CHBjlNSm.js"),__vite__mapDeps([152,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/bankacc.gif" alt="银行对账单" tabindex="0" loading="lazy"><figcaption>银行对账单</figcaption></figure>
<h2>资源符</h2>
<p><code>bankacc</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行对账单日期</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">balancetype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结算方式</td>
</tr>
<tr>
<td style="text-align:left">balanceno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结算号</td>
</tr>
<tr>
<td style="text-align:left">debitorcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">方向</td>
</tr>
<tr>
<td style="text-align:left">money</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">金额</td>
</tr>
<tr>
<td style="text-align:left">balance</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">余额</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对帐标志</td>
</tr>
<tr>
<td style="text-align:left">beginflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期初标志</td>
</tr>
<tr>
<td style="text-align:left">bdelete</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否核销</td>
</tr>
</tbody>
</table>`,r:{minutes:.54,words:161},y:"a",t:"银行对账单"}}],["/tools/yonyou/archives/bank.html",{loader:()=>c(()=>import("./bank.html-CJu9tXKv.js"),__vite__mapDeps([153,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/bank.gif" alt="本单位开户银行" tabindex="0" loading="lazy"><figcaption>本单位开户银行</figcaption></figure>
<h2>资源符</h2>
<p><code>bank</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行编号</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">开户银行名称</td>
</tr>
<tr>
<td style="text-align:left">account</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行帐号</td>
</tr>
<tr>
<td style="text-align:left">flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">暂封标志</td>
</tr>
<tr>
<td style="text-align:left">cbankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属银行</td>
</tr>
<tr>
<td style="text-align:left">caccname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">账户名称</td>
</tr>
<tr>
<td style="text-align:left">copenaccaddr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">开户银行地址</td>
</tr>
<tr>
<td style="text-align:left">cprovincename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">省/自治区</td>
</tr>
<tr>
<td style="text-align:left">ccountyname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">市/县</td>
</tr>
<tr>
<td style="text-align:left">ccurrencyname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">dopenaccdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">开户日期</td>
</tr>
<tr>
<td style="text-align:left">ccustomerno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户编号</td>
</tr>
<tr>
<td style="text-align:left">corgno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">机构号</td>
</tr>
<tr>
<td style="text-align:left">cunionbankno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">联行号</td>
</tr>
<tr>
<td style="text-align:left">isignflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">签约标志</td>
</tr>
<tr>
<td style="text-align:left">bpwdmng</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">进行密码管理</td>
</tr>
<tr>
<td style="text-align:left">iCcbAccountType</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">建行账号属性</td>
</tr>
<tr>
<td style="text-align:left">cTradeAddCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">交易代码</td>
</tr>
<tr>
<td style="text-align:left">iAccProperty</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">账户属性</td>
</tr>
<tr>
<td style="text-align:left">cCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应科目</td>
</tr>
<tr>
<td style="text-align:left">fCurBalance</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">当前余额</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cBankDefine16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项16</td>
</tr>
</tbody>
</table>`,r:{minutes:1.32,words:396},y:"a",t:"本单位开户银行"}}],["/tools/yonyou/archives/batch-property.html",{loader:()=>c(()=>import("./batch-property.html-iskL512Y.js"),__vite__mapDeps([154,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/batchproperty.gif" alt="批次档案" tabindex="0" loading="lazy"><figcaption>批次档案</figcaption></figure>
<h2>资源符</h2>
<p><code>batchproperty</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cbatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">批号</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项1</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项2</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项3</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项4</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项5</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项6</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项7</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项8</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项9</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项10</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性1</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性2</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性4</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性5</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性6</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性7</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性8</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">属性10</td>
</tr>
</tbody>
</table>`,r:{minutes:.74,words:221},y:"a",t:"批次档案"}}],["/tools/yonyou/archives/capital-asset-types.html",{loader:()=>c(()=>import("./capital-asset-types.html-DuTfpZh2.js"),__vite__mapDeps([155,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/capitalassettypes.gif" alt="资产类别" tabindex="0" loading="lazy"><figcaption>资产类别</figcaption></figure>
<h2>资源符</h2>
<p><code>capitalassettypes</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">assettypeno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产类别编码</td>
</tr>
<tr>
<td style="text-align:left">assettypename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产类别名称</td>
</tr>
<tr>
<td style="text-align:left">deprmethodnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">折旧方法编码</td>
</tr>
<tr>
<td style="text-align:left">deprtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计提属性编码</td>
</tr>
<tr>
<td style="text-align:left">dblbvrate</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">净残值率</td>
</tr>
<tr>
<td style="text-align:left">unit</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计量单位</td>
</tr>
<tr>
<td style="text-align:left">life</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">使用年限</td>
</tr>
<tr>
<td style="text-align:left">modelid</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">卡片样式</td>
</tr>
<tr>
<td style="text-align:left">assetsubjectnum</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">固定资产入账科目</td>
</tr>
<tr>
<td style="text-align:left">deprtotalsubjectnum</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">累计折旧入账科目</td>
</tr>
<tr>
<td style="text-align:left">decpresubjectnum</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">减值准备入账科目</td>
</tr>
<tr>
<td style="text-align:left">bnotcanretdecvalue</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">不允许转回减值准备</td>
</tr>
<tr>
<td style="text-align:left">cleanupsubjectnum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">资产清理入账科目</td>
</tr>
<tr>
<td style="text-align:left">bnewassetdepr</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">新增当月计提折旧</td>
</tr>
<tr>
<td style="text-align:left">deprsubjectbytype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">按资产类别默认折旧科目</td>
</tr>
</tbody>
</table>`,r:{minutes:.79,words:237},y:"a",t:"资产类别"}}],["/tools/yonyou/archives/capital-assets.html",{loader:()=>c(()=>import("./capital-assets.html-w_Evb12C.js"),__vite__mapDeps([156,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/capitalasserts.gif" alt="固定资产卡片" tabindex="0" loading="lazy"><figcaption>固定资产卡片</figcaption></figure>
<h2>资源符</h2>
<p><code>capitalasserts</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">资产编号</td>
</tr>
<tr>
<td style="text-align:left">assetname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">固定资产名称</td>
</tr>
<tr>
<td style="text-align:left">typeno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">类别编码</td>
</tr>
<tr>
<td style="text-align:left">originalvalue</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">原值</td>
</tr>
<tr>
<td style="text-align:left">startusedate</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">开始使用日期</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种名称</td>
</tr>
<tr>
<td style="text-align:left">foreigncurrencynumber</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">外币原值</td>
</tr>
<tr>
<td style="text-align:left">exchangerate</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">worktotal</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作总量</td>
</tr>
<tr>
<td style="text-align:left">workunit</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">工作量单位</td>
</tr>
<tr>
<td style="text-align:left">accwork</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计工作量</td>
</tr>
<tr>
<td style="text-align:left">accdepr</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计折旧</td>
</tr>
<tr>
<td style="text-align:left">usedmonths</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">已使用月份</td>
</tr>
<tr>
<td style="text-align:left">accountaddmannerno</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">增加方式编号</td>
</tr>
<tr>
<td style="text-align:left">status</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">使用状况编号</td>
</tr>
<tr>
<td style="text-align:left">depreciationmanner</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">折旧方法编号</td>
</tr>
<tr>
<td style="text-align:left">life</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">可使用月份</td>
</tr>
<tr>
<td style="text-align:left">netleftvalue</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">净残值</td>
</tr>
<tr>
<td style="text-align:left">netleftvaluerate</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">净残值率</td>
</tr>
<tr>
<td style="text-align:left">style</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">buildingarea</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">建筑面积</td>
</tr>
<tr>
<td style="text-align:left">buildingquantity</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">间(座)数</td>
</tr>
<tr>
<td style="text-align:left">machinequantity</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电机数量</td>
</tr>
<tr>
<td style="text-align:left">machinewatt</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电机功率</td>
</tr>
<tr>
<td style="text-align:left">reservesite</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">存放地点</td>
</tr>
<tr>
<td style="text-align:left">decvalue</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">减值准备金额</td>
</tr>
<tr>
<td style="text-align:left">sgroupnum</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">资产组编码</td>
</tr>
<tr>
<td style="text-align:left">addtax</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">增值税</td>
</tr>
<tr>
<td style="text-align:left">skeeper</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保管人</td>
</tr>
<tr>
<td style="text-align:left">cVenCode</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cVenName</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商名称</td>
</tr>
<tr>
<td style="text-align:left">dPurDate</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购日期</td>
</tr>
<tr>
<td style="text-align:left">sSeriesNum</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">sCommodityCode</td>
<td style="text-align:left">float</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">商品码</td>
</tr>
<tr>
<td style="text-align:left">assetno</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">商品码</td>
</tr>
<tr>
<td style="text-align:left">deptno</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">deptscale</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemno</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">depreciationitemname</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectno</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">relativeprojectname</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">relativecItemclsId</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">sourceNum</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">sourceScale</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
<tr>
<td style="text-align:left">ProScale</td>
<td style="text-align:left">float</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编号</td>
</tr>
</tbody>
</table>`,r:{minutes:1.52,words:456},y:"a",t:"固定资产卡片"}}],["/tools/yonyou/archives/code-balance.html",{loader:()=>c(()=>import("./code-balance.html-SpA6aHKx.js"),__vite__mapDeps([157,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/codebalance.gif" alt="期初余额" tabindex="0" loading="lazy"><figcaption>期初余额</figcaption></figure>
<h2>资源符</h2>
<p><code>codebalance</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">account_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">auxiliary_accounting</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">辅助核算类型</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证日期</td>
</tr>
<tr>
<td style="text-align:left">voucher_type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证类别</td>
</tr>
<tr>
<td style="text-align:left">voucher_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">凭证号</td>
</tr>
<tr>
<td style="text-align:left">abstract</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">摘要</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">币种名称</td>
</tr>
<tr>
<td style="text-align:left">direction</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">金额期初方向</td>
</tr>
<tr>
<td style="text-align:left">debit_quantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">数量借方</td>
</tr>
<tr>
<td style="text-align:left">primary_debit_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计借方原币金额</td>
</tr>
<tr>
<td style="text-align:left">natural_debit_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计借方本币金额</td>
</tr>
<tr>
<td style="text-align:left">credit_quantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">数量贷方</td>
</tr>
<tr>
<td style="text-align:left">primary_credit_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计贷方原币金额</td>
</tr>
<tr>
<td style="text-align:left">natural_credit_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">累计贷方本币金额</td>
</tr>
<tr>
<td style="text-align:left">end_quantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">数量期末</td>
</tr>
<tr>
<td style="text-align:left">primary_end_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">原币期末</td>
</tr>
<tr>
<td style="text-align:left">natural_end_currency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">金额期末</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
<td style="text-align:left"></td>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
</tr>
</tbody>
</table>`,r:{minutes:.86,words:257},y:"a",t:"期初余额"}}],["/tools/yonyou/archives/code.html",{loader:()=>c(()=>import("./code.html-DPwf6jfd.js"),__vite__mapDeps([158,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/code.gif" alt="会计科目" tabindex="0" loading="lazy"><figcaption>会计科目</figcaption></figure>
<h2>资源符</h2>
<p><code>code</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>请求参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目类型</td>
</tr>
<tr>
<td style="text-align:left">type_ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目类型英文名称</td>
</tr>
<tr>
<td style="text-align:left">analysis_type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">财务分析类型</td>
</tr>
<tr>
<td style="text-align:left">analysis_type_ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">财务分析类型英文名称</td>
</tr>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目名称</td>
</tr>
<tr>
<td style="text-align:left">ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目英文名称</td>
</tr>
<tr>
<td style="text-align:left">grade</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目级次</td>
</tr>
<tr>
<td style="text-align:left">prop</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目性质</td>
</tr>
<tr>
<td style="text-align:left">acclist_style</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">帐页格式</td>
</tr>
<tr>
<td style="text-align:left">acclist_style_ename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">帐页格式英文名称</td>
</tr>
<tr>
<td style="text-align:left">ac_assist</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目助记码</td>
</tr>
<tr>
<td style="text-align:left">fc_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">外币名称</td>
</tr>
<tr>
<td style="text-align:left">measure_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计量单位</td>
</tr>
<tr>
<td style="text-align:left">person_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">个人往来核算</td>
</tr>
<tr>
<td style="text-align:left">cust_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户往来核算</td>
</tr>
<tr>
<td style="text-align:left">supplier_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商往来核算</td>
</tr>
<tr>
<td style="text-align:left">dept_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门核算</td>
</tr>
<tr>
<td style="text-align:left">item_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目核算</td>
</tr>
<tr>
<td style="text-align:left">item_category</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目大类</td>
</tr>
<tr>
<td style="text-align:left">date_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">日记帐</td>
</tr>
<tr>
<td style="text-align:left">bank_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行帐</td>
</tr>
<tr>
<td style="text-align:left">sum_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否汇总打印</td>
</tr>
<tr>
<td style="text-align:left">end_item_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否末级科目</td>
</tr>
<tr>
<td style="text-align:left">exchange_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否参与汇兑损益计算</td>
</tr>
<tr>
<td style="text-align:left">cash_acc_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否现金科目</td>
</tr>
<tr>
<td style="text-align:left">bank_acc_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否银行科目</td>
</tr>
<tr>
<td style="text-align:left">bacc_enable_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行账科目是否启用</td>
</tr>
<tr>
<td style="text-align:left">bacc_balance_way</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行账科目对账方向</td>
</tr>
<tr>
<td style="text-align:left">bacc_begin</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行账科目启用日期</td>
</tr>
<tr>
<td style="text-align:left">bacc_end</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行账科目对账截止日期</td>
</tr>
<tr>
<td style="text-align:left">period_pl</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期间损益</td>
</tr>
<tr>
<td style="text-align:left">acc_seal_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目是否封存</td>
</tr>
<tr>
<td style="text-align:left">ctrled_acc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">受控科目</td>
</tr>
<tr>
<td style="text-align:left">other_use_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">其它系统是否使用</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段3</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义字段16</td>
</tr>
<tr>
<td style="text-align:left">itemtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">在建工程项目科目类型</td>
</tr>
<tr>
<td style="text-align:left">proj_balance</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否工程结算科目</td>
</tr>
<tr>
<td style="text-align:left">cashitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否常用现金流量科目</td>
</tr>
</tbody>
</table>`,r:{minutes:2.16,words:647},y:"a",t:"会计科目"}}],["/tools/yonyou/archives/currency.html",{loader:()=>c(()=>import("./currency.html-9RMy03KQ.js"),__vite__mapDeps([159,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/currency.gif" alt="外币设置" tabindex="0" loading="lazy"><figcaption>外币设置</figcaption></figure>
<h2>资源符</h2>
<p><code>currency</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种名称</td>
</tr>
<tr>
<td style="text-align:left">caltype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">折算方式</td>
</tr>
<tr>
<td style="text-align:left">precision</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">小数位数</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最大误差</td>
</tr>
<tr>
<td style="text-align:left">otherused</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">其它系统是否使用</td>
</tr>
</tbody>
</table>`,r:{minutes:.46,words:139},y:"a",t:"外币设置"}}],["/tools/yonyou/archives/customer-class.html",{loader:()=>c(()=>import("./customer-class.html-DUpqc0v0.js"),__vite__mapDeps([160,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/customerclass.gif" alt="客户分类" tabindex="0" loading="lazy"><figcaption>客户分类</figcaption></figure>
<h2>资源符</h2>
<p><code>customerclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户分类编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户分类名称</td>
</tr>
<tr>
<td style="text-align:left">rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户分类编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_rank_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">末级标志</td>
</tr>
</tbody>
</table>`,r:{minutes:.4,words:120},y:"a",t:"客户分类"}}],["/tools/yonyou/archives/customer-inventory.html",{loader:()=>c(()=>import("./customer-inventory.html-C56QHNbk.js"),__vite__mapDeps([161,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/cusandinv.gif" alt="客户存货对照表" tabindex="0" loading="lazy"><figcaption>客户存货对照表</figcaption></figure>
<h2>资源符</h2>
<p><code>cusandinv</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ccuscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户编码</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">ccusinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户存货编码</td>
</tr>
<tr>
<td style="text-align:left">ccusinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户存货名称</td>
</tr>
<tr>
<td style="text-align:left">iteststyle</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验方式</td>
</tr>
<tr>
<td style="text-align:left">idtmethod</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检方案</td>
</tr>
<tr>
<td style="text-align:left">fdtrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检率</td>
</tr>
<tr>
<td style="text-align:left">fdtnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检量</td>
</tr>
<tr>
<td style="text-align:left">cdtunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验计量单位</td>
</tr>
<tr>
<td style="text-align:left">idtstyle</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检方式</td>
</tr>
<tr>
<td style="text-align:left">idtlevel</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验水平</td>
</tr>
<tr>
<td style="text-align:left">cdtaql</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">AQL</td>
</tr>
<tr>
<td style="text-align:left">boutinvdt</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否发货检验</td>
</tr>
<tr>
<td style="text-align:left">crulecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义抽检规则</td>
</tr>
<tr>
<td style="text-align:left">fcusinvwasterate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发货合理损耗率%</td>
</tr>
</tbody>
</table>`,r:{minutes:.66,words:199},y:"a",t:"客户存货对照表"}}],["/tools/yonyou/archives/customer-linker.html",{loader:()=>c(()=>import("./customer-linker.html-jiRE60aC.js"),__vite__mapDeps([162,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/customerlinker.gif" alt="客户联系人" tabindex="0" loading="lazy"><figcaption>客户联系人</figcaption></figure>
<h2>资源符</h2>
<p><code>customerlinker</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">联系人编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">联系人名称</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">称呼</td>
</tr>
<tr>
<td style="text-align:left">of_customer</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属客户</td>
</tr>
<tr>
<td style="text-align:left">sex</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">性别</td>
</tr>
<tr>
<td style="text-align:left">birthday</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">生日</td>
</tr>
<tr>
<td style="text-align:left">native</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">籍贯</td>
</tr>
<tr>
<td style="text-align:left">position</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职务</td>
</tr>
<tr>
<td style="text-align:left">direct_leader</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">直接上级</td>
</tr>
<tr>
<td style="text-align:left">mobile</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">移动电话</td>
</tr>
<tr>
<td style="text-align:left">office_phone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">办公电话</td>
</tr>
<tr>
<td style="text-align:left">family_phone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">家庭电话</td>
</tr>
<tr>
<td style="text-align:left">bp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">传呼</td>
</tr>
<tr>
<td style="text-align:left">email</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">电子邮件</td>
</tr>
<tr>
<td style="text-align:left">web</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">个人网址</td>
</tr>
<tr>
<td style="text-align:left">work_address</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作地址</td>
</tr>
<tr>
<td style="text-align:left">postcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">邮编</td>
</tr>
<tr>
<td style="text-align:left">marriage</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">婚姻状况</td>
</tr>
<tr>
<td style="text-align:left">family_member</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">家庭主要成员</td>
</tr>
<tr>
<td style="text-align:left">family_address</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">家庭地址</td>
</tr>
<tr>
<td style="text-align:left">favorite</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">个人爱好</td>
</tr>
<tr>
<td style="text-align:left">be_main_linker</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否主要联系人</td>
</tr>
<tr>
<td style="text-align:left">charge_person</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">负责人</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">founder</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">建档人</td>
</tr>
<tr>
<td style="text-align:left">fondertime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">建档时间</td>
</tr>
<tr>
<td style="text-align:left">change_person</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变更人</td>
</tr>
<tr>
<td style="text-align:left">change_time</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">变更时间</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项3</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">自定义项16</td>
</tr>
</tbody>
</table>`,r:{minutes:1.36,words:409},y:"a",t:"客户联系人"}}],["/tools/yonyou/archives/customer.html",{loader:()=>c(()=>import("./customer.html-BmrP6XQa.js"),__vite__mapDeps([163,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/customer.gif" alt="客户档案" tabindex="0" loading="lazy"><figcaption>客户档案</figcaption></figure>
<h2>资源符</h2>
<p><code>customer</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户名称</td>
</tr>
<tr>
<td style="text-align:left">abbrname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户简称</td>
</tr>
<tr>
<td style="text-align:left">cCusMnemCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">助记码</td>
</tr>
<tr>
<td style="text-align:left">sort_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属分类码</td>
</tr>
<tr>
<td style="text-align:left">domain_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属地区码</td>
</tr>
<tr>
<td style="text-align:left">industry</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属行业</td>
</tr>
<tr>
<td style="text-align:left">address</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">地址</td>
</tr>
<tr>
<td style="text-align:left">postcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">邮政编码</td>
</tr>
<tr>
<td style="text-align:left">tax_reg_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">纳税人登记号</td>
</tr>
<tr>
<td style="text-align:left">bank_open</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">开户银行</td>
</tr>
<tr>
<td style="text-align:left">bank_acc_number</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行账号</td>
</tr>
<tr>
<td style="text-align:left">seed_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">发展日期</td>
</tr>
<tr>
<td style="text-align:left">legal_man</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人</td>
</tr>
<tr>
<td style="text-align:left">email</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">Email地址</td>
</tr>
<tr>
<td style="text-align:left">contact</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">联系人</td>
</tr>
<tr>
<td style="text-align:left">phone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电话</td>
</tr>
<tr>
<td style="text-align:left">fax</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">传真</td>
</tr>
<tr>
<td style="text-align:left">bp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">QQ号</td>
</tr>
<tr>
<td style="text-align:left">mobile</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">手机</td>
</tr>
<tr>
<td style="text-align:left">spec_operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">专管业务员</td>
</tr>
<tr>
<td style="text-align:left">discount_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">扣率</td>
</tr>
<tr>
<td style="text-align:left">credit_rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">信用等级</td>
</tr>
<tr>
<td style="text-align:left">credit_amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用额度</td>
</tr>
<tr>
<td style="text-align:left">credit_deadline</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用期限</td>
</tr>
<tr>
<td style="text-align:left">pay_condition</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">付款条件</td>
</tr>
<tr>
<td style="text-align:left">devliver_site</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发货地址</td>
</tr>
<tr>
<td style="text-align:left">deliver_mode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发货方式</td>
</tr>
<tr>
<td style="text-align:left">head_corp_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">客户总公司编码</td>
</tr>
<tr>
<td style="text-align:left">deli_warehouse</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发货仓库</td>
</tr>
<tr>
<td style="text-align:left">super_dept</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">分管部门</td>
</tr>
<tr>
<td style="text-align:left">ar_rest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">应收余额</td>
</tr>
<tr>
<td style="text-align:left">last_tr_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后交易日期</td>
</tr>
<tr>
<td style="text-align:left">last_tr_amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后交易金额</td>
</tr>
<tr>
<td style="text-align:left">last_rec_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后收款日期</td>
</tr>
<tr>
<td style="text-align:left">last_rec_amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后收款金额</td>
</tr>
<tr>
<td style="text-align:left">end_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">停用日期</td>
</tr>
<tr>
<td style="text-align:left">tr_frequency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">使用频度</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项3</td>
</tr>
<tr>
<td style="text-align:left">pricegrade</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">价格级别</td>
</tr>
<tr>
<td style="text-align:left">CreatePerson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">建档人</td>
</tr>
<tr>
<td style="text-align:left">ModifyPerson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">变更人</td>
</tr>
<tr>
<td style="text-align:left">ModifyDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">变更日期</td>
</tr>
<tr>
<td style="text-align:left">auth_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属权限分类</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项16</td>
</tr>
<tr>
<td style="text-align:left">InvoiceCompany</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">开票单位</td>
</tr>
<tr>
<td style="text-align:left">Credit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否控制信用额度</td>
</tr>
<tr>
<td style="text-align:left">CreditByHead</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否按总公司控制信用额度</td>
</tr>
<tr>
<td style="text-align:left">CreditDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否控制信用期限</td>
</tr>
<tr>
<td style="text-align:left">LicenceDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照是否期限管理</td>
</tr>
<tr>
<td style="text-align:left">LicenceSDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照起始日期</td>
</tr>
<tr>
<td style="text-align:left">LicenceEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照到期日期</td>
</tr>
<tr>
<td style="text-align:left">LicenceADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照预警天数</td>
</tr>
<tr>
<td style="text-align:left">LicenceRange</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照经营范围</td>
</tr>
<tr>
<td style="text-align:left">LicenceNo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照注册号</td>
</tr>
<tr>
<td style="text-align:left">BusinessDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证是否期限管理</td>
</tr>
<tr>
<td style="text-align:left">BusinessSDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证起始日期</td>
</tr>
<tr>
<td style="text-align:left">BusinessEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证到期日期</td>
</tr>
<tr>
<td style="text-align:left">BusinessADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证预警天数</td>
</tr>
<tr>
<td style="text-align:left">CusBusinessRange</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证经营范围</td>
</tr>
<tr>
<td style="text-align:left">CusBusinessNo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证号</td>
</tr>
<tr>
<td style="text-align:left">CusGSPSDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GSP认证起始日期</td>
</tr>
<tr>
<td style="text-align:left">CusGSPEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GSP认证到期日期</td>
</tr>
<tr>
<td style="text-align:left">CusGSPADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GSP认证预警天数</td>
</tr>
<tr>
<td style="text-align:left">CusGSPAuthRange</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GSP认证经营范围</td>
</tr>
<tr>
<td style="text-align:left">CusGSPAuthNo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GSP认证证书号</td>
</tr>
<tr>
<td style="text-align:left">Proxy</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书是否期限管理</td>
</tr>
<tr>
<td style="text-align:left">ProxySDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书起始日期</td>
</tr>
<tr>
<td style="text-align:left">ProxyEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书到期日期</td>
</tr>
<tr>
<td style="text-align:left">ProxyADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书预警天数</td>
</tr>
<tr>
<td style="text-align:left">Memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">bLimitSale</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否限销</td>
</tr>
<tr>
<td style="text-align:left">cCusCountryCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国家</td>
</tr>
<tr>
<td style="text-align:left">cCusEnName</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名称</td>
</tr>
<tr>
<td style="text-align:left">cCusEnAddr1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址1</td>
</tr>
<tr>
<td style="text-align:left">cCusEnAddr2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址2</td>
</tr>
<tr>
<td style="text-align:left">cCusEnAddr3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址3</td>
</tr>
<tr>
<td style="text-align:left">cCusEnAddr4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址4</td>
</tr>
<tr>
<td style="text-align:left">cCusPortCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">目的港</td>
</tr>
<tr>
<td style="text-align:left">cPrimaryVen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">主要承运商</td>
</tr>
<tr>
<td style="text-align:left">fCommisionRate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">佣金比率(%)</td>
</tr>
<tr>
<td style="text-align:left">fInsueRate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保险费率(%)</td>
</tr>
<tr>
<td style="text-align:left">bHomeBranch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否有分支机构</td>
</tr>
<tr>
<td style="text-align:left">cBranchAddr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分支机构地址</td>
</tr>
<tr>
<td style="text-align:left">cBranchPhone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分支机构电话</td>
</tr>
<tr>
<td style="text-align:left">cBranchPerson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分支机构联系人</td>
</tr>
<tr>
<td style="text-align:left">cCusTradeCCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">行业编码</td>
</tr>
<tr>
<td style="text-align:left">CustomerKCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户级别</td>
</tr>
<tr>
<td style="text-align:left">bCusState</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户状态</td>
</tr>
<tr>
<td style="text-align:left">ccusbankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属银行</td>
</tr>
<tr>
<td style="text-align:left">cRelVendor</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应供应商编码</td>
</tr>
<tr>
<td style="text-align:left">ccusexch_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">bshop</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否门店</td>
</tr>
<tr>
<td style="text-align:left">bOnGPinStore</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">门店收款</td>
</tr>
<tr>
<td style="text-align:left">bcusdomestic</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国内</td>
</tr>
<tr>
<td style="text-align:left">bcusoverseas</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国外</td>
</tr>
<tr>
<td style="text-align:left">bserviceattribute</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">服务</td>
</tr>
<tr>
<td style="text-align:left">ccuscreditcompany</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用单位</td>
</tr>
<tr>
<td style="text-align:left">ccussaprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售默认收付款协议</td>
</tr>
<tr>
<td style="text-align:left">ccusexprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">出口默认收付款协议</td>
</tr>
<tr>
<td style="text-align:left">ccusotherprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">其他应收单收付款协议</td>
</tr>
<tr>
<td style="text-align:left">ccusimagentprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">代理进口默认收付款协议</td>
</tr>
<tr>
<td style="text-align:left">fcusdiscountrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">直营专柜结算扣率</td>
</tr>
<tr>
<td style="text-align:left">ccussscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结算方式</td>
</tr>
<tr>
<td style="text-align:left">ccusmngtypecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户管理类型编码</td>
</tr>
<tr>
<td style="text-align:left">brequestsign</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">签回</td>
</tr>
<tr>
<td style="text-align:left">fExpense</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fApprovedExpense</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dTouchedTime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dRecentlyInvoiceTime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dRecentlyQuoteTime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dRecentlyActivityTime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dRecentlyChanceTime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dRecentlyContractTime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cLtcCustomerCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">bTransFlag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cLtcPerson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dLtcDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cLocationSite</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">iCusTaxRate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cProvince</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cCity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cCounty</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cCreditAddCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cRegCash</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">dDepBeginDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">iEmployeeNum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">cURL</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>`,r:{minutes:3.87,words:1162},y:"a",t:"客户档案"}}],["/tools/yonyou/archives/department.html",{loader:()=>c(()=>import("./department.html-Dw_MmChn.js"),__vite__mapDeps([164,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/department.gif" alt="部门档案" tabindex="0" loading="lazy"><figcaption>部门档案</figcaption></figure>
<h2>资源符</h2>
<p><code>department</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">endflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否末级</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">部门名称</td>
</tr>
<tr>
<td style="text-align:left">cdepnameen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名称</td>
</tr>
<tr>
<td style="text-align:left">cdepleader</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分管领导</td>
</tr>
<tr>
<td style="text-align:left">rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">manager</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">负责人</td>
</tr>
<tr>
<td style="text-align:left">prop</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门属性</td>
</tr>
<tr>
<td style="text-align:left">phone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电话</td>
</tr>
<tr>
<td style="text-align:left">address</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">地址</td>
</tr>
<tr>
<td style="text-align:left">remark</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">creditline</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用额度</td>
</tr>
<tr>
<td style="text-align:left">creditgrade</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">信用等级</td>
</tr>
<tr>
<td style="text-align:left">creditdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用天数</td>
</tr>
<tr>
<td style="text-align:left">ddepbegindate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">成立日期</td>
</tr>
<tr>
<td style="text-align:left">ddependdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">撤销日期</td>
</tr>
<tr>
<td style="text-align:left">vauthorizedoc</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">批准文号</td>
</tr>
<tr>
<td style="text-align:left">vauthorizeunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">批准单位</td>
</tr>
<tr>
<td style="text-align:left">cdepfax</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">传真</td>
</tr>
<tr>
<td style="text-align:left">cdeppostcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">邮政编码</td>
</tr>
<tr>
<td style="text-align:left">cdepemail</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电子邮件</td>
</tr>
<tr>
<td style="text-align:left">cdeptype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门类型</td>
</tr>
<tr>
<td style="text-align:left">bim</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否启用UTU</td>
</tr>
<tr>
<td style="text-align:left">bretail</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">适用零售</td>
</tr>
<tr>
<td style="text-align:left">cdepnameen</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">英文名称</td>
</tr>
</tbody>
</table>`,r:{minutes:.85,words:255},y:"a",t:"部门档案"}}],["/tools/yonyou/archives/digest.html",{loader:()=>c(()=>import("./digest.html-DSNeTeJH.js"),__vite__mapDeps([165,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/digest.gif" alt="常用摘要" tabindex="0" loading="lazy"><figcaption>常用摘要</figcaption></figure>
<h2>资源符</h2>
<p><code>digest</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">常用摘要编码</td>
</tr>
<tr>
<td style="text-align:left">text</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">常用摘要正文</td>
</tr>
<tr>
<td style="text-align:left">subjectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">相关科目编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.4,words:120},y:"a",t:"常用摘要"}}],["/tools/yonyou/archives/district-class.html",{loader:()=>c(()=>import("./district-class.html-CWUuOcWf.js"),__vite__mapDeps([166,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/districtclass.gif" alt="地区分类" tabindex="0" loading="lazy"><figcaption>地区分类</figcaption></figure>
<h2>资源符</h2>
<p><code>districtclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">地区编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">地区名称</td>
</tr>
<tr>
<td style="text-align:left">sort</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">endflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否末级</td>
</tr>
</tbody>
</table>`,r:{minutes:.37,words:112},y:"a",t:"地区分类"}}],["/tools/yonyou/archives/dsign.html",{loader:()=>c(()=>import("./dsign.html-C8FTTiHV.js"),__vite__mapDeps([167,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/dsign.gif" alt="凭证类别" tabindex="0" loading="lazy"><figcaption>凭证类别</figcaption></figure>
<h2>资源符</h2>
<p><code>dsign</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">i_id</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">唯一标识</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证类别字</td>
</tr>
<tr>
<td style="text-align:left">order_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证类别排序号</td>
</tr>
<tr>
<td style="text-align:left">type_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">凭证类别名称</td>
</tr>
<tr>
<td style="text-align:left">other_use_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">其它系统是否使用</td>
</tr>
</tbody>
</table>`,r:{minutes:.43,words:129},y:"a",t:"凭证类别"}}],["/tools/yonyou/archives/duty-level.html",{loader:()=>c(()=>import("./duty-level.html-DnppXheR.js"),__vite__mapDeps([168,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/dutylevel.gif" alt="职务级别" tabindex="0" loading="lazy"><figcaption>职务级别</figcaption></figure>
<h2>资源符</h2>
<p><code>dutylevel</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码名称</td>
</tr>
<tr>
<td style="text-align:left">simplename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">简称</td>
</tr>
<tr>
<td style="text-align:left">simplespell</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">简拼</td>
</tr>
<tr>
<td style="text-align:left">levels</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">代码级别</td>
</tr>
<tr>
<td style="text-align:left">pcodeid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">上级代码</td>
</tr>
<tr>
<td style="text-align:left">sysflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">系统/自定义标志</td>
</tr>
<tr>
<td style="text-align:left">childflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否有下级代码</td>
</tr>
<tr>
<td style="text-align:left">hideflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">显示/隐藏</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">备注</td>
</tr>
</tbody>
</table>`,r:{minutes:.54,words:161},y:"a",t:"职务级别"}}],["/tools/yonyou/archives/duty-type.html",{loader:()=>c(()=>import("./duty-type.html-B6Ziew05.js"),__vite__mapDeps([169,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/dutytype.gif" alt="职务类别" tabindex="0" loading="lazy"><figcaption>职务类别</figcaption></figure>
<h2>资源符</h2>
<p><code>dutytype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码名称</td>
</tr>
<tr>
<td style="text-align:left">simplename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">简称</td>
</tr>
<tr>
<td style="text-align:left">simplespell</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">简拼</td>
</tr>
<tr>
<td style="text-align:left">levels</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">代码级别</td>
</tr>
<tr>
<td style="text-align:left">pcodeid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">上级代码</td>
</tr>
<tr>
<td style="text-align:left">sysflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">系统/自定义标志</td>
</tr>
<tr>
<td style="text-align:left">childflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否有下级代码</td>
</tr>
<tr>
<td style="text-align:left">hideflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">显示/隐藏</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">备注</td>
</tr>
</tbody>
</table>`,r:{minutes:.54,words:163},y:"a",t:"职务类别"}}],["/tools/yonyou/archives/duty.html",{loader:()=>c(()=>import("./duty.html-B2W-eSZE.js"),__vite__mapDeps([170,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/duty.gif" alt="职务类别" tabindex="0" loading="lazy"><figcaption>职务类别</figcaption></figure>
<h2>资源符</h2>
<p><code>duty</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">dutycode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职务编码</td>
</tr>
<tr>
<td style="text-align:left">dutyname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职务名称</td>
</tr>
<tr>
<td style="text-align:left">series</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职务类别</td>
</tr>
<tr>
<td style="text-align:left">dutysumm</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">职务概要</td>
</tr>
<tr>
<td style="text-align:left">dutylev</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">职务级别</td>
</tr>
<tr>
<td style="text-align:left">begindate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">设立日期</td>
</tr>
<tr>
<td style="text-align:left">enddate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">撤销日期</td>
</tr>
</tbody>
</table>`,r:{minutes:.46,words:139},y:"a",t:"职务类别"}}],["/tools/yonyou/archives/expense-item.html",{loader:()=>c(()=>import("./expense-item.html-CiqrzsOY.js"),__vite__mapDeps([171,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/expenseitem.gif" alt="费用项目" tabindex="0" loading="lazy"><figcaption>费用项目</figcaption></figure>
<h2>资源符</h2>
<p><code>expenseitem</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">费用项目编号</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">费用项目名称</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">cexpccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">费用项目分类编码</td>
</tr>
<tr>
<td style="text-align:left">iexptaxrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">税率(%)</td>
</tr>
<tr>
<td style="text-align:left">iexpprofititem</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">盈亏项目</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">科目</td>
</tr>
<tr>
<td style="text-align:left">direction</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">方向</td>
</tr>
<tr>
<td style="text-align:left">budgetitemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目费用编码</td>
</tr>
<tr>
<td style="text-align:left">budgetitemname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">项目费用</td>
</tr>
<tr>
<td style="text-align:left">operationtypecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">业务类型编码</td>
</tr>
<tr>
<td style="text-align:left">operationtypename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">业务类型名称</td>
</tr>
<tr>
<td style="text-align:left">issubsidy</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否补助</td>
</tr>
</tbody>
</table>`,r:{minutes:.6,words:181},y:"a",t:"费用项目"}}],["/tools/yonyou/archives/expitem-class.html",{loader:()=>c(()=>import("./expitem-class.html-13-eMzCu.js"),__vite__mapDeps([172,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/expitemclass.gif" alt="费用项目分类" tabindex="0" loading="lazy"><figcaption>费用项目分类</figcaption></figure>
<h2>资源符</h2>
<p><code>expitemclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">费用项目分类编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">费用项目分类名称</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_rank_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">末级标志</td>
</tr>
</tbody>
</table>`,r:{minutes:.44,words:131},y:"a",t:"费用项目分类"}}],["/tools/yonyou/archives/inventory-class.html",{loader:()=>c(()=>import("./inventory-class.html-DREzCOJq.js"),__vite__mapDeps([173,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/inventoryclass.gif" alt="存货分类" tabindex="0" loading="lazy"><figcaption>存货分类</figcaption></figure>
<h2>资源符</h2>
<p><code>inventoryclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货分类编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货分类名称</td>
</tr>
<tr>
<td style="text-align:left">rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货分类编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_rank_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">末级标志</td>
</tr>
<tr>
<td style="text-align:left">econo_sort_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属经济分类编码</td>
</tr>
<tr>
<td style="text-align:left">barcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">对应条形码中的编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.48,words:145},y:"a",t:"存货分类"}}],["/tools/yonyou/archives/inventory-free.html",{loader:()=>c(()=>import("./inventory-free.html-CGTgrzGc.js"),__vite__mapDeps([174,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/invandfree.gif" alt="存货自由项对照表" tabindex="0" loading="lazy"><figcaption>存货自由项对照表</figcaption></figure>
<h2>资源符</h2>
<p><code>invandfree</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cudid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项ID</td>
</tr>
<tr>
<td style="text-align:left">cudvalue</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项值</td>
</tr>
</tbody>
</table>`,r:{minutes:.37,words:111},y:"a",t:"存货自由项对照表"}}],["/tools/yonyou/archives/inventory-position.html",{loader:()=>c(()=>import("./inventory-position.html-P9-LLEMX.js"),__vite__mapDeps([175,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/invandpos.gif" alt="存货货位对照表" tabindex="0" loading="lazy"><figcaption>存货货位对照表</figcaption></figure>
<h2>资源符</h2>
<p><code>invandpos</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cposcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">iprior</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优先顺序</td>
</tr>
</tbody>
</table>`,r:{minutes:.37,words:112},y:"a",t:"存货货位对照表"}}],["/tools/yonyou/archives/inventory.html",{loader:()=>c(()=>import("./inventory.html-DHTWXsbB.js"),__vite__mapDeps([176,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/inventory.gif" alt="存货档案" tabindex="0" loading="lazy"><figcaption>存货档案</figcaption></figure>
<h2>资源符</h2>
<p><code>inventory</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">unitgroup_type</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位组类别</td>
</tr>
<tr>
<td style="text-align:left">unitgroup_code</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位组编码</td>
</tr>
<tr>
<td style="text-align:left">puunit_code</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购默认计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">saunit_code</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售默认计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">stunit_code</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">库存默认计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">caunit_code</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">成本默认计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">unitgroup_name</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计量单位组名称</td>
</tr>
<tr>
<td style="text-align:left">ccomunitname</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">主计量单位名称</td>
</tr>
<tr>
<td style="text-align:left">puunit_name</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购默认计量单位名称</td>
</tr>
<tr>
<td style="text-align:left">saunit_name</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售默认计量单位名称</td>
</tr>
<tr>
<td style="text-align:left">stunit_name</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">库存默认计量单位名称</td>
</tr>
<tr>
<td style="text-align:left">caunit_name</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">成本默认计量单位名称</td>
</tr>
<tr>
<td style="text-align:left">puunit_ichangrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购默认计量单位换算率</td>
</tr>
<tr>
<td style="text-align:left">saunit_ichangrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售默认计量单位换算率</td>
</tr>
<tr>
<td style="text-align:left">stunit_ichangrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">库存默认计量单位换算率</td>
</tr>
<tr>
<td style="text-align:left">caunit_ichangrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">成本默认计量单位换算率</td>
</tr>
<tr>
<td style="text-align:left">check_frequency</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">盘点周期单位</td>
</tr>
<tr>
<td style="text-align:left">frequency</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">盘点周期</td>
</tr>
<tr>
<td style="text-align:left">check_day</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">盘点日</td>
</tr>
<tr>
<td style="text-align:left">lastcheck_date</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">上次盘点日期</td>
</tr>
<tr>
<td style="text-align:left">wastage</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">合理损耗率</td>
</tr>
<tr>
<td style="text-align:left">solitude</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否单独存放</td>
</tr>
<tr>
<td style="text-align:left">enterprise</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生产企业</td>
</tr>
<tr>
<td style="text-align:left">address</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">产地</td>
</tr>
<tr>
<td style="text-align:left">file</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">批准文号</td>
</tr>
<tr>
<td style="text-align:left">brand</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">注册商标</td>
</tr>
<tr>
<td style="text-align:left">checkout_no</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">合格证号</td>
</tr>
<tr>
<td style="text-align:left">licence</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">许可证号</td>
</tr>
<tr>
<td style="text-align:left">specialties</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">特殊存货标志</td>
</tr>
<tr>
<td style="text-align:left">defwarehouse</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">默认仓库</td>
</tr>
<tr>
<td style="text-align:left">salerate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售加成率</td>
</tr>
<tr>
<td style="text-align:left">advanceDate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">累计提前期</td>
</tr>
<tr>
<td style="text-align:left">currencyName</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">通用名称</td>
</tr>
<tr>
<td style="text-align:left">ProduceAddress</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生产地点</td>
</tr>
<tr>
<td style="text-align:left">produceNation</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生产国别</td>
</tr>
<tr>
<td style="text-align:left">RegisterNo</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">进口药品注册证号</td>
</tr>
<tr>
<td style="text-align:left">EnterNo</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">入关证号</td>
</tr>
<tr>
<td style="text-align:left">PackingType</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">包装规格</td>
</tr>
<tr>
<td style="text-align:left">EnglishName</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名</td>
</tr>
<tr>
<td style="text-align:left">PropertyCheck</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否质检</td>
</tr>
<tr>
<td style="text-align:left">PreparationType</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">剂型</td>
</tr>
<tr>
<td style="text-align:left">Commodity</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">注册商品批件</td>
</tr>
<tr>
<td style="text-align:left">RecipeBatch</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">处方药</td>
</tr>
<tr>
<td style="text-align:left">NotPatentName</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国际非专利名</td>
</tr>
<tr>
<td style="text-align:left">cAssComunitCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">辅计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">ROPMethod</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">再订货点确定方法</td>
</tr>
<tr>
<td style="text-align:left">SubscribePoint</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">再订货点</td>
</tr>
<tr>
<td style="text-align:left">BatchRule</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">批量规则</td>
</tr>
<tr>
<td style="text-align:left">AssureProvideDays</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保证供应天数</td>
</tr>
<tr>
<td style="text-align:left">VagQuantity</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">日均耗量</td>
</tr>
<tr>
<td style="text-align:left">TestStyle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验方式</td>
</tr>
<tr>
<td style="text-align:left">DTMethod</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检方案</td>
</tr>
<tr>
<td style="text-align:left">DTRate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检率</td>
</tr>
<tr>
<td style="text-align:left">DTNum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检量</td>
</tr>
<tr>
<td style="text-align:left">DTUnit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验计量单位</td>
</tr>
<tr>
<td style="text-align:left">DTStyle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检方式</td>
</tr>
<tr>
<td style="text-align:left">QTMethod</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">质量检验方案</td>
</tr>
<tr>
<td style="text-align:left">bPlanInv</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否计划品</td>
</tr>
<tr>
<td style="text-align:left">bProxyForeign</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否委外</td>
</tr>
<tr>
<td style="text-align:left">bFeatureMatch</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">特征选配</td>
</tr>
<tr>
<td style="text-align:left">bATOModel</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否ATO模型</td>
</tr>
<tr>
<td style="text-align:left">bCheckItem</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否选项类</td>
</tr>
<tr>
<td style="text-align:left">bPTOModel</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否PTO模型</td>
</tr>
<tr>
<td style="text-align:left">bequipment</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否备件</td>
</tr>
<tr>
<td style="text-align:left">cProductUnit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生产计量单位</td>
</tr>
<tr>
<td style="text-align:left">fOrderUpLimit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">订货超额上限</td>
</tr>
<tr>
<td style="text-align:left">cMassUnit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保质期单位</td>
</tr>
<tr>
<td style="text-align:left">fRetailPrice</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">零售价格</td>
</tr>
<tr>
<td style="text-align:left">cInvDepCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生产部门</td>
</tr>
<tr>
<td style="text-align:left">iAlterAdvance</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">变动提前期</td>
</tr>
<tr>
<td style="text-align:left">fAlterBaseNum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">变动基数</td>
</tr>
<tr>
<td style="text-align:left">cPlanMethod</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计划方法</td>
</tr>
<tr>
<td style="text-align:left">bMPS</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否MPS件</td>
</tr>
<tr>
<td style="text-align:left">bROP</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否ROP件</td>
</tr>
<tr>
<td style="text-align:left">bRePlan</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否重复计划</td>
</tr>
<tr>
<td style="text-align:left">cSRPolicy</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供需政策</td>
</tr>
<tr>
<td style="text-align:left">bBillUnite</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否令单合并</td>
</tr>
<tr>
<td style="text-align:left">iSupplyDay</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应期间</td>
</tr>
<tr>
<td style="text-align:left">fSupplyMulti</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应倍数</td>
</tr>
<tr>
<td style="text-align:left">fMinSupply</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最低供应量</td>
</tr>
<tr>
<td style="text-align:left">bCutMantissa</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否切除尾数</td>
</tr>
<tr>
<td style="text-align:left">cInvPersonCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计划员</td>
</tr>
<tr>
<td style="text-align:left">iInvTfId</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">时栅代号</td>
</tr>
<tr>
<td style="text-align:left">cEngineerFigNo</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">工程图号</td>
</tr>
<tr>
<td style="text-align:left">bInTotalCost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">成本累计否</td>
</tr>
<tr>
<td style="text-align:left">iSupplyType</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应类型</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项1</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项2</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项3</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项4</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项5</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项6</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项7</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项8</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项9</td>
</tr>
<tr>
<td style="text-align:left">bConfigFree10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结构性自由项10</td>
</tr>
<tr>
<td style="text-align:left">iDTLevel</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验水平</td>
</tr>
<tr>
<td style="text-align:left">cDTAQL</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">AQL</td>
</tr>
<tr>
<td style="text-align:left">bOutInvDT</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否发货检验</td>
</tr>
<tr>
<td style="text-align:left">bPeriodDT</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否周期检验</td>
</tr>
<tr>
<td style="text-align:left">cDTPeriod</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验周期</td>
</tr>
<tr>
<td style="text-align:left">bBackInvDT</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否退货检验</td>
</tr>
<tr>
<td style="text-align:left">iEndDTStyle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">产品抽检方式</td>
</tr>
<tr>
<td style="text-align:left">bDTWarnInv</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保质期存货是否检验</td>
</tr>
<tr>
<td style="text-align:left">fBackTaxRate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">退税率</td>
</tr>
<tr>
<td style="text-align:left">cCIQCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">海关代码</td>
</tr>
<tr>
<td style="text-align:left">cWGroupCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">重量计量组</td>
</tr>
<tr>
<td style="text-align:left">cWUnit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">重量单位</td>
</tr>
<tr>
<td style="text-align:left">fGrossW</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">毛重</td>
</tr>
<tr>
<td style="text-align:left">cVGroupCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">体积计量组</td>
</tr>
<tr>
<td style="text-align:left">cVUnit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">体积单位</td>
</tr>
<tr>
<td style="text-align:left">fLength</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">长（CM）</td>
</tr>
<tr>
<td style="text-align:left">fWidth</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">宽（CM）</td>
</tr>
<tr>
<td style="text-align:left">fHeight</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">高（CM）</td>
</tr>
<tr>
<td style="text-align:left">cpurpersoncode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购员</td>
</tr>
<tr>
<td style="text-align:left">iBigMonth</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">不大于月</td>
</tr>
<tr>
<td style="text-align:left">iBigDay</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">不大于天</td>
</tr>
<tr>
<td style="text-align:left">iSmallMonth</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">不小于月</td>
</tr>
<tr>
<td style="text-align:left">iSmallDay</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">不小于天</td>
</tr>
<tr>
<td style="text-align:left">cshopunit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">零售计量单位</td>
</tr>
<tr>
<td style="text-align:left">bimportmedicine</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否进口药品</td>
</tr>
<tr>
<td style="text-align:left">bfirstbusimedicine</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否首营药品</td>
</tr>
<tr>
<td style="text-align:left">bforeexpland</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">预测展开</td>
</tr>
<tr>
<td style="text-align:left">cinvplancode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计划品</td>
</tr>
<tr>
<td style="text-align:left">fconvertrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">转换因子</td>
</tr>
<tr>
<td style="text-align:left">dreplacedate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">替换日期</td>
</tr>
<tr>
<td style="text-align:left">binvmodel</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">模型</td>
</tr>
<tr>
<td style="text-align:left">iimptaxrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">进项税率</td>
</tr>
<tr>
<td style="text-align:left">iexptaxrate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">出口税率</td>
</tr>
<tr>
<td style="text-align:left">bexpsale</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">外销</td>
</tr>
<tr>
<td style="text-align:left">idrawbatch</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">领料批量</td>
</tr>
<tr>
<td style="text-align:left">bcheckbsatp</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检查售前ATP</td>
</tr>
<tr>
<td style="text-align:left">cinvprojectcode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">售前ATP方案</td>
</tr>
<tr>
<td style="text-align:left">itestrule</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验规则</td>
</tr>
<tr>
<td style="text-align:left">crulecode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义抽检规则</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项1</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项2</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项3</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项4</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项5</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项6</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项7</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项8</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项9</td>
</tr>
<tr>
<td style="text-align:left">bcheckfree10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">核算自由项10</td>
</tr>
<tr>
<td style="text-align:left">bbommain</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">允许BOM母件</td>
</tr>
<tr>
<td style="text-align:left">bbomsub</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">允许BOM子件</td>
</tr>
<tr>
<td style="text-align:left">bproductbill</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">允许生产订单</td>
</tr>
<tr>
<td style="text-align:left">icheckatp</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检查ATP</td>
</tr>
<tr>
<td style="text-align:left">iinvatpid</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">ATP规则</td>
</tr>
<tr>
<td style="text-align:left">iplantfday</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计划时栅天数</td>
</tr>
<tr>
<td style="text-align:left">ioverlapday</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">重叠天数</td>
</tr>
<tr>
<td style="text-align:left">fmaxsupply</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最高供应量</td>
</tr>
<tr>
<td style="text-align:left">bpiece</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计件</td>
</tr>
<tr>
<td style="text-align:left">bsrvitem</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">服务项目</td>
</tr>
<tr>
<td style="text-align:left">bsrvfittings</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">服务配件</td>
</tr>
<tr>
<td style="text-align:left">fminsplit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最小分割量</td>
</tr>
<tr>
<td style="text-align:left">bspecialorder</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户订单专用</td>
</tr>
<tr>
<td style="text-align:left">btracksalebill</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售跟单</td>
</tr>
<tr>
<td style="text-align:left">fbuyexcess</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">请购超额上限</td>
</tr>
<tr>
<td style="text-align:left">isurenesstype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">安全库存方法</td>
</tr>
<tr>
<td style="text-align:left">idatetype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期间类型</td>
</tr>
<tr>
<td style="text-align:left">idatesum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">期间数</td>
</tr>
<tr>
<td style="text-align:left">idynamicsurenesstype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">动态安全库存方法</td>
</tr>
<tr>
<td style="text-align:left">ibestrowsum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">覆盖天数</td>
</tr>
<tr>
<td style="text-align:left">ipercentumsum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">百分比</td>
</tr>
<tr>
<td style="text-align:left">binbyprocheck</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否依据产品检验结果入库</td>
</tr>
<tr>
<td style="text-align:left">irequiretrackstyle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">ibomexpandunittype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">BOM展开单位</td>
</tr>
<tr>
<td style="text-align:left">iexpiratdatecalcu</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">有效期推算方式</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项1</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项2</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项3</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项4</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项5</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项6</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项7</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项8</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项9</td>
</tr>
<tr>
<td style="text-align:left">bpurpricefree10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购定价自由项10</td>
</tr>
<tr>
<td style="text-align:left">bompricefree1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项1</td>
</tr>
<tr>
<td style="text-align:left">bompricefree2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项2</td>
</tr>
<tr>
<td style="text-align:left">bompricefree3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项3</td>
</tr>
<tr>
<td style="text-align:left">bompricefree4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项4</td>
</tr>
<tr>
<td style="text-align:left">bompricefree5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项5</td>
</tr>
<tr>
<td style="text-align:left">bompricefree6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项6</td>
</tr>
<tr>
<td style="text-align:left">bompricefree7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项7</td>
</tr>
<tr>
<td style="text-align:left">bompricefree8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项8</td>
</tr>
<tr>
<td style="text-align:left">bompricefree9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项9</td>
</tr>
<tr>
<td style="text-align:left">bompricefree10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">委外定价自由项10</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项1</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项2</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项3</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项4</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项5</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项6</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项7</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项8</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项9</td>
</tr>
<tr>
<td style="text-align:left">bsalepricefree10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售定价自由项10</td>
</tr>
<tr>
<td style="text-align:left">finvoutuplimit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发货允超上限</td>
</tr>
<tr>
<td style="text-align:left">bbondedinv</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否保税品</td>
</tr>
<tr>
<td style="text-align:left">bbatchcreate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否建立批次档案</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性1</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性2</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性3</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性4</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性5</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性6</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性7</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性8</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性9</td>
</tr>
<tr>
<td style="text-align:left">bbatchproperty10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否启用批次属性10</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围1</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围2</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围3</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围4</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围5</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围6</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围7</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围8</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围9</td>
</tr>
<tr>
<td style="text-align:left">bcontrolfreerange10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是控制自由项取值范围10</td>
</tr>
<tr>
<td style="text-align:left">finvciqexch</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">海关单位换算率</td>
</tr>
<tr>
<td style="text-align:left">iwarrantyperiod</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保修期限</td>
</tr>
<tr>
<td style="text-align:left">iwarrantyunit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保修期单位</td>
</tr>
<tr>
<td style="text-align:left">bmaintenance</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保养管理</td>
</tr>
<tr>
<td style="text-align:left">imaintenancecycle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保养周期</td>
</tr>
<tr>
<td style="text-align:left">imaintenancecycleunit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保养周期单位</td>
</tr>
<tr>
<td style="text-align:left">binvkeypart</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否关键物料</td>
</tr>
<tr>
<td style="text-align:left">iacceptearlydays</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">允许提前天数</td>
</tr>
<tr>
<td style="text-align:left">fcurllaborcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本阶标准人工费用</td>
</tr>
<tr>
<td style="text-align:left">fcurlvarmanucost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本阶标准变动制造费用</td>
</tr>
<tr>
<td style="text-align:left">fcurlfixmanucost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本阶标准固定制造费用</td>
</tr>
<tr>
<td style="text-align:left">fcurlomcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">本阶标准委外加工费</td>
</tr>
<tr>
<td style="text-align:left">fnextllaborcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">前阶标准人工费用</td>
</tr>
<tr>
<td style="text-align:left">fnextlvarmanucost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">前阶标准变动制造费用</td>
</tr>
<tr>
<td style="text-align:left">fnextlfixmanucost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">前阶标准固定制造费用</td>
</tr>
<tr>
<td style="text-align:left">fnextlomcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">前阶标准委外加工费</td>
</tr>
<tr>
<td style="text-align:left">dinvcreatedatetime</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">建档日期</td>
</tr>
<tr>
<td style="text-align:left">bpuquota</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">参与配额</td>
</tr>
<tr>
<td style="text-align:left">binvrohs</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">ROHS物料</td>
</tr>
<tr>
<td style="text-align:left">fprjmatlimit</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购数量上限</td>
</tr>
<tr>
<td style="text-align:left">bprjmat</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否工程物料</td>
</tr>
<tr>
<td style="text-align:left">binvasset</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">资产仓</td>
</tr>
<tr>
<td style="text-align:left">bsrvproduct</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">服务产品</td>
</tr>
<tr>
<td style="text-align:left">iacceptdelaydays</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">允许延后天数</td>
</tr>
<tr>
<td style="text-align:left">cInvMnemCode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">助记码</td>
</tr>
<tr>
<td style="text-align:left">iPlanCheckDay</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计划检验天数</td>
</tr>
<tr>
<td style="text-align:left">iMaterialsCycle</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">用料周期</td>
</tr>
<tr>
<td style="text-align:left">idrawtype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">申请领料标识</td>
</tr>
<tr>
<td style="text-align:left">bSCkeyProjections</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">投产推算关键子件</td>
</tr>
<tr>
<td style="text-align:left">iSupplyPeriodType</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应期间类型</td>
</tr>
<tr>
<td style="text-align:left">iTimeBucketId</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">时格id</td>
</tr>
<tr>
<td style="text-align:left">iAvailabilityDate</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">可用日期</td>
</tr>
<tr>
<td style="text-align:left">fmaterialcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">标准材料费用</td>
</tr>
<tr>
<td style="text-align:left">inearrejectdays</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">失效期临近拒收天数</td>
</tr>
<tr>
<td style="text-align:left">bimport</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否进口</td>
</tr>
<tr>
<td style="text-align:left">bsuitretail</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否适用零售</td>
</tr>
<tr>
<td style="text-align:left">bcoupon</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">礼券</td>
</tr>
<tr>
<td style="text-align:left">bstorecard</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">储值卡</td>
</tr>
<tr>
<td style="text-align:left">bprocessproduct</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">店内加工产品</td>
</tr>
<tr>
<td style="text-align:left">bprocessmaterial</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">店内加工材料</td>
</tr>
<tr>
<td style="text-align:left">froundfactor</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">舍入因子</td>
</tr>
<tr>
<td style="text-align:left">bchecksubitemcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否核算分项成本</td>
</tr>
<tr>
<td style="text-align:left">bconsiderfreestock</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否考虑自由库存</td>
</tr>
<tr>
<td style="text-align:left">breceiptbydt</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否依据来料检验结果入库</td>
</tr>
<tr>
<td style="text-align:left">bkccutmantissa</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">领料是否切除尾数</td>
</tr>
<tr>
<td style="text-align:left">iPlanDefault</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">计划默认属性</td>
</tr>
<tr>
<td style="text-align:left">iPFBatchQty</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">流转卡批量</td>
</tr>
<tr>
<td style="text-align:left">iAllocatePrintDgt</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">子件用料打印精度</td>
</tr>
<tr>
<td style="text-align:left">bCheckBatch</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">批次核算</td>
</tr>
<tr>
<td style="text-align:left">bMngOldpart</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">管理旧件</td>
</tr>
<tr>
<td style="text-align:left">iOldpartMngRule</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">旧件管理规则</td>
</tr>
<tr>
<td style="text-align:left">partid</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自增量</td>
</tr>
<tr>
<td style="text-align:left">invcode</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">free1</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项1</td>
</tr>
<tr>
<td style="text-align:left">free2</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项2</td>
</tr>
<tr>
<td style="text-align:left">free3</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项3</td>
</tr>
<tr>
<td style="text-align:left">free4</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项4</td>
</tr>
<tr>
<td style="text-align:left">free5</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项5</td>
</tr>
<tr>
<td style="text-align:left">free6</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项6</td>
</tr>
<tr>
<td style="text-align:left">free7</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项7</td>
</tr>
<tr>
<td style="text-align:left">free8</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项8</td>
</tr>
<tr>
<td style="text-align:left">free9</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项9</td>
</tr>
<tr>
<td style="text-align:left">free10</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自由项10</td>
</tr>
<tr>
<td style="text-align:left">safeqty</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">安全库存</td>
</tr>
<tr>
<td style="text-align:left">minqty</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">最低供应量</td>
</tr>
<tr>
<td style="text-align:left">mulqty</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应倍数</td>
</tr>
<tr>
<td style="text-align:left">fixqty</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">固定供应量</td>
</tr>
<tr>
<td style="text-align:left">cbasengineerfigno</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">工程图号</td>
</tr>
<tr>
<td style="text-align:left">fbasmaxsupply</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">最高供应量</td>
</tr>
<tr>
<td style="text-align:left">isurenesstype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">安全库存方法</td>
</tr>
<tr>
<td style="text-align:left">idatetype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">期间类型</td>
</tr>
<tr>
<td style="text-align:left">idatesum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">期间数</td>
</tr>
<tr>
<td style="text-align:left">idynamicsurenesstype</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">动态安全库存方法</td>
</tr>
<tr>
<td style="text-align:left">ibestrowsum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">覆盖天数</td>
</tr>
<tr>
<td style="text-align:left">ipercentumsum</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">百分比</td>
</tr>
<tr>
<td style="text-align:left">bfreestop</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">否</td>
<td style="text-align:left">停用</td>
</tr>
</tbody>
</table>`,r:{minutes:9.28,words:2785},y:"a",t:"存货档案"}}],["/tools/yonyou/archives/job-grade-set.html",{loader:()=>c(()=>import("./job-grade-set.html-DjbEfkiL.js"),__vite__mapDeps([177,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/jobgradeset.gif" alt="职等设置" tabindex="0" loading="lazy"><figcaption>职等设置</figcaption></figure>
<h2>资源符</h2>
<p><code>jobgradeset</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">jobgradecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职等编码</td>
</tr>
<tr>
<td style="text-align:left">jobgradename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职等名称</td>
</tr>
<tr>
<td style="text-align:left">maxpaypoint</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">薪点上限</td>
</tr>
<tr>
<td style="text-align:left">minpaypoint</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">薪点下限</td>
</tr>
</tbody>
</table>`,r:{minutes:.37,words:111},y:"a",t:"职等设置"}}],["/tools/yonyou/archives/job-type.html",{loader:()=>c(()=>import("./job-type.html-BL1BbIds.js"),__vite__mapDeps([178,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/jobtype.gif" alt="职位序列" tabindex="0" loading="lazy"><figcaption>职位序列</figcaption></figure>
<h2>资源符</h2>
<p><code>jobtype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码名称</td>
</tr>
<tr>
<td style="text-align:left">simplename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">简称</td>
</tr>
<tr>
<td style="text-align:left">simplespell</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">简拼</td>
</tr>
<tr>
<td style="text-align:left">levels</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">代码级别</td>
</tr>
<tr>
<td style="text-align:left">pcodeid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">上级代码</td>
</tr>
<tr>
<td style="text-align:left">sysflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">系统/自定义标志</td>
</tr>
<tr>
<td style="text-align:left">childflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否有下级代码</td>
</tr>
<tr>
<td style="text-align:left">hideflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">显示/隐藏</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">备注</td>
</tr>
</tbody>
</table>`,r:{minutes:.53,words:159},y:"a",t:"职位序列"}}],["/tools/yonyou/archives/job.html",{loader:()=>c(()=>import("./job.html-U9_ww4Gz.js"),__vite__mapDeps([179,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/job.gif" alt="职位档案" tabindex="0" loading="lazy"><figcaption>职位档案</figcaption></figure>
<h2>资源符</h2>
<p><code>job</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">jobcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位编码</td>
</tr>
<tr>
<td style="text-align:left">jobname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位名称</td>
</tr>
<tr>
<td style="text-align:left">depcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属部门</td>
</tr>
<tr>
<td style="text-align:left">suporior</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">直接上级</td>
</tr>
<tr>
<td style="text-align:left">builddate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">成立日期</td>
</tr>
<tr>
<td style="text-align:left">abortdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">撤销日期</td>
</tr>
<tr>
<td style="text-align:left">jobseries</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位序列</td>
</tr>
<tr>
<td style="text-align:left">jobrank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职位等级</td>
</tr>
<tr>
<td style="text-align:left">worksumm</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">工作概要</td>
</tr>
<tr>
<td style="text-align:left">jobrankclasscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职级分类</td>
</tr>
<tr>
<td style="text-align:left">jobrankbegin</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职级范围起</td>
</tr>
<tr>
<td style="text-align:left">jobrankend</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职级范围止</td>
</tr>
<tr>
<td style="text-align:left">jobgradebegin</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职等范围起</td>
</tr>
<tr>
<td style="text-align:left">jobgradeend</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">职等范围止</td>
</tr>
</tbody>
</table>`,r:{minutes:.68,words:205},y:"a",t:"职位档案"}}],["/tools/yonyou/archives/pay-condition.html",{loader:()=>c(()=>import("./pay-condition.html-DopL0gm7.js"),__vite__mapDeps([180,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/paycondition.gif" alt="付款条件" tabindex="0" loading="lazy"><figcaption>付款条件</figcaption></figure>
<h2>资源符</h2>
<p><code>paycondition</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">付款条件编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">付款条件名称</td>
</tr>
<tr>
<td style="text-align:left">creditdays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">信用天数</td>
</tr>
<tr>
<td style="text-align:left">discountdays1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠天数1</td>
</tr>
<tr>
<td style="text-align:left">discountrate1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠率1</td>
</tr>
<tr>
<td style="text-align:left">discountdays2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠天数2</td>
</tr>
<tr>
<td style="text-align:left">discountrate2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠率2</td>
</tr>
<tr>
<td style="text-align:left">discountdays3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠天数3</td>
</tr>
<tr>
<td style="text-align:left">discountrate3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠率3</td>
</tr>
<tr>
<td style="text-align:left">discountdays4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠天数4</td>
</tr>
<tr>
<td style="text-align:left">discountrate4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">优惠率4</td>
</tr>
<tr>
<td style="text-align:left">maxdiscountdays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最多优惠天数</td>
</tr>
</tbody>
</table>`,r:{minutes:.64,words:192},y:"a",t:"付款条件"}}],["/tools/yonyou/archives/person-type.html",{loader:()=>c(()=>import("./person-type.html-CK4dZO4w.js"),__vite__mapDeps([181,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/persontype.gif" alt="人员类别" tabindex="0" loading="lazy"><figcaption>人员类别</figcaption></figure>
<h2>资源符</h2>
<p><code>persontype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">代码名称</td>
</tr>
<tr>
<td style="text-align:left">simplename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">简称</td>
</tr>
<tr>
<td style="text-align:left">simplespell</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">简拼</td>
</tr>
<tr>
<td style="text-align:left">levels</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">代码级别</td>
</tr>
<tr>
<td style="text-align:left">pcodeid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">上级代码</td>
</tr>
<tr>
<td style="text-align:left">sysflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">系统/自定义标志</td>
</tr>
<tr>
<td style="text-align:left">childflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">是否有下级代码</td>
</tr>
<tr>
<td style="text-align:left">hideflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">显示/隐藏</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">备注</td>
</tr>
</tbody>
</table>`,r:{minutes:.54,words:161},y:"a",t:"人员类别"}}],["/tools/yonyou/archives/person.html",{loader:()=>c(()=>import("./person.html-CtdjpDy7.js"),__vite__mapDeps([182,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/person.gif" alt="人员档案" tabindex="0" loading="lazy"><figcaption>人员档案</figcaption></figure>
<h2>资源符</h2>
<p><code>person</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">人员编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">人员名称</td>
</tr>
<tr>
<td style="text-align:left">cPsn_NameEN</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名</td>
</tr>
<tr>
<td style="text-align:left">JobNumber</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">工号</td>
</tr>
<tr>
<td style="text-align:left">cpsnproperty</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">人员属性</td>
</tr>
<tr>
<td style="text-align:left">rsex</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">性别</td>
</tr>
<tr>
<td style="text-align:left">rEmployState</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">雇佣状态</td>
</tr>
<tr>
<td style="text-align:left">rpersontype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">人员类别</td>
</tr>
<tr>
<td style="text-align:left">EmploymentForm</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">用工形式</td>
</tr>
<tr>
<td style="text-align:left">cdutyclass</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">班组</td>
</tr>
<tr>
<td style="text-align:left">cjobcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">职位</td>
</tr>
<tr>
<td style="text-align:left">cjobgradecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">职等</td>
</tr>
<tr>
<td style="text-align:left">cjobrankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">职级</td>
</tr>
<tr>
<td style="text-align:left">rIDType</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">证件类型</td>
</tr>
<tr>
<td style="text-align:left">vIDNo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">证件号码</td>
</tr>
<tr>
<td style="text-align:left">bpsnperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否业务员</td>
</tr>
<tr>
<td style="text-align:left">cdept_num</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">行政部门</td>
</tr>
<tr>
<td style="text-align:left">cpsnbankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行</td>
</tr>
<tr>
<td style="text-align:left">cpsnaccount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">账号</td>
</tr>
<tr>
<td style="text-align:left">dbirthdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">出生日期</td>
</tr>
<tr>
<td style="text-align:left">cpsnmobilephone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">手机号</td>
</tr>
<tr>
<td style="text-align:left">cpsnfphone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">家庭电话</td>
</tr>
<tr>
<td style="text-align:left">cpsnophone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">办公电话</td>
</tr>
<tr>
<td style="text-align:left">cpsninphone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">内线电话</td>
</tr>
<tr>
<td style="text-align:left">cpsnemail</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">Email地址</td>
</tr>
<tr>
<td style="text-align:left">cpsnfaddr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">家庭住址</td>
</tr>
<tr>
<td style="text-align:left">cpsnpostcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">邮政编码</td>
</tr>
<tr>
<td style="text-align:left">cpsnpostaddr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">通讯地址</td>
</tr>
<tr>
<td style="text-align:left">cpsnqqcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">QQ号</td>
</tr>
<tr>
<td style="text-align:left">cpsnurl</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">个人网址</td>
</tr>
<tr>
<td style="text-align:left">cpsnoseat</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">工位</td>
</tr>
<tr>
<td style="text-align:left">cdepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">业务或费用部门</td>
</tr>
<tr>
<td style="text-align:left">fcreditquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用额度</td>
</tr>
<tr>
<td style="text-align:left">icredate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用天数</td>
</tr>
<tr>
<td style="text-align:left">ccregrade</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用等级</td>
</tr>
<tr>
<td style="text-align:left">dpvaliddate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生效日期</td>
</tr>
<tr>
<td style="text-align:left">dpinvaliddate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">失效日期</td>
</tr>
<tr>
<td style="text-align:left">rNativePlace</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">籍贯</td>
</tr>
<tr>
<td style="text-align:left">rNational</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">民族</td>
</tr>
<tr>
<td style="text-align:left">rhealthStatus</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">健康状况</td>
</tr>
<tr>
<td style="text-align:left">rMarriStatus</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">婚姻状况</td>
</tr>
<tr>
<td style="text-align:left">MPicture</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">照片</td>
</tr>
<tr>
<td style="text-align:left">rPerResidence</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">户籍</td>
</tr>
<tr>
<td style="text-align:left">vAliaName</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">曾用名</td>
</tr>
<tr>
<td style="text-align:left">dJoinworkDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">参加工作时间</td>
</tr>
<tr>
<td style="text-align:left">dEnterDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">进入本行业时间</td>
</tr>
<tr>
<td style="text-align:left">dRegularDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">转正定级时间</td>
</tr>
<tr>
<td style="text-align:left">vSSNo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">社会保障号</td>
</tr>
<tr>
<td style="text-align:left">dEnterUnitDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">进入本单位时间</td>
</tr>
<tr>
<td style="text-align:left">bProbation</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否试用人员</td>
</tr>
</tbody>
</table>`,r:{minutes:1.45,words:434},y:"a",t:"人员档案"}}],["/tools/yonyou/archives/position.html",{loader:()=>c(()=>import("./position.html-f59vExdz.js"),__vite__mapDeps([183,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/position.gif" alt="货位档案" tabindex="0" loading="lazy"><figcaption>货位档案</figcaption></figure>
<h2>资源符</h2>
<p><code>position</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">货位名称</td>
</tr>
<tr>
<td style="text-align:left">grade</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否末级</td>
</tr>
<tr>
<td style="text-align:left">warehouse_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">仓库编码</td>
</tr>
<tr>
<td style="text-align:left">maxcubage</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最大体积</td>
</tr>
<tr>
<td style="text-align:left">maxweight</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最大重量</td>
</tr>
<tr>
<td style="text-align:left">remark</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">barcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应条形码中的编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.56,words:167},y:"a",t:"货位档案"}}],["/tools/yonyou/archives/purchase-type.html",{loader:()=>c(()=>import("./purchase-type.html-Dr_Lw65C.js"),__vite__mapDeps([184,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/purchasetype.gif" alt="采购类型" tabindex="0" loading="lazy"><figcaption>采购类型</figcaption></figure>
<h2>资源符</h2>
<p><code>purchasetype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">采购类型编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">采购类型名称</td>
</tr>
<tr>
<td style="text-align:left">rstype_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">入库类别编码</td>
</tr>
<tr>
<td style="text-align:left">bdefau</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否默认值</td>
</tr>
<tr>
<td style="text-align:left">bpfdefault</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否委外默认值</td>
</tr>
<tr>
<td style="text-align:left">bptmps_mrp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否列入MPS/MRP计划</td>
</tr>
</tbody>
</table>`,r:{minutes:.48,words:143},y:"a",t:"采购类型"}}],["/tools/yonyou/archives/reason.html",{loader:()=>c(()=>import("./reason.html-B7aayEd7.js"),__vite__mapDeps([185,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/reason.gif" alt="原因码档案" tabindex="0" loading="lazy"><figcaption>原因码档案</figcaption></figure>
<h2>资源符</h2>
<p><code>reason</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">名称</td>
</tr>
<tr>
<td style="text-align:left">Reasontype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属类型</td>
</tr>
<tr>
<td style="text-align:left">ReasonMemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">说明</td>
</tr>
</tbody>
</table>`,r:{minutes:.36,words:107},y:"a",t:"原因码档案"}}],["/tools/yonyou/archives/receive-send-type.html",{loader:()=>c(()=>import("./receive-send-type.html-3x4CmATT.js"),__vite__mapDeps([186,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/receivesendtype.gif" alt="收发类别" tabindex="0" loading="lazy"><figcaption>收发类别</figcaption></figure>
<h2>资源符</h2>
<p><code>receivesendtype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">收发类别编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">收发类别名称</td>
</tr>
<tr>
<td style="text-align:left">sort</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">编码级次</td>
</tr>
<tr>
<td style="text-align:left">rsflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">收发标志</td>
</tr>
<tr>
<td style="text-align:left">end_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否末级</td>
</tr>
<tr>
<td style="text-align:left">oppsubject_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对方科目编码</td>
</tr>
<tr>
<td style="text-align:left">bRetail</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">适用零售</td>
</tr>
</tbody>
</table>`,r:{minutes:.48,words:143},y:"a",t:"收发类别"}}],["/tools/yonyou/archives/requirement-class.html",{loader:()=>c(()=>import("./requirement-class.html-ClS_TVqS.js"),__vite__mapDeps([187,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/requirementclass.gif" alt="需求分类" tabindex="0" loading="lazy"><figcaption>需求分类</figcaption></figure>
<h2>资源符</h2>
<p><code>requirementclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">crclasscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">需求分类代号</td>
</tr>
<tr>
<td style="text-align:left">crclassname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">需求分类说明</td>
</tr>
<tr>
<td style="text-align:left">dstopdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">停用日期</td>
</tr>
</tbody>
</table>`,r:{minutes:.38,words:115},y:"a",t:"需求分类"}}],["/tools/yonyou/archives/sale-type.html",{loader:()=>c(()=>import("./sale-type.html-BigQZxad.js"),__vite__mapDeps([188,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/saletype.gif" alt="销售类型" tabindex="0" loading="lazy"><figcaption>销售类型</figcaption></figure>
<h2>资源符</h2>
<p><code>saletype</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">销售类型编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">销售类型名称</td>
</tr>
<tr>
<td style="text-align:left">rstype_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">出库类别</td>
</tr>
<tr>
<td style="text-align:left">bdefau</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否默认值</td>
</tr>
<tr>
<td style="text-align:left">bstmps_mrp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否列入MPS/MRP计划</td>
</tr>
</tbody>
</table>`,r:{minutes:.43,words:129},y:"a",t:"销售类型"}}],["/tools/yonyou/archives/shipping-choice.html",{loader:()=>c(()=>import("./shipping-choice.html-Dnue-7eX.js"),__vite__mapDeps([189,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/shippingchoice.gif" alt="发运方式" tabindex="0" loading="lazy"><figcaption>发运方式</figcaption></figure>
<h2>资源符</h2>
<p><code>shippingchoice</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">发运方式编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">发运方式名称</td>
</tr>
<tr>
<td style="text-align:left">cscenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发运方式英文名称</td>
</tr>
</tbody>
</table>`,r:{minutes:.37,words:112},y:"a",t:"发运方式"}}],["/tools/yonyou/archives/unit-account.html",{loader:()=>c(()=>import("./unit-account.html-CopnhdYT.js"),__vite__mapDeps([190,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/unitacc.gif" alt="交易单位账号" tabindex="0" loading="lazy"><figcaption>交易单位账号</figcaption></figure>
<h2>资源符</h2>
<p><code>unitacc</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">caccountnumber</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">银行账号</td>
</tr>
<tr>
<td style="text-align:left">cpayunitid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">交易方编号</td>
</tr>
<tr>
<td style="text-align:left">bisdefault</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否默认账号</td>
</tr>
<tr>
<td style="text-align:left">cbankid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属银行</td>
</tr>
<tr>
<td style="text-align:left">cbankname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">开户行</td>
</tr>
<tr>
<td style="text-align:left">caccname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">账户名称</td>
</tr>
<tr>
<td style="text-align:left">cprinvince</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">省自治区</td>
</tr>
<tr>
<td style="text-align:left">ccity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">市县</td>
</tr>
</tbody>
</table>`,r:{minutes:.51,words:153},y:"a",t:"交易单位账号"}}],["/tools/yonyou/archives/unit-class.html",{loader:()=>c(()=>import("./unit-class.html-DYbqCw02.js"),__vite__mapDeps([191,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/unitclass.gif" alt="交易单位分类" tabindex="0" loading="lazy"><figcaption>交易单位分类</figcaption></figure>
<h2>资源符</h2>
<p><code>unitclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cclassid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">类别编码</td>
</tr>
<tr>
<td style="text-align:left">cclassname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">类别名称</td>
</tr>
</tbody>
</table>`,r:{minutes:.33,words:98},y:"a",t:"交易单位分类"}}],["/tools/yonyou/archives/unit-doc.html",{loader:()=>c(()=>import("./unit-doc.html-L6mRyM0Q.js"),__vite__mapDeps([192,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/unitdoc.gif" alt="交易单位档案" tabindex="0" loading="lazy"><figcaption>交易单位档案</figcaption></figure>
<h2>资源符</h2>
<p><code>unitdoc</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cunitid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">交易方编号</td>
</tr>
<tr>
<td style="text-align:left">cunitname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">交易方名称</td>
</tr>
<tr>
<td style="text-align:left">cunitsname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">交易方简称</td>
</tr>
<tr>
<td style="text-align:left">cclass</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">交易方分类编号</td>
</tr>
<tr>
<td style="text-align:left">ccusid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">客户编码</td>
</tr>
<tr>
<td style="text-align:left">csupid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">caddress</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">联系地址</td>
</tr>
<tr>
<td style="text-align:left">cpostcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">邮政编码</td>
</tr>
<tr>
<td style="text-align:left">ctelephone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电话</td>
</tr>
<tr>
<td style="text-align:left">ctelefax</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">传真</td>
</tr>
<tr>
<td style="text-align:left">cbp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">呼机</td>
</tr>
<tr>
<td style="text-align:left">cmobiletele</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">手机</td>
</tr>
<tr>
<td style="text-align:left">cemail</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">Email地址</td>
</tr>
<tr>
<td style="text-align:left">clinkman</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">联系人</td>
</tr>
<tr>
<td style="text-align:left">cremark</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">cbankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应科目编码</td>
</tr>
<tr>
<td style="text-align:left">cdepid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应部门编码</td>
</tr>
<tr>
<td style="text-align:left">cpersonid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应人员编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.76,words:229},y:"a",t:"交易单位档案"}}],["/tools/yonyou/archives/unit-group.html",{loader:()=>c(()=>import("./unit-group.html-zLSSsee1.js"),__vite__mapDeps([193,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/unitgroup.gif" alt="计量单位组" tabindex="0" loading="lazy"><figcaption>计量单位组</figcaption></figure>
<h2>资源符</h2>
<p><code>unitgroup</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位组编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位组名称</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">组类别</td>
</tr>
<tr>
<td style="text-align:left">cgrprelinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应存货编码</td>
</tr>
<tr>
<td style="text-align:left">bdefaultgroup</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否默认组</td>
</tr>
</tbody>
</table>`,r:{minutes:.43,words:128},y:"a",t:"计量单位组"}}],["/tools/yonyou/archives/unit.html",{loader:()=>c(()=>import("./unit.html-LSWHW271.js"),__vite__mapDeps([194,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/unit.gif" alt="计量单位" tabindex="0" loading="lazy"><figcaption>计量单位</figcaption></figure>
<h2>资源符</h2>
<p><code>unit</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位名称</td>
</tr>
<tr>
<td style="text-align:left">group_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计量单位组编码</td>
</tr>
<tr>
<td style="text-align:left">barcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应条形码中的编码</td>
</tr>
<tr>
<td style="text-align:left">main_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">主计量单位标志</td>
</tr>
<tr>
<td style="text-align:left">changerate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">换算率</td>
</tr>
<tr>
<td style="text-align:left">portion</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">合理浮动比例</td>
</tr>
<tr>
<td style="text-align:left">SerialNum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">辅计量单位序号</td>
</tr>
<tr>
<td style="text-align:left">censingular</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名称单数</td>
</tr>
<tr>
<td style="text-align:left">cenplural</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名称复数</td>
</tr>
<tr>
<td style="text-align:left">cunitrefinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应存货编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.62,words:187},y:"a",t:"计量单位"}}],["/tools/yonyou/archives/vendor-class.html",{loader:()=>c(()=>import("./vendor-class.html-BKZsOhE8.js"),__vite__mapDeps([195,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/vendorclass.gif" alt="供应商分类" tabindex="0" loading="lazy"><figcaption>供应商分类</figcaption></figure>
<h2>资源符</h2>
<p><code>vendorclass</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商分类编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商分类名称</td>
</tr>
<tr>
<td style="text-align:left">rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商分类编码级次</td>
</tr>
<tr>
<td style="text-align:left">end_rank_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">末级标志</td>
</tr>
</tbody>
</table>`,r:{minutes:.43,words:128},y:"a",t:"供应商分类"}}],["/tools/yonyou/archives/vendor-inventory.html",{loader:()=>c(()=>import("./vendor-inventory.html-CNoZi6x0.js"),__vite__mapDeps([196,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/venandinv.gif" alt="供应商存货对照表" tabindex="0" loading="lazy"><figcaption>供应商存货对照表</figcaption></figure>
<h2>资源符</h2>
<p><code>venandinv</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cquanlity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供货品质</td>
</tr>
<tr>
<td style="text-align:left">fquota</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">配额</td>
</tr>
<tr>
<td style="text-align:left">fadvdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">提前期</td>
</tr>
<tr>
<td style="text-align:left">cdepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">cpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购员</td>
</tr>
<tr>
<td style="text-align:left">cveninvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商存货编码</td>
</tr>
<tr>
<td style="text-align:left">iteststyle</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验方式</td>
</tr>
<tr>
<td style="text-align:left">idtmethod</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检方案</td>
</tr>
<tr>
<td style="text-align:left">fdtrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检率</td>
</tr>
<tr>
<td style="text-align:left">fdtnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检量</td>
</tr>
<tr>
<td style="text-align:left">cdtunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验计量单位</td>
</tr>
<tr>
<td style="text-align:left">idtstyle</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">抽检方式</td>
</tr>
<tr>
<td style="text-align:left">iqtmethod</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">质量检验方案</td>
</tr>
<tr>
<td style="text-align:left">isuppproperty</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应类型</td>
</tr>
<tr>
<td style="text-align:left">fmaxsuppnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最大交货量</td>
</tr>
<tr>
<td style="text-align:left">fminsuppnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最小交货量</td>
</tr>
<tr>
<td style="text-align:left">cveninvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商存货名称</td>
</tr>
<tr>
<td style="text-align:left">idtlevel</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">检验水平</td>
</tr>
<tr>
<td style="text-align:left">cdtaql</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">AQL</td>
</tr>
<tr>
<td style="text-align:left">fsupplybatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应批量</td>
</tr>
<tr>
<td style="text-align:left">ftotalquota</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">累计配额总量</td>
</tr>
<tr>
<td style="text-align:left">ffinishrateup</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">实际完成率上限(%)</td>
</tr>
<tr>
<td style="text-align:left">ftopcost</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最高进价</td>
</tr>
<tr>
<td style="text-align:left">crulecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义抽检规则</td>
</tr>
<tr>
<td style="text-align:left">drohsenddate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">ROHS认证失效日期</td>
</tr>
</tbody>
</table>`,r:{minutes:.98,words:295},y:"a",t:"供应商存货对照表"}}],["/tools/yonyou/archives/vendor.html",{loader:()=>c(()=>import("./vendor.html-sP__VnLt.js"),__vite__mapDeps([197,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/vendor.gif" alt="供应商档案" tabindex="0" loading="lazy"><figcaption>供应商档案</figcaption></figure>
<h2>资源符</h2>
<p><code>vendor</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商名称</td>
</tr>
<tr>
<td style="text-align:left">abbrname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商简称</td>
</tr>
<tr>
<td style="text-align:left">sort_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属分类码</td>
</tr>
<tr>
<td style="text-align:left">domain_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属地区码</td>
</tr>
<tr>
<td style="text-align:left">industry</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属行业</td>
</tr>
<tr>
<td style="text-align:left">address</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">地址</td>
</tr>
<tr>
<td style="text-align:left">postcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">邮政编码</td>
</tr>
<tr>
<td style="text-align:left">tax_reg_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">纳税人登记号</td>
</tr>
<tr>
<td style="text-align:left">bank_open</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">开户银行</td>
</tr>
<tr>
<td style="text-align:left">bank_acc_number</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">银行帐号</td>
</tr>
<tr>
<td style="text-align:left">seed_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">发展日期</td>
</tr>
<tr>
<td style="text-align:left">legal_man</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人</td>
</tr>
<tr>
<td style="text-align:left">phone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电话</td>
</tr>
<tr>
<td style="text-align:left">fax</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">传真</td>
</tr>
<tr>
<td style="text-align:left">email</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">Email地址</td>
</tr>
<tr>
<td style="text-align:left">contact</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">联系人</td>
</tr>
<tr>
<td style="text-align:left">bp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">呼机</td>
</tr>
<tr>
<td style="text-align:left">mobile</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">手机</td>
</tr>
<tr>
<td style="text-align:left">spec_operator</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">专管业务员</td>
</tr>
<tr>
<td style="text-align:left">discount_rate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">扣率</td>
</tr>
<tr>
<td style="text-align:left">credit_rank</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">信用等级</td>
</tr>
<tr>
<td style="text-align:left">credit_amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用额度</td>
</tr>
<tr>
<td style="text-align:left">credit_deadline</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">信用期限</td>
</tr>
<tr>
<td style="text-align:left">pay_condition</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">付款条件</td>
</tr>
<tr>
<td style="text-align:left">receive_site</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">到货地址</td>
</tr>
<tr>
<td style="text-align:left">receive_mode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">到货方式</td>
</tr>
<tr>
<td style="text-align:left">head_corp_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">供应商总公司编码</td>
</tr>
<tr>
<td style="text-align:left">rec_warehouse</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">到货仓库</td>
</tr>
<tr>
<td style="text-align:left">super_dept</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">分管部门</td>
</tr>
<tr>
<td style="text-align:left">ap_rest</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">应付余额</td>
</tr>
<tr>
<td style="text-align:left">last_tr_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后交易日期</td>
</tr>
<tr>
<td style="text-align:left">last_tr_money</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后交易金额</td>
</tr>
<tr>
<td style="text-align:left">last_pay_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后付款日期</td>
</tr>
<tr>
<td style="text-align:left">last_pay_amount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后付款金额</td>
</tr>
<tr>
<td style="text-align:left">end_date</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">停用日期</td>
</tr>
<tr>
<td style="text-align:left">tr_frequency</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">使用频度</td>
</tr>
<tr>
<td style="text-align:left">tax_in_price_flag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单价是否含税</td>
</tr>
<tr>
<td style="text-align:left">CreatePerson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">建档人</td>
</tr>
<tr>
<td style="text-align:left">ModifyPerson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">变更人</td>
</tr>
<tr>
<td style="text-align:left">ModifyDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">变更日期</td>
</tr>
<tr>
<td style="text-align:left">auth_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属权限分类</td>
</tr>
<tr>
<td style="text-align:left">barcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应条形码中的编码</td>
</tr>
<tr>
<td style="text-align:left">self_define1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项1</td>
</tr>
<tr>
<td style="text-align:left">self_define2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项2</td>
</tr>
<tr>
<td style="text-align:left">self_define3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项3</td>
</tr>
<tr>
<td style="text-align:left">self_define4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项4</td>
</tr>
<tr>
<td style="text-align:left">self_define5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项5</td>
</tr>
<tr>
<td style="text-align:left">self_define6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项6</td>
</tr>
<tr>
<td style="text-align:left">self_define7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项7</td>
</tr>
<tr>
<td style="text-align:left">self_define8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项8</td>
</tr>
<tr>
<td style="text-align:left">self_define9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项9</td>
</tr>
<tr>
<td style="text-align:left">self_define10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项10</td>
</tr>
<tr>
<td style="text-align:left">self_define11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项11</td>
</tr>
<tr>
<td style="text-align:left">self_define12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项12</td>
</tr>
<tr>
<td style="text-align:left">self_define13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项13</td>
</tr>
<tr>
<td style="text-align:left">self_define14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项14</td>
</tr>
<tr>
<td style="text-align:left">self_define15</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项15</td>
</tr>
<tr>
<td style="text-align:left">self_define16</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义项16</td>
</tr>
<tr>
<td style="text-align:left">RegistFund</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">注册资金</td>
</tr>
<tr>
<td style="text-align:left">EmployeeNum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">员工人数</td>
</tr>
<tr>
<td style="text-align:left">GradeABC</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">ABC等级</td>
</tr>
<tr>
<td style="text-align:left">Memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">LicenceDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照是否期限管理</td>
</tr>
<tr>
<td style="text-align:left">LicenceSDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照起始日期</td>
</tr>
<tr>
<td style="text-align:left">LicenceEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照到期日期</td>
</tr>
<tr>
<td style="text-align:left">LicenceADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照预警天数</td>
</tr>
<tr>
<td style="text-align:left">cLicenceRange</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照经营范围</td>
</tr>
<tr>
<td style="text-align:left">BusinessDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证是否期限管理</td>
</tr>
<tr>
<td style="text-align:left">BusinessSDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证起始日期</td>
</tr>
<tr>
<td style="text-align:left">BusinessEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证到期日期</td>
</tr>
<tr>
<td style="text-align:left">BusinessADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">经营许可证预警天数</td>
</tr>
<tr>
<td style="text-align:left">cBusinessRange</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">许可证范围</td>
</tr>
<tr>
<td style="text-align:left">ProxyDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书是否期限管理</td>
</tr>
<tr>
<td style="text-align:left">ProxySDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书起始日期</td>
</tr>
<tr>
<td style="text-align:left">ProxyEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书到期日期</td>
</tr>
<tr>
<td style="text-align:left">ProxyADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">法人委托书预警天数</td>
</tr>
<tr>
<td style="text-align:left">PassGMP</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否通过GMP认证</td>
</tr>
<tr>
<td style="text-align:left">bvencargo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否货物</td>
</tr>
<tr>
<td style="text-align:left">bproxyforeign</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否委外</td>
</tr>
<tr>
<td style="text-align:left">bvenservice</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否服务</td>
</tr>
<tr>
<td style="text-align:left">cVenTradeCCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">行业编码</td>
</tr>
<tr>
<td style="text-align:left">cvenbankcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">所属银行</td>
</tr>
<tr>
<td style="text-align:left">cRelCustomer</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应客户编码</td>
</tr>
<tr>
<td style="text-align:left">cvenexch_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">ivengsptype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">企业类型</td>
</tr>
<tr>
<td style="text-align:left">ivengspauth</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GMP-GSP认证情况</td>
</tr>
<tr>
<td style="text-align:left">cvengspauthno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GMP-GSP认证证书号</td>
</tr>
<tr>
<td style="text-align:left">cVenGSPRange</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GMP-GSP认证范围</td>
</tr>
<tr>
<td style="text-align:left">dVenGSPEDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GMP-GSP证书到期日期</td>
</tr>
<tr>
<td style="text-align:left">dVenGSPSDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GMP-GSP证书生效日期</td>
</tr>
<tr>
<td style="text-align:left">iVenGSPADays</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">GMP-GSP证书预警天数</td>
</tr>
<tr>
<td style="text-align:left">cvenbusinessno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">生产/经营许可证号</td>
</tr>
<tr>
<td style="text-align:left">cvenlicenceno</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">营业执照注册号</td>
</tr>
<tr>
<td style="text-align:left">bvenoverseas</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国外</td>
</tr>
<tr>
<td style="text-align:left">bvenaccperiodmng</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">账期管理</td>
</tr>
<tr>
<td style="text-align:left">cvenpuomprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">采购/委外收付款协议</td>
</tr>
<tr>
<td style="text-align:left">cvenotherprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">其他应付单收付款协议</td>
</tr>
<tr>
<td style="text-align:left">cvencountrycode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国家</td>
</tr>
<tr>
<td style="text-align:left">cvenenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文名称</td>
</tr>
<tr>
<td style="text-align:left">cvenenaddr1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址1</td>
</tr>
<tr>
<td style="text-align:left">cvenenaddr2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址2</td>
</tr>
<tr>
<td style="text-align:left">cvenenaddr3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址3</td>
</tr>
<tr>
<td style="text-align:left">cvenenaddr4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">英文地址4</td>
</tr>
<tr>
<td style="text-align:left">cvenportcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">起运港</td>
</tr>
<tr>
<td style="text-align:left">cvenprimaryven</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">主要承运商</td>
</tr>
<tr>
<td style="text-align:left">fvencommisionrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">佣金比率（％）</td>
</tr>
<tr>
<td style="text-align:left">fveninsuerate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">保险费率（％）</td>
</tr>
<tr>
<td style="text-align:left">bvenhomebranch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">国内分支机构</td>
</tr>
<tr>
<td style="text-align:left">cvenbranchaddr</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分支机构地址</td>
</tr>
<tr>
<td style="text-align:left">cvenbranchphone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分支机构电话</td>
</tr>
<tr>
<td style="text-align:left">cvenbranchperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">分支机构联系人</td>
</tr>
<tr>
<td style="text-align:left">cvensscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">结算方式</td>
</tr>
<tr>
<td style="text-align:left">comwhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">默认委外仓</td>
</tr>
<tr>
<td style="text-align:left">cvencmprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">合同默认收付款协议</td>
</tr>
<tr>
<td style="text-align:left">cvenimprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">进口收付款协议</td>
</tr>
<tr>
<td style="text-align:left">iventaxrate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">税率</td>
</tr>
<tr>
<td style="text-align:left">dvencreatedatetime</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">建档日期</td>
</tr>
<tr>
<td style="text-align:left">cVenMnemCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">助记码</td>
</tr>
<tr>
<td style="text-align:left">cvenbankall</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">供应商银行</td>
</tr>
</tbody>
</table>`,r:{minutes:3.64,words:1092},y:"a",t:"供应商档案"}}],["/tools/yonyou/archives/vouch-rd.html",{loader:()=>c(()=>import("./vouch-rd.html-DU7LIrv5.js"),__vite__mapDeps([198,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/vouchandrd.gif" alt="单据类型与收发类别对照表" tabindex="0" loading="lazy"><figcaption>单据类型与收发类别对照表</figcaption></figure>
<h2>资源符</h2>
<p><code>vouchandrd</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">cvbtid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">单据业务类型</td>
</tr>
<tr>
<td style="text-align:left">cvrrcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">收类别编码</td>
</tr>
<tr>
<td style="text-align:left">cvrscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">发类别编码</td>
</tr>
</tbody>
</table>`,r:{minutes:.4,words:120},y:"a",t:"单据类型与收发类别对照表"}}],["/tools/yonyou/archives/warehouse.html",{loader:()=>c(()=>import("./warehouse.html-CpF-s09q.js"),__vite__mapDeps([199,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/warehouse.gif" alt="仓库档案" tabindex="0" loading="lazy"><figcaption>仓库档案</figcaption></figure>
<h2>资源符</h2>
<p><code>warehouse</code></p>
<h2>操作符</h2>
<p><code>create</code></p>
<h2>参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">仓库编码</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">仓库名称</td>
</tr>
<tr>
<td style="text-align:left">depart_code</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">所属部门</td>
</tr>
<tr>
<td style="text-align:left">address</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">仓库地址</td>
</tr>
<tr>
<td style="text-align:left">phone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电话</td>
</tr>
<tr>
<td style="text-align:left">person</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">负责人</td>
</tr>
<tr>
<td style="text-align:left">valuestyle</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">是</td>
<td style="text-align:left">计价方式</td>
</tr>
<tr>
<td style="text-align:left">cWareGroupCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">仓库核算组</td>
</tr>
<tr>
<td style="text-align:left">cFactoryCode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">工厂</td>
</tr>
<tr>
<td style="text-align:left">whmanage</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否货位管理</td>
</tr>
<tr>
<td style="text-align:left">ration</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">资金定额</td>
</tr>
<tr>
<td style="text-align:left">memo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">barcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">对应条形码中的编码</td>
</tr>
<tr>
<td style="text-align:left">bmrp</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否参与需求计划运算</td>
</tr>
<tr>
<td style="text-align:left">brop</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否参与ROP计算</td>
</tr>
<tr>
<td style="text-align:left">iwhproperty</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">仓库属性</td>
</tr>
<tr>
<td style="text-align:left">bcontrolserial</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">控制序列号</td>
</tr>
<tr>
<td style="text-align:left">bincost</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">记入成本</td>
</tr>
<tr>
<td style="text-align:left">binavailcalcu</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">纳入可用量计算</td>
</tr>
<tr>
<td style="text-align:left">bproxywh</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">代管仓</td>
</tr>
<tr>
<td style="text-align:left">isaconmode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">销售可用量控制方式</td>
</tr>
<tr>
<td style="text-align:left">iexconmode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">出口可用量控制方式</td>
</tr>
<tr>
<td style="text-align:left">istconmode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">库存可用量控制方式</td>
</tr>
<tr>
<td style="text-align:left">bbondedwh</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否保税仓</td>
</tr>
<tr>
<td style="text-align:left">bwhasset</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">资产仓</td>
</tr>
<tr>
<td style="text-align:left">fwhquota</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">配额%</td>
</tr>
<tr>
<td style="text-align:left">dWhEndDate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">停用日期</td>
</tr>
<tr>
<td style="text-align:left">bshop</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">门店</td>
</tr>
<tr>
<td style="text-align:left">bchecksubitemcost</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否核算分项成本</td>
</tr>
<tr>
<td style="text-align:left">cPickPos</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">拣货货位</td>
</tr>
<tr>
<td style="text-align:left">bEB</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">电商仓</td>
</tr>
<tr>
<td style="text-align:left">cProvince</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">省或直辖市</td>
</tr>
<tr>
<td style="text-align:left">cCity</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">市</td>
</tr>
<tr>
<td style="text-align:left">cCounty</td>
<td style="text-align:left">bool</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
<td style="text-align:left">区县</td>
</tr>
</tbody>
</table>`,r:{minutes:1.17,words:350},y:"a",t:"仓库档案"}}],["/tools/yonyou/store/",{loader:()=>c(()=>import("./index.html-47OA1157.js"),__vite__mapDeps([200,1])),meta:{y:"p",t:"供应链"}}],["/tools/yonyou/store/materialout.html",{loader:()=>c(()=>import("./materialout.html-CiU8YOkL.js"),__vite__mapDeps([201,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<figure><img src="https://nas.ilyl.life:8092/yonyou/voucher.gif" alt="材料出库单" tabindex="0" loading="lazy"><figcaption>材料出库单</figcaption></figure>
<h2>资源符</h2>
<p><code>materialout</code></p>
<h2>新增</h2>
<p><code>create</code></p>
<h3>新增参数说明</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">bomfirst</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">bomfirst</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">bmotran</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">cvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">cwhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">仓库编码</td>
</tr>
<tr>
<td style="text-align:left">cdefine15</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine16</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项16</td>
</tr>
<tr>
<td style="text-align:left">vt_id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">模版号</td>
</tr>
<tr>
<td style="text-align:left">imquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">产量</td>
</tr>
<tr>
<td style="text-align:left">dchkdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验日期</td>
</tr>
<tr>
<td style="text-align:left">bhyvouch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否委外业务单据</td>
</tr>
<tr>
<td style="text-align:left">cchkperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员</td>
</tr>
<tr>
<td style="text-align:left">cpspcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品编码</td>
</tr>
<tr>
<td style="text-align:left">ddate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">出库日期</td>
</tr>
<tr>
<td style="text-align:left">cmpocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">isourcerowno</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源单行号</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">ufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">时间戳</td>
</tr>
<tr>
<td style="text-align:left">chinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">iproorderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单ID</td>
</tr>
<tr>
<td style="text-align:left">cvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外商编码</td>
</tr>
<tr>
<td style="text-align:left">cvenabbname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外商</td>
</tr>
<tr>
<td style="text-align:left">cproinvaddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货代码</td>
</tr>
<tr>
<td style="text-align:left">cbuscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务号</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">出库单号</td>
</tr>
<tr>
<td style="text-align:left">crdcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">出库类别编码</td>
</tr>
<tr>
<td style="text-align:left">ireturncount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">ireturncount</td>
</tr>
<tr>
<td style="text-align:left">iverifystate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iverifystate</td>
</tr>
<tr>
<td style="text-align:left">iswfcontrolled</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iswfcontrolled</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项1</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项2</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项3</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项4</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项5</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项6</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项7</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项8</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项9</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项10</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine11</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine12</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项12</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项13</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项14</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项15</td>
</tr>
<tr>
<td style="text-align:left">hcinvdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">csysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据条码</td>
</tr>
<tr>
<td style="text-align:left">cpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员编码</td>
</tr>
<tr>
<td style="text-align:left">cprobatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产批号</td>
</tr>
<tr>
<td style="text-align:left">chandler</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核人</td>
</tr>
<tr>
<td style="text-align:left">cmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">caccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品名称</td>
</tr>
<tr>
<td style="text-align:left">cmaker</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单人</td>
</tr>
<tr>
<td style="text-align:left">cdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine4</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine5</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine6</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cdefine7</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cwhname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">仓库</td>
</tr>
<tr>
<td style="text-align:left">cdepname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">cpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员</td>
</tr>
<tr>
<td style="text-align:left">crdname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">出库类别</td>
</tr>
<tr>
<td style="text-align:left">csource</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据来源</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">itopsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最高库存量</td>
</tr>
<tr>
<td style="text-align:left">ilowsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最低库存量</td>
</tr>
<tr>
<td style="text-align:left">isafesum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">安全库存量</td>
</tr>
<tr>
<td style="text-align:left">cbustype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务类型</td>
</tr>
<tr>
<td style="text-align:left">dveridate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核日期</td>
</tr>
<tr>
<td style="text-align:left">cdefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cmodifyperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">dmodifydate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改日期</td>
</tr>
<tr>
<td style="text-align:left">dnmaketime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单时间</td>
</tr>
<tr>
<td style="text-align:left">dnmodifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">dnverifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核时间</td>
</tr>
<tr>
<td style="text-align:left">cbaccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">bcosting</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否核算</td>
</tr>
<tr>
<td style="text-align:left">isotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">autoid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">子表ID号</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">与主表关联项</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">true</td>
<td style="text-align:left">材料编码</td>
</tr>
<tr>
<td style="text-align:left">cinvaddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">材料代码</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">材料名称</td>
</tr>
<tr>
<td style="text-align:left">cinvstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">cinvm_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">主计量单位</td>
</tr>
<tr>
<td style="text-align:left">cinva_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位</td>
</tr>
<tr>
<td style="text-align:left">creplaceitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替换件</td>
</tr>
<tr>
<td style="text-align:left">cposition</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty5</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性5</td>
</tr>
<tr>
<td style="text-align:left">iinvsncount</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号个数</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项5</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项6</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性6</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性7</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项7</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项8</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性8</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性9</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项9</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项10</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty10</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性10</td>
</tr>
<tr>
<td style="text-align:left">isredoutquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单退回数量</td>
</tr>
<tr>
<td style="text-align:left">isredoutnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单退回件数</td>
</tr>
<tr>
<td style="text-align:left">ipesotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">ipesodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表</td>
</tr>
<tr>
<td style="text-align:left">cpesocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">ipesoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">bsupersede</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替代料</td>
</tr>
<tr>
<td style="text-align:left">isupersedeqty</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替代数量</td>
</tr>
<tr>
<td style="text-align:left">isupersedempoids</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">被替代料生产订单子表id</td>
</tr>
<tr>
<td style="text-align:left">imoallocatesubid</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替代料子表subid</td>
</tr>
<tr>
<td style="text-align:left">cinvoucherlineid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源单行ID</td>
</tr>
<tr>
<td style="text-align:left">cinvouchercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源单号</td>
</tr>
<tr>
<td style="text-align:left">cinvouchertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源单类型</td>
</tr>
<tr>
<td style="text-align:left">cdefine28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">csourcemocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源订单号</td>
</tr>
<tr>
<td style="text-align:left">isourcemodetailsid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源订单子表标识</td>
</tr>
<tr>
<td style="text-align:left">coutvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单类型</td>
</tr>
<tr>
<td style="text-align:left">invstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品规格</td>
</tr>
<tr>
<td style="text-align:left">cbmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">applycode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">子件补料申请单号</td>
</tr>
<tr>
<td style="text-align:left">cplanlotcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划批号</td>
</tr>
<tr>
<td style="text-align:left">bcanreplace</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可替代</td>
</tr>
<tr>
<td style="text-align:left">taskguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">taskguid</td>
</tr>
<tr>
<td style="text-align:left">cinvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单类型</td>
</tr>
<tr>
<td style="text-align:left">coutvouchid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单id</td>
</tr>
<tr>
<td style="text-align:left">cdefine29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项1</td>
</tr>
<tr>
<td style="text-align:left">iposflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已分配货位</td>
</tr>
<tr>
<td style="text-align:left">boutmaterials</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表外领料</td>
</tr>
<tr>
<td style="text-align:left">cdefine32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine36</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine37</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项2</td>
</tr>
<tr>
<td style="text-align:left">productinids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">productinids</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine11</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine12</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单号</td>
</tr>
<tr>
<td style="text-align:left">cbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">条形码</td>
</tr>
<tr>
<td style="text-align:left">inquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应发数量</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项3</td>
</tr>
<tr>
<td style="text-align:left">innum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应发件数</td>
</tr>
<tr>
<td style="text-align:left">dmadedate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产日期</td>
</tr>
<tr>
<td style="text-align:left">impoids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">imassdate</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期</td>
</tr>
<tr>
<td style="text-align:left">cassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位码</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty1</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性1</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项1</td>
</tr>
<tr>
<td style="text-align:left">cbvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cvenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">cposname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位</td>
</tr>
<tr>
<td style="text-align:left">corufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应单据时间戳</td>
</tr>
<tr>
<td style="text-align:left">cbinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">strowguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">rowguid</td>
</tr>
<tr>
<td style="text-align:left">itrids</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">特殊单据子表标识</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty2</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性2</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项2</td>
</tr>
<tr>
<td style="text-align:left">cbatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批号</td>
</tr>
<tr>
<td style="text-align:left">iinvexchrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">换算率</td>
</tr>
<tr>
<td style="text-align:left">cdefine34</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine35</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cmassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期单位</td>
</tr>
<tr>
<td style="text-align:left">isodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">csocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">isoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">cmocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单号</td>
</tr>
<tr>
<td style="text-align:left">imoseq</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单行号</td>
</tr>
<tr>
<td style="text-align:left">cmolotcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产批号</td>
</tr>
<tr>
<td style="text-align:left">iopseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工序行号</td>
</tr>
<tr>
<td style="text-align:left">inum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">件数</td>
</tr>
<tr>
<td style="text-align:left">crejectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不良品处理单号</td>
</tr>
<tr>
<td style="text-align:left">cdemandmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求分类代号说明</td>
</tr>
<tr>
<td style="text-align:left">iordertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单类型</td>
</tr>
<tr>
<td style="text-align:left">iorderdid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">iordercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单号</td>
</tr>
<tr>
<td style="text-align:left">iorderseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单行号</td>
</tr>
<tr>
<td style="text-align:left">copdesc</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工序说明</td>
</tr>
<tr>
<td style="text-align:left">cmworkcentercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工作中心编码</td>
</tr>
<tr>
<td style="text-align:left">cmworkcenter</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工作中心</td>
</tr>
<tr>
<td style="text-align:left">invcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品编码</td>
</tr>
<tr>
<td style="text-align:left">invname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品</td>
</tr>
<tr>
<td style="text-align:left">dmsdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">核销日期</td>
</tr>
<tr>
<td style="text-align:left">isquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计核销数量</td>
</tr>
<tr>
<td style="text-align:left">iexpiratdatecalcu</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期推算方式</td>
</tr>
<tr>
<td style="text-align:left">cexpirationdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期至</td>
</tr>
<tr>
<td style="text-align:left">dexpirationdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期计算项</td>
</tr>
<tr>
<td style="text-align:left">cciqbookcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">手册号</td>
</tr>
<tr>
<td style="text-align:left">ismaterialfee</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计核销金额</td>
</tr>
<tr>
<td style="text-align:left">iomomid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外用料表ID</td>
</tr>
<tr>
<td style="text-align:left">ibondedsumqty</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计保税处理抽取数量</td>
</tr>
<tr>
<td style="text-align:left">cservicecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">服务单号</td>
</tr>
<tr>
<td style="text-align:left">applydid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">applydid</td>
</tr>
<tr>
<td style="text-align:left">comcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外订单号</td>
</tr>
<tr>
<td style="text-align:left">iquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">iomodid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">cwhpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库管员编码</td>
</tr>
<tr>
<td style="text-align:left">cwhpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库管员名称</td>
</tr>
<tr>
<td style="text-align:left">cvmivencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商代码</td>
</tr>
<tr>
<td style="text-align:left">cvmivenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商</td>
</tr>
<tr>
<td style="text-align:left">bvmiused</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管消耗标识</td>
</tr>
<tr>
<td style="text-align:left">iunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单价</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlequantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单数量</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlenum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单件数</td>
</tr>
<tr>
<td style="text-align:left">imaids</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">领料申请单子表id</td>
</tr>
<tr>
<td style="text-align:left">cbsysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据行条码</td>
</tr>
<tr>
<td style="text-align:left">iprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">金额</td>
</tr>
<tr>
<td style="text-align:left">ipunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划单价</td>
</tr>
<tr>
<td style="text-align:left">ipprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划金额</td>
</tr>
<tr>
<td style="text-align:left">dvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">失效日期</td>
</tr>
<tr>
<td style="text-align:left">cobjcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">成本对象编码</td>
</tr>
<tr>
<td style="text-align:left">cname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目</td>
</tr>
<tr>
<td style="text-align:left">irowno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">行号</td>
</tr>
<tr>
<td style="text-align:left">isoutquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库数量</td>
</tr>
<tr>
<td style="text-align:left">isoutnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库件数</td>
</tr>
<tr>
<td style="text-align:left">ifquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">实际数量</td>
</tr>
<tr>
<td style="text-align:left">ifnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">实际件数</td>
</tr>
<tr>
<td style="text-align:left">cvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单id</td>
</tr>
<tr>
<td style="text-align:left">cdefine22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine26</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine27</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">citemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">citemcname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类名称</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty3</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性3</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项3</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项4</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty4</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性4</td>
</tr>
</tbody>
</table>`,r:{minutes:10.37,words:3110},y:"a",t:"材料出库单"}}],["/tools/yonyou/store/productin.html",{loader:()=>c(()=>import("./productin.html-CJ8JKWBS.js"),__vite__mapDeps([202,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<h2>资源符</h2>
<p><code>productin</code></p>
<h2>新增</h2>
<p><code>create</code></p>
<h3>新增参数</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">cvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">cwhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">仓库编码</td>
</tr>
<tr>
<td style="text-align:left">cdefine15</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine16</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项16</td>
</tr>
<tr>
<td style="text-align:left">vt_id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">模版号</td>
</tr>
<tr>
<td style="text-align:left">dchkdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验日期</td>
</tr>
<tr>
<td style="text-align:left">cchkperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员</td>
</tr>
<tr>
<td style="text-align:left">cmpocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单号</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">ddate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">入库日期</td>
</tr>
<tr>
<td style="text-align:left">ufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">时间戳</td>
</tr>
<tr>
<td style="text-align:left">chinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">iverifystate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iverifystate</td>
</tr>
<tr>
<td style="text-align:left">iswfcontrolled</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iswfcontrolled</td>
</tr>
<tr>
<td style="text-align:left">iproorderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单ID</td>
</tr>
<tr>
<td style="text-align:left">ireturncount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">ireturncount</td>
</tr>
<tr>
<td style="text-align:left">csysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据条码</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">入库单号</td>
</tr>
<tr>
<td style="text-align:left">crdcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">入库类别编码</td>
</tr>
<tr>
<td style="text-align:left">cdepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">cpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员编码</td>
</tr>
<tr>
<td style="text-align:left">cprobatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产批号</td>
</tr>
<tr>
<td style="text-align:left">chandler</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核人</td>
</tr>
<tr>
<td style="text-align:left">cmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">caccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">cmaker</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单人</td>
</tr>
<tr>
<td style="text-align:left">cdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine4</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine5</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine6</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cdefine7</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cwhname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">仓库</td>
</tr>
<tr>
<td style="text-align:left">cdepname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">cpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员</td>
</tr>
<tr>
<td style="text-align:left">crdname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">入库类别</td>
</tr>
<tr>
<td style="text-align:left">csource</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据来源</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">itopsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最高库存量</td>
</tr>
<tr>
<td style="text-align:left">ilowsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最低库存量</td>
</tr>
<tr>
<td style="text-align:left">isafesum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">安全库存量</td>
</tr>
<tr>
<td style="text-align:left">cbustype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务类型</td>
</tr>
<tr>
<td style="text-align:left">dveridate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核日期</td>
</tr>
<tr>
<td style="text-align:left">cdefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cmodifyperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">dmodifydate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改日期</td>
</tr>
<tr>
<td style="text-align:left">dnmaketime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单时间</td>
</tr>
<tr>
<td style="text-align:left">dnmodifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">dnverifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核时间</td>
</tr>
<tr>
<td style="text-align:left">isotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">cbaccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">bcosting</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否核算</td>
</tr>
<tr>
<td style="text-align:left">autoid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">子表ID号</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">与主表关联项</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">true</td>
<td style="text-align:left">产品编码</td>
</tr>
<tr>
<td style="text-align:left">cinvaddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品代码</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品名称</td>
</tr>
<tr>
<td style="text-align:left">cinvstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">cinvm_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">主计量单位</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项4</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty4</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性4</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty5</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性5</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项5</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性6</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项6</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项7</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性7</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性8</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项8</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty10</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性10</td>
</tr>
<tr>
<td style="text-align:left">cbmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">cinvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单类型</td>
</tr>
<tr>
<td style="text-align:left">outcopiedquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已复制数量</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项10</td>
</tr>
<tr>
<td style="text-align:left">cplanlotcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划批号</td>
</tr>
<tr>
<td style="text-align:left">taskguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">taskguid</td>
</tr>
<tr>
<td style="text-align:left">iinvsncount</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已指定序列号量</td>
</tr>
<tr>
<td style="text-align:left">cdefine28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cinva_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位</td>
</tr>
<tr>
<td style="text-align:left">cdefine31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">iposflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已分配货位</td>
</tr>
<tr>
<td style="text-align:left">cdefine32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine36</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine37</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项8</td>
</tr>
<tr>
<td style="text-align:left">creplaceitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替换件</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine11</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine12</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单号</td>
</tr>
<tr>
<td style="text-align:left">cbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">条形码</td>
</tr>
<tr>
<td style="text-align:left">cposition</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">inquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应收数量</td>
</tr>
<tr>
<td style="text-align:left">innum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应收件数</td>
</tr>
<tr>
<td style="text-align:left">dmadedate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产日期</td>
</tr>
<tr>
<td style="text-align:left">impoids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">icheckids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单子表ID</td>
</tr>
<tr>
<td style="text-align:left">cbvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cvenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">imassdate</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位码</td>
</tr>
<tr>
<td style="text-align:left">corufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应单据时间戳</td>
</tr>
<tr>
<td style="text-align:left">cbinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">strowguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">rowguid</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cposname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项1</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty1</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性1</td>
</tr>
<tr>
<td style="text-align:left">cdefine34</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine35</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">ccheckcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单号</td>
</tr>
<tr>
<td style="text-align:left">icheckidbaks</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单子表id</td>
</tr>
<tr>
<td style="text-align:left">crejectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不良品处理单号</td>
</tr>
<tr>
<td style="text-align:left">irejectids</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不良品处理单id</td>
</tr>
<tr>
<td style="text-align:left">ccheckpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员</td>
</tr>
<tr>
<td style="text-align:left">dcheckdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验日期</td>
</tr>
<tr>
<td style="text-align:left">ccheckpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员编码</td>
</tr>
<tr>
<td style="text-align:left">cmassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期单位</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项2</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty2</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性2</td>
</tr>
<tr>
<td style="text-align:left">isodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">iordertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单类型</td>
</tr>
<tr>
<td style="text-align:left">iorderdid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">iordercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单号</td>
</tr>
<tr>
<td style="text-align:left">iorderseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单行号</td>
</tr>
<tr>
<td style="text-align:left">cdemandmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求分类代号说明</td>
</tr>
<tr>
<td style="text-align:left">csocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">isoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">cmocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单号</td>
</tr>
<tr>
<td style="text-align:left">imoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单行号</td>
</tr>
<tr>
<td style="text-align:left">cmolotcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产批号</td>
</tr>
<tr>
<td style="text-align:left">iexpiratdatecalcu</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期推算方式</td>
</tr>
<tr>
<td style="text-align:left">cexpirationdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期至</td>
</tr>
<tr>
<td style="text-align:left">dexpirationdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期计算项</td>
</tr>
<tr>
<td style="text-align:left">iopseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工序行号</td>
</tr>
<tr>
<td style="text-align:left">copdesc</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工序说明</td>
</tr>
<tr>
<td style="text-align:left">cciqbookcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">手册号</td>
</tr>
<tr>
<td style="text-align:left">ibondedsumqty</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计保税处理抽取数量</td>
</tr>
<tr>
<td style="text-align:left">cservicecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">服务单号</td>
</tr>
<tr>
<td style="text-align:left">cmworkcentercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工作中心编码</td>
</tr>
<tr>
<td style="text-align:left">cmworkcenter</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">工作中心</td>
</tr>
<tr>
<td style="text-align:left">cbatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批号</td>
</tr>
<tr>
<td style="text-align:left">brelated</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否联副产品</td>
</tr>
<tr>
<td style="text-align:left">cvmivencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商代码</td>
</tr>
<tr>
<td style="text-align:left">cvmivenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商</td>
</tr>
<tr>
<td style="text-align:left">bvmiused</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管消耗标识</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlequantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单数量</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlenum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单件数</td>
</tr>
<tr>
<td style="text-align:left">cbsysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据行条码</td>
</tr>
<tr>
<td style="text-align:left">iinvexchrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">换算率</td>
</tr>
<tr>
<td style="text-align:left">inum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">件数</td>
</tr>
<tr>
<td style="text-align:left">iquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">iunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单价</td>
</tr>
<tr>
<td style="text-align:left">iprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">金额</td>
</tr>
<tr>
<td style="text-align:left">ipunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划单价</td>
</tr>
<tr>
<td style="text-align:left">ipprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划金额</td>
</tr>
<tr>
<td style="text-align:left">dvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">失效日期</td>
</tr>
<tr>
<td style="text-align:left">isoutquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库数量</td>
</tr>
<tr>
<td style="text-align:left">isoutnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库件数</td>
</tr>
<tr>
<td style="text-align:left">irowno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">行号</td>
</tr>
<tr>
<td style="text-align:left">ifquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">实际数量</td>
</tr>
<tr>
<td style="text-align:left">ifnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">实际件数</td>
</tr>
<tr>
<td style="text-align:left">cvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单id</td>
</tr>
<tr>
<td style="text-align:left">cdefine22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine26</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine27</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">citemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">cname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">citemcname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类名称</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty3</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性3</td>
</tr>
</tbody>
</table>`,r:{minutes:8.57,words:2570},y:"a",t:"产成品入库单"}}],["/tools/yonyou/store/purchasein.html",{loader:()=>c(()=>import("./purchasein.html-CW8rv8y6.js"),__vite__mapDeps([203,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<h2>资源符</h2>
<p><code>purchasein</code></p>
<h2>新增</h2>
<p><code>create</code></p>
<h3>新增参数</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">dcreditstart</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">立账日</td>
</tr>
<tr>
<td style="text-align:left">cvenpuomprotocolname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">收付款协议名称</td>
</tr>
<tr>
<td style="text-align:left">cvenfullname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商全称</td>
</tr>
<tr>
<td style="text-align:left">cvenpuomprotocol</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">收付款协议编码</td>
</tr>
<tr>
<td style="text-align:left">icreditperiod</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">账期</td>
</tr>
<tr>
<td style="text-align:left">dgatheringdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">到期日</td>
</tr>
<tr>
<td style="text-align:left">bcredit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否为立账单据</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">cvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">cbustype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务类型</td>
</tr>
<tr>
<td style="text-align:left">csource</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据来源</td>
</tr>
<tr>
<td style="text-align:left">darvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">到货日期</td>
</tr>
<tr>
<td style="text-align:left">cchkcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单号</td>
</tr>
<tr>
<td style="text-align:left">dchkdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验日期</td>
</tr>
<tr>
<td style="text-align:left">cchkperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">gspcheck</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">gsp复核标志</td>
</tr>
<tr>
<td style="text-align:left">cgcroutecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线编码</td>
</tr>
<tr>
<td style="text-align:left">cgcroutename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线名称</td>
</tr>
<tr>
<td style="text-align:left">cbuscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务号</td>
</tr>
<tr>
<td style="text-align:left">cwhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">仓库编码</td>
</tr>
<tr>
<td style="text-align:left">ufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">时间戳</td>
</tr>
<tr>
<td style="text-align:left">chinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">bpufirst</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">采购期初标志</td>
</tr>
<tr>
<td style="text-align:left">ipurorderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">采购订单ID</td>
</tr>
<tr>
<td style="text-align:left">ipurarriveid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">采购到货单ID</td>
</tr>
<tr>
<td style="text-align:left">iarriveid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">到货单ID</td>
</tr>
<tr>
<td style="text-align:left">isalebillid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">进口发票号</td>
</tr>
<tr>
<td style="text-align:left">itaxrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">税率</td>
</tr>
<tr>
<td style="text-align:left">iexchrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">汇率</td>
</tr>
<tr>
<td style="text-align:left">cexch_name</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">币种</td>
</tr>
<tr>
<td style="text-align:left">idiscounttaxtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">扣税类别</td>
</tr>
<tr>
<td style="text-align:left">ireturncount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">ireturncount</td>
</tr>
<tr>
<td style="text-align:left">iverifystate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iverifystate</td>
</tr>
<tr>
<td style="text-align:left">iswfcontrolled</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iswfcontrolled</td>
</tr>
<tr>
<td style="text-align:left">bomfirst</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外期初标志</td>
</tr>
<tr>
<td style="text-align:left">cwhname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">仓库</td>
</tr>
<tr>
<td style="text-align:left">ddate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">入库日期</td>
</tr>
<tr>
<td style="text-align:left">iflowid</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">流程模式ID</td>
</tr>
<tr>
<td style="text-align:left">cflowname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">流程模式描述</td>
</tr>
<tr>
<td style="text-align:left">csysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据条码</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">入库单号</td>
</tr>
<tr>
<td style="text-align:left">crdcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">入库类别编码</td>
</tr>
<tr>
<td style="text-align:left">crdname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">入库类别</td>
</tr>
<tr>
<td style="text-align:left">cdepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">cdepname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">cpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员编码</td>
</tr>
<tr>
<td style="text-align:left">cpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员</td>
</tr>
<tr>
<td style="text-align:left">cptcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">采购类型编码</td>
</tr>
<tr>
<td style="text-align:left">cptname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">采购类型</td>
</tr>
<tr>
<td style="text-align:left">cvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">供货单位编码</td>
</tr>
<tr>
<td style="text-align:left">cvenabbname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">供货单位</td>
</tr>
<tr>
<td style="text-align:left">cordercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">carvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">到货单号</td>
</tr>
<tr>
<td style="text-align:left">cbillcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">发票id</td>
</tr>
<tr>
<td style="text-align:left">cmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">chandler</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核人</td>
</tr>
<tr>
<td style="text-align:left">caccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">cmaker</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单人</td>
</tr>
<tr>
<td style="text-align:left">cdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine4</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine5</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine6</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cdefine7</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项10</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">isafesum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">安全库存量</td>
</tr>
<tr>
<td style="text-align:left">itopsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最高库存量</td>
</tr>
<tr>
<td style="text-align:left">ilowsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最低库存量</td>
</tr>
<tr>
<td style="text-align:left">dveridate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核日期</td>
</tr>
<tr>
<td style="text-align:left">cdefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cdefine15</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine16</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项16</td>
</tr>
<tr>
<td style="text-align:left">vt_id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">模版号</td>
</tr>
<tr>
<td style="text-align:left">cmodifyperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">dmodifydate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改日期</td>
</tr>
<tr>
<td style="text-align:left">dnmaketime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单时间</td>
</tr>
<tr>
<td style="text-align:left">dnmodifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">dnverifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核时间</td>
</tr>
<tr>
<td style="text-align:left">isotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">isumbillquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计开票数量</td>
</tr>
<tr>
<td style="text-align:left">cbaccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">bcosting</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否核算</td>
</tr>
<tr>
<td style="text-align:left">impcost</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">最高进价</td>
</tr>
<tr>
<td style="text-align:left">autoid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">与收发记录主表关联项</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">true</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cinvaddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货代码</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货名称</td>
</tr>
<tr>
<td style="text-align:left">cinvstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">cinvm_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">主计量单位</td>
</tr>
<tr>
<td style="text-align:left">cinva_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位</td>
</tr>
<tr>
<td style="text-align:left">cinvccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">所属分类码</td>
</tr>
<tr>
<td style="text-align:left">iinvsncount</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号个数</td>
</tr>
<tr>
<td style="text-align:left">creworkmocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">返工订单号</td>
</tr>
<tr>
<td style="text-align:left">ireworkmodetailsid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">返工订单子表标识</td>
</tr>
<tr>
<td style="text-align:left">iproducttype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产出品类型</td>
</tr>
<tr>
<td style="text-align:left">cmaininvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应主产品</td>
</tr>
<tr>
<td style="text-align:left">imainmodetailsid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">主产品订单子表标识</td>
</tr>
<tr>
<td style="text-align:left">isharematerialfee</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">分摊材料费</td>
</tr>
<tr>
<td style="text-align:left">cbmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">iFaQty</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">转资产数量</td>
</tr>
<tr>
<td style="text-align:left">isTax</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计结算税额</td>
</tr>
<tr>
<td style="text-align:left">cinvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单类型</td>
</tr>
<tr>
<td style="text-align:left">idebitids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">借入借出单子表id</td>
</tr>
<tr>
<td style="text-align:left">imergecheckautoid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单子表ID</td>
</tr>
<tr>
<td style="text-align:left">outcopiedquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已复制数量</td>
</tr>
<tr>
<td style="text-align:left">gcupid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同生单上游单据ID</td>
</tr>
<tr>
<td style="text-align:left">gcupids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同生单上游单据明细IDs</td>
</tr>
<tr>
<td style="text-align:left">gcsourceid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线起始单据ID</td>
</tr>
<tr>
<td style="text-align:left">gcsourceids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线起始单据IDs</td>
</tr>
<tr>
<td style="text-align:left">cplanlotcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划批号</td>
</tr>
<tr>
<td style="text-align:left">taskguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">taskguid</td>
</tr>
<tr>
<td style="text-align:left">bgift</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">赠品</td>
</tr>
<tr>
<td style="text-align:left">iinvexchrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">换算率</td>
</tr>
<tr>
<td style="text-align:left">iposflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已分配货位</td>
</tr>
<tr>
<td style="text-align:left">gcupcardnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同生单上游单据CardNumber</td>
</tr>
<tr>
<td style="text-align:left">inum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">件数</td>
</tr>
<tr>
<td style="text-align:left">cbvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cvenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">imassdate</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期</td>
</tr>
<tr>
<td style="text-align:left">dmadedate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产日期</td>
</tr>
<tr>
<td style="text-align:left">cassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位码</td>
</tr>
<tr>
<td style="text-align:left">cbatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批号</td>
</tr>
<tr>
<td style="text-align:left">iarrsid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">采购到货单子表标识</td>
</tr>
<tr>
<td style="text-align:left">corufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">时间戳</td>
</tr>
<tr>
<td style="text-align:left">cposname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位</td>
</tr>
<tr>
<td style="text-align:left">cbinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">strowguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">rowguid</td>
</tr>
<tr>
<td style="text-align:left">cgspstate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验状态</td>
</tr>
<tr>
<td style="text-align:left">scrapufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不合格品时间戳</td>
</tr>
<tr>
<td style="text-align:left">ccheckcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单号</td>
</tr>
<tr>
<td style="text-align:left">icheckidbaks</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单子表id</td>
</tr>
<tr>
<td style="text-align:left">crejectcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不良品处理单号</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty1</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性1</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项1</td>
</tr>
<tr>
<td style="text-align:left">irejectids</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不良品处理单id</td>
</tr>
<tr>
<td style="text-align:left">ccheckpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员编码</td>
</tr>
<tr>
<td style="text-align:left">ccheckpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员</td>
</tr>
<tr>
<td style="text-align:left">dcheckdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验日期</td>
</tr>
<tr>
<td style="text-align:left">cmassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期单位</td>
</tr>
<tr>
<td style="text-align:left">ioritaxcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">原币含税单价</td>
</tr>
<tr>
<td style="text-align:left">ioricost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">原币单价</td>
</tr>
<tr>
<td style="text-align:left">iorimoney</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">原币金额</td>
</tr>
<tr>
<td style="text-align:left">ioritaxprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">原币税额</td>
</tr>
<tr>
<td style="text-align:left">iorisum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">原币价税合计</td>
</tr>
<tr>
<td style="text-align:left">itaxrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">税率</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项2</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty2</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性2</td>
</tr>
<tr>
<td style="text-align:left">itaxprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">本币税额</td>
</tr>
<tr>
<td style="text-align:left">isum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">本币价税合计</td>
</tr>
<tr>
<td style="text-align:left">btaxcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单价标准</td>
</tr>
<tr>
<td style="text-align:left">cpoid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">strcontractid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">合同号</td>
</tr>
<tr>
<td style="text-align:left">strcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">合同标的编码</td>
</tr>
<tr>
<td style="text-align:left">imaterialfee</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">材料费</td>
</tr>
<tr>
<td style="text-align:left">iprocesscost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">加工费单价</td>
</tr>
<tr>
<td style="text-align:left">iprocessfee</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">加工费</td>
</tr>
<tr>
<td style="text-align:left">dmsdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">核销日期</td>
</tr>
<tr>
<td style="text-align:left">iaprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">暂估金额</td>
</tr>
<tr>
<td style="text-align:left">ismaterialfee</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计结算材料费</td>
</tr>
<tr>
<td style="text-align:left">isprocessfee</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计结算加工费</td>
</tr>
<tr>
<td style="text-align:left">iomodid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">cveninvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商存货编码</td>
</tr>
<tr>
<td style="text-align:left">cveninvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商存货名称</td>
</tr>
<tr>
<td style="text-align:left">isodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">csocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">isoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">cvmivencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商代码</td>
</tr>
<tr>
<td style="text-align:left">cvmivenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商</td>
</tr>
<tr>
<td style="text-align:left">ipunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划单价/售价</td>
</tr>
<tr>
<td style="text-align:left">bvmiused</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管消耗标识</td>
</tr>
<tr>
<td style="text-align:left">cbarvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">到货单号</td>
</tr>
<tr>
<td style="text-align:left">dbarvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">到货日期</td>
</tr>
<tr>
<td style="text-align:left">cdemandmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求分类代号说明</td>
</tr>
<tr>
<td style="text-align:left">iordertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单类型</td>
</tr>
<tr>
<td style="text-align:left">iorderdid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">iordercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单号</td>
</tr>
<tr>
<td style="text-align:left">iorderseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单行号</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlequantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单数量</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlenum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单件数</td>
</tr>
<tr>
<td style="text-align:left">iexpiratdatecalcu</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期推算方式</td>
</tr>
<tr>
<td style="text-align:left">cexpirationdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期至</td>
</tr>
<tr>
<td style="text-align:left">dexpirationdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期计算项</td>
</tr>
<tr>
<td style="text-align:left">cciqbookcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">手册号</td>
</tr>
<tr>
<td style="text-align:left">ibondedsumqty</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计保税处理抽取数量</td>
</tr>
<tr>
<td style="text-align:left">iOldPartId</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">降级前物料编码</td>
</tr>
<tr>
<td style="text-align:left">fOldQuantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">降级前数量</td>
</tr>
<tr>
<td style="text-align:left">ipprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划金额/售价金额</td>
</tr>
<tr>
<td style="text-align:left">cbsysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据行条码</td>
</tr>
<tr>
<td style="text-align:left">dvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">失效日期</td>
</tr>
<tr>
<td style="text-align:left">cvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单id</td>
</tr>
<tr>
<td style="text-align:left">iquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">iunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">本币单价</td>
</tr>
<tr>
<td style="text-align:left">dsdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">结算日期</td>
</tr>
<tr>
<td style="text-align:left">itax</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">税额</td>
</tr>
<tr>
<td style="text-align:left">isnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计结算件数</td>
</tr>
<tr>
<td style="text-align:left">imoney</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计结算金额</td>
</tr>
<tr>
<td style="text-align:left">isoutquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库数量</td>
</tr>
<tr>
<td style="text-align:left">isoutnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库件数</td>
</tr>
<tr>
<td style="text-align:left">ifnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">实际件数</td>
</tr>
<tr>
<td style="text-align:left">ifquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">实际数量</td>
</tr>
<tr>
<td style="text-align:left">iprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">本币金额</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项3</td>
</tr>
<tr>
<td style="text-align:left">creplaceitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替换件</td>
</tr>
<tr>
<td style="text-align:left">cposition</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">irowno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">行号</td>
</tr>
<tr>
<td style="text-align:left">cdefine22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine26</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine27</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">isquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计结算数量</td>
</tr>
<tr>
<td style="text-align:left">iposid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">facost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">暂估单价</td>
</tr>
<tr>
<td style="text-align:left">citemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">cname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目名称</td>
</tr>
<tr>
<td style="text-align:left">citemcname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类名称</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty3</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty4</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性4</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项4</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项5</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty5</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性5</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性6</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项6</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项7</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性7</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性8</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项8</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性9</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项10</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty10</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性10</td>
</tr>
<tr>
<td style="text-align:left">cdefine28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">iimosid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">iimosid</td>
</tr>
<tr>
<td style="text-align:left">iimbsid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">iimbsid</td>
</tr>
<tr>
<td style="text-align:left">cdefine29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cdefine32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine34</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine35</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cdefine36</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine37</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine11</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine12</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单号</td>
</tr>
<tr>
<td style="text-align:left">cbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">条形码</td>
</tr>
<tr>
<td style="text-align:left">inquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应收数量</td>
</tr>
<tr>
<td style="text-align:left">innum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应收件数</td>
</tr>
<tr>
<td style="text-align:left">icheckids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单子表ID</td>
</tr>
</tbody>
</table>`,r:{minutes:11.12,words:3337},y:"a",t:"采购入库单"}}],["/tools/yonyou/store/saleout.html",{loader:()=>c(()=>import("./saleout.html-BRNJ9CK5.js"),__vite__mapDeps([204,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<h2>资源符</h2>
<p><code>saleout</code></p>
<h2>参照</h2>
<p><code>create</code></p>
<h3>参照参数说明</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">ID</td>
</tr>
<tr>
<td style="text-align:left">cvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据类型</td>
</tr>
<tr>
<td style="text-align:left">cvouchname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据类名</td>
</tr>
<tr>
<td style="text-align:left">cbustype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务类型</td>
</tr>
<tr>
<td style="text-align:left">dveridate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核日期</td>
</tr>
<tr>
<td style="text-align:left">cdefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cdefine15</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine16</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项16</td>
</tr>
<tr>
<td style="text-align:left">csourcels</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据来源</td>
</tr>
<tr>
<td style="text-align:left">cinspector</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">验货人</td>
</tr>
<tr>
<td style="text-align:left">dinspecttime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">验货时间</td>
</tr>
<tr>
<td style="text-align:left">vt_id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">模版号</td>
</tr>
<tr>
<td style="text-align:left">dchkdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验日期</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项1</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项2</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项3</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项4</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项5</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项6</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项7</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项8</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项9</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine12</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项12</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项13</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项14</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项15</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项16</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项10</td>
</tr>
<tr>
<td style="text-align:left">ccusdefine11</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cweighter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">称重人</td>
</tr>
<tr>
<td style="text-align:left">cgcroutecode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线编码</td>
</tr>
<tr>
<td style="text-align:left">cgcroutename</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线名称</td>
</tr>
<tr>
<td style="text-align:left">febweight</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">重量</td>
</tr>
<tr>
<td style="text-align:left">cinvoicecompany</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">开票单位编码</td>
</tr>
<tr>
<td style="text-align:left">cinvoicecompanyabbname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">开票单位简称</td>
</tr>
<tr>
<td style="text-align:left">cebweightunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">重量单位</td>
</tr>
<tr>
<td style="text-align:left">dweighttime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">称重时间</td>
</tr>
<tr>
<td style="text-align:left">cchkperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验员</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">cebexpresscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">快递单号</td>
</tr>
<tr>
<td style="text-align:left">bscanexpress</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否确认快递单号</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">cbuscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务号</td>
</tr>
<tr>
<td style="text-align:left">gspcheck</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">gsp复核标志</td>
</tr>
<tr>
<td style="text-align:left">csource</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据来源</td>
</tr>
<tr>
<td style="text-align:left">ufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">时间戳</td>
</tr>
<tr>
<td style="text-align:left">chinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">cchkcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单号</td>
</tr>
<tr>
<td style="text-align:left">iverifystate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iverifystate</td>
</tr>
<tr>
<td style="text-align:left">iswfcontrolled</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iswfcontrolled</td>
</tr>
<tr>
<td style="text-align:left">cshipaddress</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货地址</td>
</tr>
<tr>
<td style="text-align:left">ccusperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户联系人</td>
</tr>
<tr>
<td style="text-align:left">ccusphone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户电话</td>
</tr>
<tr>
<td style="text-align:left">ccushand</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户手机</td>
</tr>
<tr>
<td style="text-align:left">ccusaddress</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户地址</td>
</tr>
<tr>
<td style="text-align:left">contactphone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户联系人电话</td>
</tr>
<tr>
<td style="text-align:left">contactmobile</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户联系人手机</td>
</tr>
<tr>
<td style="text-align:left">cdeliverunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">收货单位</td>
</tr>
<tr>
<td style="text-align:left">ccontactname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">收货单位联系人</td>
</tr>
<tr>
<td style="text-align:left">cofficephone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">收货单位联系人电话</td>
</tr>
<tr>
<td style="text-align:left">cmobilephone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">收货单位联系人手机</td>
</tr>
<tr>
<td style="text-align:left">cpsnophone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员电话</td>
</tr>
<tr>
<td style="text-align:left">cpsnmobilephone</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员手机</td>
</tr>
<tr>
<td style="text-align:left">cwhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">仓库编码</td>
</tr>
<tr>
<td style="text-align:left">caddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货地址编码</td>
</tr>
<tr>
<td style="text-align:left">ireturncount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">ireturncount</td>
</tr>
<tr>
<td style="text-align:left">cwhname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">仓库</td>
</tr>
<tr>
<td style="text-align:left">iflowid</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">流程模式ID</td>
</tr>
<tr>
<td style="text-align:left">cflowname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">流程模式描述</td>
</tr>
<tr>
<td style="text-align:left">ccusname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户名称</td>
</tr>
<tr>
<td style="text-align:left">csysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据条码</td>
</tr>
<tr>
<td style="text-align:left">ddate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">出库日期</td>
</tr>
<tr>
<td style="text-align:left">ccode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">出库单号</td>
</tr>
<tr>
<td style="text-align:left">crdcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">出库类别编码</td>
</tr>
<tr>
<td style="text-align:left">crdname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">出库类别</td>
</tr>
<tr>
<td style="text-align:left">cdepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">cdepname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售部门</td>
</tr>
<tr>
<td style="text-align:left">cpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员编码</td>
</tr>
<tr>
<td style="text-align:left">cpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务员</td>
</tr>
<tr>
<td style="text-align:left">cstcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售类型编码</td>
</tr>
<tr>
<td style="text-align:left">cstname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售类型</td>
</tr>
<tr>
<td style="text-align:left">ccuscode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户编码</td>
</tr>
<tr>
<td style="text-align:left">ccusabbname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">客户</td>
</tr>
<tr>
<td style="text-align:left">cvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商代码</td>
</tr>
<tr>
<td style="text-align:left">cbillcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">发票id</td>
</tr>
<tr>
<td style="text-align:left">cdlcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货单id</td>
</tr>
<tr>
<td style="text-align:left">cmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">cmaker</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单人</td>
</tr>
<tr>
<td style="text-align:left">caccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">cvenabbname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">chandler</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核人</td>
</tr>
<tr>
<td style="text-align:left">isafesum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">安全库存量</td>
</tr>
<tr>
<td style="text-align:left">itopsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最高库存量</td>
</tr>
<tr>
<td style="text-align:left">ilowsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最低库存量</td>
</tr>
<tr>
<td style="text-align:left">cdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine4</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine5</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine6</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cdefine7</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cmodifyperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">dmodifydate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改日期</td>
</tr>
<tr>
<td style="text-align:left">dnmaketime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单时间</td>
</tr>
<tr>
<td style="text-align:left">dnmodifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">dnverifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核时间</td>
</tr>
<tr>
<td style="text-align:left">cdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项10</td>
</tr>
<tr>
<td style="text-align:left">isotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">stockupid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">stockupid</td>
</tr>
<tr>
<td style="text-align:left">cbaccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">bcosting</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否核算</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">ID</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">true</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cinvaddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货代码</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货名称</td>
</tr>
<tr>
<td style="text-align:left">cinvstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项1</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty1</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性1</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty2</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性2</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项2</td>
</tr>
<tr>
<td style="text-align:left">cbatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批号</td>
</tr>
<tr>
<td style="text-align:left">cinva_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位</td>
</tr>
<tr>
<td style="text-align:left">inum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">件数</td>
</tr>
<tr>
<td style="text-align:left">iinvsncount</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号个数</td>
</tr>
<tr>
<td style="text-align:left">fsettleqty</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计开票数量</td>
</tr>
<tr>
<td style="text-align:left">fretqtywkp</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">未开票退货数量</td>
</tr>
<tr>
<td style="text-align:left">fretqtyykp</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已开票退货数量</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">ipesotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">ipesodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表</td>
</tr>
<tr>
<td style="text-align:left">cpesocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">ipesoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">idebitids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">借入借出单子表id</td>
</tr>
<tr>
<td style="text-align:left">cbmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">cinvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单类型</td>
</tr>
<tr>
<td style="text-align:left">coutvouchid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单id</td>
</tr>
<tr>
<td style="text-align:left">coutvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单类型</td>
</tr>
<tr>
<td style="text-align:left">isredoutquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单退回数量</td>
</tr>
<tr>
<td style="text-align:left">isredoutnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应蓝字出库单退回件数</td>
</tr>
<tr>
<td style="text-align:left">gcsourceid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线起始单据ID</td>
</tr>
<tr>
<td style="text-align:left">gcsourceids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">协同路线起始单据IDs</td>
</tr>
<tr>
<td style="text-align:left">taskguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">taskguid</td>
</tr>
<tr>
<td style="text-align:left">iinvexchrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">换算率</td>
</tr>
<tr>
<td style="text-align:left">iposflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">已分配货位</td>
</tr>
<tr>
<td style="text-align:left">cdefine36</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine37</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvm_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">主计量单位</td>
</tr>
<tr>
<td style="text-align:left">iquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">iunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单价</td>
</tr>
<tr>
<td style="text-align:left">corufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应单据时间戳</td>
</tr>
<tr>
<td style="text-align:left">cbinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">strowguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">rowguid</td>
</tr>
<tr>
<td style="text-align:left">scrapufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">不合格品时间戳</td>
</tr>
<tr>
<td style="text-align:left">cmassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期单位</td>
</tr>
<tr>
<td style="text-align:left">strcontractid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">合同号</td>
</tr>
<tr>
<td style="text-align:left">strcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">合同标的编码</td>
</tr>
<tr>
<td style="text-align:left">igrossweight</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">毛重</td>
</tr>
<tr>
<td style="text-align:left">inetweight</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">净重</td>
</tr>
<tr>
<td style="text-align:left">iprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">金额</td>
</tr>
<tr>
<td style="text-align:left">ccusinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户存货编码</td>
</tr>
<tr>
<td style="text-align:left">ccusinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">客户存货名称</td>
</tr>
<tr>
<td style="text-align:left">isodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">csocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">isoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">cvmivencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商代码</td>
</tr>
<tr>
<td style="text-align:left">cvmivenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商</td>
</tr>
<tr>
<td style="text-align:left">bvmiused</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管消耗标识</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlequantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单数量</td>
</tr>
<tr>
<td style="text-align:left">ivmisettlenum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管挂账确认单件数</td>
</tr>
<tr>
<td style="text-align:left">ipunitcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划单价/售价</td>
</tr>
<tr>
<td style="text-align:left">ipprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划金额/售价金额</td>
</tr>
<tr>
<td style="text-align:left">dvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">失效日期</td>
</tr>
<tr>
<td style="text-align:left">cbdlcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货单号</td>
</tr>
<tr>
<td style="text-align:left">cdemandmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求分类代号说明</td>
</tr>
<tr>
<td style="text-align:left">iordertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单类型</td>
</tr>
<tr>
<td style="text-align:left">iorderdid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">iordercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单号</td>
</tr>
<tr>
<td style="text-align:left">iorderseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">来源订单行号</td>
</tr>
<tr>
<td style="text-align:left">iexpiratdatecalcu</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期推算方式</td>
</tr>
<tr>
<td style="text-align:left">cexpirationdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期至</td>
</tr>
<tr>
<td style="text-align:left">dexpirationdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期计算项</td>
</tr>
<tr>
<td style="text-align:left">cciqbookcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">手册号</td>
</tr>
<tr>
<td style="text-align:left">ibondedsumqty</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计保税处理抽取数量</td>
</tr>
<tr>
<td style="text-align:left">cbsysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据行条码</td>
</tr>
<tr>
<td style="text-align:left">cposition</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">creplaceitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替换件</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项3</td>
</tr>
<tr>
<td style="text-align:left">autoid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">其他入库单编号</td>
</tr>
<tr>
<td style="text-align:left">cvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单id</td>
</tr>
<tr>
<td style="text-align:left">isoutquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库数量</td>
</tr>
<tr>
<td style="text-align:left">isoutnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">累计出库件数</td>
</tr>
<tr>
<td style="text-align:left">cdefine22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine26</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine27</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">citemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">cname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">idlsid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货单子表ID</td>
</tr>
<tr>
<td style="text-align:left">isbsid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">发票子表ID</td>
</tr>
<tr>
<td style="text-align:left">isendquantity</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货数量</td>
</tr>
<tr>
<td style="text-align:left">irowno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">行号</td>
</tr>
<tr>
<td style="text-align:left">isendnum</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">发货件数</td>
</tr>
<tr>
<td style="text-align:left">citemcname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类名称</td>
</tr>
<tr>
<td style="text-align:left">iensid</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">委托子表id</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty3</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty4</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性4</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项4</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty5</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性5</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项5</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项6</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性6</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性7</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项7</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项8</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性8</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty10</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性10</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项10</td>
</tr>
<tr>
<td style="text-align:left">cdefine28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cdefine32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine34</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine35</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine11</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine12</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cinvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单号</td>
</tr>
<tr>
<td style="text-align:left">cbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">条形码</td>
</tr>
<tr>
<td style="text-align:left">inquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应发数量</td>
</tr>
<tr>
<td style="text-align:left">innum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">应发件数</td>
</tr>
<tr>
<td style="text-align:left">dmadedate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产日期</td>
</tr>
<tr>
<td style="text-align:left">icheckids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验单子表ID</td>
</tr>
<tr>
<td style="text-align:left">cbvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">cvenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">imassdate</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期</td>
</tr>
<tr>
<td style="text-align:left">bgsp</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否质检</td>
</tr>
<tr>
<td style="text-align:left">cgspstate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">检验状态</td>
</tr>
<tr>
<td style="text-align:left">cassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位码</td>
</tr>
<tr>
<td style="text-align:left">cposname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位</td>
</tr>
</tbody>
</table>`,r:{minutes:11.53,words:3460},y:"a",t:"销售出库单"}}],["/tools/yonyou/store/transvouch.html",{loader:()=>c(()=>import("./transvouch.html-C09HTe44.js"),__vite__mapDeps([205,1])),meta:{d:16871328e5,l:"2023年6月19日",c:["用友"],g:["U8+"],o:!0,e:`<h2>资源符</h2>
<p><code>transvouch</code></p>
<h2>新增调拨单</h2>
<p><code>create</code></p>
<h2>新增参数说明</h2>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">参数路径</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">csource</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据来源</td>
</tr>
<tr>
<td style="text-align:left">dtvdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">日期</td>
</tr>
<tr>
<td style="text-align:left">ctvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">单据号</td>
</tr>
<tr>
<td style="text-align:left">codepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">转出部门编码</td>
</tr>
<tr>
<td style="text-align:left">cidepcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">转入部门编码</td>
</tr>
<tr>
<td style="text-align:left">cirdcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">入库类别编码</td>
</tr>
<tr>
<td style="text-align:left">parentscrp</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">母件损耗率(%)</td>
</tr>
<tr>
<td style="text-align:left">cbustype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">业务类型</td>
</tr>
<tr>
<td style="text-align:left">csourcecodels</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">零售来源单号</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">cordcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">出库类别编码</td>
</tr>
<tr>
<td style="text-align:left">ctvmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">ufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">时间戳</td>
</tr>
<tr>
<td style="text-align:left">chinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">iproorderid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单ID</td>
</tr>
<tr>
<td style="text-align:left">cordertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">订单类型</td>
</tr>
<tr>
<td style="text-align:left">ctranrequestcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">调拨申请单号</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品名称</td>
</tr>
<tr>
<td style="text-align:left">cversion</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">版本号/替代标识</td>
</tr>
<tr>
<td style="text-align:left">bomid</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">bomid</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项1</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项2</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项3</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项4</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项5</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项6</td>
</tr>
<tr>
<td style="text-align:left">cpersoncode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">经手人编码</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项7</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项8</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项9</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">自由项10</td>
</tr>
<tr>
<td style="text-align:left">itransflag</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">调拨方向</td>
</tr>
<tr>
<td style="text-align:left">ireturncount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">ireturncount</td>
</tr>
<tr>
<td style="text-align:left">iverifystate</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iverifystate</td>
</tr>
<tr>
<td style="text-align:left">iswfcontrolled</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">iswfcontrolled</td>
</tr>
<tr>
<td style="text-align:left">csysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据条码</td>
</tr>
<tr>
<td style="text-align:left">cdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine4</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine5</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cdefine6</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cdefine7</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项10</td>
</tr>
<tr>
<td style="text-align:left">caccounter</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">记账人</td>
</tr>
<tr>
<td style="text-align:left">cmaker</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单人</td>
</tr>
<tr>
<td style="text-align:left">cdepname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">转入部门</td>
</tr>
<tr>
<td style="text-align:left">cpersonname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">经手人</td>
</tr>
<tr>
<td style="text-align:left">cdepname_1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">转出部门</td>
</tr>
<tr>
<td style="text-align:left">crdname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">入库类别</td>
</tr>
<tr>
<td style="text-align:left">crdname_1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">出库类别</td>
</tr>
<tr>
<td style="text-align:left">cowhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">转出仓库编码</td>
</tr>
<tr>
<td style="text-align:left">ciwhcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">转入仓库编码</td>
</tr>
<tr>
<td style="text-align:left">cwhname</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">转出仓库</td>
</tr>
<tr>
<td style="text-align:left">cwhname_1</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">true</td>
<td style="text-align:left">转入仓库</td>
</tr>
<tr>
<td style="text-align:left">iamount</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">isafesum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">安全库存量</td>
</tr>
<tr>
<td style="text-align:left">itopsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最高库存量</td>
</tr>
<tr>
<td style="text-align:left">ilowsum</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">最低库存量</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">远程编号</td>
</tr>
<tr>
<td style="text-align:left">vt_id</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">模版号</td>
</tr>
<tr>
<td style="text-align:left">cverifyperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核人</td>
</tr>
<tr>
<td style="text-align:left">dverifydate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核日期</td>
</tr>
<tr>
<td style="text-align:left">cpspcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品结构</td>
</tr>
<tr>
<td style="text-align:left">cmpocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">iquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">产量</td>
</tr>
<tr>
<td style="text-align:left">btransflag</td>
<td style="text-align:left">long</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否传递</td>
</tr>
<tr>
<td style="text-align:left">cdefine11</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine12</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine13</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine14</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cdefine15</td>
<td style="text-align:left">int</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cdefine16</td>
<td style="text-align:left">double</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">表头自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cmodifyperson</td>
<td style="text-align:left">string</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">dmodifydate</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改日期</td>
</tr>
<tr>
<td style="text-align:left">dnmaketime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">制单时间</td>
</tr>
<tr>
<td style="text-align:left">dnmodifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">dnverifytime</td>
<td style="text-align:left">date</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td style="text-align:left">审核时间</td>
</tr>
<tr>
<td style="text-align:left">issotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">idsodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">目标销售订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">cdsocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">目标需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">idsoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">目标需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">idsotype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">目标需求跟踪方式</td>
</tr>
<tr>
<td style="text-align:left">bcosting</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否核算</td>
</tr>
<tr>
<td style="text-align:left">issodid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">销售订单子表ID</td>
</tr>
<tr>
<td style="text-align:left">csocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪号</td>
</tr>
<tr>
<td style="text-align:left">isoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求跟踪行号</td>
</tr>
<tr>
<td style="text-align:left">cinvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">true</td>
<td style="text-align:left">存货编码</td>
</tr>
<tr>
<td style="text-align:left">cinvaddcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货代码</td>
</tr>
<tr>
<td style="text-align:left">cinvname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货名称</td>
</tr>
<tr>
<td style="text-align:left">cinvstd</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">规格型号</td>
</tr>
<tr>
<td style="text-align:left">cinvm_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">主计量单位</td>
</tr>
<tr>
<td style="text-align:left">cfree1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项1</td>
</tr>
<tr>
<td style="text-align:left">cfree2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项2</td>
</tr>
<tr>
<td style="text-align:left">cbvencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商编码</td>
</tr>
<tr>
<td style="text-align:left">iinvsncount</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号个数</td>
</tr>
<tr>
<td style="text-align:left">cvenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">供应商</td>
</tr>
<tr>
<td style="text-align:left">imassdate</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期</td>
</tr>
<tr>
<td style="text-align:left">taskguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">taskguid</td>
</tr>
<tr>
<td style="text-align:left">cinvouchtype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单类型</td>
</tr>
<tr>
<td style="text-align:left">cbsourcecodels</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">零售来源单号</td>
</tr>
<tr>
<td style="text-align:left">cmolotcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产批号</td>
</tr>
<tr>
<td style="text-align:left">ipresent</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存量</td>
</tr>
<tr>
<td style="text-align:left">ipresentnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">现存件数</td>
</tr>
<tr>
<td style="text-align:left">iavaquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用量</td>
</tr>
<tr>
<td style="text-align:left">iavanum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">可用件数</td>
</tr>
<tr>
<td style="text-align:left">cinvoucherlineid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源单行ID</td>
</tr>
<tr>
<td style="text-align:left">cinvouchercode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源单号</td>
</tr>
<tr>
<td style="text-align:left">cinvouchertype</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">源单类型</td>
</tr>
<tr>
<td style="text-align:left">cassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位码</td>
</tr>
<tr>
<td style="text-align:left">cbmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">备注</td>
</tr>
<tr>
<td style="text-align:left">dmadedate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产日期</td>
</tr>
<tr>
<td style="text-align:left">ctvbatch</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批号</td>
</tr>
<tr>
<td style="text-align:left">itvnum</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">件数</td>
</tr>
<tr>
<td style="text-align:left">autoid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">自动编号</td>
</tr>
<tr>
<td style="text-align:left">iinvexchrate</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">换算率</td>
</tr>
<tr>
<td style="text-align:left">strowguid</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">rowguid</td>
</tr>
<tr>
<td style="text-align:left">cbinvsn</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">序列号</td>
</tr>
<tr>
<td style="text-align:left">corufts</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应单据时间戳</td>
</tr>
<tr>
<td style="text-align:left">cmassunit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">保质期单位</td>
</tr>
<tr>
<td style="text-align:left">itrids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">调拨申请单子表ID</td>
</tr>
<tr>
<td style="text-align:left">igrossweight</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">毛重</td>
</tr>
<tr>
<td style="text-align:left">inetweight</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">净重</td>
</tr>
<tr>
<td style="text-align:left">cinposname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">调入货位</td>
</tr>
<tr>
<td style="text-align:left">cinposcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">调入货位编码</td>
</tr>
<tr>
<td style="text-align:left">coutposname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">调出货位</td>
</tr>
<tr>
<td style="text-align:left">coutposcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">调出货位编码</td>
</tr>
<tr>
<td style="text-align:left">cvmivencode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商代码</td>
</tr>
<tr>
<td style="text-align:left">cvmivenname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">代管商</td>
</tr>
<tr>
<td style="text-align:left">itvquantity</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">数量</td>
</tr>
<tr>
<td style="text-align:left">itvacost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单价</td>
</tr>
<tr>
<td style="text-align:left">csdemandmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">需求分类代号说明</td>
</tr>
<tr>
<td style="text-align:left">cddemandmemo</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">目标需求分类代号说明</td>
</tr>
<tr>
<td style="text-align:left">imoids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">imoids</td>
</tr>
<tr>
<td style="text-align:left">comcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">委外订单号</td>
</tr>
<tr>
<td style="text-align:left">cmocode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单号</td>
</tr>
<tr>
<td style="text-align:left">invcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品编码</td>
</tr>
<tr>
<td style="text-align:left">invname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">产品</td>
</tr>
<tr>
<td style="text-align:left">imoseq</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单行号</td>
</tr>
<tr>
<td style="text-align:left">iomids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">iomids</td>
</tr>
<tr>
<td style="text-align:left">iexpiratdatecalcu</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期推算方式</td>
</tr>
<tr>
<td style="text-align:left">cexpirationdate</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期至</td>
</tr>
<tr>
<td style="text-align:left">dexpirationdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">有效期计算项</td>
</tr>
<tr>
<td style="text-align:left">cciqbookcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">手册号</td>
</tr>
<tr>
<td style="text-align:left">cbsysbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据行条码</td>
</tr>
<tr>
<td style="text-align:left">itvaprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">金额</td>
</tr>
<tr>
<td style="text-align:left">itvpcost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划单价/售价</td>
</tr>
<tr>
<td style="text-align:left">itvpprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">计划金额/售价金额</td>
</tr>
<tr>
<td style="text-align:left">cinva_unit</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">库存单位</td>
</tr>
<tr>
<td style="text-align:left">ddisdate</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">失效日期</td>
</tr>
<tr>
<td style="text-align:left">cposition</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">货位编码</td>
</tr>
<tr>
<td style="text-align:left">creplaceitem</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">替换件</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine1</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine2</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项2</td>
</tr>
<tr>
<td style="text-align:left">irowno</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">行号</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项3</td>
</tr>
<tr>
<td style="text-align:left">rdsid</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单id</td>
</tr>
<tr>
<td style="text-align:left">ctvcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">单据号</td>
</tr>
<tr>
<td style="text-align:left">cdefine22</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项1</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性7</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性8</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性9</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性6</td>
</tr>
<tr>
<td style="text-align:left">cdefine23</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项2</td>
</tr>
<tr>
<td style="text-align:left">cdefine24</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项3</td>
</tr>
<tr>
<td style="text-align:left">cdefine25</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cdefine26</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty1</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性1</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty2</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性2</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty3</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性3</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty4</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性4</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty5</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性5</td>
</tr>
<tr>
<td style="text-align:left">cdefine27</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项6</td>
</tr>
<tr>
<td style="text-align:left">citemcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目编码</td>
</tr>
<tr>
<td style="text-align:left">cname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目</td>
</tr>
<tr>
<td style="text-align:left">citem_class</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类编码</td>
</tr>
<tr>
<td style="text-align:left">fsalecost</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">零售单价</td>
</tr>
<tr>
<td style="text-align:left">fsaleprice</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">零售金额</td>
</tr>
<tr>
<td style="text-align:left">citemcname</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">项目大类名称</td>
</tr>
<tr>
<td style="text-align:left">cfree3</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项3</td>
</tr>
<tr>
<td style="text-align:left">cfree4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项4</td>
</tr>
<tr>
<td style="text-align:left">cfree5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项5</td>
</tr>
<tr>
<td style="text-align:left">cfree6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项6</td>
</tr>
<tr>
<td style="text-align:left">cfree7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项7</td>
</tr>
<tr>
<td style="text-align:left">cfree8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项8</td>
</tr>
<tr>
<td style="text-align:left">cfree9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项9</td>
</tr>
<tr>
<td style="text-align:left">cfree10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自由项10</td>
</tr>
<tr>
<td style="text-align:left">cinvouchcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">对应入库单号</td>
</tr>
<tr>
<td style="text-align:left">cbarcode</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">条形码</td>
</tr>
<tr>
<td style="text-align:left">cdefine28</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cdefine29</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cdefine30</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cdefine31</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cdefine32</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cdefine33</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cdefine34</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cdefine35</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cdefine36</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cbatchproperty10</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">批次属性10</td>
</tr>
<tr>
<td style="text-align:left">cdefine37</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">表体自定义项16</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine4</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项4</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine5</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项5</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine6</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项6</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine7</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项7</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine8</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项8</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine9</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项9</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine10</td>
<td style="text-align:left">string</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项10</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine11</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项11</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine12</td>
<td style="text-align:left">int</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项12</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine13</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项13</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine14</td>
<td style="text-align:left">double</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项14</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine15</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项15</td>
</tr>
<tr>
<td style="text-align:left">cinvdefine16</td>
<td style="text-align:left">date</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">存货自定义项16</td>
</tr>
<tr>
<td style="text-align:left">impoids</td>
<td style="text-align:left">long</td>
<td style="text-align:left">entry</td>
<td style="text-align:left">false</td>
<td style="text-align:left">生产订单子表Id</td>
</tr>
</tbody>
</table>`,r:{minutes:8.88,words:2663},y:"a",t:"调拨单"}}],["/404.html",{loader:()=>c(()=>import("./404.html-CTDiK8bF.js"),__vite__mapDeps([206,1])),meta:{y:"p",t:""}}],["/tools/",{loader:()=>c(()=>import("./index.html-FQzOXkqy.js"),__vite__mapDeps([207,1])),meta:{y:"p",t:"Tools"}}],["/tools/installer/",{loader:()=>c(()=>import("./index.html-CPtyi37S.js"),__vite__mapDeps([208,1])),meta:{y:"p",t:"Installer"}}],["/category/",{loader:()=>c(()=>import("./index.html-Brgn1XLB.js"),__vite__mapDeps([209,1])),meta:{y:"p",t:"分类",I:!1}}],["/category/%E4%B9%A6%E7%B1%8D/",{loader:()=>c(()=>import("./index.html-DJifl6DC.js"),__vite__mapDeps([210,1])),meta:{y:"p",t:"书籍 分类",I:!1}}],["/category/neverland/",{loader:()=>c(()=>import("./index.html-D9TgMXLJ.js"),__vite__mapDeps([211,1])),meta:{y:"p",t:"Neverland 分类",I:!1}}],["/category/%E5%B7%A5%E5%85%B7%E7%AE%B1/",{loader:()=>c(()=>import("./index.html-CLDHJOWh.js"),__vite__mapDeps([212,1])),meta:{y:"p",t:"工具箱 分类",I:!1}}],["/category/web/",{loader:()=>c(()=>import("./index.html-BtLbk76O.js"),__vite__mapDeps([213,1])),meta:{y:"p",t:"Web 分类",I:!1}}],["/category/c__/",{loader:()=>c(()=>import("./index.html-CZVVhzN9.js"),__vite__mapDeps([214,1])),meta:{y:"p",t:"C++ 分类",I:!1}}],["/category/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/",{loader:()=>c(()=>import("./index.html-BnqEddq1.js"),__vite__mapDeps([215,1])),meta:{y:"p",t:"设计模式 分类",I:!1}}],["/category/c_/",{loader:()=>c(()=>import("./index.html-DD1XY2yL.js"),__vite__mapDeps([216,1])),meta:{y:"p",t:"C# 分类",I:!1}}],["/category/vb/",{loader:()=>c(()=>import("./index.html-CmixQEXV.js"),__vite__mapDeps([217,1])),meta:{y:"p",t:"VB 分类",I:!1}}],["/category/jwt/",{loader:()=>c(()=>import("./index.html-BWmQ8HOj.js"),__vite__mapDeps([218,1])),meta:{y:"p",t:"JWT 分类",I:!1}}],["/category/%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95/",{loader:()=>c(()=>import("./index.html-D86WcMkx.js"),__vite__mapDeps([219,1])),meta:{y:"p",t:"日志记录 分类",I:!1}}],["/category/signalr/",{loader:()=>c(()=>import("./index.html-BC96XhRF.js"),__vite__mapDeps([220,1])),meta:{y:"p",t:"Signalr 分类",I:!1}}],["/category/task/",{loader:()=>c(()=>import("./index.html-DElmPZa7.js"),__vite__mapDeps([221,1])),meta:{y:"p",t:"Task 分类",I:!1}}],["/category/docker/",{loader:()=>c(()=>import("./index.html-BR0nOnDP.js"),__vite__mapDeps([222,1])),meta:{y:"p",t:"DOCKER 分类",I:!1}}],["/category/%E8%AE%AF%E9%A3%9E/",{loader:()=>c(()=>import("./index.html-ldGKOeDq.js"),__vite__mapDeps([223,1])),meta:{y:"p",t:"讯飞 分类",I:!1}}],["/category/%E6%89%93%E5%8C%85/",{loader:()=>c(()=>import("./index.html-Dv8dx-aw.js"),__vite__mapDeps([224,1])),meta:{y:"p",t:"打包 分类",I:!1}}],["/category/%E7%94%A8%E5%8F%8B/",{loader:()=>c(()=>import("./index.html-BZM09TqB.js"),__vite__mapDeps([225,1])),meta:{y:"p",t:"用友 分类",I:!1}}],["/tag/",{loader:()=>c(()=>import("./index.html-BPXds7FA.js"),__vite__mapDeps([226,1])),meta:{y:"p",t:"标签",I:!1}}],["/tag/%E5%A2%9E%E5%B9%BF%E8%B4%A4%E6%96%87/",{loader:()=>c(()=>import("./index.html-PjWybUje.js"),__vite__mapDeps([227,1])),meta:{y:"p",t:"标签: 增广贤文",I:!1}}],["/tag/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/",{loader:()=>c(()=>import("./index.html-BfGBRDIK.js"),__vite__mapDeps([228,1])),meta:{y:"p",t:"标签: 正则表达式",I:!1}}],["/tag/eslint/",{loader:()=>c(()=>import("./index.html-DMbhPNy5.js"),__vite__mapDeps([229,1])),meta:{y:"p",t:"标签: ESLint",I:!1}}],["/tag/prettier/",{loader:()=>c(()=>import("./index.html-BNxT8rqJ.js"),__vite__mapDeps([230,1])),meta:{y:"p",t:"标签: prettier",I:!1}}],["/tag/stylelint/",{loader:()=>c(()=>import("./index.html-CvoeYAMU.js"),__vite__mapDeps([231,1])),meta:{y:"p",t:"标签: stylelint",I:!1}}],["/tag/husky/",{loader:()=>c(()=>import("./index.html-BZI1uKjq.js"),__vite__mapDeps([232,1])),meta:{y:"p",t:"标签: husky",I:!1}}],["/tag/nano-staged/",{loader:()=>c(()=>import("./index.html-WBw_lv3X.js"),__vite__mapDeps([233,1])),meta:{y:"p",t:"标签: nano-staged",I:!1}}],["/tag/commitlint/",{loader:()=>c(()=>import("./index.html-CPEs3BA-.js"),__vite__mapDeps([234,1])),meta:{y:"p",t:"标签: commitlint",I:!1}}],["/tag/iis/",{loader:()=>c(()=>import("./index.html-BuEjy9PE.js"),__vite__mapDeps([235,1])),meta:{y:"p",t:"标签: IIS",I:!1}}],["/tag/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86/",{loader:()=>c(()=>import("./index.html-pXuf7zFx.js"),__vite__mapDeps([236,1])),meta:{y:"p",t:"标签: 反向代理",I:!1}}],["/tag/%E8%B7%A8%E5%9F%9F/",{loader:()=>c(()=>import("./index.html-Bq0tjXde.js"),__vite__mapDeps([237,1])),meta:{y:"p",t:"标签: 跨域",I:!1}}],["/tag/rsa/",{loader:()=>c(()=>import("./index.html-DYNvcj2C.js"),__vite__mapDeps([238,1])),meta:{y:"p",t:"标签: RSA",I:!1}}],["/tag/c__/",{loader:()=>c(()=>import("./index.html-CsP8nJUL.js"),__vite__mapDeps([239,1])),meta:{y:"p",t:"标签: C++",I:!1}}],["/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/",{loader:()=>c(()=>import("./index.html-DEjnW8as.js"),__vite__mapDeps([240,1])),meta:{y:"p",t:"标签: 设计模式",I:!1}}],["/tag/maui/",{loader:()=>c(()=>import("./index.html-CrJg64x2.js"),__vite__mapDeps([241,1])),meta:{y:"p",t:"标签: MAUI",I:!1}}],["/tag/vb/",{loader:()=>c(()=>import("./index.html-D2D2Yw1Q.js"),__vite__mapDeps([242,1])),meta:{y:"p",t:"标签: VB",I:!1}}],["/tag/c_/",{loader:()=>c(()=>import("./index.html-CPjKvZwe.js"),__vite__mapDeps([243,1])),meta:{y:"p",t:"标签: C#",I:!1}}],["/tag/wpf/",{loader:()=>c(()=>import("./index.html-Dz1p5NxB.js"),__vite__mapDeps([244,1])),meta:{y:"p",t:"标签: WPF",I:!1}}],["/tag/%E5%8A%A8%E7%94%BB/",{loader:()=>c(()=>import("./index.html-BN-pX_sq.js"),__vite__mapDeps([245,1])),meta:{y:"p",t:"标签: 动画",I:!1}}],["/tag/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%A7%E4%BB%B6/",{loader:()=>c(()=>import("./index.html-CGuL2Z7z.js"),__vite__mapDeps([246,1])),meta:{y:"p",t:"标签: 自定义控件",I:!1}}],["/tag/behaviors/",{loader:()=>c(()=>import("./index.html-DLoQQ6yH.js"),__vite__mapDeps([247,1])),meta:{y:"p",t:"标签: Behaviors",I:!1}}],["/tag/ffmpeg/",{loader:()=>c(()=>import("./index.html-DTH_zGji.js"),__vite__mapDeps([248,1])),meta:{y:"p",t:"标签: FFMPEG",I:!1}}],["/tag/%E6%B5%B7%E5%BA%B7%E8%A7%86%E9%A2%91/",{loader:()=>c(()=>import("./index.html-Bph9T5ap.js"),__vite__mapDeps([249,1])),meta:{y:"p",t:"标签: 海康视频",I:!1}}],["/tag/prism/",{loader:()=>c(()=>import("./index.html-BELxrn_A.js"),__vite__mapDeps([250,1])),meta:{y:"p",t:"标签: Prism",I:!1}}],["/tag/quartz.net/",{loader:()=>c(()=>import("./index.html-BypWCf_Z.js"),__vite__mapDeps([251,1])),meta:{y:"p",t:"标签: quartz.net",I:!1}}],["/tag/%E6%9D%83%E9%99%90/",{loader:()=>c(()=>import("./index.html-CyZU2zvO.js"),__vite__mapDeps([252,1])),meta:{y:"p",t:"标签: 权限",I:!1}}],["/tag/svg/",{loader:()=>c(()=>import("./index.html-C5vVs1r1.js"),__vite__mapDeps([253,1])),meta:{y:"p",t:"标签: SVG",I:!1}}],["/tag/%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/",{loader:()=>c(()=>import("./index.html-Dd7AvMwZ.js"),__vite__mapDeps([254,1])),meta:{y:"p",t:"标签: 异步编程",I:!1}}],["/tag/%E4%B8%BB%E9%A2%98%E6%8E%A7%E4%BB%B6/",{loader:()=>c(()=>import("./index.html-nJRb-Clw.js"),__vite__mapDeps([255,1])),meta:{y:"p",t:"标签: 主题控件",I:!1}}],["/tag/%E6%9D%83%E9%99%90%E8%AE%BE%E8%AE%A1/",{loader:()=>c(()=>import("./index.html-Cy15iYdl.js"),__vite__mapDeps([256,1])),meta:{y:"p",t:"标签: 权限设计",I:!1}}],["/tag/winform/",{loader:()=>c(()=>import("./index.html-4WM8PRyK.js"),__vite__mapDeps([257,1])),meta:{y:"p",t:"标签: Winform",I:!1}}],["/tag/docker/",{loader:()=>c(()=>import("./index.html-Cvj8oCQ9.js"),__vite__mapDeps([258,1])),meta:{y:"p",t:"标签: Docker",I:!1}}],["/tag/java/",{loader:()=>c(()=>import("./index.html-DDCfu5D5.js"),__vite__mapDeps([259,1])),meta:{y:"p",t:"标签: JAVA",I:!1}}],["/tag/mariadb/",{loader:()=>c(()=>import("./index.html-BMMARt3F.js"),__vite__mapDeps([260,1])),meta:{y:"p",t:"标签: Mariadb",I:!1}}],["/tag/mysql/",{loader:()=>c(()=>import("./index.html-DJpXKBU0.js"),__vite__mapDeps([261,1])),meta:{y:"p",t:"标签: MYSQL",I:!1}}],["/tag/%E5%8F%82%E6%95%B0%E5%8C%96%E6%9F%A5%E8%AF%A2/",{loader:()=>c(()=>import("./index.html-1dcuOjjj.js"),__vite__mapDeps([262,1])),meta:{y:"p",t:"标签: 参数化查询",I:!1}}],["/tag/excel/",{loader:()=>c(()=>import("./index.html-BcGUdvWW.js"),__vite__mapDeps([263,1])),meta:{y:"p",t:"标签: EXCEL",I:!1}}],["/tag/github/",{loader:()=>c(()=>import("./index.html-DUhxTbNx.js"),__vite__mapDeps([264,1])),meta:{y:"p",t:"标签: Github",I:!1}}],["/tag/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90/",{loader:()=>c(()=>import("./index.html-DXGlHnN3.js"),__vite__mapDeps([265,1])),meta:{y:"p",t:"标签: 语音合成",I:!1}}],["/tag/%E5%85%AC%E7%BD%91/",{loader:()=>c(()=>import("./index.html-tKCYHLES.js"),__vite__mapDeps([266,1])),meta:{y:"p",t:"标签: 公网",I:!1}}],["/tag/%E7%BD%91%E7%BB%9C/",{loader:()=>c(()=>import("./index.html-CM76poNU.js"),__vite__mapDeps([267,1])),meta:{y:"p",t:"标签: 网络",I:!1}}],["/tag/%E9%83%A8%E7%BD%B2/",{loader:()=>c(()=>import("./index.html-DZHxsy4i.js"),__vite__mapDeps([268,1])),meta:{y:"p",t:"标签: 部署",I:!1}}],["/tag/%E5%9F%9F%E5%90%8D/",{loader:()=>c(()=>import("./index.html-BVf7leEX.js"),__vite__mapDeps([269,1])),meta:{y:"p",t:"标签: 域名",I:!1}}],["/tag/ssl/",{loader:()=>c(()=>import("./index.html-D0gqWvla.js"),__vite__mapDeps([270,1])),meta:{y:"p",t:"标签: SSL",I:!1}}],["/tag/%E5%85%89%E7%8C%AB/",{loader:()=>c(()=>import("./index.html-BJIzNph7.js"),__vite__mapDeps([271,1])),meta:{y:"p",t:"标签: 光猫",I:!1}}],["/tag/plex/",{loader:()=>c(()=>import("./index.html-CDbdgT_g.js"),__vite__mapDeps([272,1])),meta:{y:"p",t:"标签: Plex",I:!1}}],["/tag/%E8%B7%AF%E7%94%B1%E5%99%A8/",{loader:()=>c(()=>import("./index.html-B3xMviU5.js"),__vite__mapDeps([273,1])),meta:{y:"p",t:"标签: 路由器",I:!1}}],["/tag/tv/",{loader:()=>c(()=>import("./index.html-C2MHxaT9.js"),__vite__mapDeps([274,1])),meta:{y:"p",t:"标签: TV",I:!1}}],["/tag/ts/",{loader:()=>c(()=>import("./index.html-CF3Oapwj.js"),__vite__mapDeps([275,1])),meta:{y:"p",t:"标签: TS",I:!1}}],["/tag/%E7%94%BB%E8%B4%A8/",{loader:()=>c(()=>import("./index.html-C2v4fSOk.js"),__vite__mapDeps([276,1])),meta:{y:"p",t:"标签: 画质",I:!1}}],["/tag/vmware/",{loader:()=>c(()=>import("./index.html-DiLmIE2-.js"),__vite__mapDeps([277,1])),meta:{y:"p",t:"标签: VMWARE",I:!1}}],["/tag/u8_/",{loader:()=>c(()=>import("./index.html-BfaIKLr5.js"),__vite__mapDeps([278,1])),meta:{y:"p",t:"标签: U8+",I:!1}}],["/tag/ant-design-vue/",{loader:()=>c(()=>import("./index.html-Pr0D0tn_.js"),__vite__mapDeps([279,1])),meta:{y:"p",t:"标签: ant-design-vue",I:!1}}],["/tag/element-plus/",{loader:()=>c(()=>import("./index.html-Bn4u19ZG.js"),__vite__mapDeps([280,1])),meta:{y:"p",t:"标签: element-plus",I:!1}}],["/tag/vue/",{loader:()=>c(()=>import("./index.html-CR62tIQZ.js"),__vite__mapDeps([281,1])),meta:{y:"p",t:"标签: Vue",I:!1}}],["/tag/%E4%B8%BB%E9%A2%98%E8%89%B2/",{loader:()=>c(()=>import("./index.html-BKjHKJQF.js"),__vite__mapDeps([282,1])),meta:{y:"p",t:"标签: 主题色",I:!1}}],["/tag/mssql/",{loader:()=>c(()=>import("./index.html-DFzBsIz0.js"),__vite__mapDeps([283,1])),meta:{y:"p",t:"标签: MSSQL",I:!1}}],["/article/",{loader:()=>c(()=>import("./index.html-DXD7aQtg.js"),__vite__mapDeps([284,1])),meta:{y:"p",t:"文章",I:!1}}],["/star/",{loader:()=>c(()=>import("./index.html-BIGkqbLt.js"),__vite__mapDeps([285,1])),meta:{y:"p",t:"星标",I:!1}}],["/timeline/",{loader:()=>c(()=>import("./index.html-BivC7oZM.js"),__vite__mapDeps([286,1])),meta:{y:"p",t:"时间轴",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof document<"u";function hc(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xt=Object.assign;function sd(t,e){const n={};for(const l in e){const s=e[l];n[l]=ue(s)?s.map(t):t(s)}return n}const rl=()=>{},ue=Array.isArray,pf=/#/g,mc=/&/g,vc=/\//g,bc=/=/g,kc=/\?/g,uf=/\+/g,_c=/%5B/g,wc=/%5D/g,hf=/%5E/g,Ec=/%60/g,mf=/%7B/g,Cc=/%7C/g,vf=/%7D/g,Ic=/%20/g;function ia(t){return encodeURI(""+t).replace(Cc,"|").replace(_c,"[").replace(wc,"]")}function Sc(t){return ia(t).replace(mf,"{").replace(vf,"}").replace(hf,"^")}function Td(t){return ia(t).replace(uf,"%2B").replace(Ic,"+").replace(pf,"%23").replace(mc,"%26").replace(Ec,"`").replace(mf,"{").replace(vf,"}").replace(hf,"^")}function Tc(t){return Td(t).replace(bc,"%3D")}function Lc(t){return ia(t).replace(pf,"%23").replace(kc,"%3F")}function Pc(t){return t==null?"":Lc(t).replace(vc,"%2F")}function hl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ac=/\/$/,Dc=t=>t.replace(Ac,"");function dd(t,e,n="/"){let l,s={},d="",a="";const r=e.indexOf("#");let g=e.indexOf("?");return r<g&&r>=0&&(g=-1),g>-1&&(l=e.slice(0,g),d=e.slice(g+1,r>-1?r:e.length),s=t(d)),r>-1&&(l=l||e.slice(0,r),a=e.slice(r,e.length)),l=Vc(l??e,n),{fullPath:l+(d&&"?")+d+a,path:l,query:s,hash:hl(a)}}function Oc(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rc(t,e,n){const l=e.matched.length-1,s=n.matched.length-1;return l>-1&&l===s&&$n(e.matched[l],n.matched[s])&&bf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $n(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mc(t[n],e[n]))return!1;return!0}function Mc(t,e){return ue(t)?ki(t,e):ue(e)?ki(e,t):t===e}function ki(t,e){return ue(e)?t.length===e.length&&t.every((n,l)=>n===e[l]):t.length===1&&t[0]===e}function Vc(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),l=t.split("/"),s=l[l.length-1];(s===".."||s===".")&&l.push("");let d=n.length-1,a,r;for(a=0;a<l.length;a++)if(r=l[a],r!==".")if(r==="..")d>1&&d--;else break;return n.slice(0,d).join("/")+"/"+l.slice(a).join("/")}var ml;(function(t){t.pop="pop",t.push="push"})(ml||(ml={}));var fl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fl||(fl={}));function Bc(t){if(!t)if(Cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dc(t)}const Nc=/^[^#]+#/;function Fc(t,e){return t.replace(Nc,"#")+e}function zc(t,e){const n=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-n.left-(e.left||0),top:l.top-n.top-(e.top||0)}}const Ms=()=>({left:window.scrollX,top:window.scrollY});function $c(t){let e;if("el"in t){const n=t.el,l=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zc(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _i(t,e){return(history.state?history.state.position-e:-1)+t}const Ld=new Map;function jc(t,e){Ld.set(t,e)}function qc(t){const e=Ld.get(t);return Ld.delete(t),e}let Hc=()=>location.protocol+"//"+location.host;function kf(t,e){const{pathname:n,search:l,hash:s}=e,d=t.indexOf("#");if(d>-1){let r=s.includes(t.slice(d))?t.slice(d).length:1,g=s.slice(r);return g[0]!=="/"&&(g="/"+g),bi(g,"")}return bi(n,t)+l+s}function Uc(t,e,n,l){let s=[],d=[],a=null;const r=({state:x})=>{const p=kf(t,location),m=n.value,w=e.value;let _=0;if(x){if(n.value=p,e.value=x,a&&a===m){a=null;return}_=w?x.position-w.position:0}else l(p);s.forEach(b=>{b(n.value,m,{delta:_,type:ml.pop,direction:_?_>0?fl.forward:fl.back:fl.unknown})})};function g(){a=n.value}function f(x){s.push(x);const p=()=>{const m=s.indexOf(x);m>-1&&s.splice(m,1)};return d.push(p),p}function o(){const{history:x}=window;x.state&&x.replaceState(xt({},x.state,{scroll:Ms()}),"")}function y(){for(const x of d)x();d=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:g,listen:f,destroy:y}}function wi(t,e,n,l=!1,s=!1){return{back:t,current:e,forward:n,replaced:l,position:window.history.length,scroll:s?Ms():null}}function Wc(t){const{history:e,location:n}=window,l={value:kf(t,n)},s={value:e.state};s.value||d(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function d(g,f,o){const y=t.indexOf("#"),x=y>-1?(n.host&&document.querySelector("base")?t:t.slice(y))+g:Hc()+t+g;try{e[o?"replaceState":"pushState"](f,"",x),s.value=f}catch(p){console.error(p),n[o?"replace":"assign"](x)}}function a(g,f){const o=xt({},e.state,wi(s.value.back,g,s.value.forward,!0),f,{position:s.value.position});d(g,o,!0),l.value=g}function r(g,f){const o=xt({},s.value,e.state,{forward:g,scroll:Ms()});d(o.current,o,!0);const y=xt({},wi(l.value,g,null),{position:o.position+1},f);d(g,y,!1),l.value=g}return{location:l,state:s,push:r,replace:a}}function Gc(t){t=Bc(t);const e=Wc(t),n=Uc(t,e.state,e.location,e.replace);function l(d,a=!0){a||n.pauseListeners(),history.go(d)}const s=xt({location:"",base:t,go:l,createHref:Fc.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Kc(t){return typeof t=="string"||t&&typeof t=="object"}function _f(t){return typeof t=="string"||typeof t=="symbol"}const Le={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wf=Symbol("");var Ei;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ei||(Ei={}));function jn(t,e){return xt(new Error,{type:t,[wf]:!0},e)}function Se(t,e){return t instanceof Error&&wf in t&&(e==null||!!(t.type&e))}const Ci="[^/]+?",Jc={sensitive:!1,strict:!1,start:!0,end:!0},Qc=/[.+*?^${}()[\]/\\]/g;function Yc(t,e){const n=xt({},Jc,e),l=[];let s=n.start?"^":"";const d=[];for(const f of t){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let y=0;y<f.length;y++){const x=f[y];let p=40+(n.sensitive?.25:0);if(x.type===0)y||(s+="/"),s+=x.value.replace(Qc,"\\$&"),p+=40;else if(x.type===1){const{value:m,repeatable:w,optional:_,regexp:b}=x;d.push({name:m,repeatable:w,optional:_});const C=b||Ci;if(C!==Ci){p+=10;try{new RegExp(`(${C})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+S.message)}}let v=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;y||(v=_&&f.length<2?`(?:/${v})`:"/"+v),_&&(v+="?"),s+=v,p+=20,_&&(p+=-8),w&&(p+=-20),C===".*"&&(p+=-50)}o.push(p)}l.push(o)}if(n.strict&&n.end){const f=l.length-1;l[f][l[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function r(f){const o=f.match(a),y={};if(!o)return null;for(let x=1;x<o.length;x++){const p=o[x]||"",m=d[x-1];y[m.name]=p&&m.repeatable?p.split("/"):p}return y}function g(f){let o="",y=!1;for(const x of t){(!y||!o.endsWith("/"))&&(o+="/"),y=!1;for(const p of x)if(p.type===0)o+=p.value;else if(p.type===1){const{value:m,repeatable:w,optional:_}=p,b=m in f?f[m]:"";if(ue(b)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=ue(b)?b.join("/"):b;if(!C)if(_)x.length<2&&(o.endsWith("/")?o=o.slice(0,-1):y=!0);else throw new Error(`Missing required param "${m}"`);o+=C}}return o||"/"}return{re:a,score:l,keys:d,parse:r,stringify:g}}function Xc(t,e){let n=0;for(;n<t.length&&n<e.length;){const l=e[n]-t[n];if(l)return l;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Zc(t,e){let n=0;const l=t.score,s=e.score;for(;n<l.length&&n<s.length;){const d=Xc(l[n],s[n]);if(d)return d;n++}if(Math.abs(s.length-l.length)===1){if(Ii(l))return 1;if(Ii(s))return-1}return s.length-l.length}function Ii(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tp={type:0,value:""},ep=/[a-zA-Z0-9_]/;function np(t){if(!t)return[[]];if(t==="/")return[[tp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${f}": ${p}`)}let n=0,l=n;const s=[];let d;function a(){d&&s.push(d),d=[]}let r=0,g,f="",o="";function y(){f&&(n===0?d.push({type:0,value:f}):n===1||n===2||n===3?(d.length>1&&(g==="*"||g==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:f,regexp:o,repeatable:g==="*"||g==="+",optional:g==="*"||g==="?"})):e("Invalid state to consume buffer"),f="")}function x(){f+=g}for(;r<t.length;){if(g=t[r++],g==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:g==="/"?(f&&y(),a()):g===":"?(y(),n=1):x();break;case 4:x(),n=l;break;case 1:g==="("?n=2:ep.test(g)?x():(y(),n=0,g!=="*"&&g!=="?"&&g!=="+"&&r--);break;case 2:g===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+g:n=3:o+=g;break;case 3:y(),n=0,g!=="*"&&g!=="?"&&g!=="+"&&r--,o="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),y(),a(),s}function lp(t,e,n){const l=Yc(np(t.path),n),s=xt(l,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sp(t,e){const n=[],l=new Map;e=Li({strict:!1,end:!0,sensitive:!1},e);function s(o){return l.get(o)}function d(o,y,x){const p=!x,m=dp(o);m.aliasOf=x&&x.record;const w=Li(e,o),_=[m];if("alias"in o){const v=typeof o.alias=="string"?[o.alias]:o.alias;for(const S of v)_.push(xt({},m,{components:x?x.record.components:m.components,path:S,aliasOf:x?x.record:m}))}let b,C;for(const v of _){const{path:S}=v;if(y&&S[0]!=="/"){const V=y.record.path,I=V[V.length-1]==="/"?"":"/";v.path=y.record.path+(S&&I+S)}if(b=lp(v,y,w),x?x.alias.push(b):(C=C||b,C!==b&&C.alias.push(b),p&&o.name&&!Ti(b)&&a(o.name)),m.children){const V=m.children;for(let I=0;I<V.length;I++)d(V[I],b,x&&x.children[I])}x=x||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&g(b)}return C?()=>{a(C)}:rl}function a(o){if(_f(o)){const y=l.get(o);y&&(l.delete(o),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(o);y>-1&&(n.splice(y,1),o.record.name&&l.delete(o.record.name),o.children.forEach(a),o.alias.forEach(a))}}function r(){return n}function g(o){let y=0;for(;y<n.length&&Zc(o,n[y])>=0&&(o.record.path!==n[y].record.path||!Ef(o,n[y]));)y++;n.splice(y,0,o),o.record.name&&!Ti(o)&&l.set(o.record.name,o)}function f(o,y){let x,p={},m,w;if("name"in o&&o.name){if(x=l.get(o.name),!x)throw jn(1,{location:o});w=x.record.name,p=xt(Si(y.params,x.keys.filter(C=>!C.optional).concat(x.parent?x.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),o.params&&Si(o.params,x.keys.map(C=>C.name))),m=x.stringify(p)}else if(o.path!=null)m=o.path,x=n.find(C=>C.re.test(m)),x&&(p=x.parse(m),w=x.record.name);else{if(x=y.name?l.get(y.name):n.find(C=>C.re.test(y.path)),!x)throw jn(1,{location:o,currentLocation:y});w=x.record.name,p=xt({},y.params,o.params),m=x.stringify(p)}const _=[];let b=x;for(;b;)_.unshift(b.record),b=b.parent;return{name:w,path:m,params:p,matched:_,meta:ip(_)}}return t.forEach(o=>d(o)),{addRoute:d,resolve:f,removeRoute:a,getRoutes:r,getRecordMatcher:s}}function Si(t,e){const n={};for(const l of e)l in t&&(n[l]=t[l]);return n}function dp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ap(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ap(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const l in t.components)e[l]=typeof n=="object"?n[l]:n;return e}function Ti(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ip(t){return t.reduce((e,n)=>xt(e,n.meta),{})}function Li(t,e){const n={};for(const l in t)n[l]=l in e?e[l]:t[l];return n}function Ef(t,e){return e.children.some(n=>n===t||Ef(t,n))}function rp(t){const e={};if(t===""||t==="?")return e;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<l.length;++s){const d=l[s].replace(uf," "),a=d.indexOf("="),r=hl(a<0?d:d.slice(0,a)),g=a<0?null:hl(d.slice(a+1));if(r in e){let f=e[r];ue(f)||(f=e[r]=[f]),f.push(g)}else e[r]=g}return e}function Pi(t){let e="";for(let n in t){const l=t[n];if(n=Tc(n),l==null){l!==void 0&&(e+=(e.length?"&":"")+n);continue}(ue(l)?l.map(d=>d&&Td(d)):[l&&Td(l)]).forEach(d=>{d!==void 0&&(e+=(e.length?"&":"")+n,d!=null&&(e+="="+d))})}return e}function fp(t){const e={};for(const n in t){const l=t[n];l!==void 0&&(e[n]=ue(l)?l.map(s=>s==null?null:""+s):l==null?l:""+l)}return e}const gp=Symbol(""),Ai=Symbol(""),Vs=Symbol(""),ra=Symbol(""),Pd=Symbol("");function Zn(){let t=[];function e(l){return t.push(l),()=>{const s=t.indexOf(l);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Je(t,e,n,l,s,d=a=>a()){const a=l&&(l.enterCallbacks[s]=l.enterCallbacks[s]||[]);return()=>new Promise((r,g)=>{const f=x=>{x===!1?g(jn(4,{from:n,to:e})):x instanceof Error?g(x):Kc(x)?g(jn(2,{from:e,to:x})):(a&&l.enterCallbacks[s]===a&&typeof x=="function"&&a.push(x),r())},o=d(()=>t.call(l&&l.instances[s],e,n,f));let y=Promise.resolve(o);t.length<3&&(y=y.then(f)),y.catch(x=>g(x))})}function ad(t,e,n,l,s=d=>d()){const d=[];for(const a of t)for(const r in a.components){let g=a.components[r];if(!(e!=="beforeRouteEnter"&&!a.instances[r]))if(op(g)){const o=(g.__vccOpts||g)[e];o&&d.push(Je(o,n,l,a,r,s))}else{let f=g();d.push(()=>f.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));const y=hc(o)?o.default:o;a.components[r]=y;const p=(y.__vccOpts||y)[e];return p&&Je(p,n,l,a,r,s)()}))}}return d}function op(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Di(t){const e=bt(Vs),n=bt(ra),l=k(()=>e.resolve(xn(t.to))),s=k(()=>{const{matched:g}=l.value,{length:f}=g,o=g[f-1],y=n.matched;if(!o||!y.length)return-1;const x=y.findIndex($n.bind(null,o));if(x>-1)return x;const p=Oi(g[f-2]);return f>1&&Oi(o)===p&&y[y.length-1].path!==p?y.findIndex($n.bind(null,g[f-2])):x}),d=k(()=>s.value>-1&&pp(n.params,l.value.params)),a=k(()=>s.value>-1&&s.value===n.matched.length-1&&bf(n.params,l.value.params));function r(g={}){return cp(g)?e[xn(t.replace)?"replace":"push"](xn(t.to)).catch(rl):Promise.resolve()}return{route:l,href:k(()=>l.value.href),isActive:d,isExactActive:a,navigate:r}}const yp=z({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Di,setup(t,{slots:e}){const n=Cl(Di(t)),{options:l}=bt(Vs),s=k(()=>({[Ri(t.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[Ri(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=e.default&&e.default(n);return t.custom?d:i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},d)}}}),xp=yp;function cp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pp(t,e){for(const n in e){const l=e[n],s=t[n];if(typeof l=="string"){if(l!==s)return!1}else if(!ue(s)||s.length!==l.length||l.some((d,a)=>d!==s[a]))return!1}return!0}function Oi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ri=(t,e,n)=>t??e??n,up=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const l=bt(Pd),s=k(()=>t.route||l.value),d=bt(Ai,0),a=k(()=>{let f=xn(d);const{matched:o}=s.value;let y;for(;(y=o[f])&&!y.components;)f++;return f}),r=k(()=>s.value.matched[a.value]);ge(Ai,k(()=>a.value+1)),ge(gp,r),ge(Pd,s);const g=X();return gt(()=>[g.value,r.value,t.name],([f,o,y],[x,p,m])=>{o&&(o.instances[y]=f,p&&p!==o&&f&&f===x&&(o.leaveGuards.size||(o.leaveGuards=p.leaveGuards),o.updateGuards.size||(o.updateGuards=p.updateGuards))),f&&o&&(!p||!$n(o,p)||!x)&&(o.enterCallbacks[y]||[]).forEach(w=>w(f))},{flush:"post"}),()=>{const f=s.value,o=t.name,y=r.value,x=y&&y.components[o];if(!x)return Mi(n.default,{Component:x,route:f});const p=y.props[o],m=p?p===!0?f.params:typeof p=="function"?p(f):p:null,_=i(x,xt({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(y.instances[o]=null)},ref:g}));return Mi(n.default,{Component:_,route:f})||_}}});function Mi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hp=up;function mp(t){const e=sp(t.routes,t),n=t.parseQuery||rp,l=t.stringifyQuery||Pi,s=t.history,d=Zn(),a=Zn(),r=Zn(),g=Ct(Le);let f=Le;Cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=sd.bind(null,T=>""+T),y=sd.bind(null,Pc),x=sd.bind(null,hl);function p(T,q){let $,K;return _f(T)?($=e.getRecordMatcher(T),K=q):K=T,e.addRoute(K,$)}function m(T){const q=e.getRecordMatcher(T);q&&e.removeRoute(q)}function w(){return e.getRoutes().map(T=>T.record)}function _(T){return!!e.getRecordMatcher(T)}function b(T,q){if(q=xt({},q||g.value),typeof T=="string"){const h=dd(n,T,q.path),E=e.resolve({path:h.path},q),P=s.createHref(h.fullPath);return xt(h,E,{params:x(E.params),hash:hl(h.hash),redirectedFrom:void 0,href:P})}let $;if(T.path!=null)$=xt({},T,{path:dd(n,T.path,q.path).path});else{const h=xt({},T.params);for(const E in h)h[E]==null&&delete h[E];$=xt({},T,{params:y(h)}),q.params=y(q.params)}const K=e.resolve($,q),it=T.hash||"";K.params=o(x(K.params));const vt=Oc(l,xt({},T,{hash:Sc(it),path:K.path})),u=s.createHref(vt);return xt({fullPath:vt,hash:it,query:l===Pi?fp(T.query):T.query||{}},K,{redirectedFrom:void 0,href:u})}function C(T){return typeof T=="string"?dd(n,T,g.value.path):xt({},T)}function v(T,q){if(f!==T)return jn(8,{from:q,to:T})}function S(T){return B(T)}function V(T){return S(xt(C(T),{replace:!0}))}function I(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:$}=q;let K=typeof $=="function"?$(T):$;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=C(K):{path:K},K.params={}),xt({query:T.query,hash:T.hash,params:K.path!=null?{}:T.params},K)}}function B(T,q){const $=f=b(T),K=g.value,it=T.state,vt=T.force,u=T.replace===!0,h=I($);if(h)return B(xt(C(h),{state:typeof h=="object"?xt({},it,h.state):it,force:vt,replace:u}),q||$);const E=$;E.redirectedFrom=q;let P;return!vt&&Rc(l,K,$)&&(P=jn(16,{to:E,from:K}),le(K,K,!0,!1)),(P?Promise.resolve(P):D(E,K)).catch(L=>Se(L)?Se(L,2)?L:he(L):G(L,E,K)).then(L=>{if(L){if(Se(L,2))return B(xt({replace:u},C(L.to),{state:typeof L.to=="object"?xt({},it,L.to.state):it,force:vt}),q||E)}else L=R(E,K,!0,u,it);return U(E,K,L),L})}function O(T,q){const $=v(T,q);return $?Promise.reject($):Promise.resolve()}function J(T){const q=Ie.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(T):T()}function D(T,q){let $;const[K,it,vt]=vp(T,q);$=ad(K.reverse(),"beforeRouteLeave",T,q);for(const h of K)h.leaveGuards.forEach(E=>{$.push(Je(E,T,q))});const u=O.bind(null,T,q);return $.push(u),Rt($).then(()=>{$=[];for(const h of d.list())$.push(Je(h,T,q));return $.push(u),Rt($)}).then(()=>{$=ad(it,"beforeRouteUpdate",T,q);for(const h of it)h.updateGuards.forEach(E=>{$.push(Je(E,T,q))});return $.push(u),Rt($)}).then(()=>{$=[];for(const h of vt)if(h.beforeEnter)if(ue(h.beforeEnter))for(const E of h.beforeEnter)$.push(Je(E,T,q));else $.push(Je(h.beforeEnter,T,q));return $.push(u),Rt($)}).then(()=>(T.matched.forEach(h=>h.enterCallbacks={}),$=ad(vt,"beforeRouteEnter",T,q,J),$.push(u),Rt($))).then(()=>{$=[];for(const h of a.list())$.push(Je(h,T,q));return $.push(u),Rt($)}).catch(h=>Se(h,8)?h:Promise.reject(h))}function U(T,q,$){r.list().forEach(K=>J(()=>K(T,q,$)))}function R(T,q,$,K,it){const vt=v(T,q);if(vt)return vt;const u=q===Le,h=Cn?history.state:{};$&&(K||u?s.replace(T.fullPath,xt({scroll:u&&h&&h.scroll},it)):s.push(T.fullPath,it)),g.value=T,le(T,q,$,u),he()}let tt;function Tt(){tt||(tt=s.listen((T,q,$)=>{if(!me.listening)return;const K=b(T),it=I(K);if(it){B(xt(it,{replace:!0}),K).catch(rl);return}f=K;const vt=g.value;Cn&&jc(_i(vt.fullPath,$.delta),Ms()),D(K,vt).catch(u=>Se(u,12)?u:Se(u,2)?(B(u.to,K).then(h=>{Se(h,20)&&!$.delta&&$.type===ml.pop&&s.go(-1,!1)}).catch(rl),Promise.reject()):($.delta&&s.go(-$.delta,!1),G(u,K,vt))).then(u=>{u=u||R(K,vt,!1),u&&($.delta&&!Se(u,8)?s.go(-$.delta,!1):$.type===ml.pop&&Se(u,20)&&s.go(-1,!1)),U(K,vt,u)}).catch(rl)}))}let It=Zn(),W=Zn(),et;function G(T,q,$){he(T);const K=W.list();return K.length?K.forEach(it=>it(T,q,$)):console.error(T),Promise.reject(T)}function Ot(){return et&&g.value!==Le?Promise.resolve():new Promise((T,q)=>{It.add([T,q])})}function he(T){return et||(et=!T,Tt(),It.list().forEach(([q,$])=>T?$(T):q()),It.reset()),T}function le(T,q,$,K){const{scrollBehavior:it}=t;if(!Cn||!it)return Promise.resolve();const vt=!$&&qc(_i(T.fullPath,0))||(K||!$)&&history.state&&history.state.scroll||null;return mn().then(()=>it(T,q,vt)).then(u=>u&&$c(u)).catch(u=>G(u,T,q))}const Nt=T=>s.go(T);let Xt;const Ie=new Set,me={currentRoute:g,listening:!0,addRoute:p,removeRoute:m,hasRoute:_,getRoutes:w,resolve:b,options:t,push:S,replace:V,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:d.add,beforeResolve:a.add,afterEach:r.add,onError:W.add,isReady:Ot,install(T){const q=this;T.component("RouterLink",xp),T.component("RouterView",hp),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>xn(g)}),Cn&&!Xt&&g.value===Le&&(Xt=!0,S(s.location).catch(it=>{}));const $={};for(const it in Le)Object.defineProperty($,it,{get:()=>g.value[it],enumerable:!0});T.provide(Vs,q),T.provide(ra,mr($)),T.provide(Pd,g);const K=T.unmount;Ie.add(T),T.unmount=function(){Ie.delete(T),Ie.size<1&&(f=Le,tt&&tt(),tt=null,g.value=Le,Xt=!1,et=!1),K()}}};function Rt(T){return T.reduce((q,$)=>q.then(()=>J($)),Promise.resolve())}return me}function vp(t,e){const n=[],l=[],s=[],d=Math.max(e.matched.length,t.matched.length);for(let a=0;a<d;a++){const r=e.matched[a];r&&(t.matched.find(f=>$n(f,r))?l.push(r):n.push(r));const g=t.matched[a];g&&(e.matched.find(f=>$n(f,g))||s.push(g))}return[n,l,s]}function Be(){return bt(Vs)}function Ee(){return bt(ra)}var fa=Symbol(""),Ce=()=>{const t=bt(fa);if(!t)throw new Error("useClientData() is called without provider.");return t},bp=()=>Ce().pageComponent,ut=()=>Ce().pageData,mt=()=>Ce().pageFrontmatter,kp=()=>Ce().pageHead,Cf=()=>Ce().pageLang,_p=()=>Ce().pageLayout,Ne=()=>Ce().routeLocale,wp=()=>Ce().routes,If=()=>Ce().siteData,Pl=()=>Ce().siteLocaleData,Ep=Symbol(""),Sf=Ct(pc),vl=Ct(uc),Tf=t=>{const e=gc(t);if(vl.value[e])return e;const n=encodeURI(e);return vl.value[n]?n:Sf.value[e]||e},Kn=t=>{const e=Tf(t),n=vl.value[e]??{...vl.value["/404.html"],notFound:!0};return{path:e,notFound:!1,...n}},Bs=z({name:"ClientOnly",setup(t,e){const n=X(!1);return pt(()=>{n.value=!0}),()=>{var l,s;return n.value?(s=(l=e.slots).default)==null?void 0:s.call(l):null}}}),Lf=z({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(t){const e=bp(),n=k(()=>{if(!t.path)return e.value;const l=Kn(t.path);return Dy(()=>l.loader().then(({comp:s})=>s))});return()=>i(n.value)}}),Et=t=>Ve(t)?t:`/${cf(t)}`,Cp=t=>{if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget){const e=t.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return t.preventDefault(),!0}},At=({active:t=!1,activeClass:e="route-link-active",to:n,...l},{slots:s})=>{var r;const d=Be(),a=Et(Tf(n));return i("a",{...l,class:["route-link",{[e]:t}],href:a,onClick:(g={})=>{Cp(g)?d.push(n).catch():Promise.resolve()}},(r=s.default)==null?void 0:r.call(s))};At.displayName="RouteLink";At.props={active:Boolean,activeClass:String,to:String};var Ip="Layout",Sp="en-US",dn=Cl({resolveLayouts:t=>t.reduce((e,n)=>({...e,...n.layouts}),{}),resolvePageHead:(t,e,n)=>{const l=Lt(e.description)?e.description:n.description,s=[...Array.isArray(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:l}]];return ic(s)},resolvePageHeadTitle:(t,e)=>[t.title,e.title].filter(n=>!!n).join(" | "),resolvePageLang:(t,e)=>t.lang||e.lang||Sp,resolvePageLayout:(t,e)=>{const n=Lt(t.frontmatter.layout)?t.frontmatter.layout:Ip;if(!e[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return e[n]},resolveRouteLocale:(t,e)=>oc(t,e),resolveSiteLocaleData:(t,e)=>{var n;return{...t,...t.locales[e],head:[...((n=t.locales[e])==null?void 0:n.head)??[],...t.head??[]]}}});const Tp={};var Yt=(t={})=>t;const vn=t=>{const e=Ne();return k(()=>t[e.value]??{})};var Gt=Uint8Array,In=Uint16Array,Lp=Int32Array,Pf=new Gt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Af=new Gt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Pp=new Gt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Df=function(t,e){for(var n=new In(31),l=0;l<31;++l)n[l]=e+=1<<t[l-1];for(var s=new Lp(n[30]),l=1;l<30;++l)for(var d=n[l];d<n[l+1];++d)s[d]=d-n[l]<<5|l;return{b:n,r:s}},Of=Df(Pf,2),Rf=Of.b,Ap=Of.r;Rf[28]=258,Ap[258]=28;var Dp=Df(Af,0),Op=Dp.b,Ad=new In(32768);for(var wt=0;wt<32768;++wt){var je=(wt&43690)>>1|(wt&21845)<<1;je=(je&52428)>>2|(je&13107)<<2,je=(je&61680)>>4|(je&3855)<<4,Ad[wt]=((je&65280)>>8|(je&255)<<8)>>1}var gl=function(t,e,n){for(var l=t.length,s=0,d=new In(e);s<l;++s)t[s]&&++d[t[s]-1];var a=new In(e);for(s=1;s<e;++s)a[s]=a[s-1]+d[s-1]<<1;var r;if(n){r=new In(1<<e);var g=15-e;for(s=0;s<l;++s)if(t[s])for(var f=s<<4|t[s],o=e-t[s],y=a[t[s]-1]++<<o,x=y|(1<<o)-1;y<=x;++y)r[Ad[y]>>g]=f}else for(r=new In(l),s=0;s<l;++s)t[s]&&(r[s]=Ad[a[t[s]-1]++]>>15-t[s]);return r},Al=new Gt(288);for(var wt=0;wt<144;++wt)Al[wt]=8;for(var wt=144;wt<256;++wt)Al[wt]=9;for(var wt=256;wt<280;++wt)Al[wt]=7;for(var wt=280;wt<288;++wt)Al[wt]=8;var Mf=new Gt(32);for(var wt=0;wt<32;++wt)Mf[wt]=5;var Rp=gl(Al,9,1),Mp=gl(Mf,5,1),id=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},xe=function(t,e,n){var l=e/8|0;return(t[l]|t[l+1]<<8)>>(e&7)&n},rd=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Vp=function(t){return(t+7)/8|0},ga=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new Gt(t.subarray(e,n))},Bp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ae=function(t,e,n){var l=new Error(e||Bp[t]);if(l.code=t,Error.captureStackTrace&&Error.captureStackTrace(l,ae),!n)throw l;return l},Np=function(t,e,n,l){var s=t.length,d=l?l.length:0;if(!s||e.f&&!e.l)return n||new Gt(0);var a=!n,r=a||e.i!=2,g=e.i;a&&(n=new Gt(s*3));var f=function(it){var vt=n.length;if(it>vt){var u=new Gt(Math.max(vt*2,it));u.set(n),n=u}},o=e.f||0,y=e.p||0,x=e.b||0,p=e.l,m=e.d,w=e.m,_=e.n,b=s*8;do{if(!p){o=xe(t,y,1);var C=xe(t,y+1,3);if(y+=3,C)if(C==1)p=Rp,m=Mp,w=9,_=5;else if(C==2){var I=xe(t,y,31)+257,B=xe(t,y+10,15)+4,O=I+xe(t,y+5,31)+1;y+=14;for(var J=new Gt(O),D=new Gt(19),U=0;U<B;++U)D[Pp[U]]=xe(t,y+U*3,7);y+=B*3;for(var R=id(D),tt=(1<<R)-1,Tt=gl(D,R,1),U=0;U<O;){var It=Tt[xe(t,y,tt)];y+=It&15;var v=It>>4;if(v<16)J[U++]=v;else{var W=0,et=0;for(v==16?(et=3+xe(t,y,3),y+=2,W=J[U-1]):v==17?(et=3+xe(t,y,7),y+=3):v==18&&(et=11+xe(t,y,127),y+=7);et--;)J[U++]=W}}var G=J.subarray(0,I),Ot=J.subarray(I);w=id(G),_=id(Ot),p=gl(G,w,1),m=gl(Ot,_,1)}else ae(1);else{var v=Vp(y)+4,S=t[v-4]|t[v-3]<<8,V=v+S;if(V>s){g&&ae(0);break}r&&f(x+S),n.set(t.subarray(v,V),x),e.b=x+=S,e.p=y=V*8,e.f=o;continue}if(y>b){g&&ae(0);break}}r&&f(x+131072);for(var he=(1<<w)-1,le=(1<<_)-1,Nt=y;;Nt=y){var W=p[rd(t,y)&he],Xt=W>>4;if(y+=W&15,y>b){g&&ae(0);break}if(W||ae(2),Xt<256)n[x++]=Xt;else if(Xt==256){Nt=y,p=null;break}else{var Ie=Xt-254;if(Xt>264){var U=Xt-257,me=Pf[U];Ie=xe(t,y,(1<<me)-1)+Rf[U],y+=me}var Rt=m[rd(t,y)&le],T=Rt>>4;Rt||ae(3),y+=Rt&15;var Ot=Op[T];if(T>3){var me=Af[T];Ot+=rd(t,y)&(1<<me)-1,y+=me}if(y>b){g&&ae(0);break}r&&f(x+131072);var q=x+Ie;if(x<Ot){var $=d-Ot,K=Math.min(Ot,q);for($+x<0&&ae(3);x<K;++x)n[x]=l[$+x]}for(;x<q;++x)n[x]=n[x-Ot]}}e.l=p,e.p=Nt,e.b=x,e.f=o,p&&(o=1,e.m=w,e.d=m,e.n=_)}while(!o);return x!=n.length&&a?ga(n,0,x):n.subarray(0,x)},Fp=new Gt(0),zp=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&ae(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&ae(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function $p(t,e){return Np(t.subarray(zp(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Vi=typeof TextEncoder<"u"&&new TextEncoder,Dd=typeof TextDecoder<"u"&&new TextDecoder,jp=0;try{Dd.decode(Fp,{stream:!0}),jp=1}catch{}var qp=function(t){for(var e="",n=0;;){var l=t[n++],s=(l>127)+(l>223)+(l>239);if(n+s>t.length)return{s:e,r:ga(t,n-1)};s?s==3?(l=((l&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|l>>10,56320|l&1023)):s&1?e+=String.fromCharCode((l&31)<<6|t[n++]&63):e+=String.fromCharCode((l&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(l)}};function Hp(t,e){if(e){for(var n=new Gt(t.length),l=0;l<t.length;++l)n[l]=t.charCodeAt(l);return n}if(Vi)return Vi.encode(t);for(var s=t.length,d=new Gt(t.length+(t.length>>1)),a=0,r=function(o){d[a++]=o},l=0;l<s;++l){if(a+5>d.length){var g=new Gt(a+8+(s-l<<1));g.set(d),d=g}var f=t.charCodeAt(l);f<128||e?r(f):f<2048?(r(192|f>>6),r(128|f&63)):f>55295&&f<57344?(f=65536+(f&1047552)|t.charCodeAt(++l)&1023,r(240|f>>18),r(128|f>>12&63),r(128|f>>6&63),r(128|f&63)):(r(224|f>>12),r(128|f>>6&63),r(128|f&63))}return ga(d,0,a)}function Up(t,e){if(e){for(var n="",l=0;l<t.length;l+=16384)n+=String.fromCharCode.apply(null,t.subarray(l,l+16384));return n}else{if(Dd)return Dd.decode(t);var s=qp(t),d=s.s,n=s.r;return n.length&&ae(8),d}}const ms=t=>{const e=atob(t);return Up($p(Hp(e,!0)))},De=(t,e)=>{var l;const n=(l=(e==null?void 0:e._instance)||Gn())==null?void 0:l.appContext.components;return n?t in n||ne(t)in n||El(ne(t))in n:!1},Vf=t=>new Promise(e=>setTimeout(e,t)),Bf=t=>typeof t<"u",fd=t=>typeof t=="number",vs=Array.isArray,bl=(t,e)=>Lt(t)&&t.startsWith(e),Wp=(t,e)=>Lt(t)&&t.endsWith(e),tn=Object.entries,Gp=Object.fromEntries,oe=Object.keys,Od=(t,...e)=>{if(e.length===0)return t;const n=e.shift()||null;return n&&tn(n).forEach(([l,s])=>{l==="__proto__"||l==="constructor"||(Ae(t[l])&&Ae(s)?Od(t[l],s):vs(s)?t[l]=[...s]:Ae(s)?t[l]={...s}:t[l]=n[l])}),Od(t,...e)},oa=t=>{if(t){if(typeof t=="number")return new Date(t);const e=Date.parse(t.toString());if(!Number.isNaN(e))return new Date(e)}return null},Ns=t=>bl(t,"/");function Nf(t,e){let n,l,s;const d=X(!0),a=()=>{d.value=!0,s()};gt(t,a,{flush:"sync"});const r=typeof e=="function"?e:e.get,g=typeof e=="function"?void 0:e.set,f=Is((o,y)=>(l=o,s=y,{get(){return d.value&&(n=r(),d.value=!1),l(),n},set(x){g==null||g(x)}}));return Object.isExtensible(f)&&(f.trigger=a),f}function bn(t){return ar()?(No(t),!0):!1}function $t(t){return typeof t=="function"?t():xn(t)}const Dl=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Kp=t=>t!=null,Jp=Object.prototype.toString,Qp=t=>Jp.call(t)==="[object Object]",cn=()=>{},Bi=Yp();function Yp(){var t,e;return Dl&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ya(t,e){function n(...l){return new Promise((s,d)=>{Promise.resolve(t(()=>e.apply(this,l),{fn:e,thisArg:this,args:l})).then(s).catch(d)})}return n}const Ff=t=>t();function Xp(t,e={}){let n,l,s=cn;const d=r=>{clearTimeout(r),s(),s=cn};return r=>{const g=$t(t),f=$t(e.maxWait);return n&&d(n),g<=0||f!==void 0&&f<=0?(l&&(d(l),l=null),Promise.resolve(r())):new Promise((o,y)=>{s=e.rejectOnCancel?y:o,f&&!l&&(l=setTimeout(()=>{n&&d(n),l=null,o(r())},f)),n=setTimeout(()=>{l&&d(l),l=null,o(r())},g)})}}function Zp(...t){let e=0,n,l=!0,s=cn,d,a,r,g,f;!jt(t[0])&&typeof t[0]=="object"?{delay:a,trailing:r=!0,leading:g=!0,rejectOnCancel:f=!1}=t[0]:[a,r=!0,g=!0,f=!1]=t;const o=()=>{n&&(clearTimeout(n),n=void 0,s(),s=cn)};return x=>{const p=$t(a),m=Date.now()-e,w=()=>d=x();return o(),p<=0?(e=Date.now(),w()):(m>p&&(g||!l)?(e=Date.now(),w()):r&&(d=new Promise((_,b)=>{s=f?b:_,n=setTimeout(()=>{e=Date.now(),l=!0,_(w()),o()},Math.max(0,p-m))})),!g&&!n&&(n=setTimeout(()=>l=!0,p)),l=!1,d)}}function tu(t=Ff){const e=X(!0);function n(){e.value=!1}function l(){e.value=!0}const s=(...d)=>{e.value&&t(...d)};return{isActive:hn(e),pause:n,resume:l,eventFilter:s}}function eu(t){let e;function n(){return e||(e=t()),e}return n.reset=async()=>{const l=e;e=void 0,l&&await l},n}function zf(t){return t||Gn()}function nu(...t){if(t.length!==1)return Un(...t);const e=t[0];return typeof e=="function"?hn(Is(()=>({get:e,set:cn}))):X(e)}function lu(t,e=200,n={}){return ya(Xp(e,n),t)}function su(t,e=200,n=!1,l=!0,s=!1){return ya(Zp(e,n,l,s),t)}function du(t,e,n={}){const{eventFilter:l=Ff,...s}=n;return gt(t,ya(l,e),s)}function au(t,e,n={}){const{eventFilter:l,...s}=n,{eventFilter:d,pause:a,resume:r,isActive:g}=tu(l);return{stop:du(t,e,{...s,eventFilter:d}),pause:a,resume:r,isActive:g}}function Fs(t,e=!0,n){zf()?pt(t,n):e?t():mn(t)}function iu(t,e){zf(e)&&Wn(t,e)}function ru(t,e,n={}){const{immediate:l=!0}=n,s=X(!1);let d=null;function a(){d&&(clearTimeout(d),d=null)}function r(){s.value=!1,a()}function g(...f){a(),s.value=!0,d=setTimeout(()=>{s.value=!1,d=null,t(...f)},$t(e))}return l&&(s.value=!0,Dl&&g()),bn(r),{isPending:hn(s),start:g,stop:r}}function bs(t=!1,e={}){const{truthyValue:n=!0,falsyValue:l=!1}=e,s=jt(t),d=X(t);function a(r){if(arguments.length)return d.value=r,d.value;{const g=$t(n);return d.value=d.value===g?$t(l):g,d.value}}return s?a:[d,a]}function _e(t){var e;const n=$t(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Re=Dl?window:void 0,$f=Dl?window.document:void 0,jf=Dl?window.navigator:void 0;function Vt(...t){let e,n,l,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,l,s]=t,e=Re):[e,n,l,s]=t,!e)return cn;Array.isArray(n)||(n=[n]),Array.isArray(l)||(l=[l]);const d=[],a=()=>{d.forEach(o=>o()),d.length=0},r=(o,y,x,p)=>(o.addEventListener(y,x,p),()=>o.removeEventListener(y,x,p)),g=gt(()=>[_e(e),$t(s)],([o,y])=>{if(a(),!o)return;const x=Qp(y)?{...y}:y;d.push(...n.flatMap(p=>l.map(m=>r(o,p,m,x))))},{immediate:!0,flush:"post"}),f=()=>{g(),a()};return bn(f),f}function fu(){const t=X(!1),e=Gn();return e&&pt(()=>{t.value=!0},e),t}function Jn(t){const e=fu();return k(()=>(e.value,!!t()))}function qf(t,e={}){const{window:n=Re}=e,l=Jn(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const d=X(!1),a=f=>{d.value=f.matches},r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",a):s.removeListener(a))},g=na(()=>{l.value&&(r(),s=n.matchMedia($t(t)),"addEventListener"in s?s.addEventListener("change",a):s.addListener(a),d.value=s.matches)});return bn(()=>{g(),r(),s=void 0}),d}function Ni(t,e={}){const{controls:n=!1,navigator:l=jf}=e,s=Jn(()=>l&&"permissions"in l);let d;const a=typeof t=="string"?{name:t}:t,r=X(),g=()=>{d&&(r.value=d.state)},f=eu(async()=>{if(s.value){if(!d)try{d=await l.permissions.query(a),Vt(d,"change",g),g()}catch{r.value="prompt"}return d}});return f(),n?{state:r,isSupported:s,query:f}:r}function gu(t={}){const{navigator:e=jf,read:n=!1,source:l,copiedDuring:s=1500,legacy:d=!1}=t,a=Jn(()=>e&&"clipboard"in e),r=Ni("clipboard-read"),g=Ni("clipboard-write"),f=k(()=>a.value||d),o=X(""),y=X(!1),x=ru(()=>y.value=!1,s);function p(){a.value&&b(r.value)?e.clipboard.readText().then(C=>{o.value=C}):o.value=_()}f.value&&n&&Vt(["copy","cut"],p);async function m(C=$t(l)){f.value&&C!=null&&(a.value&&b(g.value)?await e.clipboard.writeText(C):w(C),o.value=C,y.value=!0,x.start())}function w(C){const v=document.createElement("textarea");v.value=C??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function _(){var C,v,S;return(S=(v=(C=document==null?void 0:document.getSelection)==null?void 0:C.call(document))==null?void 0:v.toString())!=null?S:""}function b(C){return C==="granted"||C==="prompt"}return{isSupported:f,text:o,copied:y,copy:m}}const Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xl="__vueuse_ssr_handlers__",ou=yu();function yu(){return Xl in Yl||(Yl[Xl]=Yl[Xl]||{}),Yl[Xl]}function xu(t,e){return ou[t]||e}function cu(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const pu={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Fi="vueuse-storage";function xa(t,e,n,l={}){var s;const{flush:d="pre",deep:a=!0,listenToStorageChanges:r=!0,writeDefaults:g=!0,mergeDefaults:f=!1,shallow:o,window:y=Re,eventFilter:x,onError:p=D=>{console.error(D)},initOnMounted:m}=l,w=(o?Ct:X)(typeof e=="function"?e():e);if(!n)try{n=xu("getDefaultStorage",()=>{var D;return(D=Re)==null?void 0:D.localStorage})()}catch(D){p(D)}if(!n)return w;const _=$t(e),b=cu(_),C=(s=l.serializer)!=null?s:pu[b],{pause:v,resume:S}=au(w,()=>I(w.value),{flush:d,deep:a,eventFilter:x});y&&r&&Fs(()=>{Vt(y,"storage",O),Vt(y,Fi,J),m&&O()}),m||O();function V(D,U){y&&y.dispatchEvent(new CustomEvent(Fi,{detail:{key:t,oldValue:D,newValue:U,storageArea:n}}))}function I(D){try{const U=n.getItem(t);if(D==null)V(U,null),n.removeItem(t);else{const R=C.write(D);U!==R&&(n.setItem(t,R),V(U,R))}}catch(U){p(U)}}function B(D){const U=D?D.newValue:n.getItem(t);if(U==null)return g&&_!=null&&n.setItem(t,C.write(_)),_;if(!D&&f){const R=C.read(U);return typeof f=="function"?f(R,_):b==="object"&&!Array.isArray(R)?{..._,...R}:R}else return typeof U!="string"?U:C.read(U)}function O(D){if(!(D&&D.storageArea!==n)){if(D&&D.key==null){w.value=_;return}if(!(D&&D.key!==t)){v();try{(D==null?void 0:D.newValue)!==C.write(w.value)&&(w.value=B(D))}catch(U){p(U)}finally{D?mn(S):S()}}}}function J(D){O(D.detail)}return w}function uu(t){return qf("(prefers-color-scheme: dark)",t)}function hu(t,e,n={}){const{window:l=Re,...s}=n;let d;const a=Jn(()=>l&&"MutationObserver"in l),r=()=>{d&&(d.disconnect(),d=void 0)},g=k(()=>{const x=$t(t),p=(Array.isArray(x)?x:[x]).map(_e).filter(Kp);return new Set(p)}),f=gt(()=>g.value,x=>{r(),a.value&&l&&x.size&&(d=new MutationObserver(e),x.forEach(p=>d.observe(p,s)))},{immediate:!0,flush:"post"}),o=()=>d==null?void 0:d.takeRecords(),y=()=>{r(),f()};return bn(y),{isSupported:a,stop:y,takeRecords:o}}function mu(t,e,n={}){const{window:l=Re,...s}=n;let d;const a=Jn(()=>l&&"ResizeObserver"in l),r=()=>{d&&(d.disconnect(),d=void 0)},g=k(()=>Array.isArray(t)?t.map(y=>_e(y)):[_e(t)]),f=gt(g,y=>{if(r(),a.value&&l){d=new ResizeObserver(e);for(const x of y)x&&d.observe(x,s)}},{immediate:!0,flush:"post"}),o=()=>{r(),f()};return bn(o),{isSupported:a,stop:o}}function vu(t,e={width:0,height:0},n={}){const{window:l=Re,box:s="content-box"}=n,d=k(()=>{var y,x;return(x=(y=_e(t))==null?void 0:y.namespaceURI)==null?void 0:x.includes("svg")}),a=X(e.width),r=X(e.height),{stop:g}=mu(t,([y])=>{const x=s==="border-box"?y.borderBoxSize:s==="content-box"?y.contentBoxSize:y.devicePixelContentBoxSize;if(l&&d.value){const p=_e(t);if(p){const m=l.getComputedStyle(p);a.value=Number.parseFloat(m.width),r.value=Number.parseFloat(m.height)}}else if(x){const p=Array.isArray(x)?x:[x];a.value=p.reduce((m,{inlineSize:w})=>m+w,0),r.value=p.reduce((m,{blockSize:w})=>m+w,0)}else a.value=y.contentRect.width,r.value=y.contentRect.height},n);Fs(()=>{const y=_e(t);y&&(a.value="offsetWidth"in y?y.offsetWidth:e.width,r.value="offsetHeight"in y?y.offsetHeight:e.height)});const f=gt(()=>_e(t),y=>{a.value=y?e.width:0,r.value=y?e.height:0});function o(){g(),f()}return{width:a,height:r,stop:o}}const zi=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ca(t,e={}){const{document:n=$f,autoExit:l=!1}=e,s=k(()=>{var b;return(b=_e(t))!=null?b:n==null?void 0:n.querySelector("html")}),d=X(!1),a=k(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>n&&b in n||s.value&&b in s.value)),r=k(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>n&&b in n||s.value&&b in s.value)),g=k(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>n&&b in n||s.value&&b in s.value)),f=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>n&&b in n),o=Jn(()=>s.value&&n&&a.value!==void 0&&r.value!==void 0&&g.value!==void 0),y=()=>f?(n==null?void 0:n[f])===s.value:!1,x=()=>{if(g.value){if(n&&n[g.value]!=null)return n[g.value];{const b=s.value;if((b==null?void 0:b[g.value])!=null)return!!b[g.value]}}return!1};async function p(){if(!(!o.value||!d.value)){if(r.value)if((n==null?void 0:n[r.value])!=null)await n[r.value]();else{const b=s.value;(b==null?void 0:b[r.value])!=null&&await b[r.value]()}d.value=!1}}async function m(){if(!o.value||d.value)return;x()&&await p();const b=s.value;a.value&&(b==null?void 0:b[a.value])!=null&&(await b[a.value](),d.value=!0)}async function w(){await(d.value?p():m())}const _=()=>{const b=x();(!b||b&&y())&&(d.value=b)};return Vt(n,zi,_,!1),Vt(()=>_e(s),zi,_,!1),l&&bn(p),{isSupported:o,isFullscreen:d,enter:m,exit:p,toggle:w}}function gd(t){return typeof Window<"u"&&t instanceof Window?t.document.documentElement:typeof Document<"u"&&t instanceof Document?t.documentElement:t}function bu(t,e=cn,n={}){const{immediate:l=!0,manual:s=!1,type:d="text/javascript",async:a=!0,crossOrigin:r,referrerPolicy:g,noModule:f,defer:o,document:y=$f,attrs:x={}}=n,p=X(null);let m=null;const w=C=>new Promise((v,S)=>{const V=O=>(p.value=O,v(O),O);if(!y){v(!1);return}let I=!1,B=y.querySelector(`script[src="${$t(t)}"]`);B?B.hasAttribute("data-loaded")&&V(B):(B=y.createElement("script"),B.type=d,B.async=a,B.src=$t(t),o&&(B.defer=o),r&&(B.crossOrigin=r),f&&(B.noModule=f),g&&(B.referrerPolicy=g),Object.entries(x).forEach(([O,J])=>B==null?void 0:B.setAttribute(O,J)),I=!0),B.addEventListener("error",O=>S(O)),B.addEventListener("abort",O=>S(O)),B.addEventListener("load",()=>{B.setAttribute("data-loaded","true"),e(B),V(B)}),I&&(B=y.head.appendChild(B)),C||V(B)}),_=(C=!0)=>(m||(m=w(C)),m),b=()=>{if(!y)return;m=null,p.value&&(p.value=null);const C=y.querySelector(`script[src="${$t(t)}"]`);C&&y.head.removeChild(C)};return l&&!s&&Fs(_),s||iu(b),{scriptTag:p,load:_,unload:b}}function Hf(t){const e=window.getComputedStyle(t);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&t.clientWidth<t.scrollWidth||e.overflowY==="auto"&&t.clientHeight<t.scrollHeight)return!0;{const n=t.parentNode;return!n||n.tagName==="BODY"?!1:Hf(n)}}function ku(t){const e=t||window.event,n=e.target;return Hf(n)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const Zl=new WeakMap;function Uf(t,e=!1){const n=X(e);let l=null;gt(nu(t),a=>{const r=gd($t(a));if(r){const g=r;Zl.get(g)||Zl.set(g,g.style.overflow),n.value&&(g.style.overflow="hidden")}},{immediate:!0});const s=()=>{const a=gd($t(t));!a||n.value||(Bi&&(l=Vt(a,"touchmove",r=>{ku(r)},{passive:!1})),a.style.overflow="hidden",n.value=!0)},d=()=>{var a;const r=gd($t(t));!r||!n.value||(Bi&&(l==null||l()),r.style.overflow=(a=Zl.get(r))!=null?a:"",Zl.delete(r),n.value=!1)};return bn(d),k({get(){return n.value},set(a){a?s():d()}})}function _u(t={}){const{window:e=Re,behavior:n="auto"}=t;if(!e)return{x:X(0),y:X(0)};const l=X(e.scrollX),s=X(e.scrollY),d=k({get(){return l.value},set(r){scrollTo({left:r,behavior:n})}}),a=k({get(){return s.value},set(r){scrollTo({top:r,behavior:n})}});return Vt(e,"scroll",()=>{l.value=e.scrollX,s.value=e.scrollY},{capture:!1,passive:!0}),{x:d,y:a}}function wu(t={}){const{window:e=Re,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:l=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:d=!0}=t,a=X(n),r=X(l),g=()=>{e&&(d?(a.value=e.innerWidth,r.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,r.value=e.document.documentElement.clientHeight))};if(g(),Fs(g),Vt("resize",g,{passive:!0}),s){const f=qf("(orientation: portrait)");gt(f,()=>g())}return{width:a,height:r}}var Eu=z({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(t){const e=k(()=>{const l=["font-icon icon"];return`${t.icon}`,l}),n=k(()=>{const l={};return t.color&&(l.color=t.color),t.size&&(l["font-size"]=Number.isNaN(Number(t.size))?t.size:`${t.size}px`),oe(l).length?l:null});return()=>t.icon?i("iconify-icon",{key:t.icon,class:e.value,style:n.value,mode:"style",inline:"",icon:`${t.icon}`,width:"1em",height:"1em"}):null}});const Wf=({title:t,desc:e="",logo:n,background:l,color:s,link:d})=>{const a=[n?i("img",{class:"vp-card-logo",src:Et(n),loading:"lazy","no-view":""}):null,i("div",{class:"vp-card-content"},[i("div",{class:"vp-card-title",innerHTML:t}),i("hr"),i("div",{class:"vp-card-desc",innerHTML:e})])],r={};return l&&(r.background=l),s&&(r.color=s),d?zn(d)?i("a",{class:"vp-card",href:d,target:"_blank",style:r},a):i(At,{to:d,class:"vp-card",style:r},()=>a):i("div",{class:"vp-card",style:r},a)};Wf.displayName="VPCard";const Cu=Yt({enhance:({app:t})=>{De("FontIcon")||t.component("FontIcon",Eu),De("VPCard")||t.component("VPCard",Wf)},setup:()=>{bu("https://cdn.jsdelivr.net/npm/iconify-icon@1")},rootComponents:[]}),$i=async(t,e)=>{const{path:n,query:l}=t.currentRoute.value,{scrollBehavior:s}=t.options;t.options.scrollBehavior=void 0,await t.replace({path:n,query:l,hash:e}),t.options.scrollBehavior=s},Iu=({headerLinkSelector:t,headerAnchorSelector:e,delay:n,offset:l=5})=>{const s=Be();Vt("scroll",lu(()=>{var m,w;const a=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(a-0)<l){$i(s,"");return}const g=window.innerHeight+a,f=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),o=Math.abs(f-g)<l,y=Array.from(document.querySelectorAll(t)),p=Array.from(document.querySelectorAll(e)).filter(_=>y.some(b=>b.hash===_.hash));for(let _=0;_<p.length;_++){const b=p[_],C=p[_+1],v=a>=(((m=b.parentElement)==null?void 0:m.offsetTop)??0)-l,S=!C||a<(((w=C.parentElement)==null?void 0:w.offsetTop)??0)-l;if(!(v&&S))continue;const I=decodeURIComponent(s.currentRoute.value.hash),B=decodeURIComponent(b.hash);if(I===B)return;if(o){for(let O=_+1;O<p.length;O++)if(I===decodeURIComponent(p[O].hash))return}$i(s,B);return}},n))},Su=".vp-sidebar-link, .toc-link",Tu=".header-anchor",Lu=200,Pu=5,Au=Yt({setup(){Iu({headerLinkSelector:Su,headerAnchorSelector:Tu,delay:Lu,offset:Pu})}});let Gf=t=>Lt(t.title)?{title:t.title}:null;const Kf=Symbol(""),Du=t=>{Gf=t},Ou=()=>bt(Kf),Ru=t=>{t.provide(Kf,Gf)};var Mu={"/":{title:"目录",empty:"暂无目录"}};const Vu=z({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(t){const e=Ou(),n=vn(Mu),l=ut(),s=wp(),d=If(),r=Ct(tn(s.value).map(([f,{meta:o}])=>{const y=e(o);if(!y)return null;const x=f.split("/").length;return{level:Wp(f,"/")?x-2:x-1,base:f.replace(/\/[^/]+\/?$/,"/"),path:f,...y}}).filter(f=>Ae(f)&&Lt(f.title))),g=k(()=>{const f=t.base?rc(yf(t.base)):l.value.path.replace(/\/[^/]+$/,"/"),o=f.split("/").length-2,y=[];return r.value.filter(({level:x,path:p})=>{if(!bl(p,f)||p===f)return!1;if(f==="/"){const m=oe(d.value.locales).filter(w=>w!=="/");if(p==="/404.html"||m.some(w=>bl(p,w)))return!1}return x-o<=t.level}).sort(({title:x,level:p,order:m},{title:w,level:_,order:b})=>{const C=p-_;return C||(fd(m)?fd(b)?m>0?b>0?m-b:-1:b<0?m-b:1:m:fd(b)?b:x.localeCompare(w))}).forEach(x=>{var w;const{base:p,level:m}=x;switch(m-o){case 1:{y.push(x);break}case 2:{const _=y.find(b=>b.path===p);_&&(_.children??(_.children=[])).push(x);break}default:{const _=y.find(b=>b.path===p.replace(/\/[^/]+\/$/,"/"));if(_){const b=(w=_.children)==null?void 0:w.find(C=>C.path===p);b&&(b.children??(b.children=[])).push(x)}}}}),y});return()=>{const f=g.value.some(o=>o.children);return i("div",{class:["vp-catalog-wrapper",{index:t.index}]},[t.hideHeading?null:i("h2",{class:"vp-catalog-main-title"},n.value.title),g.value.length?i(t.index?"ol":"ul",{class:["vp-catalogs",{deep:f}]},g.value.map(({children:o=[],title:y,path:x,content:p})=>{const m=i(At,{class:"vp-catalog-title",to:x},()=>p?i(p):y);return i("li",{class:"vp-catalog"},f?[i("h3",{id:y,class:["vp-catalog-child-title",{"has-children":o.length}]},[i("a",{href:`#${y}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),m]),o.length?i(t.index?"ol":"ul",{class:"vp-child-catalogs"},o.map(({children:w=[],content:_,path:b,title:C})=>i("li",{class:"vp-child-catalog"},[i("div",{class:["vp-catalog-sub-title",{"has-children":w.length}]},[i("a",{href:`#${C}`,class:"vp-catalog-header-anchor"},"#"),i(At,{class:"vp-catalog-title",to:b},()=>_?i(_):C)]),w.length?i(t.index?"ol":"div",{class:t.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},w.map(({content:v,path:S,title:V})=>t.index?i("li",{class:"vp-sub-catalog"},i(At,{to:S},()=>v?i(v):V)):i(At,{class:"vp-sub-catalog-link",to:S},()=>v?i(v):V))):null]))):null]:i("div",{class:"vp-catalog-child-title"},m))})):i("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),Bu=Yt({enhance:({app:t})=>{Ru(t),De("Catalog",t)||t.component("Catalog",Vu)}});var Nu={"/":{backToTop:"返回顶部"}};const Fu=z({name:"BackToTop",setup(t){const e=mt(),n=vn(Nu),l=Ct(),{height:s}=vu(l),{height:d}=wu(),{y:a}=_u(),r=k(()=>e.value.backToTop!==!1&&a.value>100),g=k(()=>a.value/(s.value-d.value)*100);return pt(()=>{l.value=document.body}),()=>i(Oe,{name:"back-to-top"},()=>r.value?i("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[i("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":g.value},i("svg",i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*g.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),i("div",{class:"back-to-top-icon"})]):null)}}),zu=Yt({rootComponents:[Fu]}),$u=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Jf=z({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(t){const e=Ne(),n=k(()=>t.locales[e.value]??{openInNewWindow:"open in new window"});return()=>i("span",[$u,i("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}});var ju={};const qu=ju,Hu=Yt({enhance({app:t}){t.component("ExternalLinkIcon",i(Jf,{locales:qu}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const rt={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:t=>{const e=rt.isStarted();t=od(t,rt.settings.minimum,1),rt.status=t===1?null:t;const n=rt.render(!e),l=n.querySelector(rt.settings.barSelector),s=rt.settings.speed,d=rt.settings.easing;return n.offsetWidth,Uu(a=>{ts(l,{transform:"translate3d("+ji(t)+"%,0,0)",transition:"all "+s+"ms "+d}),t===1?(ts(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){ts(n,{transition:"all "+s+"ms linear",opacity:"0"}),setTimeout(function(){rt.remove(),a()},s)},s)):setTimeout(()=>a(),s)}),rt},isStarted:()=>typeof rt.status=="number",start:()=>{rt.status||rt.set(0);const t=()=>{setTimeout(()=>{rt.status&&(rt.trickle(),t())},rt.settings.trickleSpeed)};return rt.settings.trickle&&t(),rt},done:t=>!t&&!rt.status?rt:rt.inc(.3+.5*Math.random()).set(1),inc:t=>{let e=rt.status;return e?(typeof t!="number"&&(t=(1-e)*od(Math.random()*e,.1,.95)),e=od(e+t,0,.994),rt.set(e)):rt.start()},trickle:()=>rt.inc(Math.random()*rt.settings.trickleRate),render:t=>{if(rt.isRendered())return document.getElementById("nprogress");qi(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=rt.settings.template;const n=e.querySelector(rt.settings.barSelector),l=t?"-100":ji(rt.status||0),s=document.querySelector(rt.settings.parent);return ts(n,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),s!==document.body&&qi(s,"nprogress-custom-parent"),s==null||s.appendChild(e),e},remove:()=>{Hi(document.documentElement,"nprogress-busy"),Hi(document.querySelector(rt.settings.parent),"nprogress-custom-parent");const t=document.getElementById("nprogress");t&&Wu(t)},isRendered:()=>!!document.getElementById("nprogress")},od=(t,e,n)=>t<e?e:t>n?n:t,ji=t=>(-1+t)*100,Uu=function(){const t=[];function e(){const n=t.shift();n&&n(e)}return function(n){t.push(n),t.length===1&&e()}}(),ts=function(){const t=["Webkit","O","Moz","ms"],e={};function n(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(r,g){return g.toUpperCase()})}function l(a){const r=document.body.style;if(a in r)return a;let g=t.length;const f=a.charAt(0).toUpperCase()+a.slice(1);let o;for(;g--;)if(o=t[g]+f,o in r)return o;return a}function s(a){return a=n(a),e[a]??(e[a]=l(a))}function d(a,r,g){r=s(r),a.style[r]=g}return function(a,r){for(const g in r){const f=r[g];f!==void 0&&Object.prototype.hasOwnProperty.call(r,g)&&d(a,g,f)}}}(),Qf=(t,e)=>(typeof t=="string"?t:pa(t)).indexOf(" "+e+" ")>=0,qi=(t,e)=>{const n=pa(t),l=n+e;Qf(n,e)||(t.className=l.substring(1))},Hi=(t,e)=>{const n=pa(t);if(!Qf(t,e))return;const l=n.replace(" "+e+" "," ");t.className=l.substring(1,l.length-1)},pa=t=>(" "+(t.className||"")+" ").replace(/\s+/gi," "),Wu=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)},Gu=()=>{pt(()=>{const t=Be(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(n=>{e.has(n.path)||rt.start()}),t.afterEach(n=>{e.add(n.path),rt.done()})})},Ku=Yt({setup(){Gu()}}),Ju=JSON.parse(`{"encrypt":{},"author":{"name":"乌龙茶","url":"https://ilyl.life","email":"mailto:982474256@qq.com"},"logo":"/logo.svg","repo":"https://github.com/ly2jr/neverland","docsDir":"docs","fullscreen":true,"blog":{"medias":{"Email":"mailto:982474256@qq.com","GitHub":"https://github.com/ly2jr"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"梦幻岛","icon":"/assets/svg/island2.svg","link":"/hope/","children":[{"text":"影院","icon":"/assets/svg/movie.svg","link":"https://nas.ilyl.life:8091/"},{"text":"音乐","icon":"/assets/svg/music.svg","link":"https://nas.ilyl.life:8089/audio"},{"text":"网盘","icon":"/assets/svg/hard-drive.svg","link":"https://nas.ilyl.life:8089/file"},{"text":"图床","icon":"/assets/svg/camera.svg","link":"https://nas.ilyl.life:8092/default.png"}]},{"text":"博文","icon":"/assets/svg/toolbox3.svg","prefix":"/","children":[{"text":"桌面端","icon":"/assets/svg/computer.svg","link":"cs/"},{"text":"Web端","icon":"/assets/svg/edge.svg","link":"web/"},{"text":"工具箱","icon":"/assets/svg/toolbox2.svg","link":"tools/regular-expressions.md"}]},{"text":"关于","icon":"/assets/svg/me.svg","link":"/about/"}],"sidebar":{"/":[{"text":"梦幻岛","icon":"/assets/svg/island.svg","prefix":"hope/","link":"hope/","children":"structure"},{"text":"桌面端","icon":"/assets/svg/computer.svg","prefix":"cs/","collapsible":true,"children":[{"text":"设计模式","icon":"/assets/svg/design.svg","prefix":"design-pattern/","collapsible":true,"children":"structure"},{"text":"MAUI","icon":"/assets/svg/csharp.svg","prefix":"maui/","collapsible":true,"children":"structure"},{"text":"WPF主题控件","icon":"/assets/svg/csharp2.svg","prefix":"wpf-theme/","collapsible":true,"children":"structure"},{"text":"WPF","icon":"/assets/svg/csharp2.svg","prefix":"wpf/","collapsible":true,"children":"structure"},{"text":"C++","icon":"/assets/svg/cpp.svg","prefix":"cpp/","collapsible":true,"children":"structure"},{"text":"Visual Basic","icon":"/assets/svg/vb.svg","prefix":"vb/","collapsible":true,"children":"structure"}]},{"text":"Web端","icon":"/assets/svg/edge.svg","prefix":"web/","collapsible":true,"children":"structure"},{"text":"工具箱","icon":"/assets/svg/toolbox.svg","prefix":"tools/","collapsible":true,"children":[{"text":"正则表达式","icon":"/assets/svg/regular-expression.svg","link":"regular-expressions.md"},{"text":"C#","icon":"/assets/svg/csharp.svg","prefix":"csharp/","children":"structure","collapsible":true},{"text":"Docker","icon":"/assets/svg/docker2.svg","prefix":"docker/","children":"structure","collapsible":true},{"text":"TypeScript","icon":"/assets/svg/ts.svg","prefix":"ts/","collapsible":true,"children":"structure"},{"text":"FFMPEG","icon":"/assets/svg/ffmpeg.svg","prefix":"ffmpeg/","children":"structure","collapsible":true},{"text":"Excel","icon":"/assets/svg/excel.svg","prefix":"excel/","children":"structure","collapsible":true},{"text":"虚拟机","icon":"/assets/svg/vmware.svg","prefix":"vmware/","children":"structure","collapsible":true},{"text":"数据库","icon":"/assets/svg/database.svg","prefix":"databases/","children":"structure","collapsible":true},{"text":"科大讯飞","prefix":"ifly/","children":"structure","collapsible":true},{"text":"安装包","prefix":"installer/","children":"structure","collapsible":true},{"text":"用友U8+","icon":"/assets/svg/yonyou.svg","prefix":"yonyou/","children":"structure","collapsible":true},{"text":"私有云","icon":"/assets/svg/nas.svg","prefix":"nas/","children":"structure","collapsible":true}]}]},"footer":"<a href='http://beian.miit.gov.cn' target='_blank'>苏ICP备2021053735号-1</a>&nbsp;&nbsp;<img src='备案图标.png' alt='公网备案'/>&nbsp;&nbsp;<a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32118302000302' target='_blank'>苏公网安备32118302000302号</a>","displayFooter":true,"blog":{"description":"悟已往之不谏，知来者之可追"}}}}`),Qu=X(Ju),Yf=()=>Qu,Xf=Symbol(""),Yu=()=>{const t=bt(Xf);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},Xu=(t,e)=>{const{locales:n,...l}=t;return{...l,...n==null?void 0:n[e]}},Zu=Yt({enhance({app:t}){const e=Yf(),n=t._context.provides[fa],l=k(()=>Xu(e.value,n.routeLocale.value));t.provide(Xf,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return l.value}}})}}),th=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,eh=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&th.test(navigator.userAgent),yd=new Map,nh=({delay:t=500,duration:e=2e3,locales:n,selector:l,showInMobile:s})=>{const{copy:d}=gu({legacy:!0}),a=vn(n),r=ut(),g=y=>{if(!y.hasAttribute("copy-code-registered")){const x=document.createElement("button");x.type="button",x.classList.add("vp-copy-code-button"),x.innerHTML='<div class="vp-copy-icon" />',x.setAttribute("aria-label",a.value.copy),x.setAttribute("data-copied",a.value.copied),y.parentElement&&y.parentElement.insertBefore(x,y),y.setAttribute("copy-code-registered","")}},f=()=>{mn().then(()=>Vf(t)).then(()=>{l.forEach(y=>{document.querySelectorAll(y).forEach(g)})})},o=(y,x,p)=>{let{innerText:m=""}=x;/language-(shellscript|shell|bash|sh|zsh)/.test(y.classList.toString())&&(m=m.replace(/^ *(\$|>) /gm,"")),d(m).then(()=>{p.classList.add("copied"),clearTimeout(yd.get(p));const w=setTimeout(()=>{p.classList.remove("copied"),p.blur(),yd.delete(p)},e);yd.set(p,w)})};pt(()=>{const y=!eh()||s;y&&f(),Vt("click",x=>{const p=x.target;if(p.matches('div[class*="language-"] > button.copy')){const m=p.parentElement,w=p.nextElementSibling;w&&o(m,w,p)}else if(p.matches('div[class*="language-"] div.vp-copy-icon')){const m=p.parentElement,w=m.parentElement,_=m.nextElementSibling;_&&o(w,_,m)}}),gt(()=>r.value.path,()=>{y&&f()})})};var lh={"/":{copy:"复制代码",copied:"已复制"}},sh=['.theme-hope-content div[class*="language-"] pre'];const dh=500,ah=2e3,ih=lh,rh=sh,fh=!1,gh=Yt({setup:()=>{nh({selector:rh,locales:ih,duration:ah,delay:dh,showInMobile:fh})}});var oh={"/":{author:"著作权归:author所有",license:"基于:license协议",link:"原文链接：:link"}},yh={canonical:"https://ilyl.life",author:"乌龙茶",license:"MIT",global:!0,disableCopy:!1,disableSelection:!1,triggerLength:10,maxLength:0};const He=yh,{canonical:es}=He,xh=()=>{const t=mt(),e=vn(oh),n=ut(),l=k(()=>!!t.value.copy||t.value.copy!==!1&&He.global),s=k(()=>Ae(t.value.copy)?t.value.copy:null),d=k(()=>{var p;return((p=s.value)==null?void 0:p.disableCopy)??He.disableCopy}),a=k(()=>{var p;return l.value?((p=s.value)==null?void 0:p.disableSelection)??He.disableSelection:!1}),r=k(()=>{var p;return l.value?((p=s.value)==null?void 0:p.maxLength)??He.maxLength:0}),g=k(()=>{var p;return((p=s.value)==null?void 0:p.triggerLength)??He.triggerLength}),f=()=>es?`${Rs(Ve(es)?es:`https://${es}`)}${n.value.path}`:window.location.href,o=(p,m)=>{const{author:w,license:_,link:b}=e.value;return[p?w.replace(":author",p):"",m?_.replace(":license",m):"",b.replace(":link",f())].filter(C=>C).join(`
`)},y=()=>{if(Lt(n.value.copyright))return n.value.copyright.replace(":link",f());const{author:p,license:m}=n.value.copyright||{};return o(p??He.author,m??He.license)},x=p=>{const m=getSelection();if(m){const w=m.getRangeAt(0);if(l.value){const _=w.toString().length;if(d.value||r.value&&_>r.value)return p.preventDefault();if(_>=g.value){p.preventDefault();const b=y(),C=document.createElement("div");C.appendChild(m.getRangeAt(0).cloneContents()),p.clipboardData&&(p.clipboardData.setData("text/html",`${C.innerHTML}<hr><div class="copyright">${b.replace(/\\n/g,"<br>")}</div>`),p.clipboardData.setData("text/plain",`${m.getRangeAt(0).cloneContents().textContent||""}
------
${b}`))}}}};pt(()=>{const p=document.querySelector("#app");Vt(p,"copy",x),na(()=>{p.style.userSelect=a.value?"none":"auto"})})},ch=Yt({setup:()=>{xh()}}),ns=xa("VUEPRESS_CODE_TAB_STORE",{});var ph=z({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(t,{slots:e}){const n=X(t.active),l=Ct([]),s=()=>{t.tabId&&(ns.value[t.tabId]=t.data[n.value].id)},d=(f=n.value)=>{n.value=f<l.value.length-1?f+1:0,l.value[n.value].focus()},a=(f=n.value)=>{n.value=f>0?f-1:l.value.length-1,l.value[n.value].focus()},r=(f,o)=>{f.key===" "||f.key==="Enter"?(f.preventDefault(),n.value=o):f.key==="ArrowRight"?(f.preventDefault(),d()):f.key==="ArrowLeft"&&(f.preventDefault(),a()),t.tabId&&(ns.value[t.tabId]=t.data[n.value].id)},g=()=>{if(t.tabId){const f=t.data.findIndex(({id:o})=>ns.value[t.tabId]===o);if(f!==-1)return f}return t.active};return pt(()=>{n.value=g(),gt(()=>ns.value[t.tabId],(f,o)=>{if(t.tabId&&f!==o){const y=t.data.findIndex(({id:x})=>x===f);y!==-1&&(n.value=y)}})}),()=>t.data.length?i("div",{class:"vp-code-tabs"},[i("div",{class:"vp-code-tabs-nav",role:"tablist"},t.data.map(({id:f},o)=>{const y=o===n.value;return i("button",{type:"button",ref:x=>{x&&(l.value[o]=x)},class:["vp-code-tab-nav",{active:y}],role:"tab","aria-controls":`codetab-${t.id}-${o}`,"aria-selected":y,onClick:()=>{n.value=o,s()},onKeydown:x=>r(x,o)},e[`title${o}`]({value:f,isActive:y}))})),t.data.map(({id:f},o)=>{const y=o===n.value;return i("div",{class:["vp-code-tab",{active:y}],id:`codetab-${t.id}-${o}`,role:"tabpanel","aria-expanded":y},[i("div",{class:"vp-code-tab-title"},e[`title${o}`]({value:f,isActive:y})),e[`tab${o}`]({value:f,isActive:y})])})]):null}});const yt=({name:t="",color:e="currentColor"},{slots:n})=>{var l;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${t}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${t} icon`},(l=n.default)==null?void 0:l.call(n))};yt.displayName="IconBase";const zs=({size:t=48,stroke:e=4,wrapper:n=!0,height:l=2*t})=>{const s=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${l}px`},s):s};zs.displayName="LoadingIcon";const Zf=(t,{slots:e})=>{var n;return(n=e.default)==null?void 0:n.call(e)},tg=()=>i(yt,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));tg.displayName="GitHubIcon";const eg=()=>i(yt,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));eg.displayName="GitLabIcon";const ng=()=>i(yt,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));ng.displayName="GiteeIcon";const lg=()=>i(yt,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));lg.displayName="BitbucketIcon";const sg=()=>i(yt,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));sg.displayName="SourceIcon";const $s=(t,e)=>{let n=1;for(let l=0;l<t.length;l++)n+=t.charCodeAt(l),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%e};let uh=class{constructor(){this.messageElements={};const e="message-container",n=document.getElementById(e);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,n=2e3){const l=document.createElement("div"),s=Date.now();return l.className="message move-in",l.innerHTML=e,this.containerElement.appendChild(l),this.messageElements[s]=l,n>0&&setTimeout(()=>{this.close(s)},n),s}close(e){if(e){const n=this.messageElements[e];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[e]})}else oe(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const dg=/#.*$/u,hh=t=>{const e=dg.exec(t);return e?e[0]:""},Ui=t=>decodeURI(t).replace(dg,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),ag=(t,e)=>{if(!Bf(e))return!1;const n=Ui(t.path),l=Ui(e),s=hh(e);return s?s===t.hash&&(!l||n===l):n===l},mh=t=>Ve(t)?t:`https://github.com/${t}`,ig=t=>!Ve(t)||/github\.com/.test(t)?"GitHub":/bitbucket\.org/.test(t)?"Bitbucket":/gitlab\.com/.test(t)?"GitLab":/gitee\.com/.test(t)?"Gitee":null;var vh=t=>Object.prototype.toString.call(t)==="[object Object]",kl=t=>typeof t=="string";const rg=Array.isArray,Wi=t=>vh(t)&&kl(t.name),_l=(t,e=!1)=>t?rg(t)?t.map(n=>kl(n)?{name:n}:Wi(n)?n:null).filter(n=>n!==null):kl(t)?[{name:t}]:Wi(t)?[t]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,t),[]):[],fg=(t,e)=>{if(t){if(rg(t)&&t.every(kl))return t;if(kl(t))return[t];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,t)}return[]},gg=t=>fg(t,"category"),og=t=>fg(t,"tag"),bh='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',kh='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',_h='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var wh={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const xd=wh,Gi={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},Eh=(t,e,n)=>{const l=document.createElement(t);return Ae(e)&&oe(e).forEach(s=>{if(s.indexOf("data"))l[s]=e[s];else{const d=s.replace("data","");l.dataset[d]=e[s]}}),n&&n.forEach(s=>{l.appendChild(s)}),l},ua=t=>({...xd,...t,jsLib:Array.from(new Set([...xd.jsLib||[],...t.jsLib||[]])),cssLib:Array.from(new Set([...xd.cssLib||[],...t.cssLib||[]]))}),On=(t,e)=>{if(Bf(t[e]))return t[e];const n=new Promise(l=>{var d;const s=document.createElement("script");s.src=e,(d=document.querySelector("body"))==null||d.appendChild(s),s.onload=()=>{l()}});return t[e]=n,n},Ch=(t,e)=>{if(e.css&&Array.from(t.childNodes).every(n=>n.nodeName!=="STYLE")){const n=Eh("style",{innerHTML:e.css});t.appendChild(n)}},Ih=(t,e,n)=>{const l=n.getScript();if(l&&Array.from(e.childNodes).every(s=>s.nodeName!=="SCRIPT")){const s=document.createElement("script");s.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${t} .vp-code-demo-display').shadowRoot;
${l}}`)),e.appendChild(s)}},Sh=t=>{const e=oe(t),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(l=>{const s=e.filter(d=>Gi[l].types.includes(d));if(s.length){const d=s[0];n[l]=[t[d].replace(/^\n|\n$/g,""),Gi[l].map[d]||d]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},yg=t=>t.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),xg=t=>`<div id="app">
${yg(t)}
</div>`,Th=t=>`${t.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-Dyn4XJbr.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/index.html-CMoJnN1l.js","assets/index.html-C6HDoYLz.js","assets/index.html-DVVqNaaX.js","assets/index.html-BR2ZqeQ9.js","assets/regular-expressions.html-DqUxApc-.js","assets/index.html-NtoNHsaJ.js","assets/download.html-BKS9gwFz.js","assets/lint.html-Ye_gxSeE.js","assets/npm.html-B2tW5pEd.js","assets/proxy.html-DEWsvhMJ.js","assets/rsa.html-D9uypEt9.js","assets/upload-sortable.html-Gkngq1vW.js","assets/index.html-Cx4uq4s_.js","assets/array.html-aafPwf-6.js","assets/ref.html-DZy55Qez.js","assets/variable.html-B0EjX8z1.js","assets/index.html-63W0UjQw.js","assets/abstract-factory.html-BJ7PAuth.js","assets/adapter.html-CEw5x0MC.js","assets/bridge.html-O7nnEpyn.js","assets/builder.html-CNKHexbH.js","assets/chain-of-responsibility.html-CQDedBuE.js","assets/command.html-ClKAosHW.js","assets/composite.html-QNW6B51P.js","assets/decorator.html-q0g7_FkJ.js","assets/facade.html-O0BcoGIQ.js","assets/factory-method.html-DQ2inXA7.js","assets/flyweight.html-CxnsEy81.js","assets/interpreter.html-nCIGgfo9.js","assets/iterator.html-CZsONtWW.js","assets/mediator.html-51Tjg1x1.js","assets/memento.html-CxyCpmpF.js","assets/observer.html-Cec5VSN0.js","assets/prototype.html-BlpNZ_U5.js","assets/proxy.html-BF1NeS-a.js","assets/singleton.html-B8IAz7br.js","assets/state.html-Dl6TCeBQ.js","assets/strategy.html-B9KkHuix.js","assets/template-method.html-hZmT52hK.js","assets/visitor.html-Cx1GQhuf.js","assets/Note.html-BjFx4oKl.js","assets/index.html-DQ3s8rR8.js","assets/Interop.html-DI4GWCjz.js","assets/index.html-ygFP0dEb.js","assets/crud.html-KYrDw9IM.js","assets/fun.html-gr6PkFuW.js","assets/index.html-Dxr3tUbp.js","assets/angle-animation.html-CZ-5ygMa.js","assets/binding.html-DCWUhELl.js","assets/canvas.html-fvFGfry6.js","assets/checkbox.html-CqcKqfdt.js","assets/combobx.html-CS1NOLcG.js","assets/command.html-DuTG5D1F.js","assets/design.html-B4TZkcPZ.js","assets/download.html-BIuEoyFB.js","assets/dynamic-layout.html-BdJWu-OV.js","assets/dynamic-resource.html-Dftl1jlf.js","assets/format.html-DkRjS6IU.js","assets/hk.html-DTpysTrk.js","assets/notifyproperty.html-BSnuIf-B.js","assets/opacity-animation.html-D5zjPkwB.js","assets/plugin.html-BoNFNphH.js","assets/prism-tabcontrol.html-LYemQIAL.js","assets/prismshell.html-DcGh27eB.js","assets/quartz-net.html-BEVBH_zs.js","assets/ratio.html-C8dI5vPK.js","assets/static-button-auth.html-B-4gO9bm.js","assets/svg.html-BEY7PQ0S.js","assets/teeview.html-CXG530hi.js","assets/update.html-PuDjvTtw.js","assets/watermark.html-C_R9_saE.js","assets/index.html-DwWIe2vY.js","assets/border.html-BgKc4rbj.js","assets/button.html-CQiZ7jiP.js","assets/index.html-CZB1VbNS.js","assets/auth.html-lR0z0x48.js","assets/base-conversion.html-CjzFQTKR.js","assets/batch-process.html-BRkliqN5.js","assets/codesnippet.html-CYwuz2ja.js","assets/com.html-BMCKNoX4.js","assets/cpluscplus.html-BkwHMcMH.js","assets/docker-debug.html-BPxkAF0_.js","assets/encryption.html-Ch0GWrwD.js","assets/intptr-and-pointer.html-BJ4nPTZr.js","assets/ioc.html-DyTVewYg.js","assets/jwt.html-CsONIXMP.js","assets/log.html-DV61PZBI.js","assets/machine-code.html-FfdR6TTO.js","assets/signalr.html-DtDXXmQr.js","assets/sound.html-Qglk_k9W.js","assets/string-and-intptr.html-ChnOuivp.js","assets/struct-and-intptr.html-C259zzOd.js","assets/task.html-CyuyhWcT.js","assets/wince.html-C2YAOw2s.js","assets/xml.html-CxcjPsca.js","assets/index.html-BERulWxT.js","assets/mariadb.html-Bg4IFkam.js","assets/mysql.html-BOcIyBGX.js","assets/paramaters.html-CIznm56r.js","assets/index.html-BQtjcupg.js","assets/aliyun-ddns.html-DOQ7Pp_n.js","assets/registry.html-KXVMyIiN.js","assets/index.html-BBU9hyfw.js","assets/vba1.html-a5MIffii.js","assets/vba2.html-BlipQZBV.js","assets/vba3.html-DAG2vhZv.js","assets/vba4.html-A7rv1O-p.js","assets/index.html-DUaL8I06.js","assets/avpixelformat.html-Dam43Oik.js","assets/index.html-Cs8s303m.js","assets/index.html-BRV8qAON.js","assets/voice.html-BIpP6dQ8.js","assets/vsinstaller.html-CK6-nHio.js","assets/index.html-SiRO1B8I.js","assets/broadband.html-DyTgkT4g.js","assets/cloud.html-qPCgKTS-.js","assets/deploy.html-DxrZPRJy.js","assets/domain.html-DoXomUPd.js","assets/ont.html-04lnBoRk.js","assets/plex.html-BjxCEgQ2.js","assets/router.html-BN3zPWhc.js","assets/tv.html-D0nKbjZG.js","assets/index.html-B8y1GRj6.js","assets/promise.html-CpWrZ--n.js","assets/reflect_has.html-BmSX_XHL.js","assets/index.html-kD3z5GC-.js","assets/index.html-BrZW-E5C.js","assets/cd.html--0sJvA7y.js","assets/intel_vt.html-CejvM_7D.js","assets/index.html-B-YgmgEm.js","assets/index.html-FJ9sMDI2.js","assets/antd.html-CTrZYcGq.js","assets/element-plus.html-Dn10KM4T.js","assets/event.html-D43jNwMt.js","assets/star.html-DfrLdxKk.js","assets/theme.html-Bm-ac8A4.js","assets/index.html-CS-YMdrW.js","assets/date.html-BauLY7Uu.js","assets/pageation.html-B92751gT.js","assets/sqlserver-sync-to-mysql.html-B4hNB5Ll.js","assets/index.html-DGqYoNBj.js","assets/accept.html-ayOPZ6gU.js","assets/capital-vouchers.html-DwFHm41R.js","assets/ought-pay.html-BBdzY4JS.js","assets/ought-receive.html-CnudnY1w.js","assets/voucher.html-DkoMNzuI.js","assets/index.html-CBdSO5U7.js","assets/aa_bank.html-DN0co768.js","assets/assembly.html-Dj2POCGx.js","assets/balance-type.html-C6FfmuwY.js","assets/bank-account.html-CHBjlNSm.js","assets/bank.html-CJu9tXKv.js","assets/batch-property.html-iskL512Y.js","assets/capital-asset-types.html-DuTfpZh2.js","assets/capital-assets.html-w_Evb12C.js","assets/code-balance.html-SpA6aHKx.js","assets/code.html-DPwf6jfd.js","assets/currency.html-9RMy03KQ.js","assets/customer-class.html-DUpqc0v0.js","assets/customer-inventory.html-C56QHNbk.js","assets/customer-linker.html-jiRE60aC.js","assets/customer.html-BmrP6XQa.js","assets/department.html-Dw_MmChn.js","assets/digest.html-DSNeTeJH.js","assets/district-class.html-CWUuOcWf.js","assets/dsign.html-C8FTTiHV.js","assets/duty-level.html-DnppXheR.js","assets/duty-type.html-B6Ziew05.js","assets/duty.html-B2W-eSZE.js","assets/expense-item.html-CiqrzsOY.js","assets/expitem-class.html-13-eMzCu.js","assets/inventory-class.html-DREzCOJq.js","assets/inventory-free.html-CGTgrzGc.js","assets/inventory-position.html-P9-LLEMX.js","assets/inventory.html-DHTWXsbB.js","assets/job-grade-set.html-DjbEfkiL.js","assets/job-type.html-BL1BbIds.js","assets/job.html-U9_ww4Gz.js","assets/pay-condition.html-DopL0gm7.js","assets/person-type.html-CK4dZO4w.js","assets/person.html-CtdjpDy7.js","assets/position.html-f59vExdz.js","assets/purchase-type.html-Dr_Lw65C.js","assets/reason.html-B7aayEd7.js","assets/receive-send-type.html-3x4CmATT.js","assets/requirement-class.html-ClS_TVqS.js","assets/sale-type.html-BigQZxad.js","assets/shipping-choice.html-Dnue-7eX.js","assets/unit-account.html-CopnhdYT.js","assets/unit-class.html-DYbqCw02.js","assets/unit-doc.html-L6mRyM0Q.js","assets/unit-group.html-zLSSsee1.js","assets/unit.html-LSWHW271.js","assets/vendor-class.html-BKZsOhE8.js","assets/vendor-inventory.html-CNoZi6x0.js","assets/vendor.html-sP__VnLt.js","assets/vouch-rd.html-DU7LIrv5.js","assets/warehouse.html-CpF-s09q.js","assets/index.html-47OA1157.js","assets/materialout.html-CiU8YOkL.js","assets/productin.html-CJ8JKWBS.js","assets/purchasein.html-CW8rv8y6.js","assets/saleout.html-BRNJ9CK5.js","assets/transvouch.html-C09HTe44.js","assets/404.html-CTDiK8bF.js","assets/index.html-FQzOXkqy.js","assets/index.html-CPtyi37S.js","assets/index.html-Brgn1XLB.js","assets/index.html-DJifl6DC.js","assets/index.html-D9TgMXLJ.js","assets/index.html-CLDHJOWh.js","assets/index.html-BtLbk76O.js","assets/index.html-CZVVhzN9.js","assets/index.html-BnqEddq1.js","assets/index.html-DD1XY2yL.js","assets/index.html-CmixQEXV.js","assets/index.html-BWmQ8HOj.js","assets/index.html-D86WcMkx.js","assets/index.html-BC96XhRF.js","assets/index.html-DElmPZa7.js","assets/index.html-BR0nOnDP.js","assets/index.html-ldGKOeDq.js","assets/index.html-Dv8dx-aw.js","assets/index.html-BZM09TqB.js","assets/index.html-BPXds7FA.js","assets/index.html-PjWybUje.js","assets/index.html-BfGBRDIK.js","assets/index.html-DMbhPNy5.js","assets/index.html-BNxT8rqJ.js","assets/index.html-CvoeYAMU.js","assets/index.html-BZI1uKjq.js","assets/index.html-WBw_lv3X.js","assets/index.html-CPEs3BA-.js","assets/index.html-BuEjy9PE.js","assets/index.html-pXuf7zFx.js","assets/index.html-Bq0tjXde.js","assets/index.html-DYNvcj2C.js","assets/index.html-CsP8nJUL.js","assets/index.html-DEjnW8as.js","assets/index.html-CrJg64x2.js","assets/index.html-D2D2Yw1Q.js","assets/index.html-CPjKvZwe.js","assets/index.html-Dz1p5NxB.js","assets/index.html-BN-pX_sq.js","assets/index.html-CGuL2Z7z.js","assets/index.html-DLoQQ6yH.js","assets/index.html-DTH_zGji.js","assets/index.html-Bph9T5ap.js","assets/index.html-BELxrn_A.js","assets/index.html-BypWCf_Z.js","assets/index.html-CyZU2zvO.js","assets/index.html-C5vVs1r1.js","assets/index.html-Dd7AvMwZ.js","assets/index.html-nJRb-Clw.js","assets/index.html-Cy15iYdl.js","assets/index.html-4WM8PRyK.js","assets/index.html-Cvj8oCQ9.js","assets/index.html-DDCfu5D5.js","assets/index.html-BMMARt3F.js","assets/index.html-DJpXKBU0.js","assets/index.html-1dcuOjjj.js","assets/index.html-BcGUdvWW.js","assets/index.html-DUhxTbNx.js","assets/index.html-DXGlHnN3.js","assets/index.html-tKCYHLES.js","assets/index.html-CM76poNU.js","assets/index.html-DZHxsy4i.js","assets/index.html-BVf7leEX.js","assets/index.html-D0gqWvla.js","assets/index.html-BJIzNph7.js","assets/index.html-CDbdgT_g.js","assets/index.html-B3xMviU5.js","assets/index.html-C2MHxaT9.js","assets/index.html-CF3Oapwj.js","assets/index.html-C2v4fSOk.js","assets/index.html-DiLmIE2-.js","assets/index.html-BfaIKLr5.js","assets/index.html-Pr0D0tn_.js","assets/index.html-Bn4u19ZG.js","assets/index.html-CR62tIQZ.js","assets/index.html-BKjHKJQF.js","assets/index.html-DFzBsIz0.js","assets/index.html-DXD7aQtg.js","assets/index.html-BIGkqbLt.js","assets/index.html-BivC7oZM.js","assets/vue-repl-BQXUHJlG.js","assets/utils-B8VQ4rym-D7HXbP0h.js","assets/codemirror-editor-Ecq3Faue.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}