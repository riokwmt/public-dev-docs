"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5968],{5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=m({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=i??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>l});var r=n(4866),a=n(5162),o=n(614),s=n(7294);const l=e=>{let{js:t,python:n,java:l,kotlin:i,go:c,csharp:u,php:p,rust:d,ruby:h,elixir:m,swift:g,dart:b,cli:f}=e;return t||n||l||i||c||u||p||d||h||m||g||b||f?s.createElement(r.Z,null,t&&s.createElement(a.Z,{value:"js",label:"JavaScript"},s.createElement(o.Z,{language:"js"},t)),n&&s.createElement(a.Z,{value:"python",label:"Python"},s.createElement(o.Z,{language:"python"},n)),l&&s.createElement(a.Z,{value:"java",label:"Java"},s.createElement(o.Z,{language:"java"},l)),i&&s.createElement(a.Z,{value:"kotlin",label:"Kotlin"},s.createElement(o.Z,{language:"kotlin"},i)),c&&s.createElement(a.Z,{value:"go",label:"Go"},s.createElement(o.Z,{language:"go"},c)),u&&s.createElement(a.Z,{value:"csharp",label:"C#"},s.createElement(o.Z,{language:"csharp"},u)),p&&s.createElement(a.Z,{value:"php",label:"PHP"},s.createElement(o.Z,{language:"php"},p)),d&&s.createElement(a.Z,{value:"rust",label:"Rust"},s.createElement(o.Z,{language:"rust"},d)),h&&s.createElement(a.Z,{value:"ruby",label:"Ruby"},s.createElement(o.Z,{language:"ruby"},h)),m&&s.createElement(a.Z,{value:"elixir",label:"Elixir"},s.createElement(o.Z,{language:"elixir"},m)),g&&s.createElement(a.Z,{value:"swift",label:"Swift"},s.createElement(o.Z,{language:"swift"},g)),b&&s.createElement(a.Z,{value:"dart",label:"Dart"},s.createElement(o.Z,{language:"dart"},b)),f&&s.createElement(a.Z,{value:"cli",label:"CLI"},s.createElement(o.Z,{language:"cli"},f))):null}},9099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=(n(3404),n(9720));const s={sidebar_position:20,sidebar_label:"SDK Error Handling",title:"SDK error handling",description:"Discover how to handle errors when using the Momento SDK.",pagination_next:null},l="SDK \u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",i={unversionedId:"cache/develop/basics/error-handling-production-readiness",id:"cache/develop/basics/error-handling-production-readiness",title:"SDK error handling",description:"Discover how to handle errors when using the Momento SDK.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/basics/error-handling-production-readiness.md",sourceDirName:"cache/develop/basics",slug:"/cache/develop/basics/error-handling-production-readiness",permalink:"/ja/cache/develop/basics/error-handling-production-readiness",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/basics/error-handling-production-readiness.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"SDK Error Handling",title:"SDK error handling",description:"Discover how to handle errors when using the Momento SDK.",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"SDK Configuration Objects",permalink:"/ja/cache/develop/basics/client-configuration-objects"}},c={},u=[{value:"\u8868\u9762\u7684\u306a\u30a8\u30e9\u30fc",id:"\u8868\u9762\u7684\u306a\u30a8\u30e9\u30fc",level:2},{value:"\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u547c\u3073\u51fa\u3057\u306e\u518d\u8a66\u884c",id:"\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u547c\u3073\u51fa\u3057\u306e\u518d\u8a66\u884c",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk-\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"SDK \u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,a.kt)("p",null,"\u5de6\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u306b\u3042\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"SDKs"),' \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u305d\u308c\u305e\u308c\u306eSDK\u306e\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u30da\u30fc\u30b8\u306b\u306f\u3001"Taking your code to prod "\u3068\u3044\u3046\u30ea\u30f3\u30af\u304c\u3042\u308a\u3001\u305d\u306e\u8a00\u8a9e\u3067\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u3067\u3059\u3050\u306b\u4f7f\u3048\u308b\u30b3\u30fc\u30c9\u3092\u4f5c\u308b\u305f\u3081\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u304c\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u3002'),(0,a.kt)("p",null,"Momento SDK \u306f\u3001\u3042\u3089\u304b\u3058\u3081\u7528\u610f\u3055\u308c\u305f\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u672c\u756a\u74b0\u5883\u3067\u3082\u554f\u984c\u306a\u304f\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u904b\u7528\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u6982\u5ff5\u5b9f\u8a3c\u304b\u3089\u672c\u756a\u74b0\u5883\u306b\u7c21\u5358\u306b\u79fb\u884c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento SDK \u306e\u30a8\u30e9\u30fc\u51e6\u7406\u306b\u95a2\u3059\u308b\u4e00\u822c\u7684\u306a\u6ce8\u610f\u70b9\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u304c\u307b\u3068\u3093\u3069\u306e\u304a\u5ba2\u69d8\u306b\u63a8\u5968\u3055\u308c\u308b\u7406\u7531\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u8868\u9762\u7684\u306a\u30a8\u30e9\u30fc"},"\u8868\u9762\u7684\u306a\u30a8\u30e9\u30fc"),(0,a.kt)("p",null,"CacheClient` \u30e1\u30bd\u30c3\u30c9\uff08Get\u3001Set\u3001Increment \u306a\u3069\uff09\u306e\u547c\u3073\u51fa\u3057\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306f\u3001\u4f8b\u5916\u3092\u30b9\u30ed\u30fc\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u547c\u3073\u51fa\u3057\u306e\u8fd4\u308a\u5024\u306e\u4e00\u90e8\u3068\u3057\u3066\u958b\u767a\u8005\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u3068\u304d\u306b\u30a8\u30e9\u30fc\u304c\u76ee\u306b\u898b\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u3001IDE \u304c\u3001\u6c17\u306b\u306a\u308b\u30a8\u30e9\u30fc\u3092\u78ba\u5b9f\u306b\u51e6\u7406\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u70b9\u306b\u95a2\u3059\u308b\u79c1\u305f\u3061\u306e\u8003\u3048\u65b9\u306b\u3064\u3044\u3066\u306f\u3001\u30d6\u30ed\u30b0\u8a18\u4e8b\u300c\u306a\u305c","[\u4f8b\u5916\u306f\u30d0\u30b0]","\u306a\u306e\u304b\u300d(",(0,a.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/exceptions-are-bugs)%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%80%81%E3%81%94%E6%84%8F%E8%A6%8B%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E3%81%8A%E5%AF%84%E3%81%9B%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%EF%BC%81"},"https://www.gomomento.com/blog/exceptions-are-bugs)\u3092\u53c2\u7167\u3057\u3001\u3054\u610f\u898b\u304c\u3042\u308c\u3070\u304a\u5bc4\u305b\u304f\u3060\u3055\u3044\uff01")),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u6642\u306b\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u306e\u306b\u3082\u5f79\u7acb\u3061\u307e\u3059\u3002Momento\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3042\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u901a\u5e38\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306b\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u4fe1\u983c\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Momento SDK\u306f\u4f8b\u5916\u3092\u30b9\u30ed\u30fc\u3057\u306a\u3044\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u304a\u308a\u3001try/catch\u30d6\u30ed\u30c3\u30af\u3092\u8ffd\u52a0\u3057\u5fd8\u308c\u3066\u3082\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u4ee3\u308f\u308a\u306b\u3001Momento\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u89aa\u30af\u30e9\u30b9\u304b\u3089\u62e1\u5f35\u3055\u308c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Hit,"),"Miss,",(0,a.kt)("inlineCode",{parentName:"p"},"\u3084"),"Error,",(0,a.kt)("inlineCode",{parentName:"p"},'\u306a\u3069\u306e\u5b50\u30af\u30e9\u30b9\u578b\u3092\u6301\u3061\u3001\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002(\u3042\u308b\u8a00\u8a9e\u3067\u306f\u3001\u3053\u306e\u6982\u5ff5\u3092 "sealed classes "\u3068\u547c\u3073\u3001\u4ed6\u306e\u8a00\u8a9e\u3067\u306f "algebraic data types "\u3068\u547c\u3076\u3002\u30dd\u30ea\u30e2\u30fc\u30d5\u30a3\u30ba\u30e0\u306e\u4e00\u7a2e\u3067\u3059)\u3002\u3042\u306a\u305f\u306e\u30b3\u30fc\u30c9\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u304c '),"Hit",(0,a.kt)("inlineCode",{parentName:"p"},"\u3001"),"Miss",(0,a.kt)("inlineCode",{parentName:"p"},"\u3001"),"Error",(0,a.kt)("inlineCode",{parentName:"p"},"\u306e\u3044\u305a\u308c\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u5206\u5c90\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8aad\u307f\u8fbc\u307f\u7d50\u679c\u304c"),"Miss",(0,a.kt)("inlineCode",{parentName:"p"},"\u307e\u305f\u306f"),"Error",(0,a.kt)("inlineCode",{parentName:"p"}," \u3067\u3042\u3063\u305f\u5834\u5408\u3001\u4f55\u304c\u8d77\u3053\u3063\u305f\u306e\u304b\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306a\u60c5\u5831\u3092\u5f97\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u578b\u5b89\u5168\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3082\u5f97\u3089\u308c\u307e\u3059 ("),"Hit",(0,a.kt)("inlineCode",{parentName:"p"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u5b58\u5728\u3057\u306a\u3044"),"errorCode` \u306a\u3069\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059)\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," \u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u30f3\u30b0\u306e\u4f8b\u3067\u3059\uff1a"),(0,a.kt)(o.X,{js:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"final GetResponse response = cacheClient.get(\"test-cache\", \"test-key\").join();\nif (response instanceof GetResponse.Hit hit) {\n  System.out.println(\"Retrieved value for key 'test-key': \" + hit.valueString());\n} else if (response instanceof GetResponse.Miss) {\n  System.out.println(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (response instanceof GetResponse.Error error) {\n  throw new RuntimeException(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': \"\n          + error.getErrorCode(),\n      error);\n}",kotlin:"when (val response = cacheClient.get(\"test-cache\", \"test-key\")) {\n    is GetResponse.Hit -> println(\"Retrieved value for key 'test-key': ${response.value}\")\n    is GetResponse.Miss -> println(\"Key 'test-key' was not found in cache 'test-cache'\")\n    is GetResponse.Error -> throw RuntimeException(\n        \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${response.errorCode}\",\n        response\n    )\n}",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"\u66f8\u304d\u8fbc\u307fAPI(\u4f8b\u3048\u3070Set\u3084Delete)\u306a\u3069\u306e\u3044\u304f\u3064\u304b\u306eAPI\u306f\u3001(",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"\u3068\u306f\u5bfe\u7167\u7684\u306b)",(0,a.kt)("inlineCode",{parentName:"p"},"Success"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\u30ec\u30b9\u30dd\u30f3\u30b9\u3057\u304b\u6301\u3061\u307e\u305b\u3093\u3002\u3053\u308c\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u51e6\u7406\u3059\u308b\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\uff1a"),(0,a.kt)(o.X,{js:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:'final SetResponse response = cacheClient.set("test-cache", "test-key", "test-value").join();\nif (response instanceof SetResponse.Success) {\n  System.out.println("Key \'test-key\' stored successfully");\n} else if (response instanceof SetResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': "\n          + error.getErrorCode(),\n      error);\n}',kotlin:'when (val response = cacheClient.set("test-cache", "test-key", "test-value")) {\n    is SetResponse.Success -> println("Key \'test-key\' stored successfully")\n    is SetResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': ${response.errorCode}",\n        response\n    )\n}',go:"",csharp:"",php:"",rust:"",ruby:"",elixir:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"\u3069\u306e\u3088\u3046\u306a\u5834\u5408\u3067\u3082\u3001IDE\u306f\u7279\u5b9a\u306eAPI\u3067\u3069\u306e\u30bf\u30a4\u30d7\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u5229\u7528\u53ef\u80fd\u304b\u3001\u305d\u3057\u3066\u305d\u308c\u305e\u308c\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30bf\u30a4\u30d7\u3067\u3069\u306e\u3088\u3046\u306a\u30d7\u30ed\u30d1\u30c6\u30a3/\u30e1\u30bd\u30c3\u30c9\u304c\u5229\u7528\u53ef\u80fd\u304b\u306b\u3064\u3044\u3066\u306e\u30d2\u30f3\u30c8\u3092\u4e0e\u3048\u3066\u304f\u308c\u308b\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u30a8\u30e9\u30fc\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4ed5\u7d44\u307f\u3068\u4f7f\u3044\u65b9\u306e\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u3061\u3089\u306e\u30d3\u30c7\u30aa\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h9FiNCxlZso",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u547c\u3073\u51fa\u3057\u306e\u518d\u8a66\u884c"},"\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u547c\u3073\u51fa\u3057\u306e\u518d\u8a66\u884c"),(0,a.kt)("p",null,"\u30a8\u30e9\u30fc\u5fdc\u7b54\u5f8c\u306b\u547c\u3073\u51fa\u3057\u3092\u518d\u8a66\u884c\u3059\u308b\u5834\u5408\u3001Momento SDK \u306b\u671f\u5f85\u3067\u304d\u308b\u4e00\u822c\u7684\u306a\u52d5\u4f5c\u30d1\u30bf\u30fc\u30f3\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\uff1a"),(0,a.kt)("img",{src:"/img/sdk_retry_behavior.png",width:"100%",alt:"logic diagram depicting SDK retry behavior"}),(0,a.kt)("p",null,"Momento SDK\u306f\u3001\u30b9\u30ed\u30c3\u30c8\u4ed8\u304d\u30ea\u30af\u30a8\u30b9\u30c8(",(0,a.kt)("a",{parentName:"p",href:"./../../limits/"},"\u5236\u9650\u8d85\u904e"),")\u3092\u518d\u8a66\u884c\u3057\u307e\u305b\u3093\u3002\u305d\u306e\u4ed6\u306e\u30a8\u30e9\u30fc\u306b\u3064\u3044\u3066\u306f\u3001\u8981\u6c42\u3055\u308c\u305f\u64cd\u4f5c\u304c ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence"},"idempotent")," \u3067\u306a\u3044\u5834\u5408\u3001SDK \u306f\u518d\u8a66\u884c\u3057\u307e\u305b\u3093\u3002\u4f8b\u3048\u3070\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u30a8\u30e9\u30fc\u5fdc\u7b54\u3092\u53d7\u3051\u53d6\u3063\u305f\u5834\u5408\u3001SDK\u306f\u3042\u306a\u305f\u306e\u4ee3\u308f\u308a\u306b\u30ea\u30c8\u30e9\u30a4\u3092\u884c\u3044\u307e\u305b\u3093\uff08\u3053\u308c\u306f\u30aa\u30fc\u30d0\u30fc\u30ab\u30a6\u30f3\u30c8\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\uff09\u3002\u884c\u3046\u3079\u304d\u3067\u306a\u3044\u64cd\u4f5c\u306b\u3088\u308b\u30a8\u30e9\u30fc\u306e\u5834\u5408\u3001\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u304b\u3069\u3046\u304b\u306f\u958b\u767a\u8005\u306b\u9078\u629e\u3055\u305b\u305f\u65b9\u304c\u5b89\u5168\u3067\u3059\u3002"))}h.isMDXComponent=!0}}]);