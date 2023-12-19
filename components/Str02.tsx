'use client'
import React from 'react'
import WebVitals from "./webvitals";
import Highlighter from '@/lib/Highligher';


const Storyline02 = () => {
  return (
    <div className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 '>
      <div className='flex flex-col justify-center items-center max-w-xl  p-4 text-center'>
        <h2 className='black_text_gradient'>Performance</h2>
        <p>{`Our target 🎯 is to maintain your Application Performance 🔥 to make sure the Better User Experience 💘`}</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center justify-items-center p-5 gap-10 font-semibold bg-opacity-50  backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out '>
        <div className='flex flex-col justify-center items-center'><WebVitals value={100} />
          <p><Highlighter color={`lightgreen`} type='highlight'>SEO</Highlighter></p></div>
        <div className='flex flex-col justify-center items-center'><WebVitals value={90} /><p ><Highlighter color={`lightgreen`} type='circle'>Performance</Highlighter></p></div>
        <div className='flex flex-col justify-center items-center'><WebVitals value={100} /><p ><Highlighter color={`lightgreen`} type='highlight'>Accessibility</Highlighter></p>
        </div>
      </div>
    </div>
  )
}

export default Storyline02