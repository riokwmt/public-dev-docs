"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2331],{5162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>y});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),s=a(6550),o=a(1980),c=a(7392),u=a(12);function p(t){return function(t){return l.Children.map(t,(t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:l}}=t;return{value:e,label:a,attributes:n,default:l}}))}function m(t){const{values:e,children:a}=t;return(0,l.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,c.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function h(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function d(t){let{queryString:e=!1,groupId:a}=t;const n=(0,s.k6)(),r=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace({...n.location,search:e.toString()})}),[r,n])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,r=m(t),[i,s]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:r}))),[o,c]=d({queryString:a,groupId:n}),[p,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((t=>{a&&r.set(t)}),[a,r])]}({groupId:n}),N=(()=>{const t=o??p;return h({value:t,tabValues:r})?t:null})();(0,l.useLayoutEffect)((()=>{N&&s(N)}),[N]);return{selectedValue:i,selectValue:(0,l.useCallback)((t=>{if(!h({value:t,tabValues:r}))throw new Error(`Can't select invalid tab value=${t}`);s(t),c(t),k(t)}),[c,k,r]),tabValues:r}}var N=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:a,selectedValue:s,selectValue:o,tabValues:c}=t;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=t=>{const e=t.currentTarget,a=u.indexOf(e),n=c[a].value;n!==s&&(p(e),o(n))},h=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const a=u.indexOf(t.currentTarget)+1;e=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(t.currentTarget)-1;e=u[a]??u[u.length-1];break}}e?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},c.map((t=>{let{value:e,label:a,attributes:i}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>u.push(t),onKeyDown:h,onClick:m},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===e})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:n}=t;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=r.find((t=>t.props.value===n));return t?(0,l.cloneElement)(t,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=k(t);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(f,(0,n.Z)({},t,e)),l.createElement(b,(0,n.Z)({},t,e)))}function y(t){const e=(0,N.Z)();return l.createElement(v,(0,n.Z)({key:String(e)},t))}},3404:(t,e,a)=>{a(7294)},9720:(t,e,a)=>{a.d(e,{X:()=>s});var n=a(4866),l=a(5162),r=a(614),i=a(7294);const s=t=>{let{js:e,python:a,java:s,go:o,csharp:c,php:u,rust:p,ruby:m,elixir:h,swift:d,cli:k}=t;return e||a||s||o||c||u||p||m||h||d||k?i.createElement(n.Z,null,e&&i.createElement(l.Z,{value:"js",label:"JavaScript"},i.createElement(r.Z,{language:"js"},e)),a&&i.createElement(l.Z,{value:"python",label:"Python"},i.createElement(r.Z,{language:"python"},a)),s&&i.createElement(l.Z,{value:"java",label:"Java"},i.createElement(r.Z,{language:"java"},s)),o&&i.createElement(l.Z,{value:"go",label:"Go"},i.createElement(r.Z,{language:"go"},o)),c&&i.createElement(l.Z,{value:"csharp",label:"C#"},i.createElement(r.Z,{language:"csharp"},c)),u&&i.createElement(l.Z,{value:"php",label:"PHP"},i.createElement(r.Z,{language:"php"},u)),p&&i.createElement(l.Z,{value:"rust",label:"Rust"},i.createElement(r.Z,{language:"rust"},p)),m&&i.createElement(l.Z,{value:"ruby",label:"Ruby"},i.createElement(r.Z,{language:"ruby"},m)),h&&i.createElement(l.Z,{value:"elixir",label:"Elixir"},i.createElement(r.Z,{language:"elixir"},h)),d&&i.createElement(l.Z,{value:"swift",label:"Swift"},i.createElement(r.Z,{language:"swift"},d)),k&&i.createElement(l.Z,{value:"cli",label:"CLI"},i.createElement(r.Z,{language:"cli"},k))):null}},2218:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=(a(3404),a(9720));const i={sidebar_position:2,sidebar_label:"Lists",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache."},s="List API reference for Momento Cache",o={unversionedId:"cache/develop/api-reference/list-collections",id:"cache/develop/api-reference/list-collections",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/list-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/list-collections",permalink:"/cache/develop/api-reference/list-collections",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/list-collections.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Lists",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache."},sidebar:"tutorialSidebar",previous:{title:"Dictionary",permalink:"/cache/develop/api-reference/dictionary-collections"},next:{title:"Sets",permalink:"/cache/develop/api-reference/set-collections"}},c={},u=[{value:"List methods",id:"list-methods",level:2},{value:"ListFetch",id:"listfetch",level:3},{value:"ListConcatenateBack",id:"listconcatenateback",level:3},{value:"ListConcatenateFront",id:"listconcatenatefront",level:3},{value:"ListLength",id:"listlength",level:3},{value:"ListPopBack",id:"listpopback",level:3},{value:"ListPopFront",id:"listpopfront",level:3},{value:"ListPushBack",id:"listpushback",level:3},{value:"ListPushFront",id:"listpushfront",level:3},{value:"ListRemoveValue",id:"listremovevalue",level:3},{value:"ListRetain",id:"listretain",level:3},{value:"Truncate to size",id:"truncate-to-size",level:2}],p={toc:u},m="wrapper";function h(t){let{components:e,...i}=t;return(0,l.kt)(m,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"list-api-reference-for-momento-cache"},"List API reference for Momento Cache"),(0,l.kt)("p",null,"This page details the Momento API methods for the ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/basics/datatypes#list-collections"},"list collection data types"),"."),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"a technical illustration of a scroll with lists of information. All collected into groups.",src:a(7416).Z,width:"1000",height:"231"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Momento collection types use a ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL"),' to specify their TTL behavior. This is an optional argument for all "write" operations.')),(0,l.kt)("h2",{id:"list-methods"},"List methods"),(0,l.kt)("h3",{id:"listfetch"},"ListFetch"),(0,l.kt)("p",null,"Gets a list item from a cache, with optional slices."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the list item to be retrieved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting inclusive element of the list to fetch. Default is 0. ",(0,l.kt)("strong",{parentName:"td"},"This argument is optional."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending exclusive element of the list to fetch. Default is end of list. ",(0,l.kt)("strong",{parentName:"td"},"This argument is optional."))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for ListFetch returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"valueListBytes(): Bytes[]"),(0,l.kt)("li",{parentName:"ul"},"valueListString(): String[]"),(0,l.kt)("li",{parentName:"ul"},"toString(): String - Display a truncated valueListString(). See ",(0,l.kt)("a",{parentName:"li",href:"#truncate-to-size"},"truncation"),"."))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateBack('test-cache', 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listFetch('test-cache', 'test-list');\nif (result instanceof CacheListFetch.Hit) {\n  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions\n  console.log(`List fetched successfully: ${result.valueList()}`);\n} else if (result instanceof CacheListFetch.Miss) {\n  console.log(\"List 'test-list' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheListFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to fetch the list 'test-list' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listconcatenateback"},"ListConcatenateBack"),(0,l.kt)("p",null,"Appends the supplied list to the end of an existing list item."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"If you have ","[1, 2, 3]"," and listConcatenateBack ","[4, 5, 6]"," you will have ","[1, 2, 3, 4, 5, 6]","."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Values to be added as elements to the list item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client connection object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateFrontToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateBack('test-cache', 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listConcatenateBack('test-cache', 'test-list', ['x', 'y', 'z']);\nif (result instanceof CacheListConcatenateBack.Success) {\n  console.log(`Values added successfully to the back of the list 'test-list'. Result - ${result.toString()}`);\n} else if (result instanceof CacheListConcatenateBack.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListConcatenateBack on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listconcatenatefront"},"ListConcatenateFront"),(0,l.kt)("p",null,"Appends the supplied list to the front of an existing list item."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"If you have ","[1, 2, 3]"," and listConcatenateFront ","[4, 5, 6]"," you will have ","[4, 5, 6, 1, 2, 3]","."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Values to be added as elements to the list item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateBackToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list item"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateFront('test-cache', 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listConcatenateFront('test-cache', 'test-list', ['x', 'y', 'z']);\nif (result instanceof CacheListConcatenateFront.Success) {\n  console.log(`Values added successfully to the front of the list 'test-list'. Result - ${result.toString()}`);\n} else if (result instanceof CacheListConcatenateFront.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListConcatenateFront on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listlength"},"ListLength"),(0,l.kt)("p",null,"Get the length of an existing list item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be checked.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateBack('test-cache', 'test-list', ['one', 'two', 'three']);\nconst result = await cacheClient.listLength('test-cache', 'test-list');\nif (result instanceof CacheListLength.Hit) {\n  console.log(`Length of list 'test-list' is ${result.length()}`);\n} else if (result instanceof CacheListLength.Miss) {\n  console.log(\"List 'test-list' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheListLength.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListLength on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpopback"},"ListPopBack"),(0,l.kt)("p",null,"Remove and return the last element from a list item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be retrieved.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueString()"),": String"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueBytes()"),": Bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": truncated valueString()"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateBack('test-cache', 'test-list', ['one', 'two', 'three']);\nconst result = await cacheClient.listPopBack('test-cache', 'test-list');\nif (result instanceof CacheListPopBack.Hit) {\n  console.log(`Last value was removed successfully from list 'test-list': ${result.valueString()}`);\n} else if (result instanceof CacheListPopBack.Miss) {\n  console.log(\"List 'test-list' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheListPopBack.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPopBack on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpopfront"},"ListPopFront"),(0,l.kt)("p",null,"Remove and return the first element from a list item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be retrieved.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueString()"),": String"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueBytes()"),": Bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": truncated valueString()"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateFront('test-cache', 'test-list', ['one', 'two', 'three']);\nconst result = await cacheClient.listPopFront('test-cache', 'test-list');\nif (result instanceof CacheListPopFront.Hit) {\n  console.log(`First value was removed successfully from list 'test-list': ${result.valueString()}`);\n} else if (result instanceof CacheListPopFront.Miss) {\n  console.log(\"List 'test-list' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheListPopFront.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPopFront on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpushback"},"ListPushBack"),(0,l.kt)("p",null,"Push a value to the end of a list item. This is exactly like passing just one value to ",(0,l.kt)("a",{parentName:"p",href:"#listconcatenateback"},"ListConcatenateBack"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to be added.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateBackToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list item"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateBack('test-cache', 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listPushBack('test-cache', 'test-list', 'x');\nif (result instanceof CacheListPushBack.Success) {\n  console.log(\"Value 'x' added successfully to back of list 'test-list'\");\n} else if (result instanceof CacheListPushBack.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPushBack on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpushfront"},"ListPushFront"),(0,l.kt)("p",null,"Push a value to the beginning of a list item. Just like ",(0,l.kt)("a",{parentName:"p",href:"#listpushback"},"ListPushBack"),", but to the front."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to be added to the list item by the operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateBackToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateFront('test-cache', 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listPushFront('test-cache', 'test-list', 'x');\nif (result instanceof CacheListPushFront.Success) {\n  console.log(\"Value 'x' added successfully to front of list 'test-list'\");\n} else if (result instanceof CacheListPushFront.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListPushFront on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listremovevalue"},"ListRemoveValue"),(0,l.kt)("p",null,"Remove all elements in a list item equal to a particular value."),(0,l.kt)("p",null,"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you have the list ",(0,l.kt)("inlineCode",{parentName:"li"},"['up', 'up', 'down', 'down', 'left', 'right']")," and remove \u2018up\u2019 the list will be ",(0,l.kt)("inlineCode",{parentName:"li"},"['down', 'down', 'left', 'right']"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to be added to the list item by the operation.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"Responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success - even if the value does not exist"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateFront('test-cache', 'test-list', ['a', 'b', 'c']);\nconst result = await cacheClient.listRemoveValue('test-cache', 'test-list', 'b');\nif (result instanceof CacheListRemoveValue.Success) {\n  console.log(\"Value 'b' removed successfully from list 'test-list'\");\n} else if (result instanceof CacheListRemoveValue.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListRemoveValue on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listretain"},"ListRetain"),(0,l.kt)("p",null,"Retains only slice of the list where the start is inclusive and the end is exclusive.  The items outside of this range will be dropped from the list."),(0,l.kt)("p",null,"Example:\nFor the specified list, start at index 4 (the startIndex) and keep the next five elements, end at index 10 (the endIndex). Discard all other elements in the list. In this example, elements at position 0-3 and 9 or higher are dropped."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting inclusive element of the list to retain. Default is 0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending exclusive element of the list to retain. Default is end of list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"Responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success - even if the value does not exist"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(r.X,{js:"await cacheClient.listConcatenateFront('test-cache', 'test-list', ['a', 'b', 'c', 'd', 'e', 'f']);\nconst result = await cacheClient.listRetain('test-cache', 'test-list', {startIndex: 1, endIndex: 4});\nif (result instanceof CacheListRetain.Success) {\n  console.log(\"Retaining elements from index 1 to 4 from list 'test-list'\");\n} else if (result instanceof CacheListRetain.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheListRetain on list 'test-list' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h2",{id:"truncate-to-size"},"Truncate to size"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#listconcatenateback"},"ListConcatenate")," and ",(0,l.kt)("a",{parentName:"p",href:"#listpushback"},"ListPush")," type API calls all have truncation options. If after adding their elements the list exceeds this size, this list will be truncated."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Example: If the list is ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you ListConcatenateBack ",(0,l.kt)("inlineCode",{parentName:"p"},"[4, 5, 6]")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"truncateFrontToSize: 5")," the list will be truncated to ",(0,l.kt)("inlineCode",{parentName:"p"},"[2, 3, 4, 5, 6]")," and the response ListLength will be 5.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Example: If the list is ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you ListConcatenateBack ",(0,l.kt)("inlineCode",{parentName:"p"},"[4, 5, 6]")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"truncateFrontToSize: 10")," the list will not be truncated. It will be ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5, 6]")))))}h.isMDXComponent=!0},7416:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/list-collections-a4c843626143e2812423ec0491874996.jpg"}}]);