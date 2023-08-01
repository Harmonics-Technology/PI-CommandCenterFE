import { Flex, VStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { DemoServices } from './DemoServices';
import { DemoBooking } from './DemoBooking';

export const BookDemo = () => {
    return (
        <Box>
            <Flex
                w="full"
                bgImage="url('/assets/pricing.png')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                align="center"
                justify="center"
                h="40vh"
                bgColor="brand.400"
            >
                <VStack align="center" spacing=".5rem" w="45%">
                    <Text
                        fontSize="3.125rem"
                        color="white"
                        fontWeight="800"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight="normal"
                        textAlign="center"
                    >
                        Book A Demo
                    </Text>
                </VStack>
            </Flex>
            <Box>
                <DemoServices />
                <DemoBooking />
            </Box>
        </Box>
    );
};
