import { Box } from '@chakra-ui/react';
import { Faq } from '@components/bits-utils/Faq';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { ServiceBody } from '@components/bits-utils/ServiceBody';
// import { ServiceCurve } from '@components/bits-utils/ServiceCurve';
import React from 'react';
import { BlogSection } from './BlogSection';
import { WhoCanUseTimbaNew } from '@components/bits-utils/WhoCanUseTimbaNew';
import { TimbaStandOut } from '@components/bits-utils/TimbaStandOut';

export const Home = () => {
    return (
        <Box>
            <Mainhero
                title="Optimize Your Workforce <br/> with Ease. Let Timba Do <br/> the Heavy Lifting."
                sub="Timba is your all-in-one workforce management suite designed to tackle the most common challenges: time tracking, project management, employee engagement, client onboarding, and contract management. Plus, seamlessly collaborate and manage payments for remote teams across the globe."
                buttonTitle="Sign Up For Free"
                image="/assets/newlaptop.png"
                bgColor="brand.900"
                color="white"
                isHome
                fs={{
                    base: '24px',
                    xl: '2.5rem',
                    '2xl': '3rem',
                }}
                h={['23rem', 'auto']}
                mainH="90vh"
            />
            <ServiceBody />
            <WhoCanUseTimbaNew />
            <TimbaStandOut />
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
