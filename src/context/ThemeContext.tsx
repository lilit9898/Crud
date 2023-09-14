import { darkModeStyles, lightModeStyles } from 'assets/styles';
import { createContext, useContext, useState } from 'react';
import { ColorMode, ColorModeContextType, IChildren } from 'types/types';

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('oops');
  }
  return context;
};

export const ColorModeProvider: React.FC<IChildren> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('dark');

  const styles = colorMode === 'dark' ? darkModeStyles : lightModeStyles;
  const backGroundColor = colorMode === 'dark' ? 'brand.darkGrey' : 'white';
  const textColor = colorMode === 'light' ? 'brand.Grey' : 'white';
  const borderColor = colorMode === 'dark' ? 'white' : 'black';

  const toggleColorMode = () => {
    setColorMode((prev) => (colorMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        toggleColorMode,
        styles,
        backGroundColor,
        textColor,
        borderColor,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
