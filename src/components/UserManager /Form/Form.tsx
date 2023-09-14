import { Box } from '@chakra-ui/react';
import Insert from './InsertData/Insert';
import Delete from './DeleteData/Delete';
import CustomDivider from './CustomDivider';
import { useColorMode } from 'context/ThemeContext';

export const Form: React.FC = () => {
  const { borderColor, backGroundColor, textColor } = useColorMode();

  return (
    <Box
      mt={2}
      w='35%'
      border='1px solid'
      borderColor={borderColor}
      borderRadius='10px'
      h='435'
      zIndex='1'
      pt={3}
      pb={3}
      pl={2}
      pr={2}
    >
      <Box
        fontSize={18}
        position='absolute'
        top='2px'
        zIndex='2'
        color={textColor}
        bg={backGroundColor}
        left='16%'
      >
        Insert row
      </Box>
      <Insert />
      <CustomDivider />
      <Delete />
    </Box>
  );
};
