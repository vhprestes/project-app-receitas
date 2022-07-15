import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function ProviderRecipes({ children }) {
  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
  });
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [radios, setRadios] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setLogin((oldState) => ({ ...oldState, [name]: value }));
    const tamMin = 6;
    const regex = /\w+@[a-z]+.com/g;
    if (loginInput.email.match(regex) && loginInput.password.length >= tamMin) {
      setDisabledBtn(false);
    } else {
      return setDisabledBtn(true);
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      if (radios === 'ingredient') {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearch}`;
        const getFetch = await fetch(url);
        const dataJson = await getFetch.json();
        return dataJson;
      }
      if (radios === 'name') {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`;
        const getFetch = await fetch(url);
        const dataJson = await getFetch.json();
        return dataJson;
      }
      if (radios === 'firstLetter' && inputSearch.length === 1) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch}`;
        const getFetch = await fetch(url);
        const dataJson = await getFetch.json();
        return dataJson;
      }
      if (radios === 'firstLetter' && inputSearch.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      return null;
    };
    getRecipes();
  }, [inputSearch, radios]);

  const contextValue = {
    loginInput,
    handleChange,
    disabledBtn,
    setRadios,
    radios,
    setInputSearch,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

ProviderRecipes.propTypes = { children: PropTypes.node.isRequired };

export default ProviderRecipes;
