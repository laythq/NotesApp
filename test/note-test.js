
function testNewNoteIsNote() {
  var note = new Note();
  assert.isTrue(note instanceof Note);
}

function testSavesID() {
  var note = new Note(2);
  assert.isTrue(note.id === 2);
}

function testNoteUponInstantiation() {
  var note = new Note(0, "string");
  assert.isTrue(note.text === "string");
}

function testReturnsText() {
  var note = new Note(0, "string");
  assert.isTrue(note.getText() === "string");
}

testNewNoteIsNote();
testNoteUponInstantiation();
testReturnsText();
testSavesID();
