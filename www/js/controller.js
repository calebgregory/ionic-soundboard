angular.module('starter')
.controller('Soundboard', function($scope, sounds, storage) {

  $scope.soundbites = JSON.parse(sounds);

  $scope.playSound = function(i){
    $('audio')[i].play();
  }

});
