var app = angular.module('myApp', ['ui.router', 'toastr']);

app.config(function($stateProvider, $urlRouterProvider) {

    //for any unmatched url,redirect to /main
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "app/partials/main.html",
            controller: "MainController",
            controllerAs: "vm"
        })

    .state("main.detail", {
        url: "/detail/:movieId",
        templateUrl: "app/partials/main.detail.html",
        controller: "DetailController",
        controllerAs: "md"
    });

})
