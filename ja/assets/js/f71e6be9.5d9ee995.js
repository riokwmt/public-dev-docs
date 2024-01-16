"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6,title:"Momento Kotlin SDK",pagination_prev:null,sidebar_label:"Kotlin",description:"Information about the Momento Kotlin SDK"},a="Momento Kotlin SDK",l={unversionedId:"cache/develop/sdks/kotlin/index",id:"cache/develop/sdks/kotlin/index",title:"Momento Kotlin SDK",description:"Information about the Momento Kotlin SDK",source:"@site/docs/cache/develop/sdks/kotlin/index.md",sourceDirName:"cache/develop/sdks/kotlin",slug:"/cache/develop/sdks/kotlin/",permalink:"/ja/cache/develop/sdks/kotlin/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/kotlin/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Momento Kotlin SDK",pagination_prev:null,sidebar_label:"Kotlin",description:"Information about the Momento Kotlin SDK"},sidebar:"tutorialSidebar",next:{title:"Cheat Sheet",permalink:"/ja/cache/develop/sdks/kotlin/cheat-sheet"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-kotlin-sdk"},"Momento Kotlin SDK"),(0,r.kt)("p",null,"The Momento Kotlin SDK for Android and JVM is available via Maven Central: ",(0,r.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"software.momento.kotlin:sdk")),"."),(0,r.kt)("p",null,"The source code can be found on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin"},"momentohq/client-sdk-kotlin"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Momento API Key is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"."),(0,r.kt)("li",{parentName:"ul"},"At least the Java 11 run time installed, or Android 23+."),(0,r.kt)("li",{parentName:"ul"},"mvn or gradle for downloading the sdk.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/cache/develop/sdks/kotlin/cheat-sheet"},"Kotlin SDK Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md"},"Kotlin SDK Examples"),": working example projects that illustrate how to use the Kotlin SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Kotlin SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Kotlin SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("p",null,"COMING SOON"))}d.isMDXComponent=!0}}]);