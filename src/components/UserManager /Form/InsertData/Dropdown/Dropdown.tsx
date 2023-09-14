import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { useColorMode } from 'context/ThemeContext';
import { useUserInfoContext } from 'context/UserInfoProvider';
import { useState } from 'react';
import { SubsciptionType } from 'types/types';

const Dropdown: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [subscribed, setSubscribed] = useState<string>('Subscribed');
  const { textColor, backGroundColor } = useColorMode();

  const { userInfo, setUserInfo } = useUserInfoContext();

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    setUserInfo({
      ...userInfo,
      subscription: e.currentTarget.textContent as SubsciptionType,
    });
    setIsActive(!isActive);
  };

  return (
    <Box position='relative'>
      <Flex
        paddingLeft={3}
        alignItems='center'
        border='1px solid '
        borderColor='brand.grey'
        borderRadius='5px'
        h='40px'
        w='100%'
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        justifyContent='space-between'
      >
        <Text>{subscribed}</Text>
        <IconButton
          icon={<ChevronDownIcon color={textColor} />}
          borderRadius='0'
          _active={{}}
          _hover={{}}
          aria-label='Custom Checkbox'
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            setIsActive(!isActive);
          }}
          size='md'
          bg='brand.grey'
          fontSize='20px'
        />
      </Flex>

      <Box
        style={{ display: isActive ? 'block' : 'none' }}
        w='100%'
        position='absolute'
        zIndex='2'
        bg={backGroundColor}
      >
        <Box
          paddingLeft={3}
          onClick={handleSelect}
          className='item'
          cursor='pointer'
          transition='background-color 0.3s ease'
          _hover={{ bg: 'green.500' }}
        >
          Subscribed
        </Box>
        <Box
          paddingLeft={3}
          onClick={handleSelect}
          cursor='pointer'
          transition='background-color 0.3s ease'
          _hover={{ bg: 'green.500' }}
        >
          Not Subscribed
        </Box>
        <Box
          paddingLeft={3}
          onClick={handleSelect}
          cursor='pointer'
          transition='background-color 0.3s ease'
          _hover={{ bg: 'green.500' }}
        >
          Other
        </Box>
      </Box>
    </Box>
  );
};

export default Dropdown;
