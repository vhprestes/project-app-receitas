import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/context';

// import { Container } from './styles';

function Drinks() {
  const drinks = 'Drinks';
  const bool = true;
  const history = useHistory();
  const { drinksResponse } = useContext(Context);

  useEffect(() => {
    if (drinksResponse.length === 1) {
      history.push(`/drinks/${drinksResponse[0].idDrink}`);
    }
  }, [drinksResponse, history]);

  return (
    <div>
      <Header title={ drinks } hasSearch={ bool } />
      <div>
        {drinksResponse.map((item, i) => (
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
      <Footer />
    </div>
  );
}

export default Drinks;
