import ChatBox from "./ChatBox";

function ChatContainer(props) {

    function scrollToBottom() {

    }

    return (
        <div id="chatContainer" onLoad={ (evt) => {
            console.log(evt.target)
        }}>
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
    )
}

export default ChatContainer;