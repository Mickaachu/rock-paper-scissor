'use client'
import Image from 'next/image';
import {useState} from 'react';

const Rules = () => {
    const [show, setShow] = useState(false);
  return (
    <>
        { show === false ? (
            <button className='p-2 text-sm border mt-8 text-white w-20 rounded-lg' onClick={ () => setShow(!show)}>
                Rules
            </button>
        ) : (
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-6  items-center justify-center   bg-white text-black'>
                <button onClick={() => setShow(!show)} className='absolute right-2 top-2'>
                    <Image src='/images/icon-close.svg' width={30} height={30} alt='close rules'/>
                </button>
                <h2>RULES</h2>
                <Image src='/images/image-rules.svg' width={300} height={300}/>
            </div>
        )
        }
    </>

  )
}

export default Rules