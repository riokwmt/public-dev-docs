"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[383],{3043:(e,t,n)=>{n(7294)},7235:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(814),a=n(7294);const r=e=>{let{language:t,code:n}=e;return a.createElement(o.Z,{language:t},n)}},5850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var o=n(7462),a=(n(7294),n(3905)),r=(n(3043),n(7235));const i={sidebar_position:1,sidebar_label:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",sidebar_class_name:"sidebar-item-go",title:"Go \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Cache \u3092 Go \u3092\u4f7f\u3063\u3066\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u307e\u3057\u3087\u3046",pagination_next:null},l="Momento Cache \u3092 Go \u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",m={unversionedId:"develop/sdks/go/cheat-sheet",id:"develop/sdks/go/cheat-sheet",title:"Go \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Cache \u3092 Go \u3092\u4f7f\u3063\u3066\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u307e\u3057\u3087\u3046",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/sdks/go/cheat-sheet.mdx",sourceDirName:"develop/sdks/go",slug:"/develop/sdks/go/cheat-sheet",permalink:"/ja/develop/sdks/go/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/go/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",sidebar_class_name:"sidebar-item-go",title:"Go \u306e\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",description:"Momento Cache \u3092 Go \u3092\u4f7f\u3063\u3066\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u307e\u3057\u3087\u3046",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/ja/develop/sdks/go/"}},c={},s=[{value:"Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059",id:"momento-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059",level:2},{value:"auth\u30c8\u30fc\u30af\u30f3\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",id:"auth\u30c8\u30fc\u30af\u30f3\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059",level:2},{value:"Momento Cache\u3067\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059",id:"momento-cache\u3067\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",id:"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",id:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-cache-\u3092-go-\u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"},"Momento Cache \u3092 Go \u3067\u4f7f\u3046\u305f\u3081\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,a.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento Cache \u3092 Go \u3067\u7d20\u65e9\u304f\u4f7f\u3063\u3066\u307f\u305f\u3044\u65b9\u306e\u305f\u3081\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u790e\u7684\u306a API \u547c\u51fa\u3057\u3092\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30b3\u30fc\u30c9\u306e\u30d5\u30a1\u30a4\u30eb\u5168\u4f53\u306f",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-go"},"Go SDK \u306e\u30da\u30fc\u30b8\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044"),"\u3002"),(0,a.kt)("h2",{id:"momento-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059"},"Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://go.dev/doc/code#Command"},"Go\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210"),"\u3057\u305f\u3089\u3001Momento Go SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"go get github.com/momentohq/client-sdk-go\n")),(0,a.kt)("h2",{id:"auth\u30c8\u30fc\u30af\u30f3\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059"},"auth\u30c8\u30fc\u30af\u30f3\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059"),(0,a.kt)("p",null,"Momento \u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/develop/basics/working-with-momento-auth-tokens"},"Momento auth token")," \u304c\u5fc5\u8981\u3067\u3059\u3002 ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web\u30b3\u30f3\u30bd\u30fc\u30eb")," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001\u30c8\u30fc\u30af\u30f3\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u683c\u7d0d\u3059\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057cacheclient-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059"),(0,a.kt)("p",null,"\u307e\u305a\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u53d6\u308a\u8fbc\u307f\u3001main\u95a2\u6570\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "errors"\n    "log"\n    "time"\n\n    "github.com/google/uuid"\n    "github.com/momentohq/client-sdk-go/auth"\n    "github.com/momentohq/client-sdk-go/config"\n    "github.com/momentohq/client-sdk-go/config/logger"\n    "github.com/momentohq/client-sdk-go/momento"\n    "github.com/momentohq/client-sdk-go/responses"\n)\n\nfunc main() {\n    fmt.Println("Hello, world.")\n}\n')),(0,a.kt)("p",null,"\u6b21\u306b\u3001Momento Cache \u3068\u306e\u3084\u308a\u3068\u308a\u306b\u4f7f\u7528\u3059\u308b CacheClient \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u307e\u3059\u3002"),(0,a.kt)(r.Z,{language:"go",code:'context := context.Background()\ncredentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := time.Duration(9999)\neagerConnectTimeout := 30 * time.Second\n\nclient, err := momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest(),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"momento-cache\u3067\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059"},"Momento Cache\u3067\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059"),(0,a.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(r.Z,{language:"go",code:'_, err := client.CreateCache(ctx, &momento.CreateCacheRequest{\n\tCacheName: "cache-name",\n})\nif err != nil {\n\tpanic(err)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b"),(0,a.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5b58\u5728\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u30ea\u30b9\u30c8\u304c\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(r.Z,{language:"go",code:'resp, err := client.ListCaches(ctx, &momento.ListCachesRequest{})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.ListCachesSuccess:\n\tlog.Printf("Found caches %+v", r.Caches())\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"},"\u30a2\u30a4\u30c6\u30e0\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u3080"),(0,a.kt)("p",null,"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3067\u3059\u3002\nclient.set\u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\nTTL\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eTTL\u5024\u304c\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)(r.Z,{language:"go",code:'key := uuid.NewString()\nvalue := uuid.NewString()\nlog.Printf("Setting key: %s, value: %s\\n", key, value)\n_, err := client.Set(ctx, &momento.SetRequest{\n\tCacheName: "cache-name",\n\tKey:       momento.String(key),\n\tValue:     momento.String(value),\n\tTtl:       time.Duration(9999),\n})\nif err != nil {\n\tvar momentoErr momento.MomentoError\n\tif errors.As(err, &momentoErr) {\n\t\tif momentoErr.Code() != momento.TimeoutError {\n\t\t\t// this would represent a client-side timeout, and you could fall back to your original data source\n\t\t} else {\n\t\t\tpanic(err)\n\t\t}\n\t}\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"),(0,a.kt)(r.Z,{language:"go",code:'key := uuid.NewString()\nresp, err := client.Get(ctx, &momento.GetRequest{\n\tCacheName: "cache-name",\n\tKey:       momento.String(key),\n})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.GetHit:\n\tlog.Printf("Lookup resulted in cache HIT. value=%s\\n", r.ValueString())\ncase *responses.GetMiss:\n\tlog.Printf("Look up did not find a value key=%s", key)\n}',mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b"},"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("p",null,"\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"go run"),"\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"go run main.go\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e API \u547c\u51fa\u3057\u4ee5\u4e0a\u306e\u3082\u306e\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/"},"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3067 Momento API \u547c\u51fa\u3057\u306e\u5168\u7a2e\u985e\u306e\u8a73\u3057\u3044\u60c5\u5831\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u3055\u3089\u306a\u308b\u30b3\u30fc\u30c9\u4f8b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-go/tree/main/examples"},"Momento Go SDK \u30ec\u30dd\u30b8\u30c8\u30ea"),"\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002")))}p.isMDXComponent=!0}}]);