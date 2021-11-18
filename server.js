require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 8000;
const app = express();

const staticDir = process.env.DEV ? "./client/public" : "./client/build";

let cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: false }));


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

  await chat.save();


  //findAll()
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
    return chat
  })
  return roomChats
}

db.on("error", console.error.bind(console, "connection error"));

app.post('/:userName', (req, res) => {
  console.log("\npost/:userName")
  let userName = req.params.userName
  console.log(userName)
  res.redirect('/' + userName)
})


app.post('/:userName/:roomName', async (req, res) => {
  console.log("\npost/:userName/:roomName")
  let post = req.body
  let roomName = req.params.roomName 
  console.log(post)
  // let userName = req.params.userName
  // console.log(userName)
  // let roomName = req.params.roomName
  // console.log(roomName)
  await newChat(Date.now(), post.userName, post.body, roomName)
  res.redirect(`/${roomName}`)
})

// get specific roomId
app.get('/:userName/:roomName?', async (req, res) => {
  console.log("\nget/:userName/:roomName?")
  let params = req.params
  console.log(params)
  let userName = req.params.userName
  console.log(userName)
  let roomName = req.params.roomName
  console.log(roomName)
  let chatResult = await findAllChatsInRoom(roomName)
  res.json(chatResult)
})

// Get home page
app.get('/api', async (req, res) => {
  let chatResult = await findAll({})
  res.send(chatResult)
})

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
