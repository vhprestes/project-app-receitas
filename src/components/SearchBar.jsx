import React, { useContext } from 'react';
import Context from '../context/context';

// import { Container } from './styles';

function SearchBar() {
  const { setRadios, handleSubmit, setInputSearch } = useContext(Context);
  const handleChanges = ({ target: { value } }) => {
    setInputSearch(value);
  };

  return (
    <div className="search-bar">
      <div className="radios">
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
      </div>
      <div className="pesquisa">
        <input
          type="text"
          id="input-search"
          className="input-search"
          name="inputSearch"
          data-testid="search-input"
          onChange={ handleChanges }
        />
        <button
          type="button"
          data-testid="exec-search-btn"
          className="buscar-btn"
          onClick={ handleSubmit }
        >
          Buscar

        </button>

      </div>
    </div>
  );
}

export default SearchBar;
