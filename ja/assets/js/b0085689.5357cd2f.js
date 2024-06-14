"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6849],{8766:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=o(4848),t=o(8453);const a={sidebar_position:13,sidebar_label:"Terraform",title:"Use Terraform to Create Momento Caches",description:"Integrate Momento into your Terraform projects",pagination_next:null},s="Manage Momento Caches with Terraform",i={id:"cache/develop/integrations/terraform",title:"Use Terraform to Create Momento Caches",description:"Integrate Momento into your Terraform projects",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/terraform.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/terraform",permalink:"/ja/cache/develop/integrations/terraform",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/terraform.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Terraform",title:"Use Terraform to Create Momento Caches",description:"Integrate Momento into your Terraform projects",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Drupal",permalink:"/ja/cache/develop/integrations/drupal-integration"}},c={},m=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Example Terraform Project",id:"example-terraform-project",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"manage-momento-caches-with-terraform",children:"Manage Momento Caches with Terraform"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.terraform.io/",children:"Terraform"}),"\u306f\u3001\u30a4\u30f3\u30d5\u30e9\u3092\u5b89\u5168\u304b\u3064\u52b9\u7387\u7684\u306b\u69cb\u7bc9\u3001\u5909\u66f4\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3059\u308b\u305f\u3081\u306eInfrastructure-as-Code\u30c4\u30fc\u30eb\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://registry.terraform.io/providers/momentohq/momento/latest",children:"Momento Terraform Provider"}),"\u3092\u4f7f\u3046\u3068\u3001Terraform\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u30fb\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.p,{children:'\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001"example "\u3068\u3044\u3046\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u30fb\u524a\u9664\u3059\u308b\u57fa\u672c\u7684\u306aTerraform\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8aac\u660e\u3057\u307e\u3059\u3002'}),"\n",(0,n.jsx)(r.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/install",children:"Terraform"}),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://console.gomomento.com",children:"Momento Console"}),"\u3067\u4f5c\u6210\u3067\u304d\u308bMomento API\u30ad\u30fc"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example-terraform-project",children:"Example Terraform Project"}),"\n",(0,n.jsxs)(r.p,{children:["\u4ee5\u4e0b\u306e\u5185\u5bb9\u3067",(0,n.jsx)(r.code,{children:"main.tf"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-hcl",children:'terraform {\n  required_providers {\n    momento = {\n      source = "momentohq/momento"\n    }\n  }\n}\n\nprovider "momento" {}\n\nresource "momento_cache" "example" {\n  name = "example"\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Momento\u306eAPI\u30ad\u30fc\u3092\u63d0\u4f9b\u3059\u308b\u306b\u306f\u3001",(0,n.jsx)(r.code,{children:"provider"}),"\u30d6\u30ed\u30c3\u30af\u306b\u6b21\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3057\u307e\u3059\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-hcl",children:'provider "momento" {\n  api_key = "your-api-key"\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u3042\u308b\u3044\u306f\u3001\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'export MOMENTO_API_KEY="your-api-key"\n'})}),"\n",(0,n.jsx)(r.p,{children:'\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001"example "\u3068\u3044\u3046\u540d\u524d\u306eMomento Cache\u3092\u4f5c\u6210\u3057\u3001\u524a\u9664\u3057\u307e\u3059\uff1a'}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# Terraform\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089Momento\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\n\nterraform init\n\n# \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\nterraform apply\n\n# \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u524a\u9664\nterraform destroy\n"})})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>i});var n=o(6540);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);