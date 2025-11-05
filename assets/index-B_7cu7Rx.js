(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var de,h,Yt,Y,dt,Vt,Be,Xt,et,We,Ue,Zt,ue={},Gt=[],Vn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Se=Array.isArray;function F(e,t){for(var n in t)e[n]=t[n];return e}function tt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function D(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?de.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return ie(e,i,r,o,null)}function ie(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Yt,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(a),a}function Xn(){return{current:null}}function $(e){return e.children}function M(e,t){this.props=e,this.context=t}function Z(e,t){if(t==null)return e.__?Z(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Z(e):null}function Jt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Jt(e)}}function je(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!be.__r++||dt!==h.debounceRendering)&&((dt=h.debounceRendering)||Vt)(be)}function be(){var e,t,n,r,o,a,i,s;for(Y.sort(Be);e=Y.shift();)e.__d&&(t=Y.length,r=void 0,a=(o=(n=e).__v).__e,i=[],s=[],n.__P&&((r=F({},o)).__v=o.__v+1,h.vnode&&h.vnode(r),nt(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[a]:null,i,a??Z(o),!!(32&o.__u),s),r.__v=o.__v,r.__.__k[r.__i]=r,en(i,r,s),r.__e!=a&&Jt(r)),Y.length>t&&Y.sort(Be));be.__r=0}function Qt(e,t,n,r,o,a,i,s,u,f,d){var l,p,m,g,E,_,y=r&&r.__k||Gt,v=t.length;for(u=Zn(n,t,y,u,v),l=0;l<v;l++)(m=n.__k[l])!=null&&(p=m.__i===-1?ue:y[m.__i]||ue,m.__i=l,_=nt(e,m,p,o,a,i,s,u,f,d),g=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&rt(p.ref,null,m),d.push(m.ref,m.__c||g,m)),E==null&&g!=null&&(E=g),4&m.__u||p.__k===m.__k?u=Kt(m,u,e):typeof m.type=="function"&&_!==void 0?u=_:g&&(u=g.nextSibling),m.__u&=-7);return n.__e=E,u}function Zn(e,t,n,r,o){var a,i,s,u,f,d=n.length,l=d,p=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=a+p,(i=e.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?ie(null,i,null,null,null):Se(i)?ie($,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?ie(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,s=null,(f=i.__i=Gn(i,n,u,l))!==-1&&(l--,(s=n[f])&&(s.__u|=2)),s==null||s.__v===null?(f==-1&&p--,typeof i.type!="function"&&(i.__u|=4)):f!=u&&(f==u-1?p--:f==u+1?p++:(f>u?p--:p++,i.__u|=4))):e.__k[a]=null;if(l)for(a=0;a<d;a++)(s=n[a])!=null&&(2&s.__u)==0&&(s.__e==r&&(r=Z(s)),tn(s,s));return r}function Kt(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Kt(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=Z(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function R(e,t){return t=t||[],e==null||typeof e=="boolean"||(Se(e)?e.some(function(n){R(n,t)}):t.push(e)),t}function Gn(e,t,n,r){var o,a,i=e.key,s=e.type,u=t[n];if(u===null||u&&i==u.key&&s===u.type&&(2&u.__u)==0)return n;if(r>(u!=null&&(2&u.__u)==0?1:0))for(o=n-1,a=n+1;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&(2&u.__u)==0&&i==u.key&&s===u.type)return o;o--}if(a<t.length){if((u=t[a])&&(2&u.__u)==0&&i==u.key&&s===u.type)return a;a++}}return-1}function mt(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Vn.test(t)?n:n+"px"}function pe(e,t,n,r,o){var a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||mt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||mt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Xt,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=et,e.addEventListener(t,a?Ue:We,a)):e.removeEventListener(t,a?Ue:We,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function pt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=et++;else if(t.t<n.u)return;return n(h.event?h.event(t):t)}}}function nt(e,t,n,r,o,a,i,s,u,f){var d,l,p,m,g,E,_,y,v,O,S,W,C,te,V,ne,U,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),a=[s=t.__e=n.__e]),(d=h.__b)&&d(t);e:if(typeof T=="function")try{if(y=t.props,v="prototype"in T&&T.prototype.render,O=(d=T.contextType)&&r[d.__c],S=d?O?O.props.value:d.__:r,n.__c?_=(l=t.__c=n.__c).__=l.__E:(v?t.__c=l=new T(y,S):(t.__c=l=new M(y,S),l.constructor=T,l.render=Qn),O&&O.sub(l),l.props=y,l.state||(l.state={}),l.context=S,l.__n=r,p=l.__d=!0,l.__h=[],l._sb=[]),v&&l.__s==null&&(l.__s=l.state),v&&T.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=F({},l.__s)),F(l.__s,T.getDerivedStateFromProps(y,l.__s))),m=l.props,g=l.state,l.__v=t,p)v&&T.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),v&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v&&T.getDerivedStateFromProps==null&&y!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,S),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,S)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(l.props=y,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(re){re&&(re.__=t)}),W=0;W<l._sb.length;W++)l.__h.push(l._sb[W]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,S),v&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,g,E)})}if(l.context=S,l.props=y,l.__P=e,l.__e=!1,C=h.__r,te=0,v){for(l.state=l.__s,l.__d=!1,C&&C(t),d=l.render(l.props,l.state,l.context),V=0;V<l._sb.length;V++)l.__h.push(l._sb[V]);l._sb=[]}else do l.__d=!1,C&&C(t),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++te<25);l.state=l.__s,l.getChildContext!=null&&(r=F(F({},r),l.getChildContext())),v&&!p&&l.getSnapshotBeforeUpdate!=null&&(E=l.getSnapshotBeforeUpdate(m,g)),s=Qt(e,Se(ne=d!=null&&d.type===$&&d.key==null?d.props.children:d)?ne:[ne],t,n,r,o,a,i,s,u,f),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),_&&(l.__E=l.__=null)}catch(re){if(t.__v=null,u||a!=null)if(re.then){for(t.__u|=u?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__e=s}else for(U=a.length;U--;)tt(a[U]);else t.__e=n.__e,t.__k=n.__k;h.__e(re,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Jn(n.__e,t,n,r,o,a,i,u,f);return(d=h.diffed)&&d(t),128&t.__u?void 0:s}function en(e,t,n){for(var r=0;r<n.length;r++)rt(n[r],n[++r],n[++r]);h.__c&&h.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){h.__e(a,o.__v)}})}function Jn(e,t,n,r,o,a,i,s,u){var f,d,l,p,m,g,E,_=n.props,y=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((m=a[f])&&"setAttribute"in m==!!v&&(v?m.localName==v:m.nodeType==3)){e=m,a[f]=null;break}}if(e==null){if(v==null)return document.createTextNode(y);e=document.createElementNS(o,v,y.is&&y),s&&(h.__m&&h.__m(t,a),s=!1),a=null}if(v===null)_===y||s&&e.data===y||(e.data=y);else{if(a=a&&de.call(e.childNodes),_=n.props||ue,!s&&a!=null)for(_={},f=0;f<e.attributes.length;f++)_[(m=e.attributes[f]).name]=m.value;for(f in _)if(m=_[f],f!="children"){if(f=="dangerouslySetInnerHTML")l=m;else if(!(f in y)){if(f=="value"&&"defaultValue"in y||f=="checked"&&"defaultChecked"in y)continue;pe(e,f,null,m,o)}}for(f in y)m=y[f],f=="children"?p=m:f=="dangerouslySetInnerHTML"?d=m:f=="value"?g=m:f=="checked"?E=m:s&&typeof m!="function"||_[f]===m||pe(e,f,m,_[f],o);if(d)s||l&&(d.__html===l.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(l&&(e.innerHTML=""),Qt(e,Se(p)?p:[p],t,n,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:n.__k&&Z(n,0),s,u),a!=null)for(f=a.length;f--;)tt(a[f]);s||(f="value",v=="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[f]||v=="progress"&&!g||v=="option"&&g!==_[f])&&pe(e,f,g,_[f],o),f="checked",E!==void 0&&E!==e[f]&&pe(e,f,E,_[f],o))}return e}function rt(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){h.__e(o,n)}}function tn(e,t,n){var r,o;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||rt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){h.__e(a,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&tn(r[o],t,n||typeof e.type!="function");n||tt(e.__e),e.__c=e.__=e.__e=void 0}function Qn(e,t,n){return this.constructor(e,n)}function G(e,t,n){var r,o,a,i;t==document&&(t=document.documentElement),h.__&&h.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],nt(t,e=(!r&&n||t).__k=D($,null,[e]),o||ue,ue,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?de.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r,i),en(a,e,i)}function nn(e,t){G(e,t,nn)}function Kn(e,t,n){var r,o,a,i,s=F({},e.props);for(a in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)a=="key"?r=t[a]:a=="ref"?o=t[a]:s[a]=t[a]===void 0&&i!==void 0?i[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?de.call(arguments,2):n),ie(e.type,s,r||e.key,o||e.ref,null)}function er(e,t){var n={__c:t="__cC"+Zt++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=new Set,(a={})[t]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.forEach(function(s){s.__e=!0,je(s)})},this.sub=function(i){o.add(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o&&o.delete(i),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}de=Gt.slice,h={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Yt=0,M.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),je(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),je(this))},M.prototype.render=$,Y=[],Vt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Be=function(e,t){return e.__v.__b-t.__v.__b},be.__r=0,Xt=/(PointerCapture)$|Capture$/i,et=0,We=pt(!1),Ue=pt(!0),Zt=0;var H,k,Oe,_t,J=0,rn=[],x=h,ht=x.__b,yt=x.__r,vt=x.diffed,gt=x.__c,bt=x.unmount,wt=x.__;function ee(e,t){x.__h&&x.__h(k,e,J||t),J=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Q(e){return J=1,ot(fn,e)}function ot(e,t,n){var r=ee(H++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):fn(void 0,t),function(s){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,s);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=k,!k.u)){var o=function(s,u,f){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(p){return!!p.__c});if(d.every(function(p){return!p.__N}))return!a||a.call(this,s,u,f);var l=r.__c.props!==s;return d.forEach(function(p){if(p.__N){var m=p.__[0];p.__=p.__N,p.__N=void 0,m!==p.__[0]&&(l=!0)}}),a&&a.call(this,s,u,f)||l};k.u=!0;var a=k.shouldComponentUpdate,i=k.componentWillUpdate;k.componentWillUpdate=function(s,u,f){if(this.__e){var d=a;a=void 0,o(s,u,f),a=d}i&&i.call(this,s,u,f)},k.shouldComponentUpdate=o}return r.__N||r.__}function Ne(e,t){var n=ee(H++,3);!x.__s&&at(n.__H,t)&&(n.__=e,n.i=t,k.__H.__h.push(n))}function B(e,t){var n=ee(H++,4);!x.__s&&at(n.__H,t)&&(n.__=e,n.i=t,k.__h.push(n))}function on(e){return J=5,Ce(function(){return{current:e}},[])}function an(e,t,n){J=6,B(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ce(e,t){var n=ee(H++,7);return at(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function sn(e,t){return J=8,Ce(function(){return e},t)}function ln(e){var t=k.context[e.__c],n=ee(H++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(k)),t.props.value):e.__}function cn(e,t){x.useDebugValue&&x.useDebugValue(t?t(e):e)}function un(){var e=ee(H++,11);if(!e.__){for(var t=k.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function tr(){for(var e;e=rn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(He),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){k=null,ht&&ht(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),wt&&wt(e,t)},x.__r=function(e){yt&&yt(e),H=0;var t=(k=e.__c).__H;t&&(Oe===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(ye),t.__h.forEach(He),t.__h=[],H=0)),Oe=k},x.diffed=function(e){vt&&vt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(rn.push(t)!==1&&_t===x.requestAnimationFrame||((_t=x.requestAnimationFrame)||nr)(tr)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Oe=k=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ye),n.__h=n.__h.filter(function(r){return!r.__||He(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(r,n.__v)}}),gt&&gt(e,t)},x.unmount=function(e){bt&&bt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ye(r)}catch(o){t=o}}),n.__H=void 0,t&&x.__e(t,n.__v))};var kt=typeof requestAnimationFrame=="function";function nr(e){var t,n=function(){clearTimeout(r),kt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);kt&&(t=requestAnimationFrame(n))}function ye(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function He(e){var t=k;e.__c=e.__(),k=t}function at(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function fn(e,t){return typeof t=="function"?t(e):t}function dn(e,t){for(var n in t)e[n]=t[n];return e}function Ye(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function mn(e,t){var n=t(),r=Q({t:{__:n,u:t}}),o=r[0].t,a=r[1];return B(function(){o.__=n,o.u=t,Te(o)&&a({t:o})},[e,n,t]),Ne(function(){return Te(o)&&a({t:o}),e(function(){Te(o)&&a({t:o})})},[e]),n}function Te(e){var t,n,r=e.u,o=e.__;try{var a=r();return!((t=o)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function pn(e){e()}function _n(e){return e}function hn(){return[!1,pn]}var yn=B;function Ve(e,t){this.props=e,this.context=t}function rr(e,t){function n(o){var a=this.props.ref,i=a==o.ref;return!i&&a&&(a.call?a(null):a.current=null),t?!t(this.props,o)||!i:Ye(this.props,o)}function r(o){return this.shouldComponentUpdate=n,D(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Ve.prototype=new M).isPureReactComponent=!0,Ve.prototype.shouldComponentUpdate=function(e,t){return Ye(this.props,e)||Ye(this.state,t)};var Et=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Et&&Et(e)};var or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ar(e){function t(n){var r=dn({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=or,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var xt=function(e,t){return e==null?null:R(R(e).map(t))},ir={map:xt,forEach:xt,count:function(e){return e?R(e).length:0},only:function(e){var t=R(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:R},sr=h.__e;h.__e=function(e,t,n,r){if(e.then){for(var o,a=t;a=a.__;)if((o=a.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}sr(e,t,n,r)};var St=h.unmount;function vn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=dn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return vn(r,t,n)})),e}function gn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return gn(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ve(){this.__u=0,this.o=null,this.__b=null}function bn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function lr(e){var t,n,r;function o(a){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return D(n,a)}return o.displayName="Lazy",o.__f=!0,o}function oe(){this.i=null,this.l=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),St&&St(e)},(ve.prototype=new M).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var o=bn(r.__v),a=!1,i=function(){a||(a=!0,n.__R=null,o?o(s):s())};n.__R=i;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=gn(u,u.__c.__P,u.__c.__O)}var f;for(r.setState({__a:r.__b=null});f=r.o.pop();)f.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},ve.prototype.componentWillUnmount=function(){this.o=[]},ve.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=vn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&D($,null,e.fallback);return o&&(o.__u&=-33),[D($,null,t.__a?null:e.children),o]};var Nt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function cr(e){return this.getChildContext=function(){return e.context},e.children}function ur(e){var t=this,n=e.h;t.componentWillUnmount=function(){G(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.h.insertBefore(r,o)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),G(D(cr,{context:t.context},e.__v),t.v)}function fr(e,t){var n=D(ur,{__v:e,h:t});return n.containerInfo=t,n}(oe.prototype=new M).__a=function(e){var t=this,n=bn(t.__v),r=t.l.get(e);return r[0]++,function(o){var a=function(){t.props.revealOrder?(r.push(o),Nt(t,e,r)):o()};n?n(a):a()}},oe.prototype.render=function(e){this.i=null,this.l=new Map;var t=R(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},oe.prototype.componentDidUpdate=oe.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Nt(e,n,t)})};var wn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,dr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,mr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,pr=/[A-Z0-9]/g,_r=typeof document<"u",hr=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function yr(e,t,n){return t.__k==null&&(t.textContent=""),G(e,t),typeof n=="function"&&n(),e?e.__c:null}function vr(e,t,n){return nn(e,t),typeof n=="function"&&n(),e?e.__c:null}M.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(M.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ct=h.event;function gr(){}function br(){return this.cancelBubble}function wr(){return this.defaultPrevented}h.event=function(e){return Ct&&(e=Ct(e)),e.persist=gr,e.isPropagationStopped=br,e.isDefaultPrevented=wr,e.nativeEvent=e};var it,kr={enumerable:!1,configurable:!0,get:function(){return this.class}},At=h.vnode;h.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,o={},a=r.indexOf("-")===-1;for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||_r&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var u=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":u==="translate"&&s==="no"?s=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?i="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||hr(n.type)?u==="onfocus"?i="onfocusin":u==="onblur"?i="onfocusout":mr.test(i)&&(i=u):u=i="oninput":a&&dr.test(i)?i=i.replace(pr,"-$&").toLowerCase():s===null&&(s=void 0),u==="oninput"&&o[i=u]&&(i="oninputCapture"),o[i]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=R(n.children).forEach(function(f){f.props.selected=o.value.indexOf(f.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=R(n.children).forEach(function(f){f.props.selected=o.multiple?o.defaultValue.indexOf(f.props.value)!=-1:o.defaultValue==f.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",kr)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o})(e),e.$$typeof=wn,At&&At(e)};var Pt=h.__r;h.__r=function(e){Pt&&Pt(e),it=e.__c};var It=h.diffed;h.diffed=function(e){It&&It(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),it=null};var Er={ReactCurrentDispatcher:{current:{readContext:function(e){return it.__n[e.__c].props.value},useCallback:sn,useContext:ln,useDebugValue:cn,useDeferredValue:_n,useEffect:Ne,useId:un,useImperativeHandle:an,useInsertionEffect:yn,useLayoutEffect:B,useMemo:Ce,useReducer:ot,useRef:on,useState:Q,useSyncExternalStore:mn,useTransition:hn}}};function xr(e){return D.bind(null,e)}function Ae(e){return!!e&&e.$$typeof===wn}function Sr(e){return Ae(e)&&e.type===$}function Nr(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Cr(e){return Ae(e)?Kn.apply(null,arguments):e}function Ar(e){return!!e.__k&&(G(null,e),!0)}function Pr(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ir=function(e,t){return e(t)},Or=function(e,t){return e(t)},Tr=$,Lr=Ae,c={useState:Q,useId:un,useReducer:ot,useEffect:Ne,useLayoutEffect:B,useInsertionEffect:yn,useTransition:hn,useDeferredValue:_n,useSyncExternalStore:mn,startTransition:pn,useRef:on,useImperativeHandle:an,useMemo:Ce,useCallback:sn,useContext:ln,useDebugValue:cn,version:"18.3.1",Children:ir,render:yr,hydrate:vr,unmountComponentAtNode:Ar,createPortal:fr,createElement:D,createContext:er,createFactory:xr,cloneElement:Cr,createRef:Xn,Fragment:$,isValidElement:Ae,isElement:Lr,isFragment:Sr,isMemo:Nr,findDOMNode:Pr,Component:M,PureComponent:Ve,memo:rr,forwardRef:ar,flushSync:Or,unstable_batchedUpdates:Ir,StrictMode:Tr,Suspense:ve,SuspenseList:oe,lazy:lr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Er};const se={show:!1},Mr=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),s=document.querySelector(".App-footer"),u=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),d=document.querySelector(".App"),l=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),m=document.querySelector(".spotify-panel"),g=document.querySelectorAll(".icon-nav"),E=document.querySelectorAll(".rotate-counterclockwise");me.rotation=-90,d.classList.add("about-open"),a.classList.add("about-open"),i.classList.add("about-open"),s.classList.add("about-open"),u.classList.add("about-open"),f.classList.add("about-open"),e.classList.add("about-open"),t.classList.add("about-open"),n.classList.add("about-open"),p.style.transform="rotate(90deg)",m.style.transform="rotate(90deg)",i.style.display="block",a.style.display="none",u.style.display="flex",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform="rotateZ(-90deg)",t.style.borderRadius="70px 15px 70px 15px",t.style.transform="rotateZ(90deg)",n.style.transform="rotateZ(90deg)",l.style.transform="rotateZ(90deg)";for(let _ of g)_.style.transform="rotateZ(90deg)";r.style.backgroundColor="#FF000099",r.style.color="#EEE",r.children[0].textContent="Back",r.onmouseover=()=>{r.style.backgroundColor="#FF0000DD",r.style.color="#FFF"},r.onmouseout=()=>{r.style.backgroundColor="#FF000099",r.style.color="#EEE"};for(let _ of E)_.classList.remove("rotate-counterclockwise"),_.classList.add("rotate-clockwise"),_.classList.add("rotated-about");o.style.opacity="0",a.style.opacity="0",a.style.pointerEvents="none",s.style.opacity="0",u.style.opacity="1",u.style.pointerEvents="all"},kn=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),s=document.querySelector(".App-footer"),u=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),d=document.querySelector(".App"),l=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),m=document.querySelector(".spotify-panel"),g=document.querySelectorAll(".icon-nav"),E=document.querySelectorAll(".rotated-about");me.rotation=0,d.classList.remove("about-open"),a.classList.remove("about-open"),i.classList.remove("about-open"),s.classList.remove("about-open"),u.classList.remove("about-open"),f.classList.remove("about-open"),e.classList.remove("about-open"),t.classList.remove("about-open"),n.classList.remove("about-open"),p.style.transform="rotate(0deg)",m.style.transform="rotate(0deg)",a.style.display="block",u.style.display="none",window.innerWidth<=678?t.style.transition="none":t.style.transition="ease 0.2s",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform="rotateZ(0deg)",t.style.borderRadius="15px 70px 15px 70px",t.style.transform="rotateZ(0deg)",n.style.transform="rotateZ(0deg)",l.style.transform="rotateZ(0deg)";for(let _ of g)_.style.transform="rotateZ(0deg)";r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)",r.children[0].textContent="About",r.onmouseover=()=>{r.style.backgroundColor="#0000000D",r.style.color="rgb(0, 0,0, 0.6)"},r.onmouseout=()=>{r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)"};for(let _ of E)_.classList.remove("rotated-about"),_.classList.remove("rotate-clockwise"),_.classList.add("rotate-counterclockwise");o.style.opacity="1",a.style.opacity="1",a.style.pointerEvents="all",s.style.opacity="1",u.style.opacity="0",u.style.pointerEvents="none"},Dr=()=>{j.show&&(j.show=!1,En()),se.show=!se.show,se.show?Mr():kn()},j={show:!1,card3D:!1,onAbout:!1},Fr=(e,t)=>{document.querySelector(".Card");const n=document.querySelector(".App-about"),r=document.querySelector(".App-header"),o=document.querySelector(".App-footer"),a=document.querySelector(".App-portfolio"),i=document.getElementById("portfolio-nav"),s=document.querySelector(".pp_logo");s.style.transition="none",a.style.opacity="1",a.style.display="flex",i.style.backgroundColor="#FF000099",i.style.color="#EEE",i.children[0].textContent="Back",i.onmouseover=()=>{i.style.backgroundColor="#FF0000DD",i.style.color="#FFF"},i.onmouseout=()=>{i.style.backgroundColor="#FF000099",i.style.color="#EEE"},n.style.display="none",r.style.opacity="0",r.style.position="absolute",o.style.display="none",s.style.pointerEvents="none"},En=(e,t)=>{document.querySelector(".Card");const n=document.querySelector(".App-about"),r=document.querySelector(".App-header"),o=document.querySelector(".App-footer"),a=document.querySelector(".App-portfolio"),i=document.getElementById("portfolio-nav"),s=document.querySelector(".pp_logo");a.style.opacity="0",a.style.display="none",i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)",i.children[0].textContent="Portfolio",i.onmouseover=()=>{i.style.backgroundColor="#0000000D",i.style.color="rgb(0, 0,0, 0.6)"},i.onmouseout=()=>{i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)"},n.style.display="block",r.style.opacity="1",r.style.position="static",o.style.display="flex",s.style.pointerEvents="all"},Rr=()=>{se.show&&(j.onAbout=!0,se.show=!1,kn()),j.show=!j.show,j.show?Fr():En()},me={rotation:0},$r=(e,t)=>n=>{const r=(window.innerWidth/2-n.pageX)/10,o=(window.innerHeight/2-n.pageY)/20;t.style.cursor="pointer",(me.rotation==0?r>0&&o>0:r>0&&o<0)?e.style.opacity="1":e.style.opacity="0"},zr=e=>()=>{e.style.opacity="0"},qr=e=>t=>{const n=(window.innerWidth/2-t.pageX)/10,r=(window.innerHeight/2-t.pageY)/20,o=me.rotation;e.style.transition="transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease",e.style.transform=`rotateZ(${o}deg) rotateY(${o==0?n:r*-1}deg) rotateX(${o==0?r*-1:n*-1}deg)`,e.style.boxShadow=`${o==0?n*-1:r}px ${o==0?r*-1:n*-1}px 30px rgba(0, 0, 0, 0.4) `},Br=(e,t)=>()=>{t.style.opacity="0",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease",e.style.transform=`rotateZ(${me.rotation}deg) rotateY(0deg) rotateX(0deg)`,e.style.boxShadow="0px 0px 15px rgba(0, 0, 0, 0.4)"},P={showSwitch:null,hideSwitch:null,cardFollowCursor3D:null,cardResetState3D:null},Wr=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch"),n=document.querySelector(".slider");P.showSwitch=$r(t,n),P.hideSwitch=zr(t),e.addEventListener("mousemove",P.showSwitch,!1),e.addEventListener("mouseout",P.hideSwitch,!1)},Ot=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch");P.cardFollowCursor3D=qr(e),P.cardResetState3D=Br(e,t),e.addEventListener("mousemove",P.cardFollowCursor3D,!1),e.addEventListener("mouseout",P.cardResetState3D,!1),j.card3D=!0},Ur=()=>{const e=document.getElementById("Card");e.removeEventListener("mousemove",P.cardFollowCursor3D,!1),e.removeEventListener("mouseout",P.cardResetState3D,!1),P.cardResetState3D(),j.card3D=!1};function jr(){const[e,t]=c.useState(!1);return B(()=>{const n=document.getElementById("pp"),r=document.querySelector(".pp_logo"),o=document.querySelector(".threeD-info");n.addEventListener("mouseleave",()=>{o.style.opacity="0",o.style.scale="1.0"}),n.addEventListener("mouseenter",()=>{r.style.transition="ease 0.2s",o.style.opacity="1",o.style.scale="1.05"}),n.addEventListener("mousedown",a=>{o.style.opacity="1",o.style.scale="1.1",o.style.display="none"}),n.addEventListener("mouseup",a=>{o.style.opacity="1",o.style.scale="1.05"}),localStorage.getItem("mode3D")==="true"?(t(!0),o.style.display="none",setTimeout(()=>{Ot(),document.getElementById("pp").style.pointerEvents="auto"},2e3)):(t(!1),setTimeout(()=>{document.getElementById("pp").style.pointerEvents="auto"},2e3))},[]),c.createElement("header",{style:"pointer-events: none;",className:"App-header"},c.createElement("p",null,c.createElement("a",{id:"pp",onMouseDown:n=>e?(t(!1),Ur(),localStorage.setItem("mode3D","false")):(t(!0),Ot(),P.cardFollowCursor3D(n),localStorage.setItem("mode3D","true"))},c.createElement("img",{className:"pp_logo",src:"https://avatars.githubusercontent.com/u/18515671?v=4",alt:"Berikai",onLoad:()=>{document.querySelector(".App").style.opacity=1,document.querySelector(".Card").style.animation="CardFrame 2s ease-in-out",document.querySelector(".pp_logo").style.animation="ProfileFrame 2s ease-in-out"}}),c.createElement("p",{className:"threeD-info"},"Tap to switch 3D"))),c.createElement("div",{className:"username"},"Berikai",c.createElement("div",{className:"aka"},"also known as Verdant")))}function Hr(){return c.createElement("div",{className:"App-about"},c.createElement("p",{className:"text-info"},"I love software tech and bass music"),c.createElement("ul",{className:"ul-padding"},c.createElement("li",{className:"li-element"},"🇹🇷   İzmir, Turkey "),c.createElement("li",{className:"li-element"},"🖥️   Software Enthusiast"),c.createElement("li",{className:"li-element"},"🎵   Dubstep, Drum 'n Bass, Experimental")),c.createElement("p",{className:"socials",align:"left"},c.createElement("a",{className:"padding-inline",href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},c.createElement("img",{src:"https://www.svgrepo.com/show/35013/soundcloud.svg",width:"24",height:"24",alt:"Soundcloud"})),c.createElement("a",{className:"padding-inline",href:"https://discordapp.com/users/385498463745343490",target:"_blank",rel:"noreferrer"},c.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg",width:"24",height:"24",alt:"Discord"})),c.createElement("a",{className:"padding-inline",href:"https://www.github.com/Berikai",target:"_blank",rel:"noreferrer"},c.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",width:"24",height:"24",alt:"Github"})),c.createElement("a",{className:"padding-inline",href:"http://www.instagram.com/verdantbass",target:"_blank",rel:"noreferrer"},c.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg",width:"24",height:"24",alt:"Instagram"})),c.createElement("a",{className:"padding-inline",href:"https://www.twitter.com/verdantbass",target:"_blank",rel:"noreferrer"},c.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg",width:"24",height:"24",alt:"Twitter"}))))}function Yr(){return c.createElement("div",{className:"App-about-extra",style:"opacity: 0;transition: transform 0.1s;"},c.createElement("p",{className:"title-about"},"About Me"),c.createElement("p",{className:"text-about"},"My name is Berkay Eren Konuk, but I usually go by the names ",c.createElement("b",null,"Berikai")," or ",c.createElement("b",null,"Verdant")," online."),c.createElement("p",{className:"text-about"},`I'm a big fan of open source and I love learning new things about software technologies. ...and "I use Arch, btw." 😄`),c.createElement("p",{className:"text-about"},"I create dubstep and drum and bass oriented experimental music. You can check out my music on ",c.createElement("a",{href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},"Soundcloud"),"."),c.createElement("p",{className:"text-about"},"I'm currently studying mechatronics engineering (sophomore) in ",c.createElement("i",null,"Izmir University of Economics"),"."))}const Vr="/assets/portfolio_bte2-DMvbOoQI.png",Xr="/assets/portfolio_btew-CtmSI4CU.png",Zr="/assets/portfolio_pixbud-DaWc0YR1.gif",Gr="/assets/portfolio_oasis-C2m8d2oy.png";function Jr(){return c.createElement("div",{className:"App-portfolio",style:"opacity: 0;transition: transform 0.1s;"},c.createElement("p",{className:"title-about"},"Portfolio"),c.createElement("p",{className:"text-about"},"Here, you can find some of my projects"),c.createElement("div",{className:"portfolio"},c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/bitwig-theme-editor"}),c.createElement("img",{className:"portfolio-img",width:68,src:Vr,alt:"Bitwig Theme Editor"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor"),c.createElement("div",{className:"portfolio-element-info dark"},"A patcher for Bitwig Studio, let's you customize the appearance of the most modular DAW in the world!"))),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://bitwig.berikai.dev"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor WebUI"),c.createElement("div",{className:"portfolio-element-info dark"},"Interactive visual playground to create and edit themes with ease and joy for Bitwig Studio")),c.createElement("img",{className:"portfolio-img",width:68,src:Xr,alt:"Bitwig Theme Editor WebUI"})),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/data/tree/main/pixbud",onClick:e=>{e.preventDefault(),window.confirm(`This project is not finished and as of now it's closed source. You'll be redirected to a github page to download the Windows binaries of its prototype.

