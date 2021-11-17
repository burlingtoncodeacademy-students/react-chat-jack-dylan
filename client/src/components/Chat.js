import { React } from "react";
import "./Chat.css";
import ChatBox from "./ChatBox";
import Rooms from "./Rooms";
import SignIn from "./SignIn";
import Welcome from "./Welcome";

function Chat(props) {
  return (
    <div id="container">
      <SignIn
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      ></SignIn>
      <div id="header">
        <Welcome currentUser={props.currentUser} />
      </div>
      <div id="middle">
        <div id="chatBox">
          <ChatBox
            data={props.data}
            setData={props.setData}
            currentRoom={props.currentRoom}
            setCurrentRoom={props.setCurrentRoom}
            currentURL={props.currentURL}
            setCurrentURL={props.setCurrentURL}
          ></ChatBox>
        </div>
        <div id="sideList">
          <label for="allRooms">
            <b>All Rooms</b>
          </label>
          <Rooms
            currentRoom={props.currentRoom}
            setCurrentRoom={props.setCurrentRoom}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          ></Rooms>
        </div>
      </div>
      <div id="form-area">
        <form
          method="post"
          action={props.currentURL}
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log(props.currentURL);
            evt.target.submit();
          }}
        >
          <input
            name="userName"
            type="text"
            value={props.currentUser}
            style={{ display: "none" }}
          />
          <input name="body" type="text" placeholder="Enter message here..." />
          <input type="submit" value="Chat" />
        </form>
        <form method="get" action={props.currentURL}>
          <input type="submit" value="Refresh" />
        </form>
      </div>
    </div>
  );
}
export default Chat;
