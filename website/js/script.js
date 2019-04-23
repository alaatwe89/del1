var app = angular.module("boxapp", ["ngRoute", "ngCookies"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "view/box.html",
            controller: "boxController"

        })

        .when("/box", {
            templateUrl: "view/box.html",
            controller: "boxController"

        })

        .when("/list", {
            templateUrl: "view/list.html",
            controller: "listController"
        })

        .when("/login", {
            templateUrl: "view/login.html",
            controller: "loginController",
            controllerAs: "vm"
        })

        .when("/register", {
            templateUrl: "view/register.html",
            controller: "registerController",
            controllerAs: "vm"
        })

        .otherwise({ redirectTo: "/" })
});


app.controller("boxController", function ($rootScope, $http) {
    $http.get("http://localhost:8888/api/boxes").then(function (res) {
        $rootScope.boxes = res.data;
        console.log($rootScope.boxes);
    })

    const starsTotal = 5;
    $rootScope.pagetitle = "box";



    $rootScope.sortColumn = "category";
    // $rootScope.rowLimits = 6;
    $rootScope.rating = function (input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }

    var getProductId = function (boxes, id) {
        return _.find(boxes, function (box) {
            return box.id === id
        });
    };

    $rootScope.cart = [];
    $rootScope.emptycart = "";


    $rootScope.addItem = function (box) {
        var found = getProductId($rootScope.cart, box.id);

        if (found) {
            box.quantity += box.quantity;
        }
        else {
            $rootScope.cart.push(angular.copy(box));
        }
    }

    $rootScope.removeItem = function (box) {
        var index = $rootScope.cart.indexOf(box);
        $rootScope.cart.splice(index, 1);
    }

    $rootScope.getProductCost = function (box) {
        return box.quantity * box.price;
    }

    $rootScope.getProductQuantity = function (box) {
        return box.quantity;
    }

    $rootScope.getTotal = function () {
        var total = _.reduce($rootScope.cart, function (sum, box) {
            return sum + $rootScope.getProductCost(box);
        }, 0);

        if ($rootScope.cart.length === 0) {
            $rootScope.emptycart = "Your cart is empty."
        }
        else {
            $rootScope.emptycart = ""
        }
        return total;
    }

    $rootScope.getQuantity = function () {
        var quantity = _.reduce($rootScope.cart, function (sum, box) {
            return sum + $rootScope.getProductQuantity(box);
        }, 0);

        if (quantity === 0) {
            $rootScope.badgeColor = "badge-secondary"
        } else {
            $rootScope.badgeColor = "badge-danger"
        }


        return quantity;
    }




})

app.controller("listController", function ($rootScope, $http) {
    $http.get("http://localhost:8888/api/boxes").then(function (res) {
        $rootScope.boxes = res.data;

    })


    const starsTotal = 5;
    $rootScope.pagetitle = "list";
    //$rootScope.rowLimits = 6;


    $rootScope.sortColumn = "category";
    $rootScope.rating = function (input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }
})

app.controller("loginController", function ($rootScope, $location, authService, dialogService) {
    var vm = this;

    function login() {
        vm.dataLoading = true;

        authService.Login(vm.email, vm.password)
            .then(function (res) {
                if (res.success) {
                    authService.SetCredentials(res.id, res.token);
                    $location.path("/");
                } else {
                    dialogService.Error(res.message);
                    vm.dataLoading = false;
                }
            })
    }

    (function initController() {
        authService.ClearCredentials();
    })();

    vm.login = login;

})


app.controller("registerController", function (userService, $location, dialogService) {

    var vm = this;

    vm.register = function () {
        vm.dataLoading = true;
        userService.Create(vm.user)
            .then(function (res) {
                if (res.success) {
                    dialogService.Success("Registration was successful", true);
                    $location.path("/");
                } else {
                    dialogService.Error(res.message);
                    vm.dataLoading = false;
                }
            })
    }

})

