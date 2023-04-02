import useSWR from 'swr';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Card_dish from '@/components/Card_dish';

import Spinner from '@/components/Spinner';

const search = () => {
  const { query } = useRouter();
  let dish = query?.dish;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  let { data, error, isLoading } = useSWR(`/api/dish_ser/:${dish}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center m-5 p-5 border-gray-200">
        <Spinner />
      </div>
    );

  return (
    <div className="w-full bg-gray-100 h-full">
      <div className="  relative container mx-auto ">
        <Navigation />
        <div className=" container mx-auto my-3 p-5">
          <h1 className=" text-2xl text-cyan-700 uppercase m-2 p-2">
            Total {dish + ': ' + data.recipes?.number}
          </h1>

          <div className="m-2 flex flex-row flex-wrap ">
            {data.recipes?.results.map((r, i) => (
              <div
                className="max-w-2xl h-96 w-80 mx-4 hover:-translate-y-5 hover:opacity-80"
                key={i}
              >
                <Card_dish imgUrl={r.image} title={r.title} id={r.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
