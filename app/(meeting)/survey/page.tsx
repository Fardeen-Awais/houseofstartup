import React from 'react'
import SurveyForm from './_component/SurveyForm';

const page = () => {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center max-w-7xl mx-auto'>
      <div className='flex flex-col max-w-xl'>
        <h2>Fill the form for better service</h2>
        <p>This form help us to save your time by filling it. So, we didn't waste our time in asking random questions</p>
      </div>
      <div>
        <div>
          <SurveyForm/> {/* Instead of rendering this ask the service and return them into the slug  */}
        </div>
      </div>
    </div>
  )
}
export default page
