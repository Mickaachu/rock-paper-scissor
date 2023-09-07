
import Image from "next/image"
const ChoiceButton = ({handleButtonClick, position, name, Img, Bgcolor}) => {
  return (
    <button onClick={handleButtonClick} name={name} className={`absolute ${position} w-[80px]  `} >
        <div className={`bg-gradient-to-br ${Bgcolor}   bg-no-repeat   bg-cover p-4 rounded-full`}>
            <div className='bg-white p-2 rounded-full'>
                <Image src={Img} width={36} height={36} alt={name}/>
            </div>
        </div>
    </button>
  )
}

export default ChoiceButton