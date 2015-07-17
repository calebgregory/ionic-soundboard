angular.module('sound.factory', [])
.factory('sounds', function(){
  return JSON.stringify([
    {
      name : 'Hang on, baby Jesus',
      file : './sounds/Hang-on-baby-Jesus.mp3',
      img: './img/rickybobby1.jpg'
    },
    {
      name : 'Help me, Tom Cruise!',
      file : './sounds/Help-me-Tom-Cruise%20.mp3',
      img: './img/rickybobby2.jpg'
    },
    {
      name : 'I piss excellence',
      file : './sounds/I-Piss-Excellence.mp3',
      img: './img/rickybobby3.jpg'
    }
  ]);
})
