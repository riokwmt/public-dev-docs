"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3487],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(614),r=o(7294);const i=e=>{let{language:t,code:o}=e;return r.createElement(n.Z,{language:t},o)}},7028:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(7462),r=(o(7294),o(3905)),i=(o(3043),o(7235));const a={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Elixir",description:"Get started really quickly coding using Elixir with Momento Cache"},l="Elixir\u3068Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8",c={unversionedId:"cache/develop/sdks/elixir/cheat-sheet",id:"cache/develop/sdks/elixir/cheat-sheet",title:"Cheat Sheet for Elixir",description:"Get started really quickly coding using Elixir with Momento Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/sdks/elixir/cheat-sheet.mdx",sourceDirName:"cache/develop/sdks/elixir",slug:"/cache/develop/sdks/elixir/cheat-sheet",permalink:"/ja/cache/develop/sdks/elixir/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/elixir/cheat-sheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Cheat Sheet for Elixir",description:"Get started really quickly coding using Elixir with Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Elixir",permalink:"/ja/cache/develop/sdks/elixir/"},next:{title:"PHP",permalink:"/ja/cache/develop/sdks/php/"}},s={},d=[{value:"Momento SDK\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"momento-sdk\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",level:2},{value:"CacheClient \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"cacheclient-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}],h={toc:d},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elixir\u3068momento\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"},"Elixir\u3068Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8"),(0,r.kt)("p",null,"Elixir\u3068Momento Cache\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5b8c\u5168\u3067\u5b9f\u7528\u7684\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples"},"Elixir SDK examples")," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"momento-sdk\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Momento SDK\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"Momento Elixir SDK\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306f",(0,r.kt)("a",{parentName:"p",href:"https://hex.pm/packages/gomomento"},"Hex"),"\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"},"\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002 Momento Web Console](",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82"},"https://console.gomomento.com/caches)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),"\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n")),(0,r.kt)("h2",{id:"cacheclient-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"CacheClient \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u4ed6\u306e\u5404\u95a2\u6570\u304c\u5fc5\u8981\u3068\u3059\u308b CacheClient \u69cb\u9020\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{language:"elixir",code:'alias Momento.CacheClient\n\nconfig = Momento.Configurations.Laptop.latest()\ncredential_provider = Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")\ndefault_ttl_seconds = 60.0\nclient = CacheClient.create!(config, credential_provider, default_ttl_seconds)\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"momento-cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"},"Momento Cache\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{language:"elixir",code:'case Momento.CacheClient.create_cache(client, "test-cache") do\n  {:ok, _} ->\n    IO.puts("Cache \'test-cache\' created")\n\n  :already_exists ->\n    :ok\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to create cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059"},"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8"),(0,r.kt)(i.Z,{language:"elixir",code:'case Momento.CacheClient.list_caches(client) do\n  {:ok, result} ->\n    IO.puts("Caches:")\n    IO.inspect(result.caches)\n\n  {:error, error} ->\n    IO.puts("An error occurred while attempting to list caches: #{error.error_code}")\n    raise error\nend',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u3080"),(0,r.kt)("p",null,"\u30bb\u30c3\u30c8\u64cd\u4f5c\u306e\u5358\u7d14\u306a\u4f8b\u3002CacheClient.set() \u547c\u3073\u51fa\u3057\u3067\u306f\u3001TTL \u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3053\u308c\u3092\u6e21\u3059\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u65e2\u5b9a\u306e TTL \u5024\u304c\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{language:"elixir",code:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend',mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u8aad\u307f\u8fbc\u3080"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u9805\u76ee\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"),(0,r.kt)(i.Z,{language:"elixir",code:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend",mdxType:"SdkExampleCodeBlockImpl"}),(0,r.kt)("h2",{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"},"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples"},"Elixir SDK GitHub repo examples directory"),"\u306b\u5b8c\u5168\u306a\u30b5\u30f3\u30d7\u30eb\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/"},"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}p.isMDXComponent=!0}}]);