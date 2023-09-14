import { Button } from '@chakra-ui/react';
import { useColorMode } from 'context/ThemeContext';
import { useUserContext } from 'context/UserProvider';
import React from 'react';

const DeleteButton: React.FC = () => {
  const { deleteUser } = useUserContext();
  const { textColor } = useColorMode();
  return (
    <Button
      _hover={{}}
      w='100%'
      bg='brand.grey'
      color={textColor}
      onClick={deleteUser}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
