var app = angular.module("boxapp",[]);

app.controller("boxcontroller",function($scope){
   const starsTotal = 5;
     boxes =[
     { img : "image/11.jpg",
     Kategori :"  svart T-shirt",
       price : "$50",
       rating : 1.3
    },
    { img : "image/2.jpg",
    Kategori :"mörkgrön T-shirt",
    price : "$10",
    rating : 5
 },
 { img : "image/3.jpg",
 Kategori :"ljus grön T-shirt",
 price : "$20",
 rating : 2.3
},
{ img : "image/4.jpg",
 Kategori :"vit T-shirt",
 price : "$40",
 rating : 1.67
},
{ img : "image/5.jpg",
 Kategori :"jeans jacka",
 price : "$5",
 rating : 3
},
{ img : "image/6.jpg",
 Kategori :"gul T-shirt",
 price : "$9",
 rating : 2.5
},
{ img : "image/7.jpg",
 Kategori :"grå T-shirt",
 price : "$80",
 rating : 4.5
},
{ img : "image/8.jpg",
 Kategori :"blå T-shirt",
 price : "$30",
 rating : 5
},
{ img : "image/9.jpg",
 Kategori :"ljus blå T-shirt",
 price : "$40",
 rating : 2.3
},
{ img : "image/10.jpg",
 Kategori :"Stickad T-shirt",
 price : "$90",
 rating : 3.2
},
{ img : "image/1.jpg",
 Kategori :"gul stickad T-shirt",
 price : "$100",
 rating : 0.9
},
{ img : "image/12.jpg",
 Kategori :"röd stickad T-shirt",
 price : "$15",
 rating : 3.83
}
    ];
  
   
    $scope.boxes=boxes;
    $scope.rating = function(input) {
      return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
  } 
   /* for(var i=0;i<$scope.boxes.length;i++)
    {
       if($scope.boxes[i].rating >0)
       {
           $scope[$scope.boxes[i].product]=[];
           for(var j=0;j< $scope.boxes[i].rating;j++)
           {
              $scope[$scope.boxes[i].product].push({j:''}); 
           }
           $scope.boxes[i].rating = $scope[$scope.boxes[i].product];
       }
    }*/
                  });

