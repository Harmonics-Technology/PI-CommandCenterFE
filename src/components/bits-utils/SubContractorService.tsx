import { Box } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { SingleServiceLTR } from './SingleServiceLTR';
import { useRouter } from 'next/router';

export const SubContractorService = () => {
    const router = useRouter();
    return (
        <Box py="4rem" mx="auto" w="90%">
            <Box mb="4rem">
                <MainTitle
                    text="Why Subcontractor love TIMBA"
                    sub="TIMBA goes beyond just tracking time; it empowers subcontractors to elevate their performance and take their businesses to new height"
                />
            </Box>
            <SingleServiceLTR
                image="/assets/sublg.png"
                items={[
                    {
                        title: 'Increased Visibility',
                        sub: 'Get a crystal-clear overview of your time allocation, enabling you to optimize productivity and make every minute count.',
                    },
                    {
                        title: 'Improved Communication',
                        sub: "TIMBA's communication tools facilitate seamless interactions with clients and subcontractor teams, ensuring everyone is on the same page for successful project outcomes.",
                    },
                    {
                        title: 'Enhanced Collaboration',
                        sub: "Simplify project collaboration with TIMBA's task management features, making teamwork a breeze and enhancing overall project efficiency.",
                    },
                    {
                        title: 'Cost-Effective Solution',
                        sub: "Embrace TIMBA's cloud-based platform and eliminate the need for expensive on-premises software, saving you money on IT costs.",
                    },
                ]}
                btn="Sign Up Today"
                onClick={() => router.push('/pricing')}
            />
        </Box>
    );
};
