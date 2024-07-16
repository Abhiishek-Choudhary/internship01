import React from 'react'

function Hero() {
  return (
    <div>
        <div><img className='laptop:hidden overflow-auto' src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mobile burger image" /></div>
        <img className='w-full tablet:hidden ' src='https://images.pexels.com/photos/9588852/pexels-photo-9588852.jpeg?auto=compress&cs=tinysrgb&w=2400&lazy=load' alt='burgerimage' />
    </div>
  )
}

export default Hero