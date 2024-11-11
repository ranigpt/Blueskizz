import React, { useState } from 'react';
import regisimage from "../assets/image1.png";
import bg1 from '../assets/bg1.png';
import human from '../assets/login.png';
import buttom from "../assets/image.png";
import { FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Registration() {

  const [name , setname] =useState('');
  const [email , setEmail] =useState('');
  const [date , setDate] =useState('');
  
  const [password , setPassword] =useState('');
  const [cnfmpass , setCnfmpass] =useState('');

  const [formdata , setFormdata] = useState({
    Name :'',
    Email :' ',
    Dob : '',
    Password:'',
    Confirmpass : ''
  })

  // handle input changes

  const handleInputChanges =(e)=>{
    setFormdata({...formdata , [e.target.name]:e.target.value});
  }
 
  //

  const handleSubmit = async(e)=>{

    e.preventDefault()

    if(formdata.Password != formdata.Confirmpass){

      return toast.error('Password not matched !!');
    }
    console.log(formdata);
    try{

      const response = await axios.post('http://localhost:3000/register/Signupurl', formdata);
      toast.success(response.data.msg);

    }catch(e){
           
      const errormsg = e.response?.data?.errors?.[0]?.msg || "Registration Failed";
      toast.error(errormsg);
          console.log(e);
    }
  }




  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
      <ToastContainer />
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-row w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg p-3 bg-white hover:shadow-2xl transition-all duration-300">
          {/* Left Sub-Div for Text */}
          <div className="flex flex-col items-center w-96 p-0 bg-white border-r border-gray-300">
            <img src={regisimage} alt="Registration" className="w-full h-auto mb-4 rounded-lg" />
            <p className="text-center mb-4 text-gray-600 font-semibold">"Welcome! Join us and take the first step toward new possibilities."</p>
            <img src={human} alt="blue-collar persons" className="rounded-md shadow-md m-1 ml-10 object-cover transition-transform duration-300 hover:scale-105" />
          </div>

          {/* Right Sub-Div for Form */}
          <div className="flex flex-col items-center w-full px-6 py-3 bg-white rounded-md">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Create Your Account</h1>
            <p className="text-center mb-2 text-gray-600 font-semibold">"Unlock Opportunities, Build Your Future"</p>

            {/* Google Sign Up Button */}
            <div className="flex items-center border border-black m-2 mb-4 p-2 bg-blue-500 w-80 h-10 rounded cursor-pointer transition-colors duration-300 hover:bg-blue-600">
              <FaGoogle className="text-blue-950 mr-4 text-xl" />
              <span className="text-lg font-semibold text-white">Sign up with Google</span>
            </div>

            {/* Progress Indicators */}
            <div className="flex flex-row mb-4">
              <div className="w-8 h-2 bg-slate-300 mx-1 rounded transition-colors duration-300 hover:bg-slate-400"></div>
              <div className="w-8 h-2 bg-slate-300 mx-1 rounded transition-colors duration-300 hover:bg-slate-400"></div>
              <div className="w-8 h-2 bg-slate-300 mx-1 rounded transition-colors duration-300 hover:bg-slate-400"></div>
              <div className="w-8 h-2 bg-slate-300 mx-1 rounded transition-colors duration-300 hover:bg-slate-400"></div>
              <div className="w-8 h-2 bg-slate-300 mx-1 rounded transition-colors duration-300 hover:bg-slate-400"></div>
            </div>

            {/* Form Fields */}
            <input type="text" name='Name' placeholder="Enter Your Name"  value={formdata.name} onChange={handleInputChanges} className="w-80 h-auto p-2 rounded-sm cursor-pointer m-2 border border-gray-300 transition duration-300 focus:border-blue-500" />
            <input type="email" name='Email' placeholder="Enter Your Email"  value={formdata.email} onChange={handleInputChanges} className="w-80 h-auto p-2 rounded-sm cursor-pointer m-2 border border-gray-300 transition duration-300 focus:border-blue-500" />
            <input type="date" name='Dob' placeholder="DOB"  value={formdata.dob} onChange={handleInputChanges} className="w-80 h-auto p-2 rounded-sm cursor-pointer m-2 border border-gray-300 transition duration-300 focus:border-blue-500" />
            <input type="password" name='Password' placeholder="Password"  value={formdata.password} onChange={handleInputChanges} className="w-80 h-auto p-2 rounded-sm cursor-pointer m-2 border border-gray-300 transition duration-300 focus:border-blue-500" />
            <input type="password" name='Confirmpass' placeholder="Confirm Password"  value={formdata.confirmpass} onChange={handleInputChanges} className="w-80 h-auto p-2 rounded-sm cursor-pointer m-2 border border-gray-300 transition duration-300 focus:border-blue-500" />

            {/* Submit Button */}
            <button type="submit"  onClick={handleSubmit} className="p-3 mt-4 mb-2 bg-blue-600 text-white rounded-lg shadow-md font-semibold hover:bg-blue-900 transition-all duration-300 focus:outline-none">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
