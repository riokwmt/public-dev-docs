"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[65],{2355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453),s=(t(2821),t(503));const c={sidebar_position:4,sidebar_label:"Topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},r="JavaScript\u3067Momento Topics\u3092\u59cb\u3081\u308b",a={id:"sdks/nodejs/topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/nodejs/topics.mdx",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/topics",permalink:"/ja/sdks/nodejs/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/topics.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics",title:"Getting started with Momento Topics in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]}},d={},l=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068TopicClient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068topicclient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767b\u9332\u3068\u516c\u958b",id:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767b\u9332\u3068\u516c\u958b",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"javascript\u3067momento-topics\u3092\u59cb\u3081\u308b",children:"JavaScript\u3067Momento Topics\u3092\u59cb\u3081\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["Momento\u306f2\u3064\u306eJavaScript SDK\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.jsx)(n.a,{href:"/sdks/nodejs",children:"1\u3064\u306fNode.js\u7528"}),"\u3001",(0,i.jsx)(n.a,{href:"/sdks/web",children:"1\u3064\u306f\u30d6\u30e9\u30a6\u30b6\u305d\u306e\u4ed6\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528"}),"\u3067\u3059\u30022\u3064\u306eSDK\u306f\u540c\u3058API\u3092\u6301\u3063\u3066\u3044\u308b\u305f\u3081\u3001",(0,i.jsx)(n.code,{children:"import"}),"\u6587\u4ee5\u5916\u306f\u540c\u3058\u30b3\u30fc\u30c9\u306b\u898b\u3048\u307e\u3059\u304c\u3001\u7570\u306a\u308bJavaScript\u5b9f\u884c\u74b0\u5883\u306b\u304a\u3044\u3066\u6700\u9069\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u4e92\u63db\u6027\u3092\u4fdd\u3064\u3088\u3046\u306b\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u3001Momento Topics\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306a\u60c5\u5831\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3088\u308a\u8a73\u7d30\u306a\u60c5\u5831\u3084\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u4e0a\u8a18\u306eSDK\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u65e2\u5b58\u306eNode.js\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bMomento Node.js SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cli",children:"npm install @gomomento/sdk\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305f\u306f\u3001\u65e2\u5b58\u306e\u30d6\u30e9\u30a6\u30b6 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b Momento Web SDK \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cli",children:"npm install @gomomento/sdk-web\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gomento/sdk"}),"\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"@gomento/sdk-web"}),"\u306e\u3069\u3061\u3089\u304b\u7247\u65b9\u3060\u3051\u304c\u5fc5\u8981\u3067\u3042\u308b\u3002\u4e21\u65b9\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",children:"API\u30ad\u30fc\u306e\u8a2d\u5b9a"}),"\n",(0,i.jsxs)(n.p,{children:["Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f",(0,i.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"}),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u3067\u304d\u308c\u3070\u3001",(0,i.jsx)(n.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"})," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u305d\u308c\u3092\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u305d\u308c\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001\u30c8\u30fc\u30af\u30f3\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u683c\u7d0d\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068topicclient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",children:"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068TopicClient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u3092\u8a2d\u5b9a\u3057\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u53d6\u308a\u8fbc\u307f\u3001\u30d1\u30d6/\u30b5\u30d6\u30fb\u30c8\u30d4\u30c3\u30af\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3059\u308b TopicClient \u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(s.F,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {TopicClient, TopicConfigurations, CredentialProvider} from '@gomomento/sdk';\n\nfunction main() {\n  const cacheClient = new TopicClient({\n    configuration: TopicConfigurations.Default.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n  });\n}\n\ntry {\n  main();\n} catch (e) {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e;\n}\n"}),"\n",(0,i.jsx)(n.h2,{id:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767b\u9332\u3068\u516c\u958b",children:"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767b\u9332\u3068\u516c\u958b"}),"\n",(0,i.jsx)(n.p,{children:'\u3053\u306e\u4f8b\u3067\u306f\u3001"test-cache" \u3068\u3044\u3046\u540d\u524d\u306e Momento Cache \u306e "test-topic" \u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3001\u8cfc\u8aad\u304c\u6210\u529f\u3057\u305f\u3089\u305d\u306e\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(s.F,{language:"javascript",code:"const result = await topicClient.subscribe(cacheName, 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Received an item on subscription for 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  console.log(\"Publishing a value to the topic 'test-topic'\");\n  // Publish a value\n  await topicClient.publish(cacheName, 'test-topic', 'test-value');\n\n  console.log('Waiting for the published value to be received.');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}"}),"\n",(0,i.jsx)(n.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript SDK GitHub repo examples directory](",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples)%E3%81%AB%E5%AE%8C%E5%85%A8%E3%81%AA%E5%8B%95%E4%BD%9C%E4%BE%8B%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82",children:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples)\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"/cache/develop/api-reference",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts",children:"\u3088\u308a\u9ad8\u5ea6\u306a\u30b3\u30fc\u30eb"}),"\u7528\u306e\u540c\u3058\u30bf\u30a4\u30d7\u306e\u30b3\u30fc\u30c9\u3092\u898b\u308b\u306b\u306f\u3001\u3053\u306e\u30ea\u30f3\u30af\u3092\u305f\u3069\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},2821:(e,n,t)=>{t(6540)},503:(e,n,t)=>{t.d(n,{F:()=>s});var i=t(1432),o=(t(6540),t(4848));const s=e=>{let{language:n,code:t}=e;return(0,o.jsx)(i.A,{language:n,children:t})}}}]);