import React, { Suspense } from 'react';
import Hero from '@/app/(main)/_components/Hero';
import Storyline from '@/app/(main)/_components/Storyline';
import Service from '@/app/(main)/_components/Service';
import Process from '@/app/(main)/_components/Process';
import CustomerFeedback from '@/components/CustomerFeedback';
import { homeProfile } from '@/lib/home-profile';

export default async function Home() {
  const profile = await homeProfile();
  return (
    <main className='bg-background text-foreground overflow-hidden min-h-screen'>
        <Hero />
        <Storyline />
        <Service />
        <Process/>
        <CustomerFeedback/>
    </main>
  );
}
