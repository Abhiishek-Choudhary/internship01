import React from 'react'

function Slider() {
  return (
    <div className='mt-80 ml-20'>
        <input 
                type="range" 
                min="0" 
                max="100" 
                className="slider" 
                id="mySlider" 
            />
    </div>
  )
}

export default Slider