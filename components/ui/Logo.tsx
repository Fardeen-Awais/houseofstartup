import React from 'react'
import Image from 'next/image'
import LightLogo from "../public/alfarnex_light.webp"
const Logo = () => {
  return (
    <>
     <div className='dark:hidden flex items-center justify-center logo w-20 h-20 sm:w-24 sm:h-24'>
          <Image src={'/alfarnex_light.webp'} quality={70} width={300} height={300} alt='Logo for Light' />
        </div>
        <div className='hidden dark:flex items-center justify-center logo w-20 h-20 sm:w-24 sm:h-24'>
          <Image src={'/alfarnex_dark.webp'} quality={70} width={300} height={300} alt='Logo for Dark' />

    </div>
    </>
  )
}

export default Logo