(function(exports){

  function NoteController (noteList) {
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.insertHTML = function (page) {
    this.page = page || document;
    this.object = this.noteListView.returnHTML();
    this.page.getElementById('app').innerHTML = this.object;
  };

  NoteController.prototype.returnNote = function (number, page) {
    this.page = page || document;
    this.object = this.noteListView.returnFullNote(number);
    this.page.getElementById('app').innerHTML = this.object;
  }

  NoteController.prototype.newNote = function (note, page) {
    this.page = page || document;
    this.object = this.noteListView.newNote(note)
    this.page.getElementById('app').innerHTML = this.object
}

  exports.NoteController = NoteController;

})(this);
