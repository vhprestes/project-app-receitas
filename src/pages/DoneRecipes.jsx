import React from 'react';
import Header from '../components/Header';

// import { Container } from './styles';

function DoneRecipes() {
  const done = 'Done Recipes';
  const bool = false;
  return (
    <Header title={ done } hasSearch={ bool } />
  );
}

export default DoneRecipes;
