import { Box, HStack, VStack } from '@chakra-ui/react';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { ServiceItems } from '@components/bits-utils/ServiceItems';
import React from 'react';
import { DemoContact } from './DemoContact';

export const DemoBooking = () => {
    return (
        <Box bgColor="white" py={['30px', '8rem']}>
            <Box w={['100%', '85%']} mx="auto">
                <Box mb={['2rem', '4rem']}>
                    <MainTitle text="How to Book Your Demo" />
                </Box>
                <HStack
                    gap={['55px', '5rem']}
                    spacing={0}
                    align="flex-start"
                    justify="space-evenly"
                    flexDir={['column', 'row']}
                >
                    <VStack
                        gap={['1rem', '2rem']}
                        w={['90%', '40%']}
                        mx={['auto', '0']}
                    >
                        <ServiceItems
                            x={{
                                title: 'Simple Booking Process',
                                sub: 'Booking a demo is easy! Just fill out the short form on this page with your contact details and preferred demo date/time. Our team will promptly reach out to confirm your booking.',
                            }}
                        />
                        <ServiceItems
                            x={{
                                title: "Experience TIMBA's Difference",
                                sub: "Take the first step towards optimizing your operations and driving growth. Embrace TIMBA's transformative power and elevate your organization to new heights.",
                            }}
                        />
                    </VStack>
                    <Box w={['100%', '40%']}>
                        <DemoContact />
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};
