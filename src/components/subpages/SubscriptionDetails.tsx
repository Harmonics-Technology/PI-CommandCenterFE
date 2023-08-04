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
// import { PaymentDetails } from '@components/Modals/PaymentDetails';
import { RenewSubscription } from '@components/Modals/RenewSubscription';
import { LeaveTab } from '@components/bits-utils/LeaveTab';
import { SearchComponent } from '@components/bits-utils/SearchComponent';
import {
    TableData,
    TableStatus,
    TableSubscriptionActions,
} from '@components/bits-utils/TableData';
import Tables from '@components/bits-utils/Tables';
import { IClientInfoProps } from '@components/generics/Schema';
import { CAD } from '@components/generics/functions/Naira';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ClientSubscriptionView } from 'src/services';

export const SubscriptionDetails = ({
    id,
    currentSub,
    allSub,
}: IClientInfoProps) => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState();
    // console.log({ currentSub, allSub });

    const dateDiff = dayjs(currentSub?.endDate).diff(
        currentSub?.startDate,
        'day',
    );
    const dateUsed = dayjs().diff(dayjs(currentSub?.startDate), 'day');
    const datePercent = Math.round((dateUsed / dateDiff) * 100);

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
                    {currentSub?.client?.companyName}
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
                        url: `/admin/clients/${id}/client-information`,
                    },
                    {
                        text: 'Subscription Details',
                        url: `/admin/clients/${id}/subscription-details`,
                    },
                ]}
            />
            <Box borderBottom="1px solid #E0E0E0">
                <Text my="1.5rem" fontWeight="700" fontSize=".8rem">
                    Current Subscription
                </Text>
                {currentSub !== undefined ? (
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
                            <Tr>
                                <TableData
                                    name={`${currentSub?.subscription?.name} `}
                                />
                                <TableData
                                    name={dayjs(currentSub?.startDate).format(
                                        'DD/MM/YYYY',
                                    )}
                                />
                                <TableData
                                    name={`${currentSub?.duration} Months`}
                                />
                                <TableData
                                    name={dayjs(currentSub?.endDate).format(
                                        'DD/MM/YYYY',
                                    )}
                                    isRed
                                />
                                <TableData
                                    name={CAD(currentSub?.totalAmount)}
                                />
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
                                                {dateDiff <= 0
                                                    ? 'Completed'
                                                    : ' Ongoing'}
                                            </Text>
                                            <Text
                                                color="#8c8c8c"
                                                fontFamily="Rubik"
                                                mb="0.2rem"
                                            >
                                                {datePercent < 1
                                                    ? 0
                                                    : datePercent}
                                                %
                                            </Text>
                                        </HStack>
                                        <Progress
                                            colorScheme="brand"
                                            size="sm"
                                            value={
                                                datePercent < 1
                                                    ? 0
                                                    : datePercent
                                            }
                                            borderRadius="25px"
                                            bgColor="#C4C4C4"
                                            boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
                                        />
                                    </Box>
                                </td>
                            </Tr>
                        </>
                    </Tables>
                ) : (
                    <Text
                        my="2rem"
                        textAlign="center"
                        fontWeight="800"
                        color="red"
                    >
                        No subscription currently active
                    </Text>
                )}
            </Box>
            <Box borderTop="1px solid #E0E0E0" mt="2rem">
                <Text my="1.5rem" fontWeight="700" fontSize=".8rem">
                    Subscription History
                </Text>
                <Flex justify="flex-end" mb="1rem">
                    <SearchComponent />
                </Flex>
                {(allSub?.value as any)?.length > 0 ? (
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
                            {allSub?.value?.map((x: ClientSubscriptionView) => (
                                <Tr>
                                    <TableData
                                        name={`${x.subscription?.name} `}
                                    />
                                    <TableData
                                        name={dayjs(x.startDate).format(
                                            'DD/MM/YY',
                                        )}
                                    />
                                    <TableData name={`${x.duration} months`} />
                                    <TableData
                                        name={dayjs(x.endDate).format(
                                            'DD/MM/YY',
                                        )}
                                        isRed
                                    />
                                    <TableData name={CAD(x?.totalAmount)} />
                                    <TableStatus name={true} />
                                    <TableSubscriptionActions
                                        openRenew={onOpen}
                                        setData={setData}
                                        x={x}
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
                        No subscription to show!!!
                    </Text>
                )}
            </Box>
            <RenewSubscription isOpen={isOpen} onClose={onClose} data={data} />
        </Box>
    );
};
