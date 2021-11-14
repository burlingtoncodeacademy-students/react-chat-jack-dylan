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

// mongoose.connect("mongodb://localhost:27017/chat-db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })


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
    console.log("chat: ", chat)
    return chat
  })
  return roomChats
}

db.on("error", console.error.bind(console, "connection error"));

// get specific roomId
app.get('/chatRoom/:roomName', async (req, res) => {
  let roomName = req.params.roomName
  // console.log(roomName)
  let chatResult = await findAllChatsInRoom(roomName)
  // console.log(chatResult)
  res.send(chatResult)
})


app.post("/chatRoom/:roomName", express.urlencoded(), async (req, res) => {
  let post = req.body
  roomName = req.params.roomName
//  console.log(post)
  await newChat(Date.now(), post.author, post.body, roomName)
  res.redirect("/")
})

// Get home page
app.get('/api', async (req, res) => {
  let chatResult = await findAll({})
  res.send(chatResult)
})

// app.post("/chat", express.urlencoded(), async (req, res) => {
//   let post = req.body
//   roomName = 'main'
// //  console.log(post)
//   await newChat(Date.now(), post.author, post.body, roomName)
//   res.redirect('/')
// })

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
