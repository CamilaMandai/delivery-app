import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from './App';
import { requestLogin } from '../helpers/axios';

describe('Teste da tela de Login', () => {
  it('A tela de login deve renderizar um formulário com campos de email e senha e um botão', () => {

  renderWithRouter(<App />);

  const emailInput = screen.getByTestId('common_login__input-email');
  const passwordInput = screen.getByTestId('common_login__input-password');
  const submitBtn = screen.getByTestId('common_login__button-login');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

it('O botão deve ser habilitado quando os campos são preenchidos corretamente', () => {
  renderWithRouter(<App />);

  const emailInput = screen.getByTestId('common_login__input-email');
  const passwordInput = screen.getByTestId('common_login__input-password');
  const submitBtn = screen.getByTestId('common_login__button-login');

  expect(submitBtn).toBeDisabled();
  userEvent.type(emailInput, 'teste@teste.com');
  userEvent.type(passwordInput, 'senhavalida');
  expect(submitBtn).not.toBeDisabled();

});

it('Caso não seja encontrado um usuário uma mensagem deve ser exibida', async () => {
  renderWithRouter(<App />);
  
  requestLogin.jest.fn().Promise.resolve(null);

  const emailInput = screen.getByTestId('common_login__input-email');
  const passwordInput = screen.getByTestId('common_login__input-password');
  const submitBtn = screen.getByTestId('common_login__button-login');

  userEvent.type(emailInput, 'teste@teste.com');
  userEvent.type(passwordInput, 'senhainvalida');
  userEvent.click(submitBtn);
  
  const invalidMessage = await screen.findByTestId('common_login__element-invalid-email');
  expect(invalidMessage).toBeInTheDocument();

  jest.clearAllMocks();
});

it('Caso seja encontrado um usuário válido a página é redirecionada', async () => {
  const { history } = renderWithRouter(<App />);

  const user = {
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    role: "customer",
  }
  
  const returnedData = {
    token: 'kjkjkjkjkj',
    user,
  }

  requestLogin.jest.fn().Promise.resolve(returnedData);

  const emailInput = screen.getByTestId('common_login__input-email');
  const passwordInput = screen.getByTestId('common_login__input-password');
  const submitBtn = screen.getByTestId('common_login__button-login');

  userEvent.type(emailInput, 'teste@teste.com');
  userEvent.type(passwordInput, 'senhavalida');
  userEvent.click(submitBtn);
  
  expect(requestLogin).toHaveBeenCalled();

  expect(history.path.location).toBe('/customer/products');
  
  jest.clearAllMocks();
});

it('Caso seja clicado o botão de "cadastras", a página deve ser redirecionada para a tela de cadastro', async () => {
  const { history } = renderWithRouter(<App />);

  const registerBtn = screen.getByTestId('common_login__button-register');

  userEvent.click(registerBtn);
  
  expect(history.path.location).toBe('/register');

});

})

