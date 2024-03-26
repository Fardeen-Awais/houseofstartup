import React from 'react'
import Hero from './_components/Hero';

export default async function Home() {

  return (
    <div className='flex items-start justify-start primary p-5'>
      <section className='animate-fade-up'>
        <Hero />
      </section>
    </div>
  );
}

