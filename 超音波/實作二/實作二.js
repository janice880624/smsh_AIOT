var ultrasonic;
var buzzer;

function buzzer_music(m) {
  var musicNotes = {};
  musicNotes.notes = [];
  musicNotes.tempos = [];
  if (m[0].notes.length > 1) {
    for (var i = 0; i < m.length; i++) {
      if (Array.isArray(m[i].notes)) {
        var cn = musicNotes.notes.concat(m[i].notes);
        musicNotes.notes = cn;
      } else {
        musicNotes.notes.push(m[i].notes);
      }
      if (Array.isArray(m[i].tempos)) {
        var ct = musicNotes.tempos.concat(m[i].tempos);
        musicNotes.tempos = ct;
      } else {
        musicNotes.tempos.push(m[i].tempos);
      }
    }
  } else {
    musicNotes.notes = [m[0].notes];
    musicNotes.tempos = [m[0].tempos];
  }
  return musicNotes;
}


boardReady({device: '你的 device id'}, function (board) {
  board.samplingInterval = 250;
  ultrasonic = getUltrasonic(board, 11, 10);
  buzzer = getBuzzer(board, 9);
  ultrasonic.ping(function (cm) {
    if (ultrasonic.distance < 20) {
      buzzer.play(buzzer_music([{ notes: 'C4', tempos: '3' }]).notes ,buzzer_music([{ notes: 'C4', tempos: '3' }]).tempos );
    }
  }, 500);
});