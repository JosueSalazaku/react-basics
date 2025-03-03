import React from 'react'

interface TimerLoggerProps {
    logging: string;
}

function LogTimes({ logging } : TimerLoggerProps) {
  return (
    <div>{logging}</div>
  )
}

export default LogTimes