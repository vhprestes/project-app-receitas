import React, { useContext } from 'react';
import Context from '../context/context';

function InputSearch() {
  const { setInputSearch } = useContext(Context);
  const handleChanges = ({ target: { value } }) => {
    setInputSearch(value);
  };
  return (
    <div>
      <input
        type="text"
        id="input-search"
        className="input-search"
        name="inputSearch"
        data-testid="search-input"
        onChange={ handleChanges }
      />
    </div>
  );
}

export default InputSearch;
