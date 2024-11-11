import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa'
import {Link} from'react-router-dom';

function Navbaar() {
  return (
    <div>
     <nav className="bg-blue-400">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-1/2 pl-4 flex items-center">
                <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-xl" href="#">
                    BlueSkizz
                </a>
            </div>
            <div className="w-1/2 pr-4 flex justify-end">
            <ul className='flex flex-row m-1'>
                <li className="text-white no-underline hover:no-underline lg:text-xl">
                    <Link to='/Registration'>
                        Home
                    </Link>
                </li>

                <li className="text-white no-underline hover:no-underline lg:text-xl">
                    <Link to='/Registration'>
                        Jobs
                    </Link>
                </li>

                <li className="text-white no-underline hover:no-underline lg:text-xl">
                    <Link to='/Registration'>
                        Profile
                    </Link>
                </li>
            </ul>
                <a className="text-white no-underline hover:no-underline lg:text-4xl" href="#">
                    <FaSearch className='text-white' />
                </a>

                <button> Login</button>
            </div>
        </div>
     </nav>


    </div>
  )
}

export default Navbaar