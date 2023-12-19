'use client'
// import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'
import { SlDocs } from 'react-icons/sl'
import { ModeToggle } from './Theme'
import Logo from './Logo'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
const Navbar = () => {

  const { isSignedIn } = useUser();

  // const [isMounted, setIsMounted] = useState(false) 
  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])
  // if (!isMounted) {
  //   return null;
  // }

  return (
    <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto md:px-5 h-20 flex items-center justify-between'>
      <nav className='flex justify-between items-center w-full py-4'>
        <Logo />
        <ul className='sm:flex hidden justify-center items-center md:gap-x-10 sm:gap-x-6 text-xs'>
          <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <BiHomeAlt2 className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/service'}>
              <MdWorkOutline className='w-5 h-5' />
              Services
            </Link>
          </li>
          {/* <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/blog'}>
              <SlDocs className='w-5 h-5' />
              Resources
            </Link>
          </li>
          <li className='flex flex-col justify-center items-center gap-1'><BsShop className='w-5 h-5' />
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/store'}>
              Store
            </Link>
          </li> */}
          <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/contact'}>
              <SlDocs className='w-5 h-5' />
              Contact Us
            </Link>
          </li>
        </ul>

        <div className='Customizer flex items-center  gap-x-5 px-3'>
          <div>
            <div className="hidden sm:flex">
              {!isSignedIn && <SignInButton><Button>SignIn</Button></SignInButton>}
            </div>

            {isSignedIn && (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-[48px] w-[48px]",
                  },
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Navbar