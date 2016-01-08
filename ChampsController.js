angular.module('app', [])

.controller('ChampsController', function($scope) {
    $scope.data = {};
    $scope.live = {};
    $scope.live.top = "data/images/Top_Placeholder.jpg";
    $scope.live.jungle = "data/images/Jungle_Placeholder.jpg";
    $scope.live.mid = "data/images/Mid_Placeholder.jpg";
    $scope.live.bot = "data/images/Bot_Placeholder.jpg";
    $scope.live.support = "data/images/Support_Placeholder.jpg";
    var positionSort = function(list, position) {
        var results = [];
        for (var i = 0; i < list.length; i++) {
            var currentChamp = list[i];
            if (currentChamp.primaryPosition === position || currentChamp.secondaryPosition === position) {
                results.push(currentChamp);
            }
        }
        return results;
    };
    var dataRefresher = function(list) {
        $scope.data.topChamps = positionSort(list, "Top");
        $scope.data.jungleChamps = positionSort(list, "Jungle");
        $scope.data.midChamps = positionSort(list, "Middle");
        $scope.data.botChamps = positionSort(list, "Bottom");
        $scope.data.supportChamps = positionSort(list, "Support");
    }
    var friendsSort = function(currentImg) {
        var result = false;
        for (var i = 0; i < champs.length; i++) {
            if (champs[i].image === currentImg) {
                result = champs[i].friends;
            }
        }
        return result;
    };
    var populateFriends = function(list) {
        var results = [];
        for (var key in list) {
            for (var i = 0; i < champs.length; i++) {
                if (champs[i].name === key) {
                    results.push(champs[i]);
                }
            }
        }
        return results;
    };
    var removeDuplicates = function(currentImg) {
        var currentPosition;
        for (var key in $scope.live) {
            if ($scope.live[key] === currentImg) {
                currentPosition = key + "Champs";
            }
        }
        console.log(currentPosition);
        for (var k in $scope.data) {
            if (k === currentPosition) {
                continue;
            } else {
                var currentPos = $scope.data[k];
                var copy = JSON.parse(JSON.stringify(currentPos));
                for (var i = 0; i < currentPos.length; i++) {
                    var currentChar = currentPos[i];
                    if (currentChar.image === currentImg) {
                        var index = copy.indexOf(currentChar);
                        copy.splice(index, 1);
                    }
                };
                $scope.data[k] = copy;
            }
        }
    };
    $scope.reset = function() {
        dataRefresher(champs);
        $scope.live.top = "data/images/Top_Placeholder.jpg";
        $scope.live.jungle = "data/images/Jungle_Placeholder.jpg";
        $scope.live.mid = "data/images/Mid_Placeholder.jpg";
        $scope.live.bot = "data/images/Bot_Placeholder.jpg";
        $scope.live.support = "data/images/Support_Placeholder.jpg";
    };
    $scope.reset();
    var allFriends = {};
    $scope.change = function(currentSelection) {
        var currentFriends = friendsSort(currentSelection);
        if (currentFriends) {
            for (var i = 0; i < currentFriends.length; i++) {
                var currentFriend = currentFriends[i];
                allFriends[currentFriend] = true;
            }
        };
        var newFriends = populateFriends(allFriends);
        dataRefresher(newFriends);
        removeDuplicates(currentSelection);
    };
});
