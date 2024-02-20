import Header2 from "@/components/Header2";
import Header1 from "../components/Header1";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";


 const Home = () => {
  return (
    <div>
      <Head>
      <title>OYO:India&apos;s Best Hotel Booking Site.</title>
    
      </Head>
     <Header1/>
     <Header2/>
     <Header3/>
     <div className="lg:mx-20 mx-2">
     <div className=" my-10">
      <Image src={'/rkul4n6p.png'} alt="banner1" width={200} height={200}  className="lg:h-80 h-40 w-full "  quality={100}/>
     </div>

     <div >
     <Image src={'/banner2.avif'} alt="banner1" width={70} height={70} className="lg:h-60  h-30 w-full " />
     </div>

     <Header4/>
     </div>
     <Footer/>
    </div>
  )
}

export default Home;
