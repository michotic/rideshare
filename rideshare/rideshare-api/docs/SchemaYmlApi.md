# OpenapiJsClient.SchemaYmlApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schemaYmlRetrieve**](SchemaYmlApi.md#schemaYmlRetrieve) | **GET** /api/schema.yml | 



## schemaYmlRetrieve

> {String: Object} schemaYmlRetrieve(opts)



OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.SchemaYmlApi();
let opts = {
  'format': "format_example", // String | 
  'lang': "lang_example" // String | 
};
apiInstance.schemaYmlRetrieve(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | [optional] 
 **lang** | **String**|  | [optional] 

### Return type

**{String: Object}**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json

