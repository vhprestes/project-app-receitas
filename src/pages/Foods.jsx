import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/context';

function Foods() {
  const history = useHistory();
  const { foodsResponse } = useContext(Context);
  const bool = true;
  const foods = 'Foods';

  useEffect(() => {
    const newResposeFoods = Object.entries(foodsResponse);
    console.log(newResposeFoods);
    if (newResposeFoods.length === 1) {
      history.push(`/foods/${newResposeFoods[0][1][0].idMeal}`);
    }
  }, [foodsResponse, history]);

  return (
    <div>
      <Header title={ foods } hasSearch={ bool } />
    </div>
  );
}

export default Foods;
