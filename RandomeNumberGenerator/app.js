const setRandomNumber = () => {
  var max = document.getElementById('number1').value;
  let maxX = Number(max);
  const randomeNumber = Math.floor(Math.random() * maxX);
  return (result.innerHTML = randomeNumber);
};

generate.addEventListener('click', setRandomNumber);
setRandomNumber();
