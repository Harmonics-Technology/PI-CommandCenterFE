import { Flex, VStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { DemoServices } from './DemoServices';
import { DemoBooking } from './DemoBooking';
import { PageHero } from '@components/bits-utils/Heros/PageHero';

export const BookDemo = () => {
    return (
        <Box>
            <PageHero img="/assets/demobg.png" text=" Book A Demo" />
            <Box>
                <DemoServices />
                <DemoBooking />
            </Box>
        </Box>
    );
};
