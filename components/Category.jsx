import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import Link from 'next/link';

const Category = () => {
  return (
    <div className="flex mx-auto my-3 items-center justify-center gap-x-16">
      <Link
        href="/cuisine/Italian "
        className="hover:text-violet-500 hover:translate-y-1 opacity-50 hover:opacity-90 hover:rounded-3xl p-2 hover:bg-slate-200 "
      >
        <FaPizzaSlice className="text-3xl mx-2 " />
        <h4 className="text-lg">Italian</h4>
      </Link>
      <Link
        href="/cuisine/American"
        className="hover:text-violet-500 hover:translate-y-1 opacity-50 hover:opacity-90 hover:rounded-3xl p-2 hover:bg-slate-200"
      >
        <FaHamburger className="text-3xl mx-2" />
        <h4 className="text-lg">American</h4>
      </Link>
      <Link
        href="/cuisine/Thai"
        className="hover:text-violet-500 hover:translate-y-1 opacity-50 hover:opacity-90 hover:rounded-3xl p-2 hover:bg-slate-200"
      >
        <GiNoodles className="text-3xl mx-2" />
        <h4 className="text-lg">Thai</h4>
      </Link>
      <Link
        href="/cuisine/Japanese"
        className="hover:text-violet-500 hover:translate-y-1 opacity-50 hover:opacity-90 hover:rounded-3xl p-2 hover:bg-slate-200"
      >
        <GiChopsticks className="text-3xl mx-2" />
        <h4 className="text-lg">Japanese</h4>
      </Link>
    </div>
  );
};

export default Category;
