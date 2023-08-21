"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(y,s(s({ref:t},d),{},{components:a})):o.createElement(y,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:2,sidebar_label:"Data Types",sidebar_class_name:"sidebar-item-data-types",title:"Supported data types",pagination_prev:null,pagination_next:null,description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each."},s="Supported data types in Momento Cache and Momento Topics",i={unversionedId:"develop/datatypes",id:"develop/datatypes",title:"Supported data types",description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each.",source:"@site/docs/develop/datatypes.md",sourceDirName:"develop",slug:"/develop/datatypes",permalink:"/develop/datatypes",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/datatypes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Data Types",sidebar_class_name:"sidebar-item-data-types",title:"Supported data types",pagination_prev:null,pagination_next:null,description:"Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each."},sidebar:"tutorialSidebar"},l={},c=[{value:"Core data types of Momento Cache and Topics",id:"core-data-types-of-momento-cache-and-topics",level:2},{value:"Byte arrays",id:"byte-arrays",level:3},{value:"Collection data types (CDTs)",id:"collection-data-types-cdts",level:3},{value:"Lists",id:"lists",level:4},{value:"Dictionaries",id:"dictionaries",level:4},{value:"Sets",id:"sets",level:4},{value:"Sorted sets",id:"sorted-sets",level:4},{value:"FAQs",id:"faqs",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supported-data-types-in-momento-cache-and-momento-topics"},"Supported data types in Momento Cache and Momento Topics"),(0,n.kt)("p",null,"Momento Cache provides a group of core data types to match up with common types in various modern programming languages. This page has a list of the core data structures and information about each of them."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image of a fast moving collection of various data types and ideas",src:a(9882).Z,width:"1000",height:"398"})),(0,n.kt)("h2",{id:"core-data-types-of-momento-cache-and-topics"},"Core data types of Momento Cache and Topics"),(0,n.kt)("h3",{id:"byte-arrays"},"Byte arrays"),(0,n.kt)("p",null,"All data stored is represented as byte arrays. The Momento SDKs provide easy methods you can use to store your data as raw bytes or as portable UTF-8 strings. Those can be in the form of scalar data, such as strings, characters, numbers, and binary data, such as images and Protocol Buffers serialized arrays."),(0,n.kt)("h3",{id:"collection-data-types-cdts"},"Collection data types (CDTs)"),(0,n.kt)("p",null,"Collection Data Types are a grouping of related data into a single item. They are stored as byte array values and each has their own set of API calls in Momento SDKs. For example, DictionaryFetch, ListFetch, and SetFetch."),(0,n.kt)("img",{src:"/img/collection_data_types.png",alt:"Collection data types drawing | Momento Cache",width:"80%"}),(0,n.kt)("h4",{id:"lists"},"Lists"),(0,n.kt)("p",null,"A list is a collection of ordered elements, sorted in the sequence each element was inserted."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'"Hoover\u2019s Sour Cream Cookies" = [\n  "1 cup butter (2 sticks), room temperature", \n  "1 cup granulated sugar",\n  "1 cup brown sugar, packed",\n  "3 eggs, room temperature",\n  "1 cup sour cream, room temperature",\n  "1 tsp pure vanilla extract",\n  "3 cups all-purpose flour",\n  "1 tsp baking powder",\n  "1 tsp baking soda",\n  "1 tsp salt"\n]\n')),(0,n.kt)("p",null,"To learn the API methods, check the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference/collections/list"},"API reference for list collection data types"),"."),(0,n.kt)("h4",{id:"dictionaries"},"Dictionaries"),(0,n.kt)("p",null,"A dictionary is a collection of unordered elements where each element is a field:value pair."),(0,n.kt)("p",null,"An example of using a dictionary is when you need to store data together and retrieve field:value pairs by name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'"truck546" = {\n    "brand" : "Ford", \n    "model": "F-350",\n    "year" : "2020",\n    "engine" : "diesel"\n}\n')),(0,n.kt)("p",null,"To learn the API methods, check the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference/collections/dictionary"},"API reference for dictionary collection data types"),"."),(0,n.kt)("h4",{id:"sets"},"Sets"),(0,n.kt)("p",null,"A set is an unordered collection of unique elements, each in string format. For example, no matter how many times you add 'sugar' to a set, there will only be one entry for 'sugar'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'"myIngredients" = {\n    "water",\n    "sugar",\n    "ground cinnamon",\n    "all-purpose flour",\n    "baking soda",\n    "raisins"\n}\n')),(0,n.kt)("p",null,"To learn the API methods, check the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference/collections/sets"},"API reference for set collection data types"),"."),(0,n.kt)("h4",{id:"sorted-sets"},"Sorted sets"),(0,n.kt)("p",null,"A sorted set is a collection of unique elements with a value (string) and score (signed double 64-bit float) pair. The elements in the item are ordered by score value. For example,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'"players" = {\n    "SorataABard" : 32.7,\n    "Juliversal" : 30.45,\n    "DragonNosy" : 26.8,\n    "redbyrd" : 26.8,\n    "SaltyAdjeley" : 23.25,\n    "ZachAttack" : 17.3,\n    "ElyahouBeets" : 5.0,\n    "Smashley" : 3.2"\n}\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If elements have the same score, they are sorted ",(0,n.kt)("a",{parentName:"p",href:"https://www.dictionary.com/browse/lexicographically"},"lexicographically"),".")),(0,n.kt)("p",null,"To learn the API methods, check the ",(0,n.kt)("a",{parentName:"p",href:"/develop/api-reference/collections/sortedsets"},"API reference for sorted set collection data types"),"."),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"If I perform an API call to get a subset of data from a dictionary item, will the size of the entire item count toward the per GB transfer costs?"),"No, it will not. For example, if you perform the API call DictionaryGetField to get one 5-kilobyte field:value pair from a dictionary where the entire dictionary item is 50 kilobytes, only 5 kilobytes count towards your per GB transfer costs."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I store a JSON document in Momento Cache?"),"Use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Cache. You could also store each field value in your JSON document in a dictionary."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Does Momento Cache store nested data in collection data types?"),"Not directly. Your best option is to store this data as a JSON object and then use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Cache."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I format elements when using the increment APIs?"),"Elements used with increment API calls must be stored as a UTF-8 string representing a base 10 integer. If the elements are not in that format, the API calls will throw a formatting error."))}p.isMDXComponent=!0},9882:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/more-data-types-a8bcc9cdad91adbca06deab5d6934240.jpg"}}]);