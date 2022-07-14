import React from 'react';
import InputSearch from './InputSearch';

// import { Container } from './styles';

function SearchBar() {
  return (
    <div>
      <label htmlFor="radio-ingredient">
        Ingrediente:
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="radio-ingredient"
        />
      </label>
      <label htmlFor="radio-name">
        Nome:
        <input
          type="radio"
          data-testid="name-search-radio"
          name="radio-name"
        />
      </label>
      <label htmlFor="radio-name">
        Primeira letra:
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="radio-name"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar

      </button>
      <InputSearch />
    </div>
  );
}

export default SearchBar;
