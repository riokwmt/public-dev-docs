"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7598],{9985:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=o(4848),t=o(8453),r=(o(1441),o(5347));const i={sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},a="Momento tokens for short-lived permissions",l={id:"cache/develop/authentication/tokens",title:"Momento tokens for short-lived, limited scope permissions",description:"Learn what Momento tokens are, how to create them, and how they are used.",source:"@site/docs/cache/develop/authentication/tokens.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/tokens",permalink:"/cache/develop/authentication/tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/tokens.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/cache/develop/authentication/api-keys"},next:{title:"Permissions",permalink:"/cache/develop/authentication/permissions"}},c={},u=[{value:"Creating a token",id:"creating-a-token",level:2},{value:"Expiration",id:"expiration",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Data restriction",id:"data-restriction",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"momento-tokens-for-short-lived-permissions",children:"Momento tokens for short-lived permissions"}),"\n",(0,s.jsx)(n.p,{children:"Tokens are short-lived, limited-scope values intended to be used in temporary situations like a user's session. Software lifecycle events like a user login often result in the issuing of a token only valid for the duration of that session."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Not sure if you should be using an ",(0,s.jsx)(n.code,{children:"API key"})," or a ",(0,s.jsx)(n.code,{children:"token"}),"? Check out our ",(0,s.jsx)(n.a,{href:"/cache/develop/authentication/",children:"authentication"})," page for all the details!"]})}),"\n",(0,s.jsx)(n.p,{children:"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues."}),"\n",(0,s.jsxs)(n.p,{children:["A Momento token allows access to ",(0,s.jsx)(n.em,{children:"data plane"})," API operations only. The user is unable to do ",(0,s.jsx)(n.em,{children:"control plane"})," operations like creating, deleting, or flushing a cache."]}),"\n",(0,s.jsx)(n.p,{children:"A user with a fully privileged token will be able to perform the following actions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add/edit/delete cache items in any cache"}),"\n",(0,s.jsx)(n.li,{children:"Publish and subscribe to any topic in any cache"}),"\n",(0,s.jsx)(n.li,{children:"Increment cache values via the increment API in any cache"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It's up to you to limit the access of a token based on your system requirements."}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-token",children:"Creating a token"}),"\n",(0,s.jsxs)(n.p,{children:["Unlike our ",(0,s.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"API keys"}),", the only way to create a token is through code. You cannot create them through the Momento console."]}),"\n",(0,s.jsx)(n.p,{children:"Below are some examples to create tokens with different sets of permissions:"}),"\n",(0,s.jsx)(r.r,{js:"// Generate a disposable token with read-write access to a specific key in one cache\nconst oneKeyOneCacheToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyReadWrite('squirrels', 'mo'),\n  ExpiresIn.minutes(30)\n);\nif (oneKeyOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to the \"mo\" key in the \"squirrels\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneKeyOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneKeyOneCacheToken.expiresAt.epoch()}`);\n} else if (oneKeyOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneKeyOneCacheToken.errorCode()}: ${oneKeyOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nconst keyPrefixAllCachesToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyPrefixReadWrite(AllCaches, 'squirrel'),\n  ExpiresIn.minutes(30)\n);\nif (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to keys prefixed with \"squirrel\" in all caches!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${keyPrefixAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${keyPrefixAllCachesToken.expiresAt.epoch()}`);\n} else if (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${keyPrefixAllCachesToken.errorCode()}: ${keyPrefixAllCachesToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nconst allTopicsOneCacheToken = await authClient.generateDisposableToken(\n  TokenScopes.topicSubscribeOnly('squirrel', AllTopics),\n  ExpiresIn.minutes(30)\n);\nif (allTopicsOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${allTopicsOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allTopicsOneCacheToken.expiresAt.epoch()}`);\n} else if (allTopicsOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${allTopicsOneCacheToken.errorCode()}: ${allTopicsOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nconst oneTopicAllCachesToken = await authClient.generateDisposableToken(\n  TokenScopes.topicPublishOnly(AllCaches, 'acorn'),\n  ExpiresIn.minutes(30)\n);\nif (oneTopicAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneTopicAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneTopicAllCachesToken.expiresAt.epoch()}`);\n} else if (oneTopicAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneTopicAllCachesToken.errorCode()}: ${oneTopicAllCachesToken.toString()}`\n  );\n}",python:"",java:'final GenerateDisposableTokenResponse response =\n    authClient\n        .generateDisposableTokenAsync(\n            DisposableTokenScopes.cacheKeyReadWrite("squirrel", "mo"), ExpiresIn.minutes(30))\n        .join();\nif (response instanceof GenerateDisposableTokenResponse.Success success) {\n  System.out.println("Successfully generated the disposable token: " + success.authToken());\n} else if (response instanceof GenerateDisposableTokenResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to generate disposable token: "\n          + error.getErrorCode(),\n      error);\n}',kotlin:"",go:'tokenId := "a token id"\nresp, err := client.GenerateDisposableToken(ctx, &momento.GenerateDisposableTokenRequest{\n\tExpiresIn: utils.ExpiresInSeconds(10),\n\tScope: momento.TopicSubscribeOnly(\n\t\tmomento.CacheName{Name: "a cache"},\n\t\tmomento.TopicName{Name: "a topic"},\n\t),\n\tProps: momento.DisposableTokenProps{\n\t\tTokenId: &tokenId,\n\t},\n})\n\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *auth_resp.GenerateDisposableTokenSuccess:\n\tlog.Printf("Successfully generated a disposable token for endpoint=%s with tokenId=%s\\n", r.Endpoint, tokenId)\n}',csharp:'// Generate a disposable token with read-write access to a specific key in one cache\r\nvar oneKeyOneCacheToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.CacheKeyReadWrite("squirrels", "mo"),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Success token1)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token1.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token1.ExpiresAt.Epoch());\r\n}\r\nelse if (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\r\nvar keyPrefixAllCachesToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.CacheKeyPrefixReadWrite(CacheSelector.AllCaches, "squirrel"),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Success token2)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token2.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token2.ExpiresAt.Epoch());\r\n}\r\nelse if (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n\n// Generate a disposable token with read-only access to all topics in one cache\r\nvar allTopicsOneCacheToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.TopicSubscribeOnly("squirrel", TopicSelector.AllTopics),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Success token3)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token3.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token3.ExpiresAt.Epoch());\r\n}\r\nelse if (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n\n// Generate a disposable token with write-only access to a single topic in all caches\r\nvar oneTopicAllCachesToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.TopicPublishOnly(CacheSelector.AllCaches, "acorn"),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Success token4)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token4.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token4.ExpiresAt.Epoch());\r\n}\r\nelse if (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n',php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,s.jsxs)(n.p,{children:["For detailed information on creating a token, please refer to the ",(0,s.jsx)(n.a,{href:"/cache/develop/api-reference/auth",children:"API reference page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"expiration",children:"Expiration"}),"\n",(0,s.jsxs)(n.p,{children:["Momento tokens are required to have an expiration time. The ",(0,s.jsx)(n.strong,{children:"maximum expiration time for a token is 1 hour"}),". When the token expiration time elapses, you will be required to create a new one."]}),"\n",(0,s.jsxs)(n.p,{children:["If you attempt to make a call with an expired token, you will receive a ",(0,s.jsx)(n.code,{children:"AUTHENTICATION_ERROR"})," response indicating the provided credentials could not connect to the service."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues."})}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsx)(n.p,{children:"These tokens are a great fit for the following use cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Using Momento for front-end development"}),"\n",(0,s.jsx)(n.li,{children:"Communicating with IoT devices"}),"\n",(0,s.jsx)(n.li,{children:"Issuing temporary access to specific resources"}),"\n",(0,s.jsx)(n.li,{children:"Providing credentials to users on login"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"data-restriction",children:"Data restriction"}),"\n",(0,s.jsxs)(n.p,{children:["A common use case for a token is to limit access to only a small subset of resources. Not only can you limit capabilities, like providing a token with ",(0,s.jsx)(n.em,{children:"read-only"})," access, but you can also scope it to individual cache items or topics."]}),"\n",(0,s.jsxs)(n.p,{children:["To get a full understanding of what you can do with data restriction, check out our ",(0,s.jsx)(n.a,{href:"/cache/develop/authentication/permissions",children:"permissions page"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var s=o(4164);const t={tabItem:"tabItem_Ymn6"};var r=o(4848);function i(e){let{children:n,hidden:o,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:o,children:n})}},1470:(e,n,o)=>{o.d(n,{A:()=>v});var s=o(6540),t=o(4164),r=o(3104),i=o(6347),a=o(205),l=o(7485),c=o(1682),u=o(679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:o}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:s,default:t}}=e;return{value:n,label:o,attributes:s,default:t}}))}(o);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function d(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:o}=e;const t=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function g(e){const{defaultValue:n,queryString:o=!1,groupId:t}=e,r=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=o.find((e=>e.default))??o[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=k({queryString:o,groupId:t}),[g,b]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,u.Dv)(o);return[t,(0,s.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:t}),f=(()=>{const e=c??g;return d({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,r]),tabValues:r}}var b=o(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=o(4848);function T(e){let{className:n,block:o,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,o=l.indexOf(n),t=a[o].value;t!==s&&(c(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...r,className:(0,t.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:o??n},n)}))})}function x(e){let{lazy:n,children:o,selectedValue:t}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,m.jsx)(T,{...n,...e}),(0,m.jsx)(x,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},1441:(e,n,o)=>{o(6540)},5347:(e,n,o)=>{o.d(n,{r:()=>a});var s=o(1470),t=o(9365),r=o(1432),i=(o(6540),o(4848));const a=e=>{let{js:n,python:o,java:a,kotlin:l,go:c,csharp:u,php:h,rust:p,ruby:d,elixir:k,swift:g,dart:b,cli:f}=e;return n||o||a||l||c||u||h||p||d||k||g||b||f?(0,i.jsxs)(s.A,{children:[n&&(0,i.jsx)(t.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(r.A,{language:"js",children:n})}),o&&(0,i.jsx)(t.A,{value:"python",label:"Python",children:(0,i.jsx)(r.A,{language:"python",children:o})}),a&&(0,i.jsx)(t.A,{value:"java",label:"Java",children:(0,i.jsx)(r.A,{language:"java",children:a})}),l&&(0,i.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(r.A,{language:"kotlin",children:l})}),c&&(0,i.jsx)(t.A,{value:"go",label:"Go",children:(0,i.jsx)(r.A,{language:"go",children:c})}),u&&(0,i.jsx)(t.A,{value:"csharp",label:"C#",children:(0,i.jsx)(r.A,{language:"csharp",children:u})}),h&&(0,i.jsx)(t.A,{value:"php",label:"PHP",children:(0,i.jsx)(r.A,{language:"php",children:h})}),p&&(0,i.jsx)(t.A,{value:"rust",label:"Rust",children:(0,i.jsx)(r.A,{language:"rust",children:p})}),d&&(0,i.jsx)(t.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(r.A,{language:"ruby",children:d})}),k&&(0,i.jsx)(t.A,{value:"elixir",label:"Elixir",children:(0,i.jsx)(r.A,{language:"elixir",children:k})}),g&&(0,i.jsx)(t.A,{value:"swift",label:"Swift",children:(0,i.jsx)(r.A,{language:"swift",children:g})}),b&&(0,i.jsx)(t.A,{value:"dart",label:"Dart",children:(0,i.jsx)(r.A,{language:"dart",children:b})}),f&&(0,i.jsx)(t.A,{value:"cli",label:"CLI",children:(0,i.jsx)(r.A,{language:"cli",children:f})})]}):null}}}]);