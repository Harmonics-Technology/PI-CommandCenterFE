import { Box } from '@chakra-ui/react';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';
import { HrService } from './HrService';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { useRouter } from 'next/router';

export const HumanReaource = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.400"
                btnClick={() => router.push('/pricing')}
                btnText="Start Using for FREE – Sign up here"
                title="Revolutionize Your HR Operations with TIMBA"
                desc="Say goodbye to manual processes, scattered data, and time-consuming tasks. Let TIMBA revolutionize your HR operations and elevate your efficiency like never before."
                gap={['20px', '60px']}
                sub="Enjoy all features for free ( 30 days trail - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/hr.png"
                btnColor="brand.100"
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
