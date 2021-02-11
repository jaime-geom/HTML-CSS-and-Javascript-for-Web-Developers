// STEP 3:
var helloSpeaker = {};
// STEP 4
// STEP 5
(function () { 
    var speakWord = "Hello";    
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }   
})();
