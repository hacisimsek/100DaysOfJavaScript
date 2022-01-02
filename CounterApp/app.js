// UI 함수
var drawCounter = function () {
  document.getElementById('counter').innerHTML = store.counter;
};

var bindEvents = function () {
  document.getElementById('increase').addEventListener('click', function () {
    increase();
    drawCounter();
  });
  document.getElementById('decrease').addEventListener('click', function () {
    decrease();
    drawCounter();
  });
};

var store = {
  counter: 0,
};

var increase = function () {
  store.counter++;
};

var decrease = function () {
  store.counter--;
};

// 앱 실행 함수
var init = function () {
  bindEvents();
  drawCounter();
};

init();
