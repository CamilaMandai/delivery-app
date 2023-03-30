import React from 'react';

function FormsAdm() {
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
            placeholder="********"
          />
        </label>
        <select data-testid="admin_manage__select-role">
          <option value="clients">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="button"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default FormsAdm;
