import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const RecipeList = ({ recipes }) => {
  return (
    <Grid>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export default RecipeList;
