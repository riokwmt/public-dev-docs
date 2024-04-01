"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7248],{9365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(8168),r=a(6540),l=a(53),i=a(3104),s=a(6347),o=a(7485),u=a(1682),p=a(9466);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=c({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=o??g;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var y=a(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(g(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(N,(0,n.A)({},e,t)))}function x(e){const t=(0,y.A)();return r.createElement(b,(0,n.A)({key:String(t)},e))}},1441:(e,t,a)=>{a(6540)},5347:(e,t,a)=>{a.d(t,{r:()=>s});var n=a(1470),r=a(9365),l=a(2355),i=a(6540);const s=e=>{let{js:t,python:a,java:s,kotlin:o,go:u,csharp:p,php:g,rust:d,ruby:m,elixir:c,swift:h,dart:y,cli:f}=e;return t||a||s||o||u||p||g||d||m||c||h||y||f?i.createElement(n.A,null,t&&i.createElement(r.A,{value:"js",label:"JavaScript"},i.createElement(l.A,{language:"js"},t)),a&&i.createElement(r.A,{value:"python",label:"Python"},i.createElement(l.A,{language:"python"},a)),s&&i.createElement(r.A,{value:"java",label:"Java"},i.createElement(l.A,{language:"java"},s)),o&&i.createElement(r.A,{value:"kotlin",label:"Kotlin"},i.createElement(l.A,{language:"kotlin"},o)),u&&i.createElement(r.A,{value:"go",label:"Go"},i.createElement(l.A,{language:"go"},u)),p&&i.createElement(r.A,{value:"csharp",label:"C#"},i.createElement(l.A,{language:"csharp"},p)),g&&i.createElement(r.A,{value:"php",label:"PHP"},i.createElement(l.A,{language:"php"},g)),d&&i.createElement(r.A,{value:"rust",label:"Rust"},i.createElement(l.A,{language:"rust"},d)),m&&i.createElement(r.A,{value:"ruby",label:"Ruby"},i.createElement(l.A,{language:"ruby"},m)),c&&i.createElement(r.A,{value:"elixir",label:"Elixir"},i.createElement(l.A,{language:"elixir"},c)),h&&i.createElement(r.A,{value:"swift",label:"Swift"},i.createElement(l.A,{language:"swift"},h)),y&&i.createElement(r.A,{value:"dart",label:"Dart"},i.createElement(l.A,{language:"dart"},y)),f&&i.createElement(r.A,{value:"cli",label:"CLI"},i.createElement(l.A,{language:"cli"},f))):null}},6254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8168),r=(a(6540),a(5680)),l=(a(1441),a(5347));const i={sidebar_position:11,sidebar_label:"Filter expressions",title:"Filter expression API reference for Momento Vector Index",description:"Learn how to interact with the filter expressions in the Momento API for Vector Indexes."},s="Filter expressions in Momento Vector Index",o={unversionedId:"vector-index/develop/api-reference/filter-expressions",id:"vector-index/develop/api-reference/filter-expressions",title:"Filter expression API reference for Momento Vector Index",description:"Learn how to interact with the filter expressions in the Momento API for Vector Indexes.",source:"@site/docs/vector-index/develop/api-reference/filter-expressions.md",sourceDirName:"vector-index/develop/api-reference",slug:"/vector-index/develop/api-reference/filter-expressions",permalink:"/ja/vector-index/develop/api-reference/filter-expressions",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/api-reference/filter-expressions.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Filter expressions",title:"Filter expression API reference for Momento Vector Index",description:"Learn how to interact with the filter expressions in the Momento API for Vector Indexes."},sidebar:"vectorSidebar",previous:{title:"Auth",permalink:"/ja/vector-index/develop/api-reference/auth"},next:{title:"Response objects",permalink:"/ja/vector-index/develop/api-reference/response-objects"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Comparison expressions",id:"comparison-expressions",level:2},{value:"Equals",id:"equals",level:3},{value:"Greater than",id:"greater-than",level:3},{value:"Greater than or equals",id:"greater-than-or-equals",level:3},{value:"Less than",id:"less-than",level:3},{value:"Less than or equals",id:"less-than-or-equals",level:3},{value:"List contains",id:"list-contains",level:3},{value:"Id in set",id:"id-in-set",level:3},{value:"Logical expressions",id:"logical-expressions",level:2},{value:"And",id:"and",level:3},{value:"Or",id:"or",level:3},{value:"Not",id:"not",level:3}],g={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"filter-expressions-in-momento-vector-index"},"Filter expressions in Momento Vector Index"),(0,r.yg)("p",null,"Filter expressions further refine the results of a search. While the vector similarity search ranks items by vector similarity to the query vector, the filter expression applies an additional ",(0,r.yg)("inlineCode",{parentName:"p"},"where clause")," on the item metadata or ids. Only items satisfying the expression appear in the results."),(0,r.yg)("p",null,"They are used in the ",(0,r.yg)("inlineCode",{parentName:"p"},"filter")," parameter of the ",(0,r.yg)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/#search"},"search")," (",(0,r.yg)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/#search-and-fetch-vectors"},"searchAndFetchVectors"),") command."),(0,r.yg)("p",null,"Each language provides a convenience to create filter expressions. The following is the API reference for the filter expressions."),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Here we demo the entire API reference for filter expressions. Broadly we group the expressions into two categories:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#comparison-expressions"},"Comparison expressions"),": Directly compare a field's value and a specified value."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#logical-expressions"},"Logical expressions"),": Combine or modify filter expressions.")),(0,r.yg)("p",null,"For this example we will use a hypothetical dataset of movies (think ",(0,r.yg)("a",{parentName:"p",href:"https://www.imdb.com"},"IMDB"),") with the following schema:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"movie_title"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The title of the movie.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"year"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"The year the movie was released.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gross_revenue_millions"),(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"The gross revenue of the movie in millions of dollars.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"in_theaters"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the movie is currently in theaters.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"actors"),(0,r.yg)("td",{parentName:"tr",align:null},"string[]"),(0,r.yg)("td",{parentName:"tr",align:null},"The list of actors in the movie.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"directors"),(0,r.yg)("td",{parentName:"tr",align:null},"string[]"),(0,r.yg)("td",{parentName:"tr",align:null},"The list of directors of the movie.")))),(0,r.yg)(l.r,{js:"/*\n * For convenience, a filter expression factory can be imported as follows:\n * import { VectorFilterExpressions as F } from '@gomomento/sdk';\n */\n\n// Is the movie titled \"The Matrix\"?\nF.equals('movie_title', 'The Matrix');\n\n// Is the movie not titled \"The Matrix\"?\nF.not(F.equals('movie_title', 'The Matrix'));\n\n// Was the movie released in 1999?\nF.equals('year', 1999);\n\n// Did the movie gross 463.5 million dollars?\nF.equals('gross_revenue_millions', 463.5);\n\n// Was the movie in theaters?\nF.equals('in_theaters', true);\n\n// Was the movie released after 1990?\nF.greaterThan('year', 1990);\n\n// Was the movie released in or after 2020?\nF.greaterThanOrEqual('year', 2020);\n\n// Was the movie released before 2000?\nF.lessThan('year', 2000);\n\n// Was the movie released in or before 2000?\nF.lessThanOrEqual('year', 2000);\n\n// Was \"Keanu Reeves\" one of the actors?\nF.listContains('actors', 'Keanu Reeves');\n\n// Is the ID one of the following?\nF.idInSet(['tt0133093', 'tt0234215', 'tt0242653']);\n\n// Was the movie directed by \"Lana Wachowski\" and released after 2000?\nF.and(F.listContains('directors', 'Lana Wachowski'), F.greaterThan('year', 2000));\n\n// Was the movie directed by \"Lana Wachowski\" or released after 2000?\nF.or(F.listContains('directors', 'Lana Wachowski'), F.greaterThan('year', 2000));\n\n// Was \"Keanu Reeves\" not one of the actors?\nF.not(F.listContains('actors', 'Keanu Reeves'));",python:'# For convenience, the filter expressions classes can accessed with filters module:\n# from momento.requests.vector_index import filters as F\n#\n# You can use the Field class to create a more idiomatic filter expression by using the\n# overloaded comparison operators:\n# from momento.requests.vector_index import Field\n#\n# Below we demonstrate both approaches to creating filter expressions.\n\n# Is the movie titled "The Matrix"?\nF.Equals("movie_title", "The Matrix")\nField("movie_title") == "The Matrix"\n\n# Is the movie not titled "The Matrix"?\nF.Not(F.Equals("movie_title", "The Matrix"))\nField("movie_title") != "The Matrix"\n\n# Was the movie released in 1999?\nF.Equals("year", 1999)\nField("year") == 1999\n\n# Did the movie gross 463.5 million dollars?\nF.Equals("gross_revenue_millions", 463.5)\nField("gross_revenue_millions") == 463.5\n\n# Was the movie in theaters?\nF.Equals("in_theaters", True)\nField("in_theaters")\n\n# Was the movie released after 1990?\nF.GreaterThan("year", 1990)\nField("year") > 1990\n\n# Was the movie released in or after 2020?\nF.GreaterThanOrEqual("year", 2020)\nField("year") >= 2020\n\n# Was the movie released before 2000?\nF.LessThan("year", 2000)\nField("year") < 2000\n\n# Was the movie released in or before 2000?\nF.LessThanOrEqual("year", 2000)\nField("year") <= 2000\n\n# Was "Keanu Reeves" one of the actors?\nF.ListContains("actors", "Keanu Reeves")\nField("actors").list_contains("Keanu Reeves")\n\n# Is the ID one of the following?\nF.IdInSet(["tt0133093", "tt0234215", "tt0242653"])\n\n# Was the movie directed by "Lana Wachowski" and released after 2000?\nF.And(F.ListContains("directors", "Lana Wachowski"), F.GreaterThan("year", 2000))\nField("directors").list_contains("Lana Wachowski") & (Field("year") > 2000)\n\n# Was the movie directed by "Lana Wachowski" or released after 2000?\nF.Or(F.ListContains("directors", "Lana Wachowski"), F.GreaterThan("year", 2000))\nField("directors").list_contains("Lana Wachowski") | (Field("year") > 2000)\n\n# Was "Keanu Reeves" not one of the actors?\nF.Not(F.ListContains("actors", "Keanu Reeves"))\n\n',java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.yg)("h2",{id:"comparison-expressions"},"Comparison expressions"),(0,r.yg)("p",null,"Comparison expressions directly compare a field's value and a specified value. They are the basic building blocks of filter expressions."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The numeric comparison expressions (",(0,r.yg)("a",{parentName:"p",href:"#greater-than"},"greaterThan"),", ",(0,r.yg)("a",{parentName:"p",href:"#greater-than-or-equals"},"greaterThanOrEquals"),", ",(0,r.yg)("a",{parentName:"p",href:"#less-than"},"lessThan"),", ",(0,r.yg)("a",{parentName:"p",href:"#less-than-or-equals"},"lessThanOrEquals"),") are only supported for numeric-valued fields. The expression will not be satisfied if the item does not have a value for the field or if the value is not a number.")),(0,r.yg)("h3",{id:"equals"},"Equals"),(0,r.yg)("p",null,"Tests if a field's value exactly matches a given value."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the field to be compared.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"string ","|"," number ","|"," boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"The  value to test for exact match against the field's value.")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To express ",(0,r.yg)("inlineCode",{parentName:"p"},"not equals"),", chain the ",(0,r.yg)("a",{parentName:"p",href:"#not"},"not")," expression with the ",(0,r.yg)("a",{parentName:"p",href:"#equals"},"equals")," expression.")),(0,r.yg)("h3",{id:"greater-than"},"Greater than"),(0,r.yg)("p",null,"Tests if a field's value is greater than a specified value."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the field to be compared.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"The threshold value to test against.")))),(0,r.yg)("h3",{id:"greater-than-or-equals"},"Greater than or equals"),(0,r.yg)("p",null,"Tests if a field's value is greater than or equals a specified value."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the field to be compared.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"The threshold value to test against.")))),(0,r.yg)("h3",{id:"less-than"},"Less than"),(0,r.yg)("p",null,"Tests if a field's value is less than a specified value."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the field to be compared.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"The threshold value to test against.")))),(0,r.yg)("h3",{id:"less-than-or-equals"},"Less than or equals"),(0,r.yg)("p",null,"Tests if a field's value is less than or equals a specified value."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the field to be compared.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"The threshold value to test against.")))),(0,r.yg)("h3",{id:"list-contains"},"List contains"),(0,r.yg)("p",null,"Tests if a field's list of values includes a specified value."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the field containing a list of values.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The value to test for inclusion in the field's list.")))),(0,r.yg)("h3",{id:"id-in-set"},"Id in set"),(0,r.yg)("p",null,"Tests if an item's id is in a specified set of ids."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ids"),(0,r.yg)("td",{parentName:"tr",align:null},"string[]"),(0,r.yg)("td",{parentName:"tr",align:null},"The set of ids to test for inclusion.")))),(0,r.yg)("h2",{id:"logical-expressions"},"Logical expressions"),(0,r.yg)("p",null,"Logical expressions combine or modify filter expressions. Instead of directly comparing against item data like ",(0,r.yg)("a",{parentName:"p",href:"#comparison-expressions"},"comparison expressions"),", they operate on other filter expressions."),(0,r.yg)("h3",{id:"and"},"And"),(0,r.yg)("p",null,"Combines two filter expressions and returns items that satisfy both."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"firstExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"VectorFilterExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"The first expression to evaluate.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secondExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"VectorFilterExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"The second expression to evaluate.")))),(0,r.yg)("h3",{id:"or"},"Or"),(0,r.yg)("p",null,"Combines two filter expressions and returns items that satisfy either one or both."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"firstExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"VectorFilterExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"The first expression to evaluate.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secondExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"VectorFilterExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"The second expression to evaluate.")))),(0,r.yg)("h3",{id:"not"},"Not"),(0,r.yg)("p",null,"Negates the result of a filter expression."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"expression"),(0,r.yg)("td",{parentName:"tr",align:null},"VectorFilterExpression"),(0,r.yg)("td",{parentName:"tr",align:null},"The expression to negate.")))))}m.isMDXComponent=!0}}]);