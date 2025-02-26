angular.module('acadApp', ['ngRoute', 'ui.bootstrap', 'ngResource'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'html/main.html'
    })
    .when('/marimo', {
      templateUrl:'html/marimo.html'
    })
    .when('/pubs', {
      controller:'PubsCtrl',
      templateUrl:'html/pubs.html'
    })
    .when('/bio', {
      templateUrl:'html/bio.html'
    })
    .when('/more', {
      templateUrl:'html/more.html'
    })
    .when('/teaching', {
        controller: 'TeachCtrl',
      templateUrl:'html/teaching.html'
    })
    .when('/talks', {
      templateUrl:'html/talks.html'
    })
    .otherwise({
      redirectTo:'html/main.html'
    })

  $locationProvider.html5Mode(false);
  $locationProvider.hashPrefix('');

})
.controller('mainCtrl', ['$scope', '$location', '$uibModal', function($scope, $location, $uibModal) {
  var updateButton = function() {
    $scope.button = $location.url();
  };

  $scope.navbarCollapsed = true;

  $scope.$on('$routeChangeStart', updateButton);

  $scope.open_pic = function(pic_location) {
    var modalInstance = $uibModal.open({
      animation: false,
      templateUrl: 'html/picmodal.html',
      controller: 'PicModalCtrl',
      size: 'lg',
      resolve: {
        pic_location: function () {
          return pic_location
        }
      },
      windowClass: 'pic-modal',
      backdropClass: 'pic-modal-back'
    }).result.then(function(){}, function(res){});
  }
}])
.filter('floor', function() {
  return function(input) {
    return Math.floor(input);
  };
});
