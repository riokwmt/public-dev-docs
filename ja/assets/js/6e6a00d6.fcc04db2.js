"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),i=n(6550),c=n(1980),l=n(7392),u=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,l]=h({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=l[n].value;r!==i&&(m(t),c(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},s,{className:(0,o.Z)("tabs__item",v,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function S(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(S,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},1184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={sidebar_position:3,sidebar_label:"AWS Secrets Manager",pagination_next:null,title:"Momento + AWS Secrets Manager",description:"Learn how to retreive your Momento Auth Token in AWS Secrets Manager."},c="Retrieving a Momento auth token from AWS Secrets Manager",l={unversionedId:"develop/sdks-integrations/aws-secrets-manager",id:"develop/sdks-integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retreive your Momento Auth Token in AWS Secrets Manager.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/sdks-integrations/aws-secrets-manager.md",sourceDirName:"develop/sdks-integrations",slug:"/develop/sdks-integrations/aws-secrets-manager",permalink:"/ja/develop/sdks-integrations/aws-secrets-manager",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks-integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"AWS Secrets Manager",pagination_next:null,title:"Momento + AWS Secrets Manager",description:"Learn how to retreive your Momento Auth Token in AWS Secrets Manager."},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/ja/develop/sdks-integrations/momento-cache-laravel-php"}},u={},m=[{value:"Entry in AWS Secrets Manager",id:"entry-in-aws-secrets-manager",level:2},{value:"Example Code for AWS Secrets Manager",id:"example-code-for-aws-secrets-manager",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:m};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieving-a-momento-auth-token-from-aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager"),(0,a.kt)("p",null,"It's best practice to securely store your Momento authentication token. If you are using AWS, you can securely store the auth token in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),". With that, only code running with the correct IAM credentials will be able to fetch the auth token and use it to access Momento Cache or Momento Topics."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Just as you should reuse your Momento ",(0,a.kt)("inlineCode",{parentName:"p"},"CacheClient")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TopicClient")," objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager.")),(0,a.kt)("h2",{id:"entry-in-aws-secrets-manager"},"Entry in AWS Secrets Manager"),(0,a.kt)("p",null,"When inserting the Momento auth token into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Secrets Manager",src:n(174).Z,width:"938",height:"254"})),(0,a.kt)("h2",{id:"example-code-for-aws-secrets-manager"},"Example Code for AWS Secrets Manager"),(0,a.kt)("p",null,"In the code examples below, you can see where the getToken function is called just before creating the Momento cache connection client as that is where the auth token is needed and the only time it is needed."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n    SecretsManagerClient,\n    GetSecretValueCommand,\n  } = require('@aws-sdk/client-secrets-manager');\nconst { CacheGet, CacheSet, Configurations, ListCaches, CreateCache,\n    CacheClient, CredentialProvider } = require('@gomomento/sdk');\n\n// Defines name of cache to use.\nconst CACHE_NAME = 'demo-cache2';\n  \n// A function that gets the Momento_Auth_Token you stored in AWS Secrets Manager.\n// The secret was stored as a plaintext string to avoid parsing JSON.\nasync function getToken(secretName) {\n  try {\n    // Set up the AWS Secrets Manager client\n    const client = new SecretsManagerClient({ region: \"us-west-2\"});\n\n    return await client.send(\n      new GetSecretValueCommand({\n        SecretId: secretName,\n        VersionStage: \"AWSCURRENT\", // VersionStage defaults to AWSCURRENT if unspecified\n      })\n    );\n  } catch (error) {\n    console.error(`Error fetching secret value for \"${secretName}\":`, error.message);\n    // For a list of exceptions thrown, see\n    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n    throw error;\n  }\n}\n\n// Create a Momento cache client connection object\nasync function createCacheClient() {\n    // Get the token from AWS Secrets Manager\n    const token = await getToken(\"Momento_Auth_Token\");\n\n    return new CacheClient({\n      configuration: Configurations.Laptop.v1(),\n      credentialProvider: CredentialProvider.fromString({\"authToken\" : token.SecretString}),\n      defaultTtlSeconds: 600,\n    });\n}\n\n// A function to write to the cache\nasync function writeToCache(client, cacheName, key, data) {\n    const setResponse = await client.set(cacheName, key, data);\n    if (setResponse instanceof CacheSet.Success) {\n      console.log('Key stored successfully!');\n    } else if (setResponse instanceof CacheSet.Error) {\n      console.log('Error setting key: ', setResponse.toString());\n    } else {\n      console.log('Some other error: ', setResponse.toString());\n    }\n  }\n  \n// A function to read scalar items from the cache\nasync function readFromCache(client, cacheName, key) {\n    const fileResponse = await client.get(cacheName, key);\n    if (fileResponse instanceof CacheGet.Hit) {\n        console.log('Cache hit: ', fileResponse.valueString());\n    } else if (fileResponse instanceof CacheGet.Miss) {\n        console.log('Cache miss');\n    } else if (fileResponse instanceof CacheGet.Error) {\n        console.log('Error: ', fileResponse.message());\n    }\n}\n\n// Call the various functions\nasync function run() {\n    const cacheClient = await createCacheClient();\n  \n    await writeToCache(cacheClient, CACHE_NAME, \"code\", \"12345\");\n    await readFromCache(cacheClient, CACHE_NAME, \"code\");\n}\n\nrun();\n"))),(0,a.kt)(s.Z,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"This code can be copied into a library file named GetClientFunctions.ts which you import into your own code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  CacheClient,\n  Configurations,\n  CredentialProvider\n} from \'@gomomento/sdk\';\n\nimport {\n  SecretsManagerClient,\n  GetSecretValueCommand,\n  GetSecretValueCommandOutput,\n} from \'@aws-sdk/client-secrets-manager\';\n\n/* A function that gets the Momento_Auth_Token stored in AWS Secrets Manager.\nThe secret was stored as a plaintext format in Secrets Manager to avoid parsing JSON.\n\nYou don\'t have to store the Momento auth token in something like AWS Secrets Manager,\nbut it is best practice. You could pass the Momento auth token in from an environment variable.\n\n*/\nasync function GetToken(\n  secretName: string,\n  regionName: string = "us-west-2"\n  ): Promise<string> {\n    try {\n      const client = new SecretsManagerClient({ region: regionName});\n      const response: GetSecretValueCommandOutput = await client.send(\n        new GetSecretValueCommand({\n          SecretId: secretName,\n          VersionStage: "AWSCURRENT",\n        })\n      );\n      return response.SecretString || \'\';\n    } catch (error) {\n      console.error(`Error fetching secret value for "${secretName}":`, error.message);\n      // For a list of exceptions thrown, see\n      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n      throw error;\n    }\n  }\n  \n// Function that calls to the GetToken function and then gets a client connection\n// object from Momento Cache and returns that for later use.\nexport default async function CreateCacheClient(\n  ttl:number = 600,\n  tokenName:string = "Momento_Auth_Token", \n  ): Promise<CacheClient> {\n  const token: string = await GetToken(tokenName);\n    return new CacheClient({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromString({ "authToken" : token }),\n        defaultTtlSeconds: ttl,\n    });\n}\n')))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Do I have to do this?"),"No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager."))}p.isMDXComponent=!0},174:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);