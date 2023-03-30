import React from 'react';
import Popular from '../components/Popular';
import useSWR from 'swr';

const food = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/hello', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <span className="relative flex h-6 w-6 m-4 p-5 ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 ">
          ....
        </span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    );

  console.log({ data: data.data });

  // render data
  return (
    <div className="">
      {data.data.extendedIngredients.map((resip, i) => (
        <p>{resip.id} </p>
      ))}
    </div>
  );
};

export default food;
