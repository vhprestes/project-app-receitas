import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/context';

// import { Container } from './styles';

function Drinks() {
  const drinks = 'Drinks';
  const bool = true;
  const history = useHistory();
  const { drinksResponse } = useContext(Context);

  useEffect(() => {
    const newResposeDrinks = Object.entries(drinksResponse);
    console.log(newResposeDrinks);
    if (newResposeDrinks.length === 1) {
      history.push(`/drinks/${newResposeDrinks[0][1][0].idDrink}`);
    }
  }, [drinksResponse, history]);

  return (
    <div>
      <Header title={ drinks } hasSearch={ bool } />
    </div>
  );
}

export default Drinks;
