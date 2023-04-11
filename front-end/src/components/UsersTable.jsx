import React from 'react'

function UsersTable({users, removeUser}) {
  const dataTest = 'admin_manage__element-user-table-';
  return (
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Nome</td>
          <td>E-mail</td>
          <td>Tipo</td>
          <td>Excluir</td>
        </tr>
      </thead>
      <tbody>
        {
          users.map(({ id, name, email, role }, index) => (
            <tr key={ id }>
              <td data-testid={ `${dataTest}item-number-%{index}` }>{ index }</td>
              <td data-testid={ `${dataTest}name-%{index}` }>{ name }</td>
              <td data-testid={ `${dataTest}email-%{index}` }>{ email }</td>
              <td data-testid={ `${dataTest}role-%{index}` }>{ role }</td>
              <td>
                <button 
                  data-testid={ `${dataTest}remove-%{index}` }
                  onClick={ () => removeUser(id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default UsersTable