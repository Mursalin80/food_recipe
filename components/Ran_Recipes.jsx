import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useSWR from 'swr';

import Card from './Card';
import Spinner from './Spinner';

const Ran_Recipes = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  let { data, error, isLoading } = useSWR('/api/veggi', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return;
  <div className="my-3 ">
    <Spinner />;
  </div>;

  if (!data.recipes) {
    return <Card imgUrl="Not Found!" title="Not Found" id={0} />;
  }
  // render data
  return (
    <div className=" container mx-auto my-2 p-2">
      <h1 className=" text-2xl text-cyan-700 uppercase m-1 p-2">
        Vegitrian Recipes.
      </h1>

      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          autoplay: true,
          type: 'loop',
          easing: 'linear',
        }}
      >
        {data.recipes?.map((r, i) => (
          <SplideSlide key={i}>
            <div className="m-2">
              <Card
                imgUrl={r.image}
                title={r.title}
                id={r.id}
                summary={r.summary}
                sourceName={r.sourceName}
                pricePerServing={r.pricePerServing}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Ran_Recipes;
