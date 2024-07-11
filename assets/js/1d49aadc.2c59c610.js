"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3748],{5907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(4848),r=n(8453),s=(n(1441),n(5347));const o={sidebar_position:2,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager."},i="Retrieving a Momento auth token from AWS Secrets Manager",l={id:"topics/integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager.",source:"@site/docs/topics/integrations/aws-secrets-manager.md",sourceDirName:"topics/integrations",slug:"/topics/integrations/aws-secrets-manager",permalink:"/topics/integrations/aws-secrets-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager."},sidebar:"topicsSidebar",previous:{title:"Amazon EventBridge",permalink:"/topics/integrations/lambda-handler"},next:{title:"Patterns"}},c={},u=[{value:"Entry in AWS Secrets Manager",id:"entry-in-aws-secrets-manager",level:2},{value:"Example Code for AWS Secrets Manager",id:"example-code-for-aws-secrets-manager",level:2},{value:"FAQ",id:"faq",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"retrieving-a-momento-auth-token-from-aws-secrets-manager",children:"Retrieving a Momento auth token from AWS Secrets Manager"}),"\n",(0,a.jsxs)(t.p,{children:["It's best practice to securely store your Momento authentication token. If you are using AWS, you can securely store the auth token in ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"}),". With that, only code running with the correct IAM credentials will be able to fetch the auth token and use it to access Momento Cache or Momento Topics."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Just as you should reuse your Momento ",(0,a.jsx)(t.code,{children:"CacheClient"})," and ",(0,a.jsx)(t.code,{children:"TopicClient"})," objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/",children:"AWS blog"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"entry-in-aws-secrets-manager",children:"Entry in AWS Secrets Manager"}),"\n",(0,a.jsx)(t.p,{children:"When inserting the Momento auth token into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"AWS Secrets Manager",src:n(5200).A+"",width:"938",height:"254"})}),"\n",(0,a.jsx)(t.h2,{id:"example-code-for-aws-secrets-manager",children:"Example Code for AWS Secrets Manager"}),"\n",(0,a.jsx)(s.r,{js:"",python:"",java:'final Region region = Region.of("us-east-1");\n\n// Create a Secrets Manager client\nfinal SecretsManagerClient client =\n    SecretsManagerClient.builder()\n        .region(region)\n        // make sure to configure aws credentials in order to use the default provider\n        // https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/credentials/DefaultCredentialsProvider.html\n        .credentialsProvider(DefaultCredentialsProvider.create())\n        .build();\n\nfinal GetSecretValueRequest getSecretValueRequest =\n    GetSecretValueRequest.builder().secretId("AUTH_TOKEN_SECRET_NAME").build();\n\nfinal GetSecretValueResponse getSecretValueResponse;\n\ntry {\n  getSecretValueResponse = client.getSecretValue(getSecretValueRequest);\n} catch (Exception e) {\n  // For a list of exceptions thrown, see\n  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n  throw e;\n}\n\nfinal String secret = getSecretValueResponse.secretString();\ntry {\n  // store variable here\n  CredentialProvider.fromString(secret);\n} catch (SdkException e) {\n  throw new RuntimeException(\n      "An error occured while parsing the secrets manager vended" + " authentication token", e);\n}',kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(o,{children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)("summary",{children:"Do I have to do this?"}),"\nNo. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),r=n(4164),s=n(3104),o=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=c??p;return g({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(A,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(t))}},1441:(e,t,n)=>{n(6540)},5347:(e,t,n)=>{n.d(t,{r:()=>i});var a=n(1470),r=n(9365),s=n(1432),o=(n(6540),n(4848));const i=e=>{let{js:t,python:n,java:i,kotlin:l,go:c,csharp:u,php:d,rust:h,ruby:g,elixir:m,swift:p,dart:b,cli:f}=e;return t||n||i||l||c||u||d||h||g||m||p||b||f?(0,o.jsxs)(a.A,{children:[t&&(0,o.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(s.A,{language:"js",children:t})}),n&&(0,o.jsx)(r.A,{value:"python",label:"Python",children:(0,o.jsx)(s.A,{language:"python",children:n})}),i&&(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(s.A,{language:"java",children:i})}),l&&(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(s.A,{language:"kotlin",children:l})}),c&&(0,o.jsx)(r.A,{value:"go",label:"Go",children:(0,o.jsx)(s.A,{language:"go",children:c})}),u&&(0,o.jsx)(r.A,{value:"csharp",label:"C#",children:(0,o.jsx)(s.A,{language:"csharp",children:u})}),d&&(0,o.jsx)(r.A,{value:"php",label:"PHP",children:(0,o.jsx)(s.A,{language:"php",children:d})}),h&&(0,o.jsx)(r.A,{value:"rust",label:"Rust",children:(0,o.jsx)(s.A,{language:"rust",children:h})}),g&&(0,o.jsx)(r.A,{value:"ruby",label:"Ruby",children:(0,o.jsx)(s.A,{language:"ruby",children:g})}),m&&(0,o.jsx)(r.A,{value:"elixir",label:"Elixir",children:(0,o.jsx)(s.A,{language:"elixir",children:m})}),p&&(0,o.jsx)(r.A,{value:"swift",label:"Swift",children:(0,o.jsx)(s.A,{language:"swift",children:p})}),b&&(0,o.jsx)(r.A,{value:"dart",label:"Dart",children:(0,o.jsx)(s.A,{language:"dart",children:b})}),f&&(0,o.jsx)(r.A,{value:"cli",label:"CLI",children:(0,o.jsx)(s.A,{language:"cli",children:f})})]}):null}},5200:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);