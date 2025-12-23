import {
 Box,
 Button,
 Flex, Text,
 Tr
} from '@chakra-ui/react';
// import { PaymentDetails } from '@components/Modals/PaymentDetails';
import { TableData, TableState } from '@components/bits-utils/TableData';
import Tables from '@components/bits-utils/Tables';
import { IAdminRightsProps } from '@components/generics/Schema';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

export const AdminRightsPage = ({ data, activity }: IAdminRightsProps) => {
 const router = useRouter();

 return (
  <Box w="full" bgColor="white" borderRadius="10px" p="1rem" minH="80vh">
   <Flex
    justify="space-between"
    pb="13px"
    align="center"
    borderBottom="1px solid"
    borderColor="#e0e0e0"
   >
    <Text fontWeight="800" color="#1b1d21" mb="0">
     {data?.companyName} Administrator Rights Activities
    </Text>
    <Button
     bgColor="brand.400"
     color="white"
     borderRadius="5px"
     onClick={() => router.back()}
     px="2rem"
    >
     Back
    </Button>
   </Flex>
   <Box>
    <Box borderBottom="1px solid #E0E0E0" mb="1rem" py="13px">
     <Text fontWeight="700" mb='0'>
      Adminstration Right Activities
     </Text>
    </Box>
    {(activity as any)?.length > 0 ? (
     <Tables
      tableHead={[
       'Prev Adminstrator',
       'New Adminstrator',
       'Initiated By',
       'Transfer Date',
       'Transfer Status',
       'Completion Date',
      ]}
     >
      <>
       {activity?.map((x) => (
        <Tr key={x?.id}>
         <TableData name={x?.previousSuperAdminName} />
         <TableData name={x?.newSuperAdminName} full />
         <TableData name={x?.initiatedByUserName} full />
         <TableData
          name={dayjs(x?.transferDate).format(
           'DD/MM/YY',
          )}
         />
         <TableState name={x?.transferStatus} />
         <TableData
          name={dayjs(x?.completionDate).format(
           'DD/MM/YY',
          )}
         />
        </Tr>
       ))}
      </>
     </Tables>
    ) : (
     <Text
      my="2rem"
      textAlign="center"
      fontWeight="800"
      color="red"
     >
      No activity to show!!!
     </Text>
    )}
   </Box>
  </Box>
 );
};
