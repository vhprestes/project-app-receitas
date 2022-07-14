import React from 'react';
import Header from '../components/Header';

function Foods() {
  const foods = 'Foods';
  const bool = true;
  return (
    <div>
      <Header title={ foods } hasSearch={ bool } />
    </div>
  );
}

export default Foods;
