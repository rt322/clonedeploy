'use client'

import Link from "next/link"
import { useState } from "react"

const Header3 = () => {
  const[city,setcity]=useState('');
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400  h-100 w-full">
<div className=" p-5">
  <h2 className="text-4xl font-bold text-white text-center">Over 134,000 hotels and homes across 35 countries</h2>

<div className="flex justify-center my-5 lg:mx-20 mx-3">
  <input type="text" placeholder="Find city" className="w-6/12 h-16 px-3 text-lg border-r-2  border-gray-400 " onChange={(e)=>{setcity(e.target.value)}} />

 

 
 <button type="submit" className="h-16   w-40 px-3 py-2  bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl" >
 <Link href={`/hotels?city=${city}`}>
  Search
 </Link>
 </button>

</div>

<div className="flex mx-20 my-5 font-bold">
<button type="submit" className="h-16 px-3 py-2   hover:cursor-pointer text-white  mr-5  hover:bg-green-400" >Continue your Search!  </button>

<button type="submit" className="h-16 px-3 py-2   hover:cursor-pointer text-white  mr-5 border-2  border-white hover:bg-green-400 rounded-xl" >Homestay in India Hotels.  </button>
</div>
</div>

    </div>


    
  )
}

export default Header3