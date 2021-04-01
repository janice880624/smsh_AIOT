var rgbled;

boardReady({ device: "你的 device id" }, function (board) {
  board.samplingInterval = 250;
  rgbled = getRGBLedCathode(board, 5, 6, 3);
  document.getElementById("btn1").addEventListener("click", function () {
    rgbled.setColor("#FFD700");
  });
  document.getElementById("btn2").addEventListener("click", function () {
    rgbled.setColor("#BF3EFF");
  });
  document.getElementById("btn3").addEventListener("click", function () {
    rgbled.setColor("#ff0000");
  });
  document.getElementById("btn4").addEventListener("click", function () {
    rgbled.setColor("#1E90FF");
  });
});