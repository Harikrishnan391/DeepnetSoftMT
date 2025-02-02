// import telephone from '../assets/bytesize_telephone.png'
// import email from '../assets/formkit_email.png'
// import location from '../assets/location.png'
// import Logo from '../assets/Logo.png'
// const Footer = () => {
//   return (
//     <div className='w-full h-[10%] items-center justify-center flex py-6 px-14 gap-12 bg-[#121618]'>
//       <div className='border-1 border-white  w-[20%] h-full flex items-center justify-center rounded-2xl'>
//         <h4 className='font-Oswald text-[#0796EF] font-medium text-[16px] text-center py-4'>
//           CONNECT WITH US
//           <div className='flex gap-4 justify-center'>
//             <img src={telephone} alt='' />
//             <p className='font-Oswald text-[#857878]'>+91 9567843340</p>
//           </div>
//           <div className='flex gap-4 justify-center'>
//             <img src={email} alt='' />
//             <p className='font-Oswald text-[#857878]'>info@deepnetsoft.com</p>
//           </div>
//         </h4>
//       </div>
//       <div className='relative border-1 border-white w-[20%] flex flex-col  py-1  items-center rounded-2xl'>
//         <img
//           src={Logo}
//           className='absolute top-0 transform -translate-y-1/2 w-[86px] h-[76px]'
//           alt=''
//         />
//         <h4 className='font-Oswald text-[#0796EF] font-medium  text-[35px] text-center mt-12 leading-[1.5]  '>
//           DEEP <span className='text-white font-Oswald'>NET</span>{' '}
//           <span className='text-[#857878]'>SOFT</span>
//         </h4>
//       </div>
//       <div className='border-1 border-white w-[20%] h-full flex items-center justify-center rounded-2xl'>
//         <h4 className='font-Oswald text-[#0796EF] font-medium text-[16px] text-center py-4 px-4'>
//           FIND US
//           <div className='flex gap-4 justify-center text-center'>
//             <img src={location} className='w-[15.79px] h-[16.01px]' alt='' />
//             <p className='font-Oswald text-[#857878]'>
//               First floor, Geo infopark, Infopark EXPY, Kakkanad
//             </p>
//           </div>
//         </h4>
//       </div>

//     </div>
//   )
// }

// export default Footer

import telephone from '../assets/bytesize_telephone.png'
import email from '../assets/formkit_email.png'
import location from '../assets/location.png'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#121618] flex flex-col items-center py-6 px-14 gap-6'>
      {/* Main Footer Content */}
      <div className='w-full flex items-center justify-center gap-12'>
        {/* Contact Info */}
        <div className='border border-white w-[20%] h-full flex flex-col items-center justify-center rounded-2xl p-4'>
          <h4 className='font-Oswald text-[#0796EF] font-medium text-[16px] text-center'>
            CONNECT WITH US
          </h4>
          <div className='flex gap-4 items-center'>
            <img src={telephone} alt='' />
            <p className='font-Oswald text-[#857878]'>+91 9567843340</p>
          </div>
          <div className='flex gap-4 items-center'>
            <img src={email} alt='' />
            <p className='font-Oswald text-[#857878]'>info@deepnetsoft.com</p>
          </div>
        </div>

        {/* Logo Section */}
        <div className='relative border border-white w-[20%] flex flex-col items-center rounded-2xl px-3'>
          <img
            src={Logo}
            className='absolute top-0 transform -translate-y-1/2 w-[86px] h-[76px]'
            alt=''
          />
          <h4 className='font-Oswald text-[#0796EF] font-medium text-[35px] text-center mt-12 leading-[1.5]'>
            DEEP <span className='text-white'>NET</span>{' '}
            <span className='text-[#857878]'>SOFT</span>
          </h4>
        </div>

        {/* Find Us */}
        <div className='border border-white w-[20%] h-full flex flex-col items-center justify-center rounded-2xl p-4'>
          <h4 className='font-Oswald text-[#0796EF] font-medium text-[16px] text-center'>
            FIND US
          </h4>
          <div className='flex gap-4 items-center text-center'>
            <img src={location} className='w-[15.79px] h-[16.01px]' alt='' />
            <p className='font-Oswald text-[#857878] text-center'>
              First floor, Geo Infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
