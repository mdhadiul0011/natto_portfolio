import React from 'react'

function Button({children}) {
  return (
    <div>
      <button className='g-btn'>{children}</button>
    </div>
  )
}

export default Button
