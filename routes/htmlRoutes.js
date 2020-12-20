const path = require("path");

module.exports = function (app) {
    // Index page route
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Notes page route
    app.get("/notes", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/notes.html"));
    });
}