const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const path = require('path');

require('./config/passport')(passport);

const app = express();

// Connect the database
const db = require('./config/keys').prodMongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
})
  .then(() => console.log("Connected to mongo"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/api/users", users);
app.use(express.static('./frontend/build'))
app.use(express.static('./frontend/build/static/js'))
app.use(express.static('./frontend/build/static/css'))
app.use(express.static('./frontend/build/static/media'))

app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/frontend/build/index.html')));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));