function ChatBox(props) {
    // pulls in data through props and if it isn't empty will render the chats to the chatbox with the author: chat content -- date
    if (props.data !== null) {
        let chatThread = props.data.map((blurb) => {
            if (blurb.author === props.currentUser) {
                // displays the user's posts on the right side
                return <h5 id="blurb" class="user">{blurb.author + ": " + blurb.body + " -- " + blurb.when.substr(5, 5)}</h5>
            }
            else {
                // displays anyone else's post on the left side
                return <h5 id="blurb" class="other">{blurb.author + ": " + blurb.body + " -- " + blurb.when.substr(5, 5)}</h5>
            }
        })
        return chatThread
    }
    else {
        return null
    }
}

export default ChatBox