(function(exports){

  function NoteController (noteList) {
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.insertHTML = function (page) {
    this.page = page || document;
    this.object = this.noteListView.returnHTML()
    this.page.getElementById('app').innerHTML = this.object

  }

  exports.NoteController = NoteController

  })(this)
