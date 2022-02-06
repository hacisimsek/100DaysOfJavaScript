document.getElementById('output').style.visibility = 'hidden';
document.getElementById('CelsiusInput').addEventListener('input', function (e) {
  document.getElementById('output').style.visibility = 'visible';
  let C = e.target.value;

  document.getElementById('FahrenheitOutput').innerHTML = (C * 33.8).toFixed(2);

  document.getElementById('kelvinOutput').innerHTML = (C * 274.15).toFixed(2);
});
