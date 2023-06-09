import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestCreateUser } from '../helpers/axios';
import '../styles/register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [userFound, setUserFound] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const verifyLogin = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MAGIC_NUMBER = 6;
      const TWELVE = 12;
      return (regex.test(email) && password.length >= MAGIC_NUMBER
      && name.length >= TWELVE);
    };
    if (verifyLogin()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setUserFound(false);
  }, [email, password, name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRegister = await requestCreateUser('/register', { email, name, password });
      console.log(newRegister);
      if (newRegister.token) {
        const { token, user } = newRegister;
        localStorage.setItem('user', JSON.stringify({ ...user, token }));
        history.push('/customer/products');
      } else {
        setUserFound(true);
      }
    } catch (error) {
      setUserFound(true);
    }
  };

  return (
    <div className="login-mobile-one">
      <form className="box">
        <h1 className="register">
          Cadastro
        </h1>
        <label htmlFor="nome" className="register-name">
          Nome
          <input
            className="input-name"
            type="text"
            id="nome"
            data-testid="common_register__input-name"
            name="nome"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email" className="register-email">
          Email
          <input
            className="input-email"
            id="email"
            type="email"
            data-testid="common_register__input-email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password" className="register-senha">
          Senha
          <input
            className="input-senha"
            id="password"
            type="password"
            data-testid="common_register__input-password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="Senha"
          />
        </label>
        <button
          className="register-button"
          data-testid="common_register__button-register"
          name="Cadastra-se"
          type="submit"
          disabled={ isDisabled }
          onClick={ handleSubmit }
        >
          Cadastrar
        </button>
      </form>
      {userFound
      && (
        <p data-testid="common_register__element-invalid_register" className="alerta">
          Você já possui um cadastro
        </p>
      )}
    </div>
  );
}

export default Register;
