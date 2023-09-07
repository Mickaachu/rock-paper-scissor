import React from 'react'

const Scoreboard = ({Score}) => {
  return (
    <div className='flex justify-between w-3/4 border-4 border-header-outline p-4 rounded-md'>
          <div className='w-16 text-white text-lg'>
            <p className='leading-none'>
              Rock
              Paper
              Scissors
            </p>
          </div>
          <div className='bg-white px-4 py-1 rounded-md'>
            <p className='text-score-text text-xs'>Score<br/><span className='text-3xl text-dark-text'>{Score}</span></p>
          </div>
    </div>
  )
}

export default Scoreboard