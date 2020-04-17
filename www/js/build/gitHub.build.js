(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{524:function(e,t,n){"use strict";n.r(t);var a=n(526),o=n.n(a),s=n(1),i=n.n(s),r=n(62),c=n.n(r),l=n(3),p=n(431),d=n(70),u='<div class="main" id="github">\n  <div class="profile">\n    <img src="{{avatar_url}}" alt="avatar">\n    <h2 class="info">\n      <span class="name">{{name}}</span>\n      <small class="login">{{login}}</small>\n    </h2>\n    <div class="tags">\n      <span class="tag" data-value="{{followers}}">followers</span>\n      <span class="tag" data-value="{{following}}">following</span>\n      <span class="tag" data-value="{{total_repos}}">repositories</span>\n      <span class="tag" data-value="{{total_gists}}">gists</span>\n    </div>\n    <div class="button-container primary">\n      <button action="open" data-value="{{html_url}}">open in browser</button>\n    </div>\n  </div>\n  <div class="list">\n    <div class="list-item" action="gist">\n      <span class="octicon octicon-gist"></span>\n      <div class="container">\n        <span class="text">Gists</span>\n      </div>\n    </div>\n    <div class="list-item" action="repos">\n      <div class="octicon octicon-repo"></div>\n      <div class="container">\n        <span class="text">Repositories</span>\n      </div>\n    </div>\n  </div>\n</div>',g='<li action="reload">\n  <span class="text">{{reload}}</span>\n  <span class="icon refresh"></span>\n</li>\n<li action="logout">\n  <span class="text">{{logout}}</span>\n  <span class="icon logout"></span>\n</li>',f=(n(531),n(197)),v=n(17),b=n(5),h=n(192);var w=function(){n.e(15).then(n.bind(null,546)).then((function(e){(0,e.default)()}))},m=n(527);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()("span",{className:"icon search hidden"}),n=i()("span",{className:"icon more_vert",attr:{action:"toggle-menu"}}),a=Object(d.a)("Github"),o=l.a.credentials,s=h.a.GitHub(),r=s.getUser(),O=cordova.file.externalDataDirectory+".github",j=cordova.file.externalDataDirectory+".git",S=Object(f.a)(c.a.render(g,strings),{top:"8px",right:"8px",toggle:n,transformOrigin:"top right"});function k(e){var t=e.target,n=t.getAttribute("action");switch(["logout","reload"].includes(n)&&S.hide(),n){case"logout":D((function(){plugins.toast.showShortBottom(strings.success),a.hide()}));break;case"gist":Object(m.a)();break;case"repos":w();break;case"reload":_((function(e){var t=i.a.get("#github");t&&t.remove(),t=x(e),a.append(t),t.addEventListener("click",k)}));break;case"open":window.open(t.getAttribute("data-value"),"_system")}}function P(e){var t=x(e);a.append(t),app.appendChild(a),actionStack.push({id:"github",action:a.hide}),a.onhide=function(){actionStack.remove("github")},t.addEventListener("click",k)}function _(t){b.a.loaderShow("GitHub",strings.loading+"..."),r.getProfile().then((function(n){e.$loginPage&&e.$loginPage.hide();var a=n.data,s=o.encrypt(JSON.stringify(a));v.a.writeFile(j,s,!0,!1).catch((function(e){plugins.toast.showShortBottom(strings.error),console.log(e)})),t?t(a):P(a)})).catch((function(t){t.response?(console.log(t.response.data.message),401===t.response.status&&D(),e.$loginPage?e.$loginPage.setMessage(t.response.data.message):Object(p.a)()):console.log(t)})).finally((function(){b.a.loaderHide()}))}function x(e){return e&&(e.total_repos=e.total_private_repos+e.public_repos,e.total_gists=e.private_gists+e.public_gists),i.a.parse(c.a.render(u,y({},strings,{},e)))}function D(e){localStorage.username&&delete localStorage.username,localStorage.password&&delete localStorage.password,localStorage.token&&delete localStorage.token,v.a.deleteFile(O).then((function(){return v.a.deleteFile(j)})).finally((function(){e&&e()}))}S.addEventListener("click",k),a.querySelector("header").append(t,n),v.a.readFile(j).then((function(e){var t=new TextDecoder("utf-8"),n=o.decrypt(t.decode(e.data));P(JSON.parse(n||"{}"))})).catch((function(e){_()}))}},526:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},527:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];n.e(7).then(n.bind(null,538)).then((function(e){e.default.apply(void 0,t)}))}},531:function(e,t,n){}}]);