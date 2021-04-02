var dht;


boardReady({device: '你的 device id'}, function (board) {
  board.samplingInterval = 250;
  dht = getDht(board, 11);
  dht.read(function(evt){
    document.getElementById('text-show').innerHTML = (['溫度:',dht.temperature,' ℃',("<br/>"),'濕度:',dht.humidity,' %'].join(''));
  }, 1000);
});