import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const verifyLogin = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MAGIC_NUMBER = 6;
      return (regex.test(email) && password.length >= MAGIC_NUMBER);
    };
    if (verifyLogin()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="common_login__input-email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            data-testid="common_login__input-password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="Senha"
          />
        </label>
        <button
          className="login-btn"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
          name="Login"
          type="button"
        >
          Login
        </button>
        <button
          className="registre-se"
          data-testid="common_login__button-register"
          name="Cadastra-se"
          type="button"
        >
          Cadastra-se
        </button>
      </form>
    </div>
  );
}

export default Login;
