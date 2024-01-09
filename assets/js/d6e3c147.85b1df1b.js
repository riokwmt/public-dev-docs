"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[532],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(7294),a=t(6010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var o=t(7462),a=t(7294),s=t(6010),i=t(2466),r=t(6550),l=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function k(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[i,r]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,c]=d({queryString:t,groupId:o}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),b=(()=>{const e=l??p;return k({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),m(e)}),[c,m,s]),tabValues:s}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),h=e=>{const n=e.currentTarget,t=u.indexOf(n),o=c[t].value;o!==r&&(p(n),l(o))},k=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>u.push(e),onKeyDown:k,onClick:h},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n})}),t??n)})))}function T(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function y(e){const n=m(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},a.createElement(f,(0,o.Z)({},e,n)),a.createElement(T,(0,o.Z)({},e,n)))}function v(e){const n=(0,b.Z)();return a.createElement(y,(0,o.Z)({key:String(n)},e))}},3404:(e,n,t)=>{t(7294)},9720:(e,n,t)=>{t.d(n,{X:()=>r});var o=t(4866),a=t(5162),s=t(614),i=t(7294);const r=e=>{let{js:n,python:t,java:r,go:l,csharp:c,php:u,rust:p,ruby:h,elixir:k,swift:d,cli:m}=e;return n||t||r||l||c||u||p||h||k||d||m?i.createElement(o.Z,null,n&&i.createElement(a.Z,{value:"js",label:"JavaScript"},i.createElement(s.Z,{language:"js"},n)),t&&i.createElement(a.Z,{value:"python",label:"Python"},i.createElement(s.Z,{language:"python"},t)),r&&i.createElement(a.Z,{value:"java",label:"Java"},i.createElement(s.Z,{language:"java"},r)),l&&i.createElement(a.Z,{value:"go",label:"Go"},i.createElement(s.Z,{language:"go"},l)),c&&i.createElement(a.Z,{value:"csharp",label:"C#"},i.createElement(s.Z,{language:"csharp"},c)),u&&i.createElement(a.Z,{value:"php",label:"PHP"},i.createElement(s.Z,{language:"php"},u)),p&&i.createElement(a.Z,{value:"rust",label:"Rust"},i.createElement(s.Z,{language:"rust"},p)),h&&i.createElement(a.Z,{value:"ruby",label:"Ruby"},i.createElement(s.Z,{language:"ruby"},h)),k&&i.createElement(a.Z,{value:"elixir",label:"Elixir"},i.createElement(s.Z,{language:"elixir"},k)),d&&i.createElement(a.Z,{value:"swift",label:"Swift"},i.createElement(s.Z,{language:"swift"},d)),m&&i.createElement(a.Z,{value:"cli",label:"CLI"},i.createElement(s.Z,{language:"cli"},m))):null}},2306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(7462),a=(t(7294),t(3905)),s=(t(3404),t(9720));const i={sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},r="Momento tokens for short-lived permissions",l={unversionedId:"cache/develop/authentication/tokens",id:"cache/develop/authentication/tokens",title:"Momento tokens for short-lived, limited scope permissions",description:"Learn what Momento tokens are, how to create them, and how they are used.",source:"@site/docs/cache/develop/authentication/tokens.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/tokens",permalink:"/cache/develop/authentication/tokens",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/tokens.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/cache/develop/authentication/api-keys"},next:{title:"Permissions",permalink:"/cache/develop/authentication/permissions"}},c={},u=[{value:"Creating a token",id:"creating-a-token",level:2},{value:"Expiration",id:"expiration",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Data restriction",id:"data-restriction",level:2}],p={toc:u},h="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-tokens-for-short-lived-permissions"},"Momento tokens for short-lived permissions"),(0,a.kt)("p",null,"Tokens are short-lived, limited-scope values intended to be used in temporary situations like a user's session. Software lifecycle events like a user login often result in the issuing of a token only valid for the duration of that session."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Not sure if you should be using an ",(0,a.kt)("inlineCode",{parentName:"p"},"API key")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"token"),"? Check out our ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/authentication/"},"authentication")," page for all the details!")),(0,a.kt)("p",null,"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues."),(0,a.kt)("p",null,"A Momento token allows access to ",(0,a.kt)("em",{parentName:"p"},"data plane")," API operations only. The user is unable to do ",(0,a.kt)("em",{parentName:"p"},"control plane")," operations like creating, deleting, or flushing a cache."),(0,a.kt)("p",null,"A user with a fully privileged token will be able to perform the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add/edit/delete cache items in any cache"),(0,a.kt)("li",{parentName:"ul"},"Publish and subscribe to any topic in any cache"),(0,a.kt)("li",{parentName:"ul"},"Increment cache values via the increment API in any cache")),(0,a.kt)("p",null,"It's up to you to limit the access of a token based on your system requirements."),(0,a.kt)("h2",{id:"creating-a-token"},"Creating a token"),(0,a.kt)("p",null,"Unlike our ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"API keys"),", the only way to create a token is through code. You cannot create them through the Momento console."),(0,a.kt)("p",null,"Below are some examples to create tokens with different sets of permissions:"),(0,a.kt)(s.X,{js:"// Generate a disposable token with read-write access to a specific key in one cache\nconst oneKeyOneCacheToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyReadWrite('squirrels', 'mo'),\n  ExpiresIn.minutes(30)\n);\nif (oneKeyOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to the \"mo\" key in the \"squirrels\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneKeyOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneKeyOneCacheToken.expiresAt.epoch()}`);\n} else if (oneKeyOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneKeyOneCacheToken.errorCode()}: ${oneKeyOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nconst keyPrefixAllCachesToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyPrefixReadWrite(AllCaches, 'squirrel'),\n  ExpiresIn.minutes(30)\n);\nif (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to keys prefixed with \"squirrel\" in all caches!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${keyPrefixAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${keyPrefixAllCachesToken.expiresAt.epoch()}`);\n} else if (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${keyPrefixAllCachesToken.errorCode()}: ${keyPrefixAllCachesToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nconst allTopicsOneCacheToken = await authClient.generateDisposableToken(\n  TokenScopes.topicSubscribeOnly('squirrel', AllTopics),\n  ExpiresIn.minutes(30)\n);\nif (allTopicsOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${allTopicsOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allTopicsOneCacheToken.expiresAt.epoch()}`);\n} else if (allTopicsOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${allTopicsOneCacheToken.errorCode()}: ${allTopicsOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nconst oneTopicAllCachesToken = await authClient.generateDisposableToken(\n  TokenScopes.topicPublishOnly(AllCaches, 'acorn'),\n  ExpiresIn.minutes(30)\n);\nif (oneTopicAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneTopicAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneTopicAllCachesToken.expiresAt.epoch()}`);\n} else if (oneTopicAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneTopicAllCachesToken.errorCode()}: ${oneTopicAllCachesToken.toString()}`\n  );\n}",python:"",java:'final GenerateDisposableTokenResponse response =\n    authClient\n        .generateDisposableTokenAsync(\n            DisposableTokenScopes.cacheKeyReadWrite("squirrel", "mo"), ExpiresIn.minutes(30))\n        .join();\nif (response instanceof GenerateDisposableTokenResponse.Success success) {\n  System.out.println("Successfully generated the disposable token: " + success.authToken());\n} else if (response instanceof GenerateDisposableTokenResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to generate disposable token: "\n          + error.getErrorCode(),\n      error);\n}',go:'tokenId := "a token id"\nresp, err := client.GenerateDisposableToken(ctx, &momento.GenerateDisposableTokenRequest{\n\tExpiresIn: utils.ExpiresInSeconds(10),\n\tScope: momento.TopicSubscribeOnly(\n\t\tmomento.CacheName{Name: "a cache"},\n\t\tmomento.TopicName{Name: "a topic"},\n\t),\n\tProps: momento.DisposableTokenProps{\n\t\tTokenId: &tokenId,\n\t},\n})\n\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *auth_resp.GenerateDisposableTokenSuccess:\n\tlog.Printf("Successfully generated a disposable token for endpoint=%s with tokenId=%s\\n", r.Endpoint, tokenId)\n}',csharp:'// Generate a disposable token with read-write access to a specific key in one cache\nvar oneKeyOneCacheToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.CacheKeyReadWrite("squirrels", "mo"),\n    ExpiresIn.Minutes(30)\n);\n\nif (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Success token1)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token1.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token1.ExpiresAt.Epoch());\n}\nelse if (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nvar keyPrefixAllCachesToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.CacheKeyPrefixReadWrite(CacheSelector.AllCaches, "squirrel"),\n    ExpiresIn.Minutes(30)\n);\n\nif (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Success token2)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token2.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token2.ExpiresAt.Epoch());\n}\nelse if (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nvar allTopicsOneCacheToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.TopicSubscribeOnly("squirrel", TopicSelector.AllTopics),\n    ExpiresIn.Minutes(30)\n);\n\nif (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Success token3)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token3.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token3.ExpiresAt.Epoch());\n}\nelse if (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nvar oneTopicAllCachesToken = await authClient.GenerateDisposableTokenAsync(\n    DisposableTokenScopes.TopicPublishOnly(CacheSelector.AllCaches, "acorn"),\n    ExpiresIn.Minutes(30)\n);\n\nif (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Success token4)\n{\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    Console.WriteLine("The generated disposable token starts with: " + token4.AuthToken.Substring(0, 10));\n    Console.WriteLine("The token expires at (epoch timestamp): " + token4.ExpiresAt.Epoch());\n}\nelse if (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Error err)\n{\n    Console.WriteLine("Error generating disposable token: " + err.Message);\n}\n',php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"For detailed information on creating a token, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/auth"},"API reference page"),"."),(0,a.kt)("h2",{id:"expiration"},"Expiration"),(0,a.kt)("p",null,"Momento tokens are required to have an expiration time. The ",(0,a.kt)("strong",{parentName:"p"},"maximum expiration time for a token is 1 hour"),". When the token expiration time elapses, you will be required to create a new one."),(0,a.kt)("p",null,"If you attempt to make a call with an expired token, you will receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTHENTICATION_ERROR")," response indicating the provided credentials could not connect to the service."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues.")),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,"These tokens are a great fit for the following use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using Momento for front-end development"),(0,a.kt)("li",{parentName:"ul"},"Communicating with IoT devices"),(0,a.kt)("li",{parentName:"ul"},"Issuing temporary access to specific resources"),(0,a.kt)("li",{parentName:"ul"},"Providing credentials to users on login")),(0,a.kt)("h2",{id:"data-restriction"},"Data restriction"),(0,a.kt)("p",null,"A common use case for a token is to limit access to only a small subset of resources. Not only can you limit capabilities, like providing a token with ",(0,a.kt)("em",{parentName:"p"},"read-only")," access, but you can also scope it to individual cache items or topics."),(0,a.kt)("p",null,"To get a full understanding of what you can do with data restriction, check out our ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/authentication/permissions"},"permissions page"),"."))}k.isMDXComponent=!0}}]);