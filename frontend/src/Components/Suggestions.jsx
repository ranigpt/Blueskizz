import React from 'react'

function Suggestions() {
  return (
    <div>
        <div className='hidden  md:block md:w-72 lg:w-80 mt-5 m-3 ml-2 bg-gray-200 rounded-md p-2'>
            <h1 className='font-semibold text-2xl'>Suggetions </h1>
            <h2 className='from-neutral-200 m-1'>You May Like this also</h2>
             
             <div className='w-72 bg-white border border-blue-600 focus:first-line:bg-yellow-300 flex flex-row rounded-lg mb-1'>
                <div>
                <img src="https://pxboom.com/wp-content/uploads/2024/02/beautiful-dp-for-girls.jpg" alt="profile" className='w-16 h-16 m-1 rounded-full object-cover object-center' />

                </div>
                <div className='m-2'>
                <h3 className='font-semibold'>Rani</h3>
                <h2 className=''>Profile information Like i am a painter </h2>

                </div>
             </div>

             <div className='w-72 bg-white border border-blue-600 focus:first-line:bg-yellow-300 flex flex-row rounded-lg mb-1'>
                <div>
                <img src="https://pxboom.com/wp-content/uploads/2024/02/beautiful-dp-for-girls.jpg" alt="profile" className='w-16 h-16 m-1 rounded-full object-cover object-center' />

                </div>
                <div className='m-2'>
                <h3 className='font-semibold'>Rani</h3>
                <h2 className=''>Profile information Like i am a painter </h2>

                </div>
             </div>



             <div>

             </div>
       
        </div>
    </div>
  )
}

export default Suggestions