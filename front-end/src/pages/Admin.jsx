import React, { useState, useEffect } from 'react';
import FormsAdm from '../components/FormsAdm';
import UsersTable from '../components/UsersTable';
import { requestAllUsers, removeUser } from '../helpers/axios';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await requestAllUsers();
      setUsers(allUsers.filter((user) => user.role !== 'administrator'));
    };
    getUsers();
  });

  const deleteUser = async (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
    await removeUser(id);
  };

  return (
    <div>
      <FormsAdm />
      <UsersTable users={ users } removeUser={ deleteUser } />
    </div>
  );
}

export default Admin;
