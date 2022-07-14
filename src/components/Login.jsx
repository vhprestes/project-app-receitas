import React from 'react';

function Login() {
  return (
    <div>
      <div>
        <form>
          <input type="email" data-testid="email-input" />
          <input type="password" data-testid="password-input" />
          <button type="button" data-testid="login-submit-btn">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
