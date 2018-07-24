
(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.storeNote = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  NoteList.prototype.newNote = function(text) {
    var id = this.notes.length;
    this.storeNote(new Note(id, text));
  };

  exports.NoteList = NoteList;
})(this);
