import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  recipe: { image: string; title: string; ingredients: string[]; instructions: string };
}

const Modal: React.FC<ModalProps> = ({ show, onClose, recipe }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-3/4 md:w-1/2 p-4">
            <button onClick={onClose} className="text-red-500 float-right">X</button>
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="mt-2"><strong>Ingredients:</strong></p>
            <ul>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
            </ul>
            <p className="mt-2"><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
        </div>
    );
};

export default Modal;
