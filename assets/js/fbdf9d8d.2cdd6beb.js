"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2734],{8447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),i=t(1470),o=t(9365);const s={sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples."},l="Add and retrieve a file with Momento Cache",c={id:"cache/develop/guides/working-with-files-cache",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples.",source:"@site/docs/cache/develop/guides/working-with-files-cache.md",sourceDirName:"cache/develop/guides",slug:"/cache/develop/guides/working-with-files-cache",permalink:"/cache/develop/guides/working-with-files-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/guides/working-with-files-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples."},sidebar:"tutorialSidebar",previous:{title:"Guides"},next:{title:"Working with Time Series Data",permalink:"/cache/develop/guides/working-with-time-series-data"}},u={},d=[];function f(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"add-and-retrieve-a-file-with-momento-cache",children:"Add and retrieve a file with Momento Cache"}),"\n",(0,r.jsxs)(n.p,{children:["An item in Momento Cache is a byte array, so a cache can easily store most any file you want to create, as long as it is under the ",(0,r.jsx)(n.a,{href:"./../../limits",children:"per item limit of 1MB"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of reading a file from the filesystem, saving the file to an item in a cache, reading it from the cache, and then writing it to the filesystem."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(o.A,{value:"nodejs",label:"Node.js",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const fs = require('fs');\nconst { CacheClient, CacheGet, CacheSet, Configurations, CredentialProvider } = require('@gomomento/sdk');\nconst dotenv = require('dotenv');\n\ndotenv.config();\n\nconst filePath = './myfile.json';\nconst fileName = 'myfile';\nconst CACHE_NAME = 'test-cache';\n\n// Read a file from the filesystem\nasync function readFile(filePath) {\n  try {\n    const data = fs.readFileSync(filePath);\n    return new Uint8Array(data);\n  } catch (error) {\n    console.error(`Error reading file: ${error}`);\n    return null;\n  }\n}\n\n// Creates the Momento cache client object\nasync function createCacheClient() {\n  return CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 600,\n  });\n}\n\nasync function writeToCache(client, cacheName, key, data) {\n  const setResponse = await client.set(cacheName, key, data);\n  if (setResponse instanceof CacheSet.Success) {\n    console.log('Key stored successfully!');\n  } else if (setResponse instanceof CacheSet.Error) {\n    console.log(`Error setting key: ${setResponse.toString()}`);\n  } else {\n    console.log(`Some other error: ${setResponse.toString()}`);\n  }\n}\n\nasync function readFromCache(client, cacheName, key) {\n  const fileResponse = await client.get(cacheName, key);\n  if (fileResponse instanceof CacheGet.Hit) {\n    console.log(`cache hit: ${fileResponse.valueString()}`);\n    const contents = fileResponse.valueUint8Array();\n    const buffer = Buffer.from(contents);\n    fs.writeFileSync(\"./myfile2.json\", buffer);\n  } else if (fileResponse instanceof CacheGet.Miss) {\n    console.log('cache miss');\n  } else if (fileResponse instanceof CacheGet.Error) {\n    console.log(`Error: ${fileResponse.message()}`);\n  }\n}\n\nasync function run() {\n  const byteArray = await readFile(filePath);\n  if (byteArray === null) {\n    return;\n  }\n\n  const cacheClient = await createCacheClient();\n\n  await writeToCache(cacheClient, CACHE_NAME, fileName, byteArray);\n  await readFromCache(cacheClient, CACHE_NAME, fileName);\n}\n\nrun();\n"})}),(0,r.jsxs)(n.p,{children:["Check our ",(0,r.jsx)(n.a,{href:"/sdks/nodejs/cache",children:"Node.js Cache guide"})," for more on using our Node.js SDK."]})]}),(0,r.jsxs)(o.A,{value:"py",label:"Python",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import os\nfrom datetime import timedelta\nfrom momento import CacheClient, Configurations, CredentialProvider\nfrom momento.responses import CacheGet, CacheSet\n\nfile_path = './myfile.json'\nfile_name = 'myfile'\nCACHE_NAME = 'test-cache'\n\n# Read a file from the filesystem\ndef read_file(file_path):\n    with open(file_path, 'rb') as file:\n        byte_array = file.read()\n    return byte_array\n\n# Write a file to the filesystem\ndef write_file(file_path, data):\n    with open(file_path, \"wb\") as out_file:\n        out_file.write(data)\n\n# Get a connection to and existing cache with your API key.\ndef client():\n    momento_api_key = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')\n    momento_ttl_seconds = os.getenv('MOMENTO_TTL_SECONDS')\n    ttl  = timedelta(seconds=int(momento_ttl_seconds))\n\n    config = {\n      'configuration': Configurations.Laptop.v1(),\n      'credential_provider': momento_api_key,\n      'default_ttl':  ttl\n    }\n    # print(config)\n    return CacheClient.create(**config)\n\ndef run():\n    # read the file contents in. They already come in byte format, so no casting necessary\n    byte_array = read_file(file_path)\n\n    # Get the client connection object.\n    with client() as cache_client:\n        # write the file to the cache\n        set_response = cache_client.set(CACHE_NAME, file_name, byte_array)\n        if isinstance(set_response, CacheSet.Success):\n            print('Key stored successfully!')\n        elif isinstance(set_response, CacheSet.Error):\n            print(f'Error setting key: {set_response}')\n        else:\n            print(f'Some other error: {set_response}')\n\n        # read the file from the cache\n        file_response = cache_client.get(CACHE_NAME, file_name)\n        if isinstance(file_response, CacheGet.Hit):\n            print(f'Cache hit! The value is: {file_response.value_string}')\n            buffer = bytes(file_response.value_string, 'utf-8')\n            print('Writing file to filesystem.')\n            write_file(\"./myfile2.json\", buffer)\n        elif isinstance(file_response, CacheGet.Miss):\n            print('cache miss')\n        elif isinstance(file_response, CacheGet.Error):\n            print(f'Error: {file_response.message()}')\n\nif __name__ == '__main__':\n    run()\n\n"})}),(0,r.jsxs)(n.p,{children:["Check our ",(0,r.jsx)(n.a,{href:"/sdks/python/cache",children:"Python Cache guide"})," for more on using our Python SDK."]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),i=t(3104),o=t(6347),s=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=f(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=c??p;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function C(e){const n=p(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...n,...e}),(0,y.jsx)(_,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,y.jsx)(C,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);