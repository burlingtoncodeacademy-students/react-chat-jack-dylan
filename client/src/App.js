import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then((res) => {
        // console.log(res)
        // console.log(data)
        if (data === null || res.length !== data.length) {
          setData(res)
        }
        else {
          return null
        }
      })
  }, [data])

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
