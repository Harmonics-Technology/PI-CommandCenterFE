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
            <Mainhero />
            <ServiceBody />
            <ServiceCurve />
            <Faq />
            <BottomHero />
        </Box>
    );
};
