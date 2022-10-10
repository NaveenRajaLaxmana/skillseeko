import {FaStar,FaStarHalfAlt} from 'react-icons/fa'

const Star = () => {
  return (
    <div className='ratings-box flex flex-row items-center space-x-0.5'>
            <h6 className='font-semibold text-star-yellow'>4.4</h6>
            <FaStar size={13} color={"#e59819"}/>
            <FaStar size={13} color={"#e59819"}/>
            <FaStar size={13} color={"#e59819"}/>
            <FaStar size={13} color={"#e59819"}/>
            <FaStarHalfAlt size={13} color={"#e59819"}/>
            <p className='rated-people text-xs self-center text-category-color'>(2906)</p>
            </div>
  )
}

export default Star