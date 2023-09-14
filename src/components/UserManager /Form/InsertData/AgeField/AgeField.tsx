import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { useColorMode } from 'context/ThemeContext';
import { useUserInfoContext } from 'context/UserInfoProvider';
import { useState } from 'react';

const AgeField: React.FC = () => {
  const { userInfo, setUserInfo } = useUserInfoContext();
  let [age, setAge] = useState<number>(18);
  const { textColor } = useColorMode();

  const handleIncrease = (e: React.MouseEvent<HTMLElement>) => {
    setAge((prev) => prev + 1);
    setUserInfo({ ...userInfo, age: age + 1 });
  };

  const handleDecrease = (e: React.MouseEvent<HTMLElement>) => {
    if (age > 18) {
      setAge((prev) => prev - 1);
    }
    setUserInfo({ ...userInfo, age: age - 1 });
  };

  return (
    <InputGroup borderColor='brand.grey'>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAge(+e.target.value);
          setUserInfo({ ...userInfo, age: +e.target.value });
        }}
        type='text'
        placeholder='Age'
        _placeholder={{ color: 'brand.white' }}
        value={age || ''}
        focusBorderColor='green.400'
      />
      <InputRightAddon
        userSelect='none'
        onClick={handleDecrease}
        cursor='pointer'
        display='flex'
        justifyContent='center'
        w='40px'
        borderRadius='none'
        bg='brand.grey'
        children={<ChevronDownIcon color={textColor} h='20px' w='20px' />}
      />
      <InputRightAddon
        userSelect='none'
        onClick={handleIncrease}
        cursor='pointer'
        display='flex'
        justifyContent='center'
        w='40px'
        borderRadius='none'
        bg='brand.grey'
        children={<ChevronUpIcon color={textColor} h='20px' w='20px' />}
      />
    </InputGroup>
  );
};

export default AgeField;
