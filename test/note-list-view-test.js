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
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>twentycharactersasdx</div></li><li><div>twentycharactersasdx</div></li></ul>")
};

testInstatiation()
testStoreNotesInArray()
testreturnHTML()
