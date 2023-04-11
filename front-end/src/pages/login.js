import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin, setToken, requestValidateToken } from '../helpers/axios';
import '../styles/login.css';
import logo from '../styles/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const isLogged = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        try {
          const tokenValid = await requestValidateToken({ token: user.token });
          if (tokenValid) return history.push('/customer/products');
        } catch (e) {
          console.log(e.message);
        }
      }
    };
    isLogged();
  }, [history]);

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

  const handleUserRole = (token, user) => {
    const { role, name, id } = user;
    const newUser = { name, email, role, token, id };
    localStorage.setItem('user', JSON.stringify(newUser));

    if (role === 'customer') history.push('/customer/products');
    if (role === 'seller') history.push('/seller/orders');
    if (role === 'administrator') history.push('/admin/manage');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { token, user } = await requestLogin('/login', { email, password });
      if (!token) {
        setUserNotFound(true);
      } else {
        setToken(token);
        handleUserRole(token, user);
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
    <div className="login-mobile">
      <img src={ logo } alt="img" className="img-login" />
      <form className="box-black">
        <label htmlFor="email-input" className="email">
          Email
          <input
            className="input-email"
            type="text"
            id="email-input"
            data-testid="common_login__input-email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="E-mail"
          />
        </label>
        
        <label htmlFor="password" className="senha">
          Senha
          <input
            className="input-senha"
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
          className="input-button"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
          name="Login"
          type="submit"
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          className="input-button"
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
        <p data-testid="common_login__element-invalid-email" className="alert">
          Email e/ou senha inválidos
        </p>
      )}
    </div>
  );
}

export default Login;
