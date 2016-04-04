(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = items;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var items = [{
      name: 'Sydney FC 15/16 AFC Champions League Adults Home Jersey',
      description: "New Sydney FC 15/16 AFC Champions League Adults Home Jersey.",
      category: 'T-shirt',
      price: 120,
      color: '#CCC',
      faces: 14,
      images: [
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SFC_ACL_Home_Jersey_FRONT.jpg",
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SFC_ACL_Home_Jersey_FRONT.jpg",
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SFC_ACL_Home_Jersey_SIDE.jpg",
      ],
      reviews: [{
        stars: 5,
        body: "Great Jersey!",
        author: "sam@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "The quality of this Jersey is excellent",
        author: "john@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Sydney FC 15/16 Puma Adults Home Jersey',
      description: "100% Authentic Players Polyester Pique Jersey.",
      category: 'T-shirt',
      price: 110,
      color: '#CCC',
      faces: 14,
      images: [
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SFC_Home_Jersey_FRONT.jpeg",
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SFC_Home_Jersey_SIDE-1.jpeg",
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SFC_Home_Jersey_SIDE-2.jpeg",
      ],
      reviews: [{
        stars: 3,
        body: "Great colour, Looking forward to the Season!",
        author: "joe@black.org",
        createdOn: 1397490980837
      }, {
        stars: 3,
        body: "Preferred last season's jerysey.",
        author: "christ@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Sydney FC Jacquard Scarf - The Sky Blues',
      description: "100% Authentic Wool Sydney FC Scarf.",
      category: 'Scarf',
      price: 30,
      color: '#CCC',
      faces: 14,
      images: [
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SydFC-scarf-FRONT.jpg",
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SydFC-scarf-SIDE-1.jpg",
        "http://test.sfcu.com.au/wp-content/uploads/2016/04/SydFC-scarf-SIDE-2.jpg",
      ],
      reviews: [{
        stars: 4,
        body: "Good Quality Scarf.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 3,
        body: "Design.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();