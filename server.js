require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));

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
  body: String,
  roomName: String
})

// const roomSchema = new mongoose.Schema({
//   name: String,
//   chats: [chatSchema]
// })

let Chat = mongoose.model("Chat", chatSchema)

// Creates a new chat object and pushes it up to the database
async function newChat(date, author, body, roomName) {

  let chat = new Chat({
    when: date,
    author: author,
    body: body,
    roomName: roomName
  })
  
  await chat.save();

  // findAll()
}

// async function newRoom(name) {

//   let roomModel = mongoose.model(name, roomSchema)
//   let room = new roomModel({
//     name: name,
//     chats: []
//   })

//   await room.save()
// }

//newRoom("Dogs")


// async function findRoom(roomName) {
//   let allRooms = (await Room.find({}))
// }

// Takes all chats of a room and throws them into an array of objects
async function findAll() {
  let allChats = (await Chat.find({})).map((chat) => {
    // console.log(chat)
    return chat
  })
  return allChats
}

// Takes all chats of a room and throws them into an array of objects
async function findAllChatsInRoom(roomName) {
  let roomChats = (await Chat.find({roomName: roomName})).map((chat) => {
    // console.log(chat)
    return chat
  })
  return roomChats
}

db.on("error", console.error.bind(console, "connection error"));

// let roomName

// get specific roomId
app.get('/chatRoom/:roomId', async (req, res) => {
  let roomName = req.params.roomId
  // console.log(roomId)
  let chatResult = await findAllChatsInRoom(roomName)
  // console.log(chatResult)
  res.send(chatResult)
})



app.post("/chat/:roomId", express.urlencoded(), async (req, res) => {
  let post = req.body
  roomId = req.params.roomId
//  console.log(post)
  await newChat(Date.now(), post.author, post.body, roomId)
  res.redirect('/')
})

// Get home page
app.get('/api', async (req, res) => {
  let chatResult = await findAll({})
  res.send(chatResult)
})

app.post("/chat", express.urlencoded(), async (req, res) => {
  let post = req.body
  roomId = 'Main'
//  console.log(post)
  await newChat(Date.now(), post.author, post.body, roomId)
  res.redirect('/')
})

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
