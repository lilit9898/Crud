import { CheckIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { useColorMode } from 'context/ThemeContext';
import { useUserInfoContext } from 'context/UserInfoProvider';
import { useState } from 'react';


const Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { textColor } = useColorMode();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setUserInfo({ ...userInfo, employment: !isChecked });
  };

  return (
    <Flex gap='10px'>
      <IconButton
        _hover={{}}
        icon={isChecked ? <CheckIcon color='black' /> : <></>}
        aria-label='Custom Checkbox'
        onClick={toggleCheckbox}
        bg={isChecked ? 'green.500' : { textColor }}
        borderRadius='md'
        size='sm'
        fontSize='20px'
        border='1px solid green'
      />
      <Flex justifyContent='center' alignItems='center'>
        <Text>Employed</Text>
      </Flex>
    </Flex>
  );
};

export default Checkbox;
