var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

function checkPalindrome(str) {
  const arrayValues = str.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');
  if (str == reverseString) {
    result.innerHTML = 'It is a palindrome';
  } else {
    result.innerHTML = 'It is not a palindrome';
  }
}

btn.addEventListener('click', function () {
  input = document.getElementById('input').value;
  checkPalindrome(input);
});

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
