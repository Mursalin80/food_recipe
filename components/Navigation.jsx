import React from 'react';
import Category from '@/components/Category';
import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';

const Navigation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex ">
        <div className="absolute top-0 left-0 m-1 flex rounded-xl w-30 h-7">
          <Link href="/" className="flex hover:opacity-50 hover:translate-x-1">
            <Image
              className="p-1  "
              src="/next.svg"
              alt="Next.js Logo"
              width={80}
              height={20}
              priority
            />
            <Image
              className="p-1"
              src="/thirteen.svg"
              alt="13"
              width={25}
              height={15}
              priority
            />
          </Link>
        </div>
        <h1 className=" text-9xl text-cyan-900 uppercase m-3 p-5">
          Hello from Next.js
        </h1>
      </div>
      <div className="mx-auto">
        <Search />
      </div>

      <Category />
    </div>
  );
};

export default Navigation;
