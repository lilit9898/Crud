import { UserData } from 'MockDB';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IChildren, IUserData, UserContextType } from 'types/types';

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Error about UserProvider component');
  }
  return context;
};

export const UserProvider: React.FC<IChildren> = ({ children }) => {
  const [users, setUsers] = useState<IUserData[]>(() => {
    const saved = localStorage.getItem('users');
    const initialValue = JSON.parse(saved as string);
    return initialValue || UserData;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user: IUserData) => {
    setUsers((prevUsers) => [...users, { ...user, id: users.length }]);
  };

  const setNewUsers = (users: IUserData[]) => {
    setUsers((prev) => users);
  };

  const deleteUser = () => {
    let filteredUsers = users.filter((user) => !user.active);
    setUsers(filteredUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, setNewUsers }}>
      {children}
    </UserContext.Provider>
  );
};
