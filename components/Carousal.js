import {useState} from 'react'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'

const Carousal = () => {
    const [temp,showTemp] = useState(false)
   const changeTemplate = (e) => {
    showTemp(!temp)
   }
  return (
    <div className="w-full h-auto flex flex-row">
        <div className="carousal-items w-full h-[400px] overflow-hidden">
            <div className={`w-full h-full bg-car1 bg-cover bg-center relative ${temp ? 'hidden' : 'flex'} duration-500`}>
                <FaArrowLeft className='p-1 bg-black rounded-full text-white absolute left-7 top-2/4 cursor-pointer shadow-xl' onClick={changeTemplate} size={30}/>
                <FaArrowRight className='p-1 bg-black rounded-full text-white absolute right-7 top-2/4 cursor-pointer shadow-xl' onClick={changeTemplate} size={30}/>
                <div className="carousal-box absolute max-w-[180px] top-3 ml-6 lg:max-w-none justify-self-center self-center lg:top-16 lg:left-20 flex flex-col p-2 bg-white shadow-xl">
                    <h5 className="text-black mb-2 font-Roboto font-bold text-sm lg:text-2xl">
                    Learning that gets you
                    </h5>
                    <p className="flex flex-wrap text-black">
                    Skills for your present (and your future). Get started with us.
                    </p>
                </div>
            </div>

            <div className={`w-full h-full bg-car2 bg-cover bg-center relative ${!temp ? 'hidden' : 'flex'} duration-500`}>
                <FaArrowLeft className='p-1 bg-black rounded-full text-white absolute left-7 top-2/4 cursor-pointer shadow-xl' onClick={changeTemplate} size={30}/>
                <FaArrowRight className='p-1 bg-black rounded-full text-white absolute right-7 top-2/4 cursor-pointer shadow-xl' onClick={changeTemplate} size={30}/>
                <div className="carousal-box absolute max-w-[180px] top-3 ml-6 lg:max-w-none justify-self-center self-center lg:top-16 lg:left-20 flex flex-col p-2 bg-white shadow-xl">
                    <h5 className="text-black mb-2 font-Roboto font-bold text-sm lg:text-2xl">
                    Unlock the power of your people
                    </h5>
                    <p className="flex flex-wrap max-w-[400px] text-black">
                   SkillSeeko is trusted by 10.5K+ companies around the world. Find out what we can do for yours.
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Carousal