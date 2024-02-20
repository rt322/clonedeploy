import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg lg:h-95 w-full lg:m-5 m-8">
      <div className="flex">
        <Image src={e?.banner} alt="hotel banner" width={200} height={200} aria-label="banner" className="w-96 h-60 mr-3" />

        <div className="grid grid-rows-3">
          {e
            ? e.gallery?.map((ele) => {
                return <Image key={ele} src={ele} alt="hotel gallery" aria-label="gallery" width={200} height={200} className="lg:w-28" />;
              })
            : ""}
        </div>

        <div className="ml-20">
          <h2 className="font-bold text-2xl">{e?.name}</h2>

          <p className="my-5 text-lg">{e?.description}</p>

          <p className="text-2xl my-5">
            <span className="font-bold">Facilities:</span>
            <ul className="flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li key={ele.name} className="mr-10 mb-3">
                        <span className="m-3">
                          <Image src={ele.img} alt="hotelimg" width={200} height={200} aria-label="image" className="w-20 h-20 rounded-full" />
                        </span>
                        <span ml-5>{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </p>
          <div className="flex items-center mb-3">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: Rs {e?.price}</button>
            <Link href={`/hotels/${e?._id}`} className="text-xl font-bold text-red-600 ml-10">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
