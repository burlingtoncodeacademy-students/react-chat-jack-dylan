import { React } from "react";
import { useState, useEffect } from "react";
import "./Chat.css";
import App from "../App";
import Rooms from "./Rooms";




function Chat() {
  const [data, setData] = useState(null)
  const [currentRoom, setCurrentRoom] = useState('/chatRoom/main');

  function eventHandler(newRoom) {
    // console.log(newRoom)
    setCurrentRoom(newRoom)
  }

  return (
    <div id="container">
      <div id="header">
        <h1>Chat Room</h1>
        <h2>
          Greetings <span id="userName"></span>
        </h2>
      </div>
      <div id="middle">
        <div id="chatBox">
            <App data={data} setData={setData} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
        </div>
        <div id="sideList">
          <label for="allRooms">
            <b>All Rooms</b>
          </label>
          <Rooms currentRoom={currentRoom} setCurrentRoom={setCurrentRoom}></Rooms>
        </div>
      </div>
      <div id="form-area">
        <form method="post" action={currentRoom}>
        <input name="author" type="text" placeholder="Please enter your name"/>
        <input name="body" type="text" placeholder="enter message here..." />
        <button type="submit" onClick="eventHandler({currentRoom})">Send</button>
        </form>
        <form>
        <button value="Refresh" onClick="eventHandler({currentRoom})">Refresh</button>
        </form>
      </div>
    </div>
  );
}
export default Chat;
