"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3545],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),c=n(1980),u=n(7392),s=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,u]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=c??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var f=n(2389);const v="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==i&&(d(t),c(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>i});var a=n(4866),r=n(5162),l=n(614),o=n(7294);const i=e=>{let{js:t,python:n,java:i,kotlin:c,go:u,csharp:s,php:d,rust:p,ruby:m,elixir:h,swift:b,dart:f,cli:v}=e;return t||n||i||c||u||s||d||p||m||h||b||f||v?o.createElement(a.Z,null,t&&o.createElement(r.Z,{value:"js",label:"JavaScript"},o.createElement(l.Z,{language:"js"},t)),n&&o.createElement(r.Z,{value:"python",label:"Python"},o.createElement(l.Z,{language:"python"},n)),i&&o.createElement(r.Z,{value:"java",label:"Java"},o.createElement(l.Z,{language:"java"},i)),c&&o.createElement(r.Z,{value:"kotlin",label:"Kotlin"},o.createElement(l.Z,{language:"kotlin"},c)),u&&o.createElement(r.Z,{value:"go",label:"Go"},o.createElement(l.Z,{language:"go"},u)),s&&o.createElement(r.Z,{value:"csharp",label:"C#"},o.createElement(l.Z,{language:"csharp"},s)),d&&o.createElement(r.Z,{value:"php",label:"PHP"},o.createElement(l.Z,{language:"php"},d)),p&&o.createElement(r.Z,{value:"rust",label:"Rust"},o.createElement(l.Z,{language:"rust"},p)),m&&o.createElement(r.Z,{value:"ruby",label:"Ruby"},o.createElement(l.Z,{language:"ruby"},m)),h&&o.createElement(r.Z,{value:"elixir",label:"Elixir"},o.createElement(l.Z,{language:"elixir"},h)),b&&o.createElement(r.Z,{value:"swift",label:"Swift"},o.createElement(l.Z,{language:"swift"},b)),f&&o.createElement(r.Z,{value:"dart",label:"Dart"},o.createElement(l.Z,{language:"dart"},f)),v&&o.createElement(r.Z,{value:"cli",label:"CLI"},o.createElement(l.Z,{language:"cli"},v))):null}},6807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),l=(n(3404),n(9720));const o={sidebar_position:4,sidebar_label:"Read Concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs"},i="What is Read Concern?",c={unversionedId:"cache/learn/how-it-works/read-concern",id:"cache/learn/how-it-works/read-concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs",source:"@site/docs/cache/learn/how-it-works/read-concern.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/read-concern",permalink:"/cache/learn/how-it-works/read-concern",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/read-concern.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Read Concern",title:"How to use Read Concern",description:"Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs"},sidebar:"tutorialSidebar",previous:{title:"Cache eviction vs expiration",permalink:"/cache/learn/how-it-works/cache-eviction-vs-expiration"},next:{title:"Security"}},u={},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-read-concern"},"What is Read Concern?"),(0,r.kt)("p",null,"By default, a Momento Cache follows an eventual consistency model. That is, if you write a value from the cache, and then quickly read it back within a small fraction of a second, there is a slim, but possible chance that the response will not reflect the most recently updated value. Momento clients provide a configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadConcern"),", which can be used to tune this behavior. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadConcern")," configuration can be modified to tune the level of consistency and responsiveness that your system requires. It can be modified accordingly:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Read Concern"),(0,r.kt)("th",{parentName:"tr",align:null},"Operation Count Multiplier"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Express"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8x"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Balanced"),(0,r.kt)("td",{parentName:"tr",align:null},"1x"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consistent"),(0,r.kt)("td",{parentName:"tr",align:null},"6x"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since this configuration is specified at the client level, it will be used for all api calls from that client. If there are only a few api calls that require read consistency, it is best to create 2 separate clients, one for a ",(0,r.kt)("inlineCode",{parentName:"p"},"Consistent")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadConcern"),", and another for a ",(0,r.kt)("inlineCode",{parentName:"p"},"Balanced")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Express")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadConcern"),". This way, only the consistent read requests will incur the 6x operations count multiplier.")),(0,r.kt)("p",null,"An example of instantiating a new client with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Consistent")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadConcern")," is shown below:"),(0,r.kt)(l.X,{js:"return await CacheClient.create({\n  configuration: Configurations.Laptop.v1().withReadConcern(ReadConcern.CONSISTENT),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n  defaultTtlSeconds: 60,\n});",python:"",java:"",kotlin:"",go:'context := context.Background()\ncredentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := time.Duration(9999)\neagerConnectTimeout := 30 * time.Second\n\nclient, err := momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest().WithReadConcern(config.CONSISTENT),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)',csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}p.isMDXComponent=!0}}]);