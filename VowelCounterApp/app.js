const setVowelCounter = () => {
  var input = document.getElementById('number1').value;
  var vowelCount = 0;
  for (var i = 0; i < input.length; i++) {
    if (
      input[i] == 'a' ||
      input[i] == 'e' ||
      input[i] == 'i' ||
      input[i] == 'o' ||
      input[i] == 'u' ||
      input[i] == 'ı' ||
      input[i] == 'ö' ||
      input[i] == 'ü'
    ) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
  document.getElementById('result').innerHTML = vowelCount;
};

generate.addEventListener('click', setVowelCounter);
setVowelCounter();
