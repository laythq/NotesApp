(function(exports){

  function NoteController (noteList) {
    noteList.newNote('Favourite drink: seltzer')
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.insertHTML = function () {

    document.getElementById('app').innerHTML = this.noteListView.returnnotelHTML()

  }

  exports.NoteController = NoteController

  })(this)
