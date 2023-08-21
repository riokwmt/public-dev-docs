"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:10,sidebar_label:"Deno",title:"Integrating Momento Cache with Deno",description:"Learn to deploy a Deno project that uses Momento Cache",pagination_next:null},i=void 0,l={unversionedId:"develop/integrations/deno",id:"develop/integrations/deno",title:"Integrating Momento Cache with Deno",description:"Learn to deploy a Deno project that uses Momento Cache",source:"@site/docs/develop/integrations/deno.md",sourceDirName:"develop/integrations",slug:"/develop/integrations/deno",permalink:"/develop/integrations/deno",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/integrations/deno.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Deno",title:"Integrating Momento Cache with Deno",description:"Learn to deploy a Deno project that uses Momento Cache",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Fastly",permalink:"/develop/integrations/fastly"}},p={},s=[{value:"Momento Web SDK vs HTTP API",id:"momento-web-sdk-vs-http-api",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Momento Setup",id:"momento-setup",level:3},{value:"Deno and Deno Deploy Setup",id:"deno-and-deno-deploy-setup",level:3},{value:"Using the Momento HTTP API",id:"using-the-momento-http-api",level:2},{value:"Using the Momento Web SDK",id:"using-the-momento-web-sdk",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno")," is a JavaScript, TypeScript, and WebAssembly runtime with secure defaults and ",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy"},"Deno Deploy")," is their corresponding serverless edge worker platform."),(0,a.kt)("p",null,"In this tutorial, we'll walk through two ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno"},"examples")," from our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"JavaScript Web SDK"),". By the end of the exercise, you'll have a Deno project that interacts with Momento Cache through the Web SDK or the HTTP API to get, set, and delete some data."),(0,a.kt)("h3",{id:"momento-web-sdk-vs-http-api"},"Momento Web SDK vs HTTP API"),(0,a.kt)("p",null,"There are a few reasons why you might choose one over the other when interacting with Momento Cache within Deno."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The HTTP API is lightweight in that you won't need any additional dependencies beyond what Deno requires and you can use the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," HTTP client methods. However, it only provides a basic subset of all of the Momento APIs, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),", and is currently only available if you use AWS as your cloud provider.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Web SDK is heavier-weight; you need to add a dependency on the SDK. However, it supports the full Momento API (including collections like Dictionaries and SortedSets, plus the ability to publish to Momento Topics). It also has a complete TypeScript/JavaScript API that makes it simpler to write code to interact with Momento. This can save you time and effort when developing your Worker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Additionally, Deno Deploy does not yet support ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/manual@v1.36.1/node/npm_specifiers"},"npm specifiers")," which is how our example pulls in the Web SDK and its dependencies. For now, only our HTTP API example can be published using Deno Deploy."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To get this app deployed and running, you'll need to have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An account with a Git provider such as ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub"),", ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.com"},"GitLab"),", or ",(0,a.kt)("a",{parentName:"li",href:"https://bitbucket.org/"},"Bitbucket"),"."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://deno.com/deploy"},"Deno Deploy")," account."),(0,a.kt)("li",{parentName:"ul"},"A copy or fork of the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript"},"Momento JavaScript SDK")," in your personal repositories.")),(0,a.kt)("h3",{id:"momento-setup"},"Momento Setup"),(0,a.kt)("p",null,"Once you have a copy or fork of the Momento JavaScript SDK in your Git provider account, you're ready to configure the Momento side of things using the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Cache")," button on the top right of the page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Cache button",src:n(6923).Z,width:"336",height:"258"})),(0,a.kt)("p",null,"Create a cache called ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," using AWS. Currently, the Momento HTTP API is supported only by AWS, but you can create the cache in any of the supported AWS regions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create cache form",src:n(1671).Z,width:"1920",height:"694"})),(0,a.kt)("p",null,"After pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," button you'll see the new ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," cache in the list of available caches."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New cache",src:n(6205).Z,width:"1916",height:"472"})),(0,a.kt)("p",null,"Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento authentication token in the next step. "),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"tokens")," page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained token that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations, such as creating or deleting a cache. This is especially helpful if you want to manage the security of control plane and data plane operations separately."),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fine-Grained Access Token")," token type, select ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache Name")," from the drop down, and ",(0,a.kt)("inlineCode",{parentName:"p"},"readwrite")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Role Type"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Super User Token")," is used for managing control plane operations. More information about Momento authentication can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/develop/basics/working-with-momento-auth-tokens"},"here"),". Hit the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Token")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generate token",src:n(4453).Z,width:"3448",height:"1916"})),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth Token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Endpoint")," and save it in a safe place. You'll need to use it later to configure your Deno Deploy deployment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generated token",src:n(2770).Z,width:"1679",height:"174"})),(0,a.kt)("h3",{id:"deno-and-deno-deploy-setup"},"Deno and Deno Deploy Setup"),(0,a.kt)("p",null,"Once you have created your ",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy"},"Deno Deploy")," account, you're ready to configure the Deno side of things."),(0,a.kt)("p",null,"First, you'll want to create a personal access token in ",(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/account#access-tokens"},"the Deno console"),". Make sure to save this token in a safe place."),(0,a.kt)("p",null,"Second, you'll want to navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/projects"},'"Projects" page'),', click on "New Project", then click on the link that says "get started with an empty project using deployctl". The project name should be a couple of strings and a number, such as "lucky-spider-92".'),(0,a.kt)("p",null,"Third, ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/manual@v1.36.1/getting_started/installation"},"install deno")," using your preferred method."),(0,a.kt)("p",null,"Fourth, install ",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy/docs/deployctl"},(0,a.kt)("inlineCode",{parentName:"a"},"deployctl"))," for deploying your Deno project from the command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts\n")),(0,a.kt)("p",null,"You may also need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"deployctl")," to your PATH:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export PATH="/Users/<your-username>/.deno/bin:$PATH"\n')),(0,a.kt)("h2",{id:"using-the-momento-http-api"},"Using the Momento HTTP API"),(0,a.kt)("p",null,"First navigate to the deno HTTP API example directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd client-sdk-javascript/examples/deno/http-api\n")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file and provide the name of your Momento Cache, the corresponding fine-grained access token, and the HTTP endpoint associated with your token. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'MOMENTO_AUTH_TOKEN="<your-auth-token>"\nMOMENTO_CACHE_NAME="<your-cache-name>"\nMOMENTO_HTTP_ENDPOINT="<your-http-endpoint>"\n')),(0,a.kt)("p",null,"Run the program locally then checkout http://localhost:8000 in your browser to make sure it's working:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deno task start\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/http-api/index.ts"},"example code")," sets an item in the cache, gets it, deletes it, and returns an HTML response.\nIt uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/deno/http-api/index.ts#L10"},(0,a.kt)("inlineCode",{parentName:"a"},"MomentoFetcher")," class")," which provides a small wrapper that adds some error handling to the basic fetch calls to the Momento HTTP API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  const momento = new MomentoFetcher(authToken, endpoint)\n\n  await momento.set(cacheName, key, value, 10)\n  console.log(`Set the key-value pair in the cache ${cacheName}`)\n\n  const getRespAfterSet = await momento.get(cacheName, key)\n  console.log(`Fetching the key after setting the value: ${getRespAfterSet}`)\n\n  await momento.delete(cacheName, key)\n  console.log(`Deleted the key-value pair from the cache ${cacheName}`)\n\n  return new Response(\n    `Tested the Momento cache using: <br /> Key: ${key} | Value: ${value}`,\n    {\n      status: 200,\n      headers: new Headers({\n        'Content-Type': 'text/html; charset=utf-8',\n      }),\n    },\n  )\n")),(0,a.kt)("p",null,"When you're ready to deploy, provide your project name and Deno Deploy access token and use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'deployctl deploy --project="<your-project-name>" --token="<your-deno-token>" index.ts\n')),(0,a.kt)("p",null,"This command will upload all files from your curent directory, including the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. If you prefer, you can set ",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy/docs/environment-variables"},"environment variables")," using the Deno Deploy console instead. More information about using the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployctl")," command can be found ",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy/docs/deployctl"},"here"),"."),(0,a.kt)("p",null,"Your deployed project will be published to a URL that begins with your project name, such as ",(0,a.kt)("a",{parentName:"p",href:"https://lucky-spider-92.deno.dev/"},"https://lucky-spider-92.deno.dev/"),". This URL can be easily shared with others to show what you've built!"),(0,a.kt)("h2",{id:"using-the-momento-web-sdk"},"Using the Momento Web SDK"),(0,a.kt)("p",null,"First navigate to the deno Web SDK example directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd client-sdk-javascript/examples/deno/web-sdk\n")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file and provide the name of your Momento Cache and a corresponding fine-grained access token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'MOMENTO_AUTH_TOKEN="<your-auth-token>"\nMOMENTO_CACHE_NAME="<your-cache-name>"\n')),(0,a.kt)("p",null,"Run the program locally then checkout http://localhost:8000 in your browser to make sure it's working:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deno task start\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/web-sdk/index.ts"},"example code")," instantiates a Momento CacheClient, sets an item in the cache, gets it, deletes it, and returns a basic response. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  const momento = new CacheClient({\n    configuration: Configurations.Browser.v1(),\n    credentialProvider: CredentialProvider.fromString({\n      authToken: env['MOMENTO_AUTH_TOKEN'],\n    }),\n    defaultTtlSeconds: 60,\n  })\n\n  const cacheName = env['MOMENTO_CACHE_NAME']\n\n  console.log('Storing key=foo, value=FOO')\n  const setResponse = await momento.set(cacheName, 'foo', 'FOO')\n  const getResponse = await momento.get(cacheName, 'foo')\n  const deleteResponse = await momento.delete(cacheName, 'foo')\n\n  return new Response(getResponse.body, {\n    status: getResponse.status,\n    headers: {\n      'content-type': 'application/json',\n    },\n  })\n")),(0,a.kt)("p",null,"When you're ready to deploy, you can follow one of Deno's ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/manual@v1.36.1/advanced/deploying_deno"},"deployment guides"),". Deno Deploy does not yet support npm specifiers so this example can't be deployed there. "),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Deno and Deno Deploy. Feel free to dive further into the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno"},"example code"),". We hope you'll also enjoy the simplicity of Momento Cache, as you don't have to manage and provision any infrastructure to get up and running."))}d.isMDXComponent=!0},6205:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-caches-worker-f6fe32f41cabf1c18025d4d7e0862f04.png"},6923:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},1671:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-create-worker-cache-form-25675fe8e7d0bc42ae1673e102922af3.png"},4453:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/fgac-worker-auth-af9973e1c699bfcaba61714a2e6feb7e.png"},2770:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/http-endpoint-auth-token-15c123b5fd7ee29f4fd248dfa886ad57.png"}}]);