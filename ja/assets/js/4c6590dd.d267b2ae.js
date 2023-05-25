"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),s=n(6550),i=n(1980),c=n(7392),u=n(12);function m(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,c]=h({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=i??m;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var g=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function C(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(m(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,r.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b)},o.createElement(C,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},7908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);const s={sidebar_position:3,sidebar_label:"\u306f\u3058\u3081\u3066\u307f\u308b",sidebar_class_name:"sidebar-item-getting-started",title:"\u306f\u3058\u3081\u3066\u307f\u308b",pagination_prev:null,pagination_next:null,description:"SDK \u3092\u9078\u3093\u3067\u3001Momento Cache \u3068 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"},i="Momento Cache \u3068 Momento Topics \u3092\u306f\u3058\u3081\u3066\u307f\u308b",c={unversionedId:"getting-started",id:"getting-started",title:"\u306f\u3058\u3081\u3066\u307f\u308b",description:"SDK \u3092\u9078\u3093\u3067\u3001Momento Cache \u3068 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/ja/getting-started",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u306f\u3058\u3081\u3066\u307f\u308b",sidebar_class_name:"sidebar-item-getting-started",title:"\u306f\u3058\u3081\u3066\u307f\u308b",pagination_prev:null,pagination_next:null,description:"SDK \u3092\u9078\u3093\u3067\u3001Momento Cache \u3068 Momento Topics \u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"},sidebar:"tutorialSidebar"},u={},m=[{value:"\u30b9\u30c6\u30c3\u30d7 1: Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-1-momento-\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 2: Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-2-momento-\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 3: \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-3-\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3059\u308b",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 4: SDK \u3092\u5165\u308c\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b",id:"\u30b9\u30c6\u30c3\u30d7-4-sdk-\u3092\u5165\u308c\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b",level:2},{value:"CLI \u3068 SDK \u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u8a66\u3057\u3066\u307f\u308b",id:"cli-\u3068-sdk-\u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u8a66\u3057\u3066\u307f\u308b",level:2},{value:"Momento CLI\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"momento-cli\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Momento SDK \u4e00\u89a7",id:"momento-sdk-\u4e00\u89a7",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:m};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-cache-\u3068-momento-topics-\u3092\u306f\u3058\u3081\u3066\u307f\u308b"},"Momento Cache \u3068 Momento Topics \u3092\u306f\u3058\u3081\u3066\u307f\u308b"),(0,o.kt)("p",null,"\u3082\u3057 Momento Cache \u3092 SDK \u304b\u3089\u4f7f\u3063\u3066\u307f\u308b\u65b9\u6cd5\u3092\u304a\u63a2\u3057\u3067\u3057\u305f\u3089\u3001\u3053\u3053\u306f\u3042\u306a\u305f\u306b\u3046\u3063\u3066\u3064\u3051\u306e\u5834\u6240\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u3082\u3057\u4f55\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u306b Momento Cache \u306e\u4f53\u9a13\u3092\u624b\u65e9\u304f\u3057\u3066\u307f\u305f\u3044\u5834\u5408\u306b\u306f\u3001\u3053\u3061\u3089\u304b\u3089",(0,o.kt)("a",{parentName:"p",href:"#cli-%E3%81%A8-sdk-%E3%82%92%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%A7%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B"},"\u30d6\u30e9\u30a6\u30b6\u5185\u3067"),"\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-1-momento-\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 1: Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u884c\u304d"),"\u3001\u624b\u9806\u306b\u5f93\u3063\u3066\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001Google \u30a2\u30ab\u30a6\u30f3\u30c8\u3001\u307e\u305f\u306f GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5176).Z,width:"700",height:"337"})),(0,o.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-2-momento-\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 2: Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("p",null,"\u30b3\u30f3\u30bd\u30fc\u30eb\u4e0a\u3067\u3001\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304d\u30c8\u30fc\u30af\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image of console menu",src:n(4232).Z,width:"320",height:"240"})),(0,o.kt)("p",null,'Token \u30da\u30fc\u30b8\u4e0a\u3067\u30011. \u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u9078\u629e\u3057\u30012. \u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u304b\u3089\u5229\u7528\u53ef\u80fd\u306a\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u3073\u30013. \u30c8\u30fc\u30af\u30f3\u306e\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u3057\u3066 4. "\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3059\u308b"\n\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8500).Z,width:"520",height:"377"})),(0,o.kt)("p",null,"\u4e0b\u306e\u65b9\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3059\u308b\u3068\u3001\u7070\u8272\u306e\u7bb1\u306e\u4e2d\u306b\u30c8\u30fc\u30af\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u306f\u30c8\u30fc\u30af\u30f3\u306b\u307c\u304b\u3057\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u672c\u6765\u306f\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b3\u30d4\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30c8\u30fc\u30af\u30f3\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(987).Z,width:"600",height:"334"})),(0,o.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-3-\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 3: \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3059\u308b"),(0,o.kt)("p",null,"Momento \u306e\u8a8d\u8a3c\u306b\u4f7f\u3046\u305f\u3081\u306b\u3001\u3053\u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3067\u304d\u308b\u5834\u6240\u304c\u3044\u3064\u304f\u304b\u3042\u308a\u307e\u3059\u3002\u4eca\u56de\u306e\u5358\u7d14\u306a\u4f8b\u3067\u306f\u3001\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\u304c\u3001AWS Secrets Manager \u3084 GCP\nSecret Manager \u306e\u69d8\u306a\u3068\u3053\u308d\u306b\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30b9\u30c6\u30c3\u30d7-4-sdk-\u3092\u5165\u308c\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b"},"\u30b9\u30c6\u30c3\u30d7 4: SDK \u3092\u5165\u308c\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Momento SDK \u3068 dotenv \u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\nnpm install dotenv\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".env \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b")),(0,o.kt)("p",null,"Momento \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL (\u79d2) \u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001 .env \u30d5\u30a1\u30a4\u30eb\u3092\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u4e0a\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\nexport MOMENTO_TTL_SECONDS=300\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092 test.js \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Declare the Momento SDK library\nconst {\n    CacheGet, CacheSet, Configurations, ListCaches, CreateCache,\n    CacheClient, CredentialProvider\n} = require('@gomomento/sdk');\n\n// Declate the dotenv library\nconst dotenv = require('dotenv');\n\n// Defines name of cache to use.\nconst CACHE_NAME = 'demo-cache';\n\n// Run the config function to bring in the .env file\ndotenv.config();\n\n// Creates the Momento cache client object\nasync function createCacheClient() {\n    return new CacheClient({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n        }),\n        defaultTtlSeconds: 600,\n    });\n}\n\n// Create a new cache\nasync function createCache(client) {\n    const createCacheResponse = await client.createCache(CACHE_NAME);\n    if (createCacheResponse instanceof CreateCache.Success) {\n        console.log('Cache created.');\n    } else if (createCacheResponse instanceof CreateCache.AlreadyExists) {\n        console.log('Cache already exists');\n    } else if (createCacheResponse instanceof CreateCache.Error) {\n        throw createCacheResponse.innerException();\n    }\n}\n\n// List all caches in Momento for this account.\nasync function listCaches(client) {\n    const listResponse = await client.listCaches(client);\n    if (listResponse instanceof ListCaches.Error) {\n        console.log('Error listing caches: ', listResponse.message());\n    } else if (listResponse instanceof ListCaches.Success) {\n        console.log('Found caches:');\n        listResponse.getCaches().forEach(cacheInfo => {\n            console.log(' -', cacheInfo.getName());\n        });\n    } else {\n        throw new Error('Unrecognized response: ', listResponse.toString());\n    }\n}\n\n// A function to write to the cache\nasync function writeToCache(client, cacheName, key, data) {\n    const setResponse = await client.set(cacheName, key, data);\n    if (setResponse instanceof CacheSet.Success) {\n        console.log('Key stored successfully!');\n    } else if (setResponse instanceof CacheSet.Error) {\n        console.log('Error setting key: ', setResponse.toString());\n    } else {\n        console.log('Some other error: ', setResponse.toString());\n    }\n}\n\n// A function to read scalar items from the cache\nasync function readFromCache(client, cacheName, key) {\n    const readResponse = await client.get(cacheName, key);\n    if (readResponse instanceof CacheGet.Hit) {\n        console.log('Cache hit: ', readResponse.valueString());\n    } else if (readResponse instanceof CacheGet.Miss) {\n        console.log('Cache miss');\n    } else if (readResponse instanceof CacheGet.Error) {\n        console.log('Error: ', readResponse.message());\n    }\n}\n\n// A simple function that calls all functions in order. You probably want more error handling.\nasync function run() {\n    const cacheClient = await createCacheClient();\n\n    await createCache(cacheClient);\n\n    await listCaches(cacheClient);\n\n    await writeToCache(cacheClient, CACHE_NAME, \"code\", \"12345\");\n    await readFromCache(cacheClient, CACHE_NAME, \"code\");\n}\n\nrun();\n")),(0,o.kt)("p",null,"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"node test.js\n")),(0,o.kt)("p",null,"\u51fa\u529b\u306f\u4ee5\u4e0b\u306e\u69d8\u306a\u3082\u306e\u306b\u306a\u308a\u307e\u3059:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient\n[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo-cache\nCache created.\nFound caches:\n - demo-cache\nKey stored successfully!\nCache hit:  12345\n")))),(0,o.kt)("h2",{id:"cli-\u3068-sdk-\u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u8a66\u3057\u3066\u307f\u308b"},"CLI \u3068 SDK \u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u8a66\u3057\u3066\u307f\u308b"),(0,o.kt)("p",null,"Momento Cache \u3092\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u4eca\u3059\u3050\u306b\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\uff01"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Momento Cache \u306f\u30d5\u30eb\u30de\u30cd\u30fc\u30b8\u30c9\u3067\u3001API \u30d9\u30fc\u30b9\u306e\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u7686\u3055\u3093\u306e (AWS\u3001GCP\u3001Azure\u3001\u7b49) \u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u306f\u4f55\u3082\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u305b\u3093\u3002")),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u307e\u305a\u3001\u7121\u6599\u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3001CLI \u306b\u8a2d\u5b9a\u3057\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," \u30b3\u30de\u30f3\u30c9\u3092\u3042\u306a\u305f\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3057\u3066\u307f\u307e\u3059\u3002\u4ee5\u4e0b\u3092\u7acb\u3061\u4e0a\u3052\u3066\u4e0b\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://play.instruqt.com/embed/momento/tracks/sandbox-container-1challenge?token=em_54kTDywfWaG95-rC&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser"},(0,o.kt)("img",{alt:"image",src:n(6606).Z,width:"1818",height:"386"}))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u3063\u3066\u3001Node.js SDK \u3092\u4f7f\u3063\u305f JavaScript \u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u5b9f\u884c\u3057\u3066\u307f\u307e\u3059\u3002\u4ee5\u4e0b\u3092\u7acb\u3061\u4e0a\u3052\u3066\u4e0b\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://play.instruqt.com/embed/momento/tracks/momento-nodejs-demo?token=em_f8PM8Aob-mHIfOTT&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser"},(0,o.kt)("img",{alt:"image",src:n(3116).Z,width:"1810",height:"402"}))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Momento Topics \u3082\u8a66\u3057\u3066\u307f\u305f\u3044\u3067\u3059\u304b\uff1f\u3053\u306e\u30c7\u30e2\u3067\u306f\u3001\u4e00\u65b9\u306e\u753b\u9762\u3067\u30c8\u30d4\u30c3\u30af\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u3001\u3082\u3046\u4e00\u65b9\u306e\u753b\u9762\u3067\u306f\u305d\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u3092\u7acb\u3061\u4e0a\u3052\u3066\u4e0b\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser"},(0,o.kt)("img",{alt:"image",src:n(9775).Z,width:"924",height:"211"}))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"momento-cli\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Momento CLI\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("p",null,"CLI\u3092\u30ed\u30fc\u30ab\u30eb(Linux, Windows, Mac)\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-cli"},"\u3053\u3061\u3089\u306e\u30ea\u30dd"),"\n\u3088\u308a\u6700\u65b0\u306eCLI\u3084\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u307e\u305f\u4f7f\u7528\u65b9\u6cd5\u306a\u3069\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"momento-sdk-\u4e00\u89a7"},"Momento SDK \u4e00\u89a7"),(0,o.kt)("p",null,"\u73fe\u5728\u3001\u4ee5\u4e0b\u306e\u8a00\u8a9e\u306e SDK \u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u5404\u30ec\u30dd\u30b8\u30c8\u30ea\u3067\u3001\u8a73\u7d30\u306a\u624b\u9806\u3068\u5229\u7528\u4f8b\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-java"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-nodejs"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-python"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet"},".NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-rust"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-ruby"},"Ruby"))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Momento \u306f\u79c1\u306e\u30af\u30e9\u30a6\u30c9\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4f55\u304b\u3057\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u304b\uff1f"),"\u3044\u3044\u3048\u3001\u3057\u307e\u305b\u3093\u3002Momento Cache \u306f\u30d5\u30eb\u30de\u30cd\u30fc\u30b8\u30c9\u3067\u3001API \u30d9\u30fc\u30b9\u306e\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30b5\u30fc\u30d3\u30b9\u3067\u3042\u308a\u3001\u7686\u3055\u3093\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u304b\u3089\u547c\u3073\u51fa\u3057\u3066\u4f7f\u3044\u307e\u3059\u3002"))}d.isMDXComponent=!0},6606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cli_lab-183a45d867977b312cd1812f4ae67216.png"},4232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/auth-token-877173c41a2a1fbce91948047a73d82b.gif"},5176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},987:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generated-token-2245903b8ecca741be2ca22c1b64cee1.jpg"},8500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-provider-region-28122ca1e4a57cacb8e22e00db3bd692.png"},3116:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk_lab-f16d736f9d8ea8b6023c5139d2f5980d.png"},9775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topics_lab-9e0c6a54501afb0903dfba91ed2def1f.png"}}]);