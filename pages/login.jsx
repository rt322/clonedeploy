'use client'

import Head from "next/head"
import { useState } from "react"
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";


const Login = () => {
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
const[login,setlogin]=useState(false);


const router=useRouter();

const handlesignUp=async()=>{
  const res=await axios.post(`/api/user/register`,{
    name,
    email,
    password
  });
  if(res?.data){
    Cookies.set('user',res.data.token,{expires:7});
   alert(res.data.msg);
   router.back();
  }
}


const handleLogin=async()=>{
const res=await axios.post(`/api/user/login`,{
  email,
  password
});
if(res?.data){
  Cookies.set('user',res.data.token,{expires:7});
 alert(res.data.msg);
 router.back();
}
}

const handleToggle=()=>{
  setlogin(!login);
}

  return (
    <div>
      <Head>
        <title>OYO-LOGIN/SIGN UP</title>
      </Head>
      <div className="flex h-screen justify-center items-center bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className="absolute  w-full lg:top-10 top-0 lg:px-5 px-0 flex items-center">
          <h2 className="lg:text-5xl text-lg font-bold mr-5 text-white">OYO</h2>
<p className="font-bold text-2xl text-white">Hotels and Homes across 800 cities,24+ countries</p>
        </div>
<div className="flex justify-center lg:w-9/12 flex-col sm:flex-row">
<div className="text-white">
  <p className="font-bold lg:text-5xl text-md lg:px-0 px-10">There's a smarter way to OYO around.</p>
  <p className="text-md lg:text-2xl  lg:py-4 lg:px-0 px-12 py-2">Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
</div>
<div className="w-9/12 border-2 border-red-500 h-120 ml-5 bg-slate-50">
<p className="h-8  flex items-center px-15 bg-gradient-to-r from-red-300 to bg-red-700 lg:text-lg text-md   font-bold text-white lg:px-0 ">Sign up </p>
<div className="px-10">
  <h3 className="text-5xl font-bold my-5 ">
    Login/Sign Up
  </h3>
 
 {login ? ("") : (
   <input type="text" placeholder="Enter your Name." className="border border-black lg:w-96 w-60 h-10 px-3 py-1 my-2" onChange={(e)=>setname(e.target.value)}/>
 )}

  <input type="email" placeholder="Enter your email." className="border border-black lg:w-96 w-60 h-10 px-3 py-1 my-2" onChange={(e)=>setemail(e.target.value)}/>

  <input type="password" placeholder="Enter your password" className="border border-black lg:w-96 w-60 h-10 px-3 py-1 my-2" onChange={(e)=>setpassword(e.target.value)}/>

<button type="submit" className="lg:w-96 w-60 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-700 text-white rounded-lg my-5"  onClick={login?handleLogin:  handlesignUp}>{login?"Login" : "Sign Up"}</button>

<p className="my-1 text-xl pb-2">
<span>{login?"Don't have an account?":"Already have an account?"}</span>
<span className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"  onClick={handleToggle}>{login? "Sign Up" : "Login"}</span>
</p>

</div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login