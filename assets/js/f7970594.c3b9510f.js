"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2428],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(8168),a=(n(6540),n(5680));const r={sidebar_position:2,title:"Authentication and access control with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Discover how to authenticate with Momento and control access to resources."},i=void 0,c={unversionedId:"cache/develop/authentication/index",id:"cache/develop/authentication/index",title:"Authentication and access control with Momento",description:"Discover how to authenticate with Momento and control access to resources.",source:"@site/docs/cache/develop/authentication/index.mdx",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/",permalink:"/cache/develop/authentication/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication and access control with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Discover how to authenticate with Momento and control access to resources."},sidebar:"tutorialSidebar",next:{title:"API Keys",permalink:"/cache/develop/authentication/api-keys"}},s={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You've decided to try out Momento, yeehaw! Let's talk about how you're going to make your first call and subsequently allow your app users to make calls."),(0,a.yg)("p",null,"We have a bunch of different ways you can interact with our services:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In your browser via the ",(0,a.yg)("a",{parentName:"li",href:"https://console.gomomento.com"},"Momento Console")),(0,a.yg)("li",{parentName:"ul"},"Long-term stored usage with ",(0,a.yg)("a",{parentName:"li",href:"/cache/develop/authentication/api-keys"},"API keys")),(0,a.yg)("li",{parentName:"ul"},"Short-term and limited scope with ",(0,a.yg)("a",{parentName:"li",href:"/cache/develop/authentication/tokens"},"tokens"))),(0,a.yg)("p",null,"Each one of these methods comes with their own range of use cases and varying implementations. Based on the type of application you're building, you might choose to issue a bunch of short-lived, limited scope tokens to your users. If that's the case, then check out our page on ",(0,a.yg)("a",{parentName:"p",href:"/cache/develop/authentication/tokens"},"tokens"),". Maybe you're interested in creating a key and forgetting about it for a year. Hop over to our ",(0,a.yg)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"API keys")," page."),(0,a.yg)("p",null,"Need help deciding which one is for you? We got you \ud83d\udc47"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Table of differences between API keys and tokens",src:n(2755).A,width:"1600",height:"1391"})),(0,a.yg)("p",null,"Still confused? Stay a while and check out our detailed documentation on the next page or send us a message in ",(0,a.yg)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord"),"!"))}d.isMDXComponent=!0},2755:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/api-keys-vs-tokens-32246185f7f1d832ffc0f3d006caaa9a.png"}}]);