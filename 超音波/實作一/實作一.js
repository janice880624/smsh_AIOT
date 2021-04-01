var ultrasonic;

boardReady({device: '你的 device id'}, function (board) {
  board.samplingInterval = 250;
  ultrasonic = getUltrasonic(board, 11, 10);
  ultrasonic.ping(function (cm) {
    document.getElementById('text-show').innerHTML = ultrasonic.distance;
  }, 500);
});