(function () {

    angular
        .module("loginApp")
        .controller("homeController", homeController)

    homeController.$inject = ["userService", "$rootScope"];
    function homeController(userService, $rootScope) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];

        function getCurrentUser(id) {
            userService.GetUser(id)
                .then(function (user) {
                    vm.user = user;             
                })      
        }

        function getAllUsers() {
            userService.GetUsers()
                .then(function (users) {
                    vm.allUsers = users
                })
        }

        function deleteUser(id) {
            userService.Delete(id)
                .then(function () {
                    getAllUsers();
                })
        }

        function initController() {
            getCurrentUser($rootScope.globals.currentUser.id);
            getAllUsers();
        }


        initController();
        vm.deleteUser = deleteUser;
        
    }

})();