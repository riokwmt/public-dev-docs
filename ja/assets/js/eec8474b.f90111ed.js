"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3845],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(614),o=n(7294);const s=e=>{let{language:t,code:n}=e;return o.createElement(a.Z,{language:t},n)}},6277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),s=(n(3043),n(7235));const r={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Java",description:"Momento Cache\u3067Java\u3092\u4f7f\u3063\u305f\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u7d20\u65e9\u304f\u59cb\u3081\u308b\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3067\u3059\u3002"},c="Momento Cache\u3092\u4f7f\u3063\u305fJava\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",i={unversionedId:"cache/develop/sdks/java/cheat-sheet",id:"cache/develop/sdks/java/cheat-sheet",title:"Cheat Sheet for Java",description:"Momento Cache\u3067Java\u3092\u4f7f\u3063\u305f\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u7d20\u65e9\u304f\u59cb\u3081\u308b\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/sdks/java/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/java",slug:"/cache/develop/sdks/java/cheat-sheet",permalink:"/ja/cache/develop/sdks/java/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/java/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Java",description:"Momento Cache\u3067Java\u3092\u4f7f\u3063\u305f\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u7d20\u65e9\u304f\u59cb\u3081\u308b\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3067\u3059\u3002"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/ja/cache/develop/sdks/java/"},next:{title:"Kotlin",permalink:"/ja/cache/develop/sdks/kotlin/"}},l={},p=[{value:"Momento client\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"momento-client\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"API key\u3092\u8a2d\u5b9a",id:"api-key\u3092\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u3088\u3046\u306b\u63a5\u7d9a\u3059\u308b",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u3088\u3046\u306b\u63a5\u7d9a\u3059\u308b",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u30ea\u30b9\u30c8",id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u30ea\u30b9\u30c8",level:2},{value:"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",id:"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",id:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-cache\u3092\u4f7f\u3063\u305fjava\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"},"Momento Cache\u3092\u4f7f\u3063\u305fJava\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,o.kt)("p",null,"Java\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u5b9f\u7528\u7684\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-java/tree/main/examples"},"Java SDK examples")," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"momento-client\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Momento client\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("p",null,"\u65e2\u5b58\u306eJava\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"),(0,o.kt)("h3",{id:"gradle"},"Gradle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("software.momento.java:sdk:1.0.0")\n')),(0,o.kt)("h3",{id:"maven"},"Maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>software.momento.java</groupId>\n    <artifactId>sdk</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"api-key\u3092\u8a2d\u5b9a"},"API key\u3092\u8a2d\u5b9a"),(0,o.kt)("p",null,"Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento API key\u304c\u5fc5\u8981\u3067\u3059\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\nAPI key\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento API key here>\n")),(0,o.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u3088\u3046\u306b\u63a5\u7d9a\u3059\u308b"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u3088\u3046\u306b\u63a5\u7d9a\u3059\u308b"),(0,o.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u304a\u3088\u3073\u4ed6\u306e\u5404\u95a2\u6570\u304c\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306e\u3042\u308b CacheClient \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)(s.Z,{language:"java",code:'package momento.client.example.doc_examples;\n\nimport java.time.Duration;\nimport momento.sdk.CacheClient;\nimport momento.sdk.auth.CredentialProvider;\nimport momento.sdk.config.Configurations;\n\npublic class CheatSheet {\n  public static void main(String[] args) {\n    try (final CacheClient cacheClient =\n        CacheClient.create(\n            CredentialProvider.fromEnvVar("MOMENTO_API_KEY"),\n            Configurations.Laptop.v1(),\n            Duration.ofSeconds(60) /* defaultTTL for your cache items*/,\n            Duration.ofSeconds(10) /* eagerConnectionTimeout, default is 30 seconds */)) {\n      // ...\n    }\n  }\n}\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u95a2\u6570\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,o.kt)(s.Z,{language:"java",code:'final CacheCreateResponse response = cacheClient.createCache("test-cache").join();\nif (response instanceof CacheCreateResponse.Success) {\n  System.out.println("Cache \'test-cache\' created");\n} else if (response instanceof CacheCreateResponse.Error error) {\n  if (error.getCause() instanceof AlreadyExistsException) {\n    System.out.println("Cache \'test-cache\' already exists");\n  } else {\n    throw new RuntimeException(\n        "An error occurred while attempting to create cache \'test-cache\': "\n            + error.getErrorCode(),\n        error);\n  }\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u30ea\u30b9\u30c8"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u30ea\u30b9\u30c8"),(0,o.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,o.kt)(s.Z,{language:"java",code:'final CacheListResponse response = cacheClient.listCaches().join();\nif (response instanceof CacheListResponse.Success success) {\n  final String caches =\n      success.getCaches().stream().map(CacheInfo::name).collect(Collectors.joining("\\n"));\n  System.out.println("Caches:\\n" + caches);\n} else if (response instanceof CacheListResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to list caches: " + error.getErrorCode(), error);\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"},"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"),(0,o.kt)("p",null,"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3067\u3059\u3002client.set\u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3082\u3057TTL\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)(s.Z,{language:"java",code:'final SetResponse response = cacheClient.set("test-cache", "test-key", "test-value").join();\nif (response instanceof SetResponse.Success) {\n  System.out.println("Key \'test-key\' stored successfully");\n} else if (response instanceof SetResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': "\n          + error.getErrorCode(),\n      error);\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"),(0,o.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u8fbc\u307f\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"),(0,o.kt)(s.Z,{language:"java",code:"final GetResponse response = cacheClient.get(\"test-cache\", \"test-key\").join();\nif (response instanceof GetResponse.Hit hit) {\n  System.out.println(\"Retrieved value for key 'test-key': \" + hit.valueString());\n} else if (response instanceof GetResponse.Miss) {\n  System.out.println(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (response instanceof GetResponse.Error error) {\n  throw new RuntimeException(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': \"\n          + error.getErrorCode(),\n      error);\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b"},"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-java/tree/main/examples"},"Java SDK\u306egithub\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308bexamples\u30c7\u30a3\u30ec\u30af\u30c8\u30ea"),"\u306b\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}h.isMDXComponent=!0}}]);