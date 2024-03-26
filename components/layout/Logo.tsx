import React from 'react'
import Images from './Image'

const Logo = () => {
  return (
    <div className='w-20 h-20 sm:w-24 sm:h-24'>
        <Images src="/logo.png" alt="house of startup logo" width={500} height={500} isBlurred={true} priority={true} />
    </div>
  )
}

export default Logo