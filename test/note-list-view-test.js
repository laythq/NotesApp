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
  notelist.newNote("Cats")
  notelist.newNote("Dogs")
  var noteListView = new NoteListView(notelist)
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Cats</div></li><li><div>Dogs</div></li></ul>")
};

testInstatiation()
testStoreNotesInArray()
testreturnHTML()
