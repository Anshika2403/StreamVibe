import React from 'react'

function Box({imgSrc, text}) {
  return (
    <div className='w-10 h-10 md:w-12 md:h-12 p-3 bg-black-box rounded-lg border-2 border-nav-bor'>
      {imgSrc && <img src={imgSrc} alt="Custom" className='md:w-8 w-6'/>}
      {text && <p className='text-base'>{text}</p>}
    </div>
  )
}

export default Box
