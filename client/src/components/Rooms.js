function Rooms(props) {


    return(
        <div id="allRooms">
            {console.log("props.currentUser: ", props.currentUser)}
            {console.log("props.currentRoom: ", props.currentRoom)}
            <button value="Main" onClick={ () => {
                    props.setCurrentRoom(`main`)
                    props.setCurrentURL(`/${props.currentUser}/main`)
                }
            }>Main</button>
            <button type="submit" value="Dogs" onClick={ () => {
                    props.setCurrentRoom(`dogs`)
                    props.setCurrentURL(`/${props.currentUser}/dogs`)
                }
            }>Dogs</button>
            <button type="submit" value="Cats" onClick={ () => {
                    props.setCurrentRoom(`cats`)
                    props.setCurrentURL(`/${props.currentUser}/cats`)
                }
            }>Cats</button>
        </div>
    )
}

export default Rooms