function SignIn(props) {
    return(
        <div id="signIn">
            <form name="signIn" action={`/${props.currentUser}`} method="post" onSubmit={ (evt) => {
                    props.setCurrentUser(evt.target.children[0].value)
                    evt.target.children[0].value = ''
                    evt.preventDefault(
                    props.setCurrentURL(`/${props.currentUser}/${props.currentRoom}`)
                    )
                }
            }>
                <input name="userName" type="text" placeholder="Please enter your username"/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}

export default SignIn