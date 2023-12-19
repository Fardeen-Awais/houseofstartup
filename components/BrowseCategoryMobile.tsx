'use client'
import React, { useEffect, useState } from 'react'
import { Separator } from './ui/separator'
import { TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ScrollArea } from './ui/scroll-area'
import { HomeIcon } from 'lucide-react'
import { BiLeftArrow } from 'react-icons/bi'
import { Tabs } from '@radix-ui/react-tabs'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

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

const BrowseCategoryMobile = ({ category }: CategoryProps) => {
    const [isMounted, setIsMounted] = useState(false) // By setting isMounted to false initially and then setting it to true in the useEffect hook, the component returns null if it hasn't been mounted yet. This ensures that the component is not rendered on the server and avoids the hydration error. Once the component is mounted on the client, it will be rendered as usual.
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <Tabs defaultValue={'account'} className='sm:hidden flex bg-white dark:bg-gray-900 min-h-screen rounded-xl bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity border-2 border-green-500 dark:border-green-300  browserborder shadow-lg'>
            <div className='flex flex-col border border-transparent border-r-gray-300 w-[300px]  '>
                <div className='flex flex-col max-w-lg px-8'>
                    <h2>Browse our catalog of agencies.</h2>
                    <p>Search, connect & get proposals for your business from development to marketing.</p>
                </div>
                <Separator className='my-10 mx-auto w-60' />
                <div className='flex flex-col justify-start items-start mx-5'>
                    <TabsList className='flex flex-col bg-transparent h-40 '>
                        {category.map((category, index) => (
                            <Sheet >
                                <ScrollArea className='h-full w-64 px-5 gap-5'>
                                    <SheetTrigger>
                                        <TabsTrigger className='flex items-start justify-start gap-5 py-4 opacity-90 w-52' value={category.id}>
                                            <p className='text-start'> {category.name} 🎯</p>
                                        </TabsTrigger>
                                    </SheetTrigger>
                                </ScrollArea>


                                <SheetContent side={'bottom'} className="w-full flex flex-col h-screen mx-auto ">
                                    <SheetHeader>
                                        <SheetTitle>{category.name}</SheetTitle>
                                    </SheetHeader>
                                    <SheetDescription>
                                        <ScrollArea className='flex h-[400px] w-[320px] justify-center items-center mx-auto p-5'>
                                            <div>
                                                {category.services.map((service) => (
                                                    <TabsContent key={service.id} className='flex flex-col gap-y-10 items-center justify-center' value={service.categoryId}>
                                                        <Button variant={'outline'} className='w-full p-20'>{service.name}</Button>
                                                    </TabsContent>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </SheetDescription>
                                </SheetContent>
                            </Sheet>

                        ))}
                    </TabsList>
                </div>
            </div>
        </Tabs >
    )
}

export default BrowseCategoryMobile