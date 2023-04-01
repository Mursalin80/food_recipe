// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from '@/data/veggi_data';

export default async function handler({ query }, res) {
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query.dish}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
  let response,
    err = null;
  try {
    response = await fetch(url);
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.error(error);
    err = error;
  }

  // res.status(200).json({ recipes: data.recipes, err });
  res.status(200).json({ recipes: response, err });
}
