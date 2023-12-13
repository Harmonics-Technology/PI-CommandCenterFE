import { Box } from '@chakra-ui/react';
import { Faq } from '@components/bits-utils/Faq';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { MiniCTA } from '@components/bits-utils/MiniCTA';
import { ServiceBody } from '@components/bits-utils/ServiceBody';
// import { ServiceCurve } from '@components/bits-utils/ServiceCurve';
import { Spacing } from '@components/bits-utils/Spacing';
import { WhoCanUseTimba } from '@components/bits-utils/WhoCanUseTimba';
import React from 'react';

export const Home = () => {
    return (
        <Box>
            <Mainhero
                title="The simple way to track productivity, save time and increase profit"
                sub="Your All-in-One Solution for Enhanced Productivity, Project Management, Employee Engagement, Client Onboarding, and Contract Management. Plus, Seamlessly Collaborate and Transact Globally with Our Integrated Payment Partnerships for Remote Teams Across the Globe."
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/laptop.svg"
                bgColor="white"
            />
            <ServiceBody />
            <WhoCanUseTimba />
            {/* <ServiceCurve /> */}
            <MiniCTA
                bg="#f5f6f8"
                btn="Start Using TIMBA Today"
                color="#182c51"
                text="TIMBA is the right tool to help you increase your productivity and profit."
            />
            <Faq />
            <BottomHero
                title=" Explore the world of efficient time tracking and
                            with TIMBA – Your partner in optimizing
                            productivity."
            />
            {/* <Spacing space="13rem" color="white" /> */}
        </Box>
    );
};
