import React from 'react';
import styled from 'styled-components';
import { GiNoodles, GiRoastChicken, GiCakeSlice } from 'react-icons/gi';  // Updated icons
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'spaghetti-bolognese':
        return <GiNoodles size={100} color="#F8B400" />;
      case 'chicken-curry':
        return <GiRoastChicken size={100} color="#F8B400" />;
      case 'chocolate-cake':
        return <GiCakeSlice size={100} color="#F8B400" />;
      default:
        return <GiNoodles size={100} color="#F8B400" />;  // Default icon
    }
  };

  return (
    <Card>
      <IconContainer>{getIcon(recipe.icon)}</IconContainer>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </Card>
  );
};

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  h2 {
    margin-top: 0.5rem;
  }
  a {
    text-decoration: none;
    color: #f8b400;
    margin-top: 0.5rem;
    display: inline-block;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 1rem;
`;

export default RecipeCard;
