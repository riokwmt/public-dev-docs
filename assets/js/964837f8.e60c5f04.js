"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7013],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(614),o=n(7294);const c=e=>{let{language:t,code:n}=e;return o.createElement(a.Z,{language:t},n)}},4400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),c=(n(3043),n(7235));const i={sidebar_position:1,sidebar_label:"Cache Cheat Sheet",title:"Cheat sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Cache"},r="Cheat sheet for Node.js with Momento Cache",s={unversionedId:"cache/develop/sdks/nodejs/cheat-sheet",id:"cache/develop/sdks/nodejs/cheat-sheet",title:"Cheat sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Cache",source:"@site/docs/cache/develop/sdks/nodejs/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/nodejs",slug:"/cache/develop/sdks/nodejs/cheat-sheet",permalink:"/cache/develop/sdks/nodejs/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/nodejs/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache Cheat Sheet",title:"Cheat sheet for TypeScript and Node.js",description:"Get started really quickly coding using TypeScript and Node.js with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/cache/develop/sdks/nodejs/"},next:{title:"Observability",permalink:"/cache/develop/sdks/nodejs/observability"}},l={},h=[{value:"Install the Momento client library",id:"install-the-momento-client-library",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a CacheClient object",id:"import-libraries-and-create-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:h},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cheat-sheet-for-nodejs-with-momento-cache"},"Cheat sheet for Node.js with Momento Cache"),(0,o.kt)("p",null,"If you need to get going quickly with Node.js + TypeScript and Momento Cache, this page contains the basic API calls you'll need. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/cache"},"Check the Node.js SDK examples")," for complete, working examples including build configuration files."),(0,o.kt)("h2",{id:"install-the-momento-client-library"},"Install the Momento client library"),(0,o.kt)("p",null,"Install the client library in an existing Node.js project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,o.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,o.kt)("p",null,"You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,o.kt)("h2",{id:"import-libraries-and-create-a-cacheclient-object"},"Import libraries and create a CacheClient object"),(0,o.kt)("p",null,"This code sets up the main function, pulls in the necessary imports, and instantiates the CacheClient that will be used to interact with your cache."),(0,o.kt)(c.Z,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {CacheGet, CreateCache, CacheSet, CacheClient, Configurations, CredentialProvider} from '@gomomento/sdk';\n\nasync function main() {\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 60,\n  });\n}\n\nmain().catch(e => {\n  console.error(`Uncaught exception while running example: ${JSON.stringify(e)}`);\n  throw e; // Depending on the environment, this might not be necessary.\n});\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,o.kt)("p",null,"Use this function to create a new cache in your account."),(0,o.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.createCache('test-cache');\nif (result instanceof CreateCache.Success) {\n  console.log(\"Cache 'test-cache' created\");\n} else if (result instanceof CreateCache.AlreadyExists) {\n  console.log(\"Cache 'test-cache' already exists\");\n} else if (result instanceof CreateCache.Error) {\n  throw new Error(\n    `An error occurred while attempting to create cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,o.kt)("p",null,"A simple list of the names of caches for the account."),(0,o.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.listCaches();\nif (result instanceof ListCaches.Success) {\n  console.log(\n    `Caches:\\n${result\n      .getCaches()\n      .map(c => c.getName())\n      .join('\\n')}\\n\\n`\n  );\n} else if (result instanceof ListCaches.Error) {\n  throw new Error(`An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`);\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,o.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,o.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,o.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,o.kt)(c.Z,{language:"javascript",code:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"running-the-code"},"Running the code"),(0,o.kt)("p",null,"You can find complete, working examples in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples"},"JavaScript SDK GitHub repo examples directory"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls."),(0,o.kt)("p",{parentName:"admonition"},"Follow this link to see this same type of code but for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/advanced.ts"},"more advanced calls"),".")))}p.isMDXComponent=!0}}]);