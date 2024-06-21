import React from 'react';
import { ReServices } from './ReServices';
import { Box } from '@chakra-ui/react';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';

export const Recruiter = () => {
    return (
        <Box>
            <Mainhero
                title="Simplifying Client Management and Employee Onboarding"
                sub="With TIMBA's powerful functionalities, recruiters can unlock the true potential of efficient candidate sourcing, seamless onboarding, contract management and client satisfaction"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/re.png"
                bgColor="brand.100"
                color="white"
                bd={['30px', '3.125rem']}
                h="233px"
                gap={['33px']}
                mainH={['72vh', '80vh']}
            />
            <ReServices />
            <Box h={['0', '6rem']} bgColor="white" />
            <BottomHero
                title="Simplify candidate sourcing, elevate 
                client management, and ensure a 
                seamless employee onboarding process."
            />
        </Box>
    );
};
