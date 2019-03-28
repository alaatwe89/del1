var app = angular.module("boxapp",[]);
app.controller("boxcontroller",function($scope){
     boxes =[
     { img : "image/aa.jpg",
       title :"Helix Stereo Colorful T-shirt",
       price : "$50000",
       rating : 5
    },
    { img : "image/aa.jpg",
    title :"Helix Stereo Colorful T-shirt",
    price : "$50000",
    rating : 5
 },
 { img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
},
{ img : "image/aa.jpg",
 title :"Helix Stereo Colorful T-shirt",
 price : "$50000",
 rating : 5
}
    ];
  
   
    $scope.boxes=boxes;
    for(var i=0;i<$scope.boxes.length;i++)
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
    }
                  });

