"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2746],{5680:(t,e,a)=>{a.d(e,{xA:()=>y,yg:()=>s});var n=a(6540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},y=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,y=g(t,["components","mdxType","originalType","parentName"]),p=m(a),u=r,s=p["".concat(o,".").concat(u)]||p[u]||d[u]||l;return a?n.createElement(s,i(i({ref:e},y),{},{components:a})):n.createElement(s,i({ref:e},y))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var g={};for(var o in e)hasOwnProperty.call(e,o)&&(g[o]=e[o]);g.originalType=t,g[p]="string"==typeof t?t:r,i[1]=g;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7127:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>m});var n=a(8168),r=(a(6540),a(5680));const l={sidebar_position:8,sidebar_label:"Limits & Availability",title:"Limits & Availability",pagination_next:null,description:"Explore Momento Cache service limits, the default values, and how to get them changed if you need.",hide_title:!0},i="Service Limits for Momento Cache",g={unversionedId:"cache/limits",id:"cache/limits",title:"Limits & Availability",description:"Explore Momento Cache service limits, the default values, and how to get them changed if you need.",source:"@site/docs/cache/limits.md",sourceDirName:"cache",slug:"/cache/limits",permalink:"/cache/limits",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/limits.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Limits & Availability",title:"Limits & Availability",pagination_next:null,description:"Explore Momento Cache service limits, the default values, and how to get them changed if you need.",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Pricing and Free Tier",permalink:"/cache/manage/pricing"}},o={},m=[{value:"Region Availability (AWS)",id:"region-availability-aws",level:2},{value:"Soft limits and support",id:"soft-limits-and-support",level:2},{value:"Operations",id:"operations",level:2}],y={toc:m},p="wrapper";function d(t){let{components:e,...a}=t;return(0,r.yg)(p,(0,n.A)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"service-limits-for-momento-cache"},"Service Limits for Momento Cache"),(0,r.yg)("p",null,'Momento Cache seeks to protect itself and its customers when it comes to service resources. To do this, every account, cache, and topic has service limits, or what we call "guardrails" (like a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:'),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Momento Cache limits"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"API rate per cache (data plane)"),(0,r.yg)("td",{parentName:"tr",align:null},"100 operations/s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"API rate per customer (control plane)"),(0,r.yg)("td",{parentName:"tr",align:null},"5 operations/s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Throughput per cache"),(0,r.yg)("td",{parentName:"tr",align:null},"1MB/s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Maximum item size"),(0,r.yg)("td",{parentName:"tr",align:null},"1MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Max cache count (per account)"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Time to live (TTL)"),(0,r.yg)("td",{parentName:"tr",align:null},"1 day")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Per ",(0,r.yg)("a",{parentName:"td",href:"https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts"},"collection (CDT)")," element size limit"),(0,r.yg)("td",{parentName:"tr",align:null},"128KB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Permissions per ",(0,r.yg)("a",{parentName:"td",href:"/cache/develop/api-reference/auth"},"API key or token"),"  (hard limit)"),(0,r.yg)("td",{parentName:"tr",align:null},"10")))),(0,r.yg)("h1",{id:"region-availability"},"Region Availability"),(0,r.yg)("p",null,"If your prefered provider or Region are not listed, ",(0,r.yg)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"contact us")," and let's talk."),(0,r.yg)("h2",{id:"region-availability-aws"},"Region Availability (AWS)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Region Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Region"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"US East (N.Virginia)"),(0,r.yg)("td",{parentName:"tr",align:null},"us-east-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"US East (Ohio)"),(0,r.yg)("td",{parentName:"tr",align:null},"us-east-2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"US West (Oregon)"),(0,r.yg)("td",{parentName:"tr",align:null},"us-west-2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Europe (Ireland)"),(0,r.yg)("td",{parentName:"tr",align:null},"eu-west-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Asia (Mumbai)"),(0,r.yg)("td",{parentName:"tr",align:null},"ap-south-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Asia (Tokyo)"),(0,r.yg)("td",{parentName:"tr",align:null},"ap-northeast-1")))),(0,r.yg)("h2",{id:"soft-limits-and-support"},"Soft limits and support"),(0,r.yg)("p",null,"The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to ",(0,r.yg)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento Support"),". Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you\u2019d like increased."),(0,r.yg)("h2",{id:"operations"},"Operations"),(0,r.yg)("p",null,"Service limits are based on the number of operations performed per second. Some cache data plane APIs can perform multiple operations in a single request."),(0,r.yg)("p",null,"Since multi-element operations are more efficient, the limit cost of these APIs is discounted at a ",(0,r.yg)("strong",{parentName:"p"},"2:1 ratio"),". This means every two elements will count as one operation towards the limiter. For example, a ",(0,r.yg)("inlineCode",{parentName:"p"},"SetAddElements")," request adding one or two elements costs one operation, but with three or four elements it costs two operations, etc."),(0,r.yg)("p",null,"The below table describes how the number of operations is calculated for all cache APIs."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"API Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Multi-Element API"),(0,r.yg)("th",{parentName:"tr",align:null},"Operations"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Set"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Get"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Delete"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Increment"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ping"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ItemGetType"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"KeyExists"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"KeysExist"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of keys in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetIfNotExists"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UpdateTtl"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IncreaseTtl"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DecreaseTtl"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ItemGetTtl"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryFetch"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of fields in response/2, or 1 if dictionary is not found")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryGetField"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryGetFields"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of fields in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryIncrement"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryRemoveField"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryRemoveFields"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of fields in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionarySetField"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionarySetFields"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of fields in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DictionaryLength"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListFetch"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if list is not found")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListConcatenateBack"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListConcatenateFront"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListLength"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListPopBack"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListPopFront"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListPushBack"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListPushFront"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListRemoveValue"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ListRetain"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetAddElement"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetAddElements"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetFetch"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if set is not found")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetRemoveElement"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetRemoveElements"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetContainsElement"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetContainsElements"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetLength"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetPutElement"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetPutElements"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetFetchByRank"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if sorted set is not found")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetFetchByScore"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in response/2, or 1 if sorted set is not found")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetGetScore"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetGetScores"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetRemoveElement"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetRemoveElements"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of elements in request/2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetGetRank"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetIncrementScore"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetLength"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SortedSetLengthByScore"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"1")))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"To further reduce the number of operations charged against your account, look into setting the ",(0,r.yg)("a",{parentName:"p",href:"./learn/how-it-works/read-concern"},"read concern")," header to ",(0,r.yg)("inlineCode",{parentName:"p"},"Express"),". This will reduce the charged operations count to 0.8x the default value, and will reduce latencies for frequently accessed keys.")))}d.isMDXComponent=!0}}]);