angular.module("JWTDemoApp").config(function ($httpProvider) {
	$httpProvider.interceptors.push("timestampInterceptor");
	$httpProvider.interceptors.push("loadingInterceptor");
});