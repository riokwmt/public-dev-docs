"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4542],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(a),g=r,y=s["".concat(i,".").concat(g)]||s[g]||c[g]||l;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(8168),r=(a(6540),a(5680));const l={sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},o="Momento\u30c8\u30d4\u30c3\u30af\u306eHTTP API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",p={unversionedId:"topics/develop/api-reference/http-api",id:"topics/develop/api-reference/http-api",title:"HTTP API for Momento Topics",description:"Discover the HTTP API for edge computing services to access pub/sub services.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/http-api.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/http-api",permalink:"/ja/topics/develop/api-reference/http-api",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},sidebar:"topicsSidebar",previous:{title:"Auth",permalink:"/ja/topics/develop/api-reference/auth"},next:{title:"Response objects",permalink:"/ja/topics/develop/api-reference/response-objects"}},i={},m=[{value:"\u8a8d\u8a3c",id:"\u8a8d\u8a3c",level:2},{value:"\u30ea\u30fc\u30b8\u30e7\u30f3",id:"\u30ea\u30fc\u30b8\u30e7\u30f3",level:2},{value:"Publish",id:"publish",level:2},{value:"Request",id:"request",level:3},{value:"Body",id:"body",level:4},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Error",id:"error",level:3},{value:"\u30b5\u30f3\u30d7\u30eb",id:"\u30b5\u30f3\u30d7\u30eb",level:2},{value:"Publish",id:"publish-1",level:3}],u={toc:m},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"momento\u30c8\u30d4\u30c3\u30af\u306ehttp-api\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},"Momento\u30c8\u30d4\u30c3\u30af\u306eHTTP API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),(0,r.yg)("p",null,"Momento\u306f\u3001\u79c1\u305f\u3061\u306e",(0,r.yg)("a",{parentName:"p",href:"./../"},"SDK"),"\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u3001curl\u3084fetch\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u4f7f\u7528\u3057\u305f\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306bHTTP API\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,r.yg)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers"),"\u3001",(0,r.yg)("a",{parentName:"p",href:"https://www.fastly.com/products/edge-compute"},"Fastly Compute@Edge"),"\u306a\u3069\u306e\u30a8\u30c3\u30b8\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u30b5\u30fc\u30d3\u30b9\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5834\u5408\u3001\u3053\u306eAPI\u306f\u3042\u306a\u305f\u306e\u305f\u3081\u306b\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001",(0,r.yg)("a",{parentName:"p",href:"./../"},"Momento's SDK clients")," \u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u79c1\u305f\u3061\u306e",(0,r.yg)("a",{parentName:"p",href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation"},"Postman\u306e\u516c\u958b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"),"\u3067\u3082Open API Specification\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u69cb\u6587\u306e\u5b9f\u88c5\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u8aac\u660e\u3057\u307e\u305b\u3093\u3002")),(0,r.yg)("h2",{id:"\u8a8d\u8a3c"},"\u8a8d\u8a3c"),(0,r.yg)("p",null,"\u5404\u63a5\u7d9a\u306b\u306f\u3001",(0,r.yg)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb")," \u307e\u305f\u306f ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},'\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3057\u3066\u3044\u308b\u30c8\u30fc\u30af\u30f3 "\u81ea\u52d5\u8ca9\u58f2\u6a5f" \u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9')," \u3092\u4ecb\u3057\u3066\u751f\u6210\u3055\u308c\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002Momento auth \u30c8\u30fc\u30af\u30f3\u306f\u3001Momento \u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3057\u3001\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3057\u305f\u308a\u3001\u7279\u5b9a\u306e\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef/\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"\u30ea\u30fc\u30b8\u30e7\u30f3"},"\u30ea\u30fc\u30b8\u30e7\u30f3"),(0,r.yg)("p",null,"Momento HTTP API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001API \u30c8\u30fc\u30af\u30f3\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u4ee5\u4e0b\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3054\u5e0c\u671b\u306e\u5730\u57df\u304c\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.yg)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"\u30b5\u30dd\u30fc\u30c8\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"),"\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"AWS Region"),(0,r.yg)("th",{parentName:"tr",align:null},"Endpoints"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"us-west-2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"},"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"us-east-1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"},"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"us-east-2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"},"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"},"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eu-west-1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eu-central-1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ap-south-1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"))))),(0,r.yg)("h2",{id:"publish"},"Publish"),(0,r.yg)("p",null,"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u3002"),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Path: /topics/{cacheName}/{topicName}"),(0,r.yg)("li",{parentName:"ul"},"HTTP Method: POST")),(0,r.yg)("h4",{id:"body"},"Body"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,r.yg)("li",{parentName:"ul"},"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u306b\u306f\u3001\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3059\u308b\u30d0\u30a4\u30ca\u30ea\u5024\u3092\u542b\u3081\u308b\u3002")),(0,r.yg)("h4",{id:"path-parameters"},"Path Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"URL-safe string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30c8\u30d4\u30c3\u30af\u3092\u542b\u3080\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topicName"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"URL-safe string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u516c\u958b\u3059\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d")))),(0,r.yg)("h4",{id:"query-parameters"},"Query Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"token"),(0,r.yg)("td",{parentName:"tr",align:null},"no**"),(0,r.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3059\u308b Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3 (\u6587\u5b57\u5217\u5f62\u5f0f)")))),(0,r.yg)("p",null,"*** \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3059\u308b Momento auth \u30c8\u30fc\u30af\u30f3\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30c8\u30fc\u30af\u30f3\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u304b Authorization \u30d8\u30c3\u30c0\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("h4",{id:"headers"},"Headers"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,r.yg)("th",{parentName:"tr",align:null},"Required?"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Authorization"),(0,r.yg)("td",{parentName:"tr",align:null},"no**"),(0,r.yg)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u5f62\u5f0f\u306e Momento auth \u30c8\u30fc\u30af\u30f3\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059")))),(0,r.yg)("p",null,"** \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c/\u8a8d\u53ef\u306b\u4f7f\u7528\u3059\u308b Momento auth \u30c8\u30fc\u30af\u30f3\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30c8\u30fc\u30af\u30f3\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u304b Authorization \u30d8\u30c3\u30c0\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"responses"},"Responses"),(0,r.yg)("h3",{id:"success"},"Success"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u6307\u5b9a\u3055\u308c\u305f\u30c8\u30d4\u30c3\u30af\u306b\u6b63\u5e38\u306b\u516c\u958b\u3055\u308c\u307e\u3057\u305f")),(0,r.yg)("h3",{id:"error"},"Error"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6307\u5b9a\u304c\u6b63\u3057\u304f\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u3092\u53c2\u7167\u306e\u3053\u3068\u3002")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u6e21\u3055\u308c\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u7121\u52b9\u304b\u671f\u9650\u5207\u308c\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u672c\u6587\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u6e21\u3055\u308c\u305f Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u3001\u8a66\u884c\u3057\u305f\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u5fc5\u8981\u306a\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u672c\u6587\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u300cCache Not Found\u300d\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5b58\u5728\u3057\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u3002")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u3053\u306e\u30a8\u30e9\u30fc \u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4e0a\u9650\u3092\u8d85\u3048\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u672c\u6587\u3092\u53c2\u7167\u3059\u308b\u304b\u3001Momento \u30b5\u30dd\u30fc\u30c8\u306b\u9023\u7d61\u3057\u3066\u9650\u5ea6\u984d\u306e\u5f15\u304d\u4e0a\u3052\u3092\u4f9d\u983c\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u3053\u306e\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306f\u901a\u5e38\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002Momento\u30b5\u30dd\u30fc\u30c8\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002")),(0,r.yg)("h2",{id:"\u30b5\u30f3\u30d7\u30eb"},"\u30b5\u30f3\u30d7\u30eb"),(0,r.yg)("h3",{id:"publish-1"},"Publish"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u306f\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"hello world!")," \u3068\u3044\u3046\u5024\u3092 ",(0,r.yg)("em",{parentName:"p"},"us-east-1")," \u30ea\u30fc\u30b8\u30e7\u30f3\u306e ",(0,r.yg)("em",{parentName:"p"},"my-cache")," \u30ad\u30e3\u30c3\u30b7\u30e5\u306e ",(0,r.yg)("em",{parentName:"p"},"example")," \u30c8\u30d4\u30c3\u30af\u306b\u767a\u884c\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,r.yg)("p",null,"\u30af\u30a8\u30ea\u30fb\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u6307\u5b9a\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"curl -X POST -d 'hello world!' \"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>\"")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Authorization"),"\u30d8\u30c3\u30c0\u30fc\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u308b\u30c8\u30fc\u30af\u30f3:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'curl -X POST -H "Authorization: <token>" -d \'hello world!\' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"')))}c.isMDXComponent=!0}}]);