import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import styled from 'styled-components';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Use icons instead of images
    setRecipes([
      {
        id: 1,
        name: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish',
        icon: 'spaghetti-bolognese',
      },
      {
        id: 2,
        name: 'Chicken Curry',
        description: 'A delicious curry with tender chicken',
        icon: 'chicken-curry',
      },
      {
        id: 3,
        name: 'Chocolate Cake',
        description: 'A rich, moist chocolate cake',
        icon: 'chocolate-cake',
      },
    ]);
  }, []);

  return (
    <Container>
      <h1>Recipe List</h1>
      <RecipeList recipes={recipes} />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

export default Home;
