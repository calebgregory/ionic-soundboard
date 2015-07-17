angular.module('storage.factory', [])
.factory('storage', function(){
  return{
    defaultFile : [{
      name : 'test',
      file : './sounds/test.mp3'
    }],
    get files() { return JSON.parse(localStorage.files); },
    set files(f) { localStorage.files = JSON.stringify(f); }
  }
})
