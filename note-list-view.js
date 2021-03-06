(function(exports) {
  function NoteListView(noteList) {
    this.note = noteList
  }

  NoteListView.prototype.returnHTML = function() {
    notes = this.note.notes
    arrayLength = notes.length
    array = []
    var i;

    for (var i = 0; i < arrayLength; i++) {
      array.push('<li><div><a href="#notes/' + notes[i].id + '">' + notes[i].text.substring(0,20) + '</a></div></li>')
    }

    return "<ul>" + array.join("") + '</ul> <a href="#notes"'
  }

NoteListView.prototype.returnFullNote = function(number) {
  return this.note.notes[number].text

}

NoteListView.prototype.newNote = function(note) {
  this.note.newNote(note)
}
  exports.NoteListView = NoteListView
})(this)
