'use client'
import React, { useEffect, useState } from 'react'
import { Separator } from './ui/separator'
import { ScrollArea } from './ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'
import { HomeIcon } from 'lucide-react'
import { BiLeftArrow } from 'react-icons/bi'
import Link from 'next/link'

interface CategoryProps {
    category: {
        id: string;
        name: string;
        services: {
            id: string;
            name: string;
            desc: string | null;
            categoryId: any
        }[];
    }[];
}

const BrowseCategoryDesktop = ({ category }: CategoryProps) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <Tabs defaultValue={category[0].id} className='sm:flex hidden bg-white dark:bg-gray-900 min-h-screen rounded-xl bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity green_border '>
            <div className='flex flex-col max-w-lg px-8 border border-transparent border-r-gray-300 '>
              <div className='flex flex-col max-w-xs gap-3 px-5'>
                    <h2 className='max-w-xs'>Browse my services</h2>
                    <p className='max-w-xs text-sm'>Brands Design provides one-stop solution and services to small and medium-sized businesses and services to turn audiences into clients.</p>
                </div>
              
                <Separator className='my-10 mx-auto w-60' />
                <div className='flex flex-col justify-center items-center'>
                    <TabsList className='flex flex-col bg-transparent h-60 '>
                        <ScrollArea className='h-full w-64 gap-5'>
                            {category.map((category, index) => (
                                <TabsTrigger className='gap-5 py-5' value={category.id}>
                                    <p className='font-semibold'>{index + 1}</p><p className=''>{category.name}</p>
                                </TabsTrigger>
                            ))}
                        </ScrollArea>
                    </TabsList>
                </div>
            </div>
            
            <ScrollArea className='flex sm:h-[500px] sm:w-[295px] justify-center items-center '>
                {category.map((category) => (
                    <div className='flex flex-col justify-start items-start p-3 mx-auto'>
                        {category.services.map((service) => (
                            <TabsContent className='flex flex-col gap-y-10 items-center justify-center' value={service.categoryId}>
                               <Link href={`/survey/${service.name}`}><Button variant={'outline'} className='w-60 p-20'>{service.name}</Button></Link>
                            </TabsContent>
                        ))}
                    </div>
                ))}
                <TabsContent value="password">Change your password here.</TabsContent>
            </ScrollArea>
        </Tabs>
    )
}

export default BrowseCategoryDesktop