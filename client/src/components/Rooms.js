function Rooms(props) {

    function eventHandler(newRoom) {
        console.log(newRoom)
        props.setCurrentRoom(newRoom)
    }

    return(
        <ul id="allRooms">
            <li>
                <form action="/chatRoom/main" type="POST" onSubmit={ (evt) => {
                            eventHandler("/chatRoom/main")
                            evt.preventDefault()
                        }
                }>
                    <input type="submit" value="Main"/>
                </form>
            </li>

            <li>
                <form action="/chatRoom/dogs" type="POST" onSubmit={ (evt) => {
                            eventHandler("/chatRoom/dogs")
                            evt.preventDefault()
                        }
                }>
                    <input type="submit" value="Dogs"/>
                </form>
            </li>

            <li>
                <form action="/chatRoom/cats" type="POST" onSubmit={ (evt) => {
                            eventHandler("/chatRoom/cats")
                            evt.preventDefault()
                        }
                }>
                    <input type="submit" value="Cats"/>
                </form>
            </li>
        </ul>
    )
}

export default Rooms