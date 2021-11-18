import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";

function App() {

  const [data, setData] = useState(null)
  const [currentUser, setCurrentUser] = useState('')
  const [currentRoom, setCurrentRoom] = useState('')
  const [currentURL, setCurrentURL] = useState(
    `/${currentUser}/${currentRoom}`
  );
  
    console.log(currentUser)
    console.log(currentRoom)

  useEffect(() => {
    console.log("reached")
    console.log("currentURL: ", currentURL)
      setCurrentURL(`/${currentUser}/${currentRoom}`);
      if (currentUser && currentRoom) {
      fetch(currentURL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          setData(res)
        });
      }
  }, [currentRoom, currentURL]);

  console.log(data);
  
    return (
      <Chat data={data} setData={setData} currentUser={currentUser} setCurrentUser={setCurrentUser} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} currentURL={currentURL} setCurrentURL={setCurrentURL}></Chat>
    )

}

export default App;
