import { Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react';
import PaymentPage from '@components/bits-utils/PaymentPage';
import { useRouter } from 'next/router';
import React from 'react';

export const AddNewCard = () => {
    const router = useRouter();
    const { client_secret } = router.query;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            w="50%"
            h="60vh"
            justify="center"
            align="center"
            bgColor="white"
            borderRadius="10px"
            m="5rem auto 4rem"
        >
            <VStack spacing="1rem" p="2rem">
                <Text
                    fontSize="1.5rem"
                    color="brand.100"
                    fontWeight="600"
                    textAlign="center"
                    mb="0"
                >
                    Before you continue!
                </Text>
                <Text
                    fontSize="1rem"
                    color="brand.300"
                    fontWeight="400"
                    textAlign="center"
                    w="60%"
                >
                    Adding a new card will incur a charge of $1, a processing
                    fee from our third party payment gateway. Click on pay now
                    to continue or close this page if you don't want to continue{' '}
                </Text>
                <Button
                    bgColor="brand.400"
                    color="white"
                    w="30%"
                    borderRadius="5px"
                    h="3rem"
                    my="3rem"
                    onClick={onOpen}
                >
                    Proceed to add card
                </Button>
            </VStack>
            {isOpen && (
                <PaymentPage
                    isOpen={isOpen}
                    onClose={onClose}
                    clientSecret={client_secret as string}
                    payBtnText="Add card"
                    redirectUrl="SuperAdmin/account-management/billing-information"
                />
            )}
        </Flex>
    );
};
