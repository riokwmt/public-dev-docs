"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"html","value":"<span class=\'sidebar-title\'>Table of Contents</span>"},{"type":"link","label":"Momento Serverless Cache Service","href":"/","className":"sidebar-item-overview","docId":"intro"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"className":"sidebar-item-walkthrough","items":[{"type":"link","label":"What is Serverless Caching?","href":"/introduction/what-is-serverless-caching","docId":"introduction/what-is-serverless-caching"},{"type":"link","label":"Common Caching Patterns","href":"/introduction/common-caching-patterns","docId":"introduction/common-caching-patterns"},{"type":"link","label":"Common Caching Strategies","href":"/introduction/common-caching-strategies","docId":"introduction/common-caching-strategies"}]},{"type":"link","label":"Getting Started","href":"/getting-started","className":"sidebar-item-getting-started","docId":"getting-started"},{"type":"category","label":"Develop","collapsible":true,"collapsed":true,"className":"sidebar-item-api-reference","items":[{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"className":"sidebar-item-guides","items":[{"type":"link","label":"Caching with AWS Lambda","href":"/develop/guides/caching-with-aws-lambda","docId":"develop/guides/caching-with-aws-lambda"}],"href":"/develop/guides"},{"type":"link","label":"API Reference","href":"/develop/api-reference","docId":"develop/api-reference"}]},{"type":"category","label":"Learn","collapsible":true,"collapsed":true,"className":"sidebar-item-guides","items":[{"type":"category","label":"How it works","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Expiring data with TTL","href":"/learn/how-it-works/expire-data-with-ttl","className":"sidebar-item-develop-ttl","docId":"learn/how-it-works/expire-data-with-ttl"},{"type":"link","label":"Cache eviction vs expiration","href":"/learn/how-it-works/cache-eviction-vs-expiration","docId":"learn/how-it-works/cache-eviction-vs-expiration"}],"href":"/learn/how-it-works/"}]},{"type":"category","label":"Manage","collapsible":true,"collapsed":true,"className":"sidebar-item-limits","items":[{"type":"link","label":"Pricing","href":"/manage/pricing","docId":"manage/pricing"},{"type":"link","label":"Service Limits","href":"/manage/limits","docId":"manage/limits"}]},{"type":"category","label":"Tutorial - Adding a cache to a serverless application","collapsible":true,"collapsed":true,"className":"sidebar-item-walkthrough","items":[{"type":"link","label":"Introduction and setup","href":"/serverless-cache-walkthrough/adding-a-cache-to-serverless","docId":"serverless-cache-walkthrough/adding-a-cache-to-serverless"},{"type":"link","label":"Deploying a basic serverless application","href":"/serverless-cache-walkthrough/deploying-a-basic-serverless-application","docId":"serverless-cache-walkthrough/deploying-a-basic-serverless-application"},{"type":"link","label":"Configuring Momento in Serverless","href":"/serverless-cache-walkthrough/configuring-momento","docId":"serverless-cache-walkthrough/configuring-momento"},{"type":"link","label":"Read-aside caching with Momento","href":"/serverless-cache-walkthrough/read-aside-caching-with-momento","docId":"serverless-cache-walkthrough/read-aside-caching-with-momento"},{"type":"link","label":"Write-aside caching with Momento","href":"/serverless-cache-walkthrough/write-aside-caching-with-momento","docId":"serverless-cache-walkthrough/write-aside-caching-with-momento"}],"href":"/serverless-cache-walkthrough"}]},"docs":{"develop/api-reference":{"id":"develop/api-reference","title":"API Reference","description":"Control APIs","sidebar":"tutorialSidebar"},"develop/guides/caching-with-aws-lambda":{"id":"develop/guides/caching-with-aws-lambda","title":"Caching with AWS Lambda","description":"The release of AWS Lambda in November 2014 kicked off the serverless revolution in software architecture. Lambda\'s event-driven, function-based compute solution changed the nature of how we build applications in the cloud.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started with Momento Serverless Cache Service","description":"Jump in and get started on Momento Serverless Cache with your SDK of choice or CLI.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Momento Serverless Cache Service","description":"Learn what you need to know to speed up your cloud application with the world\'s first serverless cache.","sidebar":"tutorialSidebar"},"introduction/common-caching-patterns":{"id":"introduction/common-caching-patterns","title":"Common Caching Patterns","description":"Learn what serverless is in terms of caching and what Momento Serverless Cache can be your simple, fast cache for your apps.","sidebar":"tutorialSidebar"},"introduction/common-caching-strategies":{"id":"introduction/common-caching-strategies","title":"Common Caching Strategies","description":"Learn what serverless is in terms of caching and what Momento Serverless Cache can be your simple, fast cache for your apps.","sidebar":"tutorialSidebar"},"introduction/what-is-serverless-caching":{"id":"introduction/what-is-serverless-caching","title":"What is Serverless Caching?","description":"Learn what serverless is in terms of caching and what Momento Serverless Cache can be your simple, fast cache for your apps.","sidebar":"tutorialSidebar"},"learn/how-it-works/cache-eviction-vs-expiration":{"id":"learn/how-it-works/cache-eviction-vs-expiration","title":"Cache eviction vs expiration","description":"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache","sidebar":"tutorialSidebar"},"learn/how-it-works/expire-data-with-ttl":{"id":"learn/how-it-works/expire-data-with-ttl","title":"Expiring data with Time to Live (TTL) in Momento Serverless Cache","description":"Learn about expiring data from a cache using Time to Live (TTL) in Momento Serverless Cache","sidebar":"tutorialSidebar"},"learn/how-it-works/index":{"id":"learn/how-it-works/index","title":"How it works | Momento Serverless Cache","description":"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.","sidebar":"tutorialSidebar"},"manage/limits":{"id":"manage/limits","title":"Service Limits for Momento Serverless Cache","description":"Explore Momento Serverless Cache\'s service limits, the default values, and how to get them changed if you need.","sidebar":"tutorialSidebar"},"manage/pricing":{"id":"manage/pricing","title":"Pricing","description":"Explore the simplicity of the pricing model for Momento Serverless Cache","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/adding-a-cache-to-serverless":{"id":"serverless-cache-walkthrough/adding-a-cache-to-serverless","title":"Introduction and setup","description":"In this tutorial, you will learn how to add a cache to your serverless application with AWS Lambda. To do so, you will use Momento Serverless Cache, a cache service built for\u200b\u200b deep integration with serverless applications. Momento Serverless Cache combines instant, elastic, cache storage with a pay-for-value pricing model, and blazing-fast performance.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/configuring-momento":{"id":"serverless-cache-walkthrough/configuring-momento","title":"Configuring Momento in Serverless","description":"In the previous step, we deployed a basic serverless application using AWS Lambda, API Gateway, and DynamoDB. With this, we implemented the basics of account management within our application.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/deploying-a-basic-serverless-application":{"id":"serverless-cache-walkthrough/deploying-a-basic-serverless-application","title":"Deploying a basic serverless application","description":"In this step, we will deploy a basic serverless application on AWS. This service will not use caching yet -- we are going to start with the straightforward implementation of our service first. In the following steps, we will see how to improve performance of our application by adding caching with Momento.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/read-aside-caching-with-momento":{"id":"serverless-cache-walkthrough/read-aside-caching-with-momento","title":"Read-aside caching with Momento","description":"In the previous step, we installed and configured Momento within our serverless application. As part of that, we learned some important details about the Lambda lifecycle that will help with performance, particularly when making external network calls from our application.","sidebar":"tutorialSidebar"},"serverless-cache-walkthrough/write-aside-caching-with-momento":{"id":"serverless-cache-walkthrough/write-aside-caching-with-momento","title":"Write-aside caching with Momento","description":"In the previous step, we added our initial caching implementation by adding read-aside caching to our application. As part of that, we learned about different caching strategies and the factors to consider in choosing a cache strategy.","sidebar":"tutorialSidebar"}}}')}}]);