import React, { useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(!isOpen)}
  return (
    <>
    {isOpen? 
    <div className='modal'><button onClick={toggle}>bezár</button></div>:
    <button onClick={toggle}>kinyit</button>
    
    }
    </>
  )
}

export default Modal