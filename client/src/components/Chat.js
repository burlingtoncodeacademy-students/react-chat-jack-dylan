import "../styles/Chat.css";
import ChatBox from "./ChatBox";
import Rooms from "./Rooms";
import SignIn from "./SignIn";
import Welcome from "./Welcome";

function Chat(props) {
  return (
    <div id="container">
      <div id="header">
        {/* Enter UserName */}
        <SignIn
          currentUser={props.currentUser}
          setCurrentUser={props.setCurrentUser}
          currentRoom={props.currentRoom}
          setCurrentRoom={props.setCurrentRoom}
          currentURL={props.currentURL}
          setCurrentURL={props.setCurrentURL}
        ></SignIn>
        {/* Displays whether signed in or not */}
        <Welcome currentUser={props.currentUser} />
      </div>
      <div id="middle">
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
        <div
          id="chatContainer"
          onLoad={(evt) => {
            console.log(evt);
          }}
        >
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
          <div id="form-area">
            {/* here is the input area at the bottom of the page, it posts to the server that writes to the database  */}
            <form
              method="post"
              action={props.currentURL}
              onSubmit={() => {
                props.setCurrentURL(props.currentURL);
              }}
            >
            {/* the userName input doesn't display but is here to be included in the post */}
              <input
                name="userName"
                type="text"
                value={props.currentUser}
                style={{ display: "none" }}
              />
              <input name="body" type="text" placeholder={props.currentURL} />
              <input type="submit" value="Chat" />
            </form>
            <form>
            {/* unfinished refresh button */}
              <input type="submit" value="Refresh" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
