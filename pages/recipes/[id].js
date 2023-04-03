import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import { BiError } from 'react-icons/bi';
import { motion as m } from 'framer-motion';
import useSWR from 'swr';
import Loader from '@/components/Loader';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '@/components/Card';

const id = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  let { data, error, isLoading } = useSWR(`/api/recipes/${id}`, fetcher);

  if (isLoading)
    return (
      <div className="flex items-center justify-center m-5 p-5 border-gray-200">
        <Loader />
      </div>
    );
  if (error || data?.recipes.status === 'failure') {
    return (
      <div className=" w-full container mx-auto  ">
        <Navigation />
        <h3 className="text-lg text-yellow-500  mx-2 mt-5 p-5 text-center bg-red-900 rounded-3xl flex">
          <BiError className="text-3xl mr-3 " />
          <>{data?.recipes.message || 'Failure to Load.'}</>
        </h3>
      </div>
    );
  }
  let { image, summary, title, pricePerServing, sourceName, winePairing } =
    data.recipes;

  return (
    <div className=" w-full ">
      <Navigation />
      <m.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        exit={{ opacity: 1 }}
      >
        <div className="container mx-auto  ">
          <div className="w-2/3 mx-auto flex flex-col lg:flex-row my-5 p-2">
            <div className="w-2/5  p-2 bg-slate-100 border-gray-300 border rounded-2xl  flex flex-col">
              <h3 className="text-lg text-gray-600 uppercase mb-3 mt-1 p-2">
                {title}
              </h3>
              <img src={image} className="" />
            </div>
            <div className="w-3/5 bg-slate-200 p-3 ml-1 border-gray-300 border rounded-2xl text-gray-500 ">
              <p className="" dangerouslySetInnerHTML={{ __html: summary }}></p>
              <div className="divide-x-2 grid grid-cols-2 text-center my-2 p-2 bg-cyan-600 w-full rounded-lg text-gray-700">
                <p className="uppercase text-lg">Price: ${pricePerServing}</p>
                <p className="uppercase text-lg">Source: {sourceName}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-gray-600 uppercase mb-3 mt-1 p-2">
              {winePairing?.productMatches?.title}
            </h3>
            <Splide
              options={{
                perPage: 4,
                arrows: true,
                pagination: false,
                drag: 'free',
                autoplay: true,

                direction: 'rtl',
                easing: 'linear',
              }}
            >
              <div className="mx-auto">
                {winePairing?.productMatches?.map((r, i) => (
                  <SplideSlide key={i}>
                    <div className="m-2">
                      <Card
                        imgUrl={r.imageUrl}
                        title={r.title}
                        id={r.id}
                        summary={r.description}
                        sourceName={r.averageRating}
                        pricePerServing={r.price}
                      />
                    </div>
                  </SplideSlide>
                ))}
              </div>
            </Splide>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default id;
