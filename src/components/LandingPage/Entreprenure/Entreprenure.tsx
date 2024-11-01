import { Box } from '@chakra-ui/react';
import React from 'react';
import { EnService } from './EnService';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { EnItems } from './EnItems';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { useRouter } from 'next/router';

export const Entreprenure = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.400"
                btnClick={() => router.push('/pricing')}
                btnText="Start Using for FREE – Sign up here"
                title="Improve your teams productivity and efficiency"
                desc="Optimize Employee Productivity, Manage Time Budgets, and Streamline Administration Effortlessly with TIMBA."
                gap={['20px', '60px']}
                sub="Enjoy all features for free ( 30 days trail - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/en.png"
                btnColor="brand.100"
            />
            <EnService />
            <EnItems />
        </Box>
    );
};
