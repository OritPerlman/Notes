const dateTime = require('get-date');
const db = require("../database");
const Note = db.notes;

// Create note
exports.postNote = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const date = dateTime();
  req.Note
    .createNote({
      title: title,
      content: content,
      author: author,
      date: date
    })
    .then(result => {
      console.log('Created Note');
    })
    .catch(err => {
      console.log(err);
    });
  };

    exports.postDeleteNote = (req, res, next) => {
      const id = req.body.noteId;
      Note.findById(id)
    .then(note => {
      return note.destroy();
    })
    .then(result => {
      console.log('DESTROYED NOTE');   
    })
    .catch(err => console.log(err));
};

exports.getAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? title: !null;

  Note.getAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};