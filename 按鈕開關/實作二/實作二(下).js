// 按下時亮燈，放開時關燈(下拉按鈕)
var button;
var led;

boardReady({ device: "你的 device id" }, function (board) {
  board.samplingInterval = 250;
  button = getButton(board, 2);
  led = getLed(board, 10);
  button.on("pressed", function () {
    led.on();
  });
  button.on("released", function () {
    led.off();
  });
});