(function () {
    angular
        .module("loginApp", ["ngRoute", "ngCookies"])
        .config(config)
        .run(run);

    config.$inject = ["$routeProvider", "$locationProvider"];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                controller: "homeController",
                templateUrl: "partials/home/home.view.html",
                controllerAs: "vm"
            })
            .when("/login", {
                controller: "loginController",
                templateUrl: "partials/login/login.view.html",
                controllerAs: "vm"                
            })
            .when("/register", {
                controller: "registerController",
                templateUrl: "partials/register/register.view.html",
                controllerAs: "vm"                
            })
            .otherwise({ redirectTo: "/login" });            
    }

    run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
    function run($rootScope, $location, $cookies, $http) {

        $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = 'Bearer ' +  $rootScope.globals.currentUser.token;
           
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
            
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
            }
        })
    }
})();