'use client'
import React from 'react'
import WebVitals from "./subcomponents/webvitals";
import Highlighter from '@/hook/Highligher';
import { themeChecker } from '@/hook/global-state';
import { RoughNotationGroup } from 'react-rough-notation';
import styles from '../styles/Storyline.module.css'

const Storyline01 = () => {
  const checker = themeChecker()
  return (
    <div className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 '>
      <div className='flex flex-col justify-center items-center max-w-xl text-center'>
        <h2 className={`black_text_gradient`}>Welcome to Alfarnex </h2>
        <p className='text-center '> <RoughNotationGroup > Hi There 👋 We are helping business to without top class developers and Designers. We can relief a lot of your <Highlighter color='red' type='crossed-off'> Business Stress </Highlighter>😩</RoughNotationGroup></p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-8 bg-opacity-50 shadow-lg backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out rounded-2xl'>
        <div>
          <WebVitals value={90} />
        </div>
        <p className='max-w-md'>We make interactive web applications that result to increase of more than 80% of Success 🎉</p>
      </div>
    </div>
  )
}

export default Storyline01