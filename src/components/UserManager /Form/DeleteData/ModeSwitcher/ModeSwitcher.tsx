import { Flex, Switch } from '@chakra-ui/react';
import { useColorMode } from 'context/ThemeContext';

function ModeSwitcher() {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex gap='5px'>
      <Switch size='lg' colorScheme='green' onChange={toggleColorMode} />
      Toggle Mode
    </Flex>
  );
}

export default ModeSwitcher;
