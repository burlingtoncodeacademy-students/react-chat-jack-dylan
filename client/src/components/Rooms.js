function Rooms(props) {
    // This function is the (left) sidebar for the page and has 3 buttons, one for each room
    // the style for each will change from white to dark green indicating that that one is selected
    // upon an onClick for each of these, currentRoom is set and the URL is updated, thus refreshing the chat area with the chats for that room
  return (
    <div id="allRooms">

    {/* Main Room Button */}
      <button
        class="roomButton"
        value="Main"
        style={
          props.currentRoom === "main"
            ? { backgroundColor: "#7EBC89" }
            : { backgroundColor: "whitesmoke" }
        }
        onClick={() => {
          props.setCurrentRoom(`main`);
          props.setCurrentURL(`/${props.currentUser}/main`);
        }}
      >
        Main
      </button>

      {/* Dogs Room Button */}
      <button
        class="roomButton"
        type="submit"
        value="Dogs"
        style={
          props.currentRoom === "dogs"
            ? { backgroundColor: "#7EBC89" }
            : { backgroundColor: "whitesmoke" }
        }
        onClick={() => {
          props.setCurrentRoom(`dogs`);
          props.setCurrentURL(`/${props.currentUser}/dogs`);
        }}
      >
        Dogs
      </button>
      {/* Cats Room Button */}
      <button
        class="roomButton"
        type="submit"
        value="Cats"
        style={
          props.currentRoom === "cats"
            ? { backgroundColor: "#7EBC89" }
            : { backgroundColor: "whitesmoke" }
        }
        onClick={() => {
          props.setCurrentRoom(`cats`);
          props.setCurrentURL(`/${props.currentUser}/cats`);
        }}
      >
        Cats
      </button>
    </div>
  );
}

export default Rooms;
