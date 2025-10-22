import React from 'react'

function Button({children}) {
  return (
    <div>
      <button className='reuse_btn'>{children}</button>
    </div>
  )
}

export default Button
