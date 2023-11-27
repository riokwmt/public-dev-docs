"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:5,sidebar_label:"Working with Time Series Data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache"},s="Storing time series data",i={unversionedId:"cache/develop/guides/working-with-time-series-data",id:"cache/develop/guides/working-with-time-series-data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache",source:"@site/docs/cache/develop/guides/working-with-time-series-data.md",sourceDirName:"cache/develop/guides",slug:"/cache/develop/guides/working-with-time-series-data",permalink:"/cache/develop/guides/working-with-time-series-data",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/guides/working-with-time-series-data.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Working with Time Series Data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Working with files",permalink:"/cache/develop/guides/working-with-files-cache"},next:{title:"Integrations"}},l={},c=[{value:"Why use SortedSets?",id:"why-use-sortedsets",level:3},{value:"Storing time series data in the SortedSet",id:"storing-time-series-data-in-the-sortedset",level:2},{value:"Considerations for time series data",id:"considerations-for-time-series-data",level:2},{value:"Time To Live (TTL) Values",id:"time-to-live-ttl-values",level:3},{value:"Sensor Index Set",id:"sensor-index-set",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storing-time-series-data"},"Storing time series data"),(0,o.kt)("p",null,"Temporarily storing time series data enables you to visualize that data without having to worry about long-term storage costs. Let's think about a common use case for time series data like IoT sensors. Sure, it's useful to see what the recent data looks like, but do you need to keep each sensor value indefinitely? With numerous sensors sending metrics into your database, your storage costs will skyrocket. Storing that data in Momento instead is a great way to take advantage of what Momento does best - storing large volumes of data without having to worry about scaling or long-term storage costs."),(0,o.kt)("p",null,"You can store related data elements in Momento's collection data types such as ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/list-collections"},"lists"),", ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/set-collections"},"sets"),", and ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/dictionary-collections"},"dictionaries"),". You should pick the appropriate data type for your application's access patterns and data schema. For time series data, you should use Momento's ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/sorted-set-collections"},"SortedSet data type"),". You can read more about ",(0,o.kt)("inlineCode",{parentName:"p"},"SortedSets")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/were-back-with-another-collection-data-type-sorted-sets"},"in this blog"),"."),(0,o.kt)("h3",{id:"why-use-sortedsets"},"Why use SortedSets?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sorting your time series data by timestamp makes it easy for client applications to retrieve and display the data in sorted order."),(0,o.kt)("li",{parentName:"ul"},"Limit query responses with the Momento SDK's ",(0,o.kt)("a",{parentName:"li",href:"/cache/develop/api-reference/sorted-set-collections#sortedsetfetchbyrank"},"SortedSetFetchByRank")," and ",(0,o.kt)("a",{parentName:"li",href:"/cache/develop/api-reference/sorted-set-collections#sortedsetfetchbyscore"},"SortedSetFetchByScore")," to a certain number of values or values within a certain timespan.")),(0,o.kt)("h2",{id:"storing-time-series-data-in-the-sortedset"},"Storing time series data in the SortedSet"),(0,o.kt)("p",null,"Use the Momento SDK's ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/sorted-set-collections#sortedsetputelement"},"SortedSetPutElement")," method to insert items into your SortedSet."),(0,o.kt)("p",null,"Let's consider a workload for storing IoT sensor data in a Momento Cache."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each sensor has its own SortedSet."),(0,o.kt)("li",{parentName:"ul"},"Each sensor_value within sensor's SortedSet is a JSON string containing the value and timestamp\ni.e. ",(0,o.kt)("inlineCode",{parentName:"li"},'JSON.stringify("value":1, "timestamp": 1686583076)')),(0,o.kt)("li",{parentName:"ul"},"Each score for the item in the SortedSet is the timestamp of the datapoint. SortedSets use scores to sort the data within the set.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Code snippet for writing SortedSet into the Cache")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const item_value = JSON.stringify({"sensor_value": sensor_value, "timestamp": timestamp})\n\nconst response = await cacheClient.sortedSetPutElement("sensor_data", `${sensor_id}-sensor-data`, item_value, timestamp)\n')),(0,o.kt)("p",null,"Retrieving time series data from the sorted set:"),(0,o.kt)("p",null,"Use SortedSetFetchByRank to retrieve data from the cache. If you want to retrieve the entire SortedSet, don't pass in any startRank and endRank parameter values."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Code snippet for SortedSetFetchByRank to retrieve the entire SortedSet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`)\n')),(0,o.kt)("p",null,"If you only want to retrieve a subset of the SortedSet, you could set the startRank and endRank parameter values as follows:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Code snippet for SortedSetFetchByRank to retrieve a subset of the SortedSet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`, 0, 10)\n')),(0,o.kt)("p",null,"If you only want to retrieve data from a specified time period instead of a specific number of values, you can use ",(0,o.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/sorted-set-collections#sortedsetfetchbyscore"},"SortedSetFetchByScore"),". "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Code snippet for SortedSetFetchByScore to retrieve a subset of the SortedSet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const sensor_data = await cacheClient.sortedSetFetchByScore("sensor_data", `${sensor_id}-sensor-data`, 1686511076, 1686597476)\n')),(0,o.kt)("h2",{id:"considerations-for-time-series-data"},"Considerations for time series data"),(0,o.kt)("h3",{id:"time-to-live-ttl-values"},"Time To Live (TTL) Values"),(0,o.kt)("p",null,"Your ",(0,o.kt)("a",{parentName:"p",href:"./../../learn/how-it-works/expire-data-with-ttl"},"TTL value")," will depend on how long you need to keep the time series data visible for your users. If you're displaying your time series data in a chart on the client application, ensure your earliest time value in the chart is aligned with the TTL for the time series data."),(0,o.kt)("h3",{id:"sensor-index-set"},"Sensor Index Set"),(0,o.kt)("p",null,"If you have multiple sensors pushing data into your cache, consider adding a Set data type to store all the Sensor ID's. You must pass in a Sensor ID when fetching data from the SortedSets. Your client application can retrieve all the Sensor ID's from this Set prior to fetching the time series data, then fetch data for every sensor from the Sorted Sets."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set example",src:a(3049).Z,width:"551",height:"531"})))}u.isMDXComponent=!0},3049:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/time-series-example-db22194dbe532e40de3c167f7f3595e7.png"}}]);