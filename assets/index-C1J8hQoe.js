(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var de,g,Wt,X,ft,Ut,$e,jt,Je,ze,Be,Ht,ce={},Yt=[],Yn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ne=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function Qe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function R(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?de.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return ae(e,i,r,o,null)}function ae(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Wt,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(a),a}function Xn(){return{current:null}}function B(e){return e.children}function F(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?G(e):null}function Xt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Xt(e)}}function qe(e){(!e.__d&&(e.__d=!0)&&X.push(e)&&!be.__r++||ft!==g.debounceRendering)&&((ft=g.debounceRendering)||Ut)(be)}function be(){var e,t,n,r,o,a,i,s;for(X.sort($e);e=X.shift();)e.__d&&(t=X.length,r=void 0,a=(o=(n=e).__v).__e,i=[],s=[],n.__P&&((r=$({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),Ke(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[a]:null,i,a??G(o),!!(32&o.__u),s),r.__v=o.__v,r.__.__k[r.__i]=r,Gt(i,r,s),r.__e!=a&&Xt(r)),X.length>t&&X.sort($e));be.__r=0}function Vt(e,t,n,r,o,a,i,s,l,f,m){var c,p,d,y,w,h,_=r&&r.__k||Yt,v=t.length;for(l=Vn(n,t,_,l,v),c=0;c<v;c++)(d=n.__k[c])!=null&&(p=d.__i===-1?ce:_[d.__i]||ce,d.__i=c,h=Ke(e,d,p,o,a,i,s,l,f,m),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&et(p.ref,null,d),m.push(d.ref,d.__c||y,d)),w==null&&y!=null&&(w=y),4&d.__u||p.__k===d.__k?l=Zt(d,l,e):typeof d.type=="function"&&h!==void 0?l=h:y&&(l=y.nextSibling),d.__u&=-7);return n.__e=w,l}function Vn(e,t,n,r,o){var a,i,s,l,f,m=n.length,c=m,p=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(l=a+p,(i=e.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?ae(null,i,null,null,null):Ne(i)?ae(B,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?ae(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,s=null,(f=i.__i=Zn(i,n,l,c))!==-1&&(c--,(s=n[f])&&(s.__u|=2)),s==null||s.__v===null?(f==-1&&p--,typeof i.type!="function"&&(i.__u|=4)):f!=l&&(f==l-1?p--:f==l+1?p++:(f>l?p--:p++,i.__u|=4))):e.__k[a]=null;if(c)for(a=0;a<m;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=G(s)),Jt(s,s));return r}function Zt(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Zt(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=G(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function z(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ne(e)?e.some(function(n){z(n,t)}):t.push(e)),t}function Zn(e,t,n,r){var o,a,i=e.key,s=e.type,l=t[n];if(l===null||l&&i==l.key&&s===l.type&&!(2&l.__u))return n;if(r>(l!=null&&!(2&l.__u)?1:0))for(o=n-1,a=n+1;o>=0||a<t.length;){if(o>=0){if((l=t[o])&&!(2&l.__u)&&i==l.key&&s===l.type)return o;o--}if(a<t.length){if((l=t[a])&&!(2&l.__u)&&i==l.key&&s===l.type)return a;a++}}return-1}function dt(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Yn.test(t)?n:n+"px"}function pe(e,t,n,r,o){var a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||dt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||dt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(jt,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=Je,e.addEventListener(t,a?Be:ze,a)):e.removeEventListener(t,a?Be:ze,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function mt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Je++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function Ke(e,t,n,r,o,a,i,s,l,f){var m,c,p,d,y,w,h,_,v,A,S,L,N,Y,V,te,j,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[s=t.__e=n.__e]),(m=g.__b)&&m(t);e:if(typeof D=="function")try{if(_=t.props,v="prototype"in D&&D.prototype.render,A=(m=D.contextType)&&r[m.__c],S=m?A?A.props.value:m.__:r,n.__c?h=(c=t.__c=n.__c).__=c.__E:(v?t.__c=c=new D(_,S):(t.__c=c=new F(_,S),c.constructor=D,c.render=Jn),A&&A.sub(c),c.props=_,c.state||(c.state={}),c.context=S,c.__n=r,p=c.__d=!0,c.__h=[],c._sb=[]),v&&c.__s==null&&(c.__s=c.state),v&&D.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=$({},c.__s)),$(c.__s,D.getDerivedStateFromProps(_,c.__s))),d=c.props,y=c.state,c.__v=t,p)v&&D.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),v&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(v&&D.getDerivedStateFromProps==null&&_!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(_,S),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(_,c.__s,S)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(c.props=_,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(ne){ne&&(ne.__=t)}),L=0;L<c._sb.length;L++)c.__h.push(c._sb[L]);c._sb=[],c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(_,c.__s,S),v&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,y,w)})}if(c.context=S,c.props=_,c.__P=e,c.__e=!1,N=g.__r,Y=0,v){for(c.state=c.__s,c.__d=!1,N&&N(t),m=c.render(c.props,c.state,c.context),V=0;V<c._sb.length;V++)c.__h.push(c._sb[V]);c._sb=[]}else do c.__d=!1,N&&N(t),m=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Y<25);c.state=c.__s,c.getChildContext!=null&&(r=$($({},r),c.getChildContext())),v&&!p&&c.getSnapshotBeforeUpdate!=null&&(w=c.getSnapshotBeforeUpdate(d,y)),s=Vt(e,Ne(te=m!=null&&m.type===B&&m.key==null?m.props.children:m)?te:[te],t,n,r,o,a,i,s,l,f),c.base=t.__e,t.__u&=-161,c.__h.length&&i.push(c),h&&(c.__E=c.__=null)}catch(ne){if(t.__v=null,l||a!=null)if(ne.then){for(t.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__e=s}else for(j=a.length;j--;)Qe(a[j]);else t.__e=n.__e,t.__k=n.__k;g.__e(ne,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Gn(n.__e,t,n,r,o,a,i,l,f);return(m=g.diffed)&&m(t),128&t.__u?void 0:s}function Gt(e,t,n){for(var r=0;r<n.length;r++)et(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){g.__e(a,o.__v)}})}function Gn(e,t,n,r,o,a,i,s,l){var f,m,c,p,d,y,w,h=n.props,_=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((d=a[f])&&"setAttribute"in d==!!v&&(v?d.localName==v:d.nodeType==3)){e=d,a[f]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(o,v,_.is&&_),s&&(g.__m&&g.__m(t,a),s=!1),a=null}if(v===null)h===_||s&&e.data===_||(e.data=_);else{if(a=a&&de.call(e.childNodes),h=n.props||ce,!s&&a!=null)for(h={},f=0;f<e.attributes.length;f++)h[(d=e.attributes[f]).name]=d.value;for(f in h)if(d=h[f],f!="children"){if(f=="dangerouslySetInnerHTML")c=d;else if(!(f in _)){if(f=="value"&&"defaultValue"in _||f=="checked"&&"defaultChecked"in _)continue;pe(e,f,null,d,o)}}for(f in _)d=_[f],f=="children"?p=d:f=="dangerouslySetInnerHTML"?m=d:f=="value"?y=d:f=="checked"?w=d:s&&typeof d!="function"||h[f]===d||pe(e,f,d,h[f],o);if(m)s||c&&(m.__html===c.__html||m.__html===e.innerHTML)||(e.innerHTML=m.__html),t.__k=[];else if(c&&(e.innerHTML=""),Vt(e,Ne(p)?p:[p],t,n,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:n.__k&&G(n,0),s,l),a!=null)for(f=a.length;f--;)Qe(a[f]);s||(f="value",v=="progress"&&y==null?e.removeAttribute("value"):y!==void 0&&(y!==e[f]||v=="progress"&&!y||v=="option"&&y!==h[f])&&pe(e,f,y,h[f],o),f="checked",w!==void 0&&w!==e[f]&&pe(e,f,w,h[f],o))}return e}function et(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){g.__e(o,n)}}function Jt(e,t,n){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||et(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){g.__e(a,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Jt(r[o],t,n||typeof e.type!="function");n||Qe(e.__e),e.__c=e.__=e.__e=void 0}function Jn(e,t,n){return this.constructor(e,n)}function J(e,t,n){var r,o,a,i;t==document&&(t=document.documentElement),g.__&&g.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],Ke(t,e=(!r&&n||t).__k=R(B,null,[e]),o||ce,ce,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?de.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r,i),Gt(a,e,i)}function Qt(e,t){J(e,t,Qt)}function Qn(e,t,n){var r,o,a,i,s=$({},e.props);for(a in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)a=="key"?r=t[a]:a=="ref"?o=t[a]:s[a]=t[a]===void 0&&i!==void 0?i[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?de.call(arguments,2):n),ae(e.type,s,r||e.key,o||e.ref,null)}function Kn(e,t){var n={__c:t="__cC"+Ht++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=new Set,(a={})[t]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.forEach(function(s){s.__e=!0,qe(s)})},this.sub=function(i){o.add(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o&&o.delete(i),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}de=Yt.slice,g={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Wt=0,F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),qe(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qe(this))},F.prototype.render=B,X=[],Ut=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$e=function(e,t){return e.__v.__b-t.__v.__b},be.__r=0,jt=/(PointerCapture)$|Capture$/i,Je=0,ze=mt(!1),Be=mt(!0),Ht=0;var H,k,Oe,pt,Q=0,Kt=[],x=g,_t=x.__b,ht=x.__r,yt=x.diffed,gt=x.__c,vt=x.unmount,bt=x.__;function ee(e,t){x.__h&&x.__h(k,e,Q||t),Q=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ue(e){return Q=1,tt(sn,e)}function tt(e,t,n){var r=ee(H++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):sn(void 0,t),function(s){var l=r.__N?r.__N[0]:r.__[0],f=r.t(l,s);l!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=k,!k.u)){var o=function(s,l,f){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(p){return!!p.__c});if(m.every(function(p){return!p.__N}))return!a||a.call(this,s,l,f);var c=r.__c.props!==s;return m.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(c=!0)}}),a&&a.call(this,s,l,f)||c};k.u=!0;var a=k.shouldComponentUpdate,i=k.componentWillUpdate;k.componentWillUpdate=function(s,l,f){if(this.__e){var m=a;a=void 0,o(s,l,f),a=m}i&&i.call(this,s,l,f)},k.shouldComponentUpdate=o}return r.__N||r.__}function nt(e,t){var n=ee(H++,3);!x.__s&&rt(n.__H,t)&&(n.__=e,n.i=t,k.__H.__h.push(n))}function U(e,t){var n=ee(H++,4);!x.__s&&rt(n.__H,t)&&(n.__=e,n.i=t,k.__h.push(n))}function en(e){return Q=5,Ce(function(){return{current:e}},[])}function tn(e,t,n){Q=6,U(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ce(e,t){var n=ee(H++,7);return rt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function nn(e,t){return Q=8,Ce(function(){return e},t)}function rn(e){var t=k.context[e.__c],n=ee(H++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(k)),t.props.value):e.__}function on(e,t){x.useDebugValue&&x.useDebugValue(t?t(e):e)}function an(){var e=ee(H++,11);if(!e.__){for(var t=k.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function er(){for(var e;e=Kt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(We),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){k=null,_t&&_t(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),bt&&bt(e,t)},x.__r=function(e){ht&&ht(e),H=0;var t=(k=e.__c).__H;t&&(Oe===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(ye),t.__h.forEach(We),t.__h=[],H=0)),Oe=k},x.diffed=function(e){yt&&yt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Kt.push(t)!==1&&pt===x.requestAnimationFrame||((pt=x.requestAnimationFrame)||tr)(er)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Oe=k=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ye),n.__h=n.__h.filter(function(r){return!r.__||We(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(r,n.__v)}}),gt&&gt(e,t)},x.unmount=function(e){vt&&vt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ye(r)}catch(o){t=o}}),n.__H=void 0,t&&x.__e(t,n.__v))};var wt=typeof requestAnimationFrame=="function";function tr(e){var t,n=function(){clearTimeout(r),wt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);wt&&(t=requestAnimationFrame(n))}function ye(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function We(e){var t=k;e.__c=e.__(),k=t}function rt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function sn(e,t){return typeof t=="function"?t(e):t}function ln(e,t){for(var n in t)e[n]=t[n];return e}function Ue(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function cn(e,t){var n=t(),r=ue({t:{__:n,u:t}}),o=r[0].t,a=r[1];return U(function(){o.__=n,o.u=t,Te(o)&&a({t:o})},[e,n,t]),nt(function(){return Te(o)&&a({t:o}),e(function(){Te(o)&&a({t:o})})},[e]),n}function Te(e){var t,n,r=e.u,o=e.__;try{var a=r();return!((t=o)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function un(e){e()}function fn(e){return e}function dn(){return[!1,un]}var mn=U;function je(e,t){this.props=e,this.context=t}function nr(e,t){function n(o){var a=this.props.ref,i=a==o.ref;return!i&&a&&(a.call?a(null):a.current=null),t?!t(this.props,o)||!i:Ue(this.props,o)}function r(o){return this.shouldComponentUpdate=n,R(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(je.prototype=new F).isPureReactComponent=!0,je.prototype.shouldComponentUpdate=function(e,t){return Ue(this.props,e)||Ue(this.state,t)};var Et=g.__b;g.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Et&&Et(e)};var rr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function or(e){function t(n){var r=ln({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=rr,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var kt=function(e,t){return e==null?null:z(z(e).map(t))},ar={map:kt,forEach:kt,count:function(e){return e?z(e).length:0},only:function(e){var t=z(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:z},ir=g.__e;g.__e=function(e,t,n,r){if(e.then){for(var o,a=t;a=a.__;)if((o=a.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}ir(e,t,n,r)};var xt=g.unmount;function pn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=ln({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return pn(r,t,n)})),e}function _n(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return _n(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ge(){this.__u=0,this.o=null,this.__b=null}function hn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function sr(e){var t,n,r;function o(a){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return R(n,a)}return o.displayName="Lazy",o.__f=!0,o}function re(){this.i=null,this.l=null}g.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),xt&&xt(e)},(ge.prototype=new F).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var o=hn(r.__v),a=!1,i=function(){a||(a=!0,n.__R=null,o?o(s):s())};n.__R=i;var s=function(){if(!--r.__u){if(r.state.__a){var l=r.state.__a;r.__v.__k[0]=_n(l,l.__c.__P,l.__c.__O)}var f;for(r.setState({__a:r.__b=null});f=r.o.pop();)f.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},ge.prototype.componentWillUnmount=function(){this.o=[]},ge.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=pn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&R(B,null,e.fallback);return o&&(o.__u&=-33),[R(B,null,t.__a?null:e.children),o]};var St=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function lr(e){return this.getChildContext=function(){return e.context},e.children}function cr(e){var t=this,n=e.h;t.componentWillUnmount=function(){J(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.h.insertBefore(r,o)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),J(R(lr,{context:t.context},e.__v),t.v)}function ur(e,t){var n=R(cr,{__v:e,h:t});return n.containerInfo=t,n}(re.prototype=new F).__a=function(e){var t=this,n=hn(t.__v),r=t.l.get(e);return r[0]++,function(o){var a=function(){t.props.revealOrder?(r.push(o),St(t,e,r)):o()};n?n(a):a()}},re.prototype.render=function(e){this.i=null,this.l=new Map;var t=z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},re.prototype.componentDidUpdate=re.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){St(e,n,t)})};var yn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,fr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,dr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,mr=/[A-Z0-9]/g,pr=typeof document<"u",_r=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function hr(e,t,n){return t.__k==null&&(t.textContent=""),J(e,t),typeof n=="function"&&n(),e?e.__c:null}function yr(e,t,n){return Qt(e,t),typeof n=="function"&&n(),e?e.__c:null}F.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(F.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Nt=g.event;function gr(){}function vr(){return this.cancelBubble}function br(){return this.defaultPrevented}g.event=function(e){return Nt&&(e=Nt(e)),e.persist=gr,e.isPropagationStopped=vr,e.isDefaultPrevented=br,e.nativeEvent=e};var ot,wr={enumerable:!1,configurable:!0,get:function(){return this.class}},Ct=g.vnode;g.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={},a=r.indexOf("-")===-1;for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||pr&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||_r(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":dr.test(i)&&(i=l):l=i="oninput":a&&fr.test(i)?i=i.replace(mr,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=z(n.children).forEach(function(f){f.props.selected=o.value.indexOf(f.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=z(n.children).forEach(function(f){f.props.selected=o.multiple?o.defaultValue.indexOf(f.props.value)!=-1:o.defaultValue==f.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",wr)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=yn,Ct&&Ct(e)};var At=g.__r;g.__r=function(e){At&&At(e),ot=e.__c};var Pt=g.diffed;g.diffed=function(e){Pt&&Pt(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),ot=null};var Er={ReactCurrentDispatcher:{current:{readContext:function(e){return ot.__n[e.__c].props.value},useCallback:nn,useContext:rn,useDebugValue:on,useDeferredValue:fn,useEffect:nt,useId:an,useImperativeHandle:tn,useInsertionEffect:mn,useLayoutEffect:U,useMemo:Ce,useReducer:tt,useRef:en,useState:ue,useSyncExternalStore:cn,useTransition:dn}}};function kr(e){return R.bind(null,e)}function Ae(e){return!!e&&e.$$typeof===yn}function xr(e){return Ae(e)&&e.type===B}function Sr(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Nr(e){return Ae(e)?Qn.apply(null,arguments):e}function Cr(e){return!!e.__k&&(J(null,e),!0)}function Ar(e){return e&&(e.base||e.nodeType===1&&e)||null}var Pr=function(e,t){return e(t)},Ir=function(e,t){return e(t)},Or=B,Tr=Ae,u={useState:ue,useId:an,useReducer:tt,useEffect:nt,useLayoutEffect:U,useInsertionEffect:mn,useTransition:dn,useDeferredValue:fn,useSyncExternalStore:cn,startTransition:un,useRef:en,useImperativeHandle:tn,useMemo:Ce,useCallback:nn,useContext:rn,useDebugValue:on,version:"18.3.1",Children:ar,render:hr,hydrate:yr,unmountComponentAtNode:Cr,createPortal:ur,createElement:R,createContext:Kn,createFactory:kr,cloneElement:Nr,createRef:Xn,Fragment:B,isValidElement:Ae,isElement:Tr,isFragment:xr,isMemo:Sr,findDOMNode:Ar,Component:F,PureComponent:je,memo:nr,forwardRef:or,flushSync:Ir,unstable_batchedUpdates:Pr,StrictMode:Or,Suspense:ge,SuspenseList:re,lazy:sr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Er};const ie={show:!1},Lr=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),s=document.querySelector(".App-footer"),l=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),m=document.querySelector(".App"),c=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),d=document.querySelector(".spotify-panel"),y=document.querySelectorAll(".icon-nav"),w=document.querySelectorAll(".rotate-counterclockwise");me.rotation=-90,m.classList.add("about-open"),a.classList.add("about-open"),i.classList.add("about-open"),s.classList.add("about-open"),l.classList.add("about-open"),f.classList.add("about-open"),e.classList.add("about-open"),t.classList.add("about-open"),n.classList.add("about-open"),p.style.transform="rotate(90deg)",d.style.transform="rotate(90deg)",i.style.display="block",a.style.display="none",l.style.display="flex",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform="rotateZ(-90deg)",t.style.borderRadius="70px 15px 70px 15px",t.style.transform="rotateZ(90deg)",n.style.transform="rotateZ(90deg)",c.style.transform="rotateZ(90deg)";for(let h of y)h.style.transform="rotateZ(90deg)";r.style.backgroundColor="#FF000099",r.style.color="#EEE",r.children[0].textContent="Back",r.onmouseover=()=>{r.style.backgroundColor="#FF0000DD",r.style.color="#FFF"},r.onmouseout=()=>{r.style.backgroundColor="#FF000099",r.style.color="#EEE"};for(let h of w)h.classList.remove("rotate-counterclockwise"),h.classList.add("rotate-clockwise"),h.classList.add("rotated-about");o.style.opacity="0",a.style.opacity="0",a.style.pointerEvents="none",s.style.opacity="0",l.style.opacity="1",l.style.pointerEvents="all"},gn=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),s=document.querySelector(".App-footer"),l=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),m=document.querySelector(".App"),c=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),d=document.querySelector(".spotify-panel"),y=document.querySelectorAll(".icon-nav"),w=document.querySelectorAll(".rotated-about");me.rotation=0,m.classList.remove("about-open"),a.classList.remove("about-open"),i.classList.remove("about-open"),s.classList.remove("about-open"),l.classList.remove("about-open"),f.classList.remove("about-open"),e.classList.remove("about-open"),t.classList.remove("about-open"),n.classList.remove("about-open"),p.style.transform="rotate(0deg)",d.style.transform="rotate(0deg)",a.style.display="block",l.style.display="none",window.innerWidth<=678?t.style.transition="none":t.style.transition="ease 0.2s",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform="rotateZ(0deg)",t.style.borderRadius="15px 70px 15px 70px",t.style.transform="rotateZ(0deg)",n.style.transform="rotateZ(0deg)",c.style.transform="rotateZ(0deg)";for(let h of y)h.style.transform="rotateZ(0deg)";r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)",r.children[0].textContent="About",r.onmouseover=()=>{r.style.backgroundColor="#0000000D",r.style.color="rgb(0, 0,0, 0.6)"},r.onmouseout=()=>{r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)"};for(let h of w)h.classList.remove("rotated-about"),h.classList.remove("rotate-clockwise"),h.classList.add("rotate-counterclockwise");o.style.opacity="1",a.style.opacity="1",a.style.pointerEvents="all",s.style.opacity="1",l.style.opacity="0",l.style.pointerEvents="none"},Dr=()=>{P.show&&(P.show=!1,vn(!1,!1)),ie.show=!ie.show,ie.show?Lr():gn()},P={show:!1,card3D:!1,onAbout:!1},Mr=(e,t)=>{const n=document.querySelector(".Card"),r=document.querySelector(".App-about"),o=document.querySelector(".App-header"),a=document.querySelector(".App-footer"),i=document.querySelector(".App-portfolio"),s=document.getElementById("portfolio-nav"),l=document.querySelector(".pp_logo");l.style.transition="none",e?setTimeout(()=>{i.style.opacity="1",i.style.display="flex",s.style.backgroundColor="#FF000099",s.style.color="#EEE",s.children[0].textContent="Back",s.onmouseover=()=>{s.style.backgroundColor="#FF0000DD",s.style.color="#FFF"},s.onmouseout=()=>{s.style.backgroundColor="#FF000099",s.style.color="#EEE"},r.style.display="none",o.style.opacity="0",o.style.position="absolute",a.style.display="none",l.style.pointerEvents="none"},250):(i.style.opacity="1",i.style.display="flex",s.style.backgroundColor="#FF000099",s.style.color="#EEE",s.children[0].textContent="Back",s.onmouseover=()=>{s.style.backgroundColor="#FF0000DD",s.style.color="#FFF"},s.onmouseout=()=>{s.style.backgroundColor="#FF000099",s.style.color="#EEE"},r.style.display="none",o.style.opacity="0",o.style.position="absolute",a.style.display="none",l.style.pointerEvents="none"),P.onAbout?(n.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",n.style.transform="rotateX(0deg)",P.onAbout=!1):(n.style.transitionProperty="none",n.style.transform="rotateX(360deg)",setTimeout(()=>{n.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",n.style.transform="rotateX(0deg)",P.card3D&&(at(),setTimeout(()=>{we()},450))},50))},vn=(e,t)=>{const n=document.querySelector(".Card"),r=document.querySelector(".App-about"),o=document.querySelector(".App-header"),a=document.querySelector(".App-footer"),i=document.querySelector(".App-portfolio"),s=document.getElementById("portfolio-nav"),l=document.querySelector(".pp_logo");t&&(l.style.transition="ease 0.2s"),e?setTimeout(()=>{i.style.opacity="0",i.style.display="none",s.style.backgroundColor="#00000008",s.style.color="rgb(0, 0,0, 0.2)",s.children[0].textContent="Portfolio",s.onmouseover=()=>{s.style.backgroundColor="#0000000D",s.style.color="rgb(0, 0,0, 0.6)"},s.onmouseout=()=>{s.style.backgroundColor="#00000008",s.style.color="rgb(0, 0,0, 0.2)"},r.style.display="block",o.style.opacity="1",o.style.position="static",a.style.display="flex",l.style.pointerEvents="all"},250):(i.style.opacity="0",i.style.display="none",s.style.backgroundColor="#00000008",s.style.color="rgb(0, 0,0, 0.2)",s.children[0].textContent="Portfolio",s.onmouseover=()=>{s.style.backgroundColor="#0000000D",s.style.color="rgb(0, 0,0, 0.6)"},s.onmouseout=()=>{s.style.backgroundColor="#00000008",s.style.color="rgb(0, 0,0, 0.2)"},r.style.display="block",o.style.opacity="1",o.style.position="static",a.style.display="flex",l.style.pointerEvents="all"),t&&(P.onAbout?(n.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",n.style.transform="rotateX(0deg)",P.onAbout=!1):(n.style.transitionProperty="none",n.style.transform="rotateX(360deg)",setTimeout(()=>{n.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",n.style.transform="rotateX(0deg)",P.card3D&&(at(),setTimeout(()=>{we()},450))},50)))},Fr=()=>{let e=!0;ie.show&&(P.onAbout=!0,ie.show=!1,e=!1,gn()),P.show=!P.show,P.show?Mr(e):vn(e,!0)},me={rotation:0},Rr=(e,t)=>n=>{const r=(window.innerWidth/2-n.pageX)/10,o=(window.innerHeight/2-n.pageY)/20;t.style.cursor="pointer",(me.rotation==0?r>0&&o>0:r>0&&o<0)?e.style.opacity="1":e.style.opacity="0"},$r=e=>()=>{e.style.opacity="0"},zr=e=>t=>{const n=(window.innerWidth/2-t.pageX)/10,r=(window.innerHeight/2-t.pageY)/20,o=me.rotation;e.style.transition="transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease",e.style.transform=`rotateZ(${o}deg) rotateY(${o==0?n:r*-1}deg) rotateX(${o==0?r*-1:n*-1}deg)`,e.style.boxShadow=`${o==0?n*-1:r}px ${o==0?r*-1:n*-1}px 30px rgba(0, 0, 0, 0.4) `},Br=(e,t)=>()=>{t.style.opacity="0",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform=`rotateZ(${me.rotation}deg) rotateY(0deg) rotateX(0deg)`,e.style.boxShadow="0px 0px 15px rgba(0, 0, 0, 0.4)"},O={showSwitch:null,hideSwitch:null,cardFollowCursor3D:null,cardResetState3D:null},qr=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch"),n=document.querySelector(".slider");O.showSwitch=Rr(t,n),O.hideSwitch=$r(t),e.addEventListener("mousemove",O.showSwitch,!1),e.addEventListener("mouseout",O.hideSwitch,!1)},we=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch");O.cardFollowCursor3D=zr(e),O.cardResetState3D=Br(e,t),e.addEventListener("mousemove",O.cardFollowCursor3D,!1),e.addEventListener("mouseout",O.cardResetState3D,!1),P.card3D=!0},at=()=>{const e=document.getElementById("Card");e.removeEventListener("mousemove",O.cardFollowCursor3D,!1),e.removeEventListener("mouseout",O.cardResetState3D,!1),O.cardResetState3D(),P.card3D=!1};function Wr(){const[e,t]=u.useState(!1);return U(()=>{const n=document.getElementById("pp"),r=document.querySelector(".pp_logo"),o=document.querySelector(".threeD-info");n.addEventListener("mouseleave",()=>{o.style.opacity="0",o.style.scale="1.0"}),n.addEventListener("mouseenter",()=>{r.style.transition="ease 0.2s",o.style.opacity="1",o.style.scale="1.05"}),n.addEventListener("mousedown",a=>{o.style.opacity="1",o.style.scale="1.1",o.style.display="none"}),n.addEventListener("mouseup",a=>{o.style.opacity="1",o.style.scale="1.05"}),localStorage.getItem("mode3D")==="true"?(t(!0),o.style.display="none",setTimeout(()=>{we(),document.getElementById("pp").style.pointerEvents="auto"},2e3)):(t(!1),setTimeout(()=>{document.getElementById("pp").style.pointerEvents="auto"},2e3))},[]),u.createElement("header",{style:"pointer-events: none;",className:"App-header"},u.createElement("p",null,u.createElement("a",{id:"pp",onMouseDown:n=>e?(t(!1),at(),localStorage.setItem("mode3D","false")):(t(!0),we(),O.cardFollowCursor3D(n),localStorage.setItem("mode3D","true"))},u.createElement("img",{className:"pp_logo",src:"https://avatars.githubusercontent.com/u/18515671?v=4",alt:"Berikai",onLoad:()=>{document.querySelector(".App").style.opacity=1,document.querySelector(".Card").style.animation="CardFrame 2s ease-in-out",document.querySelector(".pp_logo").style.animation="ProfileFrame 2s ease-in-out"}}),u.createElement("p",{className:"threeD-info"},"Tap to switch 3D"))),u.createElement("div",{className:"username"},"Berikai",u.createElement("div",{className:"aka"},"also known as Verdant")))}function Ur(){return u.createElement("div",{className:"App-about"},u.createElement("p",{className:"text-info"},"I love software tech and bass music"),u.createElement("ul",{className:"ul-padding"},u.createElement("li",{className:"li-element"},"🇹🇷   İzmir, Turkey "),u.createElement("li",{className:"li-element"},"🖥️   Software Enthusiast"),u.createElement("li",{className:"li-element"},"🎵   Dubstep, Drum 'n Bass, Experimental")),u.createElement("p",{className:"socials",align:"left"},u.createElement("a",{className:"padding-inline",href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},u.createElement("img",{src:"https://www.svgrepo.com/show/35013/soundcloud.svg",width:"24",height:"24",alt:"Soundcloud"})),u.createElement("a",{className:"padding-inline",href:"https://discordapp.com/users/385498463745343490",target:"_blank",rel:"noreferrer"},u.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg",width:"24",height:"24",alt:"Discord"})),u.createElement("a",{className:"padding-inline",href:"https://www.github.com/Berikai",target:"_blank",rel:"noreferrer"},u.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",width:"24",height:"24",alt:"Github"})),u.createElement("a",{className:"padding-inline",href:"http://www.instagram.com/verdantbass",target:"_blank",rel:"noreferrer"},u.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg",width:"24",height:"24",alt:"Instagram"})),u.createElement("a",{className:"padding-inline",href:"https://www.twitter.com/verdantbass",target:"_blank",rel:"noreferrer"},u.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg",width:"24",height:"24",alt:"Twitter"}))))}function jr(){return u.createElement("div",{className:"App-about-extra",style:"opacity: 0;transition: transform 0.1s;"},u.createElement("p",{className:"title-about"},"About Me"),u.createElement("p",{className:"text-about"},"My name is Berkay Eren Konuk, but I usually go by the names ",u.createElement("b",null,"Berikai")," or ",u.createElement("b",null,"Verdant")," online."),u.createElement("p",{className:"text-about"},`I'm a big fan of open source and I love learning new things about software technologies. ...and "I use Arch, btw." 😄`),u.createElement("p",{className:"text-about"},"I create dubstep and drum and bass oriented experimental music. You can check out my music on ",u.createElement("a",{href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},"Soundcloud"),"."),u.createElement("p",{className:"text-about"},"I'm currently studying mechatronics engineering (sophomore) in ",u.createElement("i",null,"Izmir University of Economics"),"."))}const Hr="/assets/portfolio_bte-C1XSwvDI.png",Yr="/assets/portfolio_btew-CtmSI4CU.png",Xr="/assets/portfolio_pixbud-DaWc0YR1.gif",Vr="/assets/portfolio_oasis-C2m8d2oy.png";function Zr(){return u.createElement("div",{className:"App-portfolio",style:"opacity: 0;transition: transform 0.1s;"},u.createElement("p",{className:"title-about"},"Portfolio"),u.createElement("p",{className:"text-about"},"Here, you can find some of my projects"),u.createElement("div",{className:"portfolio"},u.createElement("div",{className:"portfolio-element"},u.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/bitwig-theme-editor"}),u.createElement("img",{className:"portfolio-img",width:68,src:Hr,alt:"Bitwig Theme Editor"}),u.createElement("div",{className:"portfolio-element-content dark"},u.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor"),u.createElement("div",{className:"portfolio-element-info dark"},"A patcher for Bitwig Studio, let's you customize the appearance of the most modular DAW in the world!"))),u.createElement("div",{className:"portfolio-element"},u.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://bitwig.berikai.dev"}),u.createElement("div",{className:"portfolio-element-content dark"},u.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor WebUI"),u.createElement("div",{className:"portfolio-element-info dark"},"Interactive visual playground to create and edit themes with ease and joy for Bitwig Studio")),u.createElement("img",{className:"portfolio-img",width:68,src:Yr,alt:"Bitwig Theme Editor WebUI"})),u.createElement("div",{className:"portfolio-element"},u.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/data/tree/main/pixbud",onClick:e=>{e.preventDefault(),window.confirm(`This project is not finished and as of now it's closed source. You'll be redirected to a github page to download the Windows binaries of its prototype.

Would you like to continue?`)&&window.open(e.target.href,"_blank")}}),u.createElement("img",{className:"portfolio-img",width:68,src:Xr,alt:"Pixbud"}),u.createElement("div",{className:"portfolio-element-content dark"},u.createElement("div",{className:"portfolio-element-title dark"},"Pixbud"),u.createElement("div",{className:"portfolio-element-info dark"},"Your desktop buddy, loves to hang around on the rooftops of your application windows"))),u.createElement("div",{className:"portfolio-element"},u.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/berikai/oasis-android"}),u.createElement("div",{className:"portfolio-element-content dark"},u.createElement("div",{className:"portfolio-element-title dark"},"OASIS Android"),u.createElement("div",{className:"portfolio-element-info dark"},"An unofficial mobile application for the student information system of Izmir University of Economics")),u.createElement("img",{className:"portfolio-img",width:68,src:Vr,alt:"OASIS Android"})),u.createElement("div",{className:"portfolio-element"},u.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/berikai/wr2-server-connector"}),u.createElement("img",{className:"portfolio-img",width:68,src:"https://user-images.githubusercontent.com/18515671/160943154-ebd29b37-19ec-4687-899a-24d555c46e7b.png"}),u.createElement("div",{className:"portfolio-element-content dark"},u.createElement("div",{className:"portfolio-element-title dark"},"WR2 Server Connector"),u.createElement("div",{className:"portfolio-element-info dark"},"A simple tool to play World Racing 2 online, since the official multiplayer tool is deprecated"))),u.createElement("div",{className:"text-about",style:"margin-top: -4px;"},"and many more, check my ",u.createElement("a",{href:"https://github.com/berikai",target:"_blank",rel:"noreferrer"},"Github"),"!")))}function Gr(){return u.createElement("footer",{className:"App-footer"},u.createElement("p",{className:"p-footer"},"Made with ",u.createElement("heart",null,"❤️")," by Berikai "))}const Le=e=>{const t=document.getElementById("Card"),n=document.querySelectorAll(".dark");if(e){document.body.style.backgroundColor="#222",document.body.style.color="#fff",t.style.backgroundColor="#222";for(let r of n)r.style.filter="invert(1)"}else{document.body.style.backgroundColor="#fff",document.body.style.color="#000",t.style.backgroundColor="#fff";for(let r of n)r.style.filter="invert(0)"}};function Jr(){return U(()=>{const e=document.getElementById("mode_switch");localStorage.getItem("themeMode")==="dark"&&(e.checked=!0,Le(!0)),setTimeout(()=>{e.addEventListener("change",t=>{t.target.checked?(localStorage.setItem("themeMode","dark"),Le(!0)):(localStorage.setItem("themeMode","light"),Le(!1))})},2e3)},[]),u.createElement("div",{className:"switch"},u.createElement("label",{id:"switch",className:"switch",style:"opacity: 0; transition: 0.4s, transform 0.2s;"},u.createElement("input",{id:"mode_switch",type:"checkbox"}),u.createElement("span",{className:"slider round"})))}function _e({id:e=null,text:t,rotation:n,action:r=()=>{},href:o=null}){return u.createElement("a",{...e?{id:e}:{},className:"nav-button dark",onClick:r,...o?{href:o}:{},target:"_blank",rel:"noreferrer"},u.createElement("span",{className:n=="rl"?"rotate-clockwise":"rotate-counterclockwise"},t))}const Qr=()=>{document.querySelector(".modal").style.opacity="0",setTimeout(()=>{document.querySelector(".modal").style.display="none"},200)};function Kr(){return u.createElement("div",{className:"modal",onClick:()=>Qr()},u.createElement("div",{className:"modal-content"},u.createElement("div",{className:"modal-box dark"},u.createElement("text",{className:"dark"},"The page you are trying to view is currently in development."),u.createElement("text",{className:"dark"},"Thank you for your patience."))))}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function se(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?se=function(t){return typeof t}:se=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function eo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function no(e,t,n){return to(e.prototype,t),e}function ro(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ro(e,o,n[o])})}return e}function bn(e,t){return oo(e)||ao(e,t)}function oo(e){if(Array.isArray(e))return e}function ao(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),s;!(r=(s=i.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(l){o=!0,a=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}var It=function(){},it={},wn={},io=null,En={mark:It,measure:It};try{typeof window<"u"&&(it=window),typeof document<"u"&&(wn=document),typeof MutationObserver<"u"&&(io=MutationObserver),typeof performance<"u"&&(En=performance)}catch{}var so=it.navigator||{},Ot=so.userAgent,Tt=Ot===void 0?"":Ot,Pe=it,C=wn,he=En;Pe.document;var st=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function";~Tt.indexOf("MSIE")||~Tt.indexOf("Trident/");var q="___FONT_AWESOME___",kn="fa",xn="svg-inline--fa",lo="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var De={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=Pe.FontAwesomeConfig||{};function co(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function uo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(C&&typeof C.querySelector=="function"){var fo=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fo.forEach(function(e){var t=bn(e,2),n=t[0],r=t[1],o=uo(co(n));o!=null&&(Sn[r]=o)})}var mo={familyPrefix:kn,replacementClass:xn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},He=b({},mo,Sn);He.autoReplaceSvg||(He.observeMutations=!1);var I=b({},He);Pe.FontAwesomeConfig=I;var W=Pe||{};W[q]||(W[q]={});W[q].styles||(W[q].styles={});W[q].hooks||(W[q].hooks={});W[q].shims||(W[q].shims=[]);var M=W[q],po=[],_o=function e(){C.removeEventListener("DOMContentLoaded",e),Ye=1,po.map(function(t){return t()})},Ye=!1;st&&(Ye=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Ye||C.addEventListener("DOMContentLoaded",_o));var lt="pending",Nn="settled",Ee="fulfilled",ke="rejected",ho=function(){},Cn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",yo=typeof setImmediate>"u"?setTimeout:setImmediate,oe=[],Xe;function go(){for(var e=0;e<oe.length;e++)oe[e][0](oe[e][1]);oe=[],Xe=!1}function xe(e,t){oe.push([e,t]),Xe||(Xe=!0,yo(go,0))}function vo(e,t){function n(o){ct(t,o)}function r(o){fe(t,o)}try{e(n,r)}catch(o){r(o)}}function An(e){var t=e.owner,n=t._state,r=t._data,o=e[n],a=e.then;if(typeof o=="function"){n=Ee;try{r=o(r)}catch(i){fe(a,i)}}Pn(a,r)||(n===Ee&&ct(a,r),n===ke&&fe(a,r))}function Pn(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||se(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(o){n||(n=!0,t===o?In(e,o):ct(e,o))},function(o){n||(n=!0,fe(e,o))}),!0}}catch(o){return n||fe(e,o),!0}return!1}function ct(e,t){(e===t||!Pn(e,t))&&In(e,t)}function In(e,t){e._state===lt&&(e._state=Nn,e._data=t,xe(bo,e))}function fe(e,t){e._state===lt&&(e._state=Nn,e._data=t,xe(wo,e))}function On(e){e._then=e._then.forEach(An)}function bo(e){e._state=Ee,On(e)}function wo(e){e._state=ke,On(e),!e._handled&&Cn&&global.process.emit("unhandledRejection",e._data,e)}function Eo(e){global.process.emit("rejectionHandled",e)}function T(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof T))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],vo(e,this)}T.prototype={constructor:T,_state:lt,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(ho),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===ke&&Cn&&xe(Eo,this)),this._state===Ee||this._state===ke?xe(An,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}};T.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new T(function(t,n){var r=[],o=0;function a(l){return o++,function(f){r[l]=f,--o||t(r)}}for(var i=0,s;i<e.length;i++)s=e[i],s&&typeof s.then=="function"?s.then(a(i),n):r[i]=s;o||t(r)})};T.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new T(function(t,n){for(var r=0,o;r<e.length;r++)o=e[r],o&&typeof o.then=="function"?o.then(t,n):t(o)})};T.resolve=function(e){return e&&se(e)==="object"&&e.constructor===T?e:new T(function(t){t(e)})};T.reject=function(e){return new T(function(t,n){n(e)})};var Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ko(e){if(!(!e||!st)){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=C.head.childNodes,r=null,o=n.length-1;o>-1;o--){var a=n[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=a)}return C.head.insertBefore(t,r),e}}var xo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Se(){for(var e=12,t="";e-- >0;)t+=xo[Math.random()*62|0];return t}function Tn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function So(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Tn(e[n]),'" ')},"").trim()}function Ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Dn(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function Mn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:f}}var Me={x:0,y:0,width:"100%",height:"100%"};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function No(e){return e.tag==="g"?e.children:[e]}function Co(e){var t=e.children,n=e.attributes,r=e.main,o=e.mask,a=e.maskId,i=e.transform,s=r.width,l=r.icon,f=o.width,m=o.icon,c=Mn({transform:i,containerWidth:f,iconWidth:s}),p={tag:"rect",attributes:b({},Me,{fill:"white"})},d=l.children?{children:l.children.map(Lt)}:{},y={tag:"g",attributes:b({},c.inner),children:[Lt(b({tag:l.tag,attributes:b({},l.attributes,c.path)},d))]},w={tag:"g",attributes:b({},c.outer),children:[y]},h="mask-".concat(a||Se()),_="clip-".concat(a||Se()),v={tag:"mask",attributes:b({},Me,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,w]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:No(m)},v]};return t.push(A,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(h,")")},Me)}),{children:t,attributes:n}}function Ao(e){var t=e.children,n=e.attributes,r=e.main,o=e.transform,a=e.styles,i=Ln(a);if(i.length>0&&(n.style=i),Dn(o)){var s=Mn({transform:o,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:b({},s.outer),children:[{tag:"g",attributes:b({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b({},r.icon.attributes,s.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function Po(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,a=e.styles,i=e.transform;if(Dn(i)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};o.style=Ln(b({},a,{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Io(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,a=e.symbol,i=a===!0?"".concat(t,"-").concat(I.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b({},o,{id:i}),children:r}]}]}function Oo(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,a=e.iconName,i=e.transform,s=e.symbol,l=e.title,f=e.maskId,m=e.titleId,c=e.extra,p=e.watchable,d=p===void 0?!1:p,y=r.found?r:n,w=y.width,h=y.height,_=o==="fak",v=_?"":"fa-w-".concat(Math.ceil(w/h*16)),A=[I.replacementClass,a?"".concat(I.familyPrefix,"-").concat(a):"",v].filter(function(j){return c.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(c.classes).join(" "),S={children:[],attributes:b({},c.attributes,{"data-prefix":o,"data-icon":a,class:A,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(h)})},L=_&&!~c.classes.indexOf("fa-fw")?{width:"".concat(w/h*16*.0625,"em")}:{};d&&(S.attributes[lo]=""),l&&S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(m||Se())},children:[l]});var N=b({},S,{prefix:o,iconName:a,main:n,mask:r,maskId:f,transform:i,symbol:s,styles:b({},L,c.styles)}),Y=r.found&&n.found?Co(N):Ao(N),V=Y.children,te=Y.attributes;return N.children=V,N.attributes=te,s?Io(N):Po(N)}var Dt=function(){};I.measurePerformance&&he&&he.mark&&he.measure;var Fe=function(t,n,r,o){var a=Object.keys(t),i=a.length,s=n,l,f,m;for(r===void 0?(l=1,m=t[a[0]]):(l=0,m=r);l<i;l++)f=a[l],m=s(m,t[f],f,t);return m};function Fn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,a=Object.keys(t).reduce(function(i,s){var l=t[s],f=!!l.icon;return f?i[l.iconName]=l.icon:i[s]=l,i},{});typeof M.hooks.addPack=="function"&&!o?M.hooks.addPack(e,a):M.styles[e]=b({},M.styles[e]||{},a),e==="fas"&&Fn("fa",t)}var Mt=M.styles,To=M.shims,Rn=function(){var t=function(o){return Fe(Mt,function(a,i,s){return a[s]=Fe(i,o,{}),a},{})};t(function(r,o,a){return o[3]&&(r[o[3]]=a),r}),t(function(r,o,a){var i=o[2];return r[a]=a,i.forEach(function(s){r[s]=a}),r});var n="far"in Mt;Fe(To,function(r,o){var a=o[0],i=o[1],s=o[2];return i==="far"&&!n&&(i="fas"),r[a]={prefix:i,iconName:s},r},{})};Rn();M.styles;function Ft(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function $n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,a=o===void 0?[]:o;return typeof e=="string"?Tn(e):"<".concat(t," ").concat(So(r),">").concat(a.map($n).join(""),"</").concat(t,">")}var Lo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,o){var a=o.toLowerCase().split("-"),i=a[0],s=a.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n):n};function Ve(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}Ve.prototype=Object.create(Error.prototype);Ve.prototype.constructor=Ve;var Ie={fill:"currentColor"},zn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};b({},Ie,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ut=b({},zn,{attributeName:"opacity"});b({},Ie,{cx:"256",cy:"364",r:"28"}),b({},zn,{attributeName:"r",values:"28;14;28;28;14;28;"}),b({},ut,{values:"1;0;1;1;0;1;"});b({},Ie,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),b({},ut,{values:"1;0;0;0;0;1;"});b({},Ie,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),b({},ut,{values:"0;0;1;1;0;0;"});M.styles;function Rt(e){var t=e[0],n=e[1],r=e.slice(4),o=bn(r,1),a=o[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(I.familyPrefix,"-").concat(De.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(De.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(De.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:i}}M.styles;var Do=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Mo(){var e=kn,t=xn,n=I.familyPrefix,r=I.replacementClass,o=Do;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var Fo=function(){function e(){eo(this,e),this.definitions={}}return no(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=b({},n.definitions[s]||{},i[s]),Fn(s,i[s]),Rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(a){var i=o[a],s=i.prefix,l=i.iconName,f=i.icon;n[s]||(n[s]={}),n[s][l]=f}),n}}]),e}();function Ro(){I.autoAddCss&&!zt&&(ko(Mo()),zt=!0)}function $o(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return $n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(st){var r=C.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $t(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return Ft(Bo.definitions,n,r)||Ft(M.styles,n,r)}function zo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$t(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:$t(o||{})),e(r,b({},n,{mask:o}))}}var Bo=new Fo,zt=!1,qo={transform:function(t){return Lo(t)}},Wo=zo(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Z:n,o=t.symbol,a=o===void 0?!1:o,i=t.mask,s=i===void 0?null:i,l=t.maskId,f=l===void 0?null:l,m=t.title,c=m===void 0?null:m,p=t.titleId,d=p===void 0?null:p,y=t.classes,w=y===void 0?[]:y,h=t.attributes,_=h===void 0?{}:h,v=t.styles,A=v===void 0?{}:v;if(e){var S=e.prefix,L=e.iconName,N=e.icon;return $o(b({type:"icon"},e),function(){return Ro(),I.autoA11y&&(c?_["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(d||Se()):(_["aria-hidden"]="true",_.focusable="false")),Oo({icons:{main:Rt(N),mask:s?Rt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:L,transform:b({},Z,r),symbol:a,title:c,maskId:f,titleId:d,extra:{attributes:_,styles:A,classes:w}})})}});function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bn={exports:{}},jo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ho=jo,Yo=Ho;function qn(){}function Wn(){}Wn.resetWarningCache=qn;var Xo=function(){function e(r,o,a,i,s,l){if(l!==Yo){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Wn,resetWarningCache:qn};return n.PropTypes=n,n};Bn.exports=Xo();var Vo=Bn.exports;const E=Uo(Vo);function ve(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ve=function(t){return typeof t}:ve=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){le(e,o,n[o])})}return e}function Zo(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Go(e,t){if(e==null)return{};var n=Zo(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ge(e){return Jo(e)||Qo(e)||Ko()}function Jo(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Qo(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Ko(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Un(e){return typeof e!="string"?e:(e=e.replace(/[-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.charAt(0).toLowerCase()+e.substring(1))}function ea(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ta(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=Un(n.slice(0,r)),a=n.slice(r+1).trim();return o.startsWith("webkit")?t[ea(o)]=a:t[o]=a,t},{})}function jn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return jn(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,f){var m=t.attributes[f];switch(f){case"class":l.attrs.className=m,delete t.attributes.class;break;case"style":l.attrs.style=ta(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=m:l.attrs[Un(f)]=m}return l},{attrs:{}}),a=n.style,i=a===void 0?{}:a,s=Go(n,["style"]);return o.attrs.style=Ze({},o.attrs.style,i),e.apply(void 0,[t.tag,Ze({},o.attrs,s)].concat(Ge(r)))}var Hn=!1;try{Hn=!0}catch{}function na(){if(!Hn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Re(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?le({},e,t):{}}function ra(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},le(t,"fa-".concat(e.size),e.size!==null),le(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),le(t,"fa-pull-".concat(e.pull),e.pull!==null),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bt(e){if(e===null)return null;if(ve(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function K(e){var t=e.icon,n=e.mask,r=e.symbol,o=e.className,a=e.title,i=Bt(t),s=Re("classes",[].concat(Ge(ra(e)),Ge(o.split(" ")))),l=Re("transform",typeof e.transform=="string"?qo.transform(e.transform):e.transform),f=Re("mask",Bt(n)),m=Wo(i,Ze({},s,l,f,{symbol:r,title:a}));if(!m)return na("Could not find icon",i),null;var c=m.abstract,p={};return Object.keys(e).forEach(function(d){K.defaultProps.hasOwnProperty(d)||(p[d]=e[d])}),oa(c[0],p)}K.displayName="FontAwesomeIcon";K.propTypes={border:E.bool,className:E.string,mask:E.oneOfType([E.object,E.array,E.string]),fixedWidth:E.bool,inverse:E.bool,flip:E.oneOf(["horizontal","vertical","both"]),icon:E.oneOfType([E.object,E.array,E.string]),listItem:E.bool,pull:E.oneOf(["right","left"]),pulse:E.bool,rotation:E.oneOf([90,180,270]),size:E.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:E.bool,symbol:E.oneOfType([E.bool,E.string]),title:E.string,transform:E.oneOfType([E.string,E.object])};K.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var oa=jn.bind(null,R);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const qt={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};function aa(){return u.createElement("nav",{className:"navbar"},u.createElement("div",{className:"navbar-half1"},u.createElement(_e,{id:"about-nav",text:"About",rotation:"rl",action:()=>Dr()}),u.createElement(_e,{link:!0,text:u.createElement(u.Fragment,null,u.createElement(K,{className:"icon-nav-rl",size:"xs",icon:qt}),u.createElement(u.Fragment,null,"Blog")),rotation:"rl",href:"https://blog.berikai.dev"})),u.createElement("div",{className:"navbar-half2"},u.createElement(_e,{link:!0,text:u.createElement(u.Fragment,null,u.createElement(K,{className:"icon-nav-lr",size:"xs",icon:qt}),u.createElement(u.Fragment,null,"Console")),rotation:"lr",href:"https://console.berikai.dev"}),u.createElement(_e,{id:"portfolio-nav",text:"Portfolio",rotation:"lr",action:()=>Fr()})))}function ia(){var s,l,f,m,c,p,d;let e={};const[t,n]=ue({}),[r,o]=ue(0);let a=[];const i=()=>{const y=document.querySelector(".spotify"),w=document.querySelector(".spotify-panel"),h=document.querySelector(".spotify-container");fetch("https://api.berikai.dev/spotify/current").then(_=>_.json()).then(_=>{var A;if(_.error){(_.error!="Not authenticated"||_.error!="No track playing")&&console.error("Spotify API Error: "+_.error),h.style.opacity=0,y.style.opacity=0,y.style.pointerEvents="none";return}h.style.opacity=1,y.style.opacity=1,y.style.pointerEvents="all",a.forEach(S=>clearInterval(S)),e=_,n(_),w.style.opacity==1?y.getElementsByTagName("a")[0].href=(A=e.item)==null?void 0:A.external_urls.spotify:y.getElementsByTagName("a")[0].removeAttribute("href"),o(_.progress_ms);const v=setInterval(()=>{o(S=>{var N;const L=S+1e3;return L>=((N=_.item)==null?void 0:N.duration_ms)&&(a.forEach(Y=>clearInterval(Y)),i(),console.log("Song ended, fetching new song...")),L})},1e3);a.push(v)})};return U(()=>{setTimeout(()=>{const y=document.querySelector(".spotify"),w=document.querySelector(".spotify-panel"),h=document.querySelector(".spotify-container");i(),setInterval(()=>{console.log("Fetching current playing song..."),i()},2e4),y.addEventListener("mousemove",()=>{w.style.opacity=1,setTimeout(()=>{var _;y.getElementsByTagName("a")[0].href=(_=e.item)==null?void 0:_.external_urls.spotify},200)}),h.addEventListener("mouseleave",()=>{w.style.opacity=0,setTimeout(()=>{y.getElementsByTagName("a")[0].removeAttribute("href")},200)}),h.style.opacity=1},2e3)},[]),u.createElement("div",{className:"spotify-container",style:"opacity: 0;"},u.createElement("div",{className:"spotify-panel"},u.createElement("div",{className:"spotify-panel-content dark"},u.createElement("img",{className:"spotify-artwork dark",src:(s=t.item)==null?void 0:s.album.images[2].url,width:"33"}),u.createElement("div",{className:"spotify-info dark"},u.createElement("div",{className:"text-spotify",style:"display:flex;justify-content:space-between;font-size: 8px;"},u.createElement("span",null,"I'm currently listening"),u.createElement("span",null,Math.floor(r/6e4),":",Math.floor(r%6e4/1e3).toFixed(0).padStart(2,"0")," / ",Math.floor(((l=t.item)==null?void 0:l.duration_ms)/6e4),":",Math.floor(((f=t.item)==null?void 0:f.duration_ms)%6e4/1e3).toFixed(0).padStart(2,"0"))),u.createElement("div",{className:"text-spotify"},u.createElement("b",null,((m=t.item)==null?void 0:m.artists.length)<4?(c=t.item)==null?void 0:c.artists.map(y=>y.name).join(", "):(p=t.item)==null?void 0:p.artists[0].name," - ",(d=t.item)==null?void 0:d.name))))),u.createElement("div",{className:"spotify",style:"opacity: 0;"},u.createElement("a",{target:"_blank",rel:"noreferrer"},u.createElement("img",{id:"spotify-img",src:"https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",width:"24"}))))}function sa(){return U(()=>{setTimeout(()=>{qr()},2e3)},[]),u.createElement("div",{className:"App",style:"opacity: 0; transition: opacity 0.2s;"},u.createElement(Kr,null),u.createElement("div",{className:"App-scale"},u.createElement("div",{id:"Card",className:"Card"},u.createElement(Jr,null),u.createElement(aa,null),u.createElement(Zr,null),u.createElement(Wr,null),u.createElement(Ur,null),u.createElement(jr,null),u.createElement(Gr,null),u.createElement(ia,null))))}J(u.createElement(sa,null),document.getElementById("root"));
