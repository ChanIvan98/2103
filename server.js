const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const passport = require('passport');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors());

//Setting up account route
var accounts = require('./routes/accounts');
app.use('/accounts', accounts);

//Setting up recipes route
var recipes = require('./routes/recipes.js');
app.use('/recipes', recipes);

//Setting up homepage routes
var homepage = require('./routes/homepage');
app.use("/", homepage);


app.listen(3000, () => {
  // print a message when the server starts listening
  console.log("server starting on localhost:3001");
});