function Rooms(props) {

    function eventHandler(newRoom) {
        console.log(newRoom)
        props.setCurrentRoom(newRoom)
    }

    return(
        <ul id="allRooms">
            <li>
                <form action="/chatRoom/main" type="POST">
                    <input type="submit" value="Main" onClick={ (evt) => {
                            eventHandler("/chatRoom/main")
                            evt.preventDefault()
                        }
                    }/>
                </form>
            </li>

            <li>
                <form action="/chatRoom/dogs" type="POST">
                    <input type="submit" value="Dogs" onClick={ (evt) => {
                            eventHandler("/chatRoom/dogs")
                            evt.preventDefault()
                        }
                    }/>
                </form>
            </li>

            <li>
                <form action="/chatRoom/cats" type="POST">
                    <input type="submit" value="Cats" onClick={ (evt) => {
                            eventHandler("/chatRoom/cats")
                            evt.preventDefault()
                        }
                    }/>
                </form>
            </li>
        </ul>
    )
}

export default Rooms