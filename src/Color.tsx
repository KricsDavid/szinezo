import React, { useState } from 'react'

const Color = () => {
    const colors = ["gray", "red", "black", "green", "orange"]
    const [idx, setIdx] = useState(0)
    const toogle = () => {
        if(idx < colors.length){setIdx(idx+1)}


            else{ setIdx(0)
        }
    }
  return (
    <button className='colorbtn' onClick={toogle}
    style={{background: colors[idx]}}
    ></button>


    
  )
}

export default Color