'use client'
import Filters from "@/components/Filters"
import Header1 from "@/components/Header1"
import Hotel from "@/components/Hotel"
import axios from "axios"
import { useEffect, useState } from "react"


const Hotels = ({hotels}) => {
  const[list,setlist]=useState([]);
  const[price,setprice]=useState(3000);
  const[checklist,setchecklist]=useState([]);

  const handleprice=async()=>{
const {data}=await axios.get(`/api/facilities/range?price=${price}`);
if(data?.hotels) {
  setlist(data.hotels);
}
  }

 

      const handlechecklist=async()=>{
const {data}=await axios.get(`/api/facilities/search?val=${checklist}`);
if(data?.hotels){
  setlist(data.hotels);
}
      }

      useEffect(()=>{
        if(checklist)
        handlechecklist();
      },[checklist]);

  return (
    <>
    
        <Header1/>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Filters price={price} setprice={setprice} handleprice={handleprice} checklist={checklist} setchecklist={setchecklist} handlechecklist={handlechecklist}/>
          </div>
          <div className="col-span-9">
      {list.length>0 ? list.map((e)=>{
        return ( <div className="m-5 " key={e._id}>
        <Hotel e={e}/>
        </div>

        )
      }) 
      
      : 
          <div>
        <h3 className="text font-bold text-center border-4 border-red-500 text-3xl my-4 lg:mx-0 mx-6 p-3 rounded-lg ">   No Hotel found! Check All Hotels and then decide price range.</h3>  
            <div>
            {hotels ? hotels.map((e)=>{
        return ( <div className="m-5 " key={e._id}>
        <Hotel e={e}/>
        </div>

        )
      }) 
      
      : ""}

              </div>
            </div>
}
           
</div>
</div>
        </>

   
  )
}
export  async function getServerSideProps(ctx){
 const res=await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`);
 const data=await res.json();

  return {
    props:{
      hotels:data.hotels ? data.hotels : data.allhotels,
    }
  }
}
export default Hotels