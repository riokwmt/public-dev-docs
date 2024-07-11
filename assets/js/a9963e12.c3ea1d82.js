"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1553],{7:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(4848),c=n(8453),a=(n(2821),n(503));const s={sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Swift for iOS",description:"Learn the basic building blocks for writing Swift code to interact with Momento Cache in your native iOS applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","swift","ios","mobile"]},o="Getting Started with Momento Cache in Swift",r={id:"sdks/swift/cache",title:"Getting started with Momento Cache in Swift for iOS",description:"Learn the basic building blocks for writing Swift code to interact with Momento Cache in your native iOS applications.",source:"@site/docs/sdks/swift/cache.mdx",sourceDirName:"sdks/swift",slug:"/sdks/swift/cache",permalink:"/sdks/swift/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/swift/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in Swift for iOS",description:"Learn the basic building blocks for writing Swift code to interact with Momento Cache in your native iOS applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","swift","ios","mobile"]}},l={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a CacheClient",id:"set-up-a-cacheclient",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Delete a cache",id:"delete-a-cache",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Delete an item from a cache",id:"delete-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started-with-momento-cache-in-swift",children:"Getting Started with Momento Cache in Swift"}),"\n",(0,i.jsxs)(t.p,{children:["If you need to get going quickly with Swift and Momento Cache, this page contains the basic API calls you'll need. ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-swift/tree/main/Examples",children:"Check the Swift SDK examples"})," for complete, working code samples."]}),"\n",(0,i.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The latest version of the Momento Swift SDK is available on GitHub: ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-swift",children:"momentohq/client-sdk-swift"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"get-your-momento-api-key",children:"Get your Momento API key"}),"\n",(0,i.jsxs)(t.p,{children:["You'll need a Momento API key. You can get one from the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-cacheclient",children:"Set up a CacheClient"}),"\n",(0,i.jsx)(t.p,{children:"This code creates the CacheClient that you will use to call the other methods."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let cacheClient = CacheClient(\n        configuration: CacheClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider,\n        defaultTtlSeconds: 10\n    )\n} catch {\n    print("Unable to create cache client: \\(error)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,i.jsx)(t.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'let result = await cacheClient.createCache(cacheName: cacheName)\nswitch result {\ncase .alreadyExists(_):\n    print("Cache already exists!")\ncase .success(_):\n    print("Successfully created the cache!")\ncase .error(let err):\n    print("Unable to create the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"list-the-names-of-existing-caches-in-your-account",children:"List the names of existing caches in your account"}),"\n",(0,i.jsx)(t.p,{children:"A simple list of the names of caches for the account."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'let result = await cacheClient.listCaches()\nswitch result {\ncase .success(let success):\n    print("Successfully fetched list of caches: \\(success.caches.map { $0.name })")\ncase .error(let err):\n    print("Unable to fetch list of caches: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"delete-a-cache",children:"Delete a cache"}),"\n",(0,i.jsx)(t.p,{children:"Use this function to delete a cache from your account."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'let result = await cacheClient.deleteCache(cacheName: cacheName)\nswitch result {\ncase .success(let success):\n    print("Successfully deleted the cache")\ncase .error(let err):\n    print("Unable to delete cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,i.jsx)(t.p,{children:"A simple example of doing a set operation. In the CacheClient.set() call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'let result = await cacheClient.set(\n    cacheName: cacheName,\n    key: "key",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully set item in the cache")\ncase .error(let err):\n    print("Unable to set item in the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,i.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'let result = await cacheClient.get(\n    cacheName: cacheName,\n    key: "key"\n)\nswitch result {\ncase .hit(let hit):\n    print("Cache hit: \\(hit.valueString)")\ncase .miss(_):\n    print("Cache miss")\ncase .error(let err):\n    print("Unable to get item in the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"delete-an-item-from-a-cache",children:"Delete an item from a cache"}),"\n",(0,i.jsx)(t.p,{children:"This is an example of deleting an item from a cache."}),"\n",(0,i.jsx)(a.F,{language:"swift",code:'let result = await cacheClient.delete(\n    cacheName: cacheName,\n    key: "key"\n)\nswitch result {\ncase .success(_):\n    print("Successfully deleted item in the cache")\ncase .error(let err):\n    print("Unable to delete item in the cache: \\(err)")\n    exit(1)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,i.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-swift/tree/main/examples",children:"Swift SDK GitHub repo examples directory"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>a});var i=n(1432),c=(n(6540),n(4848));const a=e=>{let{language:t,code:n}=e;return(0,c.jsx)(i.A,{language:t,children:n})}}}]);