app.controller("boxController", function($scope) {
    const starsTotal = 5;
   $scope.pagetitle = "box";
  
    
      $scope.boxes=boxes;
      $scope.sortColumn = "img";
       $scope.rating = function(input) {
         return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
     } 
     
})

.controller("listController", function($scope) {
    const starsTotal = 5;
    $scope.pagetitle = "list";
    
           $scope.boxes=boxes;
          $scope.sortColumn = "price";
           $scope.rating = function(input) {
             return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
         } 
         
 
})