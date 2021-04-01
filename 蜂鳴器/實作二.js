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

boardReady({ device: "GKxMj" }, function (board) {
  board.samplingInterval = 250;
  buzzer = getBuzzer(board, 7);
  buzzer.play(
    buzzer_music([
      { notes: "C4", tempos: "3" },
      { notes: "D4", tempos: "3" },
      { notes: "E4", tempos: "3" },
      { notes: "F4", tempos: "3" },
      { notes: "G4", tempos: "3" }
    ]).notes,
    buzzer_music([
      { notes: "C4", tempos: "4" },
      { notes: "D4", tempos: "3" },
      { notes: "E4", tempos: "3" },
      { notes: "F4", tempos: "3" },
      { notes: "G4", tempos: "3" }
    ]).tempos
  );
});
