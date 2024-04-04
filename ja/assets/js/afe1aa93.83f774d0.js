"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9294],{9365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(6540),i=n(53);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(8168),i=n(6540),a=n(53),s=n(3104),o=n(6347),l=n(7485),c=n(1682),u=n(9466);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function m(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,c]=g({queryString:n,groupId:r}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=l??p;return b({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),d(e)}),[c,d,a]),tabValues:a}}var h=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),l(r))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,r.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:m},s,{className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=d(e);return i.createElement("div",{className:(0,a.A)("tabs-container",y.tabList)},i.createElement(v,(0,r.A)({},e,t)),i.createElement(f,(0,r.A)({},e,t)))}function E(e){const t=(0,h.A)();return i.createElement(T,(0,r.A)({key:String(t)},e))}},1441:(e,t,n)=>{n(6540)},5347:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(1470),i=n(9365),a=n(2355),s=n(6540);const o=e=>{let{js:t,python:n,java:o,kotlin:l,go:c,csharp:u,php:p,rust:m,ruby:b,elixir:g,swift:d,dart:h,cli:y}=e;return t||n||o||l||c||u||p||m||b||g||d||h||y?s.createElement(r.A,null,t&&s.createElement(i.A,{value:"js",label:"JavaScript"},s.createElement(a.A,{language:"js"},t)),n&&s.createElement(i.A,{value:"python",label:"Python"},s.createElement(a.A,{language:"python"},n)),o&&s.createElement(i.A,{value:"java",label:"Java"},s.createElement(a.A,{language:"java"},o)),l&&s.createElement(i.A,{value:"kotlin",label:"Kotlin"},s.createElement(a.A,{language:"kotlin"},l)),c&&s.createElement(i.A,{value:"go",label:"Go"},s.createElement(a.A,{language:"go"},c)),u&&s.createElement(i.A,{value:"csharp",label:"C#"},s.createElement(a.A,{language:"csharp"},u)),p&&s.createElement(i.A,{value:"php",label:"PHP"},s.createElement(a.A,{language:"php"},p)),m&&s.createElement(i.A,{value:"rust",label:"Rust"},s.createElement(a.A,{language:"rust"},m)),b&&s.createElement(i.A,{value:"ruby",label:"Ruby"},s.createElement(a.A,{language:"ruby"},b)),g&&s.createElement(i.A,{value:"elixir",label:"Elixir"},s.createElement(a.A,{language:"elixir"},g)),d&&s.createElement(i.A,{value:"swift",label:"Swift"},s.createElement(a.A,{language:"swift"},d)),h&&s.createElement(i.A,{value:"dart",label:"Dart"},s.createElement(a.A,{language:"dart"},h)),y&&s.createElement(i.A,{value:"cli",label:"CLI"},s.createElement(a.A,{language:"cli"},y))):null}},9084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(8168),i=(n(6540),n(5680)),a=(n(1441),n(5347));const s={sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Topics pub/sub API \u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3084\u308a\u3068\u308a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002"},o="Momento Topics\uff08pub/sub\uff09API \u3092\u4f7f\u7528\u3059\u308b",l={unversionedId:"topics/develop/api-reference/index",id:"topics/develop/api-reference/index",title:"Topics (pub/sub) API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Topics pub/sub API \u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3084\u308a\u3068\u308a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/index.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/",permalink:"/ja/topics/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Momento Topics pub/sub API \u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3084\u308a\u3068\u308a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002"},sidebar:"topicsSidebar",previous:{title:"Permissions",permalink:"/ja/topics/develop/authentication/permissions"},next:{title:"Webhooks",permalink:"/ja/topics/develop/api-reference/webhooks"}},c={},u=[{value:"Topics \u306e\u30e1\u30bd\u30c3\u30c9",id:"topics-\u306e\u30e1\u30bd\u30c3\u30c9",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"TopicClient",id:"topicclient",level:2},{value:"Example apps using Momento Topics APIs",id:"example-apps-using-momento-topics-apis",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",t)},m=p("Tabs"),b=p("TabItem"),g={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"momento-topicspubsubapi-\u3092\u4f7f\u7528\u3059\u308b"},"Momento Topics\uff08pub/sub\uff09API \u3092\u4f7f\u7528\u3059\u308b"),(0,i.yg)("p",null,"Momento Topics \u306f\u3001\u5206\u6563\u578b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5404\u90e8\u5206\u9593\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u901a\u4fe1\u3092\u53ef\u80fd\u306b\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002\u30c8\u30d4\u30c3\u30af\u306e\u5024\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5(\u30d7\u30ed\u30c7\u30e5\u30fc\u30b9)\u3057\u3001\u30c8\u30d4\u30c3\u30af\u304b\u3089\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6(\u30b3\u30f3\u30b7\u30e5\u30fc\u30e0)\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento Topics \u3067\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e Momento API \u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u8a73\u7d30\u306f",(0,i.yg)("a",{parentName:"p",href:"/ja/topics/"},"Momento Topics"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("h2",{id:"topics-\u306e\u30e1\u30bd\u30c3\u30c9"},"Topics \u306e\u30e1\u30bd\u30c3\u30c9"),(0,i.yg)("h3",{id:"subscribe"},"Subscribe"),(0,i.yg)("p",null,"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u306a\u63a5\u7d9a\u3092\u7528\u3044\u3066\u65b0\u3057\u3044\u5024\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306b\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u307e\u3059\u3002"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,i.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,i.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"topicName"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d")))),(0,i.yg)(m,{mdxType:"Tabs"},(0,i.yg)(b,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"\u3053\u308c\u304c ",(0,i.yg)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),"\u3067\u3059\u3002"),(0,i.yg)(b,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"\u30e1\u30bd\u30c3\u30c8\u3099\u306e\u30ec\u30b9\u30db\u309a\u30f3\u30b9\u30aa\u30d5\u3099\u30b7\u3099\u30a7\u30af\u30c8"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Success - \u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"Error")),(0,i.yg)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,i.yg)("a",{parentName:"p",href:"./api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("p",null,"\u8fd4\u3055\u308c\u305f\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092for\u30eb\u30fc\u30d7\u306b\u7f6e\u304f\u3068\u3001\u65b0\u3057\u3044\u5024\u304c\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3055\u308c\u308b\u6642\u306b\u30b3\u30fc\u30c9\u306b\u30a4\u30d9\u30f3\u30c8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002")),(0,i.yg)(a.r,{js:"const result = await topicClient.subscribe(cacheName, 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Received an item on subscription for 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  console.log(\"Publishing a value to the topic 'test-topic'\");\n  // Publish a value\n  await topicClient.publish(cacheName, 'test-topic', 'test-value');\n\n  console.log('Waiting for the published value to be received.');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n',java:"",kotlin:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}',go:'// Instantiate subscriber\nsub, subErr := client.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}',csharp:'var produceCancellation = new CancellationTokenSource();\nproduceCancellation.CancelAfter(2000);\n\nvar subscribeResponse = await topicClient.SubscribeAsync("test-cache", "test-topic");\nswitch (subscribeResponse)\n{\n    case TopicSubscribeResponse.Subscription subscription:\n        var cancellableSubscription = subscription.WithCancellation(produceCancellation.Token);\n\n        await Task.Delay(1_000);\n        await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\n        await Task.Delay(1_000);\n\n        await foreach (var message in cancellableSubscription)\n        {\n            switch (message)\n            {\n                case TopicMessage.Binary:\n                    Console.WriteLine("Received unexpected binary message from topic.");\n                    break;\n                case TopicMessage.Text text:\n                    Console.WriteLine($"Received string message from topic: {text.Value}");\n                    break;\n                case TopicMessage.Error error:\n                    throw new Exception($"An error occurred while receiving topic message: {error.ErrorCode}: {error}");\n                default:\n                    throw new Exception("Bad message received");\n            }\n        }\n        subscription.Dispose();\n        break;\n    case TopicSubscribeResponse.Error error:\n        throw new Exception($"An error occurred subscribing to a topic: {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",swift:'let subscribeResponse = await topicClient.subscribe(cacheName: cacheName, topicName: "topic")\n\n#if swift(>=5.9)\nlet subscription = switch subscribeResponse {\n    case .error(let err): fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub): sub\n}\n#else \nlet subscription: TopicSubscription\nswitch subscribeResponse {\n    case .error(let err):\n        fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub):\n        subscription = sub\n}\n#endif\n\n// unsubscribe in 5 seconds\nTask {\n    try await Task.sleep(nanoseconds: 5_000_000_000)\n    subscription.unsubscribe()\n}\n\n// loop over messages as they are received\nfor try await item in subscription.stream {\n    var value: String = ""\n    switch item {\n    case .itemText(let textItem):\n        value = textItem.value\n        print("Subscriber recieved text message: \\(value)")\n    case .itemBinary(let binaryItem):\n        value = String(decoding: binaryItem.value, as: UTF8.self)\n        print("Subscriber recieved binary message: \\(value)")\n    case .error(let err):\n        print("Subscriber received error: \\(err)")\n    }\n}',dart:'final subscription = await topicClient.subscribe("test-cache", "test-topic");\nfinal messageStream = switch (subscription) {\n  TopicSubscription() => subscription.stream,\n  TopicSubscribeError() => throw Exception(\n      "Subscribe error: ${subscription.errorCode} ${subscription.message}"),\n};\n\n// cancel subscription 5 seconds from now\nTimer(const Duration(seconds: 5), () {\n  print("Cancelling subscription!");\n  subscription.unsubscribe();\n});\n\ntry {\n  await for (final msg in messageStream) {\n    switch (msg) {\n      case TopicSubscriptionItemBinary():\n        print("Binary value: ${msg.value}");\n      case TopicSubscriptionItemText():\n        print("String value: ${msg.value}");\n    }\n  }\n} catch (e) {\n  print("Runtime type: ${e.runtimeType}");\n  print("Error with await for loop: $e");\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.yg)("h3",{id:"publish"},"Publish"),(0,i.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,i.yg)("th",{parentName:"tr",align:null},"\u578b"),(0,i.yg)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"cacheName"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"\u30c8\u30d4\u30c3\u30af\u304c\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"topicName"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"\u5024\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u30c8\u30d4\u30c3\u30af\u540d")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"value"),(0,i.yg)("td",{parentName:"tr",align:null},"String / bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"\u3000\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u5024")))),(0,i.yg)(m,{mdxType:"Tabs"},(0,i.yg)(b,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"\u3053\u3061\u3089\u304c",(0,i.yg)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),"\u3067\u3059\u3002"),(0,i.yg)(b,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"\u30e1\u30bd\u30c3\u30c8\u3099\u306e\u30ec\u30b9\u30db\u309a\u30f3\u30b9\u30aa\u30d5\u3099\u30b7\u3099\u30a7\u30af\u30c8"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Success"),(0,i.yg)("li",{parentName:"ul"},"Error")),(0,i.yg)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,i.yg)("a",{parentName:"p",href:"./api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,i.yg)(a.r,{js:"const result = await topicClient.publish(cacheName, 'test-topic', 'test-topic-value');\nif (result instanceof TopicPublish.Success) {\n  console.log(\"Value published to topic 'test-topic'\");\n} else if (result instanceof TopicPublish.Error) {\n  throw new Error(\n    `An error occurred while attempting to publish to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n',java:"",kotlin:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}',go:'_, err := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}',csharp:'var publishResponse =\n     await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\nswitch (publishResponse)\n{\n    case TopicPublishResponse.Success:\n        Console.WriteLine("Successfully published message to \'test-topic\'");\n        break;\n    case TopicPublishResponse.Error error:\n        throw new Exception($"An error occurred while publishing topic message: {error.ErrorCode}: {error}");\n}\n',php:"",rust:"",ruby:"",elixir:"",swift:'let result = await topicClient.publish(\n    cacheName: cacheName,\n    topicName: "topic",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully published message!")\ncase .error(let err):\n    print("Unable to publish message: \\(err)")\n    exit(1)\n}',dart:'final result = await topicClient.publish("cache", "topic", "hello message!");\nswitch (result) {\n  case TopicPublishSuccess():\n    print("Successful publish!");\n  case TopicPublishError():\n    print("Publish error: ${result.errorCode} ${result.message}");\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.yg)("h2",{id:"topicclient"},"TopicClient"),(0,i.yg)("p",null,"\u307b\u3068\u3093\u3069\u306e Momento Cache API \u30b3\u30fc\u30eb\u3067\u306f CacheClient \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001Topics \u306b\u3064\u3044\u3066\u306f TopicClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.yg)(a.r,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\n    TopicConfigurations.Laptop.latest(),\n    new EnvMomentoTokenProvider("MOMENTO_API_KEY")\n);\n',php:"",rust:"",ruby:"",elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',cli:"",mdxType:"SdkExampleTabsImpl"}),(0,i.yg)("h2",{id:"example-apps-using-momento-topics-apis"},"Example apps using Momento Topics APIs"),(0,i.yg)("p",null,"A growing list of example apps using the Momento Topics."),(0,i.yg)("p",null,"Momento Topics\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u306e\u4f8b\u304c\u7d9a\u3005\u3068\u5897\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice"},"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9")," \u3053\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306fTypeScript\u3067\u66f8\u304b\u308c\u3001API Gateway\u3001Lambda\u95a2\u6570\u3001Momento Topics\u3092\u4f7f\u3063\u3066AWS\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b\u3002(API Gateway\u4e0a\u3067\u9069\u5207\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308c\u3070\uff09\u4ed6\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u69d8\u3005\u306a\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3066\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u8cfc\u8aad\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e API \u306b ",(0,i.yg)("inlineCode",{parentName:"li"},"topicName")," \u3068 ",(0,i.yg)("inlineCode",{parentName:"li"},"topicValue")," \u3092\u6e21\u3059\u3068\u3001\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u305d\u306e\u5024\u3092\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002")))}h.isMDXComponent=!0}}]);