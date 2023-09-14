import { ReactNode } from 'react';

export type SubsciptionType = 'Subscribed' | 'Not Subscribed' | 'other';

export interface IUserData {
  name: string;
  age: number;
  subscription: SubsciptionType;
  employment: boolean;
  id?: number;
  active: boolean;
}

export type UserContextType = {
  users: IUserData[];
  addUser: (user: IUserData) => void;
  deleteUser: () => void;
  setNewUsers: (users: IUserData[]) => void;
};

export type UserInfoContextType = {
  userInfo: IUserData;
  setUserInfo: (user: IUserData) => void;
};

export interface IChildren {
  children: ReactNode;
}

export interface IStyles {
  backgroundColor: string;
  color: string;
}

export type ColorMode = 'dark' | 'light';

export interface ColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  styles: IStyles;
  backGroundColor: 'white' | 'brand.darkGrey';
  textColor: 'white' | 'brand.Grey';
  borderColor: 'white' | 'black';
}
