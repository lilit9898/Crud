import { Flex } from '@chakra-ui/react';
import React from 'react';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';
import DeleteButton from './DeleteButton/DeleteButton';

const Delete: React.FC = () => {
  return (
    <Flex flexDirection='column' gap='15px' mt='4'>
      <ModeSwitcher />
      <DeleteButton />
    </Flex>
  );
};

export default Delete;
