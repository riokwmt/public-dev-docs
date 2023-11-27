"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8535],{5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7462),o=t(7294),s=t(6010),l=t(2466),r=t(6550),i=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function k(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,r]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,c]=d({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=i??p;return k({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{g&&r(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!k({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var g=t(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),h=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==r&&(p(n),i(a))},k=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>u.push(e),onKeyDown:k,onClick:h},l,{className:(0,s.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=b(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",m.tabList)},o.createElement(T,(0,a.Z)({},e,n)),o.createElement(f,(0,a.Z)({},e,n)))}function v(e){const n=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(n)},e))}},3404:(e,n,t)=>{t(7294)},9720:(e,n,t)=>{t.d(n,{X:()=>r});var a=t(4866),o=t(5162),s=t(614),l=t(7294);const r=e=>{let{js:n,python:t,java:r,go:i,csharp:c,php:u,rust:p,ruby:h,elixir:k,cli:d}=e;return n||t||r||i||c||u||p||h||k||d?l.createElement(a.Z,null,n&&l.createElement(o.Z,{value:"js",label:"JavaScript"},l.createElement(s.Z,{language:"js"},n)),t&&l.createElement(o.Z,{value:"python",label:"Python"},l.createElement(s.Z,{language:"python"},t)),r&&l.createElement(o.Z,{value:"java",label:"Java"},l.createElement(s.Z,{language:"java"},r)),i&&l.createElement(o.Z,{value:"go",label:"Go"},l.createElement(s.Z,{language:"go"},i)),c&&l.createElement(o.Z,{value:"csharp",label:"C#"},l.createElement(s.Z,{language:"csharp"},c)),u&&l.createElement(o.Z,{value:"php",label:"PHP"},l.createElement(s.Z,{language:"php"},u)),p&&l.createElement(o.Z,{value:"rust",label:"Rust"},l.createElement(s.Z,{language:"rust"},p)),h&&l.createElement(o.Z,{value:"ruby",label:"Ruby"},l.createElement(s.Z,{language:"ruby"},h)),k&&l.createElement(o.Z,{value:"elixir",label:"Elixir"},l.createElement(s.Z,{language:"elixir"},k)),d&&l.createElement(o.Z,{value:"cli",label:"CLI"},l.createElement(s.Z,{language:"cli"},d))):null}},3475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),o=(t(7294),t(3905)),s=(t(3404),t(9720));const l={sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Momento\u30c8\u30fc\u30af\u30f3\u3068\u306f\u4f55\u304b\u3001\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210\u65b9\u6cd5\u3001\u30c8\u30fc\u30af\u30f3\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},r="\u6709\u52b9\u671f\u9593\u306e\u77ed\u3044\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u7528\u306e Momento \u30c8\u30fc\u30af\u30f3z",i={unversionedId:"cache/develop/authentication/tokens",id:"cache/develop/authentication/tokens",title:"Momento tokens for short-lived, limited scope permissions",description:"Momento\u30c8\u30fc\u30af\u30f3\u3068\u306f\u4f55\u304b\u3001\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210\u65b9\u6cd5\u3001\u30c8\u30fc\u30af\u30f3\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/authentication/tokens.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/tokens",permalink:"/ja/cache/develop/authentication/tokens",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/tokens.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Momento\u30c8\u30fc\u30af\u30f3\u3068\u306f\u4f55\u304b\u3001\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210\u65b9\u6cd5\u3001\u30c8\u30fc\u30af\u30f3\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/ja/cache/develop/authentication/api-keys"},next:{title:"Permissions",permalink:"/ja/cache/develop/authentication/permissions"}},c={},u=[{value:"\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210",id:"\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210",level:2},{value:"\u6709\u52b9\u671f\u9650",id:"\u6709\u52b9\u671f\u9650",level:2},{value:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",id:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",level:2},{value:"\u30c7\u30fc\u30bf\u5236\u9650",id:"\u30c7\u30fc\u30bf\u5236\u9650",level:2}],p={toc:u},h="wrapper";function k(e){let{components:n,...l}=e;return(0,o.kt)(h,(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6709\u52b9\u671f\u9593\u306e\u77ed\u3044\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u7528\u306e-momento-\u30c8\u30fc\u30af\u30f3z"},"\u6709\u52b9\u671f\u9593\u306e\u77ed\u3044\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u7528\u306e Momento \u30c8\u30fc\u30af\u30f3z"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"a technical illustration of Momento authentication and access control.",src:t(6249).Z,width:"1000",height:"208"})),(0,o.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306a\u3069\u306e\u4e00\u6642\u7684\u306a\u72b6\u6cc1\u3067\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u305f\u3001\u6709\u52b9\u671f\u9593\u304c\u77ed\u304f\u3001\u7bc4\u56f2\u304c\u9650\u5b9a\u3055\u308c\u305f\u5024\u3067\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u306a\u3069\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30a4\u30d9\u30f3\u30c8\u3067\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u305d\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u9593\u306e\u307f\u6709\u52b9\u306a\u30c8\u30fc\u30af\u30f3\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"Momento \u30c8\u30fc\u30af\u30f3\u306f\u3001",(0,o.kt)("em",{parentName:"p"},"\u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3")," API \u64cd\u4f5c\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u307f\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u3001\u524a\u9664\u3001\u30d5\u30e9\u30c3\u30b7\u30e5\u306a\u3069\u306e ",(0,o.kt)("em",{parentName:"p"},"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3")," \u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u5b8c\u5168\u306a\u7279\u6a29\u30c8\u30fc\u30af\u30f3\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u6b21\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4efb\u610f\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u9805\u76ee\u3092\u8ffd\u52a0/\u7de8\u96c6/\u524a\u9664"),(0,o.kt)("li",{parentName:"ul"},"\u4efb\u610f\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u4efb\u610f\u306e\u30c8\u30d4\u30c3\u30af\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u304a\u3088\u3073\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6"),(0,o.kt)("li",{parentName:"ul"},"\u4efb\u610f\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8 API \u3092\u4ecb\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8")),(0,o.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u8981\u4ef6\u306b\u57fa\u3065\u3044\u3066\u30c8\u30fc\u30af\u30f3\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b\u304b\u3069\u3046\u304b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u8cac\u4efb\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210"},"\u30c8\u30fc\u30af\u30f3\u306e\u4f5c\u6210"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ja/cache/develop/authentication/api-keys"},"API \u30ad\u30fc")," \u3068\u306f\u7570\u306a\u308a\u3001\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u552f\u4e00\u306e\u65b9\u6cd5\u306f\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002 Momento \u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u306f\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306b\u3001\u3055\u307e\u3056\u307e\u306a\u6a29\u9650\u30bb\u30c3\u30c8\u3092\u6301\u3064\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3092\u3044\u304f\u3064\u304b\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)(s.X,{js:"// Generate a disposable token with read-write access to a specific key in one cache\nconst oneKeyOneCacheToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyReadWrite('squirrels', 'mo'),\n  ExpiresIn.minutes(30)\n);\nif (oneKeyOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to the \"mo\" key in the \"squirrels\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneKeyOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneKeyOneCacheToken.expiresAt.epoch()}`);\n} else if (oneKeyOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneKeyOneCacheToken.errorCode()}: ${oneKeyOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nconst keyPrefixAllCachesToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyPrefixReadWrite(AllCaches, 'squirrel'),\n  ExpiresIn.minutes(30)\n);\nif (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to keys prefixed with \"squirrel\" in all caches!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${keyPrefixAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${keyPrefixAllCachesToken.expiresAt.epoch()}`);\n} else if (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${keyPrefixAllCachesToken.errorCode()}: ${keyPrefixAllCachesToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nconst allTopicsOneCacheToken = await authClient.generateDisposableToken(\n  TokenScopes.topicSubscribeOnly('squirrel', AllTopics),\n  ExpiresIn.minutes(30)\n);\nif (allTopicsOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${allTopicsOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allTopicsOneCacheToken.expiresAt.epoch()}`);\n} else if (allTopicsOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${allTopicsOneCacheToken.errorCode()}: ${allTopicsOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nconst oneTopicAllCachesToken = await authClient.generateDisposableToken(\n  TokenScopes.topicPublishOnly(AllCaches, 'acorn'),\n  ExpiresIn.minutes(30)\n);\nif (oneTopicAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneTopicAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneTopicAllCachesToken.expiresAt.epoch()}`);\n} else if (oneTopicAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneTopicAllCachesToken.errorCode()}: ${oneTopicAllCachesToken.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:'// Generate a disposable token with read-write access to a specific key in one cache\nvar oneKeyOneCacheToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.CacheKeyReadWrite("squirrels", "mo"),\n    ExpiresIn.Minutes(30)\n);\n\nif (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Success token1)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token1.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token1.ExpiresAt.Epoch());\n}\nelse if (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nvar keyPrefixAllCachesToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.CacheKeyPrefixReadWrite(CacheSelector.AllCaches, "squirrel"),\n    ExpiresIn.Minutes(30)\n);\n\nif (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Success token2)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token2.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token2.ExpiresAt.Epoch());\n}\nelse if (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nvar allTopicsOneCacheToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.TopicSubscribeOnly("squirrel", TopicSelector.AllTopics),\n    ExpiresIn.Minutes(30)\n);\n\nif (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Success token3)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token3.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token3.ExpiresAt.Epoch());\n}\nelse if (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nvar oneTopicAllCachesToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.TopicPublishOnly(CacheSelector.AllCaches, "acorn"),\n    ExpiresIn.Minutes(30)\n);\n\nif (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Success token4)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token4.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token4.ExpiresAt.Epoch());\n}\nelse if (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n',php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u4f5c\u6210\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/auth"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"\u6709\u52b9\u671f\u9650"},"\u6709\u52b9\u671f\u9650"),(0,o.kt)("p",null,"Momento \u30c8\u30fc\u30af\u30f3\u306b\u306f\u6709\u52b9\u671f\u9650\u304c\u5fc5\u8981\u3067\u3059\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u30c8\u30fc\u30af\u30f3\u306e\u6700\u5927\u6709\u52b9\u671f\u9650\u306f 1 \u6642\u9593\u3067\u3059"),"\u3002 \u30c8\u30fc\u30af\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u7d4c\u904e\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u671f\u9650\u5207\u308c\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3057\u3092\u884c\u304a\u3046\u3068\u3059\u308b\u3068\u3001\u63d0\u4f9b\u3055\u308c\u305f\u8cc7\u683c\u60c5\u5831\u304c\u30b5\u30fc\u30d3\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u306a\u304b\u3063\u305f\u3053\u3068\u3092\u793a\u3059\u300cAUTHENTICATION_ERROR\u300d\u5fdc\u7b54\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u30c8\u30fc\u30af\u30f3\u306f\u66f4\u65b0\u3067\u304d\u307e\u305b\u3093\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u671f\u9650\u304c\u5207\u308c\u308b\u3068\u6c38\u4e45\u306b\u5931\u308f\u308c\u307e\u3059\u3002 \u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306f\u3001\u65b0\u3057\u3044\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u767a\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"},"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001\u6b21\u306e\u4f7f\u7528\u4f8b\u306b\u6700\u9069\u3067\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u958b\u767a\u306b Momento \u3092\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"IoT \u30c7\u30d0\u30a4\u30b9\u3068\u306e\u901a\u4fe1"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u4e00\u6642\u7684\u306a\u30a2\u30af\u30bb\u30b9\u306e\u767a\u884c"),(0,o.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u6642\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u8cc7\u683c\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b")),(0,o.kt)("h2",{id:"\u30c7\u30fc\u30bf\u5236\u9650"},"\u30c7\u30fc\u30bf\u5236\u9650"),(0,o.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u306e\u4e00\u822c\u7684\u306a\u4f7f\u7528\u4f8b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u3092\u30ea\u30bd\u30fc\u30b9\u306e\u5c0f\u3055\u306a\u30b5\u30d6\u30bb\u30c3\u30c8\u306e\u307f\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30c8\u30fc\u30af\u30f3\u306b ",(0,o.kt)("em",{parentName:"p"},"\u8aad\u307f\u53d6\u308a\u5c02\u7528")," \u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u306a\u3069\u3001\u6a5f\u80fd\u3092\u5236\u9650\u3067\u304d\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u500b\u3005\u306e\u30ad\u30e3\u30c3\u30b7\u30e5 \u30a2\u30a4\u30c6\u30e0\u3084\u30c8\u30d4\u30c3\u30af\u306b\u30b9\u30b3\u30fc\u30d7\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30c7\u30fc\u30bf\u5236\u9650\u3067\u4f55\u304c\u3067\u304d\u308b\u304b\u3092\u5b8c\u5168\u306b\u7406\u89e3\u3059\u308b\u306b\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/cache/develop/authentication/permissions"},"\u6a29\u9650\u30da\u30fc\u30b8")," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0},6249:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tokens-page-ebb28a132941af59bb0c0fd849519b9a.jpg"}}]);