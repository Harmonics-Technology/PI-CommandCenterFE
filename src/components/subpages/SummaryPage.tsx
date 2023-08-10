import {
    Box,
    Button,
    Flex,
    Text,
    Tr,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import PaymentPage from '@components/bits-utils/PaymentPage';
import { TableData } from '@components/bits-utils/TableData';
import Tables from '@components/bits-utils/Tables';
import { CAD } from '@components/generics/functions/Naira';
import { useRouter } from 'next/router';
import React from 'react';
import { ClientSubscriptionView } from 'src/services';

export const SummaryPage = ({ data }: { data: ClientSubscriptionView }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { client_secret } = router.query;
    // console.log({ client_secret });
    return (
        <Box my="4rem" w="80%" mx="auto">
            <Box bgColor="white" borderRadius="0.937rem" w="full">
                <Text color="#1b1d21" fontWeight="700" p="2rem 2rem" mb="0">
                    Payment Summary
                </Text>
                <Box borderY="2px solid" borderColor="#e0e0e0" py="1.5rem">
                    <VStack align="flex-start" mb="2.7rem" px="2rem">
                        <Text
                            color="#707683"
                            fontWeight="700"
                            fontSize=".875rem"
                        >
                            BILL TO:
                        </Text>
                        <Text
                            color="#1b1d21"
                            fontWeight="500"
                            fontSize=".875rem"
                        >
                            {data.client?.companyName}
                        </Text>
                        <Text
                            color="#1b1d21"
                            fontWeight="500"
                            fontSize=".875rem"
                        >
                            {data.client?.companyEmail}
                        </Text>
                    </VStack>
                    <Tables
                        tableHead={[
                            'Item Description',
                            'Duration',
                            'Unit Price',
                            'Amount',
                        ]}
                        bg="brand.400"
                        color="white"
                        variant="unstyled"
                    >
                        <Tr>
                            <TableData name={data.subscription?.name} solid />
                            <TableData name={`${data.duration} months`} />
                            <TableData
                                name={CAD(
                                    data.subscription?.monthlyAmount ||
                                        data.subscription?.yearlyAmount,
                                )}
                            />
                            <TableData name={CAD(data.totalAmount)} />
                        </Tr>
                        <Tr>
                            <TableData name={''} />
                            <TableData name={''} />
                            <TableData name={'Sub Total'} solid />
                            <TableData name={CAD(data?.totalAmount)} solid />
                        </Tr>
                        <Tr>
                            <TableData name={''} />
                            <TableData name={''} />
                            <TableData name={'HST(0%)'} solid />
                            <TableData name={CAD(0)} solid />
                        </Tr>
                        <Tr>
                            <TableData name={''} />
                            <TableData name={''} />
                            <TableData name={'Total'} solid />
                            <TableData name={CAD(data?.totalAmount)} solid />
                        </Tr>
                    </Tables>
                </Box>
                <Flex w="full" justify="center">
                    <Button
                        bgColor="brand.400"
                        color="white"
                        w="30%"
                        borderRadius="5px"
                        h="3rem"
                        my="3rem"
                        onClick={onOpen}
                        isDisabled={data.status == 'ACTIVE'}
                    >
                        Make Payment
                    </Button>
                </Flex>
            </Box>
            {isOpen && (
                <PaymentPage
                    isOpen={isOpen}
                    onClose={onClose}
                    clientSecret={client_secret as string}
                    redirectUrl="login"
                />
            )}
        </Box>
    );
};
