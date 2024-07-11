"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3730],{5993:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=n(4848),r=n(8453),c=(n(1441),n(5347));const s={sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache."},l="Dictionary API reference for Momento Cache",a={id:"cache/develop/api-reference/dictionary-collections",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache.",source:"@site/docs/cache/develop/api-reference/dictionary-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/dictionary-collections",permalink:"/cache/develop/api-reference/dictionary-collections",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/dictionary-collections.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache."},sidebar:"cacheSidebar",previous:{title:"API Reference",permalink:"/cache/develop/api-reference/"},next:{title:"Lists",permalink:"/cache/develop/api-reference/list-collections"}},d={},o=[{value:"Dictionary methods",id:"dictionary-methods",level:2},{value:"DictionaryFetch",id:"dictionaryfetch",level:3},{value:"DictionaryGetField",id:"dictionarygetfield",level:3},{value:"DictionaryGetFields",id:"dictionarygetfields",level:3},{value:"DictionaryIncrement",id:"dictionaryincrement",level:3},{value:"DictionaryRemoveField",id:"dictionaryremovefield",level:3},{value:"DictionaryRemoveFields",id:"dictionaryremovefields",level:3},{value:"DictionarySetField",id:"dictionarysetfield",level:3},{value:"DictionarySetFields",id:"dictionarysetfields",level:3},{value:"DictionaryLength",id:"dictionarylength",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"dictionary-api-reference-for-momento-cache",children:"Dictionary API reference for Momento Cache"}),"\n",(0,t.jsxs)(i.p,{children:["This page details the Momento API methods for the ",(0,t.jsx)(i.a,{href:"/cache/develop/basics/datatypes#dictionaries",children:"dictionary collection data type"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["Momento collection types use a ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL"}),' to specify their TTL behavior. This is an optional argument for all "write" operations.']})}),"\n",(0,t.jsx)(i.h2,{id:"dictionary-methods",children:"Dictionary methods"}),"\n",(0,t.jsx)(i.h3,{id:"dictionaryfetch",children:"DictionaryFetch"}),"\n",(0,t.jsx)(i.p,{children:"Gets a dictionary item from a cache."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"The name of the dictionary item to be retrieved."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsx)(i.p,{children:"The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error."}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Cache hit","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"valueDictionaryBytesBytes()"}),": Map<Bytes, Bytes>"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"valueDictionaryStringString()"}),": Map<String, String>"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"valueDictionaryStringBytes()"}),": Map<String, Bytes>"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"valueDictionaryBytesString()"}),": Map<Bytes, String>"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"toString()"}),": String - displays the field/value pairs, truncated."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Cache miss"}),"\n",(0,t.jsx)(i.li,{children:"Cache error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"await cacheClient.dictionarySetField(cacheName, 'test-dictionary', 'test-field', 'test-value');\nconst result = await cacheClient.dictionaryFetch(cacheName, 'test-dictionary');\nif (result instanceof CacheDictionaryFetch.Hit) {\n  console.log('Dictionary fetched successfully- ');\n  result.valueMapStringString().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheDictionaryFetch.Miss) {\n  console.log(`Dictionary 'test-dictionary' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheDictionaryFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryFetch on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let response = cache_client\n      .dictionary_fetch(cache_name, "dictionary_name")\n      .await?;\n\n  match response {\n      DictionaryFetchResponse::Hit { value } => {\n          let dictionary: HashMap<String, String> =\n              value.try_into().expect("I stored a dictionary!");\n          println!("Fetched dictionary: {:?}", dictionary);\n      }\n      DictionaryFetchResponse::Miss => println!("Cache miss"),\n  }',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionarygetfield",children:"DictionaryGetField"}),"\n",(0,t.jsx)(i.p,{children:"Get one field from a dictionary item in the cache."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be retrieved."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"field"}),(0,t.jsx)(i.td,{children:"String/Bytes"}),(0,t.jsx)(i.td,{children:"Name of the field in the dictionary item to be retrieved."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Cache hit"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"fieldString()"}),": String"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"fieldBytes()"}),": Bytes"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"valueString()"}),": String"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"valueBytes()"}),": Bytes"]}),"\n",(0,t.jsx)(i.p,{children:"These return the field and its value from the dictionary."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Cache miss"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fieldString()"}),": String"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fieldBytes()"}),": Bytes"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Cache error"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fieldString()"}),": String"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fieldBytes()"}),": Bytes"]}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"await cacheClient.dictionarySetField(cacheName, 'test-dictionary', 'test-field', 'test-value');\nconst result = await cacheClient.dictionaryGetField(cacheName, 'test-dictionary', 'test-field');\nif (result instanceof CacheDictionaryGetField.Hit) {\n  console.log(\n    `Field ${result.fieldString()} fetched successfully from cache '${cacheName}' with value: ${result.valueString()}`\n  );\n} else if (result instanceof CacheDictionaryGetField.Miss) {\n  console.log(`Dictionary 'test-dictionary' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheDictionaryGetField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryGetField on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let response = cache_client\n      .dictionary_get_field(cache_name, "dictionary_name", "field")\n      .await?;\n\n  match response {\n      DictionaryGetFieldResponse::Hit { value } => {\n          let value: String = value.try_into().expect("I stored a string!");\n          println!("Fetched value: {}", value);\n      }\n      DictionaryGetFieldResponse::Miss => println!("Cache miss"),\n  }',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionarygetfields",children:"DictionaryGetFields"}),"\n",(0,t.jsx)(i.p,{children:"Get one or more fields from a dictionary in the cache."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be retrieved."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"fields"}),(0,t.jsx)(i.td,{children:"String[]/Bytes[]"}),(0,t.jsx)(i.td,{children:"Name of the field in the dictionary item to be retrieved."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Cache hit","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"valueDictionaryBytesBytes(): Map<Bytes, Bytes>"}),"\n",(0,t.jsx)(i.li,{children:"valueDictionaryStringString(): Map<String, String>"}),"\n",(0,t.jsx)(i.li,{children:"valueDictionaryStringBytes(): Map<String, Bytes>"}),"\n",(0,t.jsx)(i.li,{children:"valueDictionaryBytesString(): Map<Bytes, String>"}),"\n",(0,t.jsx)(i.li,{children:"toString(): String - displays truncated valueDictionaryStringString()"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Cache miss"}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"await cacheClient.dictionarySetFields(\n  cacheName,\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nconst result = await cacheClient.dictionaryGetFields(cacheName, 'test-dictionary', ['key1', 'key2']);\nif (result instanceof CacheDictionaryGetFields.Hit) {\n  console.log('Values fetched successfully- ');\n  result.valueMapStringString().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheDictionaryGetFields.Miss) {\n  console.log(`Dictionary 'test-dictionary' was not found in cache '${cacheName}'`);\n} else if (result instanceof CacheDictionaryGetFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryGetFields on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let response = cache_client\n      .dictionary_get_fields(cache_name, "dictionary_name", vec!["field1", "field2"])\n      .await?;\n\n  match response {\n      DictionaryGetFieldsResponse::Hit { .. } => {\n          let dictionary: HashMap<String, String> = response\n              .try_into()\n              .expect("I stored a dictionary of strings!");\n          println!("Fetched dictionary: {:?}", dictionary);\n      }\n      DictionaryGetFieldsResponse::Miss => println!("Cache miss"),\n  }',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionaryincrement",children:"DictionaryIncrement"}),"\n",(0,t.jsx)(i.p,{children:"Adds to the value of a field, if and only if the existing value is a UTF-8 string representing a base 10 integer. If the field is missing from the dictionary, this method sets the field's value to the amount to increment by."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The resulting incremented value must be between -9223372036854775808 and 9223372036854775807, ie. a signed 64-bit integer. If not, there will be an error response."})}),"\n",(0,t.jsx)(i.p,{children:"Examples:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["When the field does not exist, ",(0,t.jsx)(i.code,{children:"dictionaryIncrement(cache, dict, field, 10)"})," will set the field's value to 10."]}),"\n",(0,t.jsxs)(i.li,{children:["When the field = 5, ",(0,t.jsx)(i.code,{children:"dictionaryIncrement(cache, dict, field, 10)"})," will set the field's value to 15."]}),"\n",(0,t.jsx)(i.li,{children:"When the field = \u2018five\u2019, it will respond with a FailedPreconditionException error."}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be retrieved."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"field"}),(0,t.jsx)(i.td,{children:"String/Bytes"}),(0,t.jsx)(i.td,{children:"Name of the field in the dictionary item to be retrieved."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"amount"}),(0,t.jsx)(i.td,{children:"Integer"}),(0,t.jsx)(i.td,{children:"The quantity to add to the value. May be positive, negative, or zero. Defaults to 1."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ttl"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,t.jsx)(i.td,{children:"This will come back as a TTL construct."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Success","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"value()"}),": integer - the new value after incrementing"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"toString()"}),": String - displays the value()"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"await cacheClient.dictionarySetField(cacheName, 'test-dictionary', 'test-field', '10');\nconst result = await cacheClient.dictionaryIncrement(cacheName, 'test-dictionary', 'test-field', 1);\nif (result instanceof CacheDictionaryIncrement.Success) {\n  console.log(`Field value incremented by 1. Result - ${result.valueNumber()}`);\n} else if (result instanceof CacheDictionaryIncrement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryIncrement on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let response = cache_client\n      .dictionary_increment(cache_name, "dictionary_name", "field", 1)\n      .await?;\n  println!("Incremented field in dictionary to {}", response.value);',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionaryremovefield",children:"DictionaryRemoveField"}),"\n",(0,t.jsx)(i.p,{children:"Removes a field from a dictionary item."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be retrieved."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"field"}),(0,t.jsx)(i.td,{children:"String/Bytes"}),(0,t.jsx)(i.td,{children:"Name of the field in the dictionary item to be retrieved."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Success"}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"await cacheClient.dictionarySetField(cacheName, 'test-dictionary', 'test-field', '10');\nconst result = await cacheClient.dictionaryRemoveField(cacheName, 'test-dictionary', 'test-field');\nif (result instanceof CacheDictionaryRemoveField.Success) {\n  console.log(\"Field removed successfully from dictionary 'test-dictionary'\");\n} else if (result instanceof CacheDictionaryRemoveField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryRemoveField on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .dictionary_remove_field(cache_name, "dictionary_name", "field")\n      .await?;\n  println!("Field removed from dictionary");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionaryremovefields",children:"DictionaryRemoveFields"}),"\n",(0,t.jsx)(i.p,{children:"Removes multiple fields from a dictionary item."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be retrieved."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"fields"}),(0,t.jsx)(i.td,{children:"String[]/Bytes[]"}),(0,t.jsx)(i.td,{children:"Name of the field in the dictionary item to be retrieved."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Success"}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"await cacheClient.dictionarySetFields(\n  cacheName,\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nconst result = await cacheClient.dictionaryRemoveFields(cacheName, 'test-dictionary', ['key1', 'key2']);\nif (result instanceof CacheDictionaryRemoveFields.Success) {\n  console.log(\"Fields removed successfully from dictionary 'test-dictionary'\");\n} else if (result instanceof CacheDictionaryRemoveFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionaryRemoveFields on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .dictionary_remove_fields(cache_name, "dictionary_name", vec!["field1", "field2"])\n      .await?;\n  println!("Fields removed from dictionary");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionarysetfield",children:"DictionarySetField"}),"\n",(0,t.jsxs)(i.p,{children:["Sets a field",":value"," pair in an existing dictionary item. If the dictionary item does not exist, it is created with the new field",":value"," pair."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be set."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"field"}),(0,t.jsx)(i.td,{children:"String/Bytes"}),(0,t.jsx)(i.td,{children:"Name of the field in the dictionary item to be set."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"value"}),(0,t.jsx)(i.td,{children:"String/Bytes"}),(0,t.jsx)(i.td,{children:"Value for the field to be set."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ttl"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,t.jsx)(i.td,{children:"TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Success"}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"const result = await cacheClient.dictionarySetField(cacheName, 'test-dictionary', 'test-field', 'test-value');\nif (result instanceof CacheDictionarySetField.Success) {\n  console.log(`Field set successfully into cache '${cacheName}'`);\n} else if (result instanceof CacheDictionarySetField.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionarySetField on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .dictionary_set_field(cache_name.to_string(), "dictionary_name", "field", "value")\n      .await?;\n  println!("Set field in dictionary");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionarysetfields",children:"DictionarySetFields"}),"\n",(0,t.jsxs)(i.p,{children:["Sets several field",":value"," pairs in a dictionary item. If the dictionary item does not exist, it is created with the new fields."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be set."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"fields"}),(0,t.jsx)(i.td,{children:"String[]/Bytes[]"}),(0,t.jsxs)(i.td,{children:["Field",":value"," pair to be added to the dictionary item by the set operation."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ttl"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})}),(0,t.jsx)(i.td,{children:"TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Success"}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"const result = await cacheClient.dictionarySetFields(\n  cacheName,\n  'test-dictionary',\n  new Map<string, string>([\n    ['key1', 'value1'],\n    ['key2', 'value2'],\n  ])\n);\nif (result instanceof CacheDictionarySetFields.Success) {\n  console.log(`Fields set successfully into cache '${cacheName}'`);\n} else if (result instanceof CacheDictionarySetFields.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheDictionarySetFields on dictionary 'test-dictionary' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  cache_client\n      .dictionary_set_fields(\n          cache_name.to_string(),\n          "dictionary_name",\n          vec![("field1", "value1"), ("field2", "value2")],\n      )\n      .await?;\n  println!("Set fields in dictionary");',elixir:"",swift:"",dart:"",ts:""}),"\n",(0,t.jsx)(i.h3,{id:"dictionarylength",children:"DictionaryLength"}),"\n",(0,t.jsx)(i.p,{children:"Get the length of an existing dictionary item"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cacheName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the cache."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dictionaryName"}),(0,t.jsx)(i.td,{children:"String"}),(0,t.jsx)(i.td,{children:"Name of the dictionary item to be checked."})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Method response object"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Hit","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"length()"}),": Number"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Miss"}),"\n",(0,t.jsx)(i.li,{children:"Error"}),"\n"]}),(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/cache/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,t.jsx)(c.r,{js:"",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:'  let _length: u32 = cache_client\n      .dictionary_length(cache_name, "dictionary_name")\n      .await?\n      .try_into()\n      .expect("Expected a dictionary length!");',elixir:"",swift:"",dart:"",ts:""})]})}function j(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,i,n)=>{n.d(i,{A:()=>s});n(6540);var t=n(4164);const r={tabItem:"tabItem_Ymn6"};var c=n(4848);function s(e){let{children:i,hidden:n,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:n,children:i})}},1470:(e,i,n)=>{n.d(i,{A:()=>S});var t=n(6540),r=n(4164),c=n(3104),s=n(6347),l=n(205),a=n(7485),d=n(1682),o=n(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:i,children:n}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:n,attributes:t,default:r}}=e;return{value:i,label:n,attributes:t,default:r}}))}(n);return function(e){const i=(0,d.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function u(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function x(e){let{queryString:i=!1,groupId:n}=e;const r=(0,s.W6)(),c=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,a.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const i=new URLSearchParams(r.location.search);i.set(c,e),r.replace({...r.location,search:i.toString()})}),[c,r])]}function y(e){const{defaultValue:i,queryString:n=!1,groupId:r}=e,c=j(e),[s,a]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:c}))),[d,h]=x({queryString:n,groupId:r}),[y,f]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[r,c]=(0,o.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&c.set(e)}),[n,c])]}({groupId:r}),p=(()=>{const e=d??y;return u({value:e,tabValues:c})?e:null})();(0,l.A)((()=>{p&&a(p)}),[p]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,c]),tabValues:c}}var f=n(2303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function v(e){let{className:i,block:n,selectedValue:t,selectValue:s,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.a_)(),o=e=>{const i=e.currentTarget,n=a.indexOf(i),r=l[n].value;r!==t&&(d(i),s(r))},h=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;i=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;i=a[n]??a[a.length-1];break}}i?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},i),children:l.map((e=>{let{value:i,label:n,attributes:c}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>a.push(e),onKeyDown:h,onClick:o,...c,className:(0,r.A)("tabs__item",p.tabItem,c?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function g(e){let{lazy:i,children:n,selectedValue:r}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=c.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:c.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==r})))})}function b(e){const i=y(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",p.tabList),children:[(0,m.jsx)(v,{...i,...e}),(0,m.jsx)(g,{...i,...e})]})}function S(e){const i=(0,f.A)();return(0,m.jsx)(b,{...e,children:h(e.children)},String(i))}},1441:(e,i,n)=>{n(6540)},5347:(e,i,n)=>{n.d(i,{r:()=>l});var t=n(1470),r=n(9365),c=n(1432),s=(n(6540),n(4848));const l=e=>{let{js:i,python:n,java:l,kotlin:a,go:d,csharp:o,php:h,rust:j,ruby:u,elixir:x,swift:y,dart:f,cli:p}=e;return i||n||l||a||d||o||h||j||u||x||y||f||p?(0,s.jsxs)(t.A,{children:[i&&(0,s.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(c.A,{language:"js",children:i})}),n&&(0,s.jsx)(r.A,{value:"python",label:"Python",children:(0,s.jsx)(c.A,{language:"python",children:n})}),l&&(0,s.jsx)(r.A,{value:"java",label:"Java",children:(0,s.jsx)(c.A,{language:"java",children:l})}),a&&(0,s.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(c.A,{language:"kotlin",children:a})}),d&&(0,s.jsx)(r.A,{value:"go",label:"Go",children:(0,s.jsx)(c.A,{language:"go",children:d})}),o&&(0,s.jsx)(r.A,{value:"csharp",label:"C#",children:(0,s.jsx)(c.A,{language:"csharp",children:o})}),h&&(0,s.jsx)(r.A,{value:"php",label:"PHP",children:(0,s.jsx)(c.A,{language:"php",children:h})}),j&&(0,s.jsx)(r.A,{value:"rust",label:"Rust",children:(0,s.jsx)(c.A,{language:"rust",children:j})}),u&&(0,s.jsx)(r.A,{value:"ruby",label:"Ruby",children:(0,s.jsx)(c.A,{language:"ruby",children:u})}),x&&(0,s.jsx)(r.A,{value:"elixir",label:"Elixir",children:(0,s.jsx)(c.A,{language:"elixir",children:x})}),y&&(0,s.jsx)(r.A,{value:"swift",label:"Swift",children:(0,s.jsx)(c.A,{language:"swift",children:y})}),f&&(0,s.jsx)(r.A,{value:"dart",label:"Dart",children:(0,s.jsx)(c.A,{language:"dart",children:f})}),p&&(0,s.jsx)(r.A,{value:"cli",label:"CLI",children:(0,s.jsx)(c.A,{language:"cli",children:p})})]}):null}}}]);