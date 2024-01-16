"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5688],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(614),a=n(7294);const i=e=>{let{language:t,code:n}=e;return a.createElement(o.Z,{language:t},n)}},3699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var o=n(7462),a=(n(7294),n(3905)),i=(n(3043),n(7235));const c={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Kotlin",description:"Get started really quickly coding using Kotlin with Momento Cache"},s="Cheat Sheet for Kotlin with Momento Cache",r={unversionedId:"cache/develop/sdks/kotlin/cheat-sheet",id:"cache/develop/sdks/kotlin/cheat-sheet",title:"Cheat Sheet for Kotlin",description:"Get started really quickly coding using Kotlin with Momento Cache",source:"@site/docs/cache/develop/sdks/kotlin/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/kotlin",slug:"/cache/develop/sdks/kotlin/cheat-sheet",permalink:"/cache/develop/sdks/kotlin/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/kotlin/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Kotlin",description:"Get started really quickly coding using Kotlin with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Kotlin",permalink:"/cache/develop/sdks/kotlin/"},next:{title:"Dart",permalink:"/cache/develop/sdks/dart/"}},l={},h=[{value:"Install the Momento client library",id:"install-the-momento-client-library",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Set up your auth token",id:"set-up-your-auth-token",level:2},{value:"Import libraries and connect to return a CacheClient object",id:"import-libraries-and-connect-to-return-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],d={toc:h},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cheat-sheet-for-kotlin-with-momento-cache"},"Cheat Sheet for Kotlin with Momento Cache"),(0,a.kt)("p",null,"If you need to get going quickly with Kotlin and Momento Cache, this page contains the basic API calls you'll need. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Check the Kotlin SDK examples")," for complete, working examples including build configuration files."),(0,a.kt)("h2",{id:"install-the-momento-client-library"},"Install the Momento client library"),(0,a.kt)("p",null,"Install the client library in an existing Kotlin project:"),(0,a.kt)("h3",{id:"gradle"},"Gradle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("software.momento.kotlin:sdk:0.1.3")\n')),(0,a.kt)("h3",{id:"maven"},"Maven"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>software.momento.kotlin</groupId>\n    <artifactId>sdk</artifactId>\n    <version>0.1.3</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"set-up-your-auth-token"},"Set up your auth token"),(0,a.kt)("p",null,"You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,a.kt)("h2",{id:"import-libraries-and-connect-to-return-a-cacheclient-object"},"Import libraries and connect to return a CacheClient object"),(0,a.kt)("p",null,"This code sets up the main function, the necessary imports, and the CacheClient instantiation that each of the other functions will need to call."),(0,a.kt)(i.Z,{language:"kotlin",code:'package software.momento.example.doc_examples\n\nimport kotlinx.coroutines.runBlocking\nimport software.momento.kotlin.sdk.CacheClient\nimport software.momento.kotlin.sdk.auth.CredentialProvider\nimport software.momento.kotlin.sdk.config.Configurations\nimport software.momento.kotlin.sdk.responses.cache.GetResponse\nimport kotlin.time.Duration.Companion.seconds\n\nfun main() = runBlocking {\n    CacheClient(\n        CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n        Configurations.Laptop.latest,\n        60.seconds\n    ).use { client ->\n        //...\n    }\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,a.kt)("p",null,"Use this function to create a new cache in your account."),(0,a.kt)(i.Z,{language:"kotlin",code:'when (val response = cacheClient.createCache("test-cache")) {\n    is CacheCreateResponse.Success -> println("Cache \'test-cache\' created")\n    is CacheCreateResponse.AlreadyExists -> println("Cache \'test-cache\' already exists")\n    is CacheCreateResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to create cache \'test-cache\': ${response.errorCode}", response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,a.kt)("p",null,"A simple list of the names of caches for the account."),(0,a.kt)(i.Z,{language:"kotlin",code:'when (val response: CacheListResponse = cacheClient.listCaches()) {\n    is CacheListResponse.Success -> {\n        val caches: String = response.caches.joinToString("\\n") { cacheInfo -> cacheInfo.name }\n        println("Caches:\\n$caches")\n    }\n\n    is CacheListResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to list caches: ${response.errorCode}", response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,a.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,a.kt)(i.Z,{language:"kotlin",code:'when (val response = cacheClient.set("test-cache", "test-key", "test-value")) {\n    is SetResponse.Success -> println("Key \'test-key\' stored successfully")\n    is SetResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': ${response.errorCode}",\n        response\n    )\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,a.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,a.kt)(i.Z,{language:"kotlin",code:"when (val response = cacheClient.get(\"test-cache\", \"test-key\")) {\n    is GetResponse.Hit -> println(\"Retrieved value for key 'test-key': ${response.value}\")\n    is GetResponse.Miss -> println(\"Key 'test-key' was not found in cache 'test-cache'\")\n    is GetResponse.Error -> throw RuntimeException(\n        \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${response.errorCode}\",\n        response\n    )\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"running-the-code"},"Running the code"),(0,a.kt)("p",null,"You can find complete, working examples in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples"},"Kotlin SDK github repo examples directory"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")))}p.isMDXComponent=!0}}]);