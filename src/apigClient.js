/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://p5l6ze5hjc.execute-api.us-east-1.amazonaws.com/v1';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.checkwatchinglistGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'movieId'], ['body']);
        
        var checkwatchinglistGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/checkwatchinglist').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId', 'movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(checkwatchinglistGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.checkwatchinglistOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var checkwatchinglistOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/checkwatchinglist').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(checkwatchinglistOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.friendGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var friendGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/friend').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(friendGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.friendOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var friendOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/friend').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(friendOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.movieGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['movieId'], ['body']);
        
        var movieGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/movie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(movieGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.movieOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var movieOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/movie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(movieOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.ratingGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'movieId'], ['body']);
        
        var ratingGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/rating').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId', 'movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(ratingGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.ratingPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'movieId', 'rating'], ['body']);
        
        var ratingPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/rating').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId', 'movieId', 'rating']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(ratingPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.ratingOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var ratingOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/rating').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(ratingOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.recommendedmovieGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userName'], ['body']);
        
        var recommendedmovieGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/recommendedmovie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(recommendedmovieGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.recommendedmovieOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var recommendedmovieOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/recommendedmovie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(recommendedmovieOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.useridGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userName'], ['body']);
        
        var useridGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/userid').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(useridGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.useridOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var useridOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/userid').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(useridOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinghistoryGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var watchinghistoryGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinghistory').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinghistoryGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinghistoryPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'movieId'], ['body']);
        
        var watchinghistoryPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinghistory').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId', 'movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinghistoryPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinghistoryOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var watchinghistoryOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinghistory').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinghistoryOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinglistGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var watchinglistGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinglist').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinglistGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinglistPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'movieId'], ['body']);
        
        var watchinglistPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinglist').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId', 'movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinglistPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinglistDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId', 'movieId'], ['body']);
        
        var watchinglistDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinglist').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId', 'movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinglistDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.watchinglistOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var watchinglistOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/watchinglist').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(watchinglistOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
