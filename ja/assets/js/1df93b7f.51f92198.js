"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4583],{2480:(e,s,i)=>{i.d(s,{A:()=>l});i(6540);const n="card_Yy4i",r="cardLink_tPnZ",o="cardContent_l93Q",t="cardTitle_gz5m",c="cardDescription_RQFX",a="cardBody_MLn8";var d=i(4848);const l=e=>{let{title:s,description:i,link:l,icon:h,variation:u="normal"}=e,m="",p="";if("dense"===u.toLowerCase())m="0",p="15em";return(0,d.jsx)("div",{className:n,style:{width:p},children:(0,d.jsx)("a",{href:l,target:"_blank",className:r,children:(0,d.jsxs)("div",{className:a,children:[h&&(0,d.jsx)("img",{src:h,height:"32px",width:"32px"}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("h3",{className:t,children:s}),(0,d.jsx)("p",{className:c,style:{marginBottom:m},children:i})]})]})})})}},8198:(e,s,i)=>{i.r(s),i.d(s,{default:()=>u});var n=i(6540),r=i(4586),o=i(9201),t=i(4328),c=i(2480),a=i(1312);const d={content:"content_ewlY",contentContainer:"contentContainer_C6d5",products:"products_dLNt",productWrapper:"productWrapper_jL9r",headerBackground:"headerBackground_QKwE",headerSection:"headerSection_x6lE",headerDescription:"headerDescription_IOoa",section:"section_Q9Zo",sectionTitle:"sectionTitle_Ut5p",subsectionTitle:"subsectionTitle_ARNC",subsectionDetail:"subsectionDetail_kmHI",subsectionGraphic:"subsectionGraphic_qVMX",header:"header_gB2a",rotatingHeader:"rotatingHeader_NRvM",desktopOnly:"desktopOnly_xVZT",columns:"columns_inOX",columnList:"columnList_rNCj",openInNew:"openInNew_y0xX",sectionBreak:"sectionBreak_IYC3",fadeOut:"fadeOut_EfHH",fadeIn:"fadeIn_sitH"};var l=i(4848);function h(){const{siteConfig:e}=(0,r.A)(),s=["Build faster with","Integrate easier on","Cache data with","Publish messages using"],[i,o]=(0,n.useState)(0),[t,c]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{const e=setInterval((()=>{c(!1),setTimeout((()=>{o((e=>(e+1)%s.length)),c(!0)}),500)}),5e3);return()=>clearInterval(e)}),[]),(0,l.jsxs)("div",{className:d.headerSection,children:[(0,l.jsx)("h1",{className:`${d.rotatingHeader} ${t?d.fadeIn:d.fadeOut} ${d.header}`,children:s[i]}),(0,l.jsx)("h1",{className:d.header,children:"the Momento Platform"}),(0,l.jsx)("p",{className:d.headerDescription,children:(0,l.jsx)(a.A,{id:"welcomeToTheMomentoDeveloperDocs",children:"Welcome to the Momento developer docs. Discover all the resources you need to help you get the most out of our products."})})]})}function u(){return(0,l.jsx)(o.A,{description:"Description will go into a meta tag in <head />",children:(0,l.jsxs)("main",{className:d.content,children:[(0,l.jsx)("img",{className:d.headerBackground,src:"/img/acorn-grid-background.svg",alt:"acorn-grid"}),(0,l.jsxs)("div",{className:d.contentContainer,children:[(0,l.jsx)(h,{}),(0,l.jsx)("div",{className:d.desktopOnly,children:(0,l.jsxs)("div",{className:d.columns,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Cache"}),(0,l.jsxs)("ul",{className:d.columnList,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/getting-started",children:(0,l.jsx)(a.A,{id:"gettingStarted",children:"Getting started"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/develop/api-reference",children:(0,l.jsx)(a.A,{id:"apiReference",children:"API reference"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/develop/integrations/redis-client-compatibility",children:(0,l.jsx)(a.A,{id:"dropInReplacementsForRedis",children:"Drop-in replacements for Redis"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/develop/guides/working-with-files-cache",children:(0,l.jsx)(a.A,{id:"howToCacheFiles",children:"How to cache files"})})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Topics"}),(0,l.jsxs)("ul",{className:d.columnList,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/topics",children:(0,l.jsx)(a.A,{id:"aboutOurServerlessEventBus",children:"About our serverless event bus"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/develop/guides/working-with-files-cache",children:(0,l.jsx)(a.A,{id:"integrateWithAmazonEventBridge",children:"Integrate with Amazon EventBridge"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/topics/webhooks",children:(0,l.jsx)(a.A,{id:"webhooksOverview",children:"Webhooks overview"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.gomomento.com/blog/how-to-create-a-slack-workflow-with-webhooks-in-momento-topics",target:"_blank",children:(0,l.jsxs)("div",{className:d.openInNew,children:[(0,l.jsx)("span",{children:(0,l.jsx)(a.A,{id:"publishMessagesToSlack",children:"Publish messages to Slack"})}),(0,l.jsx)(t.rDs,{})]})})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:(0,l.jsx)(a.A,{id:"forDevelopers",children:"For developers"})}),(0,l.jsxs)("ul",{className:d.columnList,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/sdks",children:(0,l.jsx)(a.A,{id:"availableSDKs",children:"Available SDKs"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/develop/authentication",children:(0,l.jsx)(a.A,{id:"authenticationAndAccessControl",children:"Authentication and access control"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/cache/develop/basics/error-handling-production-readiness",children:(0,l.jsx)(a.A,{id:"properlyHandlingErrorsInMomento",children:"Properly handling errors in Momento"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://aws.amazon.com/marketplace/pp/prodview-ndqotnrhhjyvo",target:"_blank",children:(0,l.jsxs)("div",{className:d.openInNew,children:[(0,l.jsx)("span",{children:(0,l.jsx)(a.A,{id:"momentoOnAWSMarketplace",children:"Momento on AWS Marketplace"})}),(0,l.jsx)(t.rDs,{})]})})})]})]})]})}),(0,l.jsxs)("div",{className:d.section,children:[(0,l.jsx)("h2",{className:d.sectionTitle,children:(0,l.jsx)(a.A,{id:"Overview",children:"Overview"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(a.A,{id:"momentoSimplifiesCloudArchitecture",children:"Momento simplifies cloud architecture and automates resource management so developers can build from zero to global scale without distractions. With our flagship "}),(0,l.jsx)("b",{children:"Cache"})," ",(0,l.jsx)(a.A,{id:"and",children:"and"})," ",(0,l.jsx)("b",{children:"Topics"})," ",(0,l.jsx)(a.A,{id:"servicesMomentoProvidesDevelopers",children:"services, Momento provides developers the building blocks they need to focus on the thing that matters most: "}),(0,l.jsx)("i",{children:(0,l.jsx)(a.A,{id:"yourBusinessProblem",children:"your business problem"})}),"."]}),(0,l.jsxs)("div",{className:d.columns,children:[(0,l.jsxs)("div",{className:d.subsectionDetail,children:[(0,l.jsxs)("h2",{className:d.subsectionTitle,children:[(0,l.jsx)(a.A,{id:"ItsAbout",children:"It's about "}),(0,l.jsx)("i",{children:(0,l.jsx)(a.A,{id:"developerProductivity",children:"developer productivity"})})]}),(0,l.jsx)("p",{children:(0,l.jsx)(a.A,{id:"weWantYouToMoveAsFastAsPossible",children:"We want you to move as fast as possible. Whether your database is pushing millions of transactions per second or you're publishing messages to tens of thousands of subscribers, Momento is with you managing the infrastructure, tackling scaling events, and providing you with simple API calls."})}),(0,l.jsx)("h2",{className:d.subsectionTitle,children:(0,l.jsx)(a.A,{id:"weGoWhereYouGo",children:"We go where you go"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(a.A,{id:"momentoWorksHardToProvideDevelopers",children:"Momento works hard to provide developers with SDKs in as many programming languages possible. We have clients for all types of projects: browsers, Android development, iOS apps, and 10+ server-side languages. Looking for tuned clients for your production environment or Lambda function? Our SDKs have"}),(0,l.jsx)("a",{href:"/cache/develop/basics/client-configuration-objects#pre-built-configurations",children:(0,l.jsx)(a.A,{id:"optimizedConfigurations",children:"optimized configurations"})})," ",(0,l.jsx)(a.A,{id:"forAnywhereDevelopmentTakesYou",children:"for anywhere development takes you."})]})]}),(0,l.jsx)("div",{className:d.subsectionGraphic,children:(0,l.jsx)("img",{src:"/img/landing-page-detail-graphic.png",width:300})})]}),(0,l.jsx)("h2",{className:d.subsectionTitle,children:(0,l.jsx)(a.A,{id:"simplifyYourCloudArchitecture",children:"Simplify your cloud architecture"})}),(0,l.jsx)("p",{children:(0,l.jsx)(a.A,{id:"buildingRobust",children:"Building robust, fault-tolerant systems at scale in the cloud is tough. We know. Lean on Momento's expertise to handle the infrastructure for you. Say goodbye to advanced networking, aggressive load balancing and scaling configurations, and complex WebSocket architectures. With Momento Cache and Topics, it's all managed for you - and getting better every day."})})]}),(0,l.jsxs)("div",{className:d.section,children:[(0,l.jsx)("h2",{className:d.sectionTitle,children:(0,l.jsx)(a.A,{id:"browseOurProducts",children:"Browse our products"})}),(0,l.jsx)("div",{className:d.productWrapper,children:(0,l.jsxs)("div",{className:d.products,children:[(0,l.jsx)(c.A,{title:"Cache",link:"/cache",description:"Serverless caching made simple",icon:"/img/cache/momento-cache-brand-icon.svg",variation:"dense"}),(0,l.jsx)(c.A,{title:"Topics",link:"/topics",description:"Event bus with webhook support",icon:"/img/topics/momento-topics-brand-icons.svg",variation:"dense"}),(0,l.jsx)(c.A,{title:"Leaderboards",link:"/leaderboards",description:"Durable and ready for massive scale",icon:"/img/leaderboards/momento-leaderboards-2d.svg",variation:"dense"})]})})]})]})]})})}}}]);