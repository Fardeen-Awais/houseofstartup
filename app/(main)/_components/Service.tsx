import React from 'react';
import BrowseCategoryDesktop from '../../../components/BrowseCategoryDesktop';
import BrowseCategoryMobile from '../../../components/BrowseCategoryMobile';
import { db } from '@/lib/db';


const Service = async() => {
    const category = await db.category.findMany({
        orderBy: {
            name: "asc"
        },
        include: {
            services: true
        }
    });
    return (
        <section className='flex flex-col gap-5 w-full justify-start items-center min-h-screen mx-auto '>
            <div className='flex flex-col justify-center items-center max-w-xl text-center px-5'>
                <h2 className='black_text_gradient'>Our Services</h2>
                <p>Brands Design provides one-stop solution and services to small and medium-sized businesses and services to turn audiences into clients.</p>
            </div>
            <div className='flex m-10'>
                <BrowseCategoryDesktop category={category} />
                <BrowseCategoryMobile category ={category} />
            </div>
        </section>
    );
}

export default Service;
