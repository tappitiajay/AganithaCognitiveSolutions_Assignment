import React from 'react';

interface RecipeCardProps {
  image: string;
  title: string;
  tags: string[];
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title, tags, onClick }) => (
    <div 
        className="border rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
        onClick={onClick}
    >
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex flex-wrap mt-2">
            {tags.map(tag => (
            <span key={tag} className="text-sm bg-gray-200 rounded-full px-2 py-1 m-1">
                {tag}
            </span>
            ))}
        </div>
        </div>
    </div>
);

export default RecipeCard;
