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

const BrowseCategoryMobile = () => {
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
                        <Sheet >
                            <ScrollArea className='h-full w-64 px-5 gap-5'>
                                <SheetTrigger>
                                    <TabsTrigger className='gap-5 py-4 opacity-90 w-52' value="account">
                                        <HomeIcon /> Zabardast 🎯 <BiLeftArrow />
                                    </TabsTrigger>
                                    <TabsTrigger className='gap-5 py-4 opacity-90 w-52' value="password">
                                        <HomeIcon /> Get started 🎯 <BiLeftArrow />
                                    </TabsTrigger>
                                    <TabsTrigger className='gap-5 py-4 opacity-90 w-52' value="power">
                                        <HomeIcon /> Get started 🎯 <BiLeftArrow />
                                    </TabsTrigger>
                                </SheetTrigger>
                            </ScrollArea>

                            <SheetContent side={'bottom'} className="w-full flex flex-col h-screen mx-auto ">
                                <SheetHeader>
                                    <SheetTitle>Software Developement</SheetTitle>
                                </SheetHeader>
                                {/* Part2 */}
                                <SheetDescription>
                                    <ScrollArea className='flex h-[350px] w-[220px] justify-center items-center mx-auto p-5'>
                                        <TabsContent className='flex flex-col gap-10 items-center justify-center ' value="account">
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                            <Button className='p-6'>
                                                Web Developement
                                            </Button>
                                        </TabsContent>
                                        <TabsContent value="password">Change your password here.</TabsContent>
                                    </ScrollArea>
                                </SheetDescription>
                            </SheetContent>
                        </Sheet>
                    </TabsList>
                </div>
            </div>
        </Tabs>
    )
}

export default BrowseCategoryMobile