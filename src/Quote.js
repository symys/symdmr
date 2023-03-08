import { useState, useEffect } from 'react'

function Quote() {

    let [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then (data => {setQuotes(data[Math.floor(Math.random()*1600)])})
      },[])

    
  return (
    <div className='flex flex-col gap-4'>
        <div>{quotes.text}</div>
        <div>{quotes.author}</div>
    </div>
  )
}

export default Quote