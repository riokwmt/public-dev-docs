"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6215],{4890:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=s(4848),i=s(8453);const o={sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},r="HTTP API Reference for Momento Topics",c={id:"topics/develop/api-reference/http-api",title:"HTTP API for Momento Topics",description:"Discover the HTTP API for edge computing services to access pub/sub services.",source:"@site/docs/topics/develop/api-reference/http-api.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/http-api",permalink:"/topics/develop/api-reference/http-api",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},sidebar:"topicsSidebar",previous:{title:"Webhooks",permalink:"/topics/develop/api-reference/webhooks"},next:{title:"Response objects",permalink:"/topics/develop/api-reference/response-objects"}},h={},a=[{value:"Authentication",id:"authentication",level:2},{value:"Regions",id:"regions",level:2},{value:"Publish",id:"publish",level:2},{value:"Request",id:"request",level:3},{value:"Body",id:"body",level:4},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Error",id:"error",level:3},{value:"Examples",id:"examples",level:2},{value:"Publish",id:"publish-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"http-api-reference-for-momento-topics",children:"HTTP API Reference for Momento Topics"}),"\n",(0,n.jsxs)(t.p,{children:["Momento provides an HTTP API interface for your applications that can\u2019t use our ",(0,n.jsx)(t.a,{href:"../",children:"SDKs"})," or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like ",(0,n.jsx)(t.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare Workers"}),", ",(0,n.jsx)(t.a,{href:"https://www.fastly.com/products/edge-compute",children:"Fastly Compute@Edge"}),", etm. this API is for you. Be aware that most other applications should likely use ",(0,n.jsx)(t.a,{href:"../",children:"Momento\u2019s SDK clients"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also view the Open API Specification in our ",(0,n.jsx)(t.a,{href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation",children:"public workspace in Postman"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use."})}),"\n",(0,n.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(t.p,{children:["For each connection, you will need a Momento auth token generated via the ",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"})," or a ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:'token "vending machine" microservice you host'}),". Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources."]}),"\n",(0,n.jsx)(t.h2,{id:"regions",children:"Regions"}),"\n",(0,n.jsxs)(t.p,{children:["To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache. If you do not see a region you require, let\u2019s discuss. Please ",(0,n.jsx)(t.a,{href:"mailto:support@momentohq.com",children:"contact support"}),"."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"AWS Region"}),(0,n.jsx)(t.th,{children:"Endpoints"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"us-west-2"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com",children:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"us-east-1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"us-east-2"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ap-northeast-1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ap-southeast-1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eu-west-1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eu-central-1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ap-south-1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"publish",children:"Publish"}),"\n",(0,n.jsx)(t.p,{children:"Publishes a message to a topic."}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Path: /topics/{cacheName}/{topicName}"}),"\n",(0,n.jsx)(t.li,{children:"HTTP Method: POST"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"body",children:"Body"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Content-Type: octet-stream"}),"\n",(0,n.jsx)(t.li,{children:"The body of the request should contain the binary value to be published to the topic."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter\xa0name"}),(0,n.jsx)(t.th,{children:"Required?"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cacheName"}),(0,n.jsx)(t.td,{children:"yes"}),(0,n.jsx)(t.td,{children:"URL-safe string"}),(0,n.jsx)(t.td,{children:"The name of the cache containing the topic."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"topicName"}),(0,n.jsx)(t.td,{children:"yes"}),(0,n.jsx)(t.td,{children:"URL-safe string"}),(0,n.jsx)(t.td,{children:"Name of the topic to publish to."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter\xa0name"}),(0,n.jsx)(t.th,{children:"Required?"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"token"}),(0,n.jsx)(t.td,{children:"no**"}),(0,n.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,n.jsx)(t.td,{children:"The Momento auth token, in string format, to be used for authentication/authorization of the request."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,n.jsx)(t.h4,{id:"headers",children:"Headers"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Header\xa0name"}),(0,n.jsx)(t.th,{children:"Required?"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authorization"}),(0,n.jsx)(t.td,{children:"no**"}),(0,n.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,n.jsx)(t.td,{children:"The Momento auth token, in string format, is used for authentication/authorization of the request."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 204 No Content"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The message was successfully published to the provided topic"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"error",children:"Error"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 400 Bad Request"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This error type typically indicates that the request was incorrectly specified. See the message body for further details."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 401 Unauthorized"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 403 Forbidden"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 404 Not Found"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u201cCache Not Found\u201d indicates that the specified cache does not exist."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 429 Too Many Requests"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Status Code: 500 Internal Server Error"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"publish-1",children:"Publish"}),"\n",(0,n.jsxs)(t.p,{children:["Below is an example that publishes the value ",(0,n.jsx)(t.code,{children:"hello world!"})," to the ",(0,n.jsx)(t.em,{children:"example"})," topic in the ",(0,n.jsx)(t.em,{children:"my-cache"})," cache in the ",(0,n.jsx)(t.em,{children:"us-east-1"})," region."]}),"\n",(0,n.jsx)(t.p,{children:"Token provided in query parameter:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"curl -X POST -d 'hello world!' \"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>\""})}),"\n",(0,n.jsxs)(t.p,{children:["Token provided as ",(0,n.jsx)(t.em,{children:"Authorization"})," header:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'curl -X POST -H "Authorization: <token>" -d \'hello world!\' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);