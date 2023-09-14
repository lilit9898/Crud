import { Box, Flex } from '@chakra-ui/react';

function CustomDivider() {
  return (
    <Flex justifyContent='center'>
      <Box borderBottom='1px solid gray' w='90%' my={4} />
    </Flex>
  );
}

export default CustomDivider;
