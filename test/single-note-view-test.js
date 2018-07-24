function testInstatiation() {
  var singleNoteView = new SingleNoteView();
  assert.isTrue(singleNoteView instanceof SingleNoteView);
}

function testReturnsHTML() {
  var note = new Note("Testing is the best");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnHTML() === "<div>Testing is the best</div>");
}

testInstatiation();
testReturnsHTML();
