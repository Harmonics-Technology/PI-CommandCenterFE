import { Box, HStack, Text, Image, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export const Mainhero = () => {
    const router = useRouter();
    return (
        <Box
            w="full"
            bgImage="url('/assets/bgt.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgColor="white"
        >
            <HStack gap="0rem" w="90%" mx="auto" h="80vh" align="center">
                <VStack align="flex-start" spacing="1.5rem" w="45%">
                    <Text
                        fontSize="3.125rem"
                        color="#182c51"
                        fontWeight="800"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight="normal"
                    >
                        The Best Time Tracking System For your employees.
                    </Text>
                    <Text
                        fontSize="1.25rem"
                        color="#696969"
                        fontWeight="600"
                        fontFamily="Nunito"
                        mb="0"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </Text>
                    <Button
                        fontSize="1.125rem"
                        color="white"
                        bgColor="brand.400"
                        borderRadius="8px"
                        px="2rem"
                        h="3.25rem"
                        onClick={() => router.push('/pricing')}
                    >
                        Start Free Trial
                    </Button>
                </VStack>
                <Box w="60%">
                    <Image
                        src="/assets/laptop.png"
                        w="full"
                        alt="banner image"
                    />
                </Box>
            </HStack>
        </Box>
    );
};
