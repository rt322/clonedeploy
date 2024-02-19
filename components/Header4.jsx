'use client'

import Image from "next/image"

//where user interaction is there ,we use use client
const Header4 = () => {
  return (
   <div className="flex justify-between items-center border my-14 border-gray-300 rounded-lg flex-col sm:flex-row">
    <div className="flex lg:my-10 my-0 items-center">
<Image src={'/fire.jpg'} alt="fire" width={200} height={200} className="h-20 w-20 rounded-full"/>

<div>
<p className="font-bold">Get Access to Exclusive deals.</p>
<p>Only the best deals reach your inbox.</p>
</div>
    </div>
    <div className="flex pb-3">
        <input type="email" className="px-6 lg:mr-5 mr-5 lg:w-80 w-60  h-16 rounded-lg  lg:py-2 py-0 border border-gray-300 " placeholder="rt@gmail.com" />
        <button type="submit" className="mr-3 rounded-full w-24 h-14 bg-red-500 text-xl text-white cursor-pointer">
Notify
        </button>
    </div>
   </div>
  )
}

export default Header4