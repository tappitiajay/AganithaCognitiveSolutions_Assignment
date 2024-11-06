import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (ingredient: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        if (input.trim() === '') {
        setErrorMessage('Please enter a valid ingredient.');
        } else {
        setErrorMessage('');
        onSearch(input);
        setInput('');
        }
    };

    return (
        <div className="flex items-center mb-4">
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-l px-4 py-2 w-full"
            placeholder="Enter an ingredient"
        />
        <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
            Search
        </button>
        {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        </div>
    );
};

export default SearchBar;
