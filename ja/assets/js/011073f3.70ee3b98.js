"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8340],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(614),r=n(7294);const a=e=>{let{language:t,code:n}=e;return r.createElement(o.Z,{language:t},n)}},5828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=n(7462),r=(n(7294),n(3905)),a=(n(3043),n(7235));const i={sidebar_position:3,sidebar_label:"Observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces"},s="Node.js\u306eMomento\u306b\u3088\u308b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3",l={unversionedId:"cache/develop/sdks/nodejs/observability",id:"cache/develop/sdks/nodejs/observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/sdks/nodejs/observability.mdx",sourceDirName:"cache/develop/sdks/nodejs",slug:"/cache/develop/sdks/nodejs/observability",permalink:"/ja/cache/develop/sdks/nodejs/observability",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/nodejs/observability.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces"},sidebar:"tutorialSidebar",previous:{title:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",permalink:"/ja/cache/develop/sdks/nodejs/cheat-sheet"},next:{title:"JS Web SDK",permalink:"/ja/cache/develop/sdks/web/"}},d={},m=[{value:"\u30ed\u30ae\u30f3\u30b0",id:"\u30ed\u30ae\u30f3\u30b0",level:2},{value:"\u30e1\u30c8\u30ea\u30af\u30b9",id:"\u30e1\u30c8\u30ea\u30af\u30b9",level:2},{value:"\u30c8\u30ec\u30fc\u30b9",id:"\u30c8\u30ec\u30fc\u30b9",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodejs\u306emomento\u306b\u3088\u308b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3"},"Node.js\u306eMomento\u306b\u3088\u308b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3"),(0,r.kt)("h2",{id:"\u30ed\u30ae\u30f3\u30b0"},"\u30ed\u30ae\u30f3\u30b0"),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306eMomento SDK\u306e\u30b4\u30fc\u30eb\u306f\u3001\u958b\u767a\u8005\u304cMomento\u306e\u30ed\u30b0\u51fa\u529b\u3092\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3068\u540c\u3058\u5b9b\u5148\u306b\u5411\u3051\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"node.js\u3067\u5229\u7528\u3067\u304d\u308b\u30ed\u30ae\u30f3\u30b0\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u3002\u4eba\u6c17\u306e\u3042\u308b\u3082\u306e\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pinojs/pino"},"Pino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/winstonjs/winston"},"Winston")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/trentm/node-bunyan"},"Bunyan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/expressjs/morgan"},"Morgan"))),(0,r.kt)("p",null,"Momento \u304c\u3053\u308c\u3089\u306e\u30e9\u30a4\u30d6\u30e9\u30ea (\u305d\u3057\u3066\u305d\u308c\u4ee5\u4e0a!) \u3068\u4e92\u63db\u6027\u304c\u3042\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u306b\u3001\u79c1\u305f\u3061\u306f\u8efd\u91cf\u306a\u30ed\u30ae\u30f3\u30b0\u30d5\u30a1\u30b5\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3092\u4f7f\u3046\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"MomentoLoggerFactory")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"MomentoLogger")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u3060\u3051\u3067\u3059\uff1a"),(0,r.kt)(a.Z,{language:"javascript",code:"export interface MomentoLogger {\n  error(msg: string, ...args: unknown[]): void;\n  warn(msg: string, ...args: unknown[]): void;\n  info(msg: string, ...args: unknown[]): void;\n  debug(msg: string, ...args: unknown[]): void;\n  trace(msg: string, ...args: unknown[]): void;\n}\n\nexport interface MomentoLoggerFactory {\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  getLogger(loggerName: string | any): MomentoLogger;\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,"\u3042\u306a\u305f\u306e\u5b9f\u88c5\u306f\u3001\u9078\u629e\u3057\u305f\u30ed\u30ae\u30f3\u30b0\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8584\u3044\u30e9\u30c3\u30d1\u30fc\u306b\u306a\u308b\u3067\u3057\u3087\u3046\u3002\n\u79c1\u305f\u3061\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},(0,r.kt)("inlineCode",{parentName:"a"},"pino")),"\u30ed\u30ac\u30fc\u3092\u4f7f\u7528\u3059\u308b\u5b8c\u5168\u3067\u52d5\u4f5c\u3059\u308b\u5b9f\u88c5\u4f8b\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/observability/pino-logger.ts"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MomentoLoggerFactory"),"\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u3001\u7279\u5b9a\u306e\u30ed\u30ac\u30fc\u30ec\u30d9\u30eb\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u305d\u308c\u304b\u3089\u3001\u6307\u5b9a\u3057\u305f\u30ed\u30ac\u30fc\u30ec\u30d9\u30eb\u3092\u4f7f\u7528\u3059\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"MomentoLogger")," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u305d\u306e\u30d5\u30a1\u30af\u30c8\u30ea\u30fc\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{language:"javascript",code:"// Setting the level to ERROR means you will see error messages but\n// no trace, info, debug, or warning messages.\nconst errorLoggerFactory = new DefaultMomentoLoggerFactory(DefaultMomentoLoggerLevel.ERROR);\nconst errorLogger = errorLoggerFactory.getLogger('momento-error-logger');\nerrorLogger.error('error in the code!');\n\n// Setting the level to DEBUG means you will see error, info, debug,\n// and warning messages but no trace messages.\nconst debugLoggerFactory = new DefaultMomentoLoggerFactory(DefaultMomentoLoggerLevel.DEBUG);\nconst debugLogger = debugLoggerFactory.getLogger('momento-debug-logger');\ndebugLogger.debug('helpful debugging message');",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MomentoLoggerFactory")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"MomentoLogger")," \u3092\u5b9a\u7fa9\u3057\u305f\u3089\u3001\u6700\u5f8c\u306b Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u597d\u307f\u306e\u30ed\u30ac\u30fc\u3092\u4f7f\u3046\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff1a"),(0,r.kt)(a.Z,{language:"javascript",code:"return new CacheClient({\n  configuration: Configurations.Laptop.v1(\n    new PinoMomentoLoggerFactory({\n      transport: {\n        target: 'pino-pretty',\n        options: {\n          colorize: true,\n        },\n      },\n    })\n  ),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'}),\n  defaultTtlSeconds: 60,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,"\u305d\u3046\u3059\u308b\u3068\u3001Momento\u304b\u3089\u306e\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8\u304cpino\u306e\u30ed\u30ae\u30f3\u30b0\u74b0\u5883\u3092\u901a\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1685649962168] INFO (CacheClient/4386 on mycomputer.local): Creating Momento CacheClient\n[1685649962168] INFO (ControlClient/4386 on mycomputer.local): Creating cache: test-cache\n")),(0,r.kt)("h2",{id:"\u30e1\u30c8\u30ea\u30af\u30b9"},"\u30e1\u30c8\u30ea\u30af\u30b9"),(0,r.kt)("p",null,"\u30e1\u30c8\u30ea\u30af\u30b9\u3068\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3084\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u5b9a\u91cf\u7684\u306a\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u6e2c\u5b9a\u5024\u306e\u3053\u3068\u3067\u3059\u3002\n\u4e00\u5b9a\u306e\u9593\u9694\u3067\u53d6\u5f97\u3055\u308c\u8a18\u9332\u3055\u308c\u308b\u6570\u5024\u3067\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u50be\u5411\u3084\u30d1\u30bf\u30fc\u30f3\u3092\u7406\u89e3\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u7d71\u8a08\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Momento\u306e\u5834\u5408\u3001\u5177\u4f53\u7684\u306b\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6570\u3001\u6301\u7d9a\u6642\u9593\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u307e\u305f\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30b5\u30a4\u30ba\u3001\u307e\u305f\u306f\u5931\u6557\u7387\u306b\u95a2\u3059\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u53d6\u5f97\u3057\u305f\u3044\u3068\u601d\u3046\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u51fa\u529b\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ExperimentalMetricsMiddleware"),"\u30af\u30e9\u30b9\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u306fJSON\u5f62\u5f0f\u3067\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u51fa\u529b\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'(Momento: _ExperimentalMetricsLoggingMiddleware):\n{\n  "momento": {\n    "numActiveRequestsAtStart": 1,\n    "numActiveRequestsAtFinish": 1,\n    "requestType": "_GetRequest",\n    "status": 0,\n    "startTime": 1697663118489,\n    "requestBodyTime": 1697663118489,\n    "endTime": 1697663118492,\n    "duration": 3,\n    "requestSize": 32,\n    "responseSize": 2,\n    "connectionID": "0"\n  }\n}\n')),(0,r.kt)("p",null,"\u5c06\u6765\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3001\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u5b89\u5b9a\u3057\u305f\u3068\u307f\u306a\u3055\u308c\u305f\u6642\u70b9\u3067\u3001\u3053\u306e\u30af\u30e9\u30b9\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"Experimental")," \u3068\u3044\u3046\u63a5\u982d\u8f9e\u3092\u53d6\u308a\u9664\u3044\u305f\u540d\u524d\u306b\u5909\u66f4\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u3002\n\u5229\u7528\u53ef\u80fd\u306a\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u30af\u30e9\u30b9\u306f2\u3064\u3042\u308a\u307e\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/packages/client-sdk-nodejs/src/config/middleware/experimental-metrics-logging-middleware.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"ExperimentalMetricsLoggingMiddleware")),": will emit metrics to your chosen logger. WARNING: depending on your request volume, this middleware will produce a high volume of log output. If you are writing logs directly to local disk, be aware of disk usage and make sure you have log rotation / compression enabled via a tool such as ",(0,r.kt)("inlineCode",{parentName:"li"},"logrotate"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/packages/client-sdk-nodejs/src/config/middleware/experimental-metrics-csv-middleware.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"ExperimentalMetricsCsvMiddleware")),": will emit metrics to a CSV file. WARNING: enabling this middleware may have minor performance implications, so enable with caution. Depending on your request volume, the CSV file size may grow quickly, and neither sampling nor file compression / rotation are included at this time.")),(0,r.kt)("p",null,"\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u3084CSV\u3092\u5206\u6790\u3057\u305f\u308a\u3001Momento\u3068\u5171\u6709\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u554f\u984c\u3092\u8a3a\u65ad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u30ed\u30b0\u3092 AWS CloudWatch Log Group \u306b\u8ee2\u9001\u3057\u3001CloudWatch \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3066 Momento \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u76e3\u8996\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/cloudwatch-metrics"},"Momento \u30e1\u30c8\u30ea\u30af\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u8d77\u52d5\u4f8b")," \u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001Node.js SDK \u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002\nLambda\u3068Fargate\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ExperimentalMetricsLoggingMiddleware"),"\u30af\u30e9\u30b9\u3068CloudWatch\u30e1\u30c8\u30ea\u30c3\u30af\u30d5\u30a3\u30eb\u30bf\u3092\u5229\u7528\u3057\u3066\u3001\u4e0b\u56f3\u306e\u3088\u3046\u306a\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of a CloudWatch dashboard with nine graphs populated by Momento metrics",src:n(8723).Z,width:"3456",height:"2234"})),(0,r.kt)("p",null,"\u307e\u305f\u3001Momento gRPC\u30b3\u30fc\u30eb\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30a4\u30f3\u30bf\u30fc\u30bb\u30d7\u30c8\u3059\u308b\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u4f7f\u7528\u3057\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001OpenTelemetry \u3068 Prometheus \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u7a2e\u985e\u306b\u3088\u3063\u3066\u30d5\u30a1\u30bb\u30c3\u30c8\u3055\u308c\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u4f8b\u3092\u793a\u3057\u307e\u3059\uff1a"),(0,r.kt)("p",null,"\u307e\u305a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\uff1a"),(0,r.kt)(a.Z,{language:"javascript",code:"const resource = Resource.default();\n\nconst metricsExporter = new PrometheusExporter({}, () => {\n  console.log('prometheus scrape endpoint: http://localhost:9464/metrics');\n});\n\nconst meterProvider = new MeterProvider({\n  resource: resource,\n});\n\nmeterProvider.addMetricReader(metricsExporter);\n\nmetrics.setGlobalMeterProvider(meterProvider);",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u6355\u6349\u3059\u308b\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"),(0,r.kt)(a.Z,{language:"javascript",code:"import {Middleware, MiddlewareRequestHandler} from '@gomomento/sdk';\nimport {metrics} from '@opentelemetry/api';\nimport {Counter} from '@opentelemetry/api/build/src/metrics/Metric';\nimport {\n  MiddlewareMessage,\n  MiddlewareMetadata,\n  MiddlewareStatus,\n} from '@gomomento/sdk/dist/src/config/middleware/middleware';\n\nclass ExampleMetricMiddlewareRequestHandler implements MiddlewareRequestHandler {\n  private requestCounter: Counter;\n  constructor(requestCounter: Counter) {\n    this.requestCounter = requestCounter;\n  }\n  onRequestMetadata(metadata: MiddlewareMetadata): Promise<MiddlewareMetadata> {\n    return Promise.resolve(metadata);\n  }\n\n  onRequestBody(request: MiddlewareMessage): Promise<MiddlewareMessage> {\n    const requestType = request.constructor.name;\n    this.requestCounter.add(1, {'request.type': requestType});\n    return Promise.resolve(request);\n  }\n\n  onResponseMetadata(metadata: MiddlewareMetadata): Promise<MiddlewareMetadata> {\n    return Promise.resolve(metadata);\n  }\n\n  onResponseBody(response: MiddlewareMessage | null): Promise<MiddlewareMessage | null> {\n    return Promise.resolve(response);\n  }\n\n  onResponseStatus(status: MiddlewareStatus): Promise<MiddlewareStatus> {\n    return Promise.resolve(status);\n  }\n}\n\n/**\n * Basic middleware implementation that captures a request count metric. See experimental-metrics-csv-middleware.ts for\n * more comprehensive metrics, although be aware that that class is meant for troubleshooting and will eat disk space quickly.\n */\nexport class ExampleMetricMiddleware implements Middleware {\n  private readonly requestCounter: Counter;\n  constructor() {\n    const meter = metrics.getMeter('metric-middleware-meter');\n\n    this.requestCounter = meter.createCounter('momento_requests_counter', {\n      description: 'Momento GRPC requests',\n    });\n  }\n\n  onNewRequest(): MiddlewareRequestHandler {\n    return new ExampleMetricMiddlewareRequestHandler(this.requestCounter);\n  }\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,"Momento ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," \u3092\u4f5c\u6210\u3057\u3001\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3054\u3068\u306b\u30e1\u30c8\u30ea\u30c3\u30af\u304c\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u308c\u307e\u3059\uff1a"),(0,r.kt)(a.Z,{language:"javascript",code:"new CacheClient({\n  configuration: Configurations.Laptop.v1().addMiddleware(new ExampleMetricMiddleware()),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n  defaultTtlSeconds: 60,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001Momento\u306b\u5bfe\u3057\u3066\u884c\u308f\u308c\u305fget\u30ea\u30af\u30a8\u30b9\u30c8\u3068set\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30b0\u30e9\u30d5\u3092\u8868\u793a\u3059\u308bGrafana UI\u306e\u4f8b\u3067\u3059\u3002\n",(0,r.kt)("img",{alt:"image",src:n(3414).Z,width:"3018",height:"810"})),(0,r.kt)("h2",{id:"\u30c8\u30ec\u30fc\u30b9"},"\u30c8\u30ec\u30fc\u30b9"),(0,r.kt)("p",null,"\u30c8\u30ec\u30fc\u30b9\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30d7\u30ed\u30bb\u30b9\u306e\u8a73\u7d30\u306a\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3092\u63d0\u4f9b\u3057\u3001\u7279\u5b9a\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3084\u64cd\u4f5c\u306b\u95a2\u4e0e\u3059\u308b\u7570\u306a\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u30b5\u30fc\u30d3\u30b9\u9593\u306e\u95a2\u4fc2\u3092\u793a\u3057\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001\u958b\u767a\u8005\u306f\u3053\u308c\u3089\u306e\u64cd\u4f5c\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3068\u671f\u9593\u3092\u5206\u6790\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u5185\u306e\u30c7\u30fc\u30bf\u306e\u6d41\u308c\u3092\u3088\u308a\u6df1\u304f\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"Momento Node.js SDK \u306f\u3001Momento \u30b5\u30fc\u30d0\u30fc\u3068\u306e\u901a\u4fe1\u306b\u5185\u90e8\u7684\u306b gRPC \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\nOpenTelemetry \u306f\u3001\u3059\u3079\u3066\u306e gRPC \u547c\u3073\u51fa\u3057\u3092\u30c8\u30ec\u30fc\u30b9\u3067\u81ea\u52d5\u8a08\u6e2c\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u3088\u3046\u306b\u3001\u30c8\u30ec\u30fc\u30b9\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u4ee5\u4e0b\u306f\u3001\u3053\u308c\u3089\u306e\u30b3\u30fc\u30eb\u306e\u30c8\u30ec\u30fc\u30b9\u3092\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u3001Zipkin \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u4f8b\u3067\u3059\uff1a"),(0,r.kt)(a.Z,{language:"javascript",code:"const resource = Resource.default();\n\nconst provider = new NodeTracerProvider({\n  resource: resource,\n});\n\nconst exporter = new ZipkinExporter();\n\nprovider.addSpanProcessor(new SimpleSpanProcessor(exporter));\nprovider.register();\n\nregisterInstrumentations({\n  instrumentations: [new GrpcInstrumentation()],\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("p",null,"\u3053\u308c\u306fMomento\u30b3\u30fc\u30c9\u306e\u524d\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f Zipkin UI \u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u3001\u53d6\u5f97\u3001\u30bb\u30c3\u30c8\u306e\u30c8\u30ec\u30fc\u30b9\u3092\u8868\u793a\u3057\u305f\u4f8b\u3067\u3059\uff1a\n",(0,r.kt)("img",{alt:"image",src:n(3670).Z,width:"2500",height:"850"})),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u30c8\u30ec\u30fc\u30b9\u751f\u6210\u306b\u3088\u3063\u3066\u5f71\u97ff\u3092\u53d7\u3051\u308b\u306e\u3067\u3042\u308c\u3070\u3001\u751f\u6210\u3055\u308c\u308b\u30c8\u30ec\u30fc\u30b9\u6570\u3092\u524a\u6e1b\u3059\u308b\u305f\u3081\u306b\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u691c\u8a0e\u3059\u3079\u304d\u3067\u3059\u3002\nOpenTelemetry \u3067\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u30012\u3064\u306e\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cli"},'export OTEL_TRACES_SAMPLER="traceidratio"\nexport OTEL_TRACES_SAMPLER_ARG="0.1"\n')),(0,r.kt)("p",null,"\u3053\u308c\u3089\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30c8\u30ec\u30fc\u30b9\u306e10\uff05\u306e\u307f\u304c\u4f5c\u6210\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}u.isMDXComponent=!0},3414:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/grafana_screenshot-022d7e4d1e9611ecd5856c3d9c729f9d.png"},3670:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zipkin_screenshot-a7215ab6d563ef7b97e5b3dbe46e9731.png"},8723:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloudwatch-dashboard-0cb80aeb853a930776addddbd2e28ce6.png"}}]);