"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Metrics in the Console",title:"Metrics in the Console",pagination_prev:null,description:"Metrics in the console",hide_title:!0},s="\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30e1\u30c8\u30ea\u30af\u30b9",a={unversionedId:"topics/manage/metrics_in_the_console",id:"topics/manage/metrics_in_the_console",title:"Metrics in the Console",description:"Metrics in the console",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/manage/metrics_in_the_console.md",sourceDirName:"topics/manage",slug:"/topics/manage/metrics_in_the_console",permalink:"/ja/topics/manage/metrics_in_the_console",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/manage/metrics_in_the_console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Metrics in the Console",title:"Metrics in the Console",pagination_prev:null,description:"Metrics in the console",hide_title:!0},sidebar:"topicsSidebar",next:{title:"Pricing and Free Tier",permalink:"/ja/topics/manage/pricing"}},c={},l=[{value:"TPS (transactions per second)",id:"tps-transactions-per-second",level:2},{value:"Byte count (data volume in/out of your Momento caches)",id:"byte-count-data-volume-inout-of-your-momento-caches",level:2},{value:"Errors and successes",id:"errors-and-successes",level:2},{value:"Hits and misses (hit rate)",id:"hits-and-misses-hit-rate",level:2},{value:"FAQ&#39;s",id:"faqs",level:3}],m={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30e1\u30c8\u30ea\u30af\u30b9"},"\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30e1\u30c8\u30ea\u30af\u30b9"),(0,o.kt)("p",null,"Momento Cache\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3001\u904b\u7528\u3059\u308b\u5834\u5408\u3001\u30d0\u30b0\u3092\u52b9\u679c\u7684\u306b\u8a3a\u65ad\u3057\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u6700\u9069\u5316\u3059\u308b\u305f\u3081\u306e\u53ef\u8996\u6027\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002Momento\u306f\u3001\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u3068\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3092\u5bb9\u6613\u306b\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3001Momento\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4ecb\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u9867\u5ba2\u306b1\u6642\u9593\u306e\u30b5\u30fc\u30d3\u30b9\u5074\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Momento Cache\u306b\u91cd\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u3064\u4f01\u696d\u3067\u3042\u308c\u3070\u3001Momento\u30c1\u30fc\u30e0\u3068\u7dca\u5bc6\u306b\u9023\u643a\u3057\u3001\u30b5\u30dd\u30fc\u30c8\u3068\u8a73\u7d30\u306a\u5c65\u6b74\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u63d0\u4f9b\u3092\u53d7\u3051\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"Momento\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u3001\u5de6\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u306b\u3042\u308b\u5c0f\u3055\u306a\u68d2\u30b0\u30e9\u30d5\u30a2\u30a4\u30b3\u30f3\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30c8\u30ea\u30c3\u30af\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(6342).Z,width:"1019",height:"599"})),(0,o.kt)("p",null,"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30c8\u30ea\u30af\u30b9\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30c7\u30fc\u30bf\u30fb\u30d7\u30ec\u30fc\u30f3\u64cd\u4f5c\u306e\u307f\u3092\u5bfe\u8c61\u3068\u3057\u3066\u304a\u308a\uff08\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u307e\u305f\u306f\u524a\u9664\u306a\u3069\u306e\u5236\u5fa1\u30d7\u30ec\u30fc\u30f3\u64cd\u4f5c\u306f\u542b\u307e\u308c\u307e\u305b\u3093\uff09\u3001\u76f4\u524d\u306e 1 \u6642\u9593\u306e\u3082\u306e\u3067\u3059\u3002\u73fe\u5728\u3001\u30e1\u30c8\u30ea\u30af\u30b9\u306f\u3001Momento \u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u96c6\u8a08\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u6298\u308c\u7dda\u30b0\u30e9\u30d5\u306e\u305d\u306e\u5206\u306e\u30d0\u30d6\u30eb\u306b\u30ab\u30fc\u30bd\u30eb\u3092\u5408\u308f\u305b\u308b\u3068\u3001\u4efb\u610f\u306e\u5206\u306e\u30dd\u30a4\u30f3\u30c8\u30fb\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u8868\u793a\u306f\u901a\u5e38\u30011\uff5e2\u5206\u9045\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"tps-transactions-per-second"},"TPS (transactions per second)"),(0,o.kt)("p",null,"\u3053\u306e\u6298\u308c\u7dda\u30b0\u30e9\u30d5\u306f\u30011 \u79d2\u3042\u305f\u308a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30c7\u30fc\u30bf\u64cd\u4f5c\u8981\u6c42\u6570\u3092 1 \u5206\u9593\u3054\u3068\u306b\u5e73\u5747\u3057\u305f\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u30ec\u30d9\u30eb\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u306b\u4f55\u3082\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u3066\u304a\u3089\u305a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u306e\u5065\u5168\u6027\u3068\u30b3\u30fc\u30c9\u5185\u306e\u30ed\u30b8\u30c3\u30af\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff01"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8885).Z,width:"1518",height:"948"})),(0,o.kt)("h2",{id:"byte-count-data-volume-inout-of-your-momento-caches"},"Byte count (data volume in/out of your Momento caches)"),(0,o.kt)("p",null,"\u3053\u306e\u6298\u308c\u7dda\u30b0\u30e9\u30d5\u306f\u30011\u5206\u9593\u306bMomento\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8ee2\u9001\u3055\u308c\u305f\u3001\u307e\u305f\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u8ee2\u9001\u3055\u308c\u305f\u30d0\u30a4\u30c8\u6570\u3092\u5408\u8a08\u3057\u305f\u3082\u306e\u3067\u3059\u3002\u76f4\u8fd1\u306e 1 \u6642\u9593\u306b\u8ee2\u9001\u3055\u308c\u305f\u30d0\u30a4\u30c8\u6570\u306e\u5408\u8a08\u3082\u4e0a\u306e\u30d0\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u30ec\u30d9\u30eb\u3092\u628a\u63e1\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u306b\u4f55\u3082\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u306e\u5065\u5168\u6027\u3068\u30b3\u30fc\u30c9\u5185\u306e\u30ed\u30b8\u30c3\u30af\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff01\u8ee2\u9001\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u4f7f\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4e0e\u3048\u3066\u3044\u308b\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u306e\u898b\u7a4d\u3082\u308a\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002TPS\u3068\u30d0\u30a4\u30c8\u6570\u306e\u4e21\u65b9\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u898b\u308b\u3053\u3068\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a2\u30a4\u30c6\u30e0\u306e\u30b5\u30a4\u30ba\u306b\u95a2\u3059\u308b\u5927\u307e\u304b\u306a\u60c5\u5831\u3092\u5f97\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(7999).Z,width:"1518",height:"944"})),(0,o.kt)("h2",{id:"errors-and-successes"},"Errors and successes"),(0,o.kt)("p",null,"\u3053\u306e\u30b0\u30e9\u30d5\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3059\u308b Momento \u304b\u3089\u306e\u30a8\u30e9\u30fc\u304a\u3088\u3073\u6210\u529f\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u6570\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u30b0\u30e9\u30d5\u306f\u3001\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8\u3068\u3057\u3066\u8868\u793a\u3059\u308b\u3053\u3068\u3082\u30011 \u5206\u9593\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u751f\u306e\u30ab\u30a6\u30f3\u30c8\u3068\u3057\u3066\u8868\u793a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u30a8\u30e9\u30fc\u306e\u30ec\u30d9\u30eb\u304c\u9ad8\u3044\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b0\u3092\u8a73\u3057\u304f\u8abf\u3079\u3066\u539f\u56e0\u3092\u7406\u89e3\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a8\u30e9\u30fc\u7387\u306e\u4e0a\u6607\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u304c ",(0,o.kt)("a",{parentName:"p",href:"./limits"},"\u30b5\u30fc\u30d3\u30b9\u5236\u9650")," \u306b\u906d\u9047\u3057\u305f\u305f\u3081\u306b\u3001Momento \u306b\u3088\u3063\u3066\u30b9\u30ed\u30c3\u30c8\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(4950).Z,width:"1514",height:"1078"})),(0,o.kt)("h2",{id:"hits-and-misses-hit-rate"},"Hits and misses (hit rate)"),(0,o.kt)("p",null,"\u3053\u306e\u30b0\u30e9\u30d5\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3069\u308c\u3060\u3051\u3046\u307e\u304f\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u9069\u7528\u3057\u3066\u3044\u308b\u304b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u30d2\u30c3\u30c8\u7387\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0\u306b\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u306b\u9078\u629e\u3057\u305fTTL\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u8ffd\u52a0\u3059\u308b\u6226\u7565\u304c\u542b\u307e\u308c\u307e\u3059\uff08\u6b21\u56de\u8aad\u307f\u8fbc\u3080\u3068\u304d\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u304c\u3042\u308b\u3068\u4e88\u60f3\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u66f8\u304d\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\u3002\u30d2\u30c3\u30c8\u7387\u304c\u9ad8\u3051\u308c\u3070\u9ad8\u3044\u307b\u3069\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6069\u6075\u306f\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u9577\u3044TTL\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u6271\u3046\u30c7\u30fc\u30bf\u306e\u9673\u8150\u5316\u3068\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u53d6\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(4379).Z,width:"1512",height:"1074"})),(0,o.kt)("h3",{id:"faqs"},"FAQ's"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"1\u6642\u9593\u4ee5\u4e0a\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f"),"\u672c\u756a\u74b0\u5883\u3067\u306f\u3001Momento \u30c1\u30fc\u30e0\u3068\u63d0\u643a\u3057\u3066\u30b5\u30dd\u30fc\u30c8\u3092\u53d7\u3051\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u8a73\u7d30\u306a\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u89b3\u6e2c\u53ef\u80fd\u30c4\u30fc\u30eb\u3078\u306e\u516c\u958b\u304c\u542b\u307e\u308c\u307e\u3059\uff08\u73fe\u5728\u306f CloudWatch \u3067\u3059\u304c\u3001\u4eca\u5f8c\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8ffd\u52a0\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\uff09\u3002\u8a73\u7d30\u306a\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u914d\u4fe1\u304c\u53ef\u80fd\u306b\u306a\u308c\u3070\u3001\u904b\u7528\u57fa\u6e96\u306b\u5f93\u3063\u3066\u30a2\u30e9\u30fc\u30e0\u3084\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u306a\u305c\u5f85\u3061\u6642\u9593\u30e1\u30c8\u30ea\u30af\u30b9\u304c\u63d0\u4f9b\u3055\u308c\u306a\u3044\u306e\u3067\u3059\u304b?"),"Momento \u306f\u3001\u30b5\u30fc\u30d3\u30b9\u5185\u90e8 (\u30ea\u30af\u30a8\u30b9\u30c8 \u30eb\u30fc\u30bf\u30fc\u3068\u30b9\u30c8\u30ec\u30fc\u30b8 \u30ce\u30fc\u30c9\u9593) \u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u95a2\u9023\u3059\u308b\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3057\u304b\u6e2c\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u3088\u308a\u826f\u3044\u6307\u6a19\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u7d4c\u9a13\u3059\u308b\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3092\u6e2c\u5b9a\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u5168\u4f53\u7684\u306a\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u306e\u8a71\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u53d7\u3051\u3066\u3044\u308b\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u306b\u3064\u3044\u3066\u3001\u3088\u308a\u591a\u304f\u306e\u3053\u3068\u3092\u7269\u8a9e\u3063\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u30ab\u30ca\u30ea\u30a2\u3092\u4f7f\u3063\u3066\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u306e\u3069\u3053\u304b\u9060\u304f\u306b\u3044\u308b\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u304c\u7d4c\u9a13\u3059\u308b\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3092\u30c6\u30b9\u30c8\u3057\u3001\u5831\u544a\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",null),(0,o.kt)("br",null),"CloudWatch\u3078\u306e\u8a73\u7d30\u306a\u30e1\u30c8\u30ea\u30af\u30b9\u914d\u4fe1\u3092\u53d7\u3051\u3066\u3044\u308b\u304a\u5ba2\u69d8\u306b\u306f\u3001\u30d1\u30fc\u30bb\u30f3\u30bf\u30a4\u30eb\u4ed8\u304d\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fb\u30e1\u30c8\u30ea\u30af\u30b9\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u3084\u30ab\u30ca\u30ea\u30a2\u30fb\u30ec\u30a4\u30c6\u30f3\u30b7\u3068\u6bd4\u8f03\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u30fb\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u306e\u554f\u984c\u304cMomento\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u306e\u304b\u3001\u3042\u308b\u3044\u306f\u6839\u672c\u7684\u306a\u539f\u56e0\u3084\u89e3\u6c7a\u7b56\u3092\u4ed6\u306e\u5834\u6240\u306b\u6c42\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u304b\u3092\u8fc5\u901f\u306b\u5224\u65ad\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"))}p.isMDXComponent=!0},7999:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics_bytecount-16a0c56f44f79d94960f23300c1d4e95.png"},4379:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics_hit-miss-a73a870a07547c0a73bee51e5ff0404e.png"},6342:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics_select-fa7782d9e072a2b8bd0d03f0fa16a416.png"},4950:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics_success-error-bae258feb5c20dca400fe94cbed612e1.png"},8885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics_tps-c32cdb95c2f0410677efa8e3c62fe4ea.png"}}]);