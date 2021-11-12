import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [currentRoom, setCurrentRoom] = useState("/chatRoom/cats");

  useEffect(() => {
    if (currentRoom !== null) {
    fetch(currentRoom)
      .then(res => res.json())
      .then((res) => {
        // console.log(res)
        // console.log(data)
        if (data === null || res.length !== data.length) {
          console.log("reached")
          setData(res)
        }
        else {
          return null
        }
      })
    }
    else {
      return null
    }
  }, [data, currentRoom])


  if (data !== null) {
    return (
      <div className="App">
        {/* {console.log(data)} */}
        {data.map(item => {
          return <h5 class="chatText" >{item.author}: {item.body}</h5>
        })}
      </div>
    )
  }
  else {
    return null
  }
}

export default App
