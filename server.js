require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/chat-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;

// Chat entry schema
const chatSchema = new mongoose.Schema({
  when: Date,
  author: String,
  body: String
})

// Mongoose model for Chat
const Chat = mongoose.model("Chat", chatSchema)

// Creates a new chat object and pushes it up to the database
async function newChat(date, author, body) {
  let chat = new Chat({
    when: date,
    author: author,
    body: body
  })
  
  await chat.save();
}

// Takes all chats of Chat model and throws them into an array of objects
async function findAll() {
  let allChats = (await Chat.find({})).map((chat) => {
    console.log(chat)
    return chat
  })
  return allChats
}

// newChat(Date.now(), "Dylan", "Hello Database")

//console.log(findAll())

db.on("error", console.error.bind(console, "connection error"));

// get specific roomId
app.get('/chatRoom/:roomId', (req, res) => {
  res.send(`We are in the ${req.params.roomId} room`)
})

// Get home page
app.get('/api', async (req, res) => {
  let result = await findAll({})
  res.send(result)
})

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})