function Rooms(props) {


    return(
        <div id="allRooms">
            {console.log("props.currentUser: ", props.currentUser)}
            {console.log("props.currentRoom: ", props.currentRoom)}
            <button class="roomButton" value="Main" style={props.currentRoom === 'main' ? {backgroundColor: "#7EBC89"} : {backgroundColor: "whitesmoke"}} onClick={ () => {
                    props.setCurrentRoom(`main`)
                    props.setCurrentURL(`/${props.currentUser}/main`)
                }
            }>Main</button>
            <button class="roomButton" type="submit" value="Dogs" style={props.currentRoom === 'dogs' ? {backgroundColor: "#7EBC89"} : {backgroundColor: "whitesmoke"}} onClick={ () => {
                    props.setCurrentRoom(`dogs`)
                    props.setCurrentURL(`/${props.currentUser}/dogs`)
                }
            }>Dogs</button>
            <button class="roomButton" type="submit" value="Cats" style={props.currentRoom === 'cats' ? {backgroundColor: "#7EBC89"} : {backgroundColor: "whitesmoke"}} onClick={ () => {
                    props.setCurrentRoom(`cats`)
                    props.setCurrentURL(`/${props.currentUser}/cats`)
                }
            }>Cats</button>
        </div>
    )
}

export default Rooms