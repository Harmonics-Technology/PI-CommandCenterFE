import { Box } from '@chakra-ui/react';
import React from 'react';
import { EnService } from './EnService';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { EnItems } from './EnItems';

export const Entreprenure = () => {
    return (
        <Box>
            <Mainhero
                title="Improve your teams productivity and efficiency"
                sub="Optimize Employee Productivity, Manage Time Budgets, and Streamline Administration Effortlessly with TIMBA."
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/en.png"
                bgColor="brand.400"
                color="white"
                btnColor="brand.100"
                bd={['30px', '3.125rem']}
                h="233px"
                gap={['33px']}
                mainH={['72vh', '80vh']}
            />
            <EnService />
            <EnItems />
        </Box>
    );
};
