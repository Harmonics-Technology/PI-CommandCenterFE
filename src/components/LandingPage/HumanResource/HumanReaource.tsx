import { Box } from '@chakra-ui/react';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';
import { HrService } from './HrService';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';

export const HumanReaource = () => {
    return (
        <Box>
            <Mainhero
                title="Revolutionize Your HR Operations with TIMBA"
                sub="Say goodbye to manual processes, scattered data, and time-consuming tasks. Let TIMBA revolutionize your HR operations and elevate your efficiency like never before."
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/hr.png"
                bgColor="brand.400"
                color="white"
                btnColor="brand.100"
                bd={['30px', '3.125rem']}
                h="233px"
                gap={['33px']}
                mainH={['72vh', '80vh']}
            />
            <HrService />
            <BottomHero
                title="Unlock Your Productivity: Manage 
                Teams and Plan with Ease, All at 
                Your Fingertips"
            />
        </Box>
    );
};
