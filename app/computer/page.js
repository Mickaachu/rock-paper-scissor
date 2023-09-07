import Choices from '@/components/Choices'
import Rules from '@/components/Rules'
import Scoreboard from '@/components/Scoreboard'
import Image from 'next/image'


export default function Computer() {
  
  return (
    <main 
      className='flex flex-col 
        items-center justify-between
        min-h-screen p-10'
      >
        
        <Choices/>
        <Rules/>

    </main>
  )
}
