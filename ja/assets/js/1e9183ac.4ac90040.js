"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9199],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),s=a(2466),o=a(6550),c=a(1980),i=a(7392),u=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,i]=g({queryString:a,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),h(e)}),[i,h,l]),tabValues:l}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==o&&(m(t),c(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},s,{className:(0,l.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(S,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>o});var r=a(4866),n=a(5162),l=a(614),s=a(7294);const o=e=>{let{js:t,python:a,java:o,go:c,csharp:i,php:u,rust:m,ruby:d,elixir:p,swift:g,cli:h}=e;return t||a||o||c||i||u||m||d||p||g||h?s.createElement(r.Z,null,t&&s.createElement(n.Z,{value:"js",label:"JavaScript"},s.createElement(l.Z,{language:"js"},t)),a&&s.createElement(n.Z,{value:"python",label:"Python"},s.createElement(l.Z,{language:"python"},a)),o&&s.createElement(n.Z,{value:"java",label:"Java"},s.createElement(l.Z,{language:"java"},o)),c&&s.createElement(n.Z,{value:"go",label:"Go"},s.createElement(l.Z,{language:"go"},c)),i&&s.createElement(n.Z,{value:"csharp",label:"C#"},s.createElement(l.Z,{language:"csharp"},i)),u&&s.createElement(n.Z,{value:"php",label:"PHP"},s.createElement(l.Z,{language:"php"},u)),m&&s.createElement(n.Z,{value:"rust",label:"Rust"},s.createElement(l.Z,{language:"rust"},m)),d&&s.createElement(n.Z,{value:"ruby",label:"Ruby"},s.createElement(l.Z,{language:"ruby"},d)),p&&s.createElement(n.Z,{value:"elixir",label:"Elixir"},s.createElement(l.Z,{language:"elixir"},p)),g&&s.createElement(n.Z,{value:"swift",label:"Swift"},s.createElement(l.Z,{language:"swift"},g)),h&&s.createElement(n.Z,{value:"cli",label:"CLI"},s.createElement(l.Z,{language:"cli"},h))):null}},4652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),l=(a(3404),a(9720));const s={sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"AWS Secrets Manager\u304b\u3089Momento API Key \u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076\u3002"},o="AWS Secrets Manager\u304b\u3089Momento API Key \u3092\u53d6\u5f97\u3059\u308b",c={unversionedId:"cache/develop/integrations/aws-secrets-manager",id:"cache/develop/integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"AWS Secrets Manager\u304b\u3089Momento API Key \u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/aws-secrets-manager.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/aws-secrets-manager",permalink:"/ja/cache/develop/integrations/aws-secrets-manager",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"AWS Secrets Manager\u304b\u3089Momento API Key \u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076\u3002"},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/ja/cache/develop/integrations/momento-cache-laravel-php"},next:{title:"\u30c7\u30fc\u30bf\u3092\u307e\u3068\u3081\u3066\u66f8\u304d\u8fbc\u3080",permalink:"/ja/cache/develop/integrations/bulk-writing-from-redis-json-csv"}},i={},u=[{value:"AWS Secrets Manager\u3078\u306e\u5165\u529b",id:"aws-secrets-manager\u3078\u306e\u5165\u529b",level:2},{value:"AWS Secrets Manager\u306e\u30b3\u30fc\u30c9\u4f8b",id:"aws-secrets-manager\u306e\u30b3\u30fc\u30c9\u4f8b",level:2},{value:"\u3088\u304f\u3042\u308b\u8cea\u554f\uff08FAQ\uff09",id:"\u3088\u304f\u3042\u308b\u8cea\u554ffaq",level:2}],m={toc:u},d="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-secrets-manager\u304b\u3089momento-api-key-\u3092\u53d6\u5f97\u3059\u308b"},"AWS Secrets Manager\u304b\u3089Momento API Key \u3092\u53d6\u5f97\u3059\u308b"),(0,n.kt)("p",null,"Momento API Key\u3092\u5b89\u5168\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u3002AWS\u3092\u3054\u4f7f\u7528\u306e\u5834\u5408\u306f\u3001Momento API Key\u3092",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),"\u306b\u5b89\u5168\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u6b63\u3057\u3044IAM\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306e\u307f\u304cMomento API key\u3092\u53d6\u5f97\u3057\u3001\u305d\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u3063\u3066Momento Cache\u307e\u305f\u306fMomento Topics\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,":::\u5099\u8003"),(0,n.kt)("p",null,"\u53ef\u80fd\u3067\u3042\u308c\u3070Momento\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"CacheClient"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"TopicClient"),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u518d\u5229\u7528\u3057\u305f\u65b9\u304c\u3044\u3044\u3088\u3046\u306b\u3001AWS Secrets Manager\u304b\u3089\u53d6\u5f97\u3057\u305fMomento\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u3063\u3066\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u518d\u5229\u7528\u3057\u305f\u65b9\u304c\u3088\u3044\u3067\u3059\u3002\u518d\u5229\u7528\u3057\u306a\u3051\u308c\u3070\u3001AWS Secrets Manager\u3078\u306e\u30e9\u30a6\u30f3\u30c9\u30c8\u30ea\u30c3\u30d7\u306b\u5bfe\u3059\u308b\u5404MomentoAPI\u547c\u3073\u51fa\u3057\u306b\u5bfe\u3057\u3066\u3001\u6642\u9593\u9762\u3068\u91d1\u92ad\u9762\u306e\u4e21\u65b9\u304b\u3089\u8ca0\u62c5\u304c\u5897\u3048\u308b\u5371\u967a\u6027\u304c\u751f\u3058\u307e\u3059\u3002\u8ca0\u62c5\u3092\u6291\u3048\u3001AWS Secrets Manager\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u308b\u53ef\u80fd\u6027\u3092\u6392\u9664\u3059\u308b\u306b\u306f\u3001\u3053\u306e",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/"},"AWS\u30d6\u30ed\u30b0"),"\u3067\u8a73\u7d30\u306b\u3054\u8aac\u660e\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u305f\u901a\u308a\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u3067\u3059\u3002\n:::"),(0,n.kt)("h2",{id:"aws-secrets-manager\u3078\u306e\u5165\u529b"},"AWS Secrets Manager\u3078\u306e\u5165\u529b"),(0,n.kt)("p",null,"Momento API key\u3092AWS Secrets Manager\u3078\u5165\u529b\u3059\u308b\u969b\u306f\u3001\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u901a\u308a\u3001JSON\u3092\u542b\u307e\u306a\u3044\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u5165\u529b\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u305f\u3081\u30c8\u30fc\u30af\u30f3\u306b\u306f\u307c\u304b\u3057\u3092\u5165\u308c\u3066\u304a\u308a\u307e\u3059\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Secrets Manager",src:a(174).Z,width:"938",height:"254"})),(0,n.kt)("h2",{id:"aws-secrets-manager\u306e\u30b3\u30fc\u30c9\u4f8b"},"AWS Secrets Manager\u306e\u30b3\u30fc\u30c9\u4f8b"),(0,n.kt)(l.X,{js:"",python:"",java:'final Region region = Region.of("us-east-1");\n\n// Create a Secrets Manager client\nfinal SecretsManagerClient client =\n    SecretsManagerClient.builder()\n        .region(region)\n        // make sure to configure aws credentials in order to use the default provider\n        // https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/credentials/DefaultCredentialsProvider.html\n        .credentialsProvider(DefaultCredentialsProvider.create())\n        .build();\n\nfinal GetSecretValueRequest getSecretValueRequest =\n    GetSecretValueRequest.builder().secretId("AUTH_TOKEN_SECRET_NAME").build();\n\nfinal GetSecretValueResponse getSecretValueResponse;\n\ntry {\n  getSecretValueResponse = client.getSecretValue(getSecretValueRequest);\n} catch (Exception e) {\n  // For a list of exceptions thrown, see\n  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n  throw e;\n}\n\nfinal String secret = getSecretValueResponse.secretString();\ntry {\n  // store variable here\n  CredentialProvider.fromString(secret);\n} catch (SdkException e) {\n  throw new RuntimeException(\n      "An error occured while parsing the secrets manager vended" + " authentication token", e);\n}',go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h2",{id:"\u3088\u304f\u3042\u308b\u8cea\u554ffaq"},"\u3088\u304f\u3042\u308b\u8cea\u554f\uff08FAQ\uff09"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Momento API key\u3092AWS Secrets Manager\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b\uff1f"),"\u3042\u308a\u307e\u3059\u3002Momento\u306eAPI key\u3092\u74b0\u5883\u5909\u6570\u3084\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304c\u3001AWS Secrets Manager\u306a\u3069\u306b\u4fdd\u5b58\u3059\u308b\u3088\u308a\u3082\u5b89\u5168\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"))}p.isMDXComponent=!0},174:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);