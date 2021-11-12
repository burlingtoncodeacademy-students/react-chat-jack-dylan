import {useEffect, useState} from 'react'
import './App.css';

function App(props) {

  useEffect(() => {
    if (props.currentRoom !== null) {
    {console.log(props.currentRoom)}
    fetch(props.currentRoom)
      .then(res => res.json())
      .then((res) => {
        if (props.data === null || res.length !== props.data.length) {
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
        {props.data.map(item => {
          {console.log(item)}
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
