(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var me,h,Vt,V,mt,Xt,Be,Zt,et,je,We,Gt,ue={},Jt=[],Xn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Se=Array.isArray;function F(e,t){for(var n in t)e[n]=t[n];return e}function tt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function z(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?me.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return ie(e,i,r,o,null)}function ie(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Vt,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(a),a}function Zn(){return{current:null}}function $(e){return e.children}function D(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?G(e):null}function Kt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Kt(e)}}function He(e){(!e.__d&&(e.__d=!0)&&V.push(e)&&!be.__r++||mt!==h.debounceRendering)&&((mt=h.debounceRendering)||Xt)(be)}function be(){var e,t,n,r,o,a,i,l;for(V.sort(Be);e=V.shift();)e.__d&&(t=V.length,r=void 0,a=(o=(n=e).__v).__e,i=[],l=[],n.__P&&((r=F({},o)).__v=o.__v+1,h.vnode&&h.vnode(r),nt(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[a]:null,i,a??G(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,tn(i,r,l),r.__e!=a&&Kt(r)),V.length>t&&V.sort(Be));be.__r=0}function Qt(e,t,n,r,o,a,i,l,u,f,m){var c,p,d,g,k,_,y=r&&r.__k||Jt,v=t.length;for(u=Gn(n,t,y,u,v),c=0;c<v;c++)(d=n.__k[c])!=null&&(p=d.__i===-1?ue:y[d.__i]||ue,d.__i=c,_=nt(e,d,p,o,a,i,l,u,f,m),g=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&rt(p.ref,null,d),m.push(d.ref,d.__c||g,d)),k==null&&g!=null&&(k=g),4&d.__u||p.__k===d.__k?u=en(d,u,e):typeof d.type=="function"&&_!==void 0?u=_:g&&(u=g.nextSibling),d.__u&=-7);return n.__e=k,u}function Gn(e,t,n,r,o){var a,i,l,u,f,m=n.length,c=m,p=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=a+p,(i=e.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?ie(null,i,null,null,null):Se(i)?ie($,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?ie(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,(f=i.__i=Jn(i,n,u,c))!==-1&&(c--,(l=n[f])&&(l.__u|=2)),l==null||l.__v===null?(f==-1&&p--,typeof i.type!="function"&&(i.__u|=4)):f!=u&&(f==u-1?p--:f==u+1?p++:(f>u?p--:p++,i.__u|=4))):e.__k[a]=null;if(c)for(a=0;a<m;a++)(l=n[a])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=G(l)),nn(l,l));return r}function en(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=en(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=G(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function R(e,t){return t=t||[],e==null||typeof e=="boolean"||(Se(e)?e.some(function(n){R(n,t)}):t.push(e)),t}function Jn(e,t,n,r){var o,a,i=e.key,l=e.type,u=t[n];if(u===null||u&&i==u.key&&l===u.type&&(2&u.__u)==0)return n;if(r>(u!=null&&(2&u.__u)==0?1:0))for(o=n-1,a=n+1;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&(2&u.__u)==0&&i==u.key&&l===u.type)return o;o--}if(a<t.length){if((u=t[a])&&(2&u.__u)==0&&i==u.key&&l===u.type)return a;a++}}return-1}function dt(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Xn.test(t)?n:n+"px"}function pe(e,t,n,r,o){var a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||dt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||dt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Zt,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=et,e.addEventListener(t,a?We:je,a)):e.removeEventListener(t,a?We:je,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function pt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=et++;else if(t.t<n.u)return;return n(h.event?h.event(t):t)}}}function nt(e,t,n,r,o,a,i,l,u,f){var m,c,p,d,g,k,_,y,v,O,S,W,C,te,X,ne,H,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),a=[l=t.__e=n.__e]),(m=h.__b)&&m(t);e:if(typeof T=="function")try{if(y=t.props,v="prototype"in T&&T.prototype.render,O=(m=T.contextType)&&r[m.__c],S=m?O?O.props.value:m.__:r,n.__c?_=(c=t.__c=n.__c).__=c.__E:(v?t.__c=c=new T(y,S):(t.__c=c=new D(y,S),c.constructor=T,c.render=Qn),O&&O.sub(c),c.props=y,c.state||(c.state={}),c.context=S,c.__n=r,p=c.__d=!0,c.__h=[],c._sb=[]),v&&c.__s==null&&(c.__s=c.state),v&&T.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=F({},c.__s)),F(c.__s,T.getDerivedStateFromProps(y,c.__s))),d=c.props,g=c.state,c.__v=t,p)v&&T.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),v&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(v&&T.getDerivedStateFromProps==null&&y!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,S),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,S)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(re){re&&(re.__=t)}),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[],c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,S),v&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,g,k)})}if(c.context=S,c.props=y,c.__P=e,c.__e=!1,C=h.__r,te=0,v){for(c.state=c.__s,c.__d=!1,C&&C(t),m=c.render(c.props,c.state,c.context),X=0;X<c._sb.length;X++)c.__h.push(c._sb[X]);c._sb=[]}else do c.__d=!1,C&&C(t),m=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++te<25);c.state=c.__s,c.getChildContext!=null&&(r=F(F({},r),c.getChildContext())),v&&!p&&c.getSnapshotBeforeUpdate!=null&&(k=c.getSnapshotBeforeUpdate(d,g)),l=Qt(e,Se(ne=m!=null&&m.type===$&&m.key==null?m.props.children:m)?ne:[ne],t,n,r,o,a,i,l,u,f),c.base=t.__e,t.__u&=-161,c.__h.length&&i.push(c),_&&(c.__E=c.__=null)}catch(re){if(t.__v=null,u||a!=null)if(re.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l}else for(H=a.length;H--;)tt(a[H]);else t.__e=n.__e,t.__k=n.__k;h.__e(re,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Kn(n.__e,t,n,r,o,a,i,u,f);return(m=h.diffed)&&m(t),128&t.__u?void 0:l}function tn(e,t,n){for(var r=0;r<n.length;r++)rt(n[r],n[++r],n[++r]);h.__c&&h.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){h.__e(a,o.__v)}})}function Kn(e,t,n,r,o,a,i,l,u){var f,m,c,p,d,g,k,_=n.props,y=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(f=0;f<a.length;f++)if((d=a[f])&&"setAttribute"in d==!!v&&(v?d.localName==v:d.nodeType==3)){e=d,a[f]=null;break}}if(e==null){if(v==null)return document.createTextNode(y);e=document.createElementNS(o,v,y.is&&y),l&&(h.__m&&h.__m(t,a),l=!1),a=null}if(v===null)_===y||l&&e.data===y||(e.data=y);else{if(a=a&&me.call(e.childNodes),_=n.props||ue,!l&&a!=null)for(_={},f=0;f<e.attributes.length;f++)_[(d=e.attributes[f]).name]=d.value;for(f in _)if(d=_[f],f!="children"){if(f=="dangerouslySetInnerHTML")c=d;else if(!(f in y)){if(f=="value"&&"defaultValue"in y||f=="checked"&&"defaultChecked"in y)continue;pe(e,f,null,d,o)}}for(f in y)d=y[f],f=="children"?p=d:f=="dangerouslySetInnerHTML"?m=d:f=="value"?g=d:f=="checked"?k=d:l&&typeof d!="function"||_[f]===d||pe(e,f,d,_[f],o);if(m)l||c&&(m.__html===c.__html||m.__html===e.innerHTML)||(e.innerHTML=m.__html),t.__k=[];else if(c&&(e.innerHTML=""),Qt(e,Se(p)?p:[p],t,n,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:n.__k&&G(n,0),l,u),a!=null)for(f=a.length;f--;)tt(a[f]);l||(f="value",v=="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[f]||v=="progress"&&!g||v=="option"&&g!==_[f])&&pe(e,f,g,_[f],o),f="checked",k!==void 0&&k!==e[f]&&pe(e,f,k,_[f],o))}return e}function rt(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){h.__e(o,n)}}function nn(e,t,n){var r,o;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||rt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){h.__e(a,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&nn(r[o],t,n||typeof e.type!="function");n||tt(e.__e),e.__c=e.__=e.__e=void 0}function Qn(e,t,n){return this.constructor(e,n)}function J(e,t,n){var r,o,a,i;t==document&&(t=document.documentElement),h.__&&h.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],nt(t,e=(!r&&n||t).__k=z($,null,[e]),o||ue,ue,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?me.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r,i),tn(a,e,i)}function rn(e,t){J(e,t,rn)}function er(e,t,n){var r,o,a,i,l=F({},e.props);for(a in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)a=="key"?r=t[a]:a=="ref"?o=t[a]:l[a]=t[a]===void 0&&i!==void 0?i[a]:t[a];return arguments.length>2&&(l.children=arguments.length>3?me.call(arguments,2):n),ie(e.type,l,r||e.key,o||e.ref,null)}function tr(e,t){var n={__c:t="__cC"+Gt++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=new Set,(a={})[t]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.forEach(function(l){l.__e=!0,He(l)})},this.sub=function(i){o.add(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){o&&o.delete(i),l&&l.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}me=Jt.slice,h={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(l){e=l}throw e}},Vt=0,D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),He(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),He(this))},D.prototype.render=$,V=[],Xt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Be=function(e,t){return e.__v.__b-t.__v.__b},be.__r=0,Zt=/(PointerCapture)$|Capture$/i,et=0,je=pt(!1),We=pt(!0),Gt=0;var Y,E,Le,_t,K=0,on=[],x=h,ht=x.__b,yt=x.__r,vt=x.diffed,gt=x.__c,bt=x.unmount,wt=x.__;function ee(e,t){x.__h&&x.__h(E,e,K||t),K=0;var n=E.__H||(E.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Q(e){return K=1,ot(mn,e)}function ot(e,t,n){var r=ee(Y++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):mn(void 0,t),function(l){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,l);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var o=function(l,u,f){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(p){return!!p.__c});if(m.every(function(p){return!p.__N}))return!a||a.call(this,l,u,f);var c=r.__c.props!==l;return m.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(c=!0)}}),a&&a.call(this,l,u,f)||c};E.u=!0;var a=E.shouldComponentUpdate,i=E.componentWillUpdate;E.componentWillUpdate=function(l,u,f){if(this.__e){var m=a;a=void 0,o(l,u,f),a=m}i&&i.call(this,l,u,f)},E.shouldComponentUpdate=o}return r.__N||r.__}function Ne(e,t){var n=ee(Y++,3);!x.__s&&at(n.__H,t)&&(n.__=e,n.i=t,E.__H.__h.push(n))}function j(e,t){var n=ee(Y++,4);!x.__s&&at(n.__H,t)&&(n.__=e,n.i=t,E.__h.push(n))}function an(e){return K=5,Ce(function(){return{current:e}},[])}function ln(e,t,n){K=6,j(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ce(e,t){var n=ee(Y++,7);return at(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function sn(e,t){return K=8,Ce(function(){return e},t)}function cn(e){var t=E.context[e.__c],n=ee(Y++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(E)),t.props.value):e.__}function un(e,t){x.useDebugValue&&x.useDebugValue(t?t(e):e)}function fn(){var e=ee(Y++,11);if(!e.__){for(var t=E.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function nr(){for(var e;e=on.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(Ue),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){E=null,ht&&ht(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),wt&&wt(e,t)},x.__r=function(e){yt&&yt(e),Y=0;var t=(E=e.__c).__H;t&&(Le===E?(t.__h=[],E.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(ye),t.__h.forEach(Ue),t.__h=[],Y=0)),Le=E},x.diffed=function(e){vt&&vt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(on.push(t)!==1&&_t===x.requestAnimationFrame||((_t=x.requestAnimationFrame)||rr)(nr)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Le=E=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ye),n.__h=n.__h.filter(function(r){return!r.__||Ue(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(r,n.__v)}}),gt&&gt(e,t)},x.unmount=function(e){bt&&bt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ye(r)}catch(o){t=o}}),n.__H=void 0,t&&x.__e(t,n.__v))};var Et=typeof requestAnimationFrame=="function";function rr(e){var t,n=function(){clearTimeout(r),Et&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Et&&(t=requestAnimationFrame(n))}function ye(e){var t=E,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),E=t}function Ue(e){var t=E;e.__c=e.__(),E=t}function at(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function mn(e,t){return typeof t=="function"?t(e):t}function dn(e,t){for(var n in t)e[n]=t[n];return e}function Ye(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function pn(e,t){var n=t(),r=Q({t:{__:n,u:t}}),o=r[0].t,a=r[1];return j(function(){o.__=n,o.u=t,Oe(o)&&a({t:o})},[e,n,t]),Ne(function(){return Oe(o)&&a({t:o}),e(function(){Oe(o)&&a({t:o})})},[e]),n}function Oe(e){var t,n,r=e.u,o=e.__;try{var a=r();return!((t=o)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function _n(e){e()}function hn(e){return e}function yn(){return[!1,_n]}var vn=j;function Ve(e,t){this.props=e,this.context=t}function or(e,t){function n(o){var a=this.props.ref,i=a==o.ref;return!i&&a&&(a.call?a(null):a.current=null),t?!t(this.props,o)||!i:Ye(this.props,o)}function r(o){return this.shouldComponentUpdate=n,z(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Ve.prototype=new D).isPureReactComponent=!0,Ve.prototype.shouldComponentUpdate=function(e,t){return Ye(this.props,e)||Ye(this.state,t)};var kt=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),kt&&kt(e)};var ar=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ir(e){function t(n){var r=dn({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ar,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var xt=function(e,t){return e==null?null:R(R(e).map(t))},lr={map:xt,forEach:xt,count:function(e){return e?R(e).length:0},only:function(e){var t=R(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:R},sr=h.__e;h.__e=function(e,t,n,r){if(e.then){for(var o,a=t;a=a.__;)if((o=a.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}sr(e,t,n,r)};var St=h.unmount;function gn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=dn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return gn(r,t,n)})),e}function bn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return bn(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ve(){this.__u=0,this.o=null,this.__b=null}function wn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function cr(e){var t,n,r;function o(a){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return z(n,a)}return o.displayName="Lazy",o.__f=!0,o}function oe(){this.i=null,this.l=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),St&&St(e)},(ve.prototype=new D).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var o=wn(r.__v),a=!1,i=function(){a||(a=!0,n.__R=null,o?o(l):l())};n.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=bn(u,u.__c.__P,u.__c.__O)}var f;for(r.setState({__a:r.__b=null});f=r.o.pop();)f.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},ve.prototype.componentWillUnmount=function(){this.o=[]},ve.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=gn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&z($,null,e.fallback);return o&&(o.__u&=-33),[z($,null,t.__a?null:e.children),o]};var Nt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function ur(e){return this.getChildContext=function(){return e.context},e.children}function fr(e){var t=this,n=e.h;t.componentWillUnmount=function(){J(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.h.insertBefore(r,o)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),J(z(ur,{context:t.context},e.__v),t.v)}function mr(e,t){var n=z(fr,{__v:e,h:t});return n.containerInfo=t,n}(oe.prototype=new D).__a=function(e){var t=this,n=wn(t.__v),r=t.l.get(e);return r[0]++,function(o){var a=function(){t.props.revealOrder?(r.push(o),Nt(t,e,r)):o()};n?n(a):a()}},oe.prototype.render=function(e){this.i=null,this.l=new Map;var t=R(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},oe.prototype.componentDidUpdate=oe.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Nt(e,n,t)})};var En=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,dr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,pr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,_r=/[A-Z0-9]/g,hr=typeof document<"u",yr=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function vr(e,t,n){return t.__k==null&&(t.textContent=""),J(e,t),typeof n=="function"&&n(),e?e.__c:null}function gr(e,t,n){return rn(e,t),typeof n=="function"&&n(),e?e.__c:null}D.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(D.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ct=h.event;function br(){}function wr(){return this.cancelBubble}function Er(){return this.defaultPrevented}h.event=function(e){return Ct&&(e=Ct(e)),e.persist=br,e.isPropagationStopped=wr,e.isDefaultPrevented=Er,e.nativeEvent=e};var it,kr={enumerable:!1,configurable:!0,get:function(){return this.class}},At=h.vnode;h.vnode=function(e){typeof e.type=="string"&&(function(t){var n=t.props,r=t.type,o={},a=r.indexOf("-")===-1;for(var i in n){var l=n[i];if(!(i==="value"&&"defaultValue"in n&&l==null||hr&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var u=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&l===!0?l="":u==="translate"&&l==="no"?l=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?i="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||yr(n.type)?u==="onfocus"?i="onfocusin":u==="onblur"?i="onfocusout":pr.test(i)&&(i=u):u=i="oninput":a&&dr.test(i)?i=i.replace(_r,"-$&").toLowerCase():l===null&&(l=void 0),u==="oninput"&&o[i=u]&&(i="oninputCapture"),o[i]=l}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=R(n.children).forEach(function(f){f.props.selected=o.value.indexOf(f.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=R(n.children).forEach(function(f){f.props.selected=o.multiple?o.defaultValue.indexOf(f.props.value)!=-1:o.defaultValue==f.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",kr)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o})(e),e.$$typeof=En,At&&At(e)};var Pt=h.__r;h.__r=function(e){Pt&&Pt(e),it=e.__c};var It=h.diffed;h.diffed=function(e){It&&It(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),it=null};var xr={ReactCurrentDispatcher:{current:{readContext:function(e){return it.__n[e.__c].props.value},useCallback:sn,useContext:cn,useDebugValue:un,useDeferredValue:hn,useEffect:Ne,useId:fn,useImperativeHandle:ln,useInsertionEffect:vn,useLayoutEffect:j,useMemo:Ce,useReducer:ot,useRef:an,useState:Q,useSyncExternalStore:pn,useTransition:yn}}};function Sr(e){return z.bind(null,e)}function Ae(e){return!!e&&e.$$typeof===En}function Nr(e){return Ae(e)&&e.type===$}function Cr(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Ar(e){return Ae(e)?er.apply(null,arguments):e}function Pr(e){return!!e.__k&&(J(null,e),!0)}function Ir(e){return e&&(e.base||e.nodeType===1&&e)||null}var Lr=function(e,t){return e(t)},Or=function(e,t){return e(t)},Tr=$,Mr=Ae,s={useState:Q,useId:fn,useReducer:ot,useEffect:Ne,useLayoutEffect:j,useInsertionEffect:vn,useTransition:yn,useDeferredValue:hn,useSyncExternalStore:pn,startTransition:_n,useRef:an,useImperativeHandle:ln,useMemo:Ce,useCallback:sn,useContext:cn,useDebugValue:un,version:"18.3.1",Children:lr,render:vr,hydrate:gr,unmountComponentAtNode:Pr,createPortal:mr,createElement:z,createContext:tr,createFactory:Sr,cloneElement:Ar,createRef:Zn,Fragment:$,isValidElement:Ae,isElement:Mr,isFragment:Nr,isMemo:Cr,findDOMNode:Ir,Component:D,PureComponent:Ve,memo:or,forwardRef:ir,flushSync:Or,unstable_batchedUpdates:Lr,StrictMode:Tr,Suspense:ve,SuspenseList:oe,lazy:cr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:xr};const le={show:!1},Dr=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),l=document.querySelector(".App-footer"),u=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),m=document.querySelector(".App"),c=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),d=document.querySelector(".spotify-panel"),g=document.querySelectorAll(".icon-nav"),k=document.querySelectorAll(".rotate-counterclockwise");de.rotation=-90,m.classList.add("about-open"),a.classList.add("about-open"),i.classList.add("about-open"),l.classList.add("about-open"),u.classList.add("about-open"),f.classList.add("about-open"),e.classList.add("about-open"),t.classList.add("about-open"),n.classList.add("about-open"),p.style.transform="rotate(90deg)",d.style.transform="rotate(90deg)",i.style.display="block",a.style.display="none",u.style.display="flex",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease, height 0.2s ease",e.style.transform="rotateZ(-90deg)",t.style.borderRadius="70px 15px 70px 15px",t.style.transform="rotateZ(90deg)",n.style.transform="rotateZ(90deg)",c.style.transform="rotateZ(90deg)";for(let _ of g)_.style.transform="rotateZ(90deg)";r.style.backgroundColor="#FF000099",r.style.color="#EEE",r.children[0].textContent="Back",r.onmouseover=()=>{r.style.backgroundColor="#FF0000DD",r.style.color="#FFF"},r.onmouseout=()=>{r.style.backgroundColor="#FF000099",r.style.color="#EEE"};for(let _ of k)_.classList.remove("rotate-counterclockwise"),_.classList.add("rotate-clockwise"),_.classList.add("rotated-about");o.style.opacity="0",a.style.opacity="0",a.style.pointerEvents="none",l.style.opacity="0",u.style.opacity="1",u.style.pointerEvents="all"},kn=()=>{const e=document.getElementById("Card"),t=document.querySelector(".pp_logo"),n=document.getElementById("switch"),r=document.getElementById("about-nav"),o=document.querySelector(".username"),a=document.querySelector(".App-about"),i=document.querySelector(".App-header"),l=document.querySelector(".App-footer"),u=document.querySelector(".App-about-extra"),f=document.querySelector(".navbar"),m=document.querySelector(".App"),c=document.querySelector(".threeD-info"),p=document.querySelector("#spotify-img"),d=document.querySelector(".spotify-panel"),g=document.querySelectorAll(".icon-nav"),k=document.querySelectorAll(".rotated-about");de.rotation=0,m.classList.remove("about-open"),a.classList.remove("about-open"),i.classList.remove("about-open"),l.classList.remove("about-open"),u.classList.remove("about-open"),f.classList.remove("about-open"),e.classList.remove("about-open"),t.classList.remove("about-open"),n.classList.remove("about-open"),p.style.transform="rotate(0deg)",d.style.transform="rotate(0deg)",a.style.display="block",u.style.display="none",window.innerWidth<=678?t.style.transition="none":t.style.transition="ease 0.2s",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease, height 0.2s ease",e.style.transform="rotateZ(0deg)",t.style.borderRadius="15px 70px 15px 70px",t.style.transform="rotateZ(0deg)",n.style.transform="rotateZ(0deg)",c.style.transform="rotateZ(0deg)";for(let _ of g)_.style.transform="rotateZ(0deg)";r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)",r.children[0].textContent="About",r.onmouseover=()=>{r.style.backgroundColor="#0000000D",r.style.color="rgb(0, 0,0, 0.6)"},r.onmouseout=()=>{r.style.backgroundColor="#00000008",r.style.color="rgb(0, 0,0, 0.2)"};for(let _ of k)_.classList.remove("rotated-about"),_.classList.remove("rotate-clockwise"),_.classList.add("rotate-counterclockwise");o.style.opacity="1",a.style.opacity="1",a.style.pointerEvents="all",l.style.opacity="1",u.style.opacity="0",u.style.pointerEvents="none"},zr=()=>{U.show&&(U.show=!1,xn()),le.show=!le.show,le.show?Dr():kn()},U={show:!1,card3D:!1,onAbout:!1},Fr=(e,t)=>{document.querySelector(".Card");const n=document.querySelector(".App-about"),r=document.querySelector(".App-header"),o=document.querySelector(".App-footer"),a=document.querySelector(".App-portfolio"),i=document.getElementById("portfolio-nav"),l=document.querySelector(".pp_logo");l.style.transition="none",a.style.opacity="1",a.style.display="flex",i.style.backgroundColor="#FF000099",i.style.color="#EEE",i.children[0].textContent="Back",i.onmouseover=()=>{i.style.backgroundColor="#FF0000DD",i.style.color="#FFF"},i.onmouseout=()=>{i.style.backgroundColor="#FF000099",i.style.color="#EEE"},n.style.display="none",r.style.opacity="0",r.style.position="absolute",o.style.display="none",l.style.pointerEvents="none"},xn=(e,t)=>{document.querySelector(".Card");const n=document.querySelector(".App-about"),r=document.querySelector(".App-header"),o=document.querySelector(".App-footer"),a=document.querySelector(".App-portfolio"),i=document.getElementById("portfolio-nav"),l=document.querySelector(".pp_logo");a.style.opacity="0",a.style.display="none",i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)",i.children[0].textContent="Portfolio",i.onmouseover=()=>{i.style.backgroundColor="#0000000D",i.style.color="rgb(0, 0,0, 0.6)"},i.onmouseout=()=>{i.style.backgroundColor="#00000008",i.style.color="rgb(0, 0,0, 0.2)"},n.style.display="block",r.style.opacity="1",r.style.position="static",o.style.display="flex",l.style.pointerEvents="all"},Rr=()=>{le.show&&(U.onAbout=!0,le.show=!1,kn()),U.show=!U.show,U.show?Fr():xn()},de={rotation:0},$r=(e,t)=>n=>{const r=(window.innerWidth/2-n.pageX)/10,o=(window.innerHeight/2-n.pageY)/20;t.style.cursor="pointer",(de.rotation==0?r>0&&o>0:r>0&&o<0)?e.style.opacity="1":e.style.opacity="0"},qr=e=>()=>{e.style.opacity="0"},Br=e=>t=>{const n=(window.innerWidth/2-t.pageX)/10,r=(window.innerHeight/2-t.pageY)/20,o=de.rotation;e.style.transition="transform 0.1s ease, box-shadow 0.1s ease, border-radius 0.5s ease, height 0.2s ease",e.style.transform=`rotateZ(${o}deg) rotateY(${o==0?n:r*-1}deg) rotateX(${o==0?r*-1:n*-1}deg)`,e.style.boxShadow=`${o==0?n*-1:r}px ${o==0?r*-1:n*-1}px 30px rgba(0, 0, 0, 0.4) `},jr=(e,t)=>()=>{t.style.opacity="0",e.style.transition="transform 0.5s ease, box-shadow 0.5s ease, border-radius 0.5s ease, height 0.2s ease",e.style.transform=`rotateZ(${de.rotation}deg) rotateY(0deg) rotateX(0deg)`,e.style.boxShadow="0px 0px 15px rgba(0, 0, 0, 0.4)"},I={showSwitch:null,hideSwitch:null,cardFollowCursor3D:null,cardResetState3D:null},Wr=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch"),n=document.querySelector(".slider");I.showSwitch=$r(t,n),I.hideSwitch=qr(t),e.addEventListener("mousemove",I.showSwitch,!1),e.addEventListener("mouseout",I.hideSwitch,!1)},Lt=()=>{const e=document.getElementById("Card"),t=document.getElementById("switch");I.cardFollowCursor3D=Br(e),I.cardResetState3D=jr(e,t),e.addEventListener("mousemove",I.cardFollowCursor3D,!1),e.addEventListener("mouseout",I.cardResetState3D,!1),U.card3D=!0},Hr=()=>{const e=document.getElementById("Card");e.removeEventListener("mousemove",I.cardFollowCursor3D,!1),e.removeEventListener("mouseout",I.cardResetState3D,!1),I.cardResetState3D(),U.card3D=!1};function Ur(){const[e,t]=s.useState(!1);return j(()=>{const n=document.getElementById("pp"),r=document.querySelector(".pp_logo"),o=document.querySelector(".threeD-info");n.addEventListener("mouseleave",()=>{o.style.opacity="0",o.style.scale="1.0"}),n.addEventListener("mouseenter",()=>{r.style.transition="ease 0.2s",o.style.opacity="1",o.style.scale="1.05"}),n.addEventListener("mousedown",a=>{o.style.opacity="1",o.style.scale="1.1",o.style.display="none"}),n.addEventListener("mouseup",a=>{o.style.opacity="1",o.style.scale="1.05"}),localStorage.getItem("mode3D")==="true"?(t(!0),o.style.display="none",setTimeout(()=>{Lt(),document.getElementById("pp").style.pointerEvents="auto"},2e3)):(t(!1),setTimeout(()=>{document.getElementById("pp").style.pointerEvents="auto"},2e3))},[]),s.createElement("header",{style:"pointer-events: none;",className:"App-header"},s.createElement("p",null,s.createElement("a",{id:"pp",onMouseDown:n=>e?(t(!1),Hr(),localStorage.setItem("mode3D","false")):(t(!0),Lt(),I.cardFollowCursor3D(n),localStorage.setItem("mode3D","true"))},s.createElement("img",{className:"pp_logo",src:"https://avatars.githubusercontent.com/u/18515671?v=4",alt:"Berikai",onLoad:()=>{document.querySelector(".App").style.opacity=1,document.querySelector(".Card").style.animation="CardFrame 2s ease-in-out",document.querySelector(".pp_logo").style.animation="ProfileFrame 2s ease-in-out"}}),s.createElement("p",{className:"threeD-info"},"Tap to switch 3D"))),s.createElement("div",{className:"username"},"Berikai",s.createElement("div",{className:"aka"},"also known as Verdant")))}function Yr(){return s.createElement("div",{className:"App-about"},s.createElement("p",{className:"text-info"},"I love software tech and bass music"),s.createElement("ul",{className:"ul-padding"},s.createElement("li",{className:"li-element"},"🇹🇷   İzmir, Turkey "),s.createElement("li",{className:"li-element"},"🖥️   Software Enthusiast"),s.createElement("li",{className:"li-element"},"🎵   Dubstep, Drum 'n Bass, Experimental")),s.createElement("p",{className:"socials",align:"left"},s.createElement("a",{className:"padding-inline",href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},s.createElement("img",{src:"https://www.svgrepo.com/show/35013/soundcloud.svg",width:"24",height:"24",alt:"Soundcloud"})),s.createElement("a",{className:"padding-inline",href:"https://discordapp.com/users/385498463745343490",target:"_blank",rel:"noreferrer"},s.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg",width:"24",height:"24",alt:"Discord"})),s.createElement("a",{className:"padding-inline",href:"https://www.github.com/Berikai",target:"_blank",rel:"noreferrer"},s.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",width:"24",height:"24",alt:"Github"})),s.createElement("a",{className:"padding-inline",href:"http://www.instagram.com/verdantbass",target:"_blank",rel:"noreferrer"},s.createElement("img",{src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg",width:"24",height:"24",alt:"Instagram"})),s.createElement("a",{className:"padding-inline",href:"https://www.twitter.com/verdantbass",target:"_blank",rel:"noreferrer"},s.createElement("img",{class:"dark",src:"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg",width:"24",height:"24",alt:"Twitter"}))))}function Vr(){return s.createElement("div",{className:"App-about-extra",style:"opacity: 0;transition: transform 0.1s;"},s.createElement("p",{className:"title-about"},"About Me"),s.createElement("p",{className:"text-about"},"My name is Berkay Eren Konuk, but I usually go by the names ",s.createElement("b",null,"Berikai")," or ",s.createElement("b",null,"Verdant")," online."),s.createElement("p",{className:"text-about"},`I'm a big fan of open source and I love learning new things about software technologies. ...and "I use Arch, btw." 😄`),s.createElement("p",{className:"text-about"},"I create dubstep and drum and bass oriented experimental music. You can check out my music on ",s.createElement("a",{href:"https://soundcloud.com/verdantbass",target:"_blank",rel:"noreferrer"},"Soundcloud"),"."),s.createElement("p",{className:"text-about"},"I'm currently studying mechatronics engineering (sophomore) in ",s.createElement("i",null,"Izmir University of Economics"),"."))}const Xr="/assets/portfolio_bte2-nVPjHO8p.png",Zr="/assets/portfolio_pixbud-DaWc0YR1.gif",Gr="/assets/portfolio_ixt-DUWaDKJR.png",Jr="/assets/portfolio_audiculator-DxZV9zFB.gif";function se(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?se=function(t){return typeof t}:se=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function Kr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eo(e,t,n){return t&&Qr(e.prototype,t),e}function to(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){to(e,o,n[o])})}return e}function Sn(e,t){return no(e)||ro(e,t)||oo()}function no(e){if(Array.isArray(e))return e}function ro(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),l;!(r=(l=i.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(u){o=!0,a=u}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}function oo(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Ot=function(){},lt={},Nn={},ao=null,Cn={mark:Ot,measure:Ot};try{typeof window<"u"&&(lt=window),typeof document<"u"&&(Nn=document),typeof MutationObserver<"u"&&(ao=MutationObserver),typeof performance<"u"&&(Cn=performance)}catch{}var io=lt.navigator||{},Tt=io.userAgent,Mt=Tt===void 0?"":Tt,Pe=lt,N=Nn,_e=Cn;Pe.document;var st=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function";~Mt.indexOf("MSIE")||~Mt.indexOf("Trident/");var q="___FONT_AWESOME___",An="fa",Pn="svg-inline--fa",lo="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Te={GROUP:"group",PRIMARY:"primary",SECONDARY:"secondary"},In=Pe.FontAwesomeConfig||{};function so(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function co(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(N&&typeof N.querySelector=="function"){var uo=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uo.forEach(function(e){var t=Sn(e,2),n=t[0],r=t[1],o=co(so(n));o!=null&&(In[r]=o)})}var fo={familyPrefix:An,replacementClass:Pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xe=b({},fo,In);Xe.autoReplaceSvg||(Xe.observeMutations=!1);var A=b({},Xe);Pe.FontAwesomeConfig=A;var B=Pe||{};B[q]||(B[q]={});B[q].styles||(B[q].styles={});B[q].hooks||(B[q].hooks={});B[q].shims||(B[q].shims=[]);var M=B[q],mo=[],po=function e(){N.removeEventListener("DOMContentLoaded",e),Ze=1,mo.map(function(t){return t()})},Ze=!1;st&&(Ze=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ze||N.addEventListener("DOMContentLoaded",po));var ct="pending",Ln="settled",we="fulfilled",Ee="rejected",_o=function(){},On=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",ho=typeof setImmediate>"u"?setTimeout:setImmediate,ae=[],Ge;function yo(){for(var e=0;e<ae.length;e++)ae[e][0](ae[e][1]);ae=[],Ge=!1}function ke(e,t){ae.push([e,t]),Ge||(Ge=!0,ho(yo,0))}function vo(e,t){function n(o){ut(t,o)}function r(o){fe(t,o)}try{e(n,r)}catch(o){r(o)}}function Tn(e){var t=e.owner,n=t._state,r=t._data,o=e[n],a=e.then;if(typeof o=="function"){n=we;try{r=o(r)}catch(i){fe(a,i)}}Mn(a,r)||(n===we&&ut(a,r),n===Ee&&fe(a,r))}function Mn(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||se(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(o){n||(n=!0,t===o?Dn(e,o):ut(e,o))},function(o){n||(n=!0,fe(e,o))}),!0}}catch(o){return n||fe(e,o),!0}return!1}function ut(e,t){(e===t||!Mn(e,t))&&Dn(e,t)}function Dn(e,t){e._state===ct&&(e._state=Ln,e._data=t,ke(go,e))}function fe(e,t){e._state===ct&&(e._state=Ln,e._data=t,ke(bo,e))}function zn(e){e._then=e._then.forEach(Tn)}function go(e){e._state=we,zn(e)}function bo(e){e._state=Ee,zn(e),!e._handled&&On&&global.process.emit("unhandledRejection",e._data,e)}function wo(e){global.process.emit("rejectionHandled",e)}function L(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof L))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],vo(e,this)}L.prototype={constructor:L,_state:ct,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(_o),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===Ee&&On&&ke(wo,this)),this._state===we||this._state===Ee?ke(Tn,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}};L.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new L(function(t,n){var r=[],o=0;function a(u){return o++,function(f){r[u]=f,--o||t(r)}}for(var i=0,l;i<e.length;i++)l=e[i],l&&typeof l.then=="function"?l.then(a(i),n):r[i]=l;o||t(r)})};L.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new L(function(t,n){for(var r=0,o;r<e.length;r++)o=e[r],o&&typeof o.then=="function"?o.then(t,n):t(o)})};L.resolve=function(e){return e&&se(e)==="object"&&e.constructor===L?e:new L(function(t){t(e)})};L.reject=function(e){return new L(function(t,n){n(e)})};var Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Eo(e){if(!(!e||!st)){var t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=N.head.childNodes,r=null,o=n.length-1;o>-1;o--){var a=n[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=a)}return N.head.insertBefore(t,r),e}}var ko="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){for(var e=12,t="";e-- >0;)t+=ko[Math.random()*62|0];return t}function Fn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fn(e[n]),'" ')},"").trim()}function Rn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function $n(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function qn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(i," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:u,path:f}}var Me={x:0,y:0,width:"100%",height:"100%"};function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function So(e){return e.tag==="g"?e.children:[e]}function No(e){var t=e.children,n=e.attributes,r=e.main,o=e.mask,a=e.maskId,i=e.transform,l=r.width,u=r.icon,f=o.width,m=o.icon,c=qn({transform:i,containerWidth:f,iconWidth:l}),p={tag:"rect",attributes:b({},Me,{fill:"white"})},d=u.children?{children:u.children.map(Dt)}:{},g={tag:"g",attributes:b({},c.inner),children:[Dt(b({tag:u.tag,attributes:b({},u.attributes,c.path)},d))]},k={tag:"g",attributes:b({},c.outer),children:[g]},_="mask-".concat(a||xe()),y="clip-".concat(a||xe()),v={tag:"mask",attributes:b({},Me,{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,k]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:So(m)},v]};return t.push(O,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Me)}),{children:t,attributes:n}}function Co(e){var t=e.children,n=e.attributes,r=e.main,o=e.transform,a=e.styles,i=Rn(a);if(i.length>0&&(n.style=i),$n(o)){var l=qn({transform:o,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:b({},l.outer),children:[{tag:"g",attributes:b({},l.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b({},r.icon.attributes,l.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function Ao(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,a=e.styles,i=e.transform;if($n(i)&&n.found&&!r.found){var l=n.width,u=n.height,f={x:l/u/2,y:.5};o.style=Rn(b({},a,{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Po(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,a=e.symbol,i=a===!0?"".concat(t,"-").concat(A.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b({},o,{id:i}),children:r}]}]}function Io(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,a=e.iconName,i=e.transform,l=e.symbol,u=e.title,f=e.maskId,m=e.titleId,c=e.extra,p=e.watchable,d=p===void 0?!1:p,g=r.found?r:n,k=g.width,_=g.height,y=o==="fak",v=y?"":"fa-w-".concat(Math.ceil(k/_*16)),O=[A.replacementClass,a?"".concat(A.familyPrefix,"-").concat(a):"",v].filter(function(H){return c.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(c.classes).join(" "),S={children:[],attributes:b({},c.attributes,{"data-prefix":o,"data-icon":a,class:O,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(_)})},W=y&&!~c.classes.indexOf("fa-fw")?{width:"".concat(k/_*16*.0625,"em")}:{};d&&(S.attributes[lo]=""),u&&S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(m||xe())},children:[u]});var C=b({},S,{prefix:o,iconName:a,main:n,mask:r,maskId:f,transform:i,symbol:l,styles:b({},W,c.styles)}),te=r.found&&n.found?No(C):Co(C),X=te.children,ne=te.attributes;return C.children=X,C.attributes=ne,l?Po(C):Ao(C)}A.measurePerformance&&_e&&_e.mark&&_e.measure;var De=function(t,n,r,o){var a=Object.keys(t),i=a.length,l=n,u,f,m;for(r===void 0?(u=1,m=t[a[0]]):(u=0,m=r);u<i;u++)f=a[u],m=l(m,t[f],f,t);return m};function Bn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,a=Object.keys(t).reduce(function(i,l){var u=t[l],f=!!u.icon;return f?i[u.iconName]=u.icon:i[l]=u,i},{});typeof M.hooks.addPack=="function"&&!o?M.hooks.addPack(e,a):M.styles[e]=b({},M.styles[e]||{},a),e==="fas"&&Bn("fa",t)}var zt=M.styles,Lo=M.shims,jn=function(){var t=function(o){return De(zt,function(a,i,l){return a[l]=De(i,o,{}),a},{})};t(function(r,o,a){return o[3]&&(r[o[3]]=a),r}),t(function(r,o,a){var i=o[2];return r[a]=a,i.forEach(function(l){r[l]=a}),r});var n="far"in zt;De(Lo,function(r,o){var a=o[0],i=o[1],l=o[2];return i==="far"&&!n&&(i="fas"),r[a]={prefix:i,iconName:l},r},{})};jn();M.styles;function Ft(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Wn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,a=o===void 0?[]:o;return typeof e=="string"?Fn(e):"<".concat(t," ").concat(xo(r),">").concat(a.map(Wn).join(""),"</").concat(t,">")}var Oo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,o){var a=o.toLowerCase().split("-"),i=a[0],l=a.slice(1).join("-");if(i&&l==="h")return r.flipX=!0,r;if(i&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(i){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n):n};function Je(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}Je.prototype=Object.create(Error.prototype);Je.prototype.constructor=Je;var Ie={fill:"currentColor"},Hn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};b({},Ie,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ft=b({},Hn,{attributeName:"opacity"});b({},Ie,{cx:"256",cy:"364",r:"28"}),b({},Hn,{attributeName:"r",values:"28;14;28;28;14;28;"}),b({},ft,{values:"1;0;1;1;0;1;"});b({},Ie,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),b({},ft,{values:"1;0;0;0;0;1;"});b({},Ie,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),b({},ft,{values:"0;0;1;1;0;0;"});M.styles;function Rt(e){var t=e[0],n=e[1],r=e.slice(4),o=Sn(r,1),a=o[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(A.familyPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:i}}M.styles;var To=`svg:not(:root).svg-inline--fa {
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
}`;function Mo(){var e=An,t=Pn,n=A.familyPrefix,r=A.replacementClass,o=To;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return o}var Do=(function(){function e(){Kr(this,e),this.definitions={}}return eo(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(l){n.definitions[l]=b({},n.definitions[l]||{},i[l]),Bn(l,i[l]),jn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(a){var i=o[a],l=i.prefix,u=i.iconName,f=i.icon;n[l]||(n[l]={}),n[l][u]=f}),n}}]),e})();function zo(){A.autoAddCss&&!qt&&(Eo(Mo()),qt=!0)}function Fo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(st){var r=N.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $t(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return Ft($o.definitions,n,r)||Ft(M.styles,n,r)}function Ro(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$t(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:$t(o||{})),e(r,b({},n,{mask:o}))}}var $o=new Do,qt=!1,qo={transform:function(t){return Oo(t)}},Bo=Ro(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Z:n,o=t.symbol,a=o===void 0?!1:o,i=t.mask,l=i===void 0?null:i,u=t.maskId,f=u===void 0?null:u,m=t.title,c=m===void 0?null:m,p=t.titleId,d=p===void 0?null:p,g=t.classes,k=g===void 0?[]:g,_=t.attributes,y=_===void 0?{}:_,v=t.styles,O=v===void 0?{}:v;if(e){var S=e.prefix,W=e.iconName,C=e.icon;return Fo(b({type:"icon"},e),function(){return zo(),A.autoA11y&&(c?y["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(d||xe()):(y["aria-hidden"]="true",y.focusable="false")),Io({icons:{main:Rt(C),mask:l?Rt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:W,transform:b({},Z,r),symbol:a,title:c,maskId:f,titleId:d,extra:{attributes:y,styles:O,classes:k}})})}});function jo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze={exports:{}},Fe,Bt;function Wo(){if(Bt)return Fe;Bt=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fe=e,Fe}var Re,jt;function Ho(){if(jt)return Re;jt=1;var e=Wo();function t(){}function n(){}return n.resetWarningCache=t,Re=function(){function r(i,l,u,f,m,c){if(c!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function o(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},Re}var Wt;function Uo(){return Wt||(Wt=1,ze.exports=Ho()()),ze.exports}var Yo=Uo();const w=jo(Yo);function ge(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ge=function(t){return typeof t}:ge=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ce(e,o,n[o])})}return e}function Vo(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xo(e,t){if(e==null)return{};var n=Vo(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qe(e){return Zo(e)||Go(e)||Jo()}function Zo(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Go(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Jo(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Un(e){return typeof e!="string"?e:(e=e.replace(/[-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.charAt(0).toLowerCase()+e.substring(1))}function Ko(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Qo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=Un(n.slice(0,r)),a=n.slice(r+1).trim();return o.startsWith("webkit")?t[Ko(o)]=a:t[o]=a,t},{})}function Yn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Yn(e,u)}),o=Object.keys(t.attributes||{}).reduce(function(u,f){var m=t.attributes[f];switch(f){case"class":u.attrs.className=m,delete t.attributes.class;break;case"style":u.attrs.style=Qo(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[Un(f)]=m}return u},{attrs:{}}),a=n.style,i=a===void 0?{}:a,l=Xo(n,["style"]);return o.attrs.style=Ke({},o.attrs.style,i),e.apply(void 0,[t.tag,Ke({},o.attrs,l)].concat(Qe(r)))}var Vn=!1;try{Vn=!0}catch{}function ea(){if(!Vn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $e(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function ta(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ht(e){if(e===null)return null;if(ge(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function P(e){var t=e.icon,n=e.mask,r=e.symbol,o=e.className,a=e.title,i=Ht(t),l=$e("classes",[].concat(Qe(ta(e)),Qe(o.split(" ")))),u=$e("transform",typeof e.transform=="string"?qo.transform(e.transform):e.transform),f=$e("mask",Ht(n)),m=Bo(i,Ke({},l,u,f,{symbol:r,title:a}));if(!m)return ea("Could not find icon",i),null;var c=m.abstract,p={};return Object.keys(e).forEach(function(d){P.defaultProps.hasOwnProperty(d)||(p[d]=e[d])}),na(c[0],p)}P.displayName="FontAwesomeIcon";P.propTypes={border:w.bool,className:w.string,mask:w.oneOfType([w.object,w.array,w.string]),fixedWidth:w.bool,inverse:w.bool,flip:w.oneOf(["horizontal","vertical","both"]),icon:w.oneOfType([w.object,w.array,w.string]),listItem:w.bool,pull:w.oneOf(["right","left"]),pulse:w.bool,rotation:w.oneOf([90,180,270]),size:w.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.bool,symbol:w.oneOfType([w.bool,w.string]),title:w.string,transform:w.oneOfType([w.string,w.object])};P.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var na=Yn.bind(null,z);var ra={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.8 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8 103.7-81.8 50.5-135 50.5-135 21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zM307 104.6c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9C216 188.1 195.4 169.3 307 104.6zm-6.1 270.5c-.5 1-1.2 1.8-2 2.6 128.3-33.7 81.1-118.9 19.8-97.3-3.3 1.2-6.2 3.4-8.2 6.3 3.6-1.3 7.3-2.3 11-3 31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2 204.2 33.2 372.4-14.9 319.4-38.8zM124.5 396c-78.7 22 47.9 67.4 148.1 24.5-9.8-3.8-19.2-8.4-28.2-13.8-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.7 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9-7.8-2.8-15-7.1-21.1-12.8z"]},oa={prefix:"fab",iconName:"css",icon:[448,512,[],"e6a2","M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"]},Ut={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},aa={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32L34.9 427.8 191.5 480 349.1 427.8 384 32 0 32zM308.2 159.9l-183.8 0 4.1 49.4 175.6 0-13.6 148.4-97.9 27 0 .3-1.1 0-98.7-27.3-6-75.8 47.7 0 3.5 38.1 53.5 14.5 53.7-14.5 6-62.2-166.9 0-12.8-145.6 241.1 0-4.4 47.7z"]},ia={prefix:"fab",iconName:"node-js",icon:[448,512,[],"f3d3","M224.5 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0L412 367.5c1.7-1 2.8-3 2.8-5l0-213.2c0-2.1-1.1-4-2.9-5.1L227.3 37.7c-1.7-1-4-1-5.7 0L37.1 144.3c-1.8 1-2.9 3-2.9 5.1l0 213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7l0-210.4c0-3 2.4-5.3 5.4-5.3l23.4 0c2.9 0 5.4 2.3 5.4 5.3l0 210.5c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6L20.6 396.1c-12-6.9-19.4-19.8-19.4-33.7l0-213.1c0-13.8 7.4-26.8 19.4-33.7L205.1 9c11.7-6.6 27.2-6.6 38.8 0L428.6 115.7c12 6.9 19.4 19.8 19.4 33.7l0 213.1c0 13.8-7.4 26.7-19.4 33.7L243.9 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zM373.6 297.9c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2l24 0c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5l-23.9 0c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"]};function la(){return s.createElement("div",{className:"App-portfolio",style:"opacity: 0;transition: transform 0.1s;"},s.createElement("p",{className:"title-about"},"Portfolio"),s.createElement("p",{className:"text-about"},"Here, you can find some of my projects"),s.createElement("div",{className:"portfolio"},s.createElement("div",{className:"portfolio-element"},s.createElement("div",{className:"portfolio-element-inner"},s.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://ixt.to"}),s.createElement("img",{className:"portfolio-img",width:88,src:Gr,alt:"ixt.to"}),s.createElement("div",{className:"portfolio-element-content dark"},s.createElement("div",{className:"portfolio-element-title dark"},"ixt"),s.createElement("div",{className:"portfolio-element-info dark"},"Stop emailing yourself notes. A fast, simple way to share text in real-time. No login required, ever."),s.createElement("div",{className:"portfolio-element-info framework dark"},s.createElement("div",{className:"portfolio-element-info"},"Built with:"),s.createElement(P,{icon:ia,style:{color:"#14c63b"}}),s.createElement(P,{icon:aa,style:{color:"#ff9200"}}),s.createElement(P,{icon:oa,style:{color:"#74C0FC"}}),s.createElement(P,{icon:Ut,style:{color:"#FFD43B"}}))))),s.createElement("div",{className:"portfolio-element"},s.createElement("div",{className:"portfolio-element-inner"},s.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/bitwig-theme-editor"}),s.createElement("img",{className:"portfolio-img",width:88,src:Xr,alt:"Bitwig Theme Editor"}),s.createElement("div",{className:"portfolio-element-content dark"},s.createElement("div",{className:"portfolio-element-title dark"},"Bitwig Theme Editor"),s.createElement("div",{className:"portfolio-element-info dark"},"A patcher for Bitwig Studio, customize the appearance of the most modular DAW in the world!"),s.createElement("div",{className:"portfolio-element-info framework dark"},s.createElement("div",{className:"portfolio-element-info"},"Built with:"),s.createElement(P,{icon:ra,style:{color:"#ff2600"}}))))),s.createElement("div",{className:"portfolio-element"},s.createElement("div",{className:"portfolio-element-inner"},s.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://audiculator.berikai.dev"}),s.createElement("img",{className:"portfolio-img",width:88,src:Jr,alt:"Bitwig Theme Editor WebUI"}),s.createElement("div",{className:"portfolio-element-content dark"},s.createElement("div",{className:"portfolio-element-title dark"},"Audiculator"),s.createElement("div",{className:"portfolio-element-info dark"},"A web-based real-time 3D audio visualizer with rich features, powered by three.js "),s.createElement("div",{className:"portfolio-element-info framework dark"},s.createElement("div",{className:"portfolio-element-info"},"Built with:"),s.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",width:12,height:12,alt:"ThreeJS Logo",style:{opacity:.7}}),s.createElement(P,{icon:Ut,style:{color:"#FFD43B"}}))))),s.createElement("div",{className:"portfolio-element"},s.createElement("div",{className:"portfolio-element-inner"},s.createElement("a",{className:"portfolio-element-overlay",target:"_blank",rel:"noreferrer",href:"https://github.com/Berikai/data/tree/main/pixbud",onClick:e=>{e.preventDefault(),window.confirm(`This project is not finished and as of now it's closed source. You'll be redirected to a github page to download the Windows binaries of its prototype.

Would you like to continue?`)&&window.open(e.target.href,"_blank")}}),s.createElement("img",{className:"portfolio-img",width:88,src:Zr,alt:"Pixbud"}),s.createElement("div",{className:"portfolio-element-content dark"},s.createElement("div",{className:"portfolio-element-title dark"},"Pixbud"),s.createElement("div",{className:"portfolio-element-info dark"},"Your desktop buddy, loves to hang around on the rooftops of your application windows"),s.createElement("div",{className:"portfolio-element-info framework dark"},s.createElement("div",{className:"portfolio-element-info"},"Built with:"),s.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",width:12,height:12,alt:".NET Logo",style:{opacity:.7}}),s.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",width:12,height:12,alt:"WinAPI Logo",style:{opacity:.7}}))))),s.createElement("div",{className:"text-about",style:"margin-top: 4px;"},"and many more, check my ",s.createElement("a",{href:"https://github.com/berikai",target:"_blank",rel:"noreferrer"},"Github"),"!")))}function sa(){const[e,t]=Q(0),n=()=>t(r=>r+1);return Ne(()=>{e===15?alert("You really love hearts, don't you? ❤️"):e===40&&window.open("https://api.berikai.dev","_blank")},[e]),s.createElement("footer",{className:"App-footer"},s.createElement("p",{className:"p-footer"},"Made with"," ",s.createElement("button",{type:"button",onClick:n,"aria-label":"Heart",style:{border:"none",background:"transparent",cursor:"pointer",padding:0}},s.createElement("heart",null,"❤️"))," ","by Berikai"))}const qe=e=>{const t=document.getElementById("Card"),n=document.querySelectorAll(".dark");if(e){document.body.style.backgroundColor="#222",document.body.style.color="#fff",t.style.backgroundColor="#222";for(let r of n)r.style.filter="invert(1)"}else{document.body.style.backgroundColor="#fff",document.body.style.color="#000",t.style.backgroundColor="#fff";for(let r of n)r.style.filter="invert(0)"}};function ca(){return j(()=>{const e=document.getElementById("mode_switch");localStorage.getItem("themeMode")==="dark"&&(e.checked=!0,qe(!0)),setTimeout(()=>{e.addEventListener("change",t=>{t.target.checked?(localStorage.setItem("themeMode","dark"),qe(!0)):(localStorage.setItem("themeMode","light"),qe(!1))})},2e3)},[]),s.createElement("div",{className:"switch"},s.createElement("label",{id:"switch",className:"switch",style:"opacity: 0; transition: 0.4s, transform 0.2s;"},s.createElement("input",{id:"mode_switch",type:"checkbox"}),s.createElement("span",{className:"slider round"})))}function he({id:e=null,text:t,rotation:n,action:r=()=>{},href:o=null}){return s.createElement("a",{...e?{id:e}:{},className:"nav-button dark",onClick:r,...o?{href:o}:{},target:"_blank",rel:"noreferrer"},s.createElement("span",{className:n=="rl"?"rotate-clockwise":"rotate-counterclockwise"},t))}const ua=()=>{document.querySelector(".modal").style.opacity="0",setTimeout(()=>{document.querySelector(".modal").style.display="none"},200)};function fa(){return s.createElement("div",{className:"modal",onClick:()=>ua()},s.createElement("div",{className:"modal-content"},s.createElement("div",{className:"modal-box dark"},s.createElement("text",{className:"dark"},"The page you are trying to view is currently in development."),s.createElement("text",{className:"dark"},"Thank you for your patience."))))}const Yt={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};function ma(){return s.createElement("nav",{className:"navbar"},s.createElement("div",{className:"navbar-half1"},s.createElement(he,{id:"about-nav",text:"About",rotation:"rl",action:()=>zr()}),s.createElement(he,{link:!0,text:s.createElement(s.Fragment,null,s.createElement(P,{className:"icon-nav-rl",size:"xs",icon:Yt}),s.createElement(s.Fragment,null,"Blog")),rotation:"rl",href:"https://blog.berikai.dev"})),s.createElement("div",{className:"navbar-half2"},s.createElement(he,{link:!0,text:s.createElement(s.Fragment,null,s.createElement(P,{className:"icon-nav-lr",size:"xs",icon:Yt}),s.createElement(s.Fragment,null,"Console")),rotation:"lr",href:"https://console.berikai.dev"}),s.createElement(he,{id:"portfolio-nav",text:"Portfolio",rotation:"lr",action:()=>Rr()})))}function da(){let e={};const[t,n]=Q({}),[r,o]=Q(0);let a=[];const i=()=>{const l=document.querySelector(".spotify"),u=document.querySelector(".spotify-panel"),f=document.querySelector(".spotify-container");fetch("https://api.berikai.dev/spotify/current").then(m=>m.json()).then(m=>{if(m.error){(m.error!="Not authenticated"||m.error!="No track playing")&&console.error("Spotify API Error: "+m.error),f.style.opacity=0,l.style.opacity=0,l.style.pointerEvents="none";return}f.style.opacity=1,l.style.opacity=1,l.style.pointerEvents="all",a.forEach(p=>clearInterval(p)),e=m,n(m),u.style.opacity==1?l.getElementsByTagName("a")[0].href=e.item?.external_urls.spotify:l.getElementsByTagName("a")[0].removeAttribute("href"),o(m.progress_ms);const c=setInterval(()=>{o(p=>{const d=p+1e3;return d>=m.item?.duration_ms&&(a.forEach(g=>clearInterval(g)),i(),console.log("Song ended, fetching new song...")),d})},1e3);a.push(c)})};return j(()=>{setTimeout(()=>{const l=document.querySelector(".spotify"),u=document.querySelector(".spotify-panel"),f=document.querySelector(".spotify-container");i(),setInterval(()=>{console.log("Fetching current playing song..."),i()},2e4),l.addEventListener("mousemove",()=>{u.style.opacity=1,setTimeout(()=>{l.getElementsByTagName("a")[0].href=e.item?.external_urls.spotify},200)}),f.addEventListener("mouseleave",()=>{u.style.opacity=0,setTimeout(()=>{l.getElementsByTagName("a")[0].removeAttribute("href")},200)}),f.style.opacity=1},2e3)},[]),s.createElement("div",{className:"spotify-container",style:"opacity: 0;"},s.createElement("div",{className:"spotify-panel"},s.createElement("div",{className:"spotify-panel-content dark"},s.createElement("img",{className:"spotify-artwork dark",src:t.item?.album.images[2].url,width:"33"}),s.createElement("div",{className:"spotify-info dark"},s.createElement("div",{className:"text-spotify",style:"display:flex;justify-content:space-between;font-size: 8px;"},s.createElement("span",null,"I'm currently listening"),s.createElement("span",null,Math.floor(r/6e4),":",Math.floor(r%6e4/1e3).toFixed(0).padStart(2,"0")," / ",Math.floor(t.item?.duration_ms/6e4),":",Math.floor(t.item?.duration_ms%6e4/1e3).toFixed(0).padStart(2,"0"))),s.createElement("div",{className:"text-spotify"},s.createElement("b",null,t.item?.artists.length<4?t.item?.artists.map(l=>l.name).join(", "):t.item?.artists[0].name," - ",t.item?.name))))),s.createElement("div",{className:"spotify",style:"opacity: 0;"},s.createElement("a",{target:"_blank",rel:"noreferrer"},s.createElement("img",{id:"spotify-img",src:"https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",width:"24"}))))}function pa(){return j(()=>{setTimeout(()=>{Wr()},2600)},[]),s.createElement("div",{className:"App",style:"opacity: 0; transition: opacity 0.2s;"},s.createElement(fa,null),s.createElement("div",{className:"App-scale"},s.createElement("div",{id:"Card",className:"Card"},s.createElement(ca,null),s.createElement(ma,null),s.createElement(la,null),s.createElement(Ur,null),s.createElement(Yr,null),s.createElement(Vr,null),s.createElement(sa,null),s.createElement(da,null))))}J(s.createElement(pa,null),document.getElementById("root"));
