import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Header1 = () => {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const key = Cookies.get('user');
    if (key) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth]);

  const handleLogout = () => {
    Cookies.remove('user');
    setAuth(false);
    router.push('/');
  };

  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center  px-4 flex-col sm:flex-row  '>
   

       <div className='flex items-center'>
       <Image src="/logo.png" alt="logo" width={200} height={200}  className='w-16 h-16 sm:w-10 sm:h-10 lg:w-24 lg:h-24 xl:w-28 xl:h-28' />

      
         <div className='flex '>
          <Block title={'Become a member'} para={'Additional 10% Off.'} />
          <Block title={'OYO for business'} para={'Trusted By 10,000 corporates'} />
          <Block title={'List your property.'} para={'Start earning in 30 mins'} />
          <Block title={'9876591795'} para={'Call to Book now!'} />
        </div>
      </div>
      <>
      <div className='flex  lg:mr-40 h-20 py-5'>
        {auth ? (
          <h3 className='font-bold text-red-400 lg:text-lg sm:text-2xl sm:py-3 cursor-pointer hover:bg-green-200 ' onClick={handleLogout}>
            Logout
          </h3>
        ) : (
          <Link href={'/login'}>
            <h3 className='sm:py-3 font-bold text-red-400 lg:text-3xl   cursor-pointer hover:bg-green-200 '>Login/Sign Up</h3>
          </Link>
        )}
      </div>
      </>
    </div>
  );
};

export default Header1;
