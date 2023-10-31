import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const Completed = ({ data, redirectUrl }) => {
    const redirect = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_TTS as string}/${
            redirectUrl || ''
        }`;
    };

    return (
        <Box>
            <Flex minH="90vh" justify="center" align="center">
                <VStack
                    spacing="2rem"
                    w="50%"
                    bgColor="white"
                    p="8rem 3rem"
                    borderRadius="12px"
                >
                    {data.status === true ? (
                        <>
                            <Text
                                fontSize="2.125rem"
                                color="brand.100"
                                fontWeight="800"
                                fontFamily="Nunito"
                                mb="0"
                                lineHeight="normal"
                                textAlign="center"
                            >
                                Thank you for your payment!
                            </Text>
                            <Text
                                fontSize="1.25rem"
                                color="#696969"
                                fontWeight="600"
                                fontFamily="Nunito"
                                mb="0"
                                textAlign="center"
                                w="80%"
                            >
                                Your payment has been confirmed and your
                                subscription has been activated. Please ensure
                                you confirm your email to avoid any restriction.
                                you'll be redirected shortly
                            </Text>
                            <Button
                                fontSize="1.125rem"
                                color="white"
                                bgColor="brand.400"
                                borderRadius="8px"
                                px="2rem"
                                h="3.25rem"
                                onClick={redirect}
                            >
                                Click here to redirect
                            </Button>
                        </>
                    ) : (
                        <>
                            <Text
                                fontSize="2.125rem"
                                color="red"
                                fontWeight="800"
                                fontFamily="Nunito"
                                mb="0"
                                lineHeight="normal"
                                textAlign="center"
                            >
                                Error!
                            </Text>
                            <Text
                                fontSize="1.25rem"
                                color="#696969"
                                fontWeight="600"
                                fontFamily="Nunito"
                                mb="0"
                                textAlign="center"
                                w="80%"
                            >
                                {data?.message}
                            </Text>
                        </>
                    )}
                </VStack>
            </Flex>
        </Box>
    );
};
