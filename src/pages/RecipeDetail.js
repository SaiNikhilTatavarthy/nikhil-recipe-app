import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();

  // Fetch recipe details by id here (for simplicity, hardcoded)
  const recipe = {
    id,
    name: 'Spaghetti Bolognese',
    description: 'A classic Italian pasta dish with ground beef and tomato sauce.',
    ingredients: ['Pasta', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic'],
    instructions: 'Cook pasta. Sauté onion and garlic. Add ground beef, then tomato sauce. Combine with pasta.',
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{recipe.name}</h1>
      <h3>Description:</h3>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
