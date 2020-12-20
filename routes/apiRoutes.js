const path = require("path");
const fs = require("fs");
const uuid = require('uuid');
const notesDB = require("../db/db.json");

module.exports = function (app) {
    // Getting saved notes
    app.get("/api/notes", function (req, res) {
        return res.json(store.savedNotes);
    });

    // Posting a new note
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = notesDB[notesDB.length - 1].id + 1;
        notesDB.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(notesDB), function (error) {
            if (err) throw err;
        })
        res.json(notesDB);
    });

    // Deleting a note


}