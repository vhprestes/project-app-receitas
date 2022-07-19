import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/context';

// import { Container } from './styles';

function DrinkId() {
  const { setFetchIdDrink } = useContext(Context);
  const { id } = useParams();
  const handleFetchIdDrink = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    setFetchIdDrink(dataJson);
  };

  useEffect(() => {
    handleFetchIdDrink();
  }, []);
  return (
    <div />
  );
}

export default DrinkId;
