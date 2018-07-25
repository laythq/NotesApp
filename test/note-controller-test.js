// create mock Document
function MockDocument (){
  this.innerHTML = 'asd ad'
  this.mock = 0

}

// create mock methods for mock Document
MockDocument.prototype.getElementById = function() {
  this.mock = new MockDocument()
  return this.mock
}

function testInsertHTML () {
  notelist = new NoteList()
  notelist.newNote("Testing is Kool with Kees")
  noteController = new NoteController(notelist)
  mockDocument = new MockDocument()
  // pass mock Document in instead of actual HTML document
  noteController.insertHTML(mockDocument)
  // now test is isolated from html document, #getElementById, and #innerHTML dependencies
  assert.isTrue(mockDocument.mock.innerHTML === '<ul><li><div><a href="#notes/0">Testing is Kool with</a></div></li></ul>')
}

function testreturnNote() {
  notelist = new NoteList()
  notelist.newNote("Testing is Kool with Kees")
  noteController = new NoteController(notelist)
  // mockDocument = new MockDocument()
  assert.isTrue(noteController.returnNote(0).object === "Testing is Kool with Kees")
}




testInsertHTML()
testreturnNote()
