import React, { useContext } from 'react';
import Context from '../context/context';

function Login() {
  const { disabledBtn, loginInput, handleChange } = useContext(Context);

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
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
