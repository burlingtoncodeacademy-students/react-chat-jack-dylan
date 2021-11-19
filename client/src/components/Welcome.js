function Welcome(props) {
    if (props.currentUser === '') {
        return <h1 id="welcomeTitle">Welcome to ChatBox!</h1>
    }
    else {
        return <h1 id="welcomeTitle">Greetings {props.currentUser}!</h1>
    }
}

export default Welcome