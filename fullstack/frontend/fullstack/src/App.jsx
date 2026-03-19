import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  } )

  return (
    <>
    <h1>hello , are you ready for some jokes ?</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke, index)=>{
        return(
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
        </div>
        )
      })
    }

    </>
  )
}

export default App
