function testInstatiation() {
  var noteListViewInstance = new NoteListView()
  assert.isTrue(noteListViewInstance instanceof NoteListView)
};

function testStoreNotesInArray() {
  var notelist = new NoteList()
  var noteListView = new NoteListView(notelist)
  assert.isTrue(noteListView.note === notelist)
};

function testreturnHTML() {
  var notelist = new NoteList()
  notelist.newNote("twentycharactersasdxdsasretcarahcytnewt")
  notelist.newNote("twentycharactersasdxdsasretcarahcytnewt")
  var noteListView = new NoteListView(notelist)
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div><a href="#notes/0">twentycharactersasdx</a></div></li><li><div><a href="#notes/1">twentycharactersasdx</a></div></li></ul>')
};

function testreturnFullNote() {
  var notelist = new NoteList()
  notelist.newNote("12345")
  var noteListView = new NoteListView(notelist)
  assert.isTrue(noteListView.returnFullNote(0) === "12345")
}

function testNewNote() {
  var notelist = new NoteList()
  noteListView = new NoteListView(notelist)
  noteListView.newNote("678910")
  assert.isTrue(noteListView.returnFullNote(0) === "678910")
}

testInstatiation()
testStoreNotesInArray()
testreturnHTML()
testreturnFullNote()
testNewNote()
