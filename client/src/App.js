import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        console.log(data)
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
