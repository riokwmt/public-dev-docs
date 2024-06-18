"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6165],{43:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(4848),r=n(8453);const a={sidebar_position:8,sidebar_label:"Cloudflare",title:"Integrating Momento with your Cloudflare worker",description:"Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK"},s=void 0,i={id:"cache/integrations/cloudflare",title:"Integrating Momento with your Cloudflare worker",description:"Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK",source:"@site/docs/cache/integrations/cloudflare.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/cloudflare",permalink:"/cache/integrations/cloudflare",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/cloudflare.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Cloudflare",title:"Integrating Momento with your Cloudflare worker",description:"Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK"},sidebar:"tutorialSidebar",previous:{title:"Vercel",permalink:"/cache/integrations/vercel-integration"},next:{title:"Unity",permalink:"/cache/integrations/unity-integration"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying with Cloudflare",id:"deploying-with-cloudflare",level:2},{value:"Using the Momento HTTP API",id:"using-the-momento-http-api",level:3},{value:"Using the Momento Web SDK",id:"using-the-momento-web-sdk",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare Workers"})," is a popular platform for deploying and running serverless code."]}),"\n",(0,t.jsxs)(o.p,{children:["In this tutorial, we'll make use of two ",(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers",children:"examples"})," from our ",(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"JavaScript SDK"}),". By the end of the exercise, you'll have a Cloudflare worker that interacts with Momento Cache to populate and retrieve data."]}),"\n",(0,t.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(o.p,{children:"To get this app deployed and running, you'll need to have the following available:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["An account with a Git provider such as ",(0,t.jsx)(o.a,{href:"https://github.com/",children:"GitHub"}),", ",(0,t.jsx)(o.a,{href:"https://gitlab.com",children:"GitLab"}),", or ",(0,t.jsx)(o.a,{href:"https://bitbucket.org/",children:"Bitbucket"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["A ",(0,t.jsx)(o.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare"})," account."]}),"\n",(0,t.jsxs)(o.li,{children:["A copy or fork of the ",(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"Momento JavaScript SDK"})," in your personal repositories."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Once you have a Cloudflare account and a copy or fork of the Momento JavaScript SDK in your Git provider account, you're ready to configure the Momento side of things using the ",(0,t.jsx)(o.a,{href:"https://console.gomomento.com",children:"Momento console"}),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,t.jsx)(o.code,{children:"Create Cache"})," button on the top right of the page:"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Create Cache button",src:n(2432).A+"",width:"336",height:"258"})}),"\n",(0,t.jsxs)(o.p,{children:["Create a cache called ",(0,t.jsx)(o.code,{children:"worker"}),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Create cache form",src:n(764).A+"",width:"1920",height:"694"})}),"\n",(0,t.jsxs)(o.p,{children:["After pressing the ",(0,t.jsx)(o.code,{children:"Create"})," button you'll see the new ",(0,t.jsx)(o.code,{children:"worker"})," cache in the list of available caches."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Chat cache",src:n(7557).A+"",width:"1916",height:"472"})}),"\n",(0,t.jsxs)(o.p,{children:["Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento authentication token in the next step. Navigate to the ",(0,t.jsx)(o.a,{href:"https://console.gomomento.com/tokens",children:"tokens"})," page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained token that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations such as delete. This is especially helpful if you want to manage the security of control plane and data plane operations separately."]}),"\n",(0,t.jsxs)(o.p,{children:["Choose the ",(0,t.jsx)(o.code,{children:"Fine-Grained Access Token"})," token type, select ",(0,t.jsx)(o.code,{children:"worker"})," as ",(0,t.jsx)(o.code,{children:"Cache Name"})," from the drop down, and ",(0,t.jsx)(o.code,{children:"readwrite"})," as ",(0,t.jsx)(o.code,{children:"Role Type"}),". The ",(0,t.jsx)(o.code,{children:"Super User Token"})," is used for managing control plane operations. More information about Momento authentication can be found ",(0,t.jsx)(o.a,{href:"/cache/develop/authentication/",children:"here"}),". Hit the ",(0,t.jsx)(o.code,{children:"Generate API Key"})," button."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Generate token",src:n(7550).A+"",width:"3456",height:"1968"})}),"\n",(0,t.jsxs)(o.p,{children:["Copy the ",(0,t.jsx)(o.code,{children:"API Key"})," and ",(0,t.jsx)(o.code,{children:"HTTP Endpoint"})," and save it in a safe place. You'll need to use it later to configure your Worker deployment, where you will add it as an environment variable for use in the worker."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Generated token",src:n(6020).A+"",width:"2532",height:"408"})}),"\n",(0,t.jsx)(o.h2,{id:"deploying-with-cloudflare",children:"Deploying with Cloudflare"}),"\n",(0,t.jsxs)(o.p,{children:["Now it's time to configure and deploy the application to your Cloudflare account. As noted before, you need a copy of the Momento JavaScript SDK available in your repository.\nIn this example, we'll deploy from a GitHub repository forked from ",(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"the original"}),"."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Fork SDK Repository",src:n(5980).A+"",width:"2478",height:"84"})}),"\n",(0,t.jsxs)(o.p,{children:["This repository contains a directory under ",(0,t.jsx)(o.code,{children:"examples"})," for ",(0,t.jsx)(o.code,{children:"cloudflare-workers"}),". It further contains subdirectories for two types of example projects to use Momento inside a Cloudflare worker:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/http-api",children:"HTTP-API"})," - How to interact with Momento cache using its HTTP API on Cloudflare workers."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/web-sdk",children:"Web-SDK"})," - How to interact with Momento cache using its Web SDK on Cloudflare workers."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"There are a few reasons why you might choose one over the other when interacting with Momento within a Cloudflare Worker."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["The HTTP APIs is lighter-weight; you don't need to add any dependencies, you can just use the standard ",(0,t.jsx)(o.code,{children:"fetch"})," HTTP client methods. However, it only provides a basic subset of all of the Momento APIs, such as ",(0,t.jsx)(o.code,{children:"get"}),", ",(0,t.jsx)(o.code,{children:"set"}),", and ",(0,t.jsx)(o.code,{children:"delete"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"The Web SDK is heavier-weight; you need to add a dependency on the SDK. However, it supports the full Momento API (including collections like Dictionaries and SortedSets, plus the ability to publish to Momento Topics). It also has a complete TypeScript/JavaScript API that makes it simpler to write code to interact with Momento. This can save you time and effort when developing your Worker."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Cloudflare uses a file called wrangler.toml to configure the development and publishing of a worker. More information about Cloudflare configuration can be found ",(0,t.jsx)(o.a,{href:"https://developers.cloudflare.com/workers/wrangler/configuration/",children:"on their website"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"using-the-momento-http-api",children:"Using the Momento HTTP API"}),"\n",(0,t.jsx)(o.p,{children:"First let's navigate to the relevant example directory to use Momento's HTTP API in a Cloudflare worker."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"cd examples/cloudflare-workers/http-api\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Update the ",(0,t.jsx)(o.code,{children:"wrangler.toml"})," file in this directory with the cache name ",(0,t.jsx)(o.code,{children:"worker"})," and the HTTP endpoint we copied before as they appeared in the Momento console."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-toml",children:'name = "momento-cloudflare-worker-http"\nmain = "src/worker.ts"\ncompatibility_date = "2023-07-10"\n\n[vars]\nMOMENTO_REST_ENDPOINT = "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"\nMOMENTO_CACHE_NAME = "worker"\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Update the ",(0,t.jsx)(o.code,{children:".dev.vars"})," file in the example directory with the Momento API Key. Since this is a secret token, we don\u2019t store it as an environment variable, instead storing it as a Cloudflare secret."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-.vars",children:'MOMENTO_API_KEY="<your token here>"\n'})}),"\n",(0,t.jsx)(o.p,{children:"Start the development server:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Open your browser to ",(0,t.jsx)(o.a,{href:"http://localhost:8787",children:"localhost:8787"}),". The code in this example sets an item in the cache, gets it, and returns it as a JSON object:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'    // setting a value into cache\n    const setResp = await client.set(cache, key, value);\n    console.log("setResp", setResp);\n\n    // getting a value from cache\n    const getResp = await client.get(cache, key)\n    console.log("getResp", getResp);\n\n    return new Response(JSON.stringify({ response: getResp }));\n'})}),"\n",(0,t.jsxs)(o.p,{children:["A deployed example can be found ",(0,t.jsx)(o.a,{href:"https://momento-cloudflare-worker-http.pratik-37c.workers.dev",children:"here"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["If you would like to deploy this example to your own Cloudflare worker, make sure you add the ",(0,t.jsx)(o.code,{children:"MOMENTO_API_KEY"})," as a secret inside of your Cloudflare account:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:'\nnpx wrangler secret put MOMENTO_API_KEY\n> Enter a secret value: **************************\n> \ud83c\udf00 Creating the secret for the Worker "momento-cloudflare-worker-http"\n> \u2728 Success! Uploaded secret MOMENTO_API_KEY\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Then you can run ",(0,t.jsx)(o.code,{children:"npm run deploy"}),". You will be prompted for a Cloudflare login before deploying to your Cloudflare account."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'> shy-bush-898e@0.0.0 deploy\n> wrangler deploy\n\n \u26c5\ufe0f wrangler 3.2.0 (update available 3.5.0)\n-----------------------------------------------------\nYour worker has access to the following bindings:\n- Vars:\n  - MOMENTO_REST_ENDPOINT: "https://api.cache.cell-4-us-west-2-1...."\n  - MOMENTO_CACHE_NAME: "worker"\nTotal Upload: 2.04 KiB / gzip: 0.69 KiB\nUploaded momento-cloudflare-worker-http (1.44 sec)\nPublished momento-cloudflare-worker-http (0.40 sec)\n  https://momento-cloudflare-worker-http.pratik-37c.workers.dev\n'})}),"\n",(0,t.jsx)(o.h3,{id:"using-the-momento-web-sdk",children:"Using the Momento Web SDK"}),"\n",(0,t.jsx)(o.p,{children:"First let's navigate to the relevant example directory to use Momento's Web SDK in a Cloudflare worker."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"cd examples/cloudflare-workers/web-sdk\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Update the ",(0,t.jsx)(o.code,{children:"wrangler.toml"})," file in this directory with the cache name ",(0,t.jsx)(o.code,{children:"worker"}),". Note that we do not need the ",(0,t.jsx)(o.code,{children:"HTTP endpoint"})," anymore as the Web SDK manages that for us."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-toml",children:'name = "momento-cloudflare-worker-http"\nmain = "src/worker.ts"\ncompatibility_date = "2023-07-10"\n\n[vars]\nMOMENTO_CACHE_NAME = "worker"\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Update the ",(0,t.jsx)(o.code,{children:".dev.vars"})," file in the example directory with the Momento API Key. Since this is a secret token, we don\u2019t store it as an environment variable, instead storing it as a Cloudflare secret."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-.vars",children:'MOMENTO_API_KEY="<your token here>"\n'})}),"\n",(0,t.jsx)(o.p,{children:"Start the development server:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Open your browser to ",(0,t.jsx)(o.a,{href:"http://localhost:8787",children:"localhost:8787"}),". The code in this example sets an item in the cache, gets it, and returns it as a JSON object:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"    // setting a value into cache\n    await client.set(cache, key, value);\n\n    // getting a value from cache\n    const getResponse = await client.get(cache, key)\n\n    return new Response(JSON.stringify({ response: getResponse.toString() }));\n"})}),"\n",(0,t.jsxs)(o.p,{children:["A deployed example can be found ",(0,t.jsx)(o.a,{href:"https://momento-cloudflare-worker-web.pratik-37c.workers.dev/",children:"here"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["If you would like to deploy this example to your own Cloudflare worker, make sure you add the ",(0,t.jsx)(o.code,{children:"MOMENTO_API_KEY"})," as a secret inside of your Cloudflare account:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:'\nnpx wrangler secret put MOMENTO_API_KEY\n> Enter a secret value: **************************\n> \ud83c\udf00 Creating the secret for the Worker "momento-cloudflare-worker-http"\n> \u2728 Success! Uploaded secret MOMENTO_API_KEY\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Then you can run ",(0,t.jsx)(o.code,{children:"npm run deploy"}),". You will be prompted for a Cloudflare login before deploying to your Cloudflare account."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'> shy-bush-898e@0.0.0 deploy\n> wrangler deploy\n\n \u26c5\ufe0f wrangler 3.2.0 (update available 3.5.0)\n-----------------------------------------------------\nYour worker has access to the following bindings:\n- Vars:\n  - MOMENTO_CACHE_NAME: "worker"\nTotal Upload: 1673.43 KiB / gzip: 168.75 KiB\nUploaded momento-cloudflare-worker-web (2.46 sec)\nPublished momento-cloudflare-worker-web (0.30 sec)\n  https://momento-cloudflare-worker-web.pratik-37c.workers.dev\n\n'})}),"\n",(0,t.jsx)(o.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(o.p,{children:["We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Cloudflare Workers. Feel free, of course, to dive into the ",(0,t.jsx)(o.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers",children:"code for the examples"})," as well. We hope you'll also enjoy the simplicity of Momento Cache, as you don't have to manage and provision any infrastructure to get up and running."]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7557:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/console-caches-worker-f6fe32f41cabf1c18025d4d7e0862f04.png"},2432:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},764:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/console-create-worker-cache-form-25675fe8e7d0bc42ae1673e102922af3.png"},7550:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/fgac-worker-auth-9a307c6c961d307eaacb3a86c741f6f1.png"},5980:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/github-fork-js-sdk-3950285fbebfdc6a75982998d63e70d6.png"},6020:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/http-endpoint-auth-token-2c3853dfb362d741488a794b488e55de.png"},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>i});var t=n(6540);const r={},a=t.createContext(r);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);