// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { recipes } from '@/data/recipes';

export default async function handler({ query }, res) {
  let url = `https://api.spoonacular.com/recipes/${query.id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`;

  let response,
    err = null;
  try {
    response = await fetch(url);
    response = await response.json();
  } catch (error) {
    console.error({ error });
    err = error;
  }

  res.status(200).json({ recipes: response, err });
  // res.status(200).json({ recipes: recipes, err });
}
