!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/axie-tracker-dashboard/",e(e.s="mdyV")}({"6Fm8":function(){},"83eF":function(t,e,n){"use strict";function r(t,e){t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function o(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o}));var i="undefined"!=typeof process?process.env.ENVIRONMENT:"local"},QfWi:function(t,e,n){"use strict";n.r(e),function(t){var r=n("Y3FI"),o=n("83eF"),i=n("qIj5"),u=n("wqv2");n("6Fm8");e.default=function(){return t("div",{class:"at-container"},t(i.a,null),t(r.a,null,t(u.a,{path:"production"===o.a?"/axie-tracker-dashboard/":"/"})))}}.call(this,n("hosL").h)},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var _=i[1].split("&"),c=0;c<_.length;c++){var a=_[c].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var p=e[f].replace(/(^:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=t[f]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(m),d||v){u[p]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(_).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function _(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function a(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return f(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(f(e))return h(t)}}while(e=e.parentNode)}}var v=n("hosL"),y={},m=null,b=[],g=[],k={},O=!1,j=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||c()},O||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),O=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component);j.subscribers=g,j.getCurrentUrl=c,j.route=a,j.Router=j,j.Route=function(t){return Object(v.createElement)(t.component,t)},j.Link=function(t){return Object(v.createElement)("a",r({onClick:p},t))},j.exec=o,e.a=j},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?R.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function _(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||H!==T.debounceRendering)&&((H=T.debounceRendering)||I)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?a(i):u,i.__h),j(n,i),i.__e!=u&&s(i)))}))}function h(t,e,n,r,o,i,l,c,s,f){var p,h,v,m,b,g,k,j=r&&r.__k||N,x=j.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(_,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=j[p])||v&&m.key==v.key&&m.type===v.type)j[p]=void 0;else for(h=0;h<x;h++){if((v=j[h])&&m.key==v.key&&m.type===v.type){j[h]=void 0;break}v=null}O(t,m,v=v||F,o,i,l,c,s,f),b=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=d(m,s,t):s=y(t,m,v,j,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=a(v))}for(n.__e=g,p=x;p--;)null!=j[p]&&("function"==typeof n.type&&null!=j[p].__e&&j[p].__e==n.__d&&(n.__d=a(r,p+1)),P(j[p],j[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):y(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,_;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,_=0;(l=l.nextSibling)&&_<r.length;_+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||$.test(e)?n:n+"px"}function b(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:g,i):t.removeEventListener(e,i?k:g,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function g(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function O(t,e,n,o,i,u,l,a,s){var f,p,d,v,y,m,b,g,k,O,j,C=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,a=e.__e=n.__e,e.__h=null,u=[a]),(f=T.__b)&&f(e);try{t:if("function"==typeof C){if(g=e.props,k=(f=C.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(p=e.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?e.__c=p=new C(g,O):(e.__c=p=new c(g,O),p.constructor=C,p.render=S),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,C.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,d)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||e.__v===n.__v){p.props=g,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=O,p.props=g,p.state=p.__s,(f=T.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),j=null!=f&&f.type===_&&null==f.key?f.props.children:f,h(t,Array.isArray(j)?j:[j],e,n,o,i,u,l,a,s),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,u,l,s);(f=T.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=a,e.__h=!!s,u[u.indexOf(a)]=null),T.__e(t,e,n)}}function j(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function x(t,e,n,r,i,u,l,_){var c,s,f,p=n.props,d=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((c=u[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,_=!1}if(null===v)p===d||_&&t.data===d||(t.data=d);else{if(u=u&&R.call(t.childNodes),s=(p=n.props||F).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!_){if(null!=u)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||b(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||b(t,i,e[i],n[i],r)}(t,d,p,i,_),f)e.__k=[];else if(y=e.props.children,h(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&a(n,0),_),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);_||("value"in d&&void 0!==(y=d.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&b(t,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&b(t,"checked",y,p.checked,!1))}return t}function C(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function P(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||C(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function A(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],O(e,t=(!r&&n||e).__k=i(_,null,[t]),o||F,F,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?R.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),j(u,t)}function w(t,e){A(t,e,w)}function E(t,e,n){var o,i,l,_=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:_[l]=e[l];return arguments.length>2&&(_.children=arguments.length>3?R.call(arguments,2):n),u(t.type,_,o||t.key,i||t.ref,null)}function U(t,e){var n={__c:e="__cC"+W++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return A})),n.d(e,"hydrate",(function(){return w})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return _})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return M})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return U})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return T}));var R,T,L,M,D,I,H,W,F={},N=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;R=N.slice,T={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},L=0,M=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=_,D=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},_=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(_(n.p)+"sw.js"),"function"==typeof l(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a={preRenderData:e},s=e.url?_(e.url):"";(u&&s===_(location.pathname)?u:i)(o(t,{CLI_DATA:a}),document.body,c)}()}},qIj5:function(t,e,n){"use strict";var r=n("hosL");e.a=function(){return Object(r.h)("div",{class:"at-bg"})}},wqv2:function(t,e,n){"use strict";function r(t,e){E.options.__h&&E.options.__h(A,t,U||e),U=0;var n=A.__H||(A.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return U=1,i(s,t)}function i(t,e,n){var o=r(S++,2);return o.t=t,o.__c||(o.__=[n?n(e):s(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=A),o.__}function u(t,e){var n=r(S++,3);!E.options.__s&&a(n.__H,e)&&(n.__=t,n.__H=e,A.__H.__h.push(n))}function l(){for(var t;t=R.shift();)if(t.__P)try{t.__H.__h.forEach(_),t.__H.__h.forEach(c),t.__H.__h=[]}catch(e){t.__H.__h=[],E.options.__e(e,t.__v)}}function _(t){var e=A,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),A=e}function c(t){var e=A;t.__c=t.__(),A=e}function a(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function s(t,e){return"function"==typeof e?e(t):e}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n in e)t[n]=e[n];return t}function h(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function d(t){this.props=t}function v(){this.__u=0,this.t=null,this.__b=null}function y(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function m(){this.u=null,this.o=null}function b(){}function g(){return this.cancelBubble}function k(){return this.defaultPrevented}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,l=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S,A,w,E=n("hosL"),U=0,R=[],T=E.options.__b,L=E.options.__r,M=E.options.diffed,D=E.options.__c,I=E.options.unmount;E.options.__b=function(t){A=null,T&&T(t)},E.options.__r=function(t){L&&L(t),S=0;var e=(A=t.__c).__H;e&&(e.__h.forEach(_),e.__h.forEach(c),e.__h=[])},E.options.diffed=function(t){M&&M(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==R.push(e)&&w===E.options.requestAnimationFrame||((w=E.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),H&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);H&&(e=requestAnimationFrame(n))})(l)),A=null},E.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(_),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],E.options.__e(n,t.__v)}})),D&&D(t,e)},E.options.unmount=function(t){I&&I(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{_(t)}catch(t){e=t}})),e&&E.options.__e(e,n.__v))};var H="function"==typeof requestAnimationFrame;(d.prototype=new E.Component).isPureReactComponent=!0,d.prototype.shouldComponentUpdate=function(t,e){return h(this.props,t)||h(this.state,e)};var W=E.options.__b;E.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),W&&W(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var F=E.options.__e;E.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);F(t,e,n)};var N=E.options.unmount;E.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),N&&N(t)},(v.prototype=new E.Component).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=y(r.__v),i=!1,u=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=u;var l=function(){if(!--r.__u){if(r.state.__e){var t=r.state.__e;r.__v.__k[0]=function t(e,n,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)})),e.__c&&e.__c.__P===n&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},_=!0===e.__h;r.__u++||_||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(u,u)},v.prototype.componentWillUnmount=function(){this.t=[]},v.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=p({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)}))),e}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__e&&Object(E.createElement)(E.Fragment,null,t.fallback);return o&&(o.__h=null),[Object(E.createElement)(E.Fragment,null,e.__e?null:t.children),o]};var $=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(m.prototype=new E.Component).__e=function(t){var e=this,n=y(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),$(e,t,r)):o()};n?n(i):i()}},m.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(E.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},m.prototype.componentDidUpdate=m.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){$(t,n,e)}))};var V="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,q=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B="undefined"!=typeof document,K=function(t){return("undefined"!=typeof Symbol&&"symbol"==f(Symbol())?/fil|che|rad/i:/fil|che|ra/i).test(t)};E.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(E.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var z=E.options.event;E.options.event=function(t){return z&&(t=z(t)),t.persist=b,t.isPropagationStopped=g,t.isDefaultPrevented=k,t.nativeEvent=t};var G={configurable:!0,get:function(){return this.class}},Q=E.options.vnode;E.options.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){var o=-1===e.indexOf("-");for(var i in r={},n){var u=n[i];B&&"children"===i&&"noscript"===e||"value"===i&&"defaultValue"in n&&null==u||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===u?u="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!K(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&q.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[i]=u)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(E.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(E.toChildArray)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r,n.class!=n.className&&(G.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",G))}t.$$typeof=V,Q&&Q(t)};var Y=E.options.__r;E.options.__r=function(t){Y&&Y(t),t.__c};var Z=n("83eF"),J=function(t){return Object(E.h)("div",{class:"at-card"},t.children)},X=function(t){return Object(E.h)("div",{class:"at-stats"},Object(E.h)("div",{class:"at-stats-metric"},Object(E.h)("i",{class:"fa-solid fa-flask"}),Object(E.h)("h2",{class:"at-stats-metric__label"},"Total SLP Earned"),": ",Object(E.h)("p",{class:"at-stats-metric__value"},t.total_slp_earned)),Object(E.h)("div",{class:"at-stats-metric"},Object(E.h)("i",{class:"fa-solid fa-trophy"}),Object(E.h)("h2",{class:"at-stats-metric__label"},"Leaderboard Rank"),": ",Object(E.h)("p",{class:"at-stats-metric__value"},t.leaderboard_rank)),Object(E.h)("div",{class:"at-stats-metric"},Object(E.h)("i",{class:"fa-solid fa-shield"}),Object(E.h)("h2",{class:"at-stats-metric__label"},"Elo Rating (MMR) "),": ",Object(E.h)("p",{class:"at-stats-metric__value"},t.elo_rating)))},tt=function(){return Object(E.h)("div",{class:"at-footer"},Object(E.h)("div",{class:"at-footer__copyright content-wrapper"},Object(E.h)("p",null,"© 2022 Axie Tracker Dashboard | v0.0.1"),Object(E.h)("p",null,"Made with ",Object(E.h)("i",{class:"fa-solid fa-heart"})),Object(E.h)("p",null,"Powered by ",Object(E.h)("a",{href:"https://preactjs.com/",rel:"noopener noreferrer",target:"_blank"},"Preact")," and ",Object(E.h)("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"))))};e.a=function(){var t=C(o({total_slp_earned:0,leaderboard_rank:0,elo_rating:0}),2),e=t[0],n=t[1];return u((function(){var t=Object(Z.c)("id",window.location.href).replace("ronin:","0x"),e=function(t){n((function(e){return j(j({},e),t)}))};fetch("https://game-api.axie.technology/slp/".concat(t)).then((function(t){return t.ok?t.json():Promise.reject(!1)})).then((function(t){e({total_slp_earned:t[0].total||0})})).catch((function(){console.error("Axie API for SLP is not working.")})),fetch("https://game-api.axie.technology/mmr/".concat(t)).then((function(t){return t.ok?t.json():Promise.reject(!1)})).then((function(t){e({leaderboard_rank:t[0].items[1].rank||0,elo_rating:t[0].items[1].elo||0})})).catch((function(){console.error("Axie API for MMR is not working.")}))}),[]),Object(E.h)("div",{class:"at-home"},Object(E.h)("div",{class:"content-wrapper content-padding"},Object(E.h)(J,null,Object(E.h)("h1",null,"Axie Tracker Dashboard"),Object(E.h)("p",null,"A simplified dashboard for your axie account stats."),Object(E.h)("div",{class:"at-axie-watermark-1",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"}),Object(E.h)("div",{class:"at-axie-watermark-2",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"}),Object(E.h)(X,{total_slp_earned:Object(Z.b)(e.total_slp_earned),leaderboard_rank:Object(Z.b)(e.leaderboard_rank),elo_rating:Object(Z.b)(e.elo_rating)}))),Object(E.h)(tt,null))}}});
//# sourceMappingURL=bundle.43589.js.map