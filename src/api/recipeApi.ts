import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

export const fetchRecipesByIngredient = async (ingredient: string) => {
  const response = await axios.get(`${BASE_URL}?i=${ingredient}`);
  return response.data.meals;
};
