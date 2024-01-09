"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8488],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(614),i=o(7294);const s=e=>{let{language:t,code:o}=e;return i.createElement(n.Z,{language:t},o)}},1611:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(7462),i=(o(7294),o(3905)),s=(o(3043),o(7235));const a={sidebar_position:2,sidebar_label:"Topics Cheat Sheet",title:"Topics cheat sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Topics"},r="Cheat sheet for Node.js with Momento Topics",c={unversionedId:"topics/develop/sdks/nodejs/cheat-sheet",id:"topics/develop/sdks/nodejs/cheat-sheet",title:"Topics cheat sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Topics",source:"@site/docs/topics/develop/sdks/nodejs/cheat-sheet.mdx",sourceDirName:"topics/develop/sdks/nodejs",slug:"/topics/develop/sdks/nodejs/cheat-sheet",permalink:"/topics/develop/sdks/nodejs/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/nodejs/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Topics Cheat Sheet",title:"Topics cheat sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Topics"},sidebar:"topicsSidebar",previous:{title:"Node.js",permalink:"/topics/develop/sdks/nodejs/"},next:{title:"Observability",permalink:"/topics/develop/sdks/nodejs/observability"}},l={},p=[{value:"Install the Momento client library",id:"install-the-momento-client-library",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a TopicClient object",id:"import-libraries-and-create-a-topicclient-object",level:2},{value:"Subscribe and publish a message to a topic",id:"subscribe-and-publish-a-message-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cheat-sheet-for-nodejs-with-momento-topics"},"Cheat sheet for Node.js with Momento Topics"),(0,i.kt)("p",null,"If you need to get going quickly with Node.js + TypeScript and Momento Topics, this page contains the basic API calls you'll need. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/topics"},"Check the Node.js SDK examples")," for complete, working examples including build configuration files."),(0,i.kt)("h2",{id:"install-the-momento-client-library"},"Install the Momento client library"),(0,i.kt)("p",null,"Install the client library in an existing Node.js project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,i.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,i.kt)("p",null,"You'll need a ",(0,i.kt)("a",{parentName:"p",href:"./../../authentication/api-keys"},"Momento API key")," to authenticate with Momento. You can get one, preferably a fine-grained token, from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have a token, store it in an environment variable so that the Momento client can consume it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,i.kt)("h2",{id:"import-libraries-and-create-a-topicclient-object"},"Import libraries and create a TopicClient object"),(0,i.kt)("p",null,"This code sets up the main function, pulls in the necessary imports, and instantiates the TopicClient that will be used to interact with your pub/sub topic."),(0,i.kt)(s.Z,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {TopicClient, TopicConfigurations, CredentialProvider} from '@gomomento/sdk';\n\nfunction main() {\n  const cacheClient = new TopicClient({\n    configuration: TopicConfigurations.Default.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n  });\n}\n\ntry {\n  main();\n} catch (e) {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e;\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"subscribe-and-publish-a-message-to-a-topic"},"Subscribe and publish a message to a topic"),(0,i.kt)("p",null,'This example subscribes to a topic called "test-topic" in the Momento Cache named "test-cache", then it publishes to the topic if the subscription is successful.'),(0,i.kt)(s.Z,{language:"javascript",code:"const result = await topicClient.subscribe('test-cache', 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Publishing values to the topic 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  // Publish a value\n  await topicClient.publish('test-cache', 'test-topic', 'test-value');\n\n  // Wait for published values to be received.\n  setTimeout(() => {\n    console.log('Waiting for the published values');\n  }, 2000);\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"running-the-code"},"Running the code"),(0,i.kt)("p",null,"You can find complete, working examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples"},"JavaScript SDK GitHub repo examples directory"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,i.kt)("a",{parentName:"p",href:"./../../api-reference"},"API reference page")," for more information on the full assortment of Momento API calls."),(0,i.kt)("p",{parentName:"admonition"},"Follow this link to see this same type of code but for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts"},"more advanced calls"),".")))}h.isMDXComponent=!0}}]);