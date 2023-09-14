import { Box, Flex } from '@chakra-ui/react';
import { DataList } from './Data/DataList/DataList';
import { Form } from './Form/Form';
import { useColorMode } from 'context/ThemeContext';

const UserManager: React.FC = () => {
  const { styles } = useColorMode();

  return (
    <Flex
      justifyContent='center'
      w='100%'
      minH='100vh'
      bg='brand.darkGrey'
      zIndex='0'
    >
      <Box
        w='70%'
        p={3}
        color='brand.white'
        pt='10px'
        height='460px'
        style={styles}
        gap='40px'
        minH='450px'
      >
        <Flex gap='40px' minH='450px'>
          <Form />
          <DataList />
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserManager;
