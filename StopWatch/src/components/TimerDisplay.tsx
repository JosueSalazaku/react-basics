import React, { useState } from 'react'

interface TimerDisplayProps {
    time: string;
}


function TimerDisplay({ time } : TimerDisplayProps ) {

  return (
      <div>
          <div className='text-3xl'>{time}</div>
    </div>
  )
}

export default TimerDisplay