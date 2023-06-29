import React, { useState } from 'react'

const Card = () => {

const [input, setInput] = useState("")
const [qr, setQr] = useState()
const [isloading, setIsLoading] = useState(false)

  return (
    <form className='form'>
        <h1 className='title'>QR Code Generator</h1>

        <input 
        type='text'
        className='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        placeholder='Enter URL or Text...'
        />

        {isloading && <div className='loading'><span></span>Loading...</div>}

        {!isloading && (qr ? <img className='qr_code' src='qr' alt='qr_code' /> : <div className='loading'>Generate Amazing QR Code for you & your friends!</div>)}

        <input type='submit' className='submit' value="Generate QR Code" />
    </form>
  )
}

export default Card