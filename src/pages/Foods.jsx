import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/context';

function Foods() {
  const history = useHistory();
  const { foodsResponse } = useContext(Context);
  const bool = true;
  const foods = 'Foods';
  console.log('sou eu', foodsResponse);

  useEffect(() => {
    if (foodsResponse.length === 1) {
      history.push(`/foods/${foodsResponse[0].idMeal}`);
    }
  }, [foodsResponse, history]);

  return (
    <div>
      <Header title={ foods } hasSearch={ bool } />
      <div>
        {foodsResponse.map((item, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <img
              src={ item.strMealThumb }
              alt="foto-receita"
              data-testid={ `${i}-card-img` }
            />
            <h2 data-testid={ `${i}-card-name` }>{item.strMeal}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
