require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";
const mongoose = require("mongoose");

app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: false }));

// Connection to Atlas Mongo Database
mongoose.connect(
  `mongodb+srv://JackLavallee:${process.env.PASSWORD}@cluster0.wu014.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// UNCOMMENT BELOW FOR LOCAL TESTING, please comment out the above if testing local
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
  roomName: String,
});

// Creates chats collection and Chat object
let Chat = mongoose.model("Chat", chatSchema);

// Creates a new chat object and pushes it up to the database
async function newChat(date, author, body, roomName) {
  let chat = new Chat({
    when: date,
    author: author,
    body: body,
    roomName: roomName,
  });

  await chat.save();
}

// Takes all chats of a room and throws them into an array of objects
async function findAll() {
  let allChats = (await Chat.find({})).map((chat) => {
    return chat;
  });
  return allChats;
}

// Takes all chats of a room and throws them into an array of objects
async function findAllChatsInRoom(roomName) {
  let roomChats = (await Chat.find({ roomName: roomName })).map((chat) => {
    return chat;
  });
  return roomChats;
}

db.on("error", console.error.bind(console, "connection error"));

// posts a chat entry into the database
app.post("/:userName/:roomName", express.urlencoded(), async (req, res) => {
  console.log("\npost/:userName/:roomName");
  let post = req.body;
  let roomName = req.params.roomName;
  console.log(post);
  await newChat(Date.now(), post.userName, post.body, roomName);
  res.redirect(`/`);
});

// get specific roomId
app.get("/:userName/:roomName?", express.urlencoded(), async (req, res) => {
  console.log("\nget/:userName/:roomName?");
  let roomName = req.params.roomName;
  let chatResult = await findAllChatsInRoom(roomName);
  res.json(chatResult);
});

// Get home page
app.get("/api", async (req, res) => {
  let chatResult = await findAll({});
  res.send(chatResult);
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
