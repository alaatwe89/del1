const express = require('express');
const route = express.Router();
route.get("/", function(req, res, next) {
    res.status(200).json(
        [
         
                { img : "image/11.jpg",
                category :"svart T-shirt",
                  price : "50",
                  quantity: 1,
                  id :1,
                  rating : 1.3
               },
               { img : "image/2.jpg",
               category :"mörkgrön T-shirt",
               price : "10",
               quantity: 1,
               id :2,
               rating : 5
            },
            { img : "image/3.jpg",
            category :"ljus grön T-shirt",
             price : "20",
             quantity: 1,
             id :3,
             rating : 2.3
            },
            { img : "image/4.jpg",
            category :"vit T-shirt",
             price : "40",
             quantity: 1,
             id :4,
             rating : 1.67
            },
            { img : "image/5.jpg",
            category :"jeans jacka",
             price : "5",
             quantity: 1,
             id :5,
             rating : 3
            },
            { img : "image/6.jpg",
            category :"gul T-shirt",
             price : "9",
             quantity: 1,
             id :6,
             rating : 2.5
            },
            { img : "image/7.jpg",
            category :"grå T-shirt",
             price : "80",
             quantity: 1,
             id :7,
             rating : 4.5
            },
            { img : "image/8.jpg",
            category :"blå T-shirt",
             price : "30",
             quantity: 1,
             id :8,
             rating : 5
            },
            { img : "image/9.jpg",
            category :"ljus blå T-shirt",
             price : "40",
             quantity: 1,
             id :9,
             rating : 2.3
            },
            { img : "image/10.jpg",
            category :"Stickad T-shirt",
             price : "90",
             quantity: 1,
             id :10,
             rating : 3.2
            },
            { img : "image/1.jpg",
            category :"gul stickad T-shirt",
             price : "100",
             quantity: 1,
             id :11,
             rating : 0.9
            },
            { img : "image/12.jpg",
            category :"röd stickad T-shirt",
             price : "15",
             quantity: 1,
             id :12,
             rating : 3.83
            }
               
        ]
    );
})

module.exports = route;