// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  let response,
    err = null;
  try {
    response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
    );
    response = await response.json();
  } catch (error) {
    console.error(error);
    err = error;
  }

  res.status(200).json({ data: response.recipes[0], err });
}
