import React from 'react'
interface ButtonProps {
    value: string,
    onClick: (value: string) => void;
}

function Buttons({ value, onClick } : ButtonProps) {
  return (
      <button
      onClick={() => onClick(value)}
      >{value}</button>
  )
}

export default Buttons