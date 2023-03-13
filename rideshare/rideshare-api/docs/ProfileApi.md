# OpenapiJsClient.ProfileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profileCreate**](ProfileApi.md#profileCreate) | **POST** /api/profile/ | 
[**profileDestroy**](ProfileApi.md#profileDestroy) | **DELETE** /api/profile/{id}/ | 
[**profileList**](ProfileApi.md#profileList) | **GET** /api/profile/ | 
[**profilePartialUpdate**](ProfileApi.md#profilePartialUpdate) | **PATCH** /api/profile/{id}/ | 
[**profileRetrieve**](ProfileApi.md#profileRetrieve) | **GET** /api/profile/{id}/ | 
[**profileUpdate**](ProfileApi.md#profileUpdate) | **PUT** /api/profile/{id}/ | 



## profileCreate

> Profile profileCreate(profile)



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

let apiInstance = new OpenapiJsClient.ProfileApi();
let profile = new OpenapiJsClient.Profile(); // Profile | 
apiInstance.profileCreate(profile, (error, data, response) => {
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
 **profile** | [**Profile**](Profile.md)|  | 

### Return type

[**Profile**](Profile.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## profileDestroy

> profileDestroy(id)



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

let apiInstance = new OpenapiJsClient.ProfileApi();
let id = 56; // Number | A unique integer value identifying this profile.
apiInstance.profileDestroy(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this profile. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## profileList

> [Profile] profileList()



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

let apiInstance = new OpenapiJsClient.ProfileApi();
apiInstance.profileList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Profile]**](Profile.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profilePartialUpdate

> Profile profilePartialUpdate(id, opts)



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

let apiInstance = new OpenapiJsClient.ProfileApi();
let id = 56; // Number | A unique integer value identifying this profile.
let opts = {
  'patchedProfile': new OpenapiJsClient.PatchedProfile() // PatchedProfile | 
};
apiInstance.profilePartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this profile. | 
 **patchedProfile** | [**PatchedProfile**](PatchedProfile.md)|  | [optional] 

### Return type

[**Profile**](Profile.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## profileRetrieve

> Profile profileRetrieve(id)



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

let apiInstance = new OpenapiJsClient.ProfileApi();
let id = 56; // Number | A unique integer value identifying this profile.
apiInstance.profileRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this profile. | 

### Return type

[**Profile**](Profile.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## profileUpdate

> Profile profileUpdate(id, profile)



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

let apiInstance = new OpenapiJsClient.ProfileApi();
let id = 56; // Number | A unique integer value identifying this profile.
let profile = new OpenapiJsClient.Profile(); // Profile | 
apiInstance.profileUpdate(id, profile, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this profile. | 
 **profile** | [**Profile**](Profile.md)|  | 

### Return type

[**Profile**](Profile.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

