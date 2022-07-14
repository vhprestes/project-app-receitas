import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/context';

function Login() {
  const { disabledBtn, loginInput, handleChange } = useContext(Context);
  const history = useHistory();

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email: loginInput.email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    history.push('/foods');
  };

  return (
    <div>
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            value={ loginInput.email }
            onChange={ handleChange }
            name="email"
          />
          <input
            type="password"
            data-testid="password-input"
            value={ loginInput.password }
            onChange={ handleChange }
            name="password"
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabledBtn }
            onClick={ handleSubmit }
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
