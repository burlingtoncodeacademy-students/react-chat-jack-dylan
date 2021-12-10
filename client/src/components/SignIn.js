function SignIn(props) {
  return (
    <div id="signIn">
      <form
        name="signIn"
        onSubmit={(evt) => {
          // sets the currentUser with the Name entered for sign in
          props.setCurrentUser(evt.target.children[0].value);
          // prevents refresh upon submittal
          evt.preventDefault();
          // this sets the room and refreshes the page upon sign in
          props.setCurrentRoom("main");
          // sets the current URL which calls the useEffect in the App.js
          props.setCurrentURL(
            `/${evt.target.children[0].value}/${props.currentRoom}`
          );
          evt.target.children[0].value = "";
        }}
      >
        <input
          name="userName"
          type="text"
          placeholder="Please enter your username"
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default SignIn;
