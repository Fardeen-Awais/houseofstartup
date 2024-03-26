import Logo from '@/components/layout/Logo'
import { Button } from '@/components/ui/button'
import { Avatar } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-start justify-start'>
        <div className='flex flex-col gap-10 items-center justify-center max-w-screen-lg'>
            <h1 className='font-semibold text-center '>House of startup is an subscription based <span className='secondary'>Design and Development agency</span></h1>
            <div className='btn-group flex gap-5'>
              <Button className='flex gap-3 bg-[#ededed] rounded-2xl' size={'lg'}><Image className='w-6 h-6' src="/logo-dark.png" alt='icon' width={200} height={200}/>Get Started</Button>
              <Button className='flex gap-3 border-[#a1a1a1] rounded-2xl' size={'lg'} variant={"outline"}>Explore Pricing</Button>
            </div>
        </div>
        <div className='animation'>
            
        </div>
    </div>
  )
}

export default Hero