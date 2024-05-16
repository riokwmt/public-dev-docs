"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7495],{3043:(e,o,t)=>{t(7294)},7235:(e,o,t)=>{t.d(o,{Z:()=>a});var n=t(614),s=t(7294);const a=e=>{let{language:o,code:t}=e;return s.createElement(n.Z,{language:o},t)}},4544:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(7462),s=(t(7294),t(3905)),a=(t(3043),t(7235));const i={sidebar_position:6,sidebar_label:"Compression",title:"Using compression in your Momento Node.js code",description:"Learn how to compress your data when using the Momento Node.js SDK",keywords:["momento","cache","configuration","sdk","production ready","typescript","node.js","nodejs","javascript","compression","gzip","zstd"]},r="Using Compression in the Momento Node.js SDK",c={unversionedId:"sdks/nodejs/compression",id:"sdks/nodejs/compression",title:"Using compression in your Momento Node.js code",description:"Learn how to compress your data when using the Momento Node.js SDK",source:"@site/docs/sdks/nodejs/compression.mdx",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/compression",permalink:"/sdks/nodejs/compression",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/compression.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Compression",title:"Using compression in your Momento Node.js code",description:"Learn how to compress your data when using the Momento Node.js SDK",keywords:["momento","cache","configuration","sdk","production ready","typescript","node.js","nodejs","javascript","compression","gzip","zstd"]}},d={},l=[{value:"Why Compression?",id:"why-compression",level:2},{value:"Enabling Compression",id:"enabling-compression",level:2},{value:"Compressing your data",id:"compressing-your-data",level:2},{value:"Automatic Decompression",id:"automatic-decompression",level:2},{value:"More Examples",id:"more-examples",level:2}],p={toc:l};function m(e){let{components:o,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-compression-in-the-momento-nodejs-sdk"},"Using Compression in the Momento Node.js SDK"),(0,s.kt)("h2",{id:"why-compression"},"Why Compression?"),(0,s.kt)("p",null,"If your cache data consists of large string values, especially those that can be repetitive like JSON, enabling client-side\ncompression may reduce the size of the data that you are transferring to and from Momento by as much as 90%. This can\nresult in significant cost savings due to reduced network traffic and storage costs."),(0,s.kt)("h2",{id:"enabling-compression"},"Enabling Compression"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"get"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"getBatch"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"setBatch")," cache methods in the Momento Node.js SDK support compression. To avoid requiring\nadditional dependencies in the main SDK, compression support is provided by installing an extension package. We provide\ntwo different extension packages that you can choose from, both available on npmjs.com:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@gomomento/sdk-nodejs-compression"},"@gomomento/sdk-nodejs-compression")," - the default, recommended compression extension, which is based on ",(0,s.kt)("inlineCode",{parentName:"li"},"gzip"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@gomomento/sdk-nodejs-compression-zstd"},"@gomomento/sdk-nodejs-compression-zstd")," - an alternative compression extension, based on ",(0,s.kt)("inlineCode",{parentName:"li"},"zstd"),", for advanced users who\nare willing to tackle a slightly more difficult packaging configuration in exchange for improved performance.")),(0,s.kt)("p",null,"Because ",(0,s.kt)("inlineCode",{parentName:"p"},"gzip")," is available in the node.js standard library, there are no additional dependencies required, so packaging\nyour app will be the same as any other Momento node.js app. The ",(0,s.kt)("inlineCode",{parentName:"p"},"zstd")," extension requires an additional native dependency\nthat is specific to your target platform, so you will need to make sure that your builds are configured to include the\ncorrect dependency for the target architecture."),(0,s.kt)("p",null,"In our testing we found that, for typical JSON data being stored in a Momento cache, the compression ratio is very similar\nbetween the ",(0,s.kt)("inlineCode",{parentName:"p"},"gzip")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"zstd")," compression extensions. However, for very large values (100kb or larger), ",(0,s.kt)("inlineCode",{parentName:"p"},"zstd")," can provide\nup to a 20% performance improvement in the time that it takes to compress and decompress the data."),(0,s.kt)("p",null,"If you're not sure which extension is right for you, we recommend starting with the default\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk-nodejs-compression"},"@gomomento/sdk-nodejs-compression")," package. You can\nswitch to ",(0,s.kt)("inlineCode",{parentName:"p"},"zstd")," later if you find that you need the additional performance."),(0,s.kt)("p",null,"To get started with compression, first add the compression extension package to your project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk-nodejs-compression\n")),(0,s.kt)("p",null,"Once that is installed, you can enable compression by adding a compression strategy to the cache client configuration:"),(0,s.kt)(a.Z,{language:"javascript",code:"Configurations.InRegion.Default.latest().withCompressionStrategy({\n  compressorFactory: CompressorFactory.default(),\n  compressionLevel: CompressionLevel.Balanced,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("h2",{id:"compressing-your-data"},"Compressing your data"),(0,s.kt)("p",null,"With the dependency installed and the client configured, you can specify ",(0,s.kt)("inlineCode",{parentName:"p"},"compress: true")," when calling set or setBatch to compress that value:"),(0,s.kt)(a.Z,{language:"javascript",code:"const result = await cacheClient.set(cacheName, 'test-key', 'test-value', {compress: true});\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("h2",{id:"automatic-decompression"},"Automatic Decompression"),(0,s.kt)("p",null,"By default, when you enable compression, the SDK also enables automatic decompression. This means that any cache value that\nthe SDK reads via ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"getBatch")," will be automatically decompressed if it was compressed when it was written. Therefore,\nyou don't need to change any of your existing calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"getBatch")," to handle compressed data."),(0,s.kt)("p",null,"If you want to be able to compress data, but don't want the SDK to automatically decompress it, you can also configure that:"),(0,s.kt)(a.Z,{language:"javascript",code:"Configurations.InRegion.Default.latest().withCompressionStrategy({\n  compressorFactory: CompressorFactory.default(),\n  compressionLevel: CompressionLevel.Balanced,\n  automaticDecompression: AutomaticDecompression.Disabled,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("p",null,"If automatic decompression is disabled, you can specify ",(0,s.kt)("inlineCode",{parentName:"p"},"decompress: true")," when calling ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"getBatch")," to tell the\nSDK to decompress that particular value:"),(0,s.kt)(a.Z,{language:"javascript",code:"const result = await cacheClient.get(cacheName, 'test-key', {decompress: true});\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(`Key 'test-key' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("p",null,"Uncompressed data will be unaffected by the compression configuration."),(0,s.kt)("h2",{id:"more-examples"},"More Examples"),(0,s.kt)("p",null,"Here are some additional examples available in the SDK github repository:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/compression"},"Working example of using the default compression extension")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/compression-zstd"},"Working example of using the advanced ",(0,s.kt)("inlineCode",{parentName:"a"},"zstd")," compression extension")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/aws/lambda-examples/advanced-compression"},"An AWS Lambda example that demonstrates how to package the ",(0,s.kt)("inlineCode",{parentName:"a"},"zstd")," binary for your specific target architecture"))))}m.isMDXComponent=!0}}]);