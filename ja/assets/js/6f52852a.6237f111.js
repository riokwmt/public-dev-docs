"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6884],{9365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(6540),l=t(53);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:t},a)}},1470:(e,a,t)=>{t.d(a,{A:()=>v});var n=t(8168),l=t(6540),r=t(53),i=t(3104),o=t(6347),s=t(7485),p=t(1682),u=t(9466);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function g(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=g(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[s,p]=d({queryString:t,groupId:n}),[c,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Dv)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),h=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),y(e)}),[p,y,r]),tabValues:r}}var h=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),g=e=>{const a=e.currentTarget,t=u.indexOf(a),n=p[t].value;n!==o&&(c(a),s(n))},m=e=>{let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>u.push(e),onKeyDown:m,onClick:g},i,{className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===a})}),t??a)})))}function f(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function A(e){const a=y(e);return l.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},l.createElement(N,(0,n.A)({},e,a)),l.createElement(f,(0,n.A)({},e,a)))}function v(e){const a=(0,h.A)();return l.createElement(A,(0,n.A)({key:String(a)},e))}},1441:(e,a,t)=>{t(6540)},5347:(e,a,t)=>{t.d(a,{r:()=>o});var n=t(1470),l=t(9365),r=t(2355),i=t(6540);const o=e=>{let{js:a,python:t,java:o,kotlin:s,go:p,csharp:u,php:c,rust:g,ruby:m,elixir:d,swift:y,dart:h,cli:b}=e;return a||t||o||s||p||u||c||g||m||d||y||h||b?i.createElement(n.A,null,a&&i.createElement(l.A,{value:"js",label:"JavaScript"},i.createElement(r.A,{language:"js"},a)),t&&i.createElement(l.A,{value:"python",label:"Python"},i.createElement(r.A,{language:"python"},t)),o&&i.createElement(l.A,{value:"java",label:"Java"},i.createElement(r.A,{language:"java"},o)),s&&i.createElement(l.A,{value:"kotlin",label:"Kotlin"},i.createElement(r.A,{language:"kotlin"},s)),p&&i.createElement(l.A,{value:"go",label:"Go"},i.createElement(r.A,{language:"go"},p)),u&&i.createElement(l.A,{value:"csharp",label:"C#"},i.createElement(r.A,{language:"csharp"},u)),c&&i.createElement(l.A,{value:"php",label:"PHP"},i.createElement(r.A,{language:"php"},c)),g&&i.createElement(l.A,{value:"rust",label:"Rust"},i.createElement(r.A,{language:"rust"},g)),m&&i.createElement(l.A,{value:"ruby",label:"Ruby"},i.createElement(r.A,{language:"ruby"},m)),d&&i.createElement(l.A,{value:"elixir",label:"Elixir"},i.createElement(r.A,{language:"elixir"},d)),y&&i.createElement(l.A,{value:"swift",label:"Swift"},i.createElement(r.A,{language:"swift"},y)),h&&i.createElement(l.A,{value:"dart",label:"Dart"},i.createElement(r.A,{language:"dart"},h)),b&&i.createElement(l.A,{value:"cli",label:"CLI"},i.createElement(r.A,{language:"cli"},b))):null}},9560:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(8168),l=(t(6540),t(5680)),r=(t(1441),t(5347));const i={sidebar_position:7,title:"Auth API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"Auth",description:"Auth API \u306e\u547c\u3073\u51fa\u3057\u3092\u5b66\u3073\u3001\u305d\u308c\u3089\u3092 Momento \u30b5\u30fc\u30d3\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u307e\u3057\u3087\u3046\u3002"},o="Auth API reference",s={unversionedId:"topics/develop/api-reference/auth",id:"topics/develop/api-reference/auth",title:"Auth API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Auth API \u306e\u547c\u3073\u51fa\u3057\u3092\u5b66\u3073\u3001\u305d\u308c\u3089\u3092 Momento \u30b5\u30fc\u30d3\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/auth.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/auth",permalink:"/ja/topics/develop/api-reference/auth",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/auth.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Auth API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"Auth",description:"Auth API \u306e\u547c\u3073\u51fa\u3057\u3092\u5b66\u3073\u3001\u305d\u308c\u3089\u3092 Momento \u30b5\u30fc\u30d3\u30b9\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u7528\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u307e\u3057\u3087\u3046\u3002"},sidebar:"topicsSidebar",previous:{title:"Webhooks",permalink:"/ja/topics/develop/api-reference/webhooks"},next:{title:"HTTP API",permalink:"/ja/topics/develop/api-reference/http-api"}},p={},u=[{value:"GenerateAuthToken API",id:"generateauthtoken-api",level:2},{value:"RefreshAuthToken API",id:"refreshauthtoken-api",level:2},{value:"TokenScope objects",id:"tokenscope-objects",level:2},{value:"Permission objects",id:"permission-objects",level:2},{value:"CachePermission",id:"cachepermission",level:3},{value:"TopicPermission",id:"topicpermission",level:3},{value:"TopicScope examples",id:"topicscope-examples",level:4},{value:"FAQ",id:"faq",level:2}],c={toc:u},g="wrapper";function m(e){let{components:a,...t}=e;return(0,l.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"auth-api-reference"},"Auth API reference"),(0,l.yg)("p",null,"auth API\u306f\u3001",(0,l.yg)("a",{parentName:"p",href:"/ja/topics/develop/authentication/"},"Momento auth tokens")," \u3068\u3057\u3066\u77e5\u3089\u308c\u308b Momento \u30b5\u30fc\u30d3\u30b9\u306eauth\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u7ba1\u7406\u3057\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u306f\u30011\u3064\u4ee5\u4e0a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3084\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u306b\u30011\u3064\u307e\u305f\u306f\u8907\u6570\u306e\u6a29\u9650\u3092\u6301\u3064\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("img",{src:"/img/momento-auth-tokens.png",width:"60%"}),(0,l.yg)("h2",{id:"generateauthtoken-api"},"GenerateAuthToken API"),(0,l.yg)("p",null,"\u6a29\u9650\u3068\u6709\u52b9\u671f\u9650\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u65b0\u3057\u3044 Momento auth\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"scope"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#tokenscope"},"TokenScope")),(0,l.yg)("td",{parentName:"tr",align:null},"\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u306b\u4ed8\u4e0e\u3059\u308b\u6a29\u9650\u3067\u3059\u3002\u4e8b\u524d\u306b\u7d44\u307f\u7acb\u3066\u3089\u308c\u305fTokenScope\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304cSDK\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"expiresIn"),(0,l.yg)("td",{parentName:"tr",align:null},"Number ","|"," ExpiresIn object"),(0,l.yg)("td",{parentName:"tr",align:null},"\u30c8\u30fc\u30af\u30f3\u304c\u5931\u52b9\u3059\u308b\u307e\u3067\u306e\u79d2\u6570\u3001\u307e\u305f\u306fExpiresIn.never()\u3001ExpiresIn.minutes()\u3001ExpiresIn.hours()\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u671f\u9593\u3092\u8868\u3059ExpiresIn\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Success",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"authToken"),": string - \u65b0\u3057\u3044auth\u30c8\u30fc\u30af\u30f3"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"refreshToken"),": string - \u6709\u52b9\u671f\u9650\u524d\u306b\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001",(0,l.yg)("a",{parentName:"li",href:"#refreshauthtoken"},"RefreshAuthToken API"),"\u3068\u5171\u306b\u4f7f\u7528\u3067\u304d\u308b\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - \u30c8\u30fc\u30af\u30f3\u304c\u5931\u52b9\u3059\u308b\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"))),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,l.yg)("a",{parentName:"p",href:"/ja/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Momento \u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001",(0,l.yg)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento console"),"\u3092\u4f7f\u7528\u3057\u3066\u306e\u307f\u751f\u6210\u3067\u304d\u307e\u3059\u3002")),(0,l.yg)(r.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h2",{id:"refreshauthtoken-api"},"RefreshAuthToken API"),(0,l.yg)("p",null,"\u65e2\u5b58\u306e\u6709\u52b9\u306a Momento auth\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u65b0\u3057\u3044auth\u30c8\u30fc\u30af\u30f3\u306f\u3001\u5143\u306eauth\u30c8\u30fc\u30af\u30f3\u3068\u540c\u3058\u6a29\u9650\u3068\u6709\u52b9\u671f\u9593\u3092\u6301\u3061\u307e\u3059\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"refreshToken"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u73fe\u5728\u306eauth\u30c8\u30fc\u30af\u30f3\u306e\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3067\u3001\u3053\u308c\u306f ",(0,l.yg)("inlineCode",{parentName:"td"},"GenerateAuthToken")," \u306e\u5143\u306e\u547c\u3073\u51fa\u3057\u304b\u3089\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Success",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"authToken"),": string - \u65b0\u3057\u3044auth\u30c8\u30fc\u30af\u30f3"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"refreshToken"),": string - \u6709\u52b9\u671f\u9650\u524d\u306b\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001",(0,l.yg)("a",{parentName:"li",href:"#refreshauthtoken"},"RefreshAuthToken API")," \u3068\u5171\u306b\u4f7f\u7528\u3067\u304d\u308b\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - \u30c8\u30fc\u30af\u30f3\u304c\u5931\u52b9\u3059\u308b\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"))),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,l.yg)("a",{parentName:"p",href:"/ja/topics/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,l.yg)(r.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h2",{id:"tokenscope-objects"},"TokenScope objects"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"permissions"),(0,l.yg)("td",{parentName:"tr",align:null},"List <",(0,l.yg)("a",{parentName:"td",href:"#permission-objects"},"Permission"),">"),(0,l.yg)("td",{parentName:"tr",align:null},"\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u306b\u4ed8\u4e0e\u3059\u308b\u6a29\u9650\u3067\u3059\u3002")))),(0,l.yg)("p",null,"TokenScope \u306f ",(0,l.yg)("a",{parentName:"p",href:"#permission-objects"},"permission objects"),"\u306e\u30ea\u30b9\u30c8\u3067\u3059\u3002\u30ea\u30b9\u30c8\u306b\u306f\u3001",(0,l.yg)("a",{parentName:"p",href:"#cachepermission"},"CachePermission"),"\u578b\u307e\u305f\u306f ",(0,l.yg)("a",{parentName:"p",href:"#topicpermission"},"TopicPermission"),"\u578b\u306e\u6a29\u9650\u304c\u542b\u307e\u308c\u3001",(0,l.yg)("a",{parentName:"p",href:"/ja/topics/limits"},"\u6700\u5927\u3067\u5341"),"\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6a29\u9650\u306fMomento \u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3API\uff08\u4f8b\u3048\u3070 get\u3001set \u306a\u3069\uff09\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u307f\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002\u8907\u6570\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067auth\u30c8\u30fc\u30af\u30f3\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u3069\u306e\u4e00\u81f4\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3067\u3082\u30a2\u30af\u30bb\u30b9\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6b21\u306e\u4e8c\u3064\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u5358\u4e00\u306e\u30c8\u30fc\u30af\u30f3\u304c\u4f5c\u6210\u3055\u308c\u305f\u5834\u5408\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5168\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3066\u8aad\u307f\u66f8\u304d\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,l.yg)("li",{parentName:"ol"},"\u30ad\u30e3\u30c3\u30b7\u30e5 ",(0,l.yg)("inlineCode",{parentName:"li"},"foo")," \u3078\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,l.yg)("p",null,"\u3053\u306e\u5834\u5408\u3001\u6700\u521d\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"\u306b\u5bfe\u3057\u3066\u30c7\u30fc\u30bf\u64cd\u4f5cAPI\uff08\u4f8b\u3048\u3070 ",(0,l.yg)("inlineCode",{parentName:"p"},"set"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"delete"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"DictionarySetFields"),"\u306a\u3069\uff09\u306e\u4f7f\u7528\u3092\u8a31\u53ef\u3059\u308b\u30c8\u30fc\u30af\u30f3\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.yg)("h2",{id:"permission-objects"},"Permission objects"),(0,l.yg)("p",null,"\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u307e\u305f\u306f\u30c8\u30d4\u30c3\u30af\u60c5\u5831\u306b\u95a2\u3059\u308b\u5177\u4f53\u7684\u306a\u30ed\u30fc\u30eb\u3092\u5b9a\u7fa9\u3057\u3001\u305d\u306e\u5f8c ",(0,l.yg)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," \u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,l.yg)("h3",{id:"cachepermission"},"CachePermission"),(0,l.yg)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3059\u308b\u6a29\u9650\u3092\u5b9a\u7fa9\u3059\u308b ",(0,l.yg)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e00\u90e8\u5206\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"role"),(0,l.yg)("td",{parentName:"tr",align:null},"ReadOnly ","|"," ReadWrite"),(0,l.yg)("td",{parentName:"tr",align:null},"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u308a\u4ed8\u4e0e\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9\u306e\u7a2e\u985e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cache"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"AllCaches")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"CacheName")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"CacheName")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084 ",(0,l.yg)("inlineCode",{parentName:"td"},"AllCaches")," \u7d44\u307f\u8fbc\u307f\u5024\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,l.yg)("p",null,"\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"CacheRole.ReadOnly")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001CacheSelector \u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u8aad\u53d6\u308aAPI\uff08\u4f8b\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"DictionaryGetField"),"\u306a\u3069\uff09\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"CacheRole.ReadWrite")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001CacheSelector \u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u3059\u3079\u3066\u306e\u8aad\u307f\u66f8\u304d\u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3API\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30ed\u30fc\u30eb\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"),(0,l.yg)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066\u306f\u3001\u5024\u306f\u7d44\u307f\u8fbc\u307f\u306e ",(0,l.yg)("inlineCode",{parentName:"p"},"AllCaches")," \u307e\u305f\u306f\u3053\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u304c\u5bfe\u8c61\u3068\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u542b\u3080\u6587\u5b57\u5217\u5024\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("h3",{id:"topicpermission"},"TopicPermission"),(0,l.yg)("p",null,"\u30c8\u30fc\u30af\u30f3\u306e\u6a29\u9650\u3092\u5b9a\u7fa9\u3059\u308b ",(0,l.yg)("a",{parentName:"p",href:"#tokenscope"},"TokenScope")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4e00\u90e8\u5206\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"role"),(0,l.yg)("td",{parentName:"tr",align:null},"SubscribeOnly ","|"," PublishSubscribe"),(0,l.yg)("td",{parentName:"tr",align:null},"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u308a\u4ed8\u4e0e\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9\u306e\u7a2e\u985e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cache"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"AllCaches")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"CacheName")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"CacheName")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306b\u5236\u9650\u3057\u305f\u308a\u3001",(0,l.yg)("inlineCode",{parentName:"td"},"AllCaches")," \u7d44\u307f\u8fbc\u307f\u5024\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"topic"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"AllTopics")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"TopicName")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"TopicName")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u305f\u30c8\u30d4\u30c3\u30af\u540d\u306b\u5236\u9650\u3057\u305f\u308a\u3001",(0,l.yg)("inlineCode",{parentName:"td"},"AllTopics")," \u7d44\u307f\u8fbc\u307f\u5024\u3092\u4f7f\u7528\u3057\u3066\u4e0a\u8a18\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u3059\u3079\u3066\u306e\u30c8\u30d4\u30c3\u30af\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,l.yg)("p",null,"\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"TopicRole.PublishSubscribe")," \u3068 ",(0,l.yg)("inlineCode",{parentName:"p"},"TopicRole.SubscribeOnly")," \u306e2\u3064\u306e\u7ba1\u7406\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30ed\u30fc\u30eb\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002SubscribeOnly \u30ed\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u306e\u307f\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u4e00\u65b9\u3001PublishSubscribe \u30ed\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066\u306f\u3001\u305d\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u7a7a\u9593\u5185\u306e\u30c8\u30d4\u30c3\u30af\u306e\u307f\u304c\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u7d44\u307f\u8fbc\u307f\u306e ",(0,l.yg)("inlineCode",{parentName:"p"},"AllCaches")," \u5024\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u6307\u5b9a\u3059\u308b\u6587\u5b57\u5217\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u30c8\u30d4\u30c3\u30af\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u308c\u306f\u7d44\u307f\u8fbc\u307f\u306e ",(0,l.yg)("inlineCode",{parentName:"p"},"AllTopics")," \u5024\u306b\u8a2d\u5b9a\u3067\u304d\u3001\u3053\u308c\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u3059\u3079\u3066\u306e\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u7279\u5b9a\u306e\u30c8\u30d4\u30c3\u30af\u540d\u3092\u6301\u3064\u6587\u5b57\u5217\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("h4",{id:"topicscope-examples"},"TopicScope examples"),(0,l.yg)("p",null,"\u3053\u308c\u306f\u3001CachePermissions \u306e\u307f\u3067 TokenScope \u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'const CachePermissions = {\n    permissions: [\n        {\n            role: CacheRole.ReadWrite, // Managed role\n            cache: "MyCache" // grants access to a specific cache\n        },\n        {\n            role: CacheRole.ReadOnly, // Managed role\n            cache: AllCaches // Built-in value for access to all caches in the account.\n        },\n    ],\n};\n')),(0,l.yg)("p",null,"\u3053\u308c\u306f\u3001TopicPermissions \u306e\u307f\u3067 TokenScope \u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3067\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"const TopicsPermissions = {\n    permissions: [\n      {\n        role: TopicRole.PublishSubscribe, // Managed role\n        cache: 'the-great-wall', // grants access to a specific cache\n        topic: 'highlights', // grants access to a specific topic\n      },\n      {\n        role: TopicRole.SubscribeOnly, // Built-in role\n        cache: AllCaches, // This is a built-in value for access to all caches in the account\n        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).\n      },\n    ],\n};\n")),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u3053\u3053\u3067\u7b54\u3048\u3089\u308c\u3066\u3044\u306a\u3044\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,l.yg)("a",{parentName:"p",href:"https://discord.gg/2c24SK6W"},"\u79c1\u305f\u3061\u306eDiscord\u30b5\u30fc\u30d0\u30fc"),"\u306b\u53c2\u52a0\u3057\u3001\u30b5\u30dd\u30fc\u30c8\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u5c02\u9580\u5bb6\u306b\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044")),(0,l.yg)("h2",{id:"faq"},"FAQ"),(0,l.yg)("details",null,(0,l.yg)("summary",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u307e\u305f\u306f\u30c8\u30d4\u30c3\u30af\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f"),(0,l.yg)("p",null,"\u3044\u3044\u3048\u3002\u5404\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306f\u3001\u4e0a\u8a18\u306b\u5217\u6319\u3057\u305f\u7ba1\u7406\u3055\u308c\u305f\u30ed\u30fc\u30eb\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002")),(0,l.yg)("details",null,(0,l.yg)("summary",null,"\u3053\u308c\u3089\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001Momento \u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3 API \u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3057\u307e\u3059\u304b\uff1f"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"#generateauthtoken"},"GenerateAuthToken")," API \u3067\u751f\u6210\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306f\u3001Momento \u306e\u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3API\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3060\u3051\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002Momento \u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3API\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u305f\u3081\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001",(0,l.yg)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento console")," \u3092\u4f7f\u7528\u3057\u3066\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u3053\u3053\u3067\u7b54\u3048\u3089\u308c\u306a\u3044\u8cea\u554f\u304c\u3042\u308c\u3070\u3001",(0,l.yg)("a",{parentName:"p",href:"https://discord.gg/2c24SK6W"},"\u79c1\u305f\u3061\u306eDiscord\u30b5\u30fc\u30d0\u30fc"),"\u306b\u98db\u3073\u3001\u30b5\u30dd\u30fc\u30c8\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u5c02\u9580\u5bb6\u306b\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);