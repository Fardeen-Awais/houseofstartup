'use client'
import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { cn } from '@/lib/utils';

const ProcessCard = () => {
  return (
    <Card className='p-5 hover:scale-105 cursor-pointerm green_border'>
    <CardBody>
        <h3 className={cn("text-2xl font-bold ")}>Get started</h3>
        <p>Describe your needs so our algorithm can suggest the best agencies for you. Connect with the ones you like and hire your favourite.</p>
    </CardBody>
  </Card>
  )
}

export default ProcessCard