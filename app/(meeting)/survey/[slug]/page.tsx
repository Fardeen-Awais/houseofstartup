import React from 'react'
import SurveyForm from '../_component/SurveyForm';

const page = ({ params }: { params: { slug: string } }) => {
  const userSelectedService = params.slug.replace(/%20/g, ' ');

  return (
    <div className='flex flex-col min-h-screen justify-center items-center max-w-7xl mx-auto gap-10'>
      <div className='flex flex-col max-w-xl'>
        <h2>Fill the form for {userSelectedService} Service</h2>
        <p>This form help us to save your time by filling it. So, we didn't waste our time in asking random questions</p>
      </div>
      <div>
          <SurveyForm/>
      </div>
    </div>
  )
}
export default page
