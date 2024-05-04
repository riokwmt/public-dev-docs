"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6469],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=o,d=m["".concat(p,".").concat(s)]||m[s]||g[s]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:12,sidebar_label:"Drupal",title:"Use Momento As Your Drupal Cache",description:"Supercharge your Drupal cache by integrating with Momento",pagination_next:null},i="Momento Cache\u3068Drupal\u306e\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",l={unversionedId:"cache/develop/integrations/drupal-integration",id:"cache/develop/integrations/drupal-integration",title:"Use Momento As Your Drupal Cache",description:"Supercharge your Drupal cache by integrating with Momento",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/drupal-integration.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/drupal-integration",permalink:"/ja/cache/develop/integrations/drupal-integration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/drupal-integration.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"Drupal",title:"Use Momento As Your Drupal Cache",description:"Supercharge your Drupal cache by integrating with Momento",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Amazon EventBridge",permalink:"/ja/cache/develop/integrations/amazon-eventbridge"}},p={},c=[],u={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"momento-cache\u3068drupal\u306e\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},"Momento Cache\u3068Drupal\u306e\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,o.yg)("h1",{id:"method-1-recommended"},"METHOD 1: (Recommended)"),(0,o.yg)("p",null,"Momento\u3092Drupal\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u7d71\u5408\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u6a5f\u80fd\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u5f37\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u7d71\u5408\u306f\u3001Momento\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u30fb\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u6d3b\u7528\u3057\u3001Drupal\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u904b\u7528\u306b\u5408\u308f\u305b\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Momento\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30b5\u30fc\u30d0\u30fc\u3092\u7ba1\u7406\u30fb\u7dad\u6301\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u3053\u306e\u7d71\u5408\u306e\u5229\u7528\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u7c21\u5358\u306a\u624b\u9806\u306b\u5f93\u3044\u307e\u3059\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"1.",(0,o.yg)("a",{parentName:"li",href:"https://www.drupal.org/project/momento"},"\u3053\u3061\u3089"),"\u304b\u3089Momento\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3002"),(0,o.yg)("li",{parentName:"ol"},"2.",(0,o.yg)("a",{parentName:"li",href:"https://git.drupalcode.org/project/momento/-/blob/1.0.x/README.md?ref_type=heads"},"README"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u624b\u9806\u306b\u5f93\u3063\u3066\u3001Momento\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,o.yg)("li",{parentName:"ol"})),(0,o.yg)("h1",{id:"method-2"},"METHOD 2:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.drupal.org"},"Drupal"),"\u306f\u3001PHP\u3067\u69cb\u7bc9\u3055\u308c\u305f\u30d5\u30ea\u30fc\u3067\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u7ba1\u7406\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3042\u308a\u3001\u5229\u7528\u53ef\u80fd\u306a\u6700\u3082\u5b89\u5b9a\u3057\u305f\u5b89\u5168\u3067\u67d4\u8edf\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u7ba1\u7406\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u3064\u3068\u8003\u3048\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001Drupal\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\uff08\u901a\u5e38\u306fMySQL\u3001MariaDB\u3001\u307e\u305f\u306fPostgreSQL\uff09\u3092\u4f7f\u7528\u3057\u3066\u3001\u6bd4\u8f03\u7684\u9ad8\u4fa1\u306a\u8a08\u7b97\u7d50\u679c\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u306f\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306f\u76f8\u5bfe\u7684\u306b\u8a00\u3063\u3066\u9045\u3044\u306e\u3067\u3059\u3002\u30b5\u30a4\u30c8\u306e\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5fc5\u8981\u6027\u304c\u9ad8\u307e\u308b\u306b\u3064\u308c\u3066\u3001\u5c02\u7528\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u63d0\u4f9b\u3059\u308b\u5229\u70b9\u3082\u5897\u3048\u3066\u3044\u304d\u307e\u3059\u3002"),(0,o.yg)("p",null,"Drupal\u306fRedis\u3084Memcached\u306e\u3088\u3046\u306a\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u306e\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u308c\u3089\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u5229\u70b9\u306b\u306f\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u3069\u3061\u3089\u306e\u6280\u8853\u3092\u4f7f\u3046\u306b\u3057\u3066\u3082\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306b\u9069\u3057\u305f\u30b5\u30fc\u30d0\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3084\u30af\u30e9\u30b9\u30bf\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3068\u8a2d\u5b9a\u306b\u304b\u306a\u308a\u306e\u6642\u9593\u3068\u52b4\u529b\u3092\u8cbb\u3084\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b5\u30a4\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u9700\u8981\u306f\u6642\u9593\u3068\u3068\u3082\u306b\u5909\u5316\u3059\u308b\u305f\u3081\u3001\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u30fb\u30a4\u30f3\u30d5\u30e9\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u304c\u904e\u5c11\u3067\u3082\u904e\u5270\u3067\u3082\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3001\u30b3\u30b9\u30c8\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u7ba1\u7406\u3059\u308b\u4e0a\u3067\u975e\u5e38\u306b\u91cd\u8981\u3067\u3059\u3002",(0,o.yg)("strong",{parentName:"p"},"Momento Cache\u306f\u3001\u9700\u8981\u306e\u5909\u52d5\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u81ea\u52d5\u7684\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3057\u3001"),"\u3053\u306e\u3059\u3079\u3066\u3092\u51e6\u7406\u3057\u307e\u3059\u3002"),(0,o.yg)("p",null,"Momento\u3092Drupal\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u7d71\u5408\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u6a5f\u80fd\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u5f37\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u7d71\u5408\u306f\u3001Momento\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u30fb\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u6d3b\u7528\u3057\u3001Drupal\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u904b\u7528\u306b\u5408\u308f\u305b\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Momento\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30b5\u30fc\u30d0\u30fc\u3092\u7ba1\u7406\u30fb\u7dad\u6301\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u6642\u9593\u304c\u7d4c\u3064\u3068\u3059\u3050\u306b\u5927\u304d\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u306e\u3067\u3001\u9577\u671f\u7684\u306b\u6709\u52b9\u306b\u3059\u308b\u5834\u5408\u306flogrotate\u3084\u540c\u69d8\u306e\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u5236\u5fa1\u4e0d\u80fd\u306b\u306a\u3089\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u30a8\u30e9\u30fc\u306fDrupal\u306edblog\u306e ",(0,o.yg)("inlineCode",{parentName:"p"},"momento_cache")," \u30bf\u30a4\u30d7\u306e\u30ab\u30c6\u30b4\u30ea\u30fc\u306b\u8a18\u9332\u3055\u308c\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u3053\u306e\u7d71\u5408\u3092\u5229\u7528\u3057\u59cb\u3081\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u7c21\u5358\u306a\u624b\u9806\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Momento\u30e2\u30b8\u30e5\u30fc\u30eb\u3092",(0,o.yg)("a",{parentName:"li",href:"https://www.drupal.org/project/momento"},"\u3053\u3061\u3089"),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9/\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://git.drupalcode.org/project/momento/-/blob/1.0.x/README.md?ref_type=heads"},"README"),"\u306e\u6307\u793a\u306b\u5f93\u3063\u3066\u3001Momento\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")))}g.isMDXComponent=!0}}]);