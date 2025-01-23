import React from 'react';
import { ReServices } from './ReServices';
import { Box } from '@chakra-ui/react';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { useRouter } from 'next/router';

export const Recruiter = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.100"
                btnClick={() => router.push('/pricing')}
                btnText="Start Using for FREE – Sign up here"
                title="Simplifying Client Management and Employee Onboarding"
                desc="With TIMBA's powerful functionalities, recruiters can unlock the true potential of efficient candidate sourcing, seamless onboarding, contract management and client satisfaction"
                gap={['20px', '60px']}
                sub="Enjoy all features for free ( 30 days trail - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/re.png"
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
