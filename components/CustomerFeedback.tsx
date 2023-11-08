'use client'
import Image from 'next/image'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { cn } from '@/hook/utils'
import { Button } from './ui/button';

const CustomerFeedback = () => {
    return (
        <div className='flex flex-col justify-center items-center max-w-7xl mx-auto gap-y-14 p-5 min-h-screen'>
            <div>
                <Image src={'/customers-avatars.webp'} className='w-40 h-20 flex justify-center items-center mx-auto' alt="feedback" width={1000} height={1000} loading="eager" />
                <div className='flex flex-col gap-x-40 max-w-xl text-center'>
                    <h2 className='black_text_gradient'>Why our customers enjoy Sortlist.</h2>
                    <p>We help them make the right decision with confidence.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2  gap-5'>
                <Card className="max-w-lg cursor-pointer hover:scale-105 hover:opacity-100 dark_border dark:bg-default-50 p-5" >
                    <CardHeader className='flex flex-col justify-start items-start'>
                        <h3> The best of data & AI </h3>
                        <p className='max-w-xl'> Our accurate market data helps them make the most informed decision possible to find the providers that suit them best. </p>
                    </CardHeader>
                    <CardFooter >
                        <div className='flex flex-col'>
                        <p><span className='font-bold text-base pr-2'>80.000+</span> providers registered</p> 
                        <p><span className='font-bold text-base pr-2'>31.282+</span>reviews from verified clients</p>
                        <p><span className='font-bold text-base pr-2'>170k+</span>works uploaded by agencies</p>
                        </div>
                    </CardFooter>
                </Card>

                <Card className="max-w-lg cursor-pointer hover:scale-105 hover:opacity-100  dark:bg-teal- p-5 light_border">
                    <CardHeader className='flex flex-col justify-start items-start'>
                        <h3> The best of data & AI </h3>
                        <p className='max-w-sm'> Our accurate market data helps them make the most informed decision possible to find the providers that suit them best. </p>
                    </CardHeader>
                    <CardBody>

                        {/* desc */}
                    </CardBody>
                    <CardFooter>
                    <p><span className='font-bold text-base pr-2'>80.000+</span> providers registered</p>
                    </CardFooter>
                </Card>

                <Card className="max-w-lg cursor-pointer hover:scale-105 hover:opacity-100 dark:bg-teal- p-5 light_border">
                    <CardHeader className='flex flex-col justify-start items-start'>
                        <h3> The best of data & AI </h3>
                        <p className='max-w-sm'> Our accurate market data helps them make the most informed decision possible to find the providers that suit them best. </p>
                    </CardHeader>
                    <CardBody>

                        {/* desc */}
                    </CardBody>
                    <CardFooter>
                        80.000+ providers registered
                        <br /> 31.282+ reviews from verified clients
                    </CardFooter>
                </Card>

                <Card className="max-w-lg cursor-pointer hover:scale-105 hover:opacity-100 dark_border dark:bg-default-50 p-5" >
                    <CardHeader className='flex flex-col justify-start items-start'>
                        <h3> The best of data & AI </h3>
                        <p className='max-w-xl'> Our accurate market data helps them make the most informed decision possible to find the providers that suit them best. </p>
                    </CardHeader>
                    <CardBody>

                        {/* desc */}
                    </CardBody>
                    <CardFooter>
                        80.000+ providers registered
                        <br /> 31.282+ reviews from verified clients
                    </CardFooter>
                </Card>
            </div>

            <Card className="w-full max-w-[1050px] cursor-pointer hover:scale-105 hover:opacity-100 bg-white dark:bg-default-50 sm:p-1 dark_border" >
                <CardBody className='flex justify-center items-center text-center mx-auto gap-10'>
                    <h3 className='text-2xl'>Ready to take your business to the next level?</h3>
                    <div className='flex justify-center items-center gap-5'>
                        <Button className='action_button dark:hover:text-black'>Post a Project</Button>
                        Or
                        <Button className='' variant={'outline'}>Explore Us</Button>
                    </div>
                    {/* desc */}
                </CardBody>

            </Card>
        </div>
    )
}

export default CustomerFeedback