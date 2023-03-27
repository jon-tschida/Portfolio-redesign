import React from 'react'

export default function Minimized(props) {
  const {handleMinimize} = props
  return (
    <div className='minimized-container' onClick={handleMinimize}>
      <p>JT CLI - minimized</p>
    </div>
  )
}
