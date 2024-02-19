'use client'

import axios from "axios";
import { useEffect, useState } from "react"

const Filters = ({price,setprice,handleprice,checklist,setchecklist}) => {

const[list,setlist]=useState([]);

const fetchFacilities=async()=>{
    try {
        const {data}=await axios.get('/api/facilities');
       if(data?.facilities)
       setlist(data.facilities);
    } catch (error) {
        console.log(error);
    }
}
 useEffect(() => {
   fetchFacilities();
 }, [])
 
 const handlechecklist=(e)=>{
    let newlist=[];
    if(e.target.checked){
    newlist.push(e.target.value);
  setchecklist(newlist);
  return;}
  newlist=newlist.filter((i)=>i !== e.target.value);
  setchecklist(newlist);
      }
 

  return (
  <>
 <div className="border-2 border-red-500 rounded-md lg:m-5 m-0 h-auto py-10 lg:px-3">
    <label htmlFor="price" className="text-xl mr-3 font-bold">
        Price:
    </label>
    <input type="range" className="w-14" name="price" min={0} max={3000} onChange={(e)=>setprice(e.target.value)} defaultValue={0}/>{/*e-event*/}
   <span className="lg:ml-10">{price?price:''}</span>
   <div>
    <button className="lg:w-40 w-35 lg:h-10 h-12 bg-green-400 cursor-pointer my-3 rounded-md"  onClick={handleprice}>Search
        </button> 
    </div>
   <div className="my-10">
    <h3 className="text-xl font-bold my-3">Filter by Facilities:</h3>
  {
    list?.map((e)=>{
        return (
            <p key={e} className="grid lg:grid-cols-4 grid-cols-2 lg:my-3 my-2 mx-1">
            <label htmlFor="checkbox" className="lg:col-span-2 col-span-1 ">{e}</label>
            <input type="checkbox" name="checkbox" className="w-5 h-5 ml-3 col-span-1 " value={e}  onChange={handlechecklist}/>
        </p>
        )
    })
  }

  
   </div>
 </div>
  </>
  )
}

export default Filters