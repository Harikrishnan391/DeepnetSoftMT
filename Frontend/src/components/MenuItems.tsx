import Rectangle3 from '../assets/Rectangle 116.png'
import Frame1 from '../assets/Frame.png'
import Frame2 from '../assets/Frame 2.png'
import Drink1 from '../assets/drink1.png'
import Cocktail from '../assets/cocktail1 1.png'
import { MenuItem } from '../types/types'


interface MenuItemsProps {
  menuTitle: string
  items: MenuItem[] // Use MenuItem[] type for the items array
}

const MenuItems = ({ menuTitle, items }: MenuItemsProps) => {
  return (
    <div className='relative'>
      <img className='w-full' src={Rectangle3} alt='' />

      <div className='absolute top-0 left-0 p-4 w-[10%] h-[80%] text-white'>
        <img src={Frame1} alt='' />
      </div>

      <div className='absolute left-1/2 -translate-x-1/2 p-4 text-white outline-1 outline-white w-[1140px] h-[416px] top-[90px]'>
        <img
          src={Drink1}
          alt='Top Left'
          className='absolute top-[-150px] left-[-60px] w-[190px] h-[281px] m-0'
        />

        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[80%] flex justify-center'>
          <h1 className='font-Oswald font-bold text-[50px] leading-[74.1px] tracking-[3%] drop-shadow-[0_5px_10px_rgba(128,0,32,0.8)]'>
            {menuTitle}
          </h1>
        </div>

        <div className='absolute top-[35%] left-6 text-center w-[80%] px-4 py-3 flex justify-between items-start gap-12 flex-wrap'>
          {items.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 w-[45%]'>
              <h1 className='text-left text-[26px]'>
                {item.name}.................................................
                {item.price}
              </h1>
              <p className='font-kelly font-normal text-[#FFFFFFBF] break-words text-left'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <img
          src={Cocktail}
          alt='Bottom Right'
          className='absolute bottom-0 right-0 w-[192px] h-[207px]'
        />
      </div>

      <div className='absolute top-0 right-0 p-4 text-white'>
        <img src={Frame2} alt='' />
      </div>
    </div>
  )
}

export default MenuItems
