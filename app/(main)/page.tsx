import { Button } from '@/components/ui/button';
import React from 'react'

export default async function Home() {

  return (
    <>
    <div className='flex flex-col items-center gap-5'>
      <h1 className='h1'>A new version of website is in developement......</h1>
      <Button className='w-full' size={"lg"} variant="default">Zabardast</Button>
      <span className='text-secondary '>Zabardast hogya</span>
      </div>
    </>
  );
}

