// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { chicken } from '@/data/chicken_data';
import { american } from '@/data/american';
import { italians } from '@/data/italian';
import { japanese } from '@/data/japanese';
import { thai } from '@/data/thai';

export default async function handler({ query }, res) {
  let response,
    err = null;
  try {
    response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&cuisine=${query.dish}`
    );
    response = await response.json();
  } catch (error) {
    console.error({ error });
    err = error;
  }

  if (response.status === 'failure') {
    switch (query.dish) {
      case 'American':
        return res.status(200).json({ recipes: american.results, err });
        break;
      case 'Italian':
        return res.status(200).json({ recipes: italians.results, err });
        break;
      case 'Thai':
        return res.status(200).json({ recipes: thai.results, err });
        break;
      case 'Japanese':
        return res.status(200).json({ recipes: japanese.results, err });
        break;
      case 'American':
        return res.status(200).json({ recipes: american.results, err });
        break;

      default:
        break;
    }
  } else {
    return res.status(200).json({ recipes: response.results, err });
  }
}
