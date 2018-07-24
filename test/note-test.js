
function testNewNoteIsNote() {
  var note = new Note()
  assert.isTrue(note instanceof Note);
};

function testNoteUponInstantiation() {
  var note = new Note("string")
  assert.isTrue(note.text === "string")
}

function testReturnsText() {
  var note = new Note("string")
  assert.isTrue(note.getText() === "string")
}

testNewNoteIsNote()
testNoteUponInstantiation()
testReturnsText()
