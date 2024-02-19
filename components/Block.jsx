import Image from "next/image";

const Block = ({ title, para }) => {
  return (
    <div className='flex flex-col lg:flex-row lg:border-r border-gray-300 lg:w-60 h-full lg:items-center px-3 sm:px-0 sm:w-full sm:flex'>
      <Image src={'/logo.png'} alt="demo" width={200} height={400} className="w-10 lg:mr-5 sm:mr-0" />

      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-400 text-xs">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;
