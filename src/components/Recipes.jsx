import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/context';

// import { Container } from './styles';

function Recipes() {
  const { setTwelveFood, setTwelveDrink, twelveFood, twelveDrink } = useContext(Context);
  const history = useHistory();

  const twelveFetchFood = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    const json = dataJson.meals.filter((_, i) => i < '12');
    setTwelveFood(json);
  };

  const twelveFetchDrink = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    const json = dataJson.drinks.filter((_, i) => i < '12');
    setTwelveDrink(json);
  };

  useEffect(() => {
    if (history.location.pathname === '/foods') {
      twelveFetchFood();
    }
    if (history.location.pathname === '/drinks') {
      twelveFetchDrink();
    }
  }, []);
  return (
    <div>
      <div>
        {twelveFood.map((item, i) => (
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
      {twelveDrink.map((item, i) => (
        <div data-testid={ `${i}-recipe-card` } key={ i }>
          <img
            src={ item.strDrinkThumb }
            alt="foto-receita"
            data-testid={ `${i}-card-img` }
          />
          <h2 data-testid={ `${i}-card-name` }>{item.strDrink}</h2>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
