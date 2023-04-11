import React, { useState, useEffect } from 'react';
import FormsAdm from '../components/formsAdm';
import UsersTable from '../components/UsersTable';
import { requestAllUsers } from '../helpers/axios';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await requestAllUsers();
      setUsers(allUsers.filter((user) => user.role !== 'administrator'));
    }
    getUsers;
  });

  const removeUser = async (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <FormsAdm />
      <UsersTable users={ users } removeUser={ removeUser }/>
    </div>
  );
}

export default Admin;
