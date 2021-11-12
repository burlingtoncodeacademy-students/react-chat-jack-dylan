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
        {console.log(data)}
        {data.map(item => {
          return <h1>{item.author}: {item.body}</h1>
        })}
      </div>
    )
  }
  else {
    return null
  }
}

export default App
