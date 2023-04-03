import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import { motion as m } from 'framer-motion';
import useSWR from 'swr';
import Loader from '@/components/Loader';
import Card_dish from '@/components/Card_dish';

const Dish = () => {
  const router = useRouter();
  const { dish } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  let { data, error, isLoading } = useSWR(`/api/cuisine/${dish}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center m-5 p-5 border-gray-200">
        <Loader />
      </div>
    );

  return (
    <div className="w-full bg-gray-100 h-full">
      <div className="  relative container mx-auto ">
        <Navigation />
        <m.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          exit={{ opacity: 1 }}
        >
          <div className=" container mx-auto my-3 p-5">
            <h1 className=" text-2xl text-cyan-700 m-2 p-2">
              Serving Dishes:{' '}
              <span className="uppercase underline "> {dish}</span>
            </h1>

            <div className="m-2 flex flex-row flex-wrap ">
              {data.recipes?.map((r, i) => (
                <div
                  className="max-w-2xl h-96 w-80 mx-4 hover:-translate-y-5 hover:opacity-80"
                  key={i}
                >
                  <Card_dish imgUrl={r.image} title={r.title} id={r.id} />
                </div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Dish;
