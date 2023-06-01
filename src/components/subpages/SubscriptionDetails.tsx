import {
    Box,
    Button,
    Flex,
    HStack,
    Progress,
    Text,
    Tr,
    useDisclosure,
} from '@chakra-ui/react';
import { PaymentDetails } from '@components/Modals/PaymentDetails';
import { RenewSubscription } from '@components/Modals/RenewSubscription';
import { LeaveTab } from '@components/bits-utils/LeaveTab';
import { SearchComponent } from '@components/bits-utils/SearchComponent';
import {
    TableData,
    TableStatus,
    TableClientActions,
    TableSubscriptionActions,
} from '@components/bits-utils/TableData';
import Tables from '@components/bits-utils/Tables';
import { IClientInfoProps } from '@components/generics/Schema';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const SubscriptionDetails = ({ id }: IClientInfoProps) => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState();

    return (
        <Box w="full" bgColor="white" borderRadius="10px" p="1rem" minH="80vh">
            <Flex
                justify="space-between"
                pb="1rem"
                align="center"
                borderBottom="1px solid"
                borderColor="#e0e0e0"
                mb="1rem"
            >
                <Text fontWeight="800" color="#1b1d21" mb="0">
                    {'Proinsight Consulting'}
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
            <LeaveTab
                tabValue={[
                    {
                        text: 'Client Information',
                        url: `/clients/${id}/client-information`,
                    },
                    {
                        text: 'Subscription Details',
                        url: `/clients/${id}/subscription-details`,
                    },
                ]}
            />
            <Box borderBottom="1px solid #E0E0E0">
                <Text my="1.5rem" fontWeight="700" fontSize=".8rem">
                    Current Subscription
                </Text>
                <Tables
                    tableHead={[
                        'Subscription Type',
                        'Start Date',
                        'Duration',
                        'Due Date',
                        'Amount',
                        'Status',
                        'Progress',
                    ]}
                >
                    <>
                        {/* {adminList?.data?.value?.map((x: UserView) => ( */}
                        <Tr>
                            <TableData
                                name={'Onshore + Leave & Shift Mangt '}
                            />
                            <TableData name={'01/01/2023'} />
                            <TableData name={'6 months'} />
                            <TableData name={'01/01/2023'} isRed />
                            <TableData name={'$5,000'} />
                            <TableStatus name={true} />
                            <td style={{ width: '290px' }}>
                                <Box w="full">
                                    <HStack
                                        fontSize="11px"
                                        fontWeight="500"
                                        w="full"
                                        justify="space-between"
                                    >
                                        <Text
                                            color="#484747"
                                            fontFamily="Rubik"
                                            mb="0.2rem"
                                        >
                                            Ongoing
                                        </Text>
                                        <Text
                                            color="#8c8c8c"
                                            fontFamily="Rubik"
                                            mb="0.2rem"
                                        >
                                            65%
                                        </Text>
                                    </HStack>
                                    <Progress
                                        colorScheme="brand"
                                        size="sm"
                                        value={65}
                                        borderRadius="25px"
                                        bgColor="#C4C4C4"
                                        boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
                                    />
                                </Box>
                            </td>
                        </Tr>

                        {/* ))} */}
                    </>
                </Tables>
            </Box>
            <Box borderTop="1px solid #E0E0E0" mt="2rem">
                <Text my="1.5rem" fontWeight="700" fontSize=".8rem">
                    Subscription History
                </Text>
                <Flex justify="flex-end" mb="1rem">
                    <SearchComponent />
                </Flex>
                <Tables
                    tableHead={[
                        'Subscription Type',
                        'Start Date',
                        'Duration',
                        'End Date',
                        'Amount',
                        'Status',
                        'Actions',
                    ]}
                >
                    <>
                        {/* {adminList?.data?.value?.map((x: UserView) => ( */}
                        <Tr>
                            <TableData
                                name={'Onshore + Leave & Shift Mangt '}
                            />
                            <TableData name={'01/01/2023'} />
                            <TableData name={'6 months'} />
                            <TableData name={'01/01/2023'} isRed />
                            <TableData name={'$5,000'} />
                            <TableStatus name={true} />
                            <TableSubscriptionActions
                                openRenew={onOpen}
                                setData={setData}
                                x={'any'}
                            />
                        </Tr>

                        {/* ))} */}
                    </>
                </Tables>
            </Box>
            <RenewSubscription isOpen={isOpen} onClose={onClose} data={data} />
        </Box>
    );
};
