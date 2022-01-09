const setClickToCopy = () => {
  var copyText = document.getElementById('number1');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert('Copied the text: ' + copyText.value);
};
generate.addEventListener('click', setClickToCopy);
setClickToCopy();
