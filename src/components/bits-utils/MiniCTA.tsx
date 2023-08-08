import { VStack, Box, Button, Text } from '@chakra-ui/react';
import router from 'next/router';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';

export const MiniCTA = ({ bg, text, btn, color }) => {
    return (
        <VStack w="full" bgColor={bg} py="2.5rem">
            <MainTitle text={text} color={color} w="60%" />
            <Box>
                <Button
                    fontSize="1.125rem"
                    color="white"
                    bgColor="brand.400"
                    borderRadius="8px"
                    px="2.5rem"
                    h="4rem"
                    fontFamily='Nunito'
                    onClick={() => router.push('/pricing')}
                >
                    {btn}
                </Button>

                <Text
                    fontSize="0.87rem"
                    color={color}
                    fontWeight="400"
                    fontFamily="Nunito"
                    fontStyle="italic"
                    m="1rem 0 0"
                >
                    Sign up for FREE trial - No credit card required
                </Text>
            </Box>
        </VStack>
    );
};
