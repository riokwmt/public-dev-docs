"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8987],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,s]=b({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,r]),tabValues:r}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>i});var n=a(4866),o=a(5162),r=a(614),l=a(7294);const i=e=>{let{js:t,python:a,java:i,go:u,csharp:s,php:c,rust:p,ruby:d,elixir:m,swift:b,cli:g}=e;return t||a||i||u||s||c||p||d||m||b||g?l.createElement(n.Z,null,t&&l.createElement(o.Z,{value:"js",label:"JavaScript"},l.createElement(r.Z,{language:"js"},t)),a&&l.createElement(o.Z,{value:"python",label:"Python"},l.createElement(r.Z,{language:"python"},a)),i&&l.createElement(o.Z,{value:"java",label:"Java"},l.createElement(r.Z,{language:"java"},i)),u&&l.createElement(o.Z,{value:"go",label:"Go"},l.createElement(r.Z,{language:"go"},u)),s&&l.createElement(o.Z,{value:"csharp",label:"C#"},l.createElement(r.Z,{language:"csharp"},s)),c&&l.createElement(o.Z,{value:"php",label:"PHP"},l.createElement(r.Z,{language:"php"},c)),p&&l.createElement(o.Z,{value:"rust",label:"Rust"},l.createElement(r.Z,{language:"rust"},p)),d&&l.createElement(o.Z,{value:"ruby",label:"Ruby"},l.createElement(r.Z,{language:"ruby"},d)),m&&l.createElement(o.Z,{value:"elixir",label:"Elixir"},l.createElement(r.Z,{language:"elixir"},m)),b&&l.createElement(o.Z,{value:"swift",label:"Swift"},l.createElement(r.Z,{language:"swift"},b)),g&&l.createElement(o.Z,{value:"cli",label:"CLI"},l.createElement(r.Z,{language:"cli"},g))):null}},9053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),r=(a(3404),a(9720));const l={sidebar_position:10,sidebar_label:"SDK Configuration Objects",title:"SDK configuration objects",description:"Discover how to use configuration objects to initialize the Momento SDK client.",pagination_prev:null},i="SDK Client configuration objects",u={unversionedId:"cache/develop/basics/client-configuration-objects",id:"cache/develop/basics/client-configuration-objects",title:"SDK configuration objects",description:"Discover how to use configuration objects to initialize the Momento SDK client.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/basics/client-configuration-objects.md",sourceDirName:"cache/develop/basics",slug:"/cache/develop/basics/client-configuration-objects",permalink:"/ja/cache/develop/basics/client-configuration-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/basics/client-configuration-objects.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"SDK Configuration Objects",title:"SDK configuration objects",description:"Discover how to use configuration objects to initialize the Momento SDK client.",pagination_prev:null},sidebar:"tutorialSidebar",next:{title:"SDK Error Handling",permalink:"/ja/cache/develop/basics/error-handling-production-readiness"}},s={},c=[{value:"Pre-built configurations",id:"pre-built-configurations",level:2},{value:"Laptop",id:"laptop",level:3},{value:"Browser",id:"browser",level:3},{value:"InRegion - Default",id:"inregion---default",level:3},{value:"InRegion - Low Latency",id:"inregion---low-latency",level:3},{value:"Lambda",id:"lambda",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-client-configuration-objects"},"SDK Client configuration objects"),(0,o.kt)("img",{src:"/img/client-configurations.jpg",width:"90%",alt:"a technical illustration of Momento client configuration objects."}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c Momento \u30b5\u30fc\u30d3\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u8a2d\u5b9a\u304c\u542b\u307e\u308c\u307e\u3059\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3001\u518d\u8a66\u884c\u3001\u30ed\u30ae\u30f3\u30b0\u3001\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306a\u3069\u306e\u8a2d\u5b9a\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u5404 SDK \u306b\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3042\u3089\u304b\u3058\u3081\u7528\u610f\u3055\u308c\u3066\u304a\u308a\u3001\u53ef\u80fd\u306a\u9650\u308a\u7d20\u65e9\u304f\u8d77\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u69d8\u3005\u306a\u30c7\u30d7\u30ed\u30a4\u74b0\u5883\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306e\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306f\u79c1\u305f\u3061\u304c\u884c\u3063\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u304a\u5ba2\u69d8\u306f\u3054\u81ea\u8eab\u306e\u30d3\u30b8\u30cd\u30b9\u306b\u7279\u5316\u3057\u305f\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306b\u5c02\u5ff5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002(\u305d\u308c\u306b\u3064\u3044\u3066\u306e\u30d6\u30ed\u30b0\u30b7\u30ea\u30fc\u30ba\u3082\u3042\u308a\u307e\u3059\uff01",(0,o.kt)("a",{parentName:"p",href:"https://jp.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you/"},"\u9a5a\u304f\u307b\u3069\u30b7\u30f3\u30d7\u30eb\uff1a \u3042\u306a\u305f\u306e\u305f\u3081\u306b\u5927\u5909\u306a\u4ed5\u4e8b\u3092\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8")),(0,o.kt)("p",null,"\u4e8b\u524d\u306b\u30d3\u30eb\u30c9\u3055\u308c\u305f\u8a2d\u5b9a\u306b\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"latest()")," \u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u4ed8\u5c5e\u3057\u3066\u304a\u308a\u3001\u4e0e\u3048\u3089\u308c\u305f\u74b0\u5883\u306b\u5bfe\u3057\u3066\u5e38\u306b\u6700\u65b0\u306e\u63a8\u5968\u8a2d\u5b9a\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070"),(0,o.kt)(r.X,{js:"Configurations.InRegion.Default.latest();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"latest()"),"\u306e\u30d3\u30eb\u30c9\u6e08\u307f\u30b3\u30f3\u30d5\u30a3\u30ae\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306f\u3001SDK\u306e\u30ea\u30ea\u30fc\u30b9\u9593\u3067\u5909\u66f4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002SDK\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306b\u3088\u3063\u3066\u8a2d\u5b9a\u304c\u5909\u66f4\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30ea\u30ea\u30fc\u30b9\u3054\u3068\u306b\u56fa\u5b9a\u3055\u308c\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u308b ",(0,o.kt)("inlineCode",{parentName:"p"},"v1()")," \u306e\u3088\u3046\u306a\u56fa\u5b9a\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070"),(0,o.kt)(r.X,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"custom configuration \u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u72ec\u81ea\u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3069\u306e\u3088\u3046\u306b\u69cb\u7bc9\u3055\u308c\u308b\u304b\u306f\u3001\u5404SDK\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"Configurations")," \u540d\u524d\u7a7a\u9593\u306b\u3042\u308b\u30b5\u30f3\u30d7\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306econfiguration\u304c\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306e\u30cb\u30fc\u30ba\u3092\u6e80\u305f\u3059\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3082\u3057\u3053\u308c\u3089\u306econfiguration\u306b\u4f55\u3089\u304b\u306e\u4e0d\u8db3\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u305d\u306eSDK\u306e\u30ec\u30dd\u3067GitHub issue\u3092\u958b\u3044\u3066\u3044\u305f\u3060\u304f\u304b\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"support@momentohq.com"),"\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\u3042\u306a\u305f\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u3064\u3044\u3066\u305c\u3072\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044\u3002\u305d\u3046\u3059\u308c\u3070\u3001\u30d3\u30eb\u30c9\u6e08\u307f\u306e\u30b3\u30f3\u30d5\u30a3\u30ae\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4fee\u6b63\u3057\u305f\u308a\u62e1\u5f35\u3057\u305f\u308a\u3057\u3066\u3001\u3088\u308a\u826f\u3044\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"pre-built-configurations"},"Pre-built configurations"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u3054\u8208\u5473\u3092\u304a\u6301\u3061\u306b\u306a\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u3001\u3042\u3089\u304b\u3058\u3081\u69cb\u7bc9\u3055\u308c\u305fconfiguration\u306e\u4e00\u90e8\u3067\u3059\u3002"),(0,o.kt)("h3",{id:"laptop"},"Laptop"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.Laptop"),"\u306f\u958b\u767a\u74b0\u5883\u3067\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u304c\u7de9\u3084\u304b\u3067\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u304c\u5c11\u3057\u9ad8\u3044\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(r.X,{js:"Configurations.Laptop.v1();",python:"",java:"Configurations.Laptop.v1();",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h3",{id:"browser"},"Browser"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.Browser"),"\u306f",(0,o.kt)("a",{parentName:"p",href:"./../sdks/web"},"web SDK"),"\u72ec\u81ea\u306e\u8a2d\u5b9a\u3067\u3059\u3002\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u30ec\u30a4\u30c6\u30f3\u30b7\u304c\u5927\u304d\u304f\u5909\u52d5\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306e\u8a2d\u5b9a\u304c\u7de9\u548c\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"inregion---default"},"InRegion - Default"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.Default"),"\u306f\u3001\u540c\u3058\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u30db\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u30a2\u30d7\u30ea\u304b\u3089Momento\u30b5\u30fc\u30d3\u30b9\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u3088\u3046\u306a\u3001\u307b\u3068\u3093\u3069\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u63a8\u5968\u3055\u308c\u308b\u8a2d\u5b9a\u3067\u3059\u3002Laptop \u8a2d\u5b9a\u3088\u308a\u3082\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3084\u518d\u8a66\u884c\u304c\u7a4d\u6975\u7684\u306a\u306e\u3067\u3001\u3088\u308a\u65e9\u304f\u5931\u6557\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3084\u4ed6\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u7d20\u65e9\u304f\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u4e2d\u65ad\u6642\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304cMomento\u4e0a\u3067\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u306b\u306a\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)(r.X,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h3",{id:"inregion---low-latency"},"InRegion - Low Latency"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.LowLatency"),"\u306fp99.9\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u3092\u53ef\u80fd\u306a\u9650\u308a\u4f4e\u304f\u4fdd\u3064\u3053\u3068\u3092\u512a\u5148\u3059\u308b\u8a2d\u5b9a\u3067\u3059\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"InRegion.Default"),"\u306e\u8a2d\u5b9a\u3088\u308a\u3082\u65e9\u304f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u8a31\u5bb9\u3067\u304d\u306a\u3044\u307b\u3069\u9ad8\u3044\u30ec\u30a4\u30c6\u30f3\u30b7\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u6700\u3082\u91cd\u8981\u3067\u3042\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5fdc\u7b54\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b8\u30c3\u30af\u307e\u305f\u306f\u4fe1\u983c\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3088\u308a\u8fc5\u901f\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)(r.X,{js:"Configurations.InRegion.LowLatency.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h3",{id:"lambda"},"Lambda"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.Lambda")," \u306f\u4e00\u90e8\u306e SDK \u3067\u5229\u7528\u53ef\u80fd\u306a\u8a2d\u5b9a\u3067\u3001AWS Lambda \u74b0\u5883\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002Lambda \u95a2\u6570\u306e\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u6642\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4e8b\u524d\u306b\u30a6\u30a9\u30fc\u30e0\u30a2\u30c3\u30d7\u3057\u305f\u308a\u3001Lambda \u95a2\u6570\u306e\u30a2\u30a4\u30c9\u30eb\u72b6\u614b\u304c\u9577\u304f\u7d9a\u3044\u3066\u63a5\u7d9a\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408\u306b\u30d7\u30ed\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u63a5\u7d9a\u304c\u518d\u78ba\u7acb\u3055\u308c\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0}}]);