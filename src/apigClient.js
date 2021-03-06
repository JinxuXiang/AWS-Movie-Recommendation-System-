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
    
    
    
    apigClient.chatbotPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var chatbotPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/chatbot').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(chatbotPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.chatbotOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var chatbotOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/chatbot').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(chatbotOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.checkfriendGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId1', 'userId2'], ['body']);
        
        var checkfriendGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/checkfriend').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId1', 'userId2']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(checkfriendGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.checkfriendOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var checkfriendOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/checkfriend').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(checkfriendOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
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
    
    
    apigClient.friendPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId1', 'userId2', 'status'], ['body']);
        
        var friendPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/friend').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId1', 'userId2', 'status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(friendPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.friendDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId1', 'userId2'], ['body']);
        
        var friendDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/friend').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId1', 'userId2']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(friendDeleteRequest, authType, additionalParams, config.apiKey);
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
    
    
    apigClient.friendinfoGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);
        
        var friendinfoGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/friendinfo').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(friendinfoGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.friendinfoOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var friendinfoOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/friendinfo').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(friendinfoOptionsRequest, authType, additionalParams, config.apiKey);
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
    
    
    apigClient.randommovieGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['n'], ['body']);
        
        var randommovieGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/randommovie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['n']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(randommovieGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.randommovieOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var randommovieOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/randommovie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(randommovieOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.randomuserGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['n'], ['body']);
        
        var randomuserGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/randomuser').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['n']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(randomuserGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.randomuserOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var randomuserOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/randomuser').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(randomuserOptionsRequest, authType, additionalParams, config.apiKey);
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
    
    
    apigClient.recommendeduserGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userName'], ['body']);
        
        var recommendeduserGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/recommendeduser').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(recommendeduserGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.recommendeduserOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var recommendeduserOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/recommendeduser').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(recommendeduserOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.signinGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userName', 'userPass'], ['body']);
        
        var signinGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/signin').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userName', 'userPass']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(signinGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.signinOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var signinOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/signin').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(signinOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.signupPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userName', 'userPass'], ['body']);
        
        var signupPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/signup').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userName', 'userPass']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(signupPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.signupOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var signupOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/signup').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(signupOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.similarmovieGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['movieId'], ['body']);
        
        var similarmovieGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/similarmovie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(similarmovieGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.similarmovieOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var similarmovieOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/similarmovie').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(similarmovieOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tagGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['movieId'], ['body']);
        
        var tagGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tag').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tagGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tagPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['tag', 'userId', 'movieId'], ['body']);
        
        var tagPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tag').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['tag', 'userId', 'movieId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tagPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tagOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tagOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tag').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tagOptionsRequest, authType, additionalParams, config.apiKey);
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
