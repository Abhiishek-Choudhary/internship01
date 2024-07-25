import React from 'react'

function Slider({value, onChange}) {

  return (
    <div className='mt-80 ml-20'>
        <input 
                type="range" 
                min="0" 
                max="100" 
                className="slider" 
                id="mySlider" 
                value={value}
                onChange={(e)=>onChange(e.target.value)}
            />
    </div>
  )
}

export default Slider