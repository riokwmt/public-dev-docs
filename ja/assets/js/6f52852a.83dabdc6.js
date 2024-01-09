"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6937],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),o=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=k({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??c;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var b=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==o&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",N.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>o});var n=a(4866),l=a(5162),r=a(614),i=a(7294);const o=e=>{let{js:t,python:a,java:o,go:s,csharp:p,php:u,rust:c,ruby:m,elixir:d,swift:k,cli:h}=e;return t||a||o||s||p||u||c||m||d||k||h?i.createElement(n.Z,null,t&&i.createElement(l.Z,{value:"js",label:"JavaScript"},i.createElement(r.Z,{language:"js"},t)),a&&i.createElement(l.Z,{value:"python",label:"Python"},i.createElement(r.Z,{language:"python"},a)),o&&i.createElement(l.Z,{value:"java",label:"Java"},i.createElement(r.Z,{language:"java"},o)),s&&i.createElement(l.Z,{value:"go",label:"Go"},i.createElement(r.Z,{language:"go"},s)),p&&i.createElement(l.Z,{value:"csharp",label:"C#"},i.createElement(r.Z,{language:"csharp"},p)),u&&i.createElement(l.Z,{value:"php",label:"PHP"},i.createElement(r.Z,{language:"php"},u)),c&&i.createElement(l.Z,{value:"rust",label:"Rust"},i.createElement(r.Z,{language:"rust"},c)),m&&i.createElement(l.Z,{value:"ruby",label:"Ruby"},i.createElement(r.Z,{language:"ruby"},m)),d&&i.createElement(l.Z,{value:"elixir",label:"Elixir"},i.createElement(r.Z,{language:"elixir"},d)),k&&i.createElement(l.Z,{value:"swift",label:"Swift"},i.createElement(r.Z,{language:"swift"},k)),h&&i.createElement(l.Z,{value:"cli",label:"CLI"},i.createElement(r.Z,{language:"cli"},h))):null}},1003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=(a(3404),a(9720));const i={sidebar_position:7,title:"Auth API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"Auth",description:"Auth API \u306e\u547c\u3073\u51fa\u3057\u3092\u5b66\u3073\u3001\u305d\u308c\u3089\u3092 Momento \u30b5\u30fc\u30d3\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u307e\u3057\u3087\u3046\u3002"},o="Auth API reference",s={unversionedId:"topics/develop/api-reference/auth",id:"topics/develop/api-reference/auth",title:"Auth API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Auth API \u306e\u547c\u3073\u51fa\u3057\u3092\u5b66\u3073\u3001\u305d\u308c\u3089\u3092 Momento \u30b5\u30fc\u30d3\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/auth.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/auth",permalink:"/ja/topics/develop/api-reference/auth",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/auth.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Auth API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"Auth",description:"Auth API \u306e\u547c\u3073\u51fa\u3057\u3092\u5b66\u3073\u3001\u305d\u308c\u3089\u3092 Momento \u30b5\u30fc\u30d3\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u307e\u3057\u3087\u3046\u3002"},sidebar:"topicsSidebar",previous:{title:"Webhooks",permalink:"/ja/topics/develop/api-reference/webhooks"},next:{title:"HTTP API",permalink:"/ja/topics/develop/api-reference/http-api"}},p={},u=[{value:"GenerateAuthToken API",id:"generateauthtoken-api",level:2},{value:"RefreshAuthToken API",id:"refreshauthtoken-api",level:2},{value:"TokenScope objects",id:"tokenscope-objects",level:2},{value:"Permission objects",id:"permission-objects",level:2},{value:"CachePermission",id:"cachepermission",level:3},{value:"TopicPermission",id:"topicpermission",level:3},{value:"TopicScope examples",id:"topicscope-examples",level:4},{value:"FAQ",id:"faq",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"auth-api-reference"},"Auth API reference"),(0,l.kt)("p",null,"auth API\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"/ja/topics/develop/authentication/"},"Momento auth tokens")," \u3068\u3057\u3066\u77e5\u3089\u308c\u308b Momento \u30b5\u30fc\u30d3\u30b9\u306eauth\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u7ba1\u7406\u3057\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u306f\u30011\u3064\u4ee5\u4e0a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3084\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u306b\u30011\u3064\u307e\u305f\u306f\u8907\u6570\u306e\u6a29\u9650\u3092\u6301\u3064\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("img",{src:"/img/momento-auth-tokens.png",width:"60%"}),(0,l.kt)("h2",{id:"generateauthtoken-api"},"GenerateAuthToken API"),(0,l.kt)("p",null,"\u6a29\u9650\u3068\u6709\u52b9\u671f\u9650\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u65b0\u3057\u3044 Momento auth\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tokenscope"},"TokenScope")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u306b\u4ed8\u4e0e\u3059\u308b\u6a29\u9650\u3067\u3059\u3002\u4e8b\u524d\u306b\u7d44\u307f\u7acb\u3066\u3089\u308c\u305fTokenScope\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304cSDK\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,l.kt)("td",{parentName:"tr",align:null},"Number ","|"," ExpiresIn object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30c8\u30fc\u30af\u30f3\u304c\u5931\u52b9\u3059\u308b\u307e\u3067\u306e\u79d2\u6570\u3001\u307e\u305f\u306fExpiresIn.never()\u3001ExpiresIn.minutes()\u3001ExpiresIn.hours()\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u671f\u9593\u3092\u8868\u3059ExpiresIn\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"authToken"),": string - \u65b0\u3057\u3044auth\u30c8\u30fc\u30af\u30f3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"refreshToken"),": string - \u6709\u52b9\u671f\u9650\u524d\u306b\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001",(0,l.kt)("a",{parentName:"li",href:"#refreshauthtoken"},"RefreshAuthToken API"),"\u3068\u5171\u306b\u4f7f\u7528\u3067\u304d\u308b\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - \u30c8\u30fc\u30af\u30f3\u304c\u5931\u52b9\u3059\u308b\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,l.kt)("a",{parentName:"p",href:"/ja/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Momento \u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento console"),"\u3092\u4f7f\u7528\u3057\u3066\u306e\u307f\u751f\u6210\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h2",{id:"refreshauthtoken-api"},"RefreshAuthToken API"),(0,l.kt)("p",null,"\u65e2\u5b58\u306e\u6709\u52b9\u306a Momento auth\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u65b0\u3057\u3044auth\u30c8\u30fc\u30af\u30f3\u306f\u3001\u5143\u306eauth\u30c8\u30fc\u30af\u30f3\u3068\u540c\u3058\u6a29\u9650\u3068\u6709\u52b9\u671f\u9593\u3092\u6301\u3061\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73fe\u5728\u306eauth\u30c8\u30fc\u30af\u30f3\u306e\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3067\u3001\u3053\u308c\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"GenerateAuthToken")," \u306e\u5143\u306e\u547c\u3073\u51fa\u3057\u304b\u3089\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"authToken"),": string - \u65b0\u3057\u3044auth\u30c8\u30fc\u30af\u30f3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"refreshToken"),": string - \u6709\u52b9\u671f\u9650\u524d\u306b\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001",(0,l.kt)("a",{parentName:"li",href:"#refreshauthtoken"},"RefreshAuthToken API")," \u3068\u5171\u306b\u4f7f\u7528\u3067\u304d\u308b\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - \u30c8\u30fc\u30af\u30f3\u304c\u5931\u52b9\u3059\u308b\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,l.kt)("a",{parentName:"p",href:"/ja/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h2",{id:"tokenscope-objects"},"TokenScope objects"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permissions"),(0,l.kt)("td",{parentName:"tr",align:null},"List <",(0,l.kt)("a",{parentName:"td",href:"#permission-objects"},"Permission"),">"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u306b\u4ed8\u4e0e\u3059\u308b\u6a29\u9650\u3067\u3059\u3002")))),(0,l.kt)("p",null,"TokenScope \u306f ",(0,l.kt)("a",{parentName:"p",href:"#permission-objects"},"permission objects"),"\u306e\u30ea\u30b9\u30c8\u3067\u3059\u3002\u30ea\u30b9\u30c8\u306b\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"#cachepermission"},"CachePermission"),"\u578b\u307e\u305f\u306f ",(0,l.kt)("a",{parentName:"p",href:"#topicpermission"},"TopicPermission"),"\u578b\u306e\u6a29\u9650\u304c\u542b\u307e\u308c\u3001",(0,l.kt)("a",{parentName:"p",href:"/ja/topics/manage/limits"},"\u6700\u5927\u3067\u5341"),"\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6a29\u9650\u306fMomento \u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3API\uff08\u4f8b\u3048\u3070 get\u3001set \u306a\u3069\uff09\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u307f\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002\u8907\u6570\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067auth\u30c8\u30fc\u30af\u30f3\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u3069\u306e\u4e00\u81f4\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3067\u3082\u30a2\u30af\u30bb\u30b9\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6b21\u306e\u4e8c\u3064\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u5358\u4e00\u306e\u30c8\u30fc\u30af\u30f3\u304c\u4f5c\u6210\u3055\u308c\u305f\u5834\u5408\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5168\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3066\u8aad\u307f\u66f8\u304d\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,l.kt)("li",{parentName:"ol"},"\u30ad\u30e3\u30c3\u30b7\u30e5 ",(0,l.kt)("inlineCode",{parentName:"li"},"foo")," \u3078\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,l.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001\u6700\u521d\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u306b\u5bfe\u3057\u3066\u30c7\u30fc\u30bf\u64cd\u4f5cAPI\uff08\u4f8b\u3048\u3070 ",(0,l.kt)("inlineCode",{parentName:"p"},"set"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"DictionarySetFields"),"\u306a\u3069\uff09\u306e\u4f7f\u7528\u3092\u8a31\u53ef\u3059\u308b\u30c8\u30fc\u30af\u30f3\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"permission-objects"},"Permission objects"),(0,l.kt)("p",null,"\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u307e\u305f\u306f\u30c8\u30d4\u30c3\u30af\u60c5\u5831\u306b\u95a2\u3059\u308b\u5177\u4f53\u7684\u306a\u30ed\u30fc\u30eb\u3092\u5b9a\u7fa9\u3057\u3001\u305d\u306e\u5f8c ",(0,l.kt)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," \u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"cachepermission"},"CachePermission"),(0,l.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3059\u308b\u6a29\u9650\u3092\u5b9a\u7fa9\u3059\u308b ",(0,l.kt)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e00\u90e8\u5206\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},"ReadOnly ","|"," ReadWrite"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u308a\u4ed8\u4e0e\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9\u306e\u7a2e\u985e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AllCaches")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"CacheName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CacheName")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084 ",(0,l.kt)("inlineCode",{parentName:"td"},"AllCaches")," \u7d44\u307f\u8fbc\u307f\u5024\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,l.kt)("p",null,"\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"CacheRole.ReadOnly")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001CacheSelector \u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u8aad\u53d6\u308aAPI\uff08\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"DictionaryGetField"),"\u306a\u3069\uff09\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"CacheRole.ReadWrite")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001CacheSelector \u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u3059\u3079\u3066\u306e\u8aad\u307f\u66f8\u304d\u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3API\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30ed\u30fc\u30eb\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066\u306f\u3001\u5024\u306f\u7d44\u307f\u8fbc\u307f\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"AllCaches")," \u307e\u305f\u306f\u3053\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u304c\u5bfe\u8c61\u3068\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u542b\u3080\u6587\u5b57\u5217\u5024\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"topicpermission"},"TopicPermission"),(0,l.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u306e\u6a29\u9650\u3092\u5b9a\u7fa9\u3059\u308b ",(0,l.kt)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e00\u90e8\u5206\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},"SubscribeOnly ","|"," PublishSubscribe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u308a\u4ed8\u4e0e\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9\u306e\u7a2e\u985e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AllCaches")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"CacheName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CacheName")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306b\u5236\u9650\u3057\u305f\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"AllCaches")," \u7d44\u307f\u8fbc\u307f\u5024\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AllTopics")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"TopicName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TopicName")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u305f\u30c8\u30d4\u30c3\u30af\u540d\u306b\u5236\u9650\u3057\u305f\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"AllTopics")," \u7d44\u307f\u8fbc\u307f\u5024\u3092\u4f7f\u7528\u3057\u3066\u4e0a\u8a18\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u3059\u3079\u3066\u306e\u30c8\u30d4\u30c3\u30af\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,l.kt)("p",null,"\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"TopicRole.PublishSubscribe")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"TopicRole.SubscribeOnly")," \u306e2\u3064\u306e\u7ba1\u7406\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30ed\u30fc\u30eb\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002SubscribeOnly \u30ed\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u306e\u307f\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u4e00\u65b9\u3001PublishSubscribe \u30ed\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066\u306f\u3001\u305d\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u7a7a\u9593\u5185\u306e\u30c8\u30d4\u30c3\u30af\u306e\u307f\u304c\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u7d44\u307f\u8fbc\u307f\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"AllCaches")," \u5024\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u6307\u5b9a\u3059\u308b\u6587\u5b57\u5217\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30c8\u30d4\u30c3\u30af\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u308c\u306f\u7d44\u307f\u8fbc\u307f\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"AllTopics")," \u5024\u306b\u8a2d\u5b9a\u3067\u304d\u3001\u3053\u308c\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u3059\u3079\u3066\u306e\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u7279\u5b9a\u306e\u30c8\u30d4\u30c3\u30af\u540d\u3092\u6301\u3064\u6587\u5b57\u5217\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"topicscope-examples"},"TopicScope examples"),(0,l.kt)("p",null,"\u3053\u308c\u306f\u3001CachePermissions \u306e\u307f\u3067 TokenScope \u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const CachePermissions = {\n    permissions: [\n        {\n            role: CacheRole.ReadWrite, // Managed role\n            cache: "MyCache" // grants access to a specific cache\n        },\n        {\n            role: CacheRole.ReadOnly, // Managed role\n            cache: AllCaches // Built-in value for access to all caches in the account.\n        },\n    ],\n};\n')),(0,l.kt)("p",null,"\u3053\u308c\u306f\u3001TopicPermissions \u306e\u307f\u3067 TokenScope \u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const TopicsPermissions = {\n    permissions: [\n      {\n        role: TopicRole.PublishSubscribe, // Managed role\n        cache: 'the-great-wall', // grants access to a specific cache\n        topic: 'highlights', // grants access to a specific topic\n      },\n      {\n        role: TopicRole.SubscribeOnly, // Built-in role\n        cache: AllCaches, // This is a built-in value for access to all caches in the account\n        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).\n      },\n    ],\n};\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u3053\u3053\u3067\u7b54\u3048\u3089\u308c\u3066\u3044\u306a\u3044\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/2c24SK6W"},"\u79c1\u305f\u3061\u306eDiscord\u30b5\u30fc\u30d0\u30fc"),"\u306b\u53c2\u52a0\u3057\u3001\u30b5\u30dd\u30fc\u30c8\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u5c02\u9580\u5bb6\u306b\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u307e\u305f\u306f\u30c8\u30d4\u30c3\u30af\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f"),(0,l.kt)("p",null,"\u3044\u3044\u3048\u3002\u5404\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306f\u3001\u4e0a\u8a18\u306b\u5217\u6319\u3057\u305f\u7ba1\u7406\u3055\u308c\u305f\u30ed\u30fc\u30eb\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u3053\u308c\u3089\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001Momento \u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3 API \u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3057\u307e\u3059\u304b\uff1f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#generateauthtoken"},"GenerateAuthToken")," API \u3067\u751f\u6210\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306f\u3001Momento \u306e\u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3API\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3060\u3051\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002Momento \u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3API\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u305f\u3081\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento console")," \u3092\u4f7f\u7528\u3057\u3066\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u66f8\u304d\u8fbc\u307f\u5c02\u7528\u307e\u305f\u306f\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u5c02\u7528\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u6301\u3064\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f"),(0,l.kt)("p",null,"We do not support 'write only' or 'publish only' permissions. If this is something you need, please ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"contact us")," and let's discuss your needs."),(0,l.kt)("p",null,'"\u66f8\u304d\u8fbc\u307f\u5c02\u7528"\u3084"\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u5c02\u7528"\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u308c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001',(0,l.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044"),"\u3001\u3042\u306a\u305f\u306e\u30cb\u30fc\u30ba\u306b\u3064\u3044\u3066\u8a71\u3057\u5408\u3044\u307e\u3057\u3087\u3046\u3002")))}d.isMDXComponent=!0}}]);