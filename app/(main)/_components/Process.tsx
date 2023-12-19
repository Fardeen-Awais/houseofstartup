import Image from 'next/image'
import React from 'react'
import ProcessCard from '../../../components/ProcessCard'


const Process = () => {
  return (
    <section className='flex flex-col justify-center items-center max-w-7xl mx-auto gap-y-14 p-5 min-h-screen'>
      <div className='flex flex-col gap-x-40 max-w-xl text-center'>
        <h2 className='black_text_gradient'>Our Process</h2>
        <p>We will ask quiz throughout get started process. Hense it saves a lot time of asking some common details.</p>
      </div>
      <div className='sm:flex gap-10 hidden'>
        <Image className='w-16 h-16' src={'/left.svg'} alt="leftarrow" width={100} height={100} loading="eager" />
        <Image className='w-16 h-16' src={'/down.svg'} alt="Downarrow" width={100} height={100} loading="eager" />
        <Image className='w-16 h-16' src={'/right.svg'} alt="Rightarrow" width={100} height={100} loading="eager" />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <ProcessCard/>
        <ProcessCard/>
        <ProcessCard/>
      </div>
    </section>
  )
}

export default Process