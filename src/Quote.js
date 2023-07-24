import { useState, useEffect } from 'react'

function Quote() {

    let [quote, setQuote] = useState([])

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then (data => {setQuote(data[Math.floor(Math.random() * 17)])})
      },[])

    
  return (
    <div className='flex flex-col gap-4'>
        <div>{quote.text}</div>
        <div>{quote.author ? quote.author.split(",")[0] : ""}</div>
    </div>
  )
}

export default Quote