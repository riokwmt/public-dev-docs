"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7449],{2808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(4848),o=n(8453);const s={sidebar_position:8,sidebar_label:"Unity",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity."},a=void 0,c={id:"cache/integrations/unity-integration",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity.",source:"@site/docs/cache/integrations/unity-integration.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/unity-integration",permalink:"/ja/cache/integrations/unity-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/unity-integration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Unity",title:"Integrating Momento with your Unity app",description:"Learn to deploy a chat app using Momento .NET SDK to Unity."},sidebar:"tutorialSidebar",previous:{title:"Cloudflare",permalink:"/ja/cache/integrations/cloudflare"},next:{title:"Fastly",permalink:"/ja/cache/integrations/fastly"}},r={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Unity",id:"unity",level:3},{value:"Momento",id:"momento",level:3},{value:"Setting up the Unity Project",id:"setting-up-the-unity-project",level:2},{value:"Creating the Project",id:"creating-the-project",level:3},{value:"Adding the Momento .NET SDK to Unity",id:"adding-the-momento-net-sdk-to-unity",level:3},{value:"Building the Unity Chat Application with Momento Topics",id:"building-the-unity-chat-application-with-momento-topics",level:2},{value:"Understanding the User Interface",id:"understanding-the-user-interface",level:3},{value:"Example Scenes",id:"example-scenes",level:3},{value:"(optional) Adding in the Momento API key",id:"optional-adding-in-the-momento-api-key",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://unity.com/",children:"Unity"})," is a real-time development platform that is one of the most popular game engines on the market today. The Unity game engine is used by thousands of developers to create 2D and 3D interactive apps, across a variety of platforms, including mobile, desktop, and immersive platforms (e.g., augmented and virtual reality)."]}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, we'll build a ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"simple Unity chat application"})," using the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet",children:"Momento .NET SDK"}),". Specifically, we'll utilize ",(0,i.jsx)(t.a,{href:"https://docs.momentohq.com/topics",children:"Momento Topics"})," for publishing and subscribing to the chat messages."]}),"\n",(0,i.jsxs)(t.p,{children:["Momento Topics is a serverless approach to real-time communication that allows clients to subscribe and publish to dedicated channels called topics. This makes it perfect for a real-time Unity-based chat application. Furthermore, since it's a serverless approach, there's no need for you to worry about all the details of creating or configuring your own server. More details can be found on the ",(0,i.jsx)(t.a,{href:"https://docs.momentohq.com/topics",children:"Momento Topics Documentation page"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.h3,{id:"unity",children:"Unity"}),"\n",(0,i.jsxs)(t.p,{children:["Download the ",(0,i.jsx)(t.a,{href:"https://unity.com/releases/lts",children:"Unity 2022 LTS release"}),". In writing this tutorial, we specifically used Unity 2022.3.9f1 but any Unity 2022 LTS release should work."]}),"\n",(0,i.jsx)(t.h3,{id:"momento",children:"Momento"}),"\n",(0,i.jsxs)(t.p,{children:["While waiting for Unity to download and install, you can optionally configure the Momento side of things using the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento console"}),". ",(0,i.jsxs)(t.em,{children:["Note: this step is only necessary if you want to set up your own API Auth Token, which is NOT required for the rest of this tutorial since we'll utilize a ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"Token Vending Machine"})," that's already deployed as part of the main ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/moderated-chat/",children:"Momento Moderated Chat"})," application. However, in our ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"Unity demo repository"}),", we include two extra Unity scenes where you can utilize your own Momento Topic; see ",(0,i.jsx)(t.a,{href:"#example-scenes",children:"Example Scenes"})," below for more information"]}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can create an account in the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento console"})," by providing your email address or linking an existing Google or GitHub account."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Once you've logged into the console, click the ",(0,i.jsx)(t.code,{children:"Create Cache"})," button on the top right of the page:\n",(0,i.jsx)(t.img,{alt:"Create Cache button",src:n(2432).A+"",width:"336",height:"258"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a cache called ",(0,i.jsx)(t.code,{children:"Unity-Topics-Cache"}),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["After pressing the ",(0,i.jsx)(t.code,{children:"Create"})," button you'll see the new ",(0,i.jsx)(t.code,{children:"Unity-Topics-Cache"})," cache in the list of available caches. Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step.\n",(0,i.jsx)(t.img,{alt:"Chat cache",src:n(62).A+"",width:"1173",height:"428"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"tokens"})," page, choose the cloud provider and region you used to create your cache, choose the ",(0,i.jsx)(t.code,{children:"Super User Token"})," token type, and hit the ",(0,i.jsx)(t.code,{children:"Generate API Key"})," button.\n",(0,i.jsx)(t.img,{alt:"Generate token",src:n(5329).A+"",width:"3416",height:"1670"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Copy the ",(0,i.jsx)(t.code,{children:"API Key"})," and save it in a safe place. You can use it later to configure your Unity chat application.\n",(0,i.jsx)(t.img,{alt:"Generated token",src:n(3761).A+"",width:"2704",height:"416"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-the-unity-project",children:"Setting up the Unity Project"}),"\n",(0,i.jsx)(t.h3,{id:"creating-the-project",children:"Creating the Project"}),"\n",(0,i.jsxs)(t.p,{children:["After completing the ",(0,i.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"}),", you'll need to set up the Unity project. To do so, you can either clone our ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"example demo repository"})," and start from there, or you can create your own from scratch. If you're new to Unity or want to save time in later steps, we recommend cloning the example repository."]}),"\n",(0,i.jsx)(t.p,{children:"To use the Unity project in our example repository, complete the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Clone ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-unity-demo",children:"https://github.com/momentohq/momento-unity-demo"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Open Unity Hub."}),"\n",(0,i.jsxs)(t.li,{children:['Open the existing Unity project by clicking "Open":\n',(0,i.jsx)(t.img,{alt:"New Unity Project",src:n(6423).A+"",width:"1280",height:"760"})]}),"\n",(0,i.jsx)(t.li,{children:"Then choose the cloned folder."}),"\n",(0,i.jsx)(t.li,{children:"If using a version other than Unity 2022.3.9f1, you may need to let Unity change the project's editor version appropriately."}),"\n",(0,i.jsxs)(t.li,{children:["Once the Unity project is loaded, open the ",(0,i.jsx)(t.code,{children:"MomentoTopicsDemo-ModeratedChat.unity"}),' scene file. In the project, there are several scene files that show varying levels of functionality. The "Moderated Chat" scene provides a Unity client of the main ',(0,i.jsx)(t.a,{href:"https://github.com/momentohq/moderated-chat/",children:"Momento Moderated Chat"})," application; see also the blog post on ",(0,i.jsx)(t.a,{href:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app",children:"How to use webhooks and Momento Topics to build a multi-language chat app"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The rest of this tutorial will utilize our example repository."}),"\n",(0,i.jsx)(t.h3,{id:"adding-the-momento-net-sdk-to-unity",children:"Adding the Momento .NET SDK to Unity"}),"\n",(0,i.jsx)(t.p,{children:"Once the project has finished being opened:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Download the latest ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases",children:"MomentoSdkUnity release .zip file"}),". For example, for the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases/tag/v1.31.1",children:"v1.31.1 release"}),", you would download ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases/download/v1.31.1/MomentoSdkUnity-1.31.1.zip",children:"MomentoSdkUnity-1.31.1.zip"}),". This .zip file contains a special version of the Momento .NET SDK that utilizes gRPC-Web due to HTTP/2 compatibility limitations in Unity. Required DLL dependencies are also included in the zip."]}),"\n",(0,i.jsxs)(t.li,{children:["Unzip its contents inside the folder ",(0,i.jsx)(t.code,{children:"Assets/MomentoSdkUnity"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"building-the-unity-chat-application-with-momento-topics",children:"Building the Unity Chat Application with Momento Topics"}),"\n",(0,i.jsxs)(t.p,{children:["Once you get to this step, you are ready to start building the user interface and writing the C# scripts to connect to Momento Topics via the ",(0,i.jsx)(t.a,{href:"https://docs.momentohq.com/cache/develop/sdks/dotnet",children:"Momento .NET SDK"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, we'll utilize the already existing example code in the cloned repository and in the following two sections we'll give an overview of how the UI and C# code is setup."}),"\n",(0,i.jsx)(t.h3,{id:"understanding-the-user-interface",children:"Understanding the User Interface"}),"\n",(0,i.jsxs)(t.p,{children:["In our example project, the user interface is already built out into three separate ",(0,i.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html",children:"Unity UI Canvas"})," elements, one for letting the user choose a name, one for the actual chat UI, and one for any communicating errors to the user."]}),"\n",(0,i.jsxs)(t.p,{children:["As shown below, the NameCanvas contains a ",(0,i.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/",children:"TextMeshPro"}),' input field and a "Start" button.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"NameCanvas",src:n(9534).A+"",width:"1447",height:"708"})}),"\n",(0,i.jsx)(t.p,{children:'After the user enters a name, either pressing the Enter key or clicking on the "Start" button will start the chat application. Once that happens, our C# script will hide the NameCanvas and then show the MessagingCanvas.'}),"\n",(0,i.jsxs)(t.p,{children:["The MessagingCanvas contains a ",(0,i.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIInteractionComponents.html#scroll-rect-scroll-view",children:"Scroll View"})," that will enable our chat messaging window to be scrollable. With the appropriate ",(0,i.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIBasicLayout.html",children:"positioning of the UI elements"}),", we can make the chat messaging area grow upwards, letting the latest messages always show at the bottom."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MessagingCanvas",src:n(9775).A+"",width:"1440",height:"721"})}),"\n",(0,i.jsx)(t.p,{children:"The MessagingCanvas also has several additional features to complete the Unity moderated chat client:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a dropdown select menu in the top-right of the UI to allow the user to switch between various language translations"}),"\n",(0,i.jsx)(t.li,{children:"a loading circle animation in the center of the view that appears when we're loading the chat application"}),"\n",(0,i.jsxs)(t.li,{children:["an image button in the bottom-right that utilizes the third-party ",(0,i.jsx)(t.a,{href:"https://github.com/gkngkc/UnityStandaloneFileBrowser",children:"UnityStandaloneFileBrowser"})," to allow the user to load images from their computer to send in a chat message"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example-scenes",children:"Example Scenes"}),"\n",(0,i.jsxs)(t.p,{children:["In the example code, we provide four example Unity scenes, showcasing various ways to integrate the Momento SDK with Unity. The first two require ensuring the ",(0,i.jsx)(t.code,{children:"MOMENTO_AUTH_TOKEN"})," environment variable is set, or copying and pasting your auth token into ",(0,i.jsx)(t.code,{children:"Assets/Scripts/TopicsTest.cs"})," (or ",(0,i.jsx)(t.code,{children:"Assets/Scripts/TopicsTestCoroutine.cs"}),") replacing ",(0,i.jsx)(t.code,{children:"ADD_YOUR_TOKEN_HERE"})," in the ",(0,i.jsx)(t.code,{children:"ReadAuthToken()"})," function (hard-coding your auth token in code is not recommended but can be used for testing purposes if necessary)."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"MomentoTopicsDemo.unity"})," (using ",(0,i.jsx)(t.code,{children:"TopicsTest.cs"}),"): utilizes ",(0,i.jsx)(t.code,{children:"Task.Run()"})," to run the subscription to the Momento Topic in a background thread. This is the approach descirbed above. This code is based upon the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample",children:"Momento .NET SDK Topic Example"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"MomentoTopicsDemo-Coroutine.unity"})," (using ",(0,i.jsx)(t.code,{children:"TopicsTestCoroutine.cs"}),"): identical to the previous scene except that it utilizes Unity Coroutines to run the subscription asyncronously in the main thread."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"MomentoTopicsDemo-TokenVendingMachine.unity"})," (using ",(0,i.jsx)(t.code,{children:"TopicsTestTokenVendingMachine.cs"}),"): utilizes the example ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"Momento Token Vending Machine"})," to obtain a temporary, restricted scope Momento auth token. This is beneficial because (1) we no longer need to hard-code in a specific auth token into the app, and (2) we can utilize a ",(0,i.jsx)(t.code,{children:"tokenId"})," embedded in the Topics message to more securely know which client/username sent a specific message. Note that you'll need to explicitly setup the Token Vending Machine separately and then specify its URL via the ",(0,i.jsx)(t.code,{children:"tokenVendingMachineURL"})," variable specified in ",(0,i.jsx)(t.code,{children:"TopicsTestTokenVendingMachine.cs"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"MomentoTopicsDemo-ModeratedChat.unity"})," (using ",(0,i.jsx)(t.code,{children:"ModeratedChat.cs"})," along with some helper scripts): utilizes the publicly deployed Momento moderated chat demo backend (see ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/moderated-chat/tree/main",children:"https://github.com/momentohq/moderated-chat/tree/main"})," and ",(0,i.jsx)(t.a,{href:"https://chat.gomomento.com/",children:"https://chat.gomomento.com/"}),") to connect to the public chat demo. Since this is a client to that chat, most of the C# code follows from the Javascript ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/moderated-chat/tree/main/frontend",children:"frontend web client"})," that already exists."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"optional-adding-in-the-momento-api-key",children:"(optional) Adding in the Momento API key"}),"\n",(0,i.jsxs)(t.p,{children:["As mentioned above in ",(0,i.jsx)(t.a,{href:"#example-scenes",children:"Example Scenes"}),", in some situations we may need to set up the auth token in our Unity project. We'll use ",(0,i.jsx)(t.code,{children:"Assets/Scripts/TopicsTest.cs"})," for an example."]}),"\n",(0,i.jsxs)(t.p,{children:["The first thing we need to do is to let our C# script know about the API key we created above in the ",(0,i.jsx)(t.a,{href:"#momento",children:"Momento Prerequisite"})," step. Following the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample",children:"Momento .NET SDK Topic Example"}),", we can either grab the API key from an environment variable or hard-code the API key in our code (note that hard-coding your API key in code is NOT recommended but can be used for testing purposes, if necessary; an alternative approach using a ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:"Token Vending Machine"})," is described above in ",(0,i.jsx)(t.a,{href:"#example-scenes",children:"Example Scenes"}),"):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['To set the environment variable in Windows, click the Windows Start button, search for "environment" and click on "Edit the system environment variables." Then click on "Environment Variables" and ensure the ',(0,i.jsx)(t.code,{children:"MOMENTO_API_KEY"})," environment variable is set. You may need to restart Unity to get it to recognize your newly created environment variable."]}),"\n",(0,i.jsxs)(t.li,{children:["To hard-code the API key in a C# script, copy and paste your API key into ",(0,i.jsx)(t.code,{children:"Assets/Scripts/TopicsTest.cs"})," replacing ",(0,i.jsx)(t.code,{children:"ADD_YOUR_TOKEN_HERE"})," in the ",(0,i.jsx)(t.code,{children:"ReadAuthToken()"})," function."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'After the API key is appropriately set, you can go ahead and click on the "Play" button in the Unity Editor to test it out!'}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["In conclusion, to integrate Momento with Unity is as simple as downloading the latest ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/releases",children:"MomentoSdkUnity release .zip file"})," and unzipping it anywhere within your Unity ",(0,i.jsx)(t.code,{children:"Assets"})," folder. In this tutorial, we took it a step further and demonstrated how to set up a simple chat user interface that connects to a Momento Topic for easy publishing of messages and subscribing to messages. Specifically, we demonstrated a Unity client to the publicly deployed moderated chat application ",(0,i.jsx)(t.a,{href:"https://chat.gomomento.com/",children:"https://chat.gomomento.com/"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3761:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},2432:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},5329:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"},9775:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/MessagingCanvas-85f6490f5ae3a5fa571db0d6acb9fba9.png"},9534:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/NameCanvas-a876be532918e9c9dec8409671d2e857.png"},62:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Unity-Topics-Cache-a2d727138074b13e28cae8e3de98a042.png"},6423:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/hub-new-project-4677003da342342d687c2cb5057a0373.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);