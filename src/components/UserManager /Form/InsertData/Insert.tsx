import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react';
import AgeField from './AgeField/AgeField';
import Dropdown from './Dropdown/Dropdown';
import Checkbox from './Checkbox/Checkbox';
import { useState } from 'react';
import { useUserContext } from 'context/UserProvider';
import { useUserInfoContext } from 'context/UserInfoProvider';
import { useColorMode } from 'context/ThemeContext';


const Insert: React.FC = () => {
  const { addUser } = useUserContext();
  const [name, setName] = useState('Name');
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { textColor } = useColorMode();

  const handelNameinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleSubmit = () => {
    addUser(userInfo);
  };

  return (
    <Box>
      <form>
        <FormControl>
          <Flex flexDirection='column' gap='15px' zIndex='1'>
            <Input
              type='text'
              placeholder={name}
              _placeholder={{ color: 'brand.white' }}
              border='1px solid '
              borderColor='brand.grey'
              onChange={handelNameinputChange}
              value={name}
              onFocus={() => setName('')}
              focusBorderColor='green.500'
            />
            <AgeField />
            <Dropdown />
            <Checkbox />
            <Button
              onClick={handleSubmit}
              _hover={{}}
              w='100%'
              bg='brand.grey'
              color={textColor}
            >
              Insert
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default Insert;
