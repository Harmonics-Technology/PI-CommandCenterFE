import { Box } from '@chakra-ui/react';
import { Faq } from '@components/bits-utils/Faq';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { SubContractorService } from '@components/bits-utils/SubContractorService';
import { SubContractorServices } from '@components/bits-utils/SubContractorServices';
import React from 'react';

export const SubContractor = () => {
    return (
        <Box>
            <Mainhero
                title="Empower Your Journey with TIMBA, Say Goodbye to Time-consuming Hassles!"
                sub="Embrace Efficiency and Precision"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/sub.png"
                bgColor="brand.100"
                color="white"
                bd={['30px', '3.125rem']}
                h="233px"
                gap={['33px']}
                mainH={['72vh', '80vh']}
            />
            <SubContractorService />
            <SubContractorServices />
        </Box>
    );
};
