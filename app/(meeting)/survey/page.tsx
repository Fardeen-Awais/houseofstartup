import React from 'react'
import ServiceForm from './_component/ServiceForm'
import { db } from '@/lib/db'
const page = async() => {
  const category = await db.category.findMany({
    orderBy: {
        name: "desc"
    },
    include: {
        services: false
    }
});

  return (
    <div className='flex flex-col min-h-screen justify-center items-center max-w-7xl mx-auto gap-5 p-5'>
      <ServiceForm category={category}/>    
    </div>
  )
}
export default page
