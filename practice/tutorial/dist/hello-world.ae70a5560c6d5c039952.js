(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t="hello-world-button",(e="buttonCssClass")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}var t,r;return t=n,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass);var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello World",e.classList.add("hello-world-text"),n.appendChild(e)},n.appendChild(e)}}])&&e(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Webpack is awesome",n.appendChild(e)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}())).render();var r=new n;r.render(),console.log("production mode"),r.methodThatDoesNotExit()})();