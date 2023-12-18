import React, { Suspense } from 'react';
import Hero from '@/components/Hero';
import Storyline from '@/components/Storyline';
import Service from '@/components/Service';
import Process from '@/components/Process';
import CustomerFeedback from '@/components/CustomerFeedback';
import { intialProfile } from '@/lib/initial-profile';



export default async function Home() {
  const profile = await intialProfile();
  return (
    <main className='bg-background text-foreground overflow-hidden min-h-screen'>
        {profile.name}
        <p className='px-3'>{profile.email}</p>
        <Hero />
        <Storyline />
        <Service />
        <Process/>
        <CustomerFeedback/>
    </main>
  );
}
