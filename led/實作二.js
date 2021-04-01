// 關燈
var led;

boardReady({ device: "你的 device id" }, function (board) {
  board.samplingInterval = 250;
  led = getLed(board, 10);
  led.off();
});