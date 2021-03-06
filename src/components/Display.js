import React from 'react'

function Display({ screenValue, setScreenValue }) {
  return (
    <div className="display">
      <input disabled type="text" value={screenValue} onChange={(e) => setScreenValue(e.target.value)}/>
    </div>
  )
}

export default Display
