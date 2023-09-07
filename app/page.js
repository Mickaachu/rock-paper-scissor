import Choices from '@/components/Choices'
import Scoreboard from '@/components/Scoreboard'

import Link from 'next/link'

export default function Home() {
  
  return (
    <main 
      className='flex flex-col 
        items-center justify-center
        min-h-screen p-10 gap-3'
      >
        <h1 className='text-white text-5xl max-w-[200px]'>Rock , Paper, and Scissor</h1>
        <Link href='/computer' className='border w-2/3 text-center text-white rounded-lg' >
          Player vs Computer
        </Link>
        <Link href='/online' className='border w-2/3 text-center text-white rounded-lg'>
          Player vs Player
        </Link>
    </main>
  )
}
