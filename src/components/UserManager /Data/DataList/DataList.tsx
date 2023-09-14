import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useColorMode } from 'context/ThemeContext';
import { IUserData } from 'types/types';
import { useUserContext } from 'context/UserProvider';

export const DataList: React.FC = () => {
  const [clickedItemId, setClickedItemId] = useState<number | null>(null);
  const { users, setNewUsers } = useUserContext();
  const { borderColor, backGroundColor } = useColorMode();

  const setActiveUser = (id: number) => {
    const filteredData = users.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return { ...item, active: false };
    });
    setNewUsers([...filteredData]);
  };

  const handleRowClick = (itemId: number) => {
    if (clickedItemId === itemId) {
      setClickedItemId(null);
    } else {
      setClickedItemId(itemId);
    }
  };

  return (
    <TableContainer w='65%'>
      <Box
        border='1px solid '
        borderColor={borderColor}
        h='400px'
        p='7px'
        borderRadius='10px'
        height='442px'
      >
        <Table variant='unstyled' size='xs'>
          <Thead bg='brand.grey'>
            <Tr color='brand.white' fontSize={14}>
              <Td w='30%' color='brand.white' pl={2}>
                Name
              </Td>
              <Td w='10%' color='brand.white' isNumeric pl={2}>
                Age
              </Td>
              <Td w='30%' color='brand.white' pl={2}>
                Subscription
              </Td>
              <Td w='30%' color='brand.white' pl={2}>
                Employment
              </Td>
            </Tr>
          </Thead>
        </Table>
        <Box overflowY='auto' h='90%'>
          <Table variant='unstyled' size='sm'>
            <Tbody>
              {users?.map((item: IUserData) => {
                return (
                  <Tr
                    display='flex'
                    key={item.id}
                    backgroundColor={
                      clickedItemId === item.id ? 'green.500' : backGroundColor
                    }
                    onClick={() => {
                      setActiveUser(item.id as number);
                      handleRowClick(item.id as number);
                    }}
                    cursor='pointer'
                    _hover={{ bg: 'green.500' }}
                  >
                    <Td pl='5px' w='30%' whiteSpace='normal' pb={0}>
                      {item.name}
                    </Td>
                    <Td pb={0} w='10%'>
                      {item.age}
                    </Td>
                    <Td pb={0} w='30%'>
                      {item.subscription}
                    </Td>
                    <Td pb={0} w='30%'>
                      {item.employment ? 'Employed' : 'Unemployed'}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </TableContainer>
  );
};
