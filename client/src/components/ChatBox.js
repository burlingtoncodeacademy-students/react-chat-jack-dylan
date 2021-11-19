function ChatBox(props) {

    if (props.data !== null) {
        let chatThread = props.data.map((blurb) => {
            if (blurb.author === props.currentUser) {
                return <h5 id="blurb" class="user">{blurb.author + ": " + blurb.body + " -- " + blurb.when.substr(5, 5)}</h5>
            }
            else {
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