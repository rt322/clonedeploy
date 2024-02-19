import React from 'react'

const Header2 = () => {
    const List=[
        {
name:'Banglore'
        },
        {
     name:'Kolkata'
       },
      {
         name:'Delhi'
                },
   {
      name:'Hyderabad'
              },   
              {
                name:'Mumbai'
                        },                       

    ]
  return (
   <div>
    <div className='flex px-10 py-3 bg-gray-300 justify-between '>
    {
List.map((e)=>{
return (
    <span key={e.name}>{e.name}</span>
)
}
)
    }
    </div>
    </div>
  )
}

export default Header2