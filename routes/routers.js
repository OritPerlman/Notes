module.exports = app => {
    const items = require("../controller/noteController");
  
    var router = require("express").Router();
  
    // Create a new note
    router.post("/", items.postNote);
  
    // Get all notes
    router.get("/", items.getAll);

    // Delete a Tutorial with id
    router.delete("/:id", items.postDeleteNote);

    app.use("/api/items", router);
  };