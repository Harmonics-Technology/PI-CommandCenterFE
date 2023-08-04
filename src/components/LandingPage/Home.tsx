import { Box } from '@chakra-ui/react';
import { Faq } from '@components/bits-utils/Faq';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { ServiceBody } from '@components/bits-utils/ServiceBody';
import { ServiceCurve } from '@components/bits-utils/ServiceCurve';
import React from 'react';

export const Home = () => {
    return (
        <Box>
            <Mainhero
                title="The simple way to track productivity, save time and increase profit"
                sub="The All-in-One Tracking Software App for Productivityincrease, project management, Seamless Payment Partnerships for Remote Team, Employee onboarding and Management"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/laptop.png"
                bgColor="white"
            />
            <ServiceBody />
            <ServiceCurve />
            <Faq />
            <BottomHero />
        </Box>
    );
};
