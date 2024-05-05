"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9228],{5680:(e,o,r)=>{r.d(o,{xA:()=>m,yg:()=>b});var t=r(6540);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var o=t.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):d(d({},o),e)),r},m=function(e){var o=s(e.components);return t.createElement(l.Provider,{value:o},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,b=p["".concat(l,".").concat(u)]||p[u]||c[u]||n;return r?t.createElement(b,d(d({ref:o},m),{},{components:r})):t.createElement(b,d({ref:o},m))}));function b(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,d=new Array(n);d[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[p]="string"==typeof e?e:a,d[1]=i;for(var s=2;s<n;s++)d[s]=r[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3045:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var t=r(8168),a=(r(6540),r(5680));const n={sidebar_position:1,sidebar_label:"Momento Leaderboards",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null,hide_title:!0,keywords:["momento","leaderboard","gaming","serverless"]},d="Momento Leaderboards\u3068\u306f\uff1f",i={unversionedId:"leaderboards/index",id:"leaderboards/index",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaderboards/index.md",sourceDirName:"leaderboards",slug:"/leaderboards/",permalink:"/ja/leaderboards/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Momento Leaderboards",title:"Leaderboards",description:"Learn about Momento's purpose-built Leaderboard API",pagination_next:null,hide_title:!0,keywords:["momento","leaderboard","gaming","serverless"]},sidebar:"leaderboardSidebar"},l={},s=[{value:"Momento\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3092\u59cb\u3081\u308b",id:"momento\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3092\u59cb\u3081\u308b",level:2},{value:"Step 1: Momento API \u30ad\u30fc\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",id:"step-1-momento-api-\u30ad\u30fc\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059",level:3},{value:"Step 2: Momento Leaderboards \u306e\u4f5c\u6210",id:"step-2-momento-leaderboards-\u306e\u4f5c\u6210",level:3},{value:"Step 3: \u8981\u7d20\u306e\u30a2\u30c3\u30d7\u30b5\u30fc\u30c8\u3001\u30d5\u30a7\u30c3\u30c1\u3001\u524a\u9664",id:"step-3-\u8981\u7d20\u306e\u30a2\u30c3\u30d7\u30b5\u30fc\u30c8\u30d5\u30a7\u30c3\u30c1\u524a\u9664",level:3},{value:"Momento Leaderboards\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f",id:"momento-leaderboards\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f",level:2}],m={toc:s},p="wrapper";function c(e){let{components:o,...n}=e;return(0,a.yg)(p,(0,t.A)({},m,n,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"momento-leaderboards\u3068\u306f"},"Momento Leaderboards\u3068\u306f\uff1f"),(0,a.yg)("p",null,"Momento Leaderboards\u306f\u3001\u6570\u5343\u4e07\u4ef6\u306e\u30a2\u30a4\u30c6\u30e0\u3068\u8fc5\u901f\u306a\u30a4\u30f3\u30b8\u30a7\u30b9\u30c8/\u30af\u30a8\u30ea/\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u30fb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u591a\u304f\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306f\u3001\u30bd\u30fc\u30c8\u3055\u308c\u305f\u30bb\u30c3\u30c8\u3084\u7bc4\u56f2\u30af\u30a8\u30ea\u306e\u3088\u3046\u306a\u6c4e\u7528\u7684\u306a\u30c7\u30fc\u30bf\u69cb\u9020\u306b\u3088\u3063\u3066\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3092\u8fd1\u4f3c\u3057\u3066\u3044\u307e\u3059\u304c\u3001Momento Leaderboard\u306f\u3001\u8fc5\u901f\u304b\u3064\u7c21\u5358\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d71\u5408\u3067\u304d\u308b\u30d5\u30a1\u30fc\u30b9\u30c8\u30af\u30e9\u30b9\u306e\u672c\u683c\u7684\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u30a2\u30a4\u30c6\u30e0\u306eTTL\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u30677\u65e5\u9593\u3067\u3059\u3002\u30d1\u30fc\u30b7\u30b9\u30c6\u30f3\u30b9\uff08TTL\u7121\u5236\u9650\uff09\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.yg)("a",{parentName:"p",href:"https://www.gomomento.com/contact-us"},"contact form"),"\u3001",(0,a.yg)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord"),"\u3001\u307e\u305f\u306f ",(0,a.yg)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"support@momentohq.com")," \u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Momento Leaderboards\u3068Sorted Set\u306e\u9055\u3044\u306f\u4f55\u3067\u3059\u304b\uff1f"),(0,a.yg)("p",{parentName:"admonition"},"Momento Leaderboards\u306f\u3001\u3088\u308a\u52b9\u7387\u7684\u306a\u30e1\u30e2\u30ea\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u6570\u5343\u4e07\u30ec\u30b3\u30fc\u30c9\u307e\u3067\u62e1\u5f35\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.yg)("h2",{id:"momento\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3092\u59cb\u3081\u308b"},"Momento\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3092\u59cb\u3081\u308b"),(0,a.yg)("h3",{id:"step-1-momento-api-\u30ad\u30fc\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059"},"Step 1: Momento API \u30ad\u30fc\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u6307\u793a\u306b\u5f93\u3063\u3066\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001Google\u30a2\u30ab\u30a6\u30f3\u30c8\u3001\u307e\u305f\u306fGitHub\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Image of Momento console landing page",src:r(3083).A,width:"700",height:"337"})),(0,a.yg)("p",null,"[\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210]","\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Momento\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306b\u4f7f\u7528\u3059\u308b\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Image of Momento console Create Cache form",src:r(4149).A,width:"2990",height:"1350"})),(0,a.yg)("p",null,"\u6b21\u306b\u3001",(0,a.yg)("a",{parentName:"p",href:"https://docs.momentohq.com/cache/authentication/api-keys"},"\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u306e\u624b\u9806"),"\u306b\u5f93\u3063\u3066\u3001",(0,a.yg)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089API\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.yg)("h3",{id:"step-2-momento-leaderboards-\u306e\u4f5c\u6210"},"Step 2: Momento Leaderboards \u306e\u4f5c\u6210"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Create a new leaderboard client, which you can use to create\n// as many leaderboards as you wish\nconst client = new PreviewLeaderboardClient({\n  configuration: LeaderboardConfigurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});\n\n// Create a new leaderboard with the given cache and leaderboard name\nconst leaderboard = client.leaderboard('my-cache', 'my-leaderboard');\n")),(0,a.yg)("h3",{id:"step-3-\u8981\u7d20\u306e\u30a2\u30c3\u30d7\u30b5\u30fc\u30c8\u30d5\u30a7\u30c3\u30c1\u524a\u9664"},"Step 3: \u8981\u7d20\u306e\u30a2\u30c3\u30d7\u30b5\u30fc\u30c8\u3001\u30d5\u30a7\u30c3\u30c1\u3001\u524a\u9664"),(0,a.yg)("p",null,"\u5229\u7528\u53ef\u80fd\u306a\u5404\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9API\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.yg)("a",{parentName:"p",href:"/ja/leaderboards/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.yg)("p",null,"\u5404API\u306e\u547c\u3073\u51fa\u3057\u65b9\u306e\u4f8b\u3092\u542b\u3080\u5b9f\u884c\u53ef\u80fd\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts"},"Node.js example"),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.yg)("h1",{id:"momento-leaderboards-\u306e\u8a00\u8a9e\u30b5\u30dd\u30fc\u30c8"},"Momento Leaderboards \u306e\u8a00\u8a9e\u30b5\u30dd\u30fc\u30c8"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/ja/leaderboards/language-support/"},"\u8a00\u8a9e\u30b5\u30dd\u30fc\u30c8\u30da\u30fc\u30b8"),"\u3067\u3001\u3055\u307e\u3056\u307e\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u5229\u7528\u53ef\u80fd\u306aSDK\u306e\u8a73\u7d30\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,a.yg)("h2",{id:"momento-leaderboards\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f"},"Momento Leaderboards\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Momento Leaderboards\u30a2\u30a4\u30c6\u30e0\u306e\u6709\u52b9\u671f\u9650\u306f\u3042\u308a\u307e\u3059\u304b\uff1f"),"Momento\u306e\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u30a2\u30a4\u30c6\u30e0\u306b\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30677\u65e5\u9593\u306eTTL\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u30a2\u30a4\u30c6\u30e0\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u304c\u6a5f\u80fd\u3057\u306a\u3044\u5834\u5408\u306f\u3001support@momentohq.com\u3001\u5236\u9650\u306e\u89e3\u9664\u306b\u3064\u3044\u3066\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044\u3002"))}c.isMDXComponent=!0},4149:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},3083:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"}}]);