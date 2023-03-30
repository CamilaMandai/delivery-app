import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../helpers/axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

  const history = useHistory();

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
    setUserNotFound(false);
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { token } = await requestLogin('/login', { email, password });

      if (!token) {
        setUserNotFound(true);
      } else {
        history.push('/customer/products');
      }
    } catch (error) {
      setUserNotFound(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    history.push('/register');
  };

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
          data-testid="common_login__button-login"
          disabled={ isDisabled }
          name="Login"
          type="submit"
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          name="Cadastra-se"
          type="button"
          onClick={ handleRegister }
        >
          Cadastra-se
        </button>
      </form>
      {userNotFound
      && (
        <p data-testid="common_login__element-invalid-email">
          Email e/ou senha inválidos
        </p>
      )}
    </div>
  );
}

export default Login;