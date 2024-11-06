import { useState } from 'react';
import { fetchRecipesByIngredient } from '../api/recipeApi';
import FilterSidebar from '../components/FliterSidebar';
import Modal from '../components/Model';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

  const handleSearch = async (ingredient: string) => {
    setSearchTerm(ingredient);
    setLoading(true);
    setError(null);

    try {
        const fetchedRecipes = await fetchRecipesByIngredient(ingredient);
        if (fetchedRecipes && fetchedRecipes.length > 0) {
            setRecipes(fetchedRecipes);
        } else {
            setRecipes([]);
            setError('No recipes found for this ingredient.');
        }
        } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to fetch recipes. Please try again.');
        } finally {
        setLoading(false);
        }
    };

    const handleCardClick = (recipe: any) => {
        setSelectedRecipe(recipe);
    };

    const closeModal = () => setSelectedRecipe(null);

    return (
    <div className="flex">
        <FilterSidebar onFilterChange={() => {}} />
        <main className="p-4 w-full">
            <SearchBar onSearch={handleSearch} />
            {searchTerm && (
            <p className="mt-2 text-lg font-semibold">
                Search results for: <span className="text-blue-500">{searchTerm}</span>
            </p>
            )}
            {error && <p className="mt-2 text-red-500">{error}</p>}
            {loading && <p className="mt-4 text-gray-500">Loading recipes...</p>}
            <div className="grid grid-cols-3 gap-4">
            {recipes.length > 0 ? (
                recipes.map((recipe: any) => (
                <RecipeCard
                    key={recipe.idMeal}
                    image={recipe.strMealThumb}
                    title={recipe.strMeal}
                    tags={['Quick', 'Easy']}
                    onClick={() => handleCardClick(recipe)}
                />
                ))
            ) : (
                !loading && <p className="mt-4 text-gray-500">No recipes found.</p>
            )}
            </div>
        </main>
        {selectedRecipe && (
            <Modal
            show={!!selectedRecipe}
            onClose={closeModal}
            recipe={{
                image: selectedRecipe.strMealThumb,
                title: selectedRecipe.strMeal,
                ingredients: ['Ingredient1', 'Ingredient2'],
                instructions: 'Some cooking instructions'
            }}
            />
        )}
        </div>
    );
};

export default Home;
