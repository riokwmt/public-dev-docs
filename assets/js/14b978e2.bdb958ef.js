"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,sidebar_label:"Momento Cache",title:"Cache",description:"Learn what you need to know to speed up your cloud application with the world's first serverless cache.",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","eda","event-driven architecture","redis","serverless"]},i="What is Momento Cache?",c={unversionedId:"cache/index",id:"cache/index",title:"Cache",description:"Learn what you need to know to speed up your cloud application with the world's first serverless cache.",source:"@site/docs/cache/index.md",sourceDirName:"cache",slug:"/cache/",permalink:"/cache/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Momento Cache",title:"Cache",description:"Learn what you need to know to speed up your cloud application with the world's first serverless cache.",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","eda","event-driven architecture","redis","serverless"]},sidebar:"tutorialSidebar"},l={},p=[{value:"Learn about caching and Momento Cache",id:"learn-about-caching-and-momento-cache",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-momento-cache"},"What is Momento Cache?"),(0,r.kt)("p",null,"Momento Cache is the world's first truly serverless caching service. It provides instant elasticity, scale-to-zero capability, and blazing-fast performance. Gone are the days where you need to choose, manage, and provision capacity. With Momento Cache, you grab the SDK, you get an end point, input a few lines into your code, and you're off and running."),(0,r.kt)("p",null,"Momento Cache is available in the following cloud providers and Regions:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AWS Regions"),": us-west-2, us-east-1, us-east-2, eu-west-1, ap-south-1, ap-northeast-1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GCP Regions"),": us-central1"),(0,r.kt)("p",null,"If your prefered provider or Region are not listed, ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"contact us")," and let's talk."),(0,r.kt)("h2",{id:"learn-about-caching-and-momento-cache"},"Learn about caching and Momento Cache"),(0,r.kt)("p",null,"In the following pages, you can learn about caching in general and how to use Momento Cache specifically."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"If you want to quickly get up and running an SDK example with Momento Cache"),", check out ",(0,r.kt)("a",{parentName:"p",href:"/cache/getting-started"},"Getting Started"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"If you're looking for our open source SDK's"),", head to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/nodejs"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/web"},"JavaScript Web SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/python"},"Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/dotnet"},".NET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/go"},"Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/php"},"PHP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/java"},"Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/rust"},"Rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/ruby"},"Ruby")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/elixir"},"Elixir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cache/develop/sdks/swift"},"Swift")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Looking for Momento icons for your architecture diagrams?")," Download ",(0,r.kt)("a",{target:"_blank",href:a(5378).Z},"Momento_Architecture_Icons.zip"),"."))),(0,r.kt)("h1",{id:"language-support-for-momento-cache"},"Language Support for Momento Cache"),(0,r.kt)("p",null,"Learn more about the SDKs available for different programming languages on our ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/language-support/"},"Language Support Page"),"."),(0,r.kt)("p",null,"Have any questions or comments? We'd love to hear from you! You can chat with a Momento specialist by\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"joining our Discord"),", or e-mail us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"support@momentohq.com"),"."))}d.isMDXComponent=!0},5378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Momento_Architecture_Icons-ed4b2d3f699c581bfa3e1dce75c0f49c.zip"}}]);