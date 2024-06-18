"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7966],{716:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=i(4848),n=i(8453);const s={sidebar_position:6,sidebar_label:"Netlify",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify."},a="Integrating Momento with your Netlify app",r={id:"cache/integrations/netlify-integration",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify.",source:"@site/docs/cache/integrations/netlify-integration.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/netlify-integration",permalink:"/ja/cache/integrations/netlify-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/netlify-integration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Netlify",title:"Integrate Momento With Netlify",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Netlify."},sidebar:"tutorialSidebar",previous:{title:"Bulk data writing",permalink:"/ja/cache/integrations/bulk-writing-from-redis-json-csv"},next:{title:"Sequelize",permalink:"/ja/cache/integrations/sequelize"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying with Netlify",id:"deploying-with-netlify",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"integrating-momento-with-your-netlify-app",children:"Integrating Momento with your Netlify app"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://www.netlify.com/",children:"Netlify"})," is a popular platform for building, deploying, and scaling modern websites and apps. Their offerings include an advanced global CDN, Git-integrated CI/CD, and free automatic HTTPS support. Their deployment process integrates directly with your Git repositories, making initial deployment about as simple as choosing a repository. Once deployed, updating your sites and apps is handled automatically as you push your changes to Git."]}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll make use of a simple example ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat",children:"Next.js chat application"})," from our ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"Javascript SDK"}),". By the end of the exercise, you'll have a realtime browser-based chat application up and running at a URL you can use to invite your friends to the chat."]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.p,{children:"To get this app deployed and running, you'll need to have the following available:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["An account with a Git provider such as ",(0,o.jsx)(t.a,{href:"https://github.com/",children:"GitHub"}),", ",(0,o.jsx)(t.a,{href:"https://gitlab.com",children:"GitLab"}),", or ",(0,o.jsx)(t.a,{href:"https://bitbucket.org/",children:"Bitbucket"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.a,{href:"https://www.netlify.com/",children:"Netlify"})," account."]}),"\n",(0,o.jsxs)(t.li,{children:["A copy or fork of the ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"Momento Javascript SDK"})," in your personal repositories."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Once you have a Netlify account and a copy or fork of the Momento Javascript SDK in your Git provider account, you're ready to configure the Momento side of things using the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento console"}),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,o.jsx)(t.code,{children:"Create Cache"})," button on the top right of the page:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Create Cache button",src:i(2432).A+"",width:"336",height:"258"})}),"\n",(0,o.jsxs)(t.p,{children:["Create a cache called ",(0,o.jsx)(t.code,{children:"chat"}),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Create cache form",src:i(4149).A+"",width:"2990",height:"1350"})}),"\n",(0,o.jsxs)(t.p,{children:["After pressing the ",(0,o.jsx)(t.code,{children:"Create"})," button you'll see the new ",(0,o.jsx)(t.code,{children:"chat"})," cache in the list of available caches."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Chat cache",src:i(8701).A+"",width:"2954",height:"648"})}),"\n",(0,o.jsxs)(t.p,{children:["Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/api-keys",children:"api-keys"})," page, choose the cloud provider and region you used to create your cache, choose the ",(0,o.jsx)(t.code,{children:"Super User Key"})," token type, and hit the ",(0,o.jsx)(t.code,{children:"Generate Key"})," button."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Generate Key",src:i(5329).A+"",width:"3416",height:"1670"})}),"\n",(0,o.jsxs)(t.p,{children:["Copy the ",(0,o.jsx)(t.code,{children:"API Key"})," and save it in a safe place. You'll need to use it later to configure your Netlify deployment, where you will add it as an environment variable for use in the chat app."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Generated Key",src:i(3761).A+"",width:"2704",height:"416"})}),"\n",(0,o.jsx)(t.h2,{id:"deploying-with-netlify",children:"Deploying with Netlify"}),"\n",(0,o.jsxs)(t.p,{children:["Now it's time to log into Netlify to configure and deploy the application. As noted before, you need a copy of the Momento Javascript SDK available in your repository. In this example, we'll deploy from a GitHub repository forked from ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"the original"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Fork SDK Repository",src:i(5980).A+"",width:"2478",height:"84"})}),"\n",(0,o.jsxs)(t.p,{children:["After logging into Netlify, navigate to your team's ",(0,o.jsx)(t.code,{children:"Sites"})," page and select ",(0,o.jsx)(t.code,{children:"Add New Site"})," -> ",(0,o.jsx)(t.code,{children:"Import an Existing Project"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Netlify Add Site Button",src:i(8142).A+"",width:"2980",height:"362"})}),"\n",(0,o.jsx)(t.p,{children:"Then choose your Git provider to display a list of your repositories."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Netlify Git providers",src:i(7292).A+"",width:"1740",height:"422"})}),"\n",(0,o.jsxs)(t.p,{children:["From the list of repositories available to you, select ",(0,o.jsx)(t.code,{children:"client-sdk-javascript"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Netlify repository list",src:i(1700).A+"",width:"1742",height:"518"})}),"\n",(0,o.jsxs)(t.p,{children:["The next screen allows you to configure your deployment. You'll be deploying from the ",(0,o.jsx)(t.code,{children:"main"})," branch. Because we are deploying an example application from a subdirectory of the Momento Javascript SDK, you'll need to set the ",(0,o.jsx)(t.code,{children:"Base directory"})," in the ",(0,o.jsx)(t.code,{children:"Build settings"})," section of the page. The path to the chat example is ",(0,o.jsx)(t.code,{children:"/examples/web/nextjs-chat"}),", so you'll enter that as the ",(0,o.jsx)(t.code,{children:"Base directory"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Assuming you've entered the base directory correctly, you should see some magic happen. Netlify has examined the contents of the base directory and detected that our project is using Next.js. That allows it to fill out the rest of the build settings form for us. The values it has chosen look good, so you can move on to the final step of configuration: environment variables."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Netlify build settings",src:i(7323).A+"",width:"683",height:"1041"})}),"\n",(0,o.jsxs)(t.p,{children:["Recall that we generated and saved a Momento API key earlier for use with this application. Use the ",(0,o.jsx)(t.code,{children:"Add environment variables"})," button below the build settings to add an environment variable with ",(0,o.jsx)(t.code,{children:"MOMENTO_API_KEY"})," as the key and the token you generated as the value. Next, add a second environment variable with ",(0,o.jsx)(t.code,{children:"NEXT_PUBLIC_MOMENTO_CACHE_NAME"})," as the key and ",(0,o.jsx)(t.code,{children:"chat"})," as the value to point your app to the cache you created earlier. And that's all there is to do to configure the deployment. Press the ",(0,o.jsx)(t.code,{children:"Deploy client-sdk-javascript"})," button to deploy the app into the wild!"]}),"\n",(0,o.jsx)(t.p,{children:"During the deployment, Netlify displays a detailed log showing what it's doing to build and publish your site and, if necessary, reporting on deployment failures to assist in troubleshooting. If all went as planned, you'll be directed to a page summarizing the deployment."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Netlify site published",src:i(6319).A+"",width:"1344",height:"660"})}),"\n",(0,o.jsxs)(t.p,{children:["You're now ready to chat with your friends! Navigate to the ",(0,o.jsx)(t.code,{children:"Site overview"})," in the left nav to find the URL that was generated for your site. You would, of course, set up a custom domain were this a production app, but the generated netlify.app URL is good enough for our purposes."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Netlify site overview",src:i(3078).A+"",width:"2968",height:"636"})}),"\n",(0,o.jsxs)(t.p,{children:["Clicking on the ",(0,o.jsx)(t.code,{children:"https://charming-salmiakki-e07713.netlify.app/"})," link in the overview (your URL will, of course, be different) reveals your chat app's lobby screen. Use ",(0,o.jsx)(t.code,{children:"chat"})," as the name of the chat room. You could use any name, but using ",(0,o.jsx)(t.code,{children:"chat"})," makes it easy to remember and share. If it doesn't exist, the chat room will be created."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Chat app lobby",src:i(3853).A+"",width:"708",height:"552"})}),"\n",(0,o.jsx)(t.p,{children:"The final step is to choose a username for the chat."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Chat app username",src:i(8385).A+"",width:"758",height:"542"})}),"\n",(0,o.jsx)(t.p,{children:"Now all that's left is to share the URL, cache, and room name with the people you'd like to invite to your chat!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Chat app chat",src:i(3151).A+"",width:"3024",height:"1794"})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Netlify. Feel free, of course, to dive into the ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat",children:"code for this chat example"})," as well. We hope you'll also enjoy the simplicity of the Momento Topics feature that powers the chat, especially when compared to alternative approaches such as polling and web sockets. And we especially look forward to seeing what our customers build and deploy with Momento in the future!"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3761:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},8701:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/console-caches-chat-ce796d1f23d2d69c009f067727eab408.png"},4149:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},2432:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},5329:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"},5980:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/github-fork-js-sdk-3950285fbebfdc6a75982998d63e70d6.png"},8142:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/netlify-add-site-24baeb27ef3f6f7041b4b926c90c666b.png"},7323:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/netlify-build-settings-5c2a204a079c6a0a3c239bb45da87d79.png"},7292:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/netlify-git-providers-c88441df15cfd9b65c03a46ff3111e4c.png"},6319:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/netlify-published-site-27122792a2a46c654589bfaf801d5d19.png"},1700:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/netlify-repo-list-adddc3ed2798fb9a2749a7eee29acf32.png"},3078:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/netlify-site-overview-96f6971538763e0730c8ff8c54f8c289.png"},3151:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/nextjs-chat-app-chat-6d2b67d875c0be1200e1e583faced55c.png"},3853:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/nextjs-chat-app-lobby-c44d4afaf6ea9f9addfa7ca50f4d754b.png"},8385:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/nextjs-chat-app-username-35a5af269bf50fa8441581c33a673661.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var o=i(6540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);