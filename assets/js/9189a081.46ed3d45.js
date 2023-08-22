"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[101],{5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(7462),a=r(7294),o=r(6010),s=r(2466),i=r(6550),l=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=l??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(2389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==i&&(p(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",y,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},3404:(e,t,r)=>{r(7294)},9720:(e,t,r)=>{r.d(t,{X:()=>i});var n=r(4866),a=r(5162),o=r(814),s=r(7294);const i=e=>{let{js:t,python:r,java:i,go:l,csharp:c,php:u,rust:p,ruby:d,elixir:h,cli:m}=e;return t||r||i||l||c||u||p||d||h||m?s.createElement(n.Z,null,t&&s.createElement(a.Z,{value:"js",label:"JavaScript"},s.createElement(o.Z,{language:"js"},t)),r&&s.createElement(a.Z,{value:"python",label:"Python"},s.createElement(o.Z,{language:"python"},r)),i&&s.createElement(a.Z,{value:"java",label:"Java"},s.createElement(o.Z,{language:"java"},i)),l&&s.createElement(a.Z,{value:"go",label:"Go"},s.createElement(o.Z,{language:"go"},l)),c&&s.createElement(a.Z,{value:"csharp",label:"C#"},s.createElement(o.Z,{language:"csharp"},c)),u&&s.createElement(a.Z,{value:"php",label:"PHP"},s.createElement(o.Z,{language:"php"},u)),p&&s.createElement(a.Z,{value:"rust",label:"Rust"},s.createElement(o.Z,{language:"rust"},p)),d&&s.createElement(a.Z,{value:"ruby",label:"Ruby"},s.createElement(o.Z,{language:"ruby"},d)),h&&s.createElement(a.Z,{value:"elixir",label:"Elixir"},s.createElement(o.Z,{language:"elixir"},h)),m&&s.createElement(a.Z,{value:"cli",label:"CLI"},s.createElement(o.Z,{language:"cli"},m))):null}},1790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=(r(3404),r(9720));const s={sidebar_position:3,sidebar_label:"SDK Error Handling",sidebar_class_name:"sidebar-item-api-reference",title:"SDK error handling",description:"Discover how to handle errors when using the Momento SDK.",pagination_next:null},i="SDK Error Handling",l={unversionedId:"develop/basics/error-handling-production-readiness",id:"develop/basics/error-handling-production-readiness",title:"SDK error handling",description:"Discover how to handle errors when using the Momento SDK.",source:"@site/docs/develop/basics/03-error-handling-production-readiness.md",sourceDirName:"develop/basics",slug:"/develop/basics/error-handling-production-readiness",permalink:"/develop/basics/error-handling-production-readiness",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/basics/03-error-handling-production-readiness.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"SDK Error Handling",sidebar_class_name:"sidebar-item-api-reference",title:"SDK error handling",description:"Discover how to handle errors when using the Momento SDK.",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"SDK Configuration Objects",permalink:"/develop/basics/client-configuration-objects"}},c={},u=[{value:"Surfacing errors",id:"surfacing-errors",level:2},{value:"Retrying calls that returned an error",id:"retrying-calls-that-returned-an-error",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk-error-handling"},"SDK Error Handling"),(0,a.kt)("img",{src:"/img/error-handling.jpg",width:"90%",alt:"a technical illustration of Momento client configuration objects."}),(0,a.kt)("p",null,"Each of our SDKs has its own page in this documentation; you can navigate to them by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"SDKs"),' in the left navigation menu. On each of these pages, you\'ll find a link for "Taking your code to prod" that provides best practices for production-ready code in that language.'),(0,a.kt)("p",null,"Momento SDKs are designed to behave well in production environments using the pre-built configuration objects provided, so most users can easily move from proof of concept to production with no changes in operating practices. This page shares some general notes on error handling in Momento SDKs, and why the default behaviors we've chosen are recommended for most customers."),(0,a.kt)("h2",{id:"surfacing-errors"},"Surfacing errors"),(0,a.kt)("p",null,"Errors which occur in calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"CacheClient")," methods (e.g. Get, Set, Increment) are surfaced to developers as part of the return values of the calls, as opposed to throwing exceptions. This makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why ",(0,a.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/exceptions-are-bugs"},"Exceptions are bugs"),", and send us any feedback you have!"),(0,a.kt)("p",null,"This also helps to ensure your application doesn't crash at runtime. Momento is a cache, so applications usually have an authoritative data source they retrieve data from if the cache is unavailable. Therefore, Momento SDKs are designed to avoid throwing exceptions so your app won't crash if you forget to add a try/catch block."),(0,a.kt)("p",null,"Instead, Momento response objects extend from a parent class, have child types such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit,")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Miss,")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Error,"),' and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a ',(0,a.kt)("inlineCode",{parentName:"p"},"Hit,")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"Miss,")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", and then branches accordingly. Using this approach, you get a type-safe response object in the case of a cache hit, with ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," properties that you can be assured at compile-time are not ",(0,a.kt)("inlineCode",{parentName:"p"},"null.")," If the cache read results in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Miss")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error,")," you'll also get a type-safe object that you can use to get more information about what happened (with properties such as ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCode")," that aren't present on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit")," object)."),(0,a.kt)("p",null,"Here's an example of how to do the pattern matching on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," response:"),(0,a.kt)(o.X,{js:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"final GetResponse response = cacheClient.get(\"test-cache\", \"test-key\").join();\nif (response instanceof GetResponse.Hit hit) {\n  System.out.println(\"Retrieved value for key 'test-key': \" + hit.valueString());\n} else if (response instanceof GetResponse.Miss) {\n  System.out.println(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (response instanceof GetResponse.Error error) {\n  throw new RuntimeException(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': \"\n          + error.getErrorCode(),\n      error);\n}",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"Some APIs, such as write APIs (e.g. Set, Delete) only have ",(0,a.kt)("inlineCode",{parentName:"p"},"Success")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," responses (as opposed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Miss"),"). Here's an example of handling one of these responses:"),(0,a.kt)(o.X,{js:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:'final SetResponse response = cacheClient.set("test-cache", "test-key", "test-value").join();\nif (response instanceof SetResponse.Success) {\n  System.out.println("Key \'test-key\' stored successfully");\n} else if (response instanceof SetResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': "\n          + error.getErrorCode(),\n      error);\n}',go:"",csharp:"",php:"",rust:"",ruby:"",elixir:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"In all cases, your IDE will be able to give you hints as to which types of responses are available for a given API, and what properties/methods are available on each of the response types."),(0,a.kt)("p",null,"For an example of how errors response work and use, watch this video:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h9FiNCxlZso",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"retrying-calls-that-returned-an-error"},"Retrying calls that returned an error"),(0,a.kt)("p",null,"The general pattern of behavior you can expect from Momento SDKs when it comes to retrying a call after an error response is as follows:"),(0,a.kt)("img",{src:"/img/sdk_retry_behavior.png",width:"100%",alt:"logic diagram depicting SDK retry behavior"}),(0,a.kt)("p",null,"Momento SDKs do not retry throttled requests (",(0,a.kt)("a",{parentName:"p",href:"/manage/limits/"},"limits exceeded"),"). For other errors, the SDK will not retry if the operation requested is not ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence"},"idempotent"),". For example, if you are incrementing a counter and receive an error response, the SDK will not retry on your behalf (because this could result in over-counting). In the case of non-idempotent operations, it is safer to let the developer choose whether to retry."))}d.isMDXComponent=!0}}]);