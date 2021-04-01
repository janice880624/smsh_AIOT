// 上拉按鈕 <- 貓咪盃
var button;

boardReady({ device: "你的 device id" }, function (board) {
  board.samplingInterval = 250;
  button = getButton(board, 2);
  button.on("pressed", function () {
    document.getElementById("text-show").innerHTML = "放開";
  });
  button.on("released", function () {
    document.getElementById("text-show").innerHTML = "按下";
  });
});