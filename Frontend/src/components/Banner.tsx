import Rectangle from '../assets/Rectangle 103.png'
import { useNavigation } from '../context/NavigationContext'
const Banner = () => {
  const { activePage } = useNavigation()
  return (
    <div>
      <img
        className='w-full h-[40%] object-contain mt-[98px]'
        src={Rectangle}
        alt=''
      />
      <div className='absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center w-[12vw]  md:w-[12vw] h-auto '>
        <h1 className='text-white font-semibold text-[4vw] md:text-[4vw] leading-tight font-Oswald tracking-[0.03em] drop-shadow-[0_5px_10px_rgba(128,0,32,0.8)]'>
          {activePage}
        </h1>

        <div className='absolute left-1/2 -translate-x-1/2 w-[80%] md:w-[30vw] text-left '>
          <p className='text-[#BBBBBB] font-normal mt-2 text-[18px] font-kelly whitespace-nowrap leading-relaxed '>
            <span className='w-max text-center '>
              Please take a look at our menu featuring food, drinks, and brunch.
              If you'd like to
            </span>
            <span className='block text-center'>
              place an order, use the "Order Online" button located below the
              menu.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
