angular.module('starter')
.controller('Soundboard', function($scope, sounds, storage) {
  console.log('yo');
  $scope.soundbites = ['/sounds/Hang-on-baby-Jesus.mp3', '/sounds/Help-me-Tom-Cruise.mp3', '/sounds/I-Piss-Excellence.mp3'];
  $scope.rickybobby = ['/img/rickybobby1.jpg', 'img/rickybobby2.jpg', '/img/rickybobby3.jpg'];
  
  $scope.playSound = function(i){
    $('audio')[i].play();
  }

});
