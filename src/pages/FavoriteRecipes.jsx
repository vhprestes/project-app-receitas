import React from 'react';
import Header from '../components/Header';

// import { Container } from './styles';

function FavoritesRecipes() {
  const favorite = 'Favorite Recipes';
  const bool = false;
  return (
    <Header title={ favorite } hasSearch={ bool } />
  );
}

export default FavoritesRecipes;
