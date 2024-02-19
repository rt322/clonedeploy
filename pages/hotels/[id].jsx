'use client'
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";


const Singlehotel = ({hotel}) => {
 const[auth,setauth]=useState(false);

useEffect(()=>{
  const cookie=Cookies.get('user');
  if(cookie){
    setauth(true);
    return;
  }
  setauth(false);
},[])

  return (
    <>
    <Head>
      <title>{hotel?.name}</title>
    </Head>
    <div className="w-7/12 mx-auto"> <Image src={hotel?.banner} alt="hotel image" width={2000} height={2000} className="w-full  h-large-box  my-5"/>

    <div className="w-full">
        <h3 className="text-3xl font-bold">{hotel?.name}</h3>
        <p className="text-xl my-5 text-justify">{hotel?.description}</p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
    Price:Rs{hotel?.price}
</button>
<p className="text-3xl font-bold my-5">Facilities:</p>
<ul className="flex text-xl justify-between">
  {
    hotel?hotel.facilities?.map((ele)=>{
return (
  <li key={ele.name} className="mr-10 mb-3">
  <span className="m-3">
<Image  src={ele.img} alt="hotel image" width={200} height={200} className="w-20 h-20 rounded-full"/>

  </span>
  <span ml-5>{ele.name}</span>
  
  </li>
)
    }) :''
  }
   
</ul>
{
  auth ?
  <Link href={`/payment/${hotel?._id}`}>
   <button className="w-60 h-14 rounded-lg bg-red-400 text-lg my-10">
  <b>Book Now</b>
</button> 
  </Link>

: <span className="text-2xl">Please <Link href={'/login'} className="text-blue-500">Login</Link> to get new offers!</span>
}
    </div>
    </div>
    </>
  )
}

export  async function getServerSideProps(ctx){
  const res=await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data=await res.json();

return {
  props:{
    hotel:data.hotel,
  }
}
}

export default Singlehotel