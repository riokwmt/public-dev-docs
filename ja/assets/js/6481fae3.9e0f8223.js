"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6842],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=v({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function E(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(E,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(C,(0,r.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>i});var r=n(4866),a=n(5162),o=n(614),l=n(7294);const i=e=>{let{js:t,python:n,java:i,kotlin:u,go:s,csharp:c,php:p,rust:d,ruby:m,elixir:v,swift:f,dart:h,cli:g}=e;return t||n||i||u||s||c||p||d||m||v||f||h||g?l.createElement(r.Z,null,t&&l.createElement(a.Z,{value:"js",label:"JavaScript"},l.createElement(o.Z,{language:"js"},t)),n&&l.createElement(a.Z,{value:"python",label:"Python"},l.createElement(o.Z,{language:"python"},n)),i&&l.createElement(a.Z,{value:"java",label:"Java"},l.createElement(o.Z,{language:"java"},i)),u&&l.createElement(a.Z,{value:"kotlin",label:"Kotlin"},l.createElement(o.Z,{language:"kotlin"},u)),s&&l.createElement(a.Z,{value:"go",label:"Go"},l.createElement(o.Z,{language:"go"},s)),c&&l.createElement(a.Z,{value:"csharp",label:"C#"},l.createElement(o.Z,{language:"csharp"},c)),p&&l.createElement(a.Z,{value:"php",label:"PHP"},l.createElement(o.Z,{language:"php"},p)),d&&l.createElement(a.Z,{value:"rust",label:"Rust"},l.createElement(o.Z,{language:"rust"},d)),m&&l.createElement(a.Z,{value:"ruby",label:"Ruby"},l.createElement(o.Z,{language:"ruby"},m)),v&&l.createElement(a.Z,{value:"elixir",label:"Elixir"},l.createElement(o.Z,{language:"elixir"},v)),f&&l.createElement(a.Z,{value:"swift",label:"Swift"},l.createElement(o.Z,{language:"swift"},f)),h&&l.createElement(a.Z,{value:"dart",label:"Dart"},l.createElement(o.Z,{language:"dart"},h)),g&&l.createElement(a.Z,{value:"cli",label:"CLI"},l.createElement(o.Z,{language:"cli"},g))):null}},6535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=(n(3404),n(9720));const l={sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},i="Momento SDK\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a",u={unversionedId:"topics/develop/index",id:"topics/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/index.md",sourceDirName:"topics/develop",slug:"/topics/develop/",permalink:"/ja/topics/develop/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"topicsSidebar",previous:{title:"AWS Secrets Manager",permalink:"/ja/topics/integrations/aws-secrets-manager"},next:{title:"Authentication",permalink:"/ja/topics/develop/authentication/"}},s={},c=[{value:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",id:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",level:2},{value:"Momento API \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",id:"momento-api-\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-sdk\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a"},"Momento SDK\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a"),(0,a.kt)("p",null,"\u3088\u3046\u3053\u305d\uff01 \u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u3059\u3079\u3066\u306eSDK\u3067Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a2\u30bb\u30f3\u30d6\u30eb\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u4e00\u822c\u7684\u306a\u69cb\u6210\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento \u306e\u8a8d\u8a3c\u60c5\u5831 (auth \u30c8\u30fc\u30af\u30f3\u3068\u547c\u3070\u308c\u307e\u3059) \u306e\u63d0\u4f9b\u65b9\u6cd5\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u672c\u756a\u74b0\u5883\u3078\u306e\u5bfe\u5fdc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u60c5\u5831\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9"},"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TopicClient")," \u306f\u3001Momento \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30e1\u30a4\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u3001\u305d\u3057\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL (time to live) \u5024\u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL \u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"CacheClient")," \u3092\u4f7f\u7528\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u524a\u9664\u3055\u308c\u308b\u307e\u3067\u306e\u4fdd\u5b58\u671f\u9593\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"TopicClient")," \u306e\u4f5c\u6210\u4f8b\u3067\u3059\uff1a"),(0,a.kt)(o.X,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\n    TopicConfigurations.Laptop.latest(),\n    new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")\n);\n',php:"",rust:"",ruby:"",elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h2",{id:"momento-api-\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"},"Momento API \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"),(0,a.kt)("p",null,"Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u969b\u306b\u3001Momento API\u30ad\u30fc\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u3060\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console")," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b Momento SDK \u306b\u30c8\u30fc\u30af\u30f3\u3092\u6e21\u3057\u307e\u3059\u3002\u74b0\u5883\u5909\u6570\u307e\u305f\u306f\u6587\u5b57\u5217\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30d5\u30a1\u30af\u30c8\u30ea\u30e1\u30bd\u30c3\u30c9\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u74b0\u5883\u5909\u6570\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059\uff1a"),(0,a.kt)(o.X,{js:"CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'});",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:"",csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",ruby:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3"),"\u3001\u307e\u305f\u306f\u30ed\u30fc\u30ab\u30eb\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u306bMomento API\u30ad\u30fc\u3092\u4fdd\u5b58\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u307e\u305a\u305d\u3053\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u6b21\u306e\u3088\u3046\u306b\u6587\u5b57\u5217\u304b\u3089",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),"\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,a.kt)(o.X,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"AWS Secrets Manager \u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"./develop/integrations/aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"Momento \u8a8d\u8a3c\u306b\u95a2\u3059\u308b\u4e00\u822c\u7684\u306a\u60c5\u5831\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"./develop/authentication"},"\u8a8d\u8a3c\u306e\u30da\u30fc\u30b8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"./develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u306e\u30da\u30fc\u30b8\u3084\u3001\u4f7f\u7528\u3057\u3066\u3044\u308bSDK\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8(\u5de6\u30ca\u30d3\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"SDKs")," \u306e\u4e0b)\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);