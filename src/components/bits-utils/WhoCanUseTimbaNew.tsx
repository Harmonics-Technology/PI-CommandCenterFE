import { Box, Button, Circle, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { FlexGridImage } from './FlexGridImage';
import Link from 'next/link';

export const WhoCanUseTimbaNew = () => {
    return (
        <Box>
            <Box bgColor="brand.100" pos="relative" overflow="hidden">
                <Box p="4rem 0 6rem" mx="auto" w="85%">
                    <MainTitle
                        text="Who Can Use TIMBA ?"
                        color="white"
                        w="60%"
                    />
                    <VStack gap="4.19rem" mt="3rem">
                        <FlexGridImage
                            items={[
                                {
                                    title: 'SMEs Businesses',
                                    sub: 'Simple and affordable project management for small and medium businesses.',
                                },
                                {
                                    title: 'Remote \\ Virtual teams',
                                    sub: 'Effective management for remote teams, enhancing organization and communication.',
                                },
                                {
                                    title: 'Human Resources Managers',
                                    sub: 'Track employee performance, set goals, and provide feedback for improved HR management.',
                                },
                                {
                                    title: 'Sub-Contractors',
                                    sub: 'Empower subcontractors to monitor progress, pinpoint areas for enhancement, and make informed decisions.',
                                },
                            ]}
                            imgs={[
                                '/assets/item (8).png',
                                '/assets/item (7).png',
                                '/assets/item (6).png',
                                '/assets/item (5).png',
                            ]}
                        />
                        <FlexGridImage
                            items={[
                                {
                                    title: 'Large Businesses',
                                    sub: 'Scale with data-driven insights into project status, resource utilization, and client engagement.',
                                },
                                {
                                    title: 'Creative and Marketing Agencies',
                                    sub: 'Track time, expenses, and generate reports for creative agencies',
                                },
                                {
                                    title: 'Manufacturing and IT',
                                    sub: 'Manage projects, allocate resources, and monitor progress for superior results.',
                                },
                                {
                                    title: 'Government Establishments',
                                    sub: 'Enhance project management, resource allocation, and communication for government initiatives.',
                                },
                            ]}
                            imgs={[
                                '/assets/item (4).png',
                                '/assets/item (3).png',
                                '/assets/item (2).png',
                                '/assets/item (1).png',
                            ]}
                            rtl
                        />
                    </VStack>
                </Box>
                <Flex pb="3.5rem" justify="center" w="full">
                    <Box w="fit-content">
                        <Link passHref href="/pricing">
                            <Button
                                fontSize="1.125rem"
                                color="white"
                                bgColor="brand.400"
                                borderRadius="8px"
                                px="2.5rem"
                                h="4rem"
                                fontFamily="Nunito"
                            >
                                Start Using TIMBA Today
                            </Button>
                        </Link>

                        <Text
                            fontSize="0.87rem"
                            color="white"
                            fontWeight="400"
                            fontFamily="Nunito"
                            fontStyle="italic"
                            m="1rem 0 0"
                        >
                            Sign up for FREE trial - No credit card required
                        </Text>
                    </Box>
                </Flex>
                <Circle
                    size="8rem"
                    bgColor="#A2C084"
                    pos="absolute"
                    left="-5%"
                    top="0%"
                    zIndex="1"
                />
                <Circle
                    size="8rem"
                    bgColor="#FBC953"
                    pos="absolute"
                    right="-5%"
                    bottom="0%"
                    zIndex="1"
                />
            </Box>
        </Box>
    );
};
