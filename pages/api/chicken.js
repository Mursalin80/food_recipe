// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { chicken } from '@/data/chicken_data';

export default async function handler(req, res) {
  let response,
    err = null;
  try {
    response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&tags=chicken,desser&apiKey=${process.env.SPOONACULAR_API_KEY}`
    );
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.error(error);
    err = error;
  }

  if (response.status === 'failure') {
    return res.status(200).json({ recipes: chicken.recipes, err });
  } else {
    return res.status(200).json({ recipes: response.recipes, err });
  }
}
