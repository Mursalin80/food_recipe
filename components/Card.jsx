import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  imgUrl,
  title,
  id,
  key,
  summary,
  sourceName,
  pricePerServing,
}) => {
  return (
    <div className="max-w-2xl mx-auto  hover:-translate-y-5 " key={key}>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 ">
        <Link href={`/recipes/${id}`}>
          <div className="relative">
            {/* <Image
            className="rounded-t-lg"
            src={imgUrl}
            alt="img"
            width={100}
            height={100}
          /> */}
            <img src={imgUrl} alt={title} className="rounded-t-lg w-full" />
            <div className="absolute bottom-1  left-0 bg-gray-200 opacity-40 my-2 w-full h-10 overflow-hidden">
              <p className="text-gray-950 font-bold  text-sm tracking-tight p-2  dark:text-white ">
                {title}
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col p-5">
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {summary.substr(0, 140)}
          </p>

          <div className=" grid grid-cols-2 text-gray-800   font-medium  text-sm ">
            <p className=" bg-slate-100 mr-1  px-5 py-1 rounded-sm text-center h-11 ">
              {sourceName}
            </p>
            <p className="bg-slate-100  px-5 py-1 rounded-sm text-center h-11 ">
              PricePerServing: ${pricePerServing}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
