import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function ProviderRecipes({ children }) {
  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
  });
  const [disabledBtn, setDisabledBtn] = useState(true);

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

  const contextValue = {
    loginInput,
    handleChange,
    disabledBtn,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

ProviderRecipes.propTypes = { children: PropTypes.node.isRequired };

export default ProviderRecipes;
