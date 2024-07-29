import { Box } from '@chakra-ui/react';
import { Faq } from '@components/bits-utils/Faq';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { ServiceBody } from '@components/bits-utils/ServiceBody';
// import { ServiceCurve } from '@components/bits-utils/ServiceCurve';
import React from 'react';
import { BlogSection } from './BlogSection';
import { WhoCanUseTimbaNew } from '@components/bits-utils/WhoCanUseTimbaNew';

export const Home = () => {
    return (
        <Box>
            <Mainhero
                title="Optimize Your Workforce <br/> with Ease"
                sub="Your all-in-one workforce management solution for time tracking, employee management, project workflows, and team collaboration"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/laptop.svg"
                bgColor="#f3f9f8"
                isHome
                fs={['24px', '3.125rem']}
            />
            <ServiceBody />
            <WhoCanUseTimbaNew />
            <BlogSection />
            {/* <ServiceCurve /> */}
            {/* <MiniCTA
                bg="#f5f6f8"
                btn="Start Using TIMBA Today"
                color="#182c51"
                text="TIMBA is the right tool to help you increase your productivity and profit."
            /> */}

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
