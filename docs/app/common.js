var ampApp=ampApp||{};ampApp.common=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e){t.exports=ng.core},function(t,e){t.exports=ng.router},,,,,,,function(t,e){t.exports=ng.http},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[]},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(40);n.d(e,"AppCommonModule",function(){return r.a}),n.d(e,"ModuleLoaderService",function(){return r.e}),n.d(e,"COMMON_SERVICES",function(){return r.d}),n.d(e,"COMMON_PIPES",function(){return r.c}),n.d(e,"COMMON_COMPONENTS",function(){return r.b})},function(t,e,n){"use strict";var r=n(41),o=(n.n(r),n(42)),u=n(45);n.d(e,"d",function(){return u.a}),n.d(e,"e",function(){return u.b});var c=n(10);n.d(e,"c",function(){return c.a});var i=n(9);n.d(e,"b",function(){return i.a}),n.d(e,"a",function(){return o.a})},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),o=(n.n(r),n(43)),u=(n.n(o),n(8)),c=(n.n(u),n(44)),i=(n.n(c),n(1)),a=(n.n(i),n(9)),f=n(10),p=this&&this.__decorate||function(t,e,n,r){var o,u=arguments.length,c=u<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(u<3?o(c):u>3?o(e,n,c):o(e,n))||c);return u>3&&c&&Object.defineProperty(e,n,c),c},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t=p([Object(r.NgModule)({imports:[u.HttpModule],exports:[o.CommonModule,u.HttpModule,u.JsonpModule,c.FormsModule,i.RouterModule],declarations:a.a.concat(f.a),providers:[]}),d("design:paramtypes",[])],t)}()},function(t,e){t.exports=ng.common},function(t,e){t.exports=ng.forms},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(46);n.d(e,"b",function(){return r.a});var o=[r.a]},function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n(0),o=(n.n(r),n(8)),u=(n.n(o),n(47)),c=(n.n(u),this&&this.__decorate||function(t,e,n,r){var o,u=arguments.length,c=u<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(u<3?o(c):u>3?o(e,n,c):o(e,n))||c);return u>3&&c&&Object.defineProperty(e,n,c),c}),i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=new Map,f=null,p=function(){function t(t){this.http=t,f=this}return t.load=function(t){return f.load(t)},t.defineModule=function(t,e,n){var r=Promise.resolve();if(a.set(t,e||[]),e&&e.length>0){var o=e.map(function(t){return f.load(t,!0)});r=Promise.all(o)}return r.then(function(){return n()})},t.prototype.load=function(t,e){var n=this;return void 0===e&&(e=!1),new Promise(function(e,r){var o=""+AppConf.modulePath+t+"/app.js";n._loadCss(t),n.http.get(o).toPromise().then(function(e){var r=e.text();return n._DomEval(r),window.ampApp[t]}).then(function(t){var n=t.AppModule;e(n)}).catch(function(t){return r(t)})})},t.prototype.useModuleStyles=function(t){var e=[].slice.apply(document.querySelectorAll(".dynamic-module-style")),n=this._getModuleAndDeps(t);e.forEach(function(t){for(var e=!0,r=n.length-1;r>=0;r--)if(t.className.indexOf(n[r])>=0){e=!1,n.splice(r,1);break}t.disabled=e})},t.prototype._getModuleAndDeps=function(t){var e=this;if("system"===t)return[];if(!a.has(t))return t&&console.warn("module "+t+" not found."),[];var n=[t];return a.get(t).forEach(function(t){n.push.apply(n,e._getModuleAndDeps(t))}),n},t.prototype._loadCss=function(t){var e=""+AppConf.modulePath+t+"/app.css",n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n.setAttribute("class","dynamic-module-style "+t),document.querySelector("head").appendChild(n)},t.prototype._DomEval=function(t,e){e=e||document;var n=e.createElement("script");n.text=t,e.head.appendChild(n).parentNode.removeChild(n)},t=c([Object(r.Injectable)(),i("design:paramtypes",["function"==typeof(e=void 0!==o.Http&&o.Http)&&e||Object])],t);var e}()},function(t,e){t.exports=Rx}]);