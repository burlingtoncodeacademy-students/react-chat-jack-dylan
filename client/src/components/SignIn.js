function SignIn(props) {
    return(
        <div id="signIn">
            <form name="signIn" onSubmit={ (evt) => {
                    props.setCurrentUser(evt.target.children[0].value)
                    evt.preventDefault()
                    props.setCurrentRoom('main') // this sets the room and refreshes the page upon sign in
                    props.setCurrentURL(`/${evt.target.children[0].value}/${props.currentRoom}`)
                    evt.target.children[0].value = ''
                }
            }>
                <input name="userName" type="text" placeholder="Please enter your username"/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}

export default SignIn