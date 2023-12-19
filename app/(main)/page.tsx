import React, { Suspense } from 'react';
import Hero from '@/app/(main)/_components/Hero';
import Storyline from '@/app/(main)/_components/Storyline';
import Service from '@/app/(main)/_components/Service';
import Process from '@/app/(main)/_components/Process';
import CustomerFeedback from '@/components/CustomerFeedback';

export default async function Home() {
  return (
    <main className='bg-background text-foreground overflow-hidden min-h-screen'>
        {/* {profile.name} */}
        {/* <p className='px-3'>{profile.email}</p> */}
        <Hero />
        <Storyline />
        <Service />
        <Process/>
        <CustomerFeedback/>
    </main>
  );
}
