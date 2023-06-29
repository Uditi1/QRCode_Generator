import React, { useState } from 'react'
// import qr from '../../public/qr-code.png'

const Card = () => {

const [input, setInput] = useState("")
const [qr, setQr] = useState()
const [isloading, setIsLoading] = useState(false)

const getQRCode = async (e) => {
    e.preventDefault()

    try {
setIsLoading(true)
const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`)
console.log(res)
setQr(res.url)
    }catch(error) {
        console.log(error)
    }finally{
        setIsLoading(false)
    }
}

  return (
    <form className='form' onSubmit={getQRCode}>
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

        {!isloading && (qr ? <img className='qr_code' src='./qr-code.png' alt='qr_code' /> : <div className='loading'>Generate Amazing QR Code for you & your friends!</div>)}

        <input type='submit' className='submit' value="Generate QR Code" />
    </form>
  )
}

export default Card