var ionicApp = angular.module('starter', ['ionic']);

ionicApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

ionicApp.controller("ExampleController", function($scope) {

    $scope.images = [];

    $scope.loadImages = function() {
        for(var i = 0; i < 4; i++) {
            $scope.images.push({id: i, src: "http://assets03.dappei.com/uploads/brand/image/4123/small_876caaf2d1731e2a.jpg"});
            $scope.images.push({id: i, src: "http://cf.mp-cdn.net/37/1a/7056657a120d473a051831e0a8ac-sometimes-yes-sometimes-no.png"});
            $scope.images.push({id: i, src: "http://www.minoguesbeverage.com/wp-content/uploads/2013/10/Hobgoblin-100x100.jpg"});
            $scope.images.push({id: i, src: "http://www.minoguesbeverage.com/wp-content/uploads/2015/01/download-100x100.jpg"});
            $scope.images.push({id: i, src: "http://www.bateibeer.com/wp-content/uploads/2013/12/mesmerizing-dining-room-vintage-glass-top-42-inch-round-dining-table-sets-with-couple-glass-and-single-beer-bottle-image-100x100.jpg"});
        }
    }

});
