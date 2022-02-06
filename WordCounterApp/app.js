function countWords() {
  var text = document.getElementById('inputField').value;
  var numWords = 0;
  for (var i = 0; i < text.length; i++) {
    var currentCharacter = text[i];
    if (currentCharacter == ' ') {
      numWords += 1;
    }
  }
  numWords += 1;
  document.getElementById('show').innerHTML = numWords;
}