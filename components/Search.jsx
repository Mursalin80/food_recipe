import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Router from 'next/router';

const Search = () => {
  const [txtIn, setTxtIn] = useState('');
  const handleSubmit = (e) => {
    Router.push(`/search?dish=${txtIn}`);
  };
  return (
    <div>
      <div className="flex ">
        <input
          value={txtIn}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for dish..."
          type="text"
          name="search"
          onChange={(e) => setTxtIn(e.target.value)}
        />
        <FaSearch
          className=" rounded-xl text-5xl p-2 border-2 hover:cursor-pointer hover:bg-blue-400"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Search;
