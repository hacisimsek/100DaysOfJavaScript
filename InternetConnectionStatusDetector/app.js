var ifConnected = window.navigator.onLine;
if (ifConnected) {
  document.getElementById('checkOnline').innerHTML = 'Online';
  document.getElementById('checkOnline').style.color = 'green';
} else {
  document.getElementById('checkOnline').innerHTML = 'Offline';
  document.getElementById('checkOnline').style.color = 'red';
}

setInterval(function () {
  var ifConnected = window.navigator.onLine;
  if (ifConnected) {
    document.getElementById('checkOnline').innerHTML = 'Online';
    document.getElementById('checkOnline').style.color = 'green';
  } else {
    document.getElementById('checkOnline').innerHTML = 'Offline';
    document.getElementById('checkOnline').style.color = 'red';
  }
}, 3000);
