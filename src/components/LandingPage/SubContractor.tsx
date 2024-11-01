import { Box } from '@chakra-ui/react';
import { Faq } from '@components/bits-utils/Faq';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SubContractorService } from '@components/bits-utils/SubContractorService';
import { SubContractorServices } from '@components/bits-utils/SubContractorServices';
import { useRouter } from 'next/router';
import React from 'react';

export const SubContractor = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.100"
                btnClick={() => router.push('/pricing')}
                btnText="Start Using for FREE – Sign up here"
                title="Empower Your Journey with TIMBA, Say Goodbye to Time-consuming Hassles!"
                desc="Embrace Efficiency and Precision"
                gap={['20px', '60px']}
                sub="Enjoy all features for free ( 30 days trail - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/sub.png"
            />
            <SubContractorService />
            <SubContractorServices />
        </Box>
    );
};
