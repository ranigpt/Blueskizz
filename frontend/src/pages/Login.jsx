import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from'react-toastify';
import axios from 'axios';
import loginimg from '../assets/loginimage.png';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Login(){

    const [logindata , setLogindata]= useState({ Email:'' , Password:'' });
  const navigate = useNavigate();

    const handleinput = (e)=>{
          
        setLogindata({...logindata,[e.target.name]: e.target.value});

    }


    const handleLogin = async()=>{

        if(logindata.Email === "" && logindata.Password === ""){

            toast.error("Enter Email and Password");
        }

        try{

            const response = await axios.post('http://localhost:3000/login', logindata);
            toast.success(response.data.msg);

            const token = response.data.token;

            console.log("frontend token",token);

            localStorage.setItem('token', token);

            navigate('/');
           
        }catch(e){

            
            
            
      const errormsg = e.response?.data?.errors?.[0]?.msg || "Registration Failed";
          toast.error(errormsg);
        }
    };
    return(

        <div className=" bg-blue-200 h-screen flex justify-center ">

        <div className="  mt-16   rounded-md shadow-lg  p-2 bg-white flex-row  h-[37rem] mb-2 md:h-[24rem]"> 
       

           {/* left side div  */}

           


           <div className="m-2 p-2 bg-slate-300 rounded-sm shadow-md   w-80 md:w-full md:h-[24rem]  sm:w-72  sm:h-8  ">
           <div className="flex flex-row flex-wrap">
            <img src={loginimg} alt='worker image' className=" w-40 m-2 rounded-md shadow-md hover:translate-x-2  ml-16  md:m-2" />
            
            <div>
            <h1 className="text-slate-800 font-semibold mt-4 ml-14 text md:ml-5">Welcome back to BlueSkillz! 
                
            </h1>
            
            <h1 className="text-slate-800 font-semibold mt-1 ml-14 text md:ml-5">Let's unlock 
                your potential and showcase your skills.</h1>

                </div>
           </div>
           
           
            
             {/* Google Sign Up Button */}
             <div className="flex items-center border border-black m-2 mb-4 p-2 bg-blue-500 w-72 h-10 rounded cursor-pointer transition-colors duration-300 hover:bg-blue-600  md:w-80">
              <FaGoogle className="text-blue-950 mr-4 text-xl" />
              <span className="text-lg font-semibold text-white">Sign up with Google</span>
            </div>
            <ToastContainer/>

          

            <hr className="bg-blue-950 text-blue-950"></hr>

            <input type="text" placeholder="Email" name="Email" value={logindata.Email}  onChange={handleinput} className="w-52 rounded-sm m-4 p-1 "/>
            <input type="password" placeholder="Password" name="Password" value={logindata.Password} onChange={handleinput}  className="w-52 rounded-sm m-4 p-1 "/>
            <button onClick={handleLogin} className="m-4 p-2 bg-blue-950 rounded-md shadow-md text-white w-24 font-semibold hover:cursor-pointer hover:bg-blue-600  ">Login</button>
        
            </div>
            </div>
        </div>
       
    )
}

export default Login;