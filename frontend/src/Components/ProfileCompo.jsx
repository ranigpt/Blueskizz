import React from 'react';
import { FiHome, FiMessageSquare, FiCamera, FiSettings  , FiStar} from 'react-icons/fi';
import { MdDynamicFeed } from 'react-icons/md';
import { FaEye } from 'react-icons/fa'

function ProfileCompo() {
  return (
    <div>
      <div className=' hidden lg:flex w-72 h-auto bg-blue-100 rounded-md shadow-md flex-col m-3 p-3 justify-center'>
        <div className='flex  flex-col items-center text-center'>
        <img
          src='https://pxboom.com/wp-content/uploads/2024/02/beautiful-dp-for-girls.jpg'
          alt='your profile'
          className='rounded-full w-20 h-20 '
        />
        <h1 className='text-2xl font-bold text-gray-800 m-2'>Hello Rani</h1>
        
        <div className='m-2 w-44 flex items-center bg-base-100 hover:bg-blue-950 p-2 rounded-md hover:text-white'>
          <MdDynamicFeed className='mr-2' /> {/* Aligned icon and text in one line */}
          <h3>New Feed</h3>
        </div>
        <div className='m-2 w-44 flex items-center bg-base-100 hover:bg-blue-950 p-2 rounded-md hover:text-white'>
          
          <FiCamera className='mr-2' /> {/* For media */} {/* Aligned icon and text in one line */}
          <h3>Media</h3>
        </div>

        <div className='m-2 w-44 flex items-center bg-base-100 hover:bg-blue-950 p-2 rounded-md hover:text-white'>
          
        <FaEye className='mr-2' /> {/* For media */} {/* Aligned icon and text in one line */}
          <h3>Viewers</h3>
        </div>

        <div className='m-2 w-44 flex items-center bg-base-100 hover:bg-blue-950 p-2 rounded-md hover:text-white'>
          
          <FiSettings className='mr-2' /> {/* For media */} {/* Aligned icon and text in one line */}
          <h3>Setting</h3>

         
        </div>

        <div className='w-40 bg-blue-950 text-white h-auto m-3 p-1 rounded-md shadow-md flex flex-col items-center'>

        <img
          src='https://pxboom.com/wp-content/uploads/2024/02/beautiful-dp-for-girls.jpg'
          alt='your profile'
          className='rounded-sm w-20 h-22 mt-2 '
        />

        <div className='flex flex-row text-yellow-500 m-2 mt-3'>
            
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
        </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileCompo;
