import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export const Completed = ({ data, redirectUrl }) => {
    data.status = true;
    // redirectUrl = 'undefined';
    // const redirect = () => {
    //     window.location.href = `${process.env.NEXT_PUBLIC_TTS as string}/${
    //         redirectUrl || '/login'
    //     }
    //     }`;
    // };
    const redirect = () => {
        window.location.href = `${
            process.env.NEXT_PUBLIC_TTS as string
        }/SuperAdmin/account-management/manage-subscription`;
    };
    const [countdown, setCountdown] = useState(5);

    const hasRedirect = redirectUrl !== 'undefined' && redirectUrl;

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            hasRedirect ? redirect() : void 0;
        }, countdown * 1000);

        const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return prevCountdown - 1;
                }
            });
        }, 1000);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(timer);
        };
    }, [countdown]);

    console.log({ redirectUrl });

    return (
        <Box>
            <Flex minH="90vh" justify="center" align="center">
                <VStack
                    spacing="2rem"
                    w={['90%', '50%']}
                    bgColor="white"
                    p={['3rem 1rem', '8rem 3rem']}
                    borderRadius="12px"
                >
                    {data.status === true ? (
                        <>
                            <Text
                                fontSize={['1.2rem', '2.125rem']}
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
                                fontSize={['1rem', '1.25rem']}
                                color="#696969"
                                fontWeight="600"
                                fontFamily="Nunito"
                                mb="0"
                                textAlign="center"
                                w="80%"
                            >
                                Your payment has been confirmed and your
                                subscription has been activated. Please check
                                your email for next steps
                            </Text>
                            {hasRedirect && (
                                <>
                                    <Button
                                        fontSize={['.9rem', '1.125rem']}
                                        color="white"
                                        bgColor="brand.400"
                                        borderRadius="8px"
                                        px="2rem"
                                        h="3.25rem"
                                        onClick={redirect}
                                    >
                                        Click here to redirect
                                    </Button>
                                    <Text
                                        fontSize=".9rem"
                                        color="#696969"
                                        mt=".3rem"
                                    >
                                        Redirecting in {countdown} seconds
                                    </Text>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Text
                                fontSize={['1.2rem', '2.125rem']}
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
                                fontSize={['.8rem', '1.25rem']}
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
