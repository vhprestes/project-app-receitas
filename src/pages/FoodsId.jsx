import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/context';

// import { Container } from './styles';

function FoodsId() {
  const { setFetchId, fetchId } = useContext(Context);
  const [ingredientsArrayFood, setIngredientsArrayFood] = useState([]);
  const [urlYou, setUrl] = useState('');
  const { id } = useParams();
  const handleFetchIdFood = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    const responseIdArrayFood = dataJson.meals[0];
    const reduce = Object.entries(responseIdArrayFood).reduce((acc, item) => {
      if (item[0].includes('strIngredient')) {
        acc.push(item[1]);
      }
      return acc;
    }, []);
    setIngredientsArrayFood(reduce);
    setFetchId(responseIdArrayFood);
  };

  console.log(fetchId);
  useEffect(() => {
    handleFetchIdFood();
    setUrl(fetchId.strYoutube.replace('watch?v=', 'embed/'));
  }, []);
  return (
    <div>
      <div>
        <img
          src={ fetchId.strMealThumb }
          alt="foto-drink"
          data-testid="recipe-photo"
          className="details-img-drink"
        />
        <h1 data-testid="recipe-title">{fetchId.strMeal}</h1>
        <h2 data-testid="recipe-category">{fetchId.strCategory}</h2>
        <ol>
          {ingredientsArrayFood.map(
            (item, i) => item && (
              <li data-testid={ `${i}-ingredient-name-and-measure` } key={ i }>
                {item}
              </li>
            ),
          )}
          <p data-testid="instructions">{fetchId.strInstructions}</p>
        </ol>
        {fetchId ? (<iframe
          src={ urlYou }
          title="video"
        />) : (<p>ai pai para</p>)}
      </div>
    </div>
  );
}

export default FoodsId;
