import {useEffect, useState} from 'react'
import './App.css';

function App(props) {

  

  useEffect(() => {
    if (props.currentRoom !== null) {
    fetch(props.currentRoom)
      .then(res => res.json())
      .then((res) => {
        // console.log(res)
        // console.log(data)
        if (props.data === null || res.length !== props.data.length) {
          console.log("reached")
          props.setData(res)
        }
        else {
          return null
        }
      })
    }
    else {
      return null
    }
  }, [props.data, props.currentRoom])


  if (props.data !== null) {
    return (
      <div className="App">
        {/* {console.log(data)} */}
        {props.data.map(item => {
          return <h5 class="chatText" >{item.author}: {item.body} {item.roomName}</h5>
        })}
      </div>
    )
  }
  else {
    return null
  }
}

export default App
