"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2101],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(o),u=r,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||n;return o?a.createElement(b,i(i({ref:t},c),{},{components:o})):a.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<n;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6441:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var a=o(7462),r=(o(7294),o(3905));const n={sidebar_position:1,sidebar_class_name:"sidebar-item-overview",sidebar_label:"Momento Leaderboard",title:"Momento Leaderboard Documentation",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null},i=void 0,d={unversionedId:"leaderboard/index",id:"leaderboard/index",title:"Momento Leaderboard Documentation",description:"Learn about Momento's purpose-built Leaderboard API",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaderboard/index.md",sourceDirName:"leaderboard",slug:"/leaderboard/",permalink:"/ja/leaderboard/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboard/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item-overview",sidebar_label:"Momento Leaderboard",title:"Momento Leaderboard Documentation",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null},sidebar:"leaderboardSidebar"},s={},l=[{value:"What is Momento Leaderboard?",id:"what-is-momento-leaderboard",level:2},{value:"Getting Started with Momento Leaderboard",id:"getting-started-with-momento-leaderboard",level:2},{value:"Step 1: Create your Momento API key and cache",id:"step-1-create-your-momento-api-key-and-cache",level:3},{value:"Step 2: Create a Momento Leaderboard",id:"step-2-create-a-momento-leaderboard",level:3},{value:"Step 3: Upsert, fetch, and remove elements",id:"step-3-upsert-fetch-and-remove-elements",level:3},{value:"Frequently asked questions about Momento Topics",id:"frequently-asked-questions-about-momento-topics",level:2}],c={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-momento-leaderboard"},"What is Momento Leaderboard?"),(0,r.kt)("p",null,"Momento Leaderboard is a purpose-built leaderboard that supports tens of millions of items and rapid ingestion/querying/updates. While many databases approximate leaderboards via general purpose data structures like sorted set or range queries, Momento Leaderboard is a first-class, full-fledged service that you can quickly and easily integrate with your application. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Momento Leaderboard is currently in preview mode. Trying to use Leaderboard APIs without being allowlisted will produce a GRPC status code 7 (PERMISSION_DENIED)."),(0,r.kt)("p",{parentName:"admonition"},"To be allowlisted for this service, please contact our team through the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gomomento.com/contact-us"},"contact form"),", on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord"),", or by emailing ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com."},"support@momentohq.com.")," ")),(0,r.kt)("h2",{id:"getting-started-with-momento-leaderboard"},"Getting Started with Momento Leaderboard"),(0,r.kt)("h3",{id:"step-1-create-your-momento-api-key-and-cache"},"Step 1: Create your Momento API key and cache"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," and follow the instructions to log in with your email\naddress, Google account, or GitHub account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image of Momento console landing page",src:o(5176).Z,width:"700",height:"337"})),(0,r.kt)("p",null,"Click on the Create Cache button and create a cache using the cloud provider and region you want to use for your Momento Leaderboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image of Momento console Create Cache form",src:o(2438).Z,width:"2990",height:"1350"})),(0,r.kt)("p",null,"Then follow our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/cache/develop/authentication/api-keys"},"step-by-step instructions")," to create an API key via the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". "),(0,r.kt)("h3",{id:"step-2-create-a-momento-leaderboard"},"Step 2: Create a Momento Leaderboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a new leaderboard client, which you can use to create\n// as many leaderboards as you wish\nconst client = new PreviewLeaderboardClient({\n  configuration: LeaderboardConfigurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});\n\n// Create a new leaderboard with the given cache and leaderboard name\nconst leaderboard = client.leaderboard('my-cache', 'my-leaderboard');\n")),(0,r.kt)("h3",{id:"step-3-upsert-fetch-and-remove-elements"},"Step 3: Upsert, fetch, and remove elements"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/ja/leaderboard/develop/api-reference/"},"API reference")," page for documentation on each available leaderboard API."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts"},"Node.js example")," for a runnable program that includes examples of how to call each API."),(0,r.kt)("h2",{id:"frequently-asked-questions-about-momento-topics"},"Frequently asked questions about Momento Topics"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What's the difference between Momento Leaderboard and Redis Sorted Sets?"),"Momento Leaderboard has a much more efficient memory footprint, allowing us to scale to tens of millions of records, and the APIs were built with gaming use cases specifically in mind."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do Momento Leaderboard items expire?"),"No, Momento Leaderboard items have no TTL."))}p.isMDXComponent=!0},2438:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},5176:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"}}]);