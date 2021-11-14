require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();

const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://JackLavallee:${process.env.PASSWORD}@cluster0.wu014.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;

// Chat entry schema
const chatSchema = new mongoose.Schema({
  when: Date,
  author: String,
  body: String,
  roomName: String
})

let Chat = mongoose.model("Chat", chatSchema)

// Creates a new chat object and pushes it up to the database
async function newChat(date, author, body, roomName) {

  let chat = new Chat({
    when: date,
    author: author,
    body: body,
    roomName: roomName
  })

  // if (chat.body.length > 500) {
  //   console.log("Your post exceeded 500 characters...")
  //   return null
  // }
  // else {
    await chat.save();
  //}

  // findAll()
}

// Takes all chats of a room and throws them into an array of objects
async function findAll() {
  let allChats = (await Chat.find({})).map((chat) => {
    return chat
  })
  return allChats
}

// Takes all chats of a room and throws them into an array of objects
async function findAllChatsInRoom(roomName) {
  let roomChats = (await Chat.find({roomName: roomName})).map((chat) => {
    console.log("chat: ", chat)
    return chat
  })
  return roomChats
}

db.on("error", console.error.bind(console, "connection error"));

// get specific roomId
app.get('/chatRoom/:roomName', async (req, res) => {
  let roomName = req.params.roomName
  let chatResult = await findAllChatsInRoom(roomName)
  res.send(chatResult)
})



app.post("/chatRoom/:roomName", express.urlencoded(), async (req, res) => {
  let post = req.body
  let roomName = req.params.roomName
  await newChat(Date.now(), post.author, post.body, roomName)
  res.redirect("/chatRoom/" + roomName)
})

// Get home page
app.get('/api', async (req, res) => {
  let chatResult = await findAll({})
  res.send(chatResult)
})

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
