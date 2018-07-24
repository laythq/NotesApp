function testInstatiation() {
  var noteListInstance = new NoteList()
  assert.isTrue(noteListInstance instanceof noteList)
};

function testNotesArray() {
  var noteListInstance = new NoteList()
  assert.isTrue(Array.isArray(noteListInstance.notes))
};

function testStoreNotesInArray() {
  var note = new Note();
  var notelist = new NoteList();
  notelist.storeNote(note);
  assert.isTrue(notelist.notes.includes(note))
};

function testReturnNotesInArray() {
  var note = new Note("string")
  var notelist = new NoteList()
  notelist.storeNote(note)
  assert.isTrue(notelist.returnNotes().includes(note))
};

function instantiatesNewNote() {
  var notelist = new NoteList()
  notelist.newNote('string');
  assert.isTrue(notelist.returnNotes()[0].text === 'string')
};

testNotesArray()
testStoreNotesInArray()
testReturnNotesInArray()
instantiatesNewNote()
