require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

const chatSchema = new mongoose.Schema({
  "when": Date,
  "author": String,
  "body": String
})

db.on("error", console.error.bind(console, "connection error"));

app.get('/', (req, res) => {
  res.send('Good day chat')
})

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})