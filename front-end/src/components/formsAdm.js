import React, { useState, useEffect } from 'react';

function FormsAdm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const validateForms = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MAGIC_PASSWORD = 6;
      const MAGIC_NAME = 12;
      return (regex
        .test(email) && password.length >= MAGIC_PASSWORD && name.length >= MAGIC_NAME);
    };
    if (validateForms()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, name]);

  return (
    <div>
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="admin_manage__input-name"
            name="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            placeholder="Nome e sobrenome"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="admin_manage__input-email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="admin_manage__input-password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="********"
          />
        </label>
        <select data-testid="admin_manage__select-role">
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          disabled={ isDisabled }
          type="button"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default FormsAdm;
