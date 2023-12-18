"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4718],{3043:(e,t,a)=>{a(7294)},7235:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(614),c=a(7294);const i=e=>{let{language:t,code:a}=e;return c.createElement(n.Z,{language:t},a)}},7804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(7462),c=(a(7294),a(3905)),i=(a(3043),a(7235));const o={sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-swift",title:"Cheat Sheet for Swift",description:"Get started really quickly coding using Swift with Momento Cache"},l="Cheat Sheet for Swift with Momento Cache",s={unversionedId:"cache/develop/sdks/swift/cheat-sheet",id:"cache/develop/sdks/swift/cheat-sheet",title:"Cheat Sheet for Swift",description:"Get started really quickly coding using Swift with Momento Cache",source:"@site/docs/cache/develop/sdks/swift/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/swift",slug:"/cache/develop/sdks/swift/cheat-sheet",permalink:"/cache/develop/sdks/swift/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/swift/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-swift",title:"Cheat Sheet for Swift",description:"Get started really quickly coding using Swift with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Swift",permalink:"/cache/develop/sdks/swift/"},next:{title:"Ruby",permalink:"/cache/develop/sdks/ruby/"}},r={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a CacheClient",id:"set-up-a-cacheclient",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Delete a cache",id:"delete-a-cache",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Delete an item from a cache",id:"delete-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}],m={toc:h},d="wrapper";function u(e){let{components:t,...a}=e;return(0,c.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cheat-sheet-for-swift-with-momento-cache"},"Cheat Sheet for Swift with Momento Cache"),(0,c.kt)("p",null,"If you need to get going quickly with Swift and Momento Cache, this page contains the basic API calls you'll need. ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples"},"Check the Swift SDK examples")," for complete, working code samples."),(0,c.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,c.kt)("p",null,"The latest version of the Momento Swift SDK is available on GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift"},"momentohq/client-sdk-swift"),"."),(0,c.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,c.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,c.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,c.kt)("h2",{id:"set-up-a-cacheclient"},"Set up a CacheClient"),(0,c.kt)("p",null,"This code creates the CacheClient that you will use to call the other methods."),(0,c.kt)(i.Z,{language:"swift",code:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let cacheClient = CacheClient(\n        configuration: CacheClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider,\n        defaultTtlSeconds: 10\n    )\n} catch {\n    print("Unable to create cache client: \\(error)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,c.kt)("p",null,"Use this function to create a new cache in your account."),(0,c.kt)(i.Z,{language:"swift",code:'let result = await cacheClient.createCache(cacheName: cacheName)\nswitch result {\ncase .alreadyExists(_):\n    print("Cache already exists!")\ncase .success(_):\n    print("Successfully created the cache!")\ncase .error(let err):\n    print("Unable to create the cache: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"list-the-names-of-existing-caches-in-your-account"},"List the names of existing caches in your account"),(0,c.kt)("p",null,"A simple list of the names of caches for the account."),(0,c.kt)(i.Z,{language:"swift",code:'let result = await cacheClient.listCaches()\nswitch result {\ncase .success(let success):\n    print("Successfully created fetched list of caches: \\(success.caches.map { $0.name })")\ncase .error(let err):\n    print("Unable to fetch list of caches: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"delete-a-cache"},"Delete a cache"),(0,c.kt)("p",null,"Use this function to delete a cache from your account."),(0,c.kt)(i.Z,{language:"swift",code:'let result = await cacheClient.deleteCache(cacheName: cacheName)\nswitch result {\ncase .success(let success):\n    print("Successfully deleted the cache")\ncase .error(let err):\n    print("Unable to delete cache: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,c.kt)("p",null,"A simple example of doing a set operation. In the CacheClient.set() call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,c.kt)(i.Z,{language:"swift",code:'let result = await cacheClient.set(\n    cacheName: cacheName,\n    key: "key",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully set item in the cache")\ncase .error(let err):\n    print("Unable to set item in the cache: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,c.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,c.kt)(i.Z,{language:"swift",code:'let result = await cacheClient.get(\n    cacheName: cacheName,\n    key: "key"\n)\nswitch result {\ncase .hit(let hit):\n    print("Cache hit: \\(hit.valueString)")\ncase .miss(_):\n    print("Cache miss")\ncase .error(let err):\n    print("Unable to get item in the cache: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"delete-an-item-from-a-cache"},"Delete an item from a cache"),(0,c.kt)("p",null,"This is an example of deleting an item from a cache."),(0,c.kt)(i.Z,{language:"swift",code:'let result = await cacheClient.delete(\n    cacheName: cacheName,\n    key: "key"\n)\nswitch result {\ncase .success(_):\n    print("Successfully deleted item in the cache")\ncase .error(let err):\n    print("Unable to delete item in the cache: \\(err)")\n    exit(1)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,c.kt)("h2",{id:"running-the-code"},"Running the code"),(0,c.kt)("p",null,"You can find complete, working examples in the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-swift/tree/main/examples"},"Swift SDK GitHub repo examples directory"),"."),(0,c.kt)("admonition",{type:"info"},(0,c.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,c.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")))}u.isMDXComponent=!0}}]);