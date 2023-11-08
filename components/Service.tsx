import React from 'react';
import BrowseCategoryDesktop from './BrowseServices/BrowseCategoryDesktop';
import BrowseCategoryMobile from './BrowseServices/BrowseCategoryMobile';


const Service = () => {
    

    return (
        <section className='flex flex-col gap-5 w-full justify-start items-center min-h-screen mx-auto '>
            <div className='flex flex-col justify-center items-center max-w-xl text-center px-5'>
                <h2 className='black_text_gradient'>Our Services</h2>
                <p>Brands Design provides one-stop solution and services to small and medium-sized businesses and services to turn audiences into clients.</p>
            </div>
            <div className='flex m-10'>
                <BrowseCategoryDesktop />
                <BrowseCategoryMobile/>
            </div>
        </section>
    );
}

export default Service;
