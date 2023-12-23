import React from 'react'
import SurveyForm from './_component/SurveyForm';

const page = () => {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center max-w-7xl mx-auto gap-5 p-5'>
      <div className='border border-gray-900 border-spacing-5 p-10 rounded-lg'>
          <SurveyForm/> {/* Instead of rendering this ask the service and return them into the slug  */}
      </div>
    </div>
  )
}
export default page
