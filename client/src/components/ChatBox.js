function ChatBox(props) {
    if (props.data !== null) {
        let chatThread = props.data.map((blurb) => {
            console.log(blurb)
            console.log("blurb.author", blurb.author)
            console.log("props.currentUser", props.currentUser)
            if (blurb.author === props.currentUser) {
                return <h5 style={{textAlign: "right"}}>{blurb.author + ": " + blurb.body}</h5>
            }
            else {
                return <h5 style={{textAlign: "left"}}>{blurb.author + ": " + blurb.body}</h5>
            }
        })
        return chatThread
    }
    else {
        return null
    }
}

export default ChatBox