"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4,sidebar_label:"Service Limits",title:"Service limits",pagination_next:null,description:"Explore Momento Vector Index service limits, the default values, and how to get them changed if you need."},i="Momento Vector Index\u306e\u30b5\u30fc\u30d3\u30b9\u30ea\u30df\u30c3\u30c8",l={unversionedId:"vector-index/manage/limits",id:"vector-index/manage/limits",title:"Service limits",description:"Explore Momento Vector Index service limits, the default values, and how to get them changed if you need.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/vector-index/manage/limits.md",sourceDirName:"vector-index/manage",slug:"/vector-index/manage/limits",permalink:"/ja/vector-index/manage/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/manage/limits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Service Limits",title:"Service limits",pagination_next:null,description:"Explore Momento Vector Index service limits, the default values, and how to get them changed if you need."},sidebar:"vectorSidebar",previous:{title:"Manage"}},c={},m=[{value:"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30b5\u30dd\u30fc\u30c8",id:"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30b5\u30dd\u30fc\u30c8",level:2}],p={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-vector-index\u306e\u30b5\u30fc\u30d3\u30b9\u30ea\u30df\u30c3\u30c8"},"Momento Vector Index\u306e\u30b5\u30fc\u30d3\u30b9\u30ea\u30df\u30c3\u30c8"),(0,o.kt)("p",null,"Momento Vector Index\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u30ea\u30bd\u30fc\u30b9\u306b\u95a2\u3057\u3066\u3001\u81ea\u793e\u3068\u9867\u5ba2\u3092\u4fdd\u8b77\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3059\u3079\u3066\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u5236\u9650\u3001\u307e\u305f\u306f\u79c1\u305f\u3061\u304c\u300c\u30ac\u30fc\u30c9\u30ec\u30fc\u30eb\u300d\u3068\u547c\u3076\u3082\u306e\u304c\u3042\u308a\u3001\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u53ef\u80fd\u306a\u9650\u308a\u5186\u6ed1\u306b\u3001\u3042\u308b\u3079\u304d\u3088\u3046\u306b\u7dad\u6301\u3059\u308b\u306e\u306b\u5f79\u7acb\u3063\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b5\u30fc\u30d3\u30b9\u5236\u9650\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Momento Vector \u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u5236\u9650"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u30c8\u30fc\u30bf\u30eb\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u6570"),(0,o.kt)("td",{parentName:"tr",align:null},"5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u306e\u30d9\u30af\u30c8\u30eb\u306e\u6b21\u5143"),(0,o.kt)("td",{parentName:"tr",align:null},"2500")))),(0,o.kt)("h2",{id:"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30b5\u30dd\u30fc\u30c8"},"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30b5\u30dd\u30fc\u30c8"),(0,o.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u306e\u5236\u9650\u306b\u3064\u3044\u3066\u306f\u3001\u7279\u306b\u6307\u5b9a\u304c\u306a\u3044\u9650\u308a\u5909\u66f4\u3067\u304d\u308b\u30bd\u30d5\u30c8\u5236\u9650\u3067\u3059\u3002 \u5236\u9650\u306e\u8abf\u6574\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento \u30b5\u30dd\u30fc\u30c8")," \u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002 \u30ed\u30b0\u30a4\u30f3\u6642\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u5909\u66f4\u3059\u308b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u540d\u524d\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u30af\u30e9\u30a6\u30c9 + \u30ea\u30fc\u30b8\u30e7\u30f3 (\u4f8b: AWS us-west-2)\u3001\u304a\u3088\u3073\u30ea\u30b9\u30c8\u306e\u3069\u306e\u5236\u9650\u3092\u5897\u3084\u3057\u305f\u3044\u304b\u3092\u542b\u3081\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);