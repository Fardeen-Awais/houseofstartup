import React from 'react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-center max-w-7xl mx-auto p-5 sm:p-10 gap-10 min-h-screen w-full'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-5'>
          <h1 className='max-w-md sm:max-w-3xl '>Web Agency for Developing Buisness</h1>
          <p className='max-w-md text-base sm:text-lg'>Make your Business Web application with our best developers. Helping Businesses to get their website application with security.</p>
        </div>
        <div className='flex gap-x-5'>
          <Link href={'/survey'}><Button className='action_button dark:hover:text-black'>Get Started</Button></Link>
          <Button variant="outline">Explore Us</Button>
        </div>
      </div>

      <div className='w-80 h-80 sm:w-full sm:h-full'>
        <Image
          src={'/hero.webp'}
          alt="Hero Image"
          width={1000}
          height={1000}
          loading="eager"
          className="relative inset-0"
          priority={true}
          draggable="false"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

    </section>

  )
}

export default Hero