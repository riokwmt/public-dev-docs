"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const i={sidebar_position:1,sidebar_label:"What is Serverless Caching?",title:"What is Serverless Caching?",pagination_prev:null,description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps."},r="What is Serverless Caching?",o={unversionedId:"cache/introduction/what-is-serverless-caching",id:"cache/introduction/what-is-serverless-caching",title:"What is Serverless Caching?",description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps.",source:"@site/docs/cache/introduction/what-is-serverless-caching.md",sourceDirName:"cache/introduction",slug:"/cache/introduction/what-is-serverless-caching",permalink:"/cache/introduction/what-is-serverless-caching",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/introduction/what-is-serverless-caching.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"What is Serverless Caching?",title:"What is Serverless Caching?",pagination_prev:null,description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps."},sidebar:"tutorialSidebar",next:{title:"Common Caching Patterns",permalink:"/cache/introduction/common-caching-patterns"}},l={},c=[{value:"Serverless as an operational model",id:"serverless-as-an-operational-model",level:2},{value:"How Momento fits the traditional definition of serverless",id:"how-momento-fits-the-traditional-definition-of-serverless",level:3},{value:"Serverless as compatibility with related architectures",id:"serverless-as-compatibility-with-related-architectures",level:2},{value:"How Momento Cache fits with standard serverless applications",id:"how-momento-cache-fits-with-standard-serverless-applications",level:3},{value:"Serverless as independent project platform",id:"serverless-as-independent-project-platform",level:2},{value:"How Momento Cache fits with indie projects",id:"how-momento-cache-fits-with-indie-projects",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-is-serverless-caching"},"What is Serverless Caching?"),(0,s.kt)("p",null,'Serverless is one of the hottest trends in software development, and we\'re seeing an explosion in "serverless-friendly" services.'),(0,s.kt)("p",null,"We believe Momento Cache is the most serverless-friendly cache available. But what does serverless mean, and why is Momento Cache a serverless-friendly cache?"),(0,s.kt)("p",null,"We'll look at two definitions of serverless plus a group of builders that is interested in serverless-like technologies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#serverless-as-an-operational-model"},"Serverless as an operational model"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#serverless-as-compatibility-with-related-architectures"},"Serverless as compatibility with related architectures"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#serverless-as-independent-project-platform"},"Serverless as independent project platform")))),(0,s.kt)("h2",{id:"serverless-as-an-operational-model"},"Serverless as an operational model"),(0,s.kt)("p",null,"The first way people use the term \"serverless\" is to describe the operational mechanics of a particular service. This is my preferred definition of serverless and the one closest to its original, unadulterated definition. Let's call this the 'traditional' definition of serverless."),(0,s.kt)("p",null,"Within the traditional definition of serverless, serverless services generally have three attributes."),(0,s.kt)("p",null,"First, ",(0,s.kt)("em",{parentName:"p"},"a serverless service is managed"),". Rather than running a service yourself, some service provider has taken over the core management responsibilities from you. If you're running a database, you won't be installing Postgres on a bare metal machine in a database. If you need a cache, you're not standing up Memcached on an EC2 instance. Rather, you're consuming the service directly -- a database, a cache, a message queue -- from a provider that is installing, configuring, and maintaining the underlying software."),(0,s.kt)("p",null,"Second, ",(0,s.kt)("em",{parentName:"p"},"a serverless service is abstracted from you"),". In general, you should have fewer knobs to turn or choices to make in provisioning your service. This is a point emphasized by Ben Kehoe in his ",(0,s.kt)("a",{parentName:"p",href:"https://ben11kehoe.medium.com/the-serverless-spectrum-147b02cb2292#fbae"},"post on the Serverless Spectrum"),". Practically, this could mean you provision for specific functional capacity (such as DynamoDB's read and write capacity throughput) rather than the underlying resources (such as a database instance size with various configurations of CPU, RAM, and network I/O). Or it could mean you don't provision for anything at all, such as with an SQS queue or an S3 bucket. In those cases, the provider manages scaling up and down to meet your needs."),(0,s.kt)("p",null,"Finally, ",(0,s.kt)("em",{parentName:"p"},"a serverless service has a pay-for-value pricing scheme"),". Because the service is more abstracted from underlying resources and more toward capacity, you can have a closer link between the price you pay and the value you receive. This can mean a pay-per-use billing system, such as with AWS Lambda, Amazon API Gateway, or Amazon SQS. It can also mean a system that allows for flexible scale up and scale down, such as Amazon DynamoDB or Amazon Kinesis. With a serverless service, you don't need to overprovision to account for times of peak load, leading to large periods of your instances sitting at low resource usage."),(0,s.kt)("p",null,'As Ben Kehoe notes in the article linked above, "serverlessness" is a spectrum, and you want to be using services that tend to have more of the qualities above. Additionally, some services have flexibility in how you use them, but you should try to use them in a more serverless way.'),(0,s.kt)("h3",{id:"how-momento-fits-the-traditional-definition-of-serverless"},"How Momento fits the traditional definition of serverless"),(0,s.kt)("p",null,"Momento Cache fits perfectly under this traditional definition of serverless."),(0,s.kt)("p",null,"First, Momento Cache is a managed service. You won't be installing software, managing failovers, or upgrading versions. This is handled for you behind the scenes so you can focus on building and maintaining the core parts of your application."),(0,s.kt)("p",null,"Second, Momento Cache abstracts the decisions around cache management from you. You don't have to specify the type and number of instances in your cache, nor do you have to think about the maximum memory size for your cache. Momento is purpose-built for the cloud and takes advantage of the elasticity and scalability of modern cloud infrastructure. You can store as much data as you need in your cache, and Momento will handle it seamlessly."),(0,s.kt)("p",null,"Finally, Momento Cache has a pay-for-value pricing model. As mentioned above, you aren't selecting a specific cache and cluster size in advance, regardless of whether you use it. Momento ",(0,s.kt)("a",{parentName:"p",href:"../manage/pricing"},"charges")," for data transferred in/out of Momento Cache and Momento Topics services. Everything else is included. With this, you are in control of your pricing, and changes you make to your application have a direct impact on your bill."),(0,s.kt)("p",null,"Under this first definition of serverless, Memento Cache is the cache that fits best in the serverless ecosystem."),(0,s.kt)("h2",{id:"serverless-as-compatibility-with-related-architectures"},"Serverless as compatibility with related architectures"),(0,s.kt)("p",null,'In the first definition of serverless above, serverless is defined as a set of operational mechanics when using a particular service. In this second definition, we\'ll look at a definition of serverless that I call "serverless-friendly" due to its general compatibility with serverless architectures.'),(0,s.kt)("p",null,"AWS Lambda was introduced at AWS re:Invent in 2014 and essentially kicked off the serverless revolution. Here was a brand-new compute paradigm -- event-driven, function-based, hyper-ephemeral, and a pay-per-use billing model."),(0,s.kt)("p",null,"The ecosystem has evolved greatly since the 2014 announcement, but Lambda remains the fulcrum of most serverless architectures. Because of Lambda's centrality and unique model, many serverless developers look for services that work well with Lambda and other core parts of a serverless application."),(0,s.kt)("p",null,"First, ",(0,s.kt)("em",{parentName:"p"},"these serverless developers prefer services that are accessed via HTTPS over the internet"),". This is in contrast to services, like traditional databases and caches, that utilize a persistent TCP connection within a private network. Part of this is due to some initial performance downsides of using AWS Lambda within a VPC. Though that performance downside has been fixed, there is still an aversion to the complexity of building and managing a private network for your services. For this reason, HTTPS-based services like DynamoDB and SQS are preferred over services like MySQL and RabbitMQ."),(0,s.kt)("p",null,"Second, ",(0,s.kt)("em",{parentName:"p"},"these developers want services that can scale quickly for rapid bursts in traffic"),". Lambda is designed for rapid scale up without pre-provisioning. Whether it's processing a large batch of new queue messages or handling a flood of traffic to your website, Lambda can respond as needed. Serverless developers look for infrastructure components that fit those scaling capabilities. These are generally cloud-based, multi-tenant offerings where an increase in load can be amortized across a large number of customers, rather than instance-based services with connection limits or less elastic scalability."),(0,s.kt)("p",null,"Finally, ",(0,s.kt)("em",{parentName:"p"},"serverless developers prefer services that can be provisioned quickly and dynamically without a lengthy spin-up time"),". This includes not only the core compute of AWS Lambda but also databases like DynamoDB, streams like Kinesis, or object stores like S3. Because serverless applications prefer managed, elastic, pay-for-value services, serverless developers can often create entire isolated environments on demand, whether for reproducing something in a clean environment or for automated testing in our release pipeline. To make these isolated environments feasible, we want services that can be provisioned in seconds rather than minutes."),(0,s.kt)("h3",{id:"how-momento-cache-fits-with-standard-serverless-applications"},"How Momento Cache fits with standard serverless applications"),(0,s.kt)("p",null,"Momento is a great addition to serverless applications that use AWS Lambda and other popular serverless services."),(0,s.kt)("p",null,"First, Momento Cache is available via HTTPS. This simplifies the configuration required to add Momento to your serverless application. You simply add the authentication token to your application and start using your cache. With this HTTPS-based connection pattern, you can still reuse an existing connection within your Lambda function to avoid the overhead of establishing a new connection on each request. Additionally, Memento has a VPC peering option available if you prefer using a VPC for your application."),(0,s.kt)("p",null,"Second, Momento Cache can scale your cache quickly and achieve a high number of requests per second without pre-provisioning. There are no connection limits to your Momento cache, so a burst of traffic won't lead to availability issues in your application."),(0,s.kt)("p",null,"Finally, Momento Cache is a dynamic service that can add and remove caches instantly. When you call the Momento control plane to create a new cache, the cache is provisioned instantly and is available by the time your client receives a response. This makes it easy to integrate Momento in branch-specific environments in your CI/CD system or allow each developer to have a unique copy of their application."),(0,s.kt)("p",null,"No other caches fit this well with serverless applications. While AWS provides Amazon ElastiCache as a caching option, it must be in a VPC. This can greatly increase the cost and complexity of your serverless application. Further, you must declare your instance size and cluster configuration upfront, regardless of your usage. Finally, provisioning new caches takes minutes, not seconds, as new instances must be launched and configured before you can use them."),(0,s.kt)("h2",{id:"serverless-as-independent-project-platform"},"Serverless as independent project platform"),(0,s.kt)("p",null,"The final category of serverlessness is less a specific concept and more a group of people or style of application."),(0,s.kt)("p",null,"In recent years, we've seen a huge rise in small SaaS applications and helpful tools built by individual developers or small teams. Part of this rise is due to the growth in the Indie Hackers movement, along with the rapid growth in people with programming skills worldwide. Yet another key factor is the ease with which one can build and scale an application without a large upfront investment."),(0,s.kt)("p",null,"The advent of the cloud, which introduced datacenter resources as an ongoing operational expense rather than a large upfront capital expense, reduced the barrier to building applications. But the rise of serverless tools and self-service infrastructure exploded this pattern and made global, resilient infrastructure available to the masses."),(0,s.kt)("p",null,"For this group, there are two key factors that matter in choosing services for their applications."),(0,s.kt)("p",null,"First, ",(0,s.kt)("em",{parentName:"p"},"self-service sign up with credit card billing is a must"),". For developers working on their idea as a side project or in their spare time, they don't have time to go through sales calls and time-consuming procurement processes. They want to sign up and immediately try something to see if it fits their needs."),(0,s.kt)("p",null,"Second, ",(0,s.kt)("em",{parentName:"p"},"these developers are looking for a generous free tier as they start using a tool"),". Because these are side projects or early attempts at a paid product, developers generally don't want to spend a lot for something with low or inconsistent usage. Between the AWS Free Tier and the similar free tiers for many developer services, you can get quite far without paying a cent for your side project."),(0,s.kt)("h3",{id:"how-momento-cache-fits-with-indie-projects"},"How Momento Cache fits with indie projects"),(0,s.kt)("p",null,"If you're an indie hacker or an early-stage startup that's looking to save money, Momento is a great fit for you as well."),(0,s.kt)("p",null,"First, Momento Cache has a painless self-service sign up. You can get a Momento authentication token and ",(0,s.kt)("a",{parentName:"p",href:"./../getting-started"},"start writing to your cache in less than five minutes"),". You don't need to talk to a salesperson or sign an upfront contract. In fact, you don't even need to enter a credit card to enjoy the free tier."),(0,s.kt)("p",null,"Second, Momento Cache has a generous free tier. You get 5 GB free each month (see ",(0,s.kt)("a",{parentName:"p",href:"./../manage/pricing"},"pricing")," for details). Our goal is to allow a wide variety of applications to run on Momento without ever paying us a cent. We want to provide a top-tier, robust service for applications that need it while also supporting a broad community of applications to use Momento as they grow."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"In this page, you learned how Momento Cache fits with every conception of serverless. Momento Cache has been designed specifically for modern architectures, with a serverless operational model, an integration model that works well with Lambda-powered applications, and a sign up and billing model that works for all types of developers and teams."),(0,s.kt)("p",null,"If you're ready to get started with Momento Cache, be sure to check out the following materials:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Quickstart guide to ",(0,s.kt)("a",{parentName:"li",href:"./../getting-started"},"start caching with Momento")," in less than 5 minutes;")))}p.isMDXComponent=!0}}]);