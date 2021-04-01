// 按下時亮燈，放開時關燈(上拉按鈕) <- 貓咪盃
var button;
var led;

boardReady({ device: "你的 device id" }, function (board) {
  board.samplingInterval = 250;
  button = getButton(board, 2);
  led = getLed(board, 10);
  button.on("pressed", function () {
    led.off();
  });
  button.on("released", function () {
    led.on();
  });
});