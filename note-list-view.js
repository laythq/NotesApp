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
      array.push("<li><div>" + notes[i].text + "</div></li>")
    }

    return "<ul>" + array.join("") + "</ul>"
  }

  exports.NoteListView = NoteListView
})(this)
