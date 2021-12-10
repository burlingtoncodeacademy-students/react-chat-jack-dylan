import { useEffect, useState } from "react";
import "./styles/App.css";
import Chat from "./components/Chat";

function App() {
  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [currentURL, setCurrentURL] = useState(
    `/${currentUser}/${currentRoom}`
  );

  // This useEffect pulls the chatRoom currently set
  // and occurs every time the room is changed or URL is changed
  useEffect(() => {
    setCurrentURL(`/${currentUser}/${currentRoom}`);
    if (currentUser && currentRoom) {
      fetch(currentURL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    }
  }, [currentRoom, currentURL]);

  return (
    // this sends the props to Chat from which other components are called
    <Chat
      data={data}
      setData={setData}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      currentRoom={currentRoom}
      setCurrentRoom={setCurrentRoom}
      currentURL={currentURL}
      setCurrentURL={setCurrentURL}
    ></Chat>
  );
}

export default App;
