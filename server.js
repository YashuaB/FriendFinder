var express = require("express");
var path = require("path");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app)


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
