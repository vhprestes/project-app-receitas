import React, { useContext } from 'react';
import InputSearch from './InputSearch';
import Context from '../context/context';

// import { Container } from './styles';

function SearchBar() {
  const { setRadios, handleSubmit } = useContext(Context);

  return (
    <div>
      <label htmlFor="radio-ingredient">
        Ingrediente:
        <input
          type="radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          name="radio"
          onChange={ () => setRadios('ingredient') }
        />
      </label>
      <label htmlFor="radio-name">
        Nome:
        <input
          type="radio"
          id="name"
          data-testid="name-search-radio"
          name="radio"
          onChange={ () => setRadios('name') }
        />
      </label>
      <label htmlFor="first-letter">
        Primeira letra:
        <input
          type="radio"
          id="firstLetter"
          data-testid="first-letter-search-radio"
          name="radio"
          onChange={ () => setRadios('firstLetter') }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSubmit }
      >
        Buscar

      </button>
      <InputSearch />
    </div>
  );
}

export default SearchBar;
