import { React } from "react";
import { useState, useEffect } from "react";
import "./Chat.css";
import App from "../App";
import Rooms from "./Rooms";
import SignIn from "./SignIn";
import Welcome from "./Welcome";

function Chat() {
  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState(document.cookie.userName);
  const [currentRoom, setCurrentRoom] = useState(document.cookie.roomName);
  const [currentURL, setCurrentURL] = useState(
    `/${currentUser}/${currentRoom}`
  );

  useEffect(() => {
    if (
      !currentURL.includes(currentUser) ||
      !currentURL.includes(currentRoom)
    ) {
      setCurrentUser(document.location.href.split("/")[3]);
      if (currentRoom !== undefined) {
        setCurrentURL(`/${currentUser}/${currentRoom}`);
      }
    }
  }, [currentUser, currentRoom]);

  return (
    <div id="container">
      <SignIn
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      ></SignIn>
      <div id="header">
        <Welcome currentUser={currentUser} />
      </div>
      <div id="middle">
        <div id="chatBox">
          <App
            data={data}
            setData={setData}
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
            currentURL={currentURL}
            setCurrentURL={setCurrentURL}
          />
        </div>
        <div id="sideList">
          <label for="allRooms">
            <b>All Rooms</b>
          </label>
          <Rooms
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          ></Rooms>
        </div>
      </div>
      <div id="form-area">
        <form
          method="post"
          action={currentURL}
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log(currentURL);
            evt.target.submit();
          }}
        >
          <input
            name="userName"
            type="text"
            value={currentUser}
            style={{ display: "none" }}
          />
          <input name="body" type="text" placeholder="Enter message here..." />
          <input type="submit" value="Chat" />
        </form>
        <form method="get" action={currentURL}>
          <input type="submit" value="Refresh" />
        </form>
      </div>
    </div>
  );
}
export default Chat;
