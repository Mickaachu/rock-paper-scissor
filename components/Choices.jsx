'use client'
import Image from 'next/image'
import ChoiceButton from './ChoiceButton'
import Scoreboard from './Scoreboard'
import { useState, useEffect } from 'react'


const Choices = () => {
  const [score, setScore] = useState(0)
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  const scoring = (playerChoice, computerChoice) => {
    if (playerChoice === 'paper' && computerChoice === 'rock') {
      setScore(score + 1)
    } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
      setScore(score - 1)
    } else if (playerChoice === 'scissor' && computerChoice === 'paper') {
      setScore(score + 1)
    } else if (playerChoice === 'scissor' && computerChoice === 'rock') {
      setScore(score - 1)
    } else if (playerChoice === 'rock' && computerChoice === 'scissor') {
      setScore(score + 1)
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      setScore(score - 1)
    }
    else if (playerChoice === computerChoice) {
      setScore(score)
    }
  }

  const handleChoice = (choice) => {
    const choices = ['paper', 'scissor', 'rock']
    setPlayerChoice(choice)
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
    
  }

  useEffect(() => {
    scoring(playerChoice, computerChoice)
  }, [playerChoice, computerChoice])
 

  return (
    <>
      <Scoreboard Score={score} />
      {
        !playerChoice ? (
          <div className='flex flex-col relative mt-10'>
            <ChoiceButton position='-top-5 -left-5' Bgcolor='from-paper-gradient-start to-paper-gradient-end' handleButtonClick={() => handleChoice('paper')} name='paper' Img='/images/icon-paper.svg'/>
            <ChoiceButton position='-top-5 -right-5' Bgcolor='from-scissors-gradient-start to-scissors-gradient-end' handleButtonClick={() => handleChoice('scissor')} name='scissor' Img='/images/icon-scissors.svg'/>
            <ChoiceButton position='bottom-0 left-1/2 -translate-x-1/2' Bgcolor='from-rock-gradient-start
              to-rock-gradient-end' handleButtonClick={() => handleChoice('rock')} name='scissor' Img='/images/icon-rock.svg'/>
            <Image src='/images/bg-triangle.svg' width={200} height={200} alt='triangle'/>
          </div>
        ) : (
          <div className='flex gap-8 text-white'>
            <div className='flex flex-col justify-center items-center'>
              <div 
                className={`bg-gradient-to-br bg-no-repeat 
                  ${playerChoice === 'paper' ? 'from-paper-gradient-start to-paper-gradient-end' 
                    : playerChoice === 'scissor' ? 'from-scissors-gradient-start to-scissors-gradient-end' 
                    : 'from-rock-gradient-start to to-rock-gradient-end'}  
                      bg-cover p-4 rounded-full`}>
                  <div className='bg-white p-2 rounded-full'>
                      <Image 
                      src={playerChoice === 'paper' ? "/images/icon-paper.svg"
                      : playerChoice === 'scissor' ? '/images/icon-scissors.svg' : '/images/icon-rock.svg' }
                      width={36} 
                      height={36} 
                      alt='player choice'
                      />
                  </div>
                  
              </div>
              <div>
                  <p>YOU PICKED</p>
              </div>
            </div>
           
            <div className='flex flex-col justify-center items-center'>
                <div  
                  className={`bg-gradient-to-br bg-no-repeat 
                  ${computerChoice === 'paper' ? 'from-paper-gradient-start to-paper-gradient-end' 
                    : computerChoice === 'scissor' ? 'from-scissors-gradient-start to-scissors-gradient-end' 
                    : 'from-rock-gradient-start to to-rock-gradient-end'}  
                      bg-cover p-4 rounded-full`}
                >
                  <div className='bg-white p-2 rounded-full'>
                    <Image  src={computerChoice === 'paper' ? "/images/icon-paper.svg"
                    : computerChoice === 'scissor' ? '/images/icon-scissors.svg' : '/images/icon-rock.svg'}
                    width={36} 
                    height={36}  
                    alt='computer choice'
                    />
                  </div>
                </div>
                <div>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
          </div>

        )
      }
      {
        playerChoice && (
          <div className='flex justify-center mt-10'>
            <button 
              className='bg-white text-black font-bold py-2 px-4 rounded-full'
              onClick={() => {
                setPlayerChoice('')
                setComputerChoice('')
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        )
      }
     
    </>
    

  )
}

export default Choices