import React from 'react';
import Image from 'next/image';

const Card = ({ imgUrl, title, id, key }) => {
  return (
    <div className="h-full w-full " key={key}>
      <div className="bg-white shadow-md border border-gray-200 rounded-xl max-w-sm dark:bg-gray-800 dark:border-gray-700 ">
        <div className="relative">
          {/* <Image
            className="rounded-t-lg"
            src={imgUrl}
            alt="img"
            width={100}
            height={100}
          /> */}
          <img src={imgUrl} alt={imgUrl} className="rounded-t-lg w-full" />
          <p className="text-gray-600 font-bold absolute top-1 left-2   text-sm tracking-tight p-1 my-1 dark:text-white ">
            Id: {id}
          </p>
        </div>

        <div className="flex flex-col  w-full opacity-50">
          <p className="text-gray-950 font-bold  text-sm tracking-tight p-1 my-1 dark:text-white ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
