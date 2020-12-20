// Dependencies
const express = require('express');
const path = require('path');

// Sets up Express App
const app = express();
let PORT = process.env.PORT || 8080;

// Handling data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});