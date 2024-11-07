import axios from 'axios';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeResponse {
  meals: Recipe[];
}
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

export const fetchRecipesByIngredient = async (ingredient: string) => {
  const response = await axios.get<RecipeResponse>(`${BASE_URL}?i=${ingredient}`);
  return response.data.meals;
};
