(function () {
// STEP 1:
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var length = names.length;
// STEP 10:
for (var i = 0; i < names.length; i++) {
  // STEP 11:
  var firstLetter = names[i].charAt(0).toLowerCase();
  // STEP 12:
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
