import { React } from "react";
import "../styles/Chat.css";
import ChatBox from "./ChatBox";
import Rooms from "./Rooms";
import SignIn from "./SignIn";
import Welcome from "./Welcome";

function Chat(props) {
  return (
    <div id="container">
      {/* Enter UserName */}
      <SignIn
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
        currentURL={props.currentURL}
        setCurrentURL={props.setCurrentURL}
      ></SignIn>
      <div id="header">
        {/* Displays whether signed in or not */}
        <Welcome currentUser={props.currentUser} />
      </div>
      <div id="middle">
        <div id="chatBox">
          {/* Displays all chats to current room */}
          <ChatBox
            data={props.data}
            setData={props.setData}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
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
          {/* Options to select different rooms */}
          <Rooms
            currentRoom={props.currentRoom}
            setCurrentRoom={props.setCurrentRoom}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
            currentURL={props.currentURL}
            setCurrentURL={props.setCurrentURL}
          ></Rooms>
        </div>
      </div>
      <div id="form-area">
        
        <form
          method="post"
          action={props.currentURL}
          onSubmit={() => {
            props.setCurrentURL(props.currentURL)
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
