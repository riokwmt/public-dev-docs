"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Momento Vector Index cheat sheet for TypeScript and Node.js",description:"Everything to get you going with coding using Node.js and Momento Vector Index"},a="Cheat Sheet for Node.js with Momento Vector Index",s={unversionedId:"vector-index/develop/sdks/nodejs/cheat-sheet",id:"vector-index/develop/sdks/nodejs/cheat-sheet",title:"Momento Vector Index cheat sheet for TypeScript and Node.js",description:"Everything to get you going with coding using Node.js and Momento Vector Index",source:"@site/docs/vector-index/develop/sdks/nodejs/cheat-sheet.md",sourceDirName:"vector-index/develop/sdks/nodejs",slug:"/vector-index/develop/sdks/nodejs/cheat-sheet",permalink:"/vector-index/develop/sdks/nodejs/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/sdks/nodejs/cheat-sheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Momento Vector Index cheat sheet for TypeScript and Node.js",description:"Everything to get you going with coding using Node.js and Momento Vector Index"},sidebar:"vectorSidebar",previous:{title:"Node.js",permalink:"/vector-index/develop/sdks/nodejs/"},next:{title:"JS Web",permalink:"/vector-index/develop/sdks/web/"}},l={},c=[{value:"Import libraries and instantiate a vector index client",id:"import-libraries-and-instantiate-a-vector-index-client",level:2},{value:"Create a new index in Momento Vector Index",id:"create-a-new-index-in-momento-vector-index",level:2},{value:"Get list of existing indexes in your account",id:"get-list-of-existing-indexes-in-your-account",level:2},{value:"Write a batch of items to the index",id:"write-a-batch-of-items-to-the-index",level:2},{value:"Searching the index",id:"searching-the-index",level:2},{value:"Deleting items from the index",id:"deleting-items-from-the-index",level:2},{value:"Deleting an index",id:"deleting-an-index",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cheat-sheet-for-nodejs-with-momento-vector-index"},"Cheat Sheet for Node.js with Momento Vector Index"),(0,o.kt)("p",null,"If you need to get going quickly with Node.js and Momento Vector Index, this page contains the basic API calls you'll need."),(0,o.kt)("h2",{id:"import-libraries-and-instantiate-a-vector-index-client"},"Import libraries and instantiate a vector index client"),(0,o.kt)("p",null,"This code sets up the class with the necessary imports, the class definition, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," instantiation that each of the other functions will need to call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {CredentialProvider, PreviewVectorIndexClient, VectorIndexConfigurations} from \"@gomomento/sdk\";\n\n\nconst client = new PreviewVectorIndexClient({\n    configuration: VectorIndexConfigurations.Laptop.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n        environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n});\n\n")),(0,o.kt)("p",null,"The following examples assume that you have already instantiated a ",(0,o.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," as shown above."),(0,o.kt)("h2",{id:"create-a-new-index-in-momento-vector-index"},"Create a new index in Momento Vector Index"),(0,o.kt)("p",null,"Use this snippet to create a new index in your account. The ",(0,o.kt)("inlineCode",{parentName:"p"},"similarityMetric")," parameter is optional and defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorSimilarityMetric.COSINE_SIMILARITY"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\n// The number of dimensions in your vectors\nconst numDimensions = 2;\nconst similarityMetric = VectorSimilarityMetric.COSINE_SIMILARITY;\n\nconst createResponse = await client.createIndex(indexName, numDimensions, similarityMetric);\nif (createResponse instanceof CreateVectorIndex.Success) {\n    console.log('Index created successfully!');\n} else {\n    console.log(`Error creating index: ${createResponse.toString()}`);\n}\n")),(0,o.kt)("h2",{id:"get-list-of-existing-indexes-in-your-account"},"Get list of existing indexes in your account"),(0,o.kt)("p",null,"In this example, we list the indexes in your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const listResponse = await client.listIndexes();\nif (listResponse instanceof ListVectorIndexes.Success) {\n    console.log(listResponse.getIndexNames().join('\\n'));\n} else {\n    console.log(`Error listing indexes: ${listResponse.toString()}`);\n}\n")),(0,o.kt)("h2",{id:"write-a-batch-of-items-to-the-index"},"Write a batch of items to the index"),(0,o.kt)("p",null,"A simple example of doing an ",(0,o.kt)("inlineCode",{parentName:"p"},"upsertItemBatch")," operation. This operation will insert the items if they don't exist, or replace them if they do."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\nconst upsertResponse = await client.upsertItemBatch(indexName, [\n    {\n        id: 'example_item_1',\n        vector: [1.0, 2.0],\n        metadata: {key1: 'value1'},\n    },\n    {\n        id: 'example_item_2',\n        vector: [3.0, 4.0],\n        metadata: {key2: 'value2'},\n    },\n]);\nif (upsertResponse instanceof VectorUpsertItemBatch.Success) {\n    console.log('Successfully upserted items');\n} else {\n    console.log(`Error adding items: ${upsertResponse.toString()}`);\n}\n")),(0,o.kt)("h2",{id:"searching-the-index"},"Searching the index"),(0,o.kt)("p",null,"This is an example of a search operation to get the top-k items from the index matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryVector"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"metadataFields")," parameter is optional and can be used to specify which metadata fields to return in the response."),(0,o.kt)("p",null,"Here we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"queryVector")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"[1.0, 2.0]")," and ask for the top 2 results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexName = "my-index";\nconst queryVector = [1.0, 2.0];\nconst searchResponse = await client.search(indexName, queryVector, {\n    topK: 2,\n    metadataFields: ALL_VECTOR_METADATA,\n});\nif (searchResponse instanceof VectorSearch.Success) {\n    console.log(`Search succeeded with ${searchResponse.hits().length} results`);\n} else {\n    console.log(`Error searching items: ${searchResponse.toString()}`);\n}\n')),(0,o.kt)("h2",{id:"deleting-items-from-the-index"},"Deleting items from the index"),(0,o.kt)("p",null,"An example of deleting the items from an index using ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteItemBatch"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\nconst itemsToDelete = [\n    'example_item_1',\n    'example_item_2',\n];\n\nconst deleteResponse = await client.deleteItemBatch(indexName, itemsToDelete);\nif (deleteResponse instanceof VectorDeleteItemBatch.Success) {\n    console.log('Successfully deleted items');\n} else {\n    console.log(`Error deleting items: ${deleteResponse.toString()}`);\n}\n")),(0,o.kt)("h2",{id:"deleting-an-index"},"Deleting an index"),(0,o.kt)("p",null,"An example of deleting an index using ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteIndex"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexName = "my-index";\nconst deleteIndexResponse = await client.deleteIndex(indexName);\nif (deleteIndexResponse instanceof DeleteVectorIndex.Success) {\n    console.log("Index \'test-index\' deleted");\n} else {\n    console.log(`Error deleting index: ${deleteIndexResponse.toString()}`);\n}\n')))}m.isMDXComponent=!0}}]);