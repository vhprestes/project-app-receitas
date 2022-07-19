import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/context';

// import { Container } from './styles';

function FoodsId() {
  const { setFetchId } = useContext(Context);
  const { id } = useParams();
  const handleFetchIdFood = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    setFetchId(dataJson);
  };

  useEffect(() => {
    handleFetchIdFood();
  }, []);
  return (
    <div />
  );
}

export default FoodsId;
