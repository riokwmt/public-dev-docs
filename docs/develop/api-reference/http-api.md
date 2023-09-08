---
sidebar_position: 7
title: HTTP API
sidebar_label: HTTP API
description: Discover the HTTP API for edge computing services to access serverless caching and pub/sub services.
---

# HTTP API Reference

<img src="/img/http-api.jpg" width="90%" alt="a picture of abstract shapes as building and nodes of data connecting them at high speed" />

Momento provides an HTTP API interface for your applications that can’t use our [SDKs](/develop) or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like [Cloudflare Workers](https://workers.cloudflare.com/), [Fastly Compute@Edge](https://www.fastly.com/products/edge-compute), etm. this API is for you. Be aware that most other applications should likely use [Momento’s SDK clients](/develop).

You can also view the Open API Specification in our [public workspace in Postman](https://www.postman.com/gomomento/workspace/http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation).

:::note

This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use.

:::

## Authentication

For each connection, you will need a Momento auth token generated via the [Momento console](https://console.gomomento.com/tokens) or a [token "vending machine" microservice you host](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine). Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources. 

## Regions

To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache.

|   | AWS Region     | Endpoints                                                    |
|---|----------------|--------------------------------------------------------------|
| 1 | us-west-2      | https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com    |
| 2 | us-east-1      | https://api.cache.cell-us-east-1-1.prod.a.momentohq.com      |
| 3 | ap-northeast-1 | https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com |
| 4 | eu-west-1      | https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com    |
| 5 | ap-south-1     | https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com   |


If you do not see a Region you require, let’s discuss. Please contact [Support](mailto:support@momentohq.com).

## Cache

### Get Value

Gets a scalar value from a cache.

#### Request

- Path: /cache/{cacheName}
- HTTP Method: GET

##### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | The name of the cache to operate on. |

##### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description                                                                                           |
|---------------------|-----------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string                         | The key to retrieve from the cache.                                                                   |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | The key to retrieve from the cache.                                                                   |
| token               | no***     | URL-safe string                              | The Momento auth token, in string format, to be used for authentication/authorization of the request. |

** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key.

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

##### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. |

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

#### Responses

##### Hit

*Status Code: 200 OK*

- Content-Type: octet-stream
- Body: The binary value stored at the specified key.

##### Miss

*Status Code: 404 Not Found*

- "Key Not Found" indicates that the key was not present in the cache, while "Cache Not Found" indicates that the specified cache does not exist.

##### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the body of the message for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the body of the message for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

### Set Value

Sets a scalar value in a cache.

#### Request

- Path: /cache/{cacheName}
- HTTP Method: PUT

##### Body

- Content-Type: octet-stream
- The body of the request should contain the binary value to be stored in the cache at the specified key.

##### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | The name of the cache to operate on. |

##### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description                                                                                                                                |
|---------------------|-----------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string                         | The key to retrieve from the cache.                                                                                                        |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | The key to retrieve from the cache.                                                                                                        |
| token               | no***     | URL-safe&nbsp;string                         | The Momento auth token, in string format, to be used for authentication/authorization of the request.                                      |
| ttl_seconds         | yes       | Integer                                      | The TTL to be set on the key, in seconds. For more on TTL, see  [Expire Data with Time-to-Live](/learn/how-it-works/expire-data-with-ttl). |

** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key.

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

##### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. |

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

#### Responses

##### Ok

*Status Code: 204 No Content*

- The key-value pair was stored in the cache, but no content was returned (by design).

##### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

### Delete Value

Deletes a scalar value from a cache.

#### Request

- Path: /cache/{cacheName}
- HTTP Method: DELETE

##### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | The name of the cache to operate on. |

##### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description                                                                                           |
|---------------------|-----------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string                         | The key to retrieve from the cache.                                                                   |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | The key to retrieve from the cache.                                                                   |
| token               | no***     | URL-safe&nbsp;string                         | The Momento auth token, in string format, to be used for authentication/authorization of the request. |

** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key.

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

##### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. |

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

#### Responses

##### Ok

*Status Code: 204 No Content*

- The key-value pair was stored in the cache, but no content was returned (by design).

##### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details. 

*Status Code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Topics

### Publish

Publishes a message to a topic.

#### Request

- Path: /topics/{cacheName}/{topicName}
- HTTP Method: POST

##### Body

- Content-Type: octet-stream
- The body of the request should contain the binary value to be published to the topic.

##### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | The name of the cache containing the topic. |
| topicName           | yes       | URL-safe string | Name of the topic to publish to.            |

##### Query Parameters

| Parameter&nbsp;name | Required? | Type                | Description                                                                                         |
|---------------------|-----------|---------------------|-----------------------------------------------------------------------------------------------------|
| token               | no**     | URL-safe&nbsp;string | The Momento auth token, in string format, to be used for authentication/authorization of the request.|

*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

##### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no**     | URL-safe&nbsp;string | The Momento auth token, in string format, is used for authentication/authorization of the request. |

** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header.

#### Responses

#### Success

*Status Code: 204 No Content*

- The message was successfully published to the provided topic

##### Error

*Status Code: 400 Bad Request*
- This error type typically indicates that the request was incorrectly specified. See the message body for further details.

*Status Code: 401 Unauthorized*
- This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.

*Status Code: 403 Forbidden*
- This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.

*Status Code: 404 Not Found*
- “Cache Not Found” indicates that the specified cache does not exist.

*Status Code: 429 Too Many Requests*
- This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.

*Status Code: 500 Internal Server Error*
- This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.

## Examples

### Cache

#### Put

Below is an example of a curl command that sets an item with a key of *example_key* and value of *example value* in the *default-cache* cache in the *ap-south-1* region:

URL-safe Key, token provided in query parameter:

`curl -X PUT -d 'example value' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>"`

Base64 Key, token as *Authorization* header:
`curl -X PUT -H "Authorization: <token>" -d 'example value' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"`

#### Get

Below is an example of a curl command that gets an item with a key of *example_key* in the *default-cache* cache in the *eu-west-1* region:

URL-safe key, token provided in query parameter

`curl "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"`

Base64 Key, token provided as *Authorization* header:

`curl -H "Authorization: <token>" "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`

#### Delete

Below is an example of a curl command that deletes an item with a key of *example_key* in the *default-cache* cache in the *us-west-2* region:

URL-safe key, token provided in query parameter:

`curl -X DELETE "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"`

Base64 Key, token provided as *Authorization* header:

`curl -X DELETE -H "Authorization: <token>" "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`

### Topics

#### Publish

Below is an example that publishes the value `hello world!` to the *example* topic in the *my-cache* cache in the *us-east-1* region.

Token provided in query parameter:

`curl -X POST -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>"`

Token provided as *Authorization* header:

`curl -X POST -H "Authorization: <token>" -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"`