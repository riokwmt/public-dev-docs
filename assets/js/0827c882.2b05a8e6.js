"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3230],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=p({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=i??d;return g({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==s&&(d(t),i(r))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(S,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>s});var r=a(4866),n=a(5162),o=a(614),l=a(7294);const s=e=>{let{js:t,python:a,java:s,go:i,csharp:c,php:u,rust:d,ruby:m,elixir:g,swift:p,dart:h,cli:b}=e;return t||a||s||i||c||u||d||m||g||p||h||b?l.createElement(r.Z,null,t&&l.createElement(n.Z,{value:"js",label:"JavaScript"},l.createElement(o.Z,{language:"js"},t)),a&&l.createElement(n.Z,{value:"python",label:"Python"},l.createElement(o.Z,{language:"python"},a)),s&&l.createElement(n.Z,{value:"java",label:"Java"},l.createElement(o.Z,{language:"java"},s)),i&&l.createElement(n.Z,{value:"go",label:"Go"},l.createElement(o.Z,{language:"go"},i)),c&&l.createElement(n.Z,{value:"csharp",label:"C#"},l.createElement(o.Z,{language:"csharp"},c)),u&&l.createElement(n.Z,{value:"php",label:"PHP"},l.createElement(o.Z,{language:"php"},u)),d&&l.createElement(n.Z,{value:"rust",label:"Rust"},l.createElement(o.Z,{language:"rust"},d)),m&&l.createElement(n.Z,{value:"ruby",label:"Ruby"},l.createElement(o.Z,{language:"ruby"},m)),g&&l.createElement(n.Z,{value:"elixir",label:"Elixir"},l.createElement(o.Z,{language:"elixir"},g)),p&&l.createElement(n.Z,{value:"swift",label:"Swift"},l.createElement(o.Z,{language:"swift"},p)),h&&l.createElement(n.Z,{value:"dart",label:"Dart"},l.createElement(o.Z,{language:"dart"},h)),b&&l.createElement(n.Z,{value:"cli",label:"CLI"},l.createElement(o.Z,{language:"cli"},b))):null}},8406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),o=(a(3404),a(9720));const l={sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento API Key in AWS Secrets Manager."},s="Retrieving a Momento API Key from AWS Secrets Manager",i={unversionedId:"cache/develop/integrations/aws-secrets-manager",id:"cache/develop/integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento API Key in AWS Secrets Manager.",source:"@site/docs/cache/develop/integrations/aws-secrets-manager.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/aws-secrets-manager",permalink:"/cache/develop/integrations/aws-secrets-manager",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento API Key in AWS Secrets Manager."},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/cache/develop/integrations/momento-cache-laravel-php"},next:{title:"Bulk data writing",permalink:"/cache/develop/integrations/bulk-writing-from-redis-json-csv"}},c={},u=[{value:"Entry in AWS Secrets Manager",id:"entry-in-aws-secrets-manager",level:2},{value:"Example Code for AWS Secrets Manager",id:"example-code-for-aws-secrets-manager",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:u},m="wrapper";function g(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"retrieving-a-momento-api-key-from-aws-secrets-manager"},"Retrieving a Momento API Key from AWS Secrets Manager"),(0,n.kt)("p",null,"It's best practice to securely store your Momento API Key. If you are using AWS, you can securely store the auth token in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),". With that, only code running with the correct IAM credentials will be able to fetch the API key and use it to access Momento Cache or Momento Topics."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Just as you should reuse your Momento ",(0,n.kt)("inlineCode",{parentName:"p"},"CacheClient")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"TopicClient")," objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/"},"AWS blog"),".")),(0,n.kt)("h2",{id:"entry-in-aws-secrets-manager"},"Entry in AWS Secrets Manager"),(0,n.kt)("p",null,"When inserting the Momento API key into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Secrets Manager",src:a(174).Z,width:"938",height:"254"})),(0,n.kt)("h2",{id:"example-code-for-aws-secrets-manager"},"Example Code for AWS Secrets Manager"),(0,n.kt)(o.X,{js:"",python:"",java:'final Region region = Region.of("us-east-1");\n\n// Create a Secrets Manager client\nfinal SecretsManagerClient client =\n    SecretsManagerClient.builder()\n        .region(region)\n        // make sure to configure aws credentials in order to use the default provider\n        // https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/credentials/DefaultCredentialsProvider.html\n        .credentialsProvider(DefaultCredentialsProvider.create())\n        .build();\n\nfinal GetSecretValueRequest getSecretValueRequest =\n    GetSecretValueRequest.builder().secretId("AUTH_TOKEN_SECRET_NAME").build();\n\nfinal GetSecretValueResponse getSecretValueResponse;\n\ntry {\n  getSecretValueResponse = client.getSecretValue(getSecretValueRequest);\n} catch (Exception e) {\n  // For a list of exceptions thrown, see\n  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n  throw e;\n}\n\nfinal String secret = getSecretValueResponse.secretString();\ntry {\n  // store variable here\n  CredentialProvider.fromString(secret);\n} catch (SdkException e) {\n  throw new RuntimeException(\n      "An error occured while parsing the secrets manager vended" + " authentication token", e);\n}',go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Do I have to do this?"),"No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager."))}g.isMDXComponent=!0},174:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);