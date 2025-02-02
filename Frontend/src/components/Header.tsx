import { useState } from 'react'
import { FiMenu } from 'react-icons/fi' // Import menu icon for mobile
import { IoMdClose } from 'react-icons/io'
import logo2 from '../assets/Logo.png'
import { useNavigation } from '../context/NavigationContext'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setActivePage } = useNavigation()
  return (
    <div>
      <div className=' bg-[#121618] w-full h-[100px] absolute top-[-2px] display flex md:px-10 justify-between '>
        <div className='flex items-center w-full md:w-auto justify-center md:justify-start'>
          <img
            src={logo2}
            alt='logo'
            className='w-[86px] h-[76px] absolute top-[60px] left-[168px] '
          />
          <h1 className='hidden md:block w-[154px] h-[52px] absolute left-[270px] top-[53px] font-normal  text-[35px] leading-[51.87px] tracking-[0.03em] text-left'>
            <span className='text-[#0796EF] mr-2 font-Oswald text=[35px]'>
              DEEP
            </span>
            <span className='text-white'>NET</span>
            <br />
            <span className='text-[#857878] font-family-[Oswald]'>SOFT</span>
          </h1>
        </div>
        <div className='text-white flex justify-between mr-[10%] items-center h-[150px]'>
          <ul className=' hidden md:flex space-x-8'>
            {['HOME', 'MENU', 'MAKE A RESERVATION', 'CONTACT US'].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => setActivePage(item)} // Update active page
                  className='hover:text-[#0796EF] cursor-pointer font-normal text-16px'
                >
                  {item}
                </li>
              )
            )}
          </ul>

          <button
            className='md:hidden text-white text-2xl'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <FiMenu />}
          </button>
          {/* MOBILE SIDEBAR */}
          {isOpen && (
            <div className='fixed top-0 right-0 w-[250px] h-full font-Oswald bg-[#121618] shadow-lg flex flex-col items-center pt-16 space-y-6 text-white text-lg transition-transform duration-300'>
              <button
                className='absolute top-5 right-5 text-2xl'
                onClick={() => setIsOpen(false)}
              >
                <IoMdClose />
              </button>
              <a href='#' className='hover:text-[#0796EF'>
                HOME
              </a>
              <a href='#' className='hover:text-[#0796EF]'>
                MENU
              </a>
              <a href='#' className='hover:text-[#0796EF]'>
                MAKE A RESERVATION
              </a>
              <a href='#' className='hover:text-[#0796EF]'>
                CONTACT US
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
