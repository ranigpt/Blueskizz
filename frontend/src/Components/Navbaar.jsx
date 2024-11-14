import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa'
import {Link} from'react-router-dom';
import { useState } from 'react';

function Navbaar() { 

    const [isOpen , setIsOpen] = useState(false);
    const [searchInput , setSearchInput] = useState(false);
    const [inputVal, setInputVal] = useState('');

const IsopenCheck = ()=>{

    setIsOpen(!isOpen);
}

const SearchCheck = ()=>{

    setSearchInput(!searchInput);
}

  return (
    <div>
     <nav className="bg-blue-400  w-full ">
        <div className=" flex flex-wrap items-center justify-between w-full">
            <div className=" lg:flex w-1/2 pl-4  items-center ">
                <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-xl" href="#">
                    BlueSkizz
                </a>
            </div>

            <div>
               <button className="text-white no-underline hover:no-underline lg:text-xl m-2 lg:hidden" onClick={IsopenCheck}>   
               &#9776;
                </button>
            </div>
            <div className=" hidden lg:flex  w-1/2 pr-4  justify-end">
            <ul className='flex flex-row m-1'>

            <li className="text-white no-underline hover:no-underline lg:text-xl m-2 mt-3 flex flex-row">   
                    <FaSearch className='text-white m-2' onClick={SearchCheck} > 
                        
                    </FaSearch>

                    {searchInput && 
                    
                    <>
                    <input type="text" 
                    className="w-56 text-black no-underline hover:no-underline p-1" 
                     placeholder="Search" 
                     value={inputVal} onChange={(e)=>setInputVal(e.target.value)}
                     />
                     
                     <button className='bg-blue-950 p-1 rounded-md m-1'> search</button>
                     </>
                     }

                    
                </li>
                <li className="text-white no-underline hover:no-underline lg:text-xl  m-2">
                    <Link to='/Registration'>
                        Home
                    </Link>
                </li>

                <li className="text-white no-underline hover:no-underline lg:text-xl m-2">
                    <Link to='/Registration'>
                        Jobs
                    </Link>
                </li>

                <li className="text-white no-underline hover:no-underline lg:text-xl m-2">
                    <Link to='/Registration'>
                        Profile
                    </Link>
                </li>

                

                <li className="text-white no-underline hover:no-underline lg:text-xl m-2 "><button> Login</button></li>
            </ul>
             

                
            </div>
        </div>

        {
            isOpen &&  <div className='flex flex-col justify-center items-center bg-gray-100 w-full'>
                <ul className='flex flex-row m-1'>

<li className="text-white no-underline hover:no-underline lg:text-xl m-2 mt-3">   <a  href="#">
        <FaSearch className='text-blue-900' />
    </a></li>
    <li className="text-blue-900 no-underline hover:no-underline lg:text-xl  m-2">
        <Link to='/Registration'>
            Home
        </Link>
    </li>

    <li className="text-blue-900 no-underline hover:no-underline lg:text-xl m-2">
        <Link to='/Registration'>
            Jobs
        </Link>
    </li>

    <li className="text-blue-900 no-underline hover:no-underline lg:text-xl m-2">
        <Link to='/Registration'>
            Profile
        </Link>
    </li>

    

    <li className="text-blue-900 no-underline hover:no-underline lg:text-xl m-2 "><button> Login</button></li>
</ul>
            </div>
        }
     </nav>


    </div>
  )
}

export default Navbaar