import React, { Children } from 'react'

export default function Fixedcontainer({children}) {
  return (
    <div className='natt-container'>
      {children}
    </div>
  )
}
