import { Box, Flex, VStack, Text, Button, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export const BottomHero = ({
    title,
    w = '60%',
    fs = '2.125rem',
}: {
    title: string;
    w?: any;
    fs?: any;
}) => {
    const router = useRouter();
    return (
        <Box bgColor="white" zIndex="6">
            <Box w="85%" mx="auto" p="0 0 4rem">
                <Flex
                    justify="space-between"
                    pos="relative"
                    bgColor="brand.100"
                    borderRadius="1.562rem"
                    p="4rem 3rem 4rem 6rem"
                    overflow="hidden"
                >
                    <VStack
                        align="flex-start"
                        spacing="1.8rem"
                        w={w}
                        color="white"
                    >
                        <Text
                            fontSize={fs}
                            fontWeight="800"
                            fontFamily="Nunito"
                            mb="0"
                            lineHeight="normal"
                        >
                            {title}
                        </Text>
                        <Box>
                            <Button
                                fontSize="1.125rem"
                                color="white"
                                bgColor="brand.400"
                                borderRadius="8px"
                                px="2rem"
                                h="3.25rem"
                                fontFamily="Nunito"
                                onClick={() => router.push('/pricing')}
                                _hover={{ bgColor: 'brand.400' }}
                            >
                                Start Using TIMBA Today
                            </Button>
                            <Text
                                fontSize=".875rem"
                                fontWeight="400"
                                fontFamily="Nunito"
                                fontStyle="italic"
                                m=".81rem 0 0"
                            >
                                Sign up for FREE trial - No credit card required
                            </Text>
                        </Box>
                    </VStack>
                    <Box
                        w="40%"
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
