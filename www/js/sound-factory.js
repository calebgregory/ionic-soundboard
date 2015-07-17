angular.module('sound.factory', [])
.factory('sounds', function(){
  return JSON.stringify([
    {
      name : 'Hang on, baby Jesus',
      file : './sounds/Hang-on-baby-Jesus.mp3'
    },
    {
      name : 'Help me, Tom Cruise!',
      file : './sounds/Help-me-Tom-Cruise .mp3'
    },
    {
      name : 'I piss excellence',
      file : './sounds/I-Piss-Excellence.mp3'
    }
  ]);
})
