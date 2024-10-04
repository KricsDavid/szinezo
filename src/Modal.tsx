import React, { useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(!isOpen)}
  return (
    <>
    {isOpen? 
    <div className='modal'>Modal nyitva</div>:
    <button onClick={toggle}>kinyit</button>
    
    }
    </>
  )
}

export default Modal