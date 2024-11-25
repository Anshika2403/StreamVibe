import React from 'react'

function Fbox({link}) {
  return (
    <div className='md:w-12 md:h-12 w-11 h-11 bg-fbox cursor-pointer flex justify-center items-center rounded-lg border-fbor border-2'>
      <img src={link}></img>
    </div>
  )
}

export default Fbox
