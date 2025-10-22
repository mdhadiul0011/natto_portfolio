import React, { Children } from 'react'

export default function Container({children}) {
  return (
    <div className='natt-container'>
      {children}
    </div>
  )
}
