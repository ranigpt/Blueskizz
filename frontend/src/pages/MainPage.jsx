import React from 'react';
import Navbaar from '../Components/Navbaar';
import ProfileCompo from '../Components/ProfileCompo';
import PostCeation from '../Components/PostCeation';
import Suggestions from '../Components/Suggestions';

function MainPage() {
  return (
    <div>
     <Navbaar/>

            <div className=" flex-row lg:flex space-x-4 p-4 ">
                
                <ProfileCompo/>
                <PostCeation/>
                <Suggestions/>

</div>
    </div>

  )
}

export default MainPage