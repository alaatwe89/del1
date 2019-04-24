
    var app = angular.module("boxapp", ["ngRoute","ngCookies"]);

    app.config(function ( $routeProvider){
    
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
        // $rootrootScope.rowLimits = 6;
        $rootScope.rating = function (input) {
            return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
        }
        $rootScope.paginationComponent = "view/pagination.component.html"

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
        //$rootrootScope.rowLimits = 6;


        $rootScope.sortColumn = "category";
        $rootScope.rating = function (input) {
            return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
            $rootScope.paginationComponent = "view/pagination.component.html"


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
                found.box += box.quantity;
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

   





 



