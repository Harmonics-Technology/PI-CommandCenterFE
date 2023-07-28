import { Box, Flex, VStack, Text, Button, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export const BottomHero = () => {
    const router = useRouter();
    return (
        <Box bgColor="white" zIndex="6">
            <Box w="80%" mx="auto" py="7rem">
                <Flex
                    justify="space-between"
                    pos="relative"
                    bgColor="#182c51"
                    borderRadius="1.562rem"
                    p="4rem 3rem 4rem 6rem"
                    overflow="hidden"
                >
                    <VStack
                        align="flex-start"
                        spacing="1.5rem"
                        w="60%"
                        color="white"
                    >
                        <Text
                            fontSize="2.815rem"
                            fontWeight="700"
                            fontFamily="Nunito"
                            mb="0"
                            lineHeight="normal"
                        >
                            Simple Time Tracking System For Your Employees
                        </Text>
                        <Text
                            fontSize="1.125rem"
                            fontWeight="500"
                            fontFamily="Nunito"
                            mb="0"
                        >
                            Hit the ground running with the Admin Timesheet
                            application
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
                            Sign Up For Free
                        </Button>
                    </VStack>
                    <Box
                        w="45%"
                        zIndex="4"
                        pos="absolute"
                        right="3%"
                        bottom="-30px"
                    >
                        <Image
                            src="/assets/laptop.png"
                            w="full"
                            alt="banner image"
                        />
                    </Box>
                    <Box pos="absolute" top="0" left="0">
                        <Image
                            src="/assets/cu.png"
                            w="full"
                            alt="banner image"
                        />
                    </Box>
                    <Box pos="absolute" bottom="0" right="0%">
                        <Image
                            src="/assets/ci.png"
                            w="90%"
                            alt="banner image"
                        />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
