"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3367],{2696:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>h,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(4848),n=s(8453);const i={sidebar_position:7,title:"HTTP API reference for Momento Cache",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching."},h="HTTP API Reference for Momento Cache",a={id:"cache/develop/api-reference/http-api",title:"HTTP API reference for Momento Cache",description:"Discover the HTTP API for edge computing services to access serverless caching.",source:"@site/docs/cache/develop/api-reference/http-api.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/http-api",permalink:"/cache/develop/api-reference/http-api",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API reference for Momento Cache",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching."},sidebar:"tutorialSidebar",previous:{title:"Auth",permalink:"/cache/develop/api-reference/auth"},next:{title:"CollectionTTL object",permalink:"/cache/develop/api-reference/collection-ttl"}},d={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Regions",id:"regions",level:2},{value:"Get Value",id:"get-value",level:2},{value:"Request",id:"request",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Responses",id:"responses",level:3},{value:"Hit",id:"hit",level:4},{value:"Miss",id:"miss",level:4},{value:"Error",id:"error",level:4},{value:"Set Value",id:"set-value",level:2},{value:"Request",id:"request-1",level:3},{value:"Body",id:"body",level:4},{value:"Path Parameters",id:"path-parameters-1",level:4},{value:"Query Parameters",id:"query-parameters-1",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Responses",id:"responses-1",level:3},{value:"Ok",id:"ok",level:4},{value:"Error",id:"error-1",level:4},{value:"Delete Value",id:"delete-value",level:2},{value:"Request",id:"request-2",level:3},{value:"Path Parameters",id:"path-parameters-2",level:4},{value:"Query Parameters",id:"query-parameters-2",level:4},{value:"Headers",id:"headers-2",level:4},{value:"Responses",id:"responses-2",level:3},{value:"Ok",id:"ok-1",level:4},{value:"Error",id:"error-2",level:4},{value:"Examples",id:"examples",level:2},{value:"Put",id:"put",level:3},{value:"Get",id:"get",level:3},{value:"Delete",id:"delete",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"http-api-reference-for-momento-cache",children:"HTTP API Reference for Momento Cache"}),"\n",(0,r.jsxs)(t.p,{children:["Momento provides an HTTP API interface for your applications that can\u2019t use our ",(0,r.jsx)(t.a,{href:"../",children:"SDKs"})," or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like ",(0,r.jsx)(t.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare Workers"}),", ",(0,r.jsx)(t.a,{href:"https://www.fastly.com/products/edge-compute",children:"Fastly Compute@Edge"}),", etm. this API is for you. Be aware that most other applications should likely use ",(0,r.jsx)(t.a,{href:"../",children:"Momento\u2019s SDK clients"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also view the Open API Specification in our ",(0,r.jsx)(t.a,{href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation",children:"public workspace in Postman"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use."})}),"\n",(0,r.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(t.p,{children:["For each connection, you will need a Momento auth token generated via the ",(0,r.jsx)(t.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"})," or a ",(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:'token "vending machine" microservice you host'}),". Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources."]}),"\n",(0,r.jsx)(t.h2,{id:"regions",children:"Regions"}),"\n",(0,r.jsxs)(t.p,{children:["To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache. If you do not see a region you require, let\u2019s discuss. Please ",(0,r.jsx)(t.a,{href:"mailto:support@momentohq.com",children:"contact support"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"AWS Region"}),(0,r.jsx)(t.th,{children:"Endpoints"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"us-west-2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com",children:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"us-east-1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"us-east-2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ap-northeast-1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ap-southeast-1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"eu-west-1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"eu-central-1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ap-south-1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com",children:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"get-value",children:"Get Value"}),"\n",(0,r.jsx)(t.p,{children:"Gets a scalar value from a cache."}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Path: /cache/{cacheName}"}),"\n",(0,r.jsx)(t.li,{children:"HTTP Method: GET"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cacheName"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"URL-safe string"}),(0,r.jsx)(t.td,{children:"The name of the cache to operate on."})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"no**"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The key to retrieve from the cache."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key_base64"}),(0,r.jsx)(t.td,{children:"no**"}),(0,r.jsx)(t.td,{children:"Base64\xa0URL-encoded\xa0binary\xa0key"}),(0,r.jsx)(t.td,{children:"The key to retrieve from the cache."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"token"}),(0,r.jsx)(t.td,{children:"no***"}),(0,r.jsx)(t.td,{children:"URL-safe string"}),(0,r.jsx)(t.td,{children:"The Momento auth token, in string format, to be used for authentication/authorization of the request."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."}),"\n",(0,r.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,r.jsx)(t.h4,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Header\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Authorization"}),(0,r.jsx)(t.td,{children:"no***"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The Momento auth token, in string format, is used for authentication/authorization of the request."})]})})]}),"\n",(0,r.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,r.jsx)(t.h3,{id:"responses",children:"Responses"}),"\n",(0,r.jsx)(t.h4,{id:"hit",children:"Hit"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 200 OK"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Content-Type: octet-stream"}),"\n",(0,r.jsx)(t.li,{children:"Body: The binary value stored at the specified key."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"miss",children:"Miss"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 404 Not Found"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'"Key Not Found" indicates that the key was not present in the cache, while "Cache Not Found" indicates that the specified cache does not exist.'}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"error",children:"Error"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 400 Bad Request"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the request was incorrectly specified. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 401 Unauthorized"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 403 Forbidden"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 429 Too Many Requests"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that account limits were exceeded. See the body of the message for further details, or contact Momento support to request a limit increase."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 500 Internal Server Error"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"set-value",children:"Set Value"}),"\n",(0,r.jsx)(t.p,{children:"Sets a scalar value in a cache."}),"\n",(0,r.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Path: /cache/{cacheName}"}),"\n",(0,r.jsx)(t.li,{children:"HTTP Method: PUT"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"body",children:"Body"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Content-Type: octet-stream"}),"\n",(0,r.jsx)(t.li,{children:"The body of the request should contain the binary value to be stored in the cache at the specified key."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"path-parameters-1",children:"Path Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cacheName"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"URL-safe string"}),(0,r.jsx)(t.td,{children:"The name of the cache to operate on."})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"query-parameters-1",children:"Query Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"no**"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The key to retrieve from the cache."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key_base64"}),(0,r.jsx)(t.td,{children:"no**"}),(0,r.jsx)(t.td,{children:"Base64\xa0URL-encoded\xa0binary\xa0key"}),(0,r.jsx)(t.td,{children:"The key to retrieve from the cache."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"token"}),(0,r.jsx)(t.td,{children:"no***"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The Momento auth token, in string format, to be used for authentication/authorization of the request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ttl_seconds"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsxs)(t.td,{children:["The TTL to be set on the key, in seconds. For more on TTL, see  ",(0,r.jsx)(t.a,{href:"../../learn/how-it-works/expire-data-with-ttl",children:"Expire Data with Time-to-Live"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."}),"\n",(0,r.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,r.jsx)(t.h4,{id:"headers-1",children:"Headers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Header\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Authorization"}),(0,r.jsx)(t.td,{children:"no***"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The Momento auth token, in string format, is used for authentication/authorization of the request."})]})})]}),"\n",(0,r.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,r.jsx)(t.h3,{id:"responses-1",children:"Responses"}),"\n",(0,r.jsx)(t.h4,{id:"ok",children:"Ok"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 204 No Content"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The key-value pair was stored in the cache, but no content was returned (by design)."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"error-1",children:"Error"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 400 Bad Request"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the request was incorrectly specified. See the message body for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 401 Unauthorized"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 403 Forbidden"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 404 Not Found"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u201cCache Not Found\u201d indicates that the specified cache does not exist."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 429 Too Many Requests"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 500 Internal Server Error"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"delete-value",children:"Delete Value"}),"\n",(0,r.jsx)(t.p,{children:"Deletes a scalar value from a cache."}),"\n",(0,r.jsx)(t.h3,{id:"request-2",children:"Request"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Path: /cache/{cacheName}"}),"\n",(0,r.jsx)(t.li,{children:"HTTP Method: DELETE"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"path-parameters-2",children:"Path Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cacheName"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"URL-safe string"}),(0,r.jsx)(t.td,{children:"The name of the cache to operate on."})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"query-parameters-2",children:"Query Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"no**"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The key to retrieve from the cache."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key_base64"}),(0,r.jsx)(t.td,{children:"no**"}),(0,r.jsx)(t.td,{children:"Base64\xa0URL-encoded\xa0binary\xa0key"}),(0,r.jsx)(t.td,{children:"The key to retrieve from the cache."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"token"}),(0,r.jsx)(t.td,{children:"no***"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The Momento auth token, in string format, to be used for authentication/authorization of the request."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."}),"\n",(0,r.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,r.jsx)(t.h4,{id:"headers-2",children:"Headers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Header\xa0name"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Authorization"}),(0,r.jsx)(t.td,{children:"no***"}),(0,r.jsx)(t.td,{children:"URL-safe\xa0string"}),(0,r.jsx)(t.td,{children:"The Momento auth token, in string format, is used for authentication/authorization of the request."})]})})]}),"\n",(0,r.jsx)(t.p,{children:"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."}),"\n",(0,r.jsx)(t.h3,{id:"responses-2",children:"Responses"}),"\n",(0,r.jsx)(t.h4,{id:"ok-1",children:"Ok"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 204 No Content"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The key-value pair was stored in the cache, but no content was returned (by design)."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"error-2",children:"Error"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 400 Bad Request"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the request was incorrectly specified. See the message body for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 401 Unauthorized"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 403 Forbidden"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 404 Not Found"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u201cCache Not Found\u201d indicates that the specified cache does not exist."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 429 Too Many Requests"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Status Code: 500 Internal Server Error"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"put",children:"Put"}),"\n",(0,r.jsxs)(t.p,{children:["Below is an example of a curl command that sets an item with a key of ",(0,r.jsx)(t.em,{children:"example_key"})," and value of ",(0,r.jsx)(t.em,{children:"example value"})," in the ",(0,r.jsx)(t.em,{children:"default-cache"})," cache in the ",(0,r.jsx)(t.em,{children:"ap-south-1"})," region:"]}),"\n",(0,r.jsx)(t.p,{children:"URL-safe Key, token provided in query parameter:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"curl -X PUT -d 'example value' \"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>\""})}),"\n",(0,r.jsxs)(t.p,{children:["Base64 Key, token as ",(0,r.jsx)(t.em,{children:"Authorization"})," header:\n",(0,r.jsx)(t.code,{children:'curl -X PUT -H "Authorization: <token>" -d \'example value\' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"'})]}),"\n",(0,r.jsx)(t.h3,{id:"get",children:"Get"}),"\n",(0,r.jsxs)(t.p,{children:["Below is an example of a curl command that gets an item with a key of ",(0,r.jsx)(t.em,{children:"example_key"})," in the ",(0,r.jsx)(t.em,{children:"default-cache"})," cache in the ",(0,r.jsx)(t.em,{children:"eu-west-1"})," region:"]}),"\n",(0,r.jsx)(t.p,{children:"URL-safe key, token provided in query parameter"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'curl "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"'})}),"\n",(0,r.jsxs)(t.p,{children:["Base64 Key, token provided as ",(0,r.jsx)(t.em,{children:"Authorization"})," header:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'curl -H "Authorization: <token>" "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"'})}),"\n",(0,r.jsx)(t.h3,{id:"delete",children:"Delete"}),"\n",(0,r.jsxs)(t.p,{children:["Below is an example of a curl command that deletes an item with a key of ",(0,r.jsx)(t.em,{children:"example_key"})," in the ",(0,r.jsx)(t.em,{children:"default-cache"})," cache in the ",(0,r.jsx)(t.em,{children:"us-west-2"})," region:"]}),"\n",(0,r.jsx)(t.p,{children:"URL-safe key, token provided in query parameter:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'curl -X DELETE "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"'})}),"\n",(0,r.jsxs)(t.p,{children:["Base64 Key, token provided as ",(0,r.jsx)(t.em,{children:"Authorization"})," header:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'curl -X DELETE -H "Authorization: <token>" "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"'})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>h,x:()=>a});var r=s(6540);const n={},i=r.createContext(n);function h(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);