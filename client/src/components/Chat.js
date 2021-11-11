import { React } from "react";
import { useState, useEffect } from "react";
import "./Chat.css";

function Chat(props) {
  return (
    <div id="container">
      <div id="header">
        <h1>Chat Room Header</h1>
        <h2>
          Greetings <span id="userName">id="userName"</span>
        </h2>
      </div>
      <div id="middle">
        <div>
          <textarea id="chatBox" rows="10" cols="30" name="comment"></textarea>
        </div>
        <div id="sideList">
          <label for="allRooms">
            <b>All Rooms</b>
          </label>
          <ul id="allRooms">
            <li>Main</li>
            <li>Dogs</li>
            <li>Debugging</li>
          </ul>
        </div>
      </div>
      <div id="form-area">
        <form method="post" action="">
          <input type="text" />
          <input type="submit" value="Submit" />
          <input type="submit" value="Refresh" />
        </form>
      </div>
    </div>
  );
}
export default Chat;
