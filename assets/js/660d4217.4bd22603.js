"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1925],{9365:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),l=a(53);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(8168),l=a(6540),r=a(53),s=a(3104),i=a(6347),o=a(7485),c=a(1682),m=a(9466);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,c]=d({queryString:a,groupId:n}),[u,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Dv)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=o??u;return g({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,r]),tabValues:r}}var h=a(2303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==i&&(u(t),o(n))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:g,onClick:p},s,{className:(0,r.A)("tabs__item",N.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=y(e);return l.createElement("div",{className:(0,r.A)("tabs-container",N.tabList)},l.createElement(f,(0,n.A)({},e,t)),l.createElement(b,(0,n.A)({},e,t)))}function v(e){const t=(0,h.A)();return l.createElement(S,(0,n.A)({key:String(t)},e))}},1441:(e,t,a)=>{a(6540)},5347:(e,t,a)=>{a.d(t,{r:()=>i});var n=a(1470),l=a(9365),r=a(2355),s=a(6540);const i=e=>{let{js:t,python:a,java:i,kotlin:o,go:c,csharp:m,php:u,rust:p,ruby:g,elixir:d,swift:y,dart:h,cli:N}=e;return t||a||i||o||c||m||u||p||g||d||y||h||N?s.createElement(n.A,null,t&&s.createElement(l.A,{value:"js",label:"JavaScript"},s.createElement(r.A,{language:"js"},t)),a&&s.createElement(l.A,{value:"python",label:"Python"},s.createElement(r.A,{language:"python"},a)),i&&s.createElement(l.A,{value:"java",label:"Java"},s.createElement(r.A,{language:"java"},i)),o&&s.createElement(l.A,{value:"kotlin",label:"Kotlin"},s.createElement(r.A,{language:"kotlin"},o)),c&&s.createElement(l.A,{value:"go",label:"Go"},s.createElement(r.A,{language:"go"},c)),m&&s.createElement(l.A,{value:"csharp",label:"C#"},s.createElement(r.A,{language:"csharp"},m)),u&&s.createElement(l.A,{value:"php",label:"PHP"},s.createElement(r.A,{language:"php"},u)),p&&s.createElement(l.A,{value:"rust",label:"Rust"},s.createElement(r.A,{language:"rust"},p)),g&&s.createElement(l.A,{value:"ruby",label:"Ruby"},s.createElement(r.A,{language:"ruby"},g)),d&&s.createElement(l.A,{value:"elixir",label:"Elixir"},s.createElement(r.A,{language:"elixir"},d)),y&&s.createElement(l.A,{value:"swift",label:"Swift"},s.createElement(r.A,{language:"swift"},y)),h&&s.createElement(l.A,{value:"dart",label:"Dart"},s.createElement(r.A,{language:"dart"},h)),N&&s.createElement(l.A,{value:"cli",label:"CLI"},s.createElement(r.A,{language:"cli"},N))):null}},3770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(8168),l=(a(6540),a(5680)),r=(a(1441),a(5347));const s={sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache."},i="Set API reference for Momento Cache",o={unversionedId:"cache/develop/api-reference/set-collections",id:"cache/develop/api-reference/set-collections",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/set-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/set-collections",permalink:"/cache/develop/api-reference/set-collections",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/set-collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Learn how to interact with the API for set collection data types in Momento Cache."},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/cache/develop/api-reference/list-collections"},next:{title:"Sorted sets",permalink:"/cache/develop/api-reference/sorted-set-collections"}},c={},m=[{value:"Set methods",id:"set-methods",level:2},{value:"SetAddElement",id:"setaddelement",level:3},{value:"SetAddElements",id:"setaddelements",level:3},{value:"SetFetch",id:"setfetch",level:3},{value:"SetSample",id:"setsample",level:3},{value:"SetRemoveElement",id:"setremoveelement",level:3},{value:"SetRemoveElements",id:"setremoveelements",level:3},{value:"SetContainsElement",id:"setcontainselement",level:3},{value:"SetContainsElements",id:"setcontainselements",level:3},{value:"SetLength",id:"setlength",level:3}],u={toc:m},p="wrapper";function g(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"set-api-reference-for-momento-cache"},"Set API reference for Momento Cache"),(0,l.yg)("p",null,"A set is a collection of elements, but each element can appear only once and order is not guaranteed."),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("p",{parentName:"admonition"},"Momento collection types use a ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL"),' to specify their TTL behavior. This is an optional argument for all "write" operations.')),(0,l.yg)("p",null,"Example: if your set contains ",(0,l.yg)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you add 2, the set remains ",(0,l.yg)("inlineCode",{parentName:"p"},"[1, 2, 3].")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/basics/datatypes#set-collections"},"Sets")," for more information on their usage."),(0,l.yg)("h2",{id:"set-methods"},"Set methods"),(0,l.yg)("h3",{id:"setaddelement"},"SetAddElement"),(0,l.yg)("p",null,"Adds an element to a set. If the set item does not already exist, this method will create one."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"element"),(0,l.yg)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"Element to be added by this operation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ttl"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.yg)("td",{parentName:"tr",align:null},"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Success"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"const result = await cacheClient.setAddElement(cacheName, 'test-set', 'test-element');\nif (result instanceof CacheSetAddElement.Success) {\n  console.log(\"Element added successfully to set 'test-set'\");\n} else if (result instanceof CacheSetAddElement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetAddElement on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setaddelements"},"SetAddElements"),(0,l.yg)("p",null,"Adds multiple elements to a set item. If the set item does not already exist, this method will create one."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"elements"),(0,l.yg)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.yg)("td",{parentName:"tr",align:null},"Elements to be added by this operation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ttl"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,l.yg)("td",{parentName:"tr",align:null},"TTL for the set item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Success"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"const result = await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nif (result instanceof CacheSetAddElements.Success) {\n  console.log(\"Elements added successfully to set 'test-set'\");\n} else if (result instanceof CacheSetAddElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetAddElements on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client: &CacheClient,\n  cache_name: &String,\n-> Result<(), MomentoError> {\n  cache_client\n      .set_add_elements(cache_name, "set_name", vec!["value1", "value2"])\n      .await?;\n  println!("Elements added to set");\n  Ok(())',ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setfetch"},"SetFetch"),(0,l.yg)("p",null,"Gets a set item from a cache."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the set item to be retrieved.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("p",null,"The response object for SetFetch returns three possible options, a cache hit, miss, or an error."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Hit",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"valueSetBytes(): Bytes[]"),(0,l.yg)("li",{parentName:"ul"},"valueSetString(): String[]"),(0,l.yg)("li",{parentName:"ul"},"toString(): String"))),(0,l.yg)("li",{parentName:"ul"},"Miss"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setFetch(cacheName, 'test-set');\nif (result instanceof CacheSetFetch.Hit) {\n  console.log('Set fetched successfully- ');\n  result.valueSet().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheSetFetch.Miss) {\n  console.log(`Set 'test-set' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheSetFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetFetch on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client: &CacheClient,\n  cache_name: &String,\n-> Result<(), MomentoError> {\n  let _fetched_elements: Vec<String> = cache_client\n      .set_fetch(cache_name, "set_name")\n      .await?\n      .try_into()\n      .expect("Expected a set!");\n  Ok(())',ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setsample"},"SetSample"),(0,l.yg)("p",null,"Gets a random sampling of elements from a set item in a cache."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the set item to sample.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"limit"),(0,l.yg)("td",{parentName:"tr",align:null},"Number"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of elements to be retrieved.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("p",null,"The response object for SetSample returns three possible options, a cache hit, miss, or an error."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Hit",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"valueSetBytes(): Bytes[]"),(0,l.yg)("li",{parentName:"ul"},"valueSetString(): String[]"),(0,l.yg)("li",{parentName:"ul"},"toString(): String"))),(0,l.yg)("li",{parentName:"ul"},"Miss"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2', 'test-element3']);\nconst result = await cacheClient.setSample(cacheName, 'test-set', 2);\nif (result instanceof CacheSetSample.Hit) {\n  console.log('Sample of 2 elements fetched successfully- ');\n  result.valueSet().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheSetSample.Miss) {\n  console.log(`Set 'test-set' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheSetSample.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetSample on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:'var setAddResult = await cacheClient.SetAddElementsAsync("test-cache", "test-set", new string[] {"foo", "bar", "baz"});\nif (setAddResult is CacheSetAddElementsResponse.Success)\n{\n    Console.WriteLine("Added elements to \'test-set\' successfully");\n}\nelse if (setAddResult is CacheSetAddElementsResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to delete key \'test-key\' from cache \'test-cache\': {error.ErrorCode}: {error}");\n}\n\nvar setSampleResult = await cacheClient.SetSampleAsync("test-cache", "test-set", 2);\nif (setSampleResult is CacheSetSampleResponse.Hit setSampleHit)\n{\n    Console.WriteLine($"Sampled random elements from \'test-set\': {String.Join(", ", setSampleHit.ValueSetString)}");\n}\nelse if (setSampleResult is CacheSetSampleResponse.Error error)\n{\n    throw new Exception($"An error occurred while attempting to sample from \'test-set\' from cache \'test-cache\': {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setremoveelement"},"SetRemoveElement"),(0,l.yg)("p",null,"Removes a single element from an existing set item. If the set is emptied as a result, the item is deleted."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"element"),(0,l.yg)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"Element to be removed by this operation.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Success"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"await cacheClient.setAddElement(cacheName, 'test-set', 'test-element');\nconst result = await cacheClient.setRemoveElement(cacheName, 'test-set', 'test-element');\nif (result instanceof CacheSetRemoveElement.Success) {\n  console.log(\"Element 'test-element' removed successfully from set 'test-set'\");\n} else if (result instanceof CacheSetRemoveElement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetRemoveElement on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setremoveelements"},"SetRemoveElements"),(0,l.yg)("p",null,"Removes multiple elements from an existing set item. If the set is emptied as a result, the item is deleted."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"element"),(0,l.yg)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.yg)("td",{parentName:"tr",align:null},"Elements to be removed by this operation.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Success"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"await cacheClient.setAddElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setRemoveElements(cacheName, 'test-set', ['test-element1', 'test-element2']);\nif (result instanceof CacheSetRemoveElements.Success) {\n  console.log(\"Elements 'test-element1' and 'test-element2' removed successfully from set 'test-set'\");\n} else if (result instanceof CacheSetRemoveElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetRemoveElements on set 'test-set' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client: &CacheClient,\n  cache_name: &String,\n-> Result<(), MomentoError> {\n  cache_client\n      .set_remove_elements(cache_name, "set_name", vec!["element1", "element2"])\n      .await?;\n  println!("Elements removed from set");\n  Ok(())',ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setcontainselement"},"SetContainsElement"),(0,l.yg)("p",null,"Checks if a provided element is in the given set."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"element"),(0,l.yg)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the element to check existence of.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("p",null,"The response object for SetContainsElement returns three possible options, a cache hit, miss, or an error."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Hit",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"containsElement(): bool"))),(0,l.yg)("li",{parentName:"ul"},"Miss"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setcontainselements"},"SetContainsElements"),(0,l.yg)("p",null,"Checks if provided elements are in the given set."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"elements"),(0,l.yg)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.yg)("td",{parentName:"tr",align:null},"Array of element names to check existence of.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("p",null,"The response object for SetContainsElements returns three possible options, a cache hit, miss, or an error."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Hit",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"containsElements(): bool[]"))),(0,l.yg)("li",{parentName:"ul"},"Miss"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.yg)("h3",{id:"setlength"},"SetLength"),(0,l.yg)("p",null,"Get the length of an existing set item"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setName"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the set item to be checked.")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Method response object"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Hit",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,l.yg)("li",{parentName:"ul"},"Miss"),(0,l.yg)("li",{parentName:"ul"},"Error")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.yg)(r.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}g.isMDXComponent=!0}}]);