"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[482],{7311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(4848),i=t(8453),s=(t(1441),t(5347));const o={sidebar_position:1,sidebar_label:"API Reference",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API."},c="Using the Momento Topics API",a={id:"topics/develop/api-reference/index",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",source:"@site/docs/topics/develop/api-reference/index.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/",permalink:"/topics/develop/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API Reference",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API."},sidebar:"topicsSidebar",previous:{title:"Develop",permalink:"/topics/develop/"},next:{title:"Auth",permalink:"/topics/develop/api-reference/auth"}},l={},u=[{value:"TopicClient",id:"topicclient",level:2},{value:"Topics methods",id:"topics-methods",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"Example apps using Momento Topics APIs",id:"example-apps-using-momento-topics-apis",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-the-momento-topics-api",children:"Using the Momento Topics API"}),"\n",(0,r.jsx)(n.p,{children:"Momento Topics is a messaging pattern enabling real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic and subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics."}),"\n",(0,r.jsx)(n.h2,{id:"topicclient",children:"TopicClient"}),"\n",(0,r.jsxs)(n.p,{children:["Momento Topics API calls are made using a ",(0,r.jsx)(n.code,{children:"TopicClient"})," object."]}),"\n",(0,r.jsx)(s.r,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err := momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\r\n    TopicConfigurations.Laptop.latest(),\r\n    new EnvMomentoTokenProvider("MOMENTO_API_KEY")\r\n);\r',php:"",rust:'  let _topic_client = TopicClient::builder()\n      .configuration(momento::topics::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var("MOMENTO_API_KEY")?)\n      .build()?;',elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"topics-methods",children:"Topics methods"}),"\n",(0,r.jsx)(n.h3,{id:"subscribe",children:"Subscribe"}),"\n",(0,r.jsx)(n.p,{children:"This method subscribes to a topic to receive new values with a stateful connection."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Name of the cache where the topic exists."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Name of the topic to subscribe to."})]})]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Method response object"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Success - Returns a subscription object."}),"\n",(0,r.jsx)(n.li,{children:"Error"}),"\n"]}),(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/topics/develop/api-reference/response-objects",children:"response objects"})," for specific information."]}),(0,r.jsx)(n.p,{children:"With the returned subscription object, once put in a for loop, your code will receive an event when a new value is published to the Topic."})]}),"\n",(0,r.jsx)(s.r,{js:"const result = await topicClient.subscribe(cacheName, 'test-topic', {\n  onError: () => {\n    return;\n  },\n  onItem: (item: TopicItem) => {\n    console.log(`Received an item on subscription for 'test-topic': ${item.value().toString()}`);\n    return;\n  },\n});\nif (result instanceof TopicSubscribe.Subscription) {\n  console.log(\"Successfully subscribed to topic 'test-topic'\");\n\n  console.log(\"Publishing a value to the topic 'test-topic'\");\n  // Publish a value\n  await topicClient.publish(cacheName, 'test-topic', 'test-value');\n\n  console.log('Waiting for the published value to be received.');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n\n  // Need to close the stream before the example ends or else the example will hang.\n  result.unsubscribe();\n} else if (result instanceof TopicSubscribe.Error) {\n  throw new Error(\n    `An error occurred while attempting to subscribe to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n',java:"",kotlin:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}',go:'// Instantiate subscriber\nsub, subErr := client.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}',csharp:'var produceCancellation = new CancellationTokenSource();\r\nproduceCancellation.CancelAfter(2000);\r\n\nvar subscribeResponse = await topicClient.SubscribeAsync("test-cache", "test-topic");\r\nswitch (subscribeResponse)\r\n{\r\n    case TopicSubscribeResponse.Subscription subscription:\r\n        var cancellableSubscription = subscription.WithCancellation(produceCancellation.Token);\r\n\n        await Task.Delay(1_000);\r\n        await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\r\n        await Task.Delay(1_000);\r\n\n        await foreach (var message in cancellableSubscription)\r\n        {\r\n            switch (message)\r\n            {\r\n                case TopicMessage.Binary:\r\n                    Console.WriteLine("Received unexpected binary message from topic.");\r\n                    break;\r\n                case TopicMessage.Text text:\r\n                    Console.WriteLine($"Received string message from topic: {text.Value}");\r\n                    break;\r\n                case TopicMessage.Error error:\r\n                    throw new Exception($"An error occurred while receiving topic message: {error.ErrorCode}: {error}");\r\n                default:\r\n                    throw new Exception("Bad message received");\r\n            }\r\n        }\r\n        subscription.Dispose();\r\n        break;\r\n    case TopicSubscribeResponse.Error error:\r\n        throw new Exception($"An error occurred subscribing to a topic: {error.ErrorCode}: {error}");\r\n}\r',php:"",rust:'  // Make a subscription\n  let mut subscription = topic_client\n      .subscribe(cache_name, topic_name)\n      .await\n      .expect("subscribe rpc failed");\n\n  // Consume the subscription\n  while let Some(item) = subscription.next().await {\n      println!("Received subscription item: {item:?}")\n  }',elixir:"",swift:'let subscribeResponse = await topicClient.subscribe(cacheName: cacheName, topicName: "topic")\n\n#if swift(>=5.9)\nlet subscription = switch subscribeResponse {\n    case .error(let err): fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub): sub\n}\n#else \nlet subscription: TopicSubscription\nswitch subscribeResponse {\n    case .error(let err):\n        fatalError("Error subscribing to topic: \\(err)")\n    case .subscription(let sub):\n        subscription = sub\n}\n#endif\n\n// unsubscribe in 5 seconds\nTask {\n    try await Task.sleep(nanoseconds: 5_000_000_000)\n    subscription.unsubscribe()\n}\n\n// loop over messages as they are received\nfor try await item in subscription.stream {\n    var value: String = ""\n    switch item {\n    case .itemText(let textItem):\n        value = textItem.value\n        print("Subscriber recieved text message: \\(value)")\n    case .itemBinary(let binaryItem):\n        value = String(decoding: binaryItem.value, as: UTF8.self)\n        print("Subscriber recieved binary message: \\(value)")\n    case .error(let err):\n        print("Subscriber received error: \\(err)")\n    }\n}',dart:'final subscription = await topicClient.subscribe("test-cache", "test-topic");\nfinal messageStream = switch (subscription) {\n  TopicSubscription() => subscription.stream,\n  TopicSubscribeError() => throw Exception(\n      "Subscribe error: ${subscription.errorCode} ${subscription.message}"),\n};\n\n// cancel subscription 5 seconds from now\nTimer(const Duration(seconds: 5), () {\n  print("Cancelling subscription!");\n  subscription.unsubscribe();\n});\n\ntry {\n  await for (final msg in messageStream) {\n    switch (msg) {\n      case TopicSubscriptionItemBinary():\n        print("Binary value: ${msg.value}");\n      case TopicSubscriptionItemText():\n        print("String value: ${msg.value}");\n    }\n  }\n} catch (e) {\n  print("Runtime type: ${e.runtimeType}");\n  print("Error with await for loop: $e");\n}',ts:""}),"\n",(0,r.jsx)(n.h3,{id:"publish",children:"Publish"}),"\n",(0,r.jsx)(n.p,{children:"Publishes a message to a topic."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Name of the cache where the topic exists."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Name of the topic to publish the value to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"String / bytes"}),(0,r.jsx)(n.td,{children:"Value to publish to the topic."})]})]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Method response object"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Success"}),"\n",(0,r.jsx)(n.li,{children:"Error"}),"\n"]}),(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/topics/develop/api-reference/response-objects",children:"response objects"})," for specific information."]})]}),"\n",(0,r.jsx)(s.r,{js:"const result = await topicClient.publish(cacheName, 'test-topic', 'test-topic-value');\nif (result instanceof TopicPublish.Success) {\n  console.log(\"Value published to topic 'test-topic'\");\n} else if (result instanceof TopicPublish.Error) {\n  throw new Error(\n    `An error occurred while attempting to publish to the topic 'test-topic' in cache '${cacheName}': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n',java:"",kotlin:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}',go:'_, err := client.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: "test-cache",\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}',csharp:'var publishResponse =\r\n     await topicClient.PublishAsync("test-cache", "test-topic", "test-topic-value");\r\nswitch (publishResponse)\r\n{\r\n    case TopicPublishResponse.Success:\r\n        Console.WriteLine("Successfully published message to \'test-topic\'");\r\n        break;\r\n    case TopicPublishResponse.Error error:\r\n        throw new Exception($"An error occurred while publishing topic message: {error.ErrorCode}: {error}");\r\n}\r',php:"",rust:'  topic_client\n      .publish(cache_name, topic_name, "Hello, Momento!")\n      .await?;\n  println!("Published message");',elixir:"",swift:'let result = await topicClient.publish(\n    cacheName: cacheName,\n    topicName: "topic",\n    value: "value"\n)\nswitch result {\ncase .success(_):\n    print("Successfully published message!")\ncase .error(let err):\n    print("Unable to publish message: \\(err)")\n    exit(1)\n}',dart:'final result = await topicClient.publish("cache", "topic", "hello message!");\nswitch (result) {\n  case TopicPublishSuccess():\n    print("Successful publish!");\n  case TopicPublishError():\n    print("Publish error: ${result.errorCode} ${result.message}");\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"example-apps-using-momento-topics-apis",children:"Example apps using Momento Topics APIs"}),"\n",(0,r.jsx)(n.p,{children:"A growing list of example apps using the Momento Topics."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice",children:"A serverless item publishing microservice"})," This microservice is written in TypeScript and runs on AWS using API Gateway, a Lambda function, and Momento Topics. It can be used by any of your other services (with the correct security on API Gateway) to publish messages to various topics that are then subscribed to by other applications. You pass into this API a ",(0,r.jsx)(n.code,{children:"topicName"})," and ",(0,r.jsx)(n.code,{children:"topicValue"})," and this service publishes the value to that topic."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>T});var r=t(6540),i=t(4164),s=t(3104),o=t(6347),c=t(205),a=t(7485),l=t(1682),u=t(679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,p]=b({queryString:t,groupId:i}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=l??m;return d({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&a(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),p(e),v(e)}),[p,v,s]),tabValues:s}}var v=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),i=c[t].value;i!==r&&(l(n),o(i))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:p,onClick:u,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function T(e){const n=(0,v.A)();return(0,f.jsx)(w,{...e,children:p(e.children)},String(n))}},1441:(e,n,t)=>{t(6540)},5347:(e,n,t)=>{t.d(n,{r:()=>c});var r=t(1470),i=t(9365),s=t(1432),o=(t(6540),t(4848));const c=e=>{let{js:n,python:t,java:c,kotlin:a,go:l,csharp:u,php:p,rust:h,ruby:d,elixir:b,swift:m,dart:v,cli:g}=e;return n||t||c||a||l||u||p||h||d||b||m||v||g?(0,o.jsxs)(r.A,{children:[n&&(0,o.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(s.A,{language:"js",children:n})}),t&&(0,o.jsx)(i.A,{value:"python",label:"Python",children:(0,o.jsx)(s.A,{language:"python",children:t})}),c&&(0,o.jsx)(i.A,{value:"java",label:"Java",children:(0,o.jsx)(s.A,{language:"java",children:c})}),a&&(0,o.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(s.A,{language:"kotlin",children:a})}),l&&(0,o.jsx)(i.A,{value:"go",label:"Go",children:(0,o.jsx)(s.A,{language:"go",children:l})}),u&&(0,o.jsx)(i.A,{value:"csharp",label:"C#",children:(0,o.jsx)(s.A,{language:"csharp",children:u})}),p&&(0,o.jsx)(i.A,{value:"php",label:"PHP",children:(0,o.jsx)(s.A,{language:"php",children:p})}),h&&(0,o.jsx)(i.A,{value:"rust",label:"Rust",children:(0,o.jsx)(s.A,{language:"rust",children:h})}),d&&(0,o.jsx)(i.A,{value:"ruby",label:"Ruby",children:(0,o.jsx)(s.A,{language:"ruby",children:d})}),b&&(0,o.jsx)(i.A,{value:"elixir",label:"Elixir",children:(0,o.jsx)(s.A,{language:"elixir",children:b})}),m&&(0,o.jsx)(i.A,{value:"swift",label:"Swift",children:(0,o.jsx)(s.A,{language:"swift",children:m})}),v&&(0,o.jsx)(i.A,{value:"dart",label:"Dart",children:(0,o.jsx)(s.A,{language:"dart",children:v})}),g&&(0,o.jsx)(i.A,{value:"cli",label:"CLI",children:(0,o.jsx)(s.A,{language:"cli",children:g})})]}):null}}}]);