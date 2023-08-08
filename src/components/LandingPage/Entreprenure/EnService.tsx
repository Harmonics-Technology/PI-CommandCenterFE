import { Box, Flex, Image, VStack } from '@chakra-ui/react';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import React from 'react';

export const EnService = () => {
    return (
        <Box w="85%" mx="auto" py="5rem">
            {/* <MainTitle
                text="One tool for managing your flexible team"
                sub="One central dashboard for leading flexible teams, regardless of their location, time zone, or device, TIMBA provides you with the visibility and insights you need to stay on top of your team's productivity and progress."
                w="80%"
            /> */}
            <Flex gap="3.5rem" align="center" justify="space-between" pb="5rem">
                <VStack w="45%" spacing="2rem">
                    <MainTitle
                        text="One tool for managing your flexible team"
                        sub="One central dashboard for leading flexible teams, regardless of their location, time zone, or device, TIMBA provides you with the visibility and insights you need to stay on top of your team's productivity and progress."
                        align="left"
                    />
                    <MainTitle
                        text="Manage from any device and anywhere"
                        sub="TIMBA makes it easy to track your time and productivity from any device, so you can stay on top of your work no matter where you are."
                        align="left"
                    />
                </VStack>
                <Box w="45%">
                    <Image
                        src={'/assets/ena.png'}
                        w="full"
                        h="full"
                        alt="banner image"
                    />
                </Box>
            </Flex>
        </Box>
    );
};
