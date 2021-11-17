function Welcome(props) {
    if (props.currentUser === null) {
        return <h1>Welcome to ChatBox!</h1>
    }
    else {
        return <h1>Greetings {props.currentUser}!</h1>
    }
}

export default Welcome