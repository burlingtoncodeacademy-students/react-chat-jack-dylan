function Welcome(props) {
  // if there is a currentUser set, this will greet them at the top of the page
  if (props.currentUser === "") {
    return <h1 id="welcomeTitle">Welcome to ChatBox!</h1>;
  } else {
    return <h1 id="welcomeTitle">Greetings {props.currentUser}!</h1>;
  }
}

export default Welcome;
