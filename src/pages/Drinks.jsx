import React from 'react';
import Header from '../components/Header';

// import { Container } from './styles';

function Drinks() {
  const drinks = 'Drinks';
  const bool = true;
  return (
    <div>
      <Header title={ drinks } hasSearch={ bool } />
    </div>
  );
}

export default Drinks;
