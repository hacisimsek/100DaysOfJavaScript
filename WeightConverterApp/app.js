document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function (e) {
  document.getElementById('output').style.visibility = 'visible';
  let kg = e.target.value;

  document.getElementById('poundsOutput').innerHTML = (kg * 2.20462262185).toFixed(7);

  document.getElementById('ozOutput').innerHTML = (kg * 35.2739619495).toFixed(7);
});
