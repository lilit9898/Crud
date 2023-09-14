import { createContext, useContext, useState } from 'react';
import { IChildren, IUserData, UserInfoContextType } from 'types/types';

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error('Error about UserInfoProvider component');
  }
  return context;
};

export const UserInfoProvider: React.FC<IChildren> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IUserData>({
    name: '',
    age: 0,
    subscription: 'Subscribed' || 'Not Subscribed' || 'other',
    employment: false,
    active: false,
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
