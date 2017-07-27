//main module
var app = angular.module("MyApp",["ui.router", "ngMaterial", "ngResource"]);

//controllers
app.controller("Index", Index);
//services
app.service("$main",MainService);

//config
app.config(function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/templates/home.html'
        })
        .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
});
