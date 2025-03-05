import React from 'react'

interface DisplayProps {
    currentInput: string;
    result: string;
  }

function CalcDisplay({ currentInput, result } : DisplayProps) {
  return (
      <main className='flex justify-center items-center pt-20  h-40 w-[600px] rounded-xl px-9'>
          <div className='border h-40 w-[600px] rounded-xl flex items-end justify-end'>
          <div className="current-input">{result}</div>
              <h1 className='text-8xl py-8 px-4'>{currentInput}</h1>
          </div>
    </main>
  )
}

export default CalcDisplay