angular.module('app', [])

.controller('ChampsController', function ($scope) {
  $scope.data = {};
  $scope.data.topChamp = null; 
  $scope.data.jungleChamp = null;
  $scope.data.midChamp = null;
  $scope.data.botChamp = null;
  $scope.data.supportChamp = null;
  $scope.data.champs = champs; 
  $scope.data.topSort = function(champ) {
    return champ.primaryPosition === "Top" || champ.secondaryPosition === "Top";
  };
  $scope.data.jungleSort = function(champ) {
    return champ.primaryPosition === "Jungle" || champ.secondaryPosition === "Jungle";
  };
  $scope.data.midSort = function(champ) {
    return champ.primaryPosition === "Middle" || champ.secondaryPosition === "Middle";
  };
  $scope.data.botSort = function(champ) {
    return champ.primaryPosition === "Bottom" || champ.secondaryPosition === "Bottom";
  };
  $scope.data.supportSort = function(champ) {
    return champ.primaryPosition === "Support" || champ.secondaryPosition === "Support";
  };
});