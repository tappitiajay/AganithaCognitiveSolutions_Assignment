import React, { useState } from 'react';

interface FilterProps {
    onFilterChange: (filters: { cuisine: string; mealType: string }) => void;
}

const FilterSidebar: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [cuisine, setCuisine] = useState<string>('');
    const [mealType, setMealType] = useState<string>('');
    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCuisine(e.target.value);
    };

    const handleMealTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMealType(e.target.value);
    };

    const handleApplyFilters = () => {
        onFilterChange({ cuisine, mealType });
        setIsFiltered(true);
    };

    return (
        <div className="p-4 border-r w-64">
        <h3 className="font-semibold mb-2">Filters</h3>

        <div className="mb-4">
            <label htmlFor="cuisine" className="block mb-1">Cuisine:</label>
            <select
            id="cuisine"
            className="w-full p-2 border"
            onChange={handleCuisineChange}
            >
            <option value="">All</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            </select>
        </div>

        <div className="mb-4">
        <label htmlFor="mealType" className="block mb-1">Meal Type:</label>
        <select
            id="mealType"
            className="w-full p-2 border"
            onChange={handleMealTypeChange}
            >
            <option value="">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            </select>
        </div>

        <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            onClick={handleApplyFilters}
        >
            Apply Filters
        </button>

        {isFiltered && (
            <div className="mt-4 text-green-600">
            Filters Applied: {cuisine && `Cuisine: ${cuisine}, `} {mealType && `Meal Type: ${mealType}`}
            </div>
        )}
        </div>
    );
};

export default FilterSidebar;
