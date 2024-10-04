import React, { useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    {isOpen? 
    <h1>Modal nyitva</h1>:
    <button>kinyit</button>
    }
    </>
  )
}

export default Modal