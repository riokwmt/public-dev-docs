"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8772],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),o=a(6550),c=a(1980),s=a(7392),d=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,s]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=c??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,i]),tabValues:i}}var y=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:c,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==o&&(u(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",N.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,y.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>o});var n=a(4866),r=a(5162),i=a(614),l=a(7294);const o=e=>{let{js:t,python:a,java:o,kotlin:c,go:s,csharp:d,php:u,rust:p,ruby:m,elixir:h,swift:k,dart:y,cli:N}=e;return t||a||o||c||s||d||u||p||m||h||k||y||N?l.createElement(n.Z,null,t&&l.createElement(r.Z,{value:"js",label:"JavaScript"},l.createElement(i.Z,{language:"js"},t)),a&&l.createElement(r.Z,{value:"python",label:"Python"},l.createElement(i.Z,{language:"python"},a)),o&&l.createElement(r.Z,{value:"java",label:"Java"},l.createElement(i.Z,{language:"java"},o)),c&&l.createElement(r.Z,{value:"kotlin",label:"Kotlin"},l.createElement(i.Z,{language:"kotlin"},c)),s&&l.createElement(r.Z,{value:"go",label:"Go"},l.createElement(i.Z,{language:"go"},s)),d&&l.createElement(r.Z,{value:"csharp",label:"C#"},l.createElement(i.Z,{language:"csharp"},d)),u&&l.createElement(r.Z,{value:"php",label:"PHP"},l.createElement(i.Z,{language:"php"},u)),p&&l.createElement(r.Z,{value:"rust",label:"Rust"},l.createElement(i.Z,{language:"rust"},p)),m&&l.createElement(r.Z,{value:"ruby",label:"Ruby"},l.createElement(i.Z,{language:"ruby"},m)),h&&l.createElement(r.Z,{value:"elixir",label:"Elixir"},l.createElement(i.Z,{language:"elixir"},h)),k&&l.createElement(r.Z,{value:"swift",label:"Swift"},l.createElement(i.Z,{language:"swift"},k)),y&&l.createElement(r.Z,{value:"dart",label:"Dart"},l.createElement(i.Z,{language:"dart"},y)),N&&l.createElement(r.Z,{value:"cli",label:"CLI"},l.createElement(i.Z,{language:"cli"},N))):null}},646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=(a(3404),a(9720));const l={sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache."},o="Dictionary API reference for Momento Cache",c={unversionedId:"cache/develop/api-reference/dictionary-collections",id:"cache/develop/api-reference/dictionary-collections",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/dictionary-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/dictionary-collections",permalink:"/cache/develop/api-reference/dictionary-collections",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/dictionary-collections.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache."},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/cache/develop/api-reference/"},next:{title:"Lists",permalink:"/cache/develop/api-reference/list-collections"}},s={},d=[{value:"Dictionary methods",id:"dictionary-methods",level:2},{value:"DictionaryFetch",id:"dictionaryfetch",level:3},{value:"DictionaryGetField",id:"dictionarygetfield",level:3},{value:"DictionaryGetFields",id:"dictionarygetfields",level:3},{value:"DictionaryIncrement",id:"dictionaryincrement",level:3},{value:"DictionaryRemoveField",id:"dictionaryremovefield",level:3},{value:"DictionaryRemoveFields",id:"dictionaryremovefields",level:3},{value:"DictionarySetField",id:"dictionarysetfield",level:3},{value:"DictionarySetFields",id:"dictionarysetfields",level:3},{value:"DictionaryLength",id:"dictionarylength",level:3}],u={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dictionary-api-reference-for-momento-cache"},"Dictionary API reference for Momento Cache"),(0,r.kt)("p",null,"This page details the Momento API methods for the ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/basics/datatypes#dictionary-collections"},"dictionary collection data type"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Momento collection types use a ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL"),' to specify their TTL behavior. This is an optional argument for all "write" operations.')),(0,r.kt)("h2",{id:"dictionary-methods"},"Dictionary methods"),(0,r.kt)("h3",{id:"dictionaryfetch"},"DictionaryFetch"),(0,r.kt)("p",null,"Gets a dictionary item from a cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("p",null,"The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryBytesBytes()"),": Map<Bytes, Bytes>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryStringString()"),": Map<String, String>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryStringBytes()"),": Map<String, Bytes>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryBytesString()"),": Map<Bytes, String>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()"),": String - displays the field/value pairs, truncated."))),(0,r.kt)("li",{parentName:"ul"},"Cache miss"),(0,r.kt)("li",{parentName:"ul"},"Cache error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', 'test-value');\nconst result = await cacheClient.dictionaryFetch('test-cache', 'test-dictionary');\nif (result instanceof CacheDictionaryFetch.Hit) {\n  console.log('Dictionary fetched successfully- ');\n  result.valueMapStringString().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheDictionaryFetch.Miss) {\n  console.log(\"Dictionary 'test-dictionary' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheDictionaryFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryFetch on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarygetfield"},"DictionaryGetField"),(0,r.kt)("p",null,"Get one field from a dictionary item in the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache hit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fieldString()"),": String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fieldBytes()"),": Bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"valueString()"),": String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"valueBytes()"),": Bytes"),(0,r.kt)("p",{parentName:"li"},"  These return the field and its value from the dictionary.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache miss"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldString()"),": String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldBytes()"),": Bytes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache error"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldString()"),": String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldBytes()"),": Bytes")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', 'test-value');\nconst result = await cacheClient.dictionaryGetField('test-cache', 'test-dictionary', 'test-field');\nif (result instanceof CacheDictionaryGetField.Hit) {\n  console.log(\n    `Field ${result.fieldString()} fetched successfully from cache 'test-cache' with value: ${result.valueString()}`\n  );\n} else if (result instanceof CacheDictionaryGetField.Miss) {\n  console.log(\"Dictionary 'test-dictionary' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheDictionaryGetField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryGetField on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarygetfields"},"DictionaryGetFields"),(0,r.kt)("p",null,"Get one or more fields from a dictionary in the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valueDictionaryBytesBytes(): Map<Bytes, Bytes>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryStringString(): Map<String, String>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryStringBytes(): Map<String, Bytes>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryBytesString(): Map<Bytes, String>"),(0,r.kt)("li",{parentName:"ul"},"toString(): String - displays truncated valueDictionaryStringString()"))),(0,r.kt)("li",{parentName:"ul"},"Cache miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"await cacheClient.dictionarySetFields(\n  'test-cache',\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nconst result = await cacheClient.dictionaryGetFields('test-cache', 'test-dictionary', ['key1', 'key2']);\nif (result instanceof CacheDictionaryGetFields.Hit) {\n  console.log('Values fetched successfully- ');\n  result.valueMapStringString().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheDictionaryGetFields.Miss) {\n  console.log(\"Dictionary 'test-dictionary' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheDictionaryGetFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryGetFields on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionaryincrement"},"DictionaryIncrement"),(0,r.kt)("p",null,"Adds to the value of a field, if and only if the existing value is a UTF-8 string representing a base 10 integer. If the field is missing from the dictionary, this method sets the field's value to the amount to increment by."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The resulting incremented value must be between -9223372036854775808 and 9223372036854775807, ie. a signed 64-bit integer. If not, there will be an error response.")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the field does not exist, ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaryIncrement(cache, dict, field, 10)")," will set the field's value to 10."),(0,r.kt)("li",{parentName:"ul"},"When the field = 5, ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaryIncrement(cache, dict, field, 10)")," will set the field's value to 15."),(0,r.kt)("li",{parentName:"ul"},"When the field = \u2018five\u2019, it will respond with a FailedPreconditionException error.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The quantity to add to the value. May be positive, negative, or zero. Defaults to 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"This will come back as a TTL construct.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value()"),": integer - the new value after incrementing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()"),": String - displays the value()"))),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', '10');\nconst result = await cacheClient.dictionaryIncrement('test-cache', 'test-dictionary', 'test-field', 1);\nif (result instanceof CacheDictionaryIncrement.Success) {\n  console.log(`Field value incremented by 1. Result - ${result.valueNumber()}`);\n} else if (result instanceof CacheDictionaryIncrement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryIncrement on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionaryremovefield"},"DictionaryRemoveField"),(0,r.kt)("p",null,"Removes a field from a dictionary item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', '10');\nconst result = await cacheClient.dictionaryRemoveField('test-cache', 'test-dictionary', 'test-field');\nif (result instanceof CacheDictionaryRemoveField.Success) {\n  console.log(\"Field removed successfully from dictionary 'test-dictionary'\");\n} else if (result instanceof CacheDictionaryRemoveField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryRemoveField on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionaryremovefields"},"DictionaryRemoveFields"),(0,r.kt)("p",null,"Removes multiple fields from a dictionary item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"await cacheClient.dictionarySetFields(\n  'test-cache',\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nconst result = await cacheClient.dictionaryRemoveFields('test-cache', 'test-dictionary', ['key1', 'key2']);\nif (result instanceof CacheDictionaryRemoveFields.Success) {\n  console.log(\"Fields removed successfully from dictionary 'test-dictionary'\");\n} else if (result instanceof CacheDictionaryRemoveFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryRemoveFields on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarysetfield"},"DictionarySetField"),(0,r.kt)("p",null,"Sets a field:value pair in an existing dictionary item. If the dictionary item does not exist, it is created with the new field:value pair."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the field to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"const result = await cacheClient.dictionarySetField('test-cache', 'test-dictionary', 'test-field', 'test-value');\nif (result instanceof CacheDictionarySetField.Success) {\n  console.log(\"Field set successfully into cache 'test-cache'\");\n} else if (result instanceof CacheDictionarySetField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionarySetField on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarysetfields"},"DictionarySetFields"),(0,r.kt)("p",null,"Sets several field:value pairs in a dictionary item. If the dictionary item does not exist, it is created with the new fields."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Field:value pair to be added to the dictionary item by the set operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"const result = await cacheClient.dictionarySetFields(\n  'test-cache',\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nif (result instanceof CacheDictionarySetFields.Success) {\n  console.log(\"Fields set successfully into cache 'test-cache'\");\n} else if (result instanceof CacheDictionarySetFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionarySetFields on dictionary 'test-dictionary' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"dictionarylength"},"DictionaryLength"),(0,r.kt)("p",null,"Get the length of an existing dictionary item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be checked.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(i.X,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0}}]);