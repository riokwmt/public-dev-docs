"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>T});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),T=o,d=u["".concat(c,".").concat(T)]||u[T]||s[T]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function T(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3,sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache"},i="Momento Cache\u306eTTL\uff08Time-to-Live\uff09\u3067\u30c7\u30fc\u30bf\u3092\u5931\u52b9\u3055\u305b\u308b\u3002",l={unversionedId:"cache/learn/how-it-works/expire-data-with-ttl",id:"cache/learn/how-it-works/expire-data-with-ttl",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/learn/how-it-works/expire-data-with-ttl.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/expire-data-with-ttl",permalink:"/ja/cache/learn/how-it-works/expire-data-with-ttl",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/expire-data-with-ttl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"How It Works"},next:{title:"Cache eviction vs expiration",permalink:"/ja/cache/learn/how-it-works/cache-eviction-vs-expiration"}},c={},m=[{value:"\u6307\u5b9a\u3057\u305f\u79d2\u6570\u5f8c\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u5931\u52b9\u3055\u305b\u308b",id:"\u6307\u5b9a\u3057\u305f\u79d2\u6570\u5f8c\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u5931\u52b9\u3055\u305b\u308b",level:2},{value:"Momento Cache\u3067TTL\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5",id:"momento-cache\u3067ttl\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5",level:2},{value:"TTL\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f",id:"ttl\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f",level:2}],p={toc:m};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-cache\u306ettltime-to-live\u3067\u30c7\u30fc\u30bf\u3092\u5931\u52b9\u3055\u305b\u308b"},"Momento Cache\u306eTTL\uff08Time-to-Live\uff09\u3067\u30c7\u30fc\u30bf\u3092\u5931\u52b9\u3055\u305b\u308b\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001Momento Cache \u306e TTL (time-to-live) \u6a5f\u80fd\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002TTL \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u79d2\u6570\u5f8c\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u304c\u81ea\u52d5\u7684\u306b\u5931\u52b9\u3057\u307e\u3059\u3002"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FDmk6RP8-b0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Momento Cache\u306f\u3001TTL\u306e\u6709\u52b9\u671f\u9650\u3092\u51e6\u7406\u3057\u3001\u6bce\u6708\u306e\u8ee2\u9001\u30b3\u30b9\u30c8\u3067\u6e2c\u5b9a\u306b\u306f\u52a0\u7b97\u3055\u308c\u307e\u305b\u3093\u3002")),(0,o.kt)("h2",{id:"\u6307\u5b9a\u3057\u305f\u79d2\u6570\u5f8c\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u5931\u52b9\u3055\u305b\u308b"},"\u6307\u5b9a\u3057\u305f\u79d2\u6570\u5f8c\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u5931\u52b9\u3055\u305b\u308b"),(0,o.kt)("p",null,"TTL\u5024\u306f\u3001Momento Cache\u304c\u30a2\u30a4\u30c6\u30e0\u3092\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u66f8\u304d\u8fbc\u3093\u3067\u304b\u3089\u3001\u30a2\u30a4\u30c6\u30e0\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u5931\u52b9\u3059\u308b\u307e\u3067\u306e\u79d2\u6570\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30a2\u30a4\u30c6\u30e0\u306e TTL \u5024\u3092 900 \u79d2 (15 \u5206) \u306b\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u3001\u30a2\u30a4\u30c6\u30e0\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u633f\u5165\u3055\u308c\u3066\u304b\u3089 15 \u5206\u5f8c\u306b\u5931\u52b9\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"momento-cache\u3067ttl\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5"},"Momento Cache\u3067TTL\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8907\u6570\u306e\u8a00\u8a9e\u3067\u8a18\u8ff0\u3057\u305f\u3001\u3088\u308a\u5805\u7262\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/cache/develop/"},"Momento SDK \u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"TTL\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5834\u6240\u306f3\u3064\u3042\u308a\u307e\u3059\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Momento SDK \u3067 CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u3001\u63a5\u7d9a\u306b TTL \u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5024\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u3044\u9650\u308a\u3001\u305d\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3059\u308b\u4ee5\u964d\u306e SET \u64cd\u4f5c\u3067\u306f\u3001\u305d\u306e TTL \u5024\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const MY_DEFAULT_TTL = 60; // This value is in seconds\nconst momento = CacheClient.create({\n     configuration: Configurations.InRegion.Default.latest(),\n     credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'}),\n     defaultTtlSeconds: MY_DEFAULT_TTL\n});\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SET \u64cd\u4f5c\u3067\u306f\u3001\u3053\u306e\u64cd\u4f5c\u306e\u305f\u3081\u3060\u3051\u306b TTL \u5024\u3092\u8a2d\u5b9a\u3067\u304d\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b TTL \u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await momento.set(CACHE_NAME, 'key', 'my value', 40)\n// The number 40 is the TTL value in seconds for this item to expire and overrides the connection object's value.\n")),(0,o.kt)("p",{parentName:"li"},"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3001SET\u64cd\u4f5c\u304b\u3089TTL\u5024\u3092\u5b8c\u5168\u306b\u7701\u7565\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30a2\u30a4\u30c6\u30e0\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306eTTL\u5024\u3092\u4f7f\u7528\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u633f\u5165\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await momento.set(CACHE_NAME, 'key', 'my value')\n// If you omit the TTL value, this will use the connection object's value.\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CLI\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"momento configure"),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb(~/.momento/config)\u304c\u66f8\u304d\u8fbc\u307e\u308c\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u3068\u3057\u3066\u6307\u5b9a\u3057\u305f\u5024\u304c\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u540c\u3058\u30e6\u30fc\u30b6\u30fc\u304b\u3089CLI\u3092\u4f7f\u3063\u3066\u30a2\u30a4\u30c6\u30e0\u3092\u66f8\u304d\u8fbc\u307f\u3001SET\u64cd\u4f5c\u3067TTL\u3092\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u3001CLI\u306f\u305d\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u5024\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u4e00\u7dd2\u306b\u30b3\u30d4\u30fc\u3057\u306a\u3044\u9650\u308a\u3001\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u305d\u306e\u5185\u5bb9\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"momento configure")," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u5834\u6240\u306b\u56fa\u6709\u3067\u3059\u3002")),(0,o.kt)("h2",{id:"ttl\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f"},"TTL\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u306a\u305c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u306fTTL\uff08Time to Live\uff09\u304c\u5fc5\u8981\u306a\u306e\u304b\uff1f"),(0,o.kt)("p",null,"\u901a\u5e38\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30f3\u30c8\u30ea\u306f\u30c7\u30fc\u30bf\u306e\u4e00\u90e8\u306e\u6c7a\u5b9a\u7684\u306a\u30bd\u30fc\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3080\u3057\u308d\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30f3\u30c8\u30ea\u306f\u3001\u7570\u306a\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u306e\u500b\u3005\u306e\u30ec\u30b3\u30fc\u30c9\u3001\u8907\u6570\u306e\u30ec\u30b3\u30fc\u30c9\u3084\u30bd\u30fc\u30b9\u304b\u3089\u306e\u96c6\u7d04\u307e\u305f\u306f\u8a08\u7b97\u3055\u308c\u305f\u60c5\u5831\u3001\u3042\u308b\u3044\u306f\u5916\u90e8\u306e\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u306a\u3069\u3001\u30c7\u30fc\u30bf\u306e\u4e00\u90e8\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u3001\u3088\u308a\u9ad8\u901f\u3067\u3001\u5b89\u4fa1\u3067\u3001\u8010\u4e45\u6027\u306e\u4f4e\u3044\u65b9\u6cd5\u3067\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3092\u6539\u5584\u3057\u305f\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u8ca0\u8377\u3092\u8efd\u6e1b\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u3046\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a8\u30f3\u30c8\u30ea\u304c\u3059\u3050\u306b\u5225\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u308b\u3053\u3068\u3092\u4e88\u671f\u3057\u3066\u3044\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u3057\u304b\u3057\u3001\u307b\u3068\u3093\u3069\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u3059\u3079\u3066\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u6c38\u4e45\u306b\u4fdd\u6301\u3059\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u90e8\u5206\u7684\u306b\u306f\u3001\u3053\u308c\u306f\u30c7\u30fc\u30bf\u306e\u9673\u8150\u5316\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30f3\u30c8\u30ea\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u3001\u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b\u5909\u66f4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30fc\u30bf\u306e\u4e00\u8cab\u6027\u306b\u95a2\u3059\u308b\u8981\u4ef6\u304c\u53b3\u3057\u3044\u5834\u5408\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30f3\u30c8\u30ea\u306e\u57fa\u790e\u3068\u306a\u308b\u30c7\u30fc\u30bf\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30a8\u30f3\u30c8\u30ea\u3092\u76f4\u63a5\u66f4\u65b0\u307e\u305f\u306f\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u305d\u306e\u4ed6\u306e\u72b6\u6cc1\u3067\u306f\u3001\u4e00\u6642\u7684\u306b\u53e4\u304f\u306a\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3059\u308b\u306e\u306f\u69cb\u308f\u306a\u3044\u304c\u3001\u3042\u308b\u7a0b\u5ea6\u306e\u9bae\u5ea6\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u5b9a\u671f\u7684\u306b\u671f\u9650\u5207\u308c\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u4e8c\u3064\u76ee\u306e\u8003\u616e\u70b9\u306f\u3001\u5358\u7d14\u306a\u30ea\u30bd\u30fc\u30b9\u306e\u5236\u7d04\u306b\u3042\u308a\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u901a\u5e38RAM\u306b\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3057\u307e\u3059\u304c\u3001RAM\u306f\u5e0c\u5c11\u306a\u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u4e00\u5ea6\u3082\u5931\u52b9\u3055\u305b\u306a\u3044\u3068\u3001\u65b0\u3057\u3044\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u3088\u3046\u3068\u3057\u305f\u3068\u304d\u306bRAM\u304c\u3044\u3063\u3071\u3044\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u65b0\u3057\u3044\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u62d2\u5426\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3057\u3001\u3082\u3063\u3068\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u306e\u306f\u3001\u3042\u3089\u304b\u3058\u3081\u6c7a\u3081\u3089\u308c\u305f\u9000\u53bb\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u57fa\u3065\u3044\u3066\u30a2\u30a4\u30c6\u30e0\u3092\u9000\u53bb\u3055\u305b\u308b\u3053\u3068\u3092\u9078\u629e\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30af\u30e9\u30a6\u30c9\u4ee5\u524d\u306e\u4e16\u754c\u3092\u60f3\u5b9a\u3057\u3066\u69cb\u7bc9\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5229\u7528\u53ef\u80fd\u306a\u7279\u5b9a\u306e\u91cf\u306e\u30e1\u30e2\u30ea\u3092\u4e8b\u524d\u306b\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306f\u3001TTL\u3092\u9069\u5207\u306b\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6e80\u676f\u306b\u3057\u3059\u304e\u308b\u3068\u3001\u53ef\u7528\u6027\u306e\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u308a\u3001\u671b\u307e\u3057\u304f\u306a\u3044\u65b9\u6cd5\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u6d88\u53bb\u3055\u308c\u305f\u308a\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u5bfe\u7167\u7684\u306b\u3001Momento\u306f\u6700\u65b0\u306e\u30af\u30e9\u30a6\u30c9\u306e\u5f3e\u529b\u6027\u306e\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30b5\u30a4\u30ba\u3092\u4e8b\u524d\u306b\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u3042\u306a\u305f\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\u306b\u57fa\u3065\u3044\u3066\u3001\u81ea\u52d5\u7684\u306b\u62e1\u5f35\u3068\u7e2e\u5c0f\u3092\u884c\u3044\u307e\u3059\u3002\u901a\u5e38\u306e\u904b\u7528\u3067\u306f\u3001Momento\u306f\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30e2\u30ea\u306e\u4e0d\u8db3\u306b\u57fa\u3065\u3044\u3066\u30a2\u30a4\u30c6\u30e0\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u3068\u306f\u3044\u3048\u3001Momento \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30a2\u30a4\u30c6\u30e0\u306b TTL \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001 \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u9673\u8150\u5316\u3092\u9632\u304e\u3001\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u3067\u306f\u3001Momento \u306e SimpleCache \u3067 TTL \u3092\u4f7f\u3046\u65b9\u6cd5\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u8a2d\u5b9a\u3067\u304d\u308b\u6700\u5927TTL\u306f\uff1f"),"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u306b\u8a2d\u5b9a\u3067\u304d\u308bTTL\u306e\u4e0a\u9650\u306f24\u6642\u9593\u3067\u3059\u3002\u305d\u306e\u6642\u9593\u3092\u8d85\u3048\u3066\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30b5\u30dd\u30fc\u30c8\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,o.kt)("a",{href:"mailto:support@momentohq.com"},"Momento\u30b5\u30dd\u30fc\u30c8\u306e\u9023\u7d61\u5148"),"."))}s.isMDXComponent=!0}}]);