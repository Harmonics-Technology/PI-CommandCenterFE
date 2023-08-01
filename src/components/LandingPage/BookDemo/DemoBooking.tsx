import { Box, HStack, VStack } from '@chakra-ui/react';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { ServiceItems } from '@components/bits-utils/ServiceItems';
import React from 'react';
import { DemoContact } from './DemoContact';

export const DemoBooking = () => {
    return (
        <Box bgColor="white" py="8rem">
            <Box w="90%" mx="auto">
                <Box mb="4rem">
                    <MainTitle text="How to Book Your Demo" />
                </Box>
                <HStack spacing="5rem" align="flex-start">
                    <VStack spacing="2rem" w='full'>
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
                    <Box w='full'>
                        <DemoContact />
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};
