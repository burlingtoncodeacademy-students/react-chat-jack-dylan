function Rooms(props) {

    function eventHandler(newRoom) {
        //console.log(newRoom)
        props.setCurrentRoom(newRoom)
    }

    return(
        <ul id="allRooms">

            <li><button>Main</button></li>

            <li><button>Dogs</button></li>

            <li><button>Cats</button></li>
        </ul>
    )
}

export default Rooms