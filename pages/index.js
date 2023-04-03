import Head from 'next/head';
import Ran_Recipes from '../components/Ran_Recipes';
import Chicken from '@/components/Chicken';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-gray-100 h-full">
        <div className="  relative container mx-auto ">
          <Navigation />
          <Ran_Recipes />
          <Chicken />
        </div>
      </main>
    </>
  );
}
