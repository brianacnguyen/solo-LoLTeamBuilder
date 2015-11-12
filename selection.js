angular.module('champselection', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {  
    Links.getLinks()
      .then(function(links) {
        $scope.data.links = links;
        console.log(links);
    })
      .catch(function(error){
        console.error(error);
      });
  };
  $scope.getLinks();
  // need to get 


});