Would you like to continue?`)&&window.open(e.target.href,"_blank")}}),c.createElement("img",{className:"portfolio-img",width:68,src:Zr,alt:"Pixbud"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"Pixbud"),c.createElement("div",{className:"portfolio-element-info dark"},"Your desktop buddy, loves to hang around on the rooftops of your application windows"))),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/berikai/oasis-android"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"OASIS Android"),c.createElement("div",{className:"portfolio-element-info dark"},"An unofficial mobile application for the student information system of Izmir University of Economics")),c.createElement("img",{className:"portfolio-img",width:68,src:Gr,alt:"OASIS Android"})),c.createElement("div",{className:"portfolio-element"},c.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/berikai/wr2-server-connector"}),c.createElement("img",{className:"portfolio-img",width:68,src:"https://user-images.githubusercontent.com/18515671/160943154-ebd29b37-19ec-4687-899a-24d555c46e7b.png"}),c.createElement("div",{className:"portfolio-element-content dark"},c.createElement("div",{className:"portfolio-element-title dark"},"WR2 Server Connector"),c.createElement("div",{className:"portfolio-element-info dark"},"A simple tool to play World Racing 2 online, since the official multiplayer tool is deprecated"))),c.createElement("div",{className:"text-about",style:"margin-top: -4px;"},"and many more, check my ",c.createElement("a",{href:"https://github.com/berikai",target:"_blank",rel:"noreferrer"},"Github"),"!")))}function Qr(){const[e,t]=Q(0),n=()=>t(r=>r+1);return Ne(()=>{e===15?alert("You really love hearts, don't you? ❤️"):e===40&&window.open("https://api.berikai.dev","_blank")},[e]),c.createElement("footer",{className:"App-footer"},c.createElement("p",{className:"p-footer"},"Made with"," ",c.createElement("button",{type:"button",onClick:n,"aria-label":"Heart",style:{border:"none",background:"transparent",cursor:"pointer",padding:0}},c.createElement("heart",null,"❤️"))," ","by Berikai"))}const Le=e=>{const t=document.getElementById("Card"),n=document.querySelectorAll(".dark");if(e){document.body.style.backgroundColor="#222",document.body.style.color="#fff",t.style.backgroundColor="#222";for(let r of n)r.style.filter="invert(1)"}else{document.body.style.backgroundColor="#fff",document.body.style.color="#000",t.style.backgroundColor="#fff";for(let r of n)r.style.filter="invert(0)"}};function Kr(){return B(()=>{const e=document.getElementById("mode_switch");localStorage.getItem("themeMode")==="dark"&&(e.checked=!0,Le(!0)),setTimeout(()=>{e.addEventListener("change",t=>{t.target.checked?(localStorage.setItem("themeMode","dark"),Le(!0)):(localStorage.setItem("themeMode","light"),Le(!1))})},2e3)},[]),c.createElement("div",{className:"switch"},c.createElement("label",{id:"switch",className:"switch",style:"opacity: 0; transition: 0.4s, transform 0.2s;"},c.createElement("input",{id:"mode_switch",type:"checkbox"}),c.createElement("span",{className:"slider round"})))}function _e({id:e=null,text:t,rotation:n,action:r=()=>{},href:o=null}){return c.createElement("a",{...e?{id:e}:{},className:"nav-button dark",onClick:r,...o?{href:o}:{},target:"_blank",rel:"noreferrer"},c.createElement("span",{className:n=="rl"?"rotate-clockwise":"rotate-counterclockwise"},t))}const eo=()=>{document.querySelector(".modal").style.opacity="0",setTimeout(()=>{document.querySelector(".modal").style.display="none"},200)};function to(){return c.createElement("div",{className:"modal",onClick:()=>eo()},c.createElement("div",{className:"modal-content"},c.createElement("div",{className:"modal-box dark"},c.createElement("text",{className:"dark"},"The page you are trying to view is currently in development."),c.createElement("text",{className:"dark"},"Thank you for your patience."))))}function le(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?le=function(t){return typeof t}:le=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function no(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ro(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oo(e,t,n){return t&&ro(e.prototype,t),e}function ao(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ao(e,o,n[o])})}return e}function xn(e,t){return io(e)||so(e,t)||lo()}function io(e){if(Array.isArray(e))return e}function so(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),s;!(r=(s=i.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(u){o=!0,a=u}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}function lo(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Tt=function(){},st={},Sn={},co=null,Nn={mark:Tt,measure:Tt};try{typeof window<"u"&&(st=window),typeof document<"u"&&(Sn=document),typeof MutationObserver<"u"&&(co=MutationObserver),typeof performance<"u"&&(Nn=performance)}catch{}var uo=st.navigator||{},Lt=uo.userAgent,Mt=Lt===void 0?"":Lt,Pe=st,N=Sn,he=Nn;Pe.document;var lt=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function";~Mt.indexOf("MSIE")||~Mt.indexOf("Trident/");var z="___FONT_AWESOME___",Cn="fa",An="svg-inline--fa",fo="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Me={GROUP:"group",PRIMARY:"primary",SECONDARY:"secondary"},Pn=Pe.FontAwesomeConfig||{};function mo(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function po(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(N&&typeof N.querySelector=="function"){var _o=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_o.forEach(function(e){var t=xn(e,2),n=t[0],r=t[1],o=po(mo(n));o!=null&&(Pn[r]=o)})}var ho={familyPrefix:Cn,replacementClass:An,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xe=b({},ho,Pn);Xe.autoReplaceSvg||(Xe.observeMutations=!1);var A=b({},Xe);Pe.FontAwesomeConfig=A;var q=Pe||{};q[z]||(q[z]={});q[z].styles||(q[z].styles={});q[z].hooks||(q[z].hooks={});q[z].shims||(q[z].shims=[]);var L=q[z],yo=[],vo=function e(){N.removeEventListener("DOMContentLoaded",e),Ze=1,yo.map(function(t){return t()})},Ze=!1;lt&&(Ze=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ze||N.addEventListener("DOMContentLoaded",vo));var ct="pending",In="settled",we="fulfilled",ke="rejected",go=function(){},On=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",bo=typeof setImmediate>"u"?setTimeout:setImmediate,ae=[],Ge;function wo(){for(var e=0;e<ae.length;e++)ae[e][0](ae[e][1]);ae=[],Ge=!1}function Ee(e,t){ae.push([e,t]),Ge||(Ge=!0,bo(wo,0))}function ko(e,t){function n(o){ut(t,o)}function r(o){fe(t,o)}try{e(n,r)}catch(o){r(o)}}function Tn(e){var t=e.owner,n=t._state,r=t._data,o=e[n],a=e.then;if(typeof o=="function"){n=we;try{r=o(r)}catch(i){fe(a,i)}}Ln(a,r)||(n===we&&ut(a,r),n===ke&&fe(a,r))}function Ln(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||le(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(o){n||(n=!0,t===o?Mn(e,o):ut(e,o))},function(o){n||(n=!0,fe(e,o))}),!0}}catch(o){return n||fe(e,o),!0}return!1}function ut(e,t){(e===t||!Ln(e,t))&&Mn(e,t)}function Mn(e,t){e._state===ct&&(e._state=In,e._data=t,Ee(Eo,e))}function fe(e,t){e._state===ct&&(e._state=In,e._data=t,Ee(xo,e))}function Dn(e){e._then=e._then.forEach(Tn)}function Eo(e){e._state=we,Dn(e)}function xo(e){e._state=ke,Dn(e),!e._handled&&On&&global.process.emit("unhandledRejection",e._data,e)}function So(e){global.process.emit("rejectionHandled",e)}function I(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof I))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],ko(e,this)}I.prototype={constructor:I,_state:ct,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(go),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===ke&&On&&Ee(So,this)),this._state===we||this._state===ke?Ee(Tn,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}};I.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new I(function(t,n){var r=[],o=0;function a(u){return o++,function(f){r[u]=f,--o||t(r)}}for(var i=0,s;i<e.length;i++)s=e[i],s&&typeof s.then=="function"?s.then(a(i),n):r[i]=s;o||t(r)})};I.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new I(function(t,n){for(var r=0,o;r<e.length;r++)o=e[r],o&&typeof o.then=="function"?o.then(t,n):t(o)})};I.resolve=function(e){return e&&le(e)==="object"&&e.constructor===I?e:new I(function(t){t(e)})};I.reject=function(e){return new I(function(t,n){n(e)})};var X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function No(e){if(!(!e||!lt)){var t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=N.head.childNodes,r=null,o=n.length-1;o>-1;o--){var a=n[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=a)}return N.head.insertBefore(t,r),e}}var Co="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){for(var e=12,t="";e-- >0;)t+=Co[Math.random()*62|0];return t}function Fn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ao(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fn(e[n]),'" ')},"").trim()}function Rn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function $n(e){return e.size!==X.size||e.x!==X.x||e.y!==X.y||e.rotate!==X.rotate||e.flipX||e.flipY}function zn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:u,path:f}}var De={x:0,y:0,width:"100%",height:"100%"};function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Po(e){return e.tag==="g"?e.children:[e]}function Io(e){var t=e.children,n=e.attributes,r=e.main,o=e.mask,a=e.maskId,i=e.transform,s=r.width,u=r.icon,f=o.width,d=o.icon,l=zn({transform:i,containerWidth:f,iconWidth:s}),p={tag:"rect",attributes:b({},De,{fill:"white"})},m=u.children?{children:u.children.map(Dt)}:{},g={tag:"g",attributes:b({},l.inner),children:[Dt(b({tag:u.tag,attributes:b({},u.attributes,l.path)},m))]},E={tag:"g",attributes:b({},l.outer),children:[g]},_="mask-".concat(a||xe()),y="clip-".concat(a||xe()),v={tag:"mask",attributes:b({},De,{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,E]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Po(d)},v]};return t.push(O,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},De)}),{children:t,attributes:n}}function Oo(e){var t=e.children,n=e.attributes,r=e.main,o=e.transform,a=e.styles,i=Rn(a);if(i.length>0&&(n.style=i),$n(o)){var s=zn({transform:o,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:b({},s.outer),children:[{tag:"g",attributes:b({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b({},r.icon.attributes,s.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function To(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,a=e.styles,i=e.transform;if($n(i)&&n.found&&!r.found){var s=n.width,u=n.height,f={x:s/u/2,y:.5};o.style=Rn(b({},a,{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Lo(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,a=e.symbol,i=a===!0?"".concat(t,"-").concat(A.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b({},o,{id:i}),children:r}]}]}function Mo(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,a=e.iconName,i=e.transform,s=e.symbol,u=e.title,f=e.maskId,d=e.titleId,l=e.extra,p=e.watchable,m=p===void 0?!1:p,g=r.found?r:n,E=g.width,_=g.height,y=o==="fak",v=y?"":"fa-w-".concat(Math.ceil(E/_*16)),O=[A.replacementClass,a?"".concat(A.familyPrefix,"-").concat(a):"",v].filter(function(U){return l.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(l.classes).join(" "),S={children:[],attributes:b({},l.attributes,{"data-prefix":o,"data-icon":a,class:O,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(_)})},W=y&&!~l.classes.indexOf("fa-fw")?{width:"".concat(E/_*16*.0625,"em")}:{};m&&(S.attributes[fo]=""),u&&S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(d||xe())},children:[u]});var C=b({},S,{prefix:o,iconName:a,main:n,mask:r,maskId:f,transform:i,symbol:s,styles:b({},W,l.styles)}),te=r.found&&n.found?Io(C):Oo(C),V=te.children,ne=te.attributes;return C.children=V,C.attributes=ne,s?Lo(C):To(C)}A.measurePerformance&&he&&he.mark&&he.measure;var Fe=function(t,n,r,o){var a=Object.keys(t),i=a.length,s=n,u,f,d;for(r===void 0?(u=1,d=t[a[0]]):(u=0,d=r);u<i;u++)f=a[u],d=s(d,t[f],f,t);return d};function qn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,a=Object.keys(t).reduce(function(i,s){var u=t[s],f=!!u.icon;return f?i[u.iconName]=u.icon:i[s]=u,i},{});typeof L.hooks.addPack=="function"&&!o?L.hooks.addPack(e,a):L.styles[e]=b({},L.styles[e]||{},a),e==="fas"&&qn("fa",t)}var Ft=L.styles,Do=L.shims,Bn=function(){var t=function(o){return Fe(Ft,function(a,i,s){return a[s]=Fe(i,o,{}),a},{})};t(function(r,o,a){return o[3]&&(r[o[3]]=a),r}),t(function(r,o,a){var i=o[2];return r[a]=a,i.forEach(function(s){r[s]=a}),r});var n="far"in Ft;Fe(Do,function(r,o){var a=o[0],i=o[1],s=o[2];return i==="far"&&!n&&(i="fas"),r[a]={prefix:i,iconName:s},r},{})};Bn();L.styles;function Rt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Wn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,a=o===void 0?[]:o;return typeof e=="string"?Fn(e):"<".concat(t," ").concat(Ao(r),">").concat(a.map(Wn).join(""),"</").concat(t,">")}var Fo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,o){var a=o.toLowerCase().split("-"),i=a[0],s=a.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n):n};function Je(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}Je.prototype=Object.create(Error.prototype);Je.prototype.constructor=Je;var Ie={fill:"currentColor"},Un={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};b({},Ie,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ft=b({},Un,{attributeName:"opacity"});b({},Ie,{cx:"256",cy:"364",r:"28"}),b({},Un,{attributeName:"r",values:"28;14;28;28;14;28;"}),b({},ft,{values:"1;0;1;1;0;1;"});b({},Ie,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),b({},ft,{values:"1;0;0;0;0;1;"});b({},Ie,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),b({},ft,{values:"0;0;1;1;0;0;"});L.styles;function $t(e){var t=e[0],n=e[1],r=e.slice(4),o=xn(r,1),a=o[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(A.familyPrefix,"-").concat(Me.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(Me.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(Me.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:i}}L.styles;var Ro=`svg:not(:root).svg-inline--fa {
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
}`;function $o(){var e=Cn,t=An,n=A.familyPrefix,r=A.replacementClass,o=Ro;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var zo=(function(){function e(){no(this,e),this.definitions={}}return oo(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=b({},n.definitions[s]||{},i[s]),qn(s,i[s]),Bn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(a){var i=o[a],s=i.prefix,u=i.iconName,f=i.icon;n[s]||(n[s]={}),n[s][u]=f}),n}}]),e})();function qo(){A.autoAddCss&&!qt&&(No($o()),qt=!0)}function Bo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(lt){var r=N.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function zt(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return Rt(Uo.definitions,n,r)||Rt(L.styles,n,r)}function Wo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zt(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:zt(o||{})),e(r,b({},n,{mask:o}))}}var Uo=new zo,qt=!1,jo={transform:function(t){return Fo(t)}},Ho=Wo(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?X:n,o=t.symbol,a=o===void 0?!1:o,i=t.mask,s=i===void 0?null:i,u=t.maskId,f=u===void 0?null:u,d=t.title,l=d===void 0?null:d,p=t.titleId,m=p===void 0?null:p,g=t.classes,E=g===void 0?[]:g,_=t.attributes,y=_===void 0?{}:_,v=t.styles,O=v===void 0?{}:v;if(e){var S=e.prefix,W=e.iconName,C=e.icon;return Bo(b({type:"icon"},e),function(){return qo(),A.autoA11y&&(l?y["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(m||xe()):(y["aria-hidden"]="true",y.focusable="false")),Mo({icons:{main:$t(C),mask:s?$t(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:W,transform:b({},X,r),symbol:a,title:l,maskId:f,titleId:m,extra:{attributes:y,styles:O,classes:E}})})}});function Yo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Re={exports:{}},$e,Bt;function Vo(){if(Bt)return $e;Bt=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $e=e,$e}var ze,Wt;function Xo(){if(Wt)return ze;Wt=1;var e=Vo();function t(){}function n(){}return n.resetWarningCache=t,ze=function(){function r(i,s,u,f,d,l){if(l!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function o(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},ze}var Ut;function Zo(){return Ut||(Ut=1,Re.exports=Xo()()),Re.exports}var Go=Zo();const w=Yo(Go);function ge(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ge=function(t){return typeof t}:ge=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ce(e,o,n[o])})}return e}function Jo(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Qo(e,t){if(e==null)return{};var n=Jo(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ke(e){return Ko(e)||ea(e)||ta()}function Ko(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function ea(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function ta(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function jn(e){return typeof e!="string"?e:(e=e.replace(/[-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.charAt(0).toLowerCase()+e.substring(1))}function na(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ra(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=jn(n.slice(0,r)),a=n.slice(r+1).trim();return o.startsWith("webkit")?t[na(o)]=a:t[o]=a,t},{})}function Hn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Hn(e,u)}),o=Object.keys(t.attributes||{}).reduce(function(u,f){var d=t.attributes[f];switch(f){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=ra(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=d:u.attrs[jn(f)]=d}return u},{attrs:{}}),a=n.style,i=a===void 0?{}:a,s=Qo(n,["style"]);return o.attrs.style=Qe({},o.attrs.style,i),e.apply(void 0,[t.tag,Qe({},o.attrs,s)].concat(Ke(r)))}var Yn=!1;try{Yn=!0}catch{}function oa(){if(!Yn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function aa(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function jt(e){if(e===null)return null;if(ge(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function K(e){var t=e.icon,n=e.mask,r=e.symbol,o=e.className,a=e.title,i=jt(t),s=qe("classes",[].concat(Ke(aa(e)),Ke(o.split(" ")))),u=qe("transform",typeof e.transform=="string"?jo.transform(e.transform):e.transform),f=qe("mask",jt(n)),d=Ho(i,Qe({},s,u,f,{symbol:r,title:a}));if(!d)return oa("Could not find icon",i),null;var l=d.abstract,p={};return Object.keys(e).forEach(function(m){K.defaultProps.hasOwnProperty(m)||(p[m]=e[m])}),ia(l[0],p)}K.displayName="FontAwesomeIcon";K.propTypes={border:w.bool,className:w.string,mask:w.oneOfType([w.object,w.array,w.string]),fixedWidth:w.bool,inverse:w.bool,flip:w.oneOf(["horizontal","vertical","both"]),icon:w.oneOfType([w.object,w.array,w.string]),listItem:w.bool,pull:w.oneOf(["right","left"]),pulse:w.bool,rotation:w.oneOf([90,180,270]),size:w.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.bool,symbol:w.oneOfType([w.bool,w.string]),title:w.string,transform:w.oneOfType([w.string,w.object])};K.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var ia=Hn.bind(null,D);const Ht={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};function sa(){return c.createElement("nav",{className:"navbar"},c.createElement("div",{className:"navbar-half1"},c.createElement(_e,{id:"about-nav",text:"About",rotation:"rl",action:()=>Dr()}),c.createElement(_e,{link:!0,text:c.createElement(c.Fragment,null,c.createElement(K,{className:"icon-nav-rl",size:"xs",icon:Ht}),c.createElement(c.Fragment,null,"Blog")),rotation:"rl",href:"https://blog.berikai.dev"})),c.createElement("div",{className:"navbar-half2"},c.createElement(_e,{link:!0,text:c.createElement(c.Fragment,null,c.createElement(K,{className:"icon-nav-lr",size:"xs",icon:Ht}),c.createElement(c.Fragment,null,"Console")),rotation:"lr",href:"https://console.berikai.dev"}),c.createElement(_e,{id:"portfolio-nav",text:"Portfolio",rotation:"lr",action:()=>Rr()})))}function la(){let e={};const[t,n]=Q({}),[r,o]=Q(0);let a=[];const i=()=>{const s=document.querySelector(".spotify"),u=document.querySelector(".spotify-panel"),f=document.querySelector(".spotify-container");fetch("https://api.berikai.dev/spotify/current").then(d=>d.json()).then(d=>{if(d.error){(d.error!="Not authenticated"||d.error!="No track playing")&&console.error("Spotify API Error: "+d.error),f.style.opacity=0,s.style.opacity=0,s.style.pointerEvents="none";return}f.style.opacity=1,s.style.opacity=1,s.style.pointerEvents="all",a.forEach(p=>clearInterval(p)),e=d,n(d),u.style.opacity==1?s.getElementsByTagName("a")[0].href=e.item?.external_urls.spotify:s.getElementsByTagName("a")[0].removeAttribute("href"),o(d.progress_ms);const l=setInterval(()=>{o(p=>{const m=p+1e3;return m>=d.item?.duration_ms&&(a.forEach(g=>clearInterval(g)),i(),console.log("Song ended, fetching new song...")),m})},1e3);a.push(l)})};return B(()=>{setTimeout(()=>{const s=document.querySelector(".spotify"),u=document.querySelector(".spotify-panel"),f=document.querySelector(".spotify-container");i(),setInterval(()=>{console.log("Fetching current playing song..."),i()},2e4),s.addEventListener("mousemove",()=>{u.style.opacity=1,setTimeout(()=>{s.getElementsByTagName("a")[0].href=e.item?.external_urls.spotify},200)}),f.addEventListener("mouseleave",()=>{u.style.opacity=0,setTimeout(()=>{s.getElementsByTagName("a")[0].removeAttribute("href")},200)}),f.style.opacity=1},2e3)},[]),c.createElement("div",{className:"spotify-container",style:"opacity: 0;"},c.createElement("div",{className:"spotify-panel"},c.createElement("div",{className:"spotify-panel-content dark"},c.createElement("img",{className:"spotify-artwork dark",src:t.item?.album.images[2].url,width:"33"}),c.createElement("div",{className:"spotify-info dark"},c.createElement("div",{className:"text-spotify",style:"display:flex;justify-content:space-between;font-size: 8px;"},c.createElement("span",null,"I'm currently listening"),c.createElement("span",null,Math.floor(r/6e4),":",Math.floor(r%6e4/1e3).toFixed(0).padStart(2,"0")," / ",Math.floor(t.item?.duration_ms/6e4),":",Math.floor(t.item?.duration_ms%6e4/1e3).toFixed(0).padStart(2,"0"))),c.createElement("div",{className:"text-spotify"},c.createElement("b",null,t.item?.artists.length<4?t.item?.artists.map(s=>s.name).join(", "):t.item?.artists[0].name," - ",t.item?.name))))),c.createElement("div",{className:"spotify",style:"opacity: 0;"},c.createElement("a",{target:"_blank",rel:"noreferrer"},c.createElement("img",{id:"spotify-img",src:"https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",width:"24"}))))}function ca(){return B(()=>{setTimeout(()=>{Wr()},2600)},[]),c.createElement("div",{className:"App",style:"opacity: 0; transition: opacity 0.2s;"},c.createElement(to,null),c.createElement("div",{className:"App-scale"},c.createElement("div",{id:"Card",className:"Card"},c.createElement(Kr,null),c.createElement(sa,null),c.createElement(Jr,null),c.createElement(jr,null),c.createElement(Hr,null),c.createElement(Yr,null),c.createElement(Qr,null),c.createElement(la,null))))}G(c.createElement(ca,null),document.getElementById("root"));
