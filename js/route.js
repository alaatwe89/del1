app.config(function($routeProvider) {
    $routeProvider
    .when("/box", { 
        templateUrl: "view/box.html",
        controller: "boxController" 
    })

    .when("/list", { 
        templateUrl: "view/list.html",
        controller: "listController" 
    })
})
