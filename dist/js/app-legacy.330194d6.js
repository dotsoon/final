(function(){"use strict";var e={4274:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"header"}},[n("main-header")],1),n("div",{attrs:{id:"nav"}},[e.authenticated?n("router-link",{attrs:{to:"/dogobesitytest/checkbox"}},[e._v("견종선택")]):e._e(),e.authenticated?n("router-link",{attrs:{to:"/dogobesitytest/dogimage"}},[e._v("검사")]):e._e(),e.authenticated?n("router-link",{attrs:{to:"/dogobesitytest/testresult"}},[e._v("결과")]):e._e(),e.authenticated?n("router-link",{attrs:{to:"/dogobesitytest",replace:""},nativeOn:{click:function(t){return e.logout()}}},[e._v("Logout")]):e._e()],1),n("router-view",{on:{authenticated:e.setAuthenticated}}),n("div",{attrs:{id:"footer"}},[n("main-footer")],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("H1",[e._v("강아지 정상/비만 판별기")])},u=[],c={name:"main-header"},s=c,f=n(1001),d=(0,f.Z)(s,a,u,!1,null,"c37c1f5e",null),l=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("H1",[e._v("3조")])},h=[],m={name:"main-footer"},v=m,g=(0,f.Z)(v,p,h,!1,null,"5d83b7cb",null),b=g.exports,y={name:"App",components:{"main-header":l,"main-footer":b},data(){return{authenticated:!1}},methods:{setAuthenticated(e){this.authenticated=e},logout(){this.authenticated=!1,localStorage.clear()}}},_=y,k=(0,f.Z)(_,o,i,!1,null,null,null),w=k.exports,O=n(8345);r["default"].use(O.Z);var C=new O.Z({mode:"history",routes:[{path:"*",component:()=>n.e(603).then(n.bind(n,9603))},{path:"/",redirect:"/dogobesitytest"},{path:"/dogobesitytest",name:"Login",component:()=>n.e(910).then(n.bind(n,8910))},{path:"/dogobesitytest/checkbox",name:"Check",component:()=>n.e(33).then(n.bind(n,9033))},{path:"/dogobesitytest/signup",name:"SignUp",component:()=>n.e(358).then(n.bind(n,5358))},{path:"/dogobesitytest/dogimage",name:"Secure",component:()=>n.e(679).then(n.bind(n,5679))},{path:"/dogobesitytest/testresult",name:"Result",component:()=>n.e(191).then(n.bind(n,7191))}]}),E=n(8947),j=n(7810),A=n(1436),S=n(9669),x=n.n(S),T=n(759),N=n.n(T);r["default"].prototype.$http=x(),r["default"].config.productionTip=!1,r["default"].component("font-awesome-icon",j.GN),r["default"].use(N()),new r["default"]({router:C,render:function(e){return e(w)}}).$mount("#app"),E.vI.add(A.mRB)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{33:"c496d976",191:"b3ba575d",358:"cfba4bc6",603:"fc1fbcee",679:"4fa6bfd6",910:"449a0096"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{33:"8107a36b",191:"910014d8",358:"4ec3c23a",603:"28937f2e",679:"76bc6da3",910:"472739eb"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="simple-login-app:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={33:1,191:1,358:1,603:1,679:1,910:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunksimple_login_app"]=self["webpackChunksimple_login_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4274)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.330194d6.js.map