import React from 'react'

function Button({children, w, h, className=""}) {
  return (
    <button className={`bg-butred ${w} ${h} ${className} rounded-lg`}>
      {children}
    </button>
  )
}

export default Button
