import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const ClientOnboarding = () => {
    return (
        <Box>
            <Mainhero
                title="Effortless Client Onboarding; Welcome New Ventures with TIMBA's Seamless Integration"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (5).png"
                bgColor="brand.400"
                color="white"
                gap="2.25rem"
                fs="2.75rem"
            />
            <FeatureBody
                topText="TIMBA revolutionizes how you onboard new clients, ensuring a swift and seamless introduction to your services. Through pre-configured accounts, streamlined access, and insightful tracking, TIMBA empowers subcontractors to create lasting impressions and establish fruitful collaborations."
                mainTitle="Forge Strong Client Relationships with TIMBA's Effortless Onboarding Experience"
                options={[
                    {
                        title: 'Efficient Onboarding Process',
                        sub: 'Bid farewell to cumbersome client onboarding processes. TIMBA simplifies the experience by offering pre-configured accounts that expedite the setup for new clients.',
                    },
                    {
                        title: 'Instant Feature Access',
                        sub: 'TIMBA ensures your clients hit the ground running. Provide immediate access to essential features, enabling them to navigate your offerings effortlessly.',
                    },
                    {
                        title: 'Enhanced Client Engagement',
                        sub: 'With TIMBA, your clients experience a seamless introduction to your services, fostering a sense of engagement and satisfaction from the outset.',
                    },
                    {
                        title: 'Precise Productivity Tracking',
                        sub: 'TIMBA empowers you to monitor your productivity during client engagements. Keep tabs on tasks, projects, and deliverables to ensure peak performance.',
                    },
                    {
                        title: 'Clear Collaboration Channels',
                        sub: "Foster transparent communication and collaboration through TIMBA's integrated tools. Seamlessly interact with clients, ensuring alignment and progress.",
                    },
                    {
                        title: 'Real-time Transparency',
                        sub: "TIMBA's payment integration offers real-time insights into transaction statuses. Monitor payment progress with ease and provide your team with clear visibility.",
                    },
                ]}
                img="/assets/pr (7).png"
                subText="Experience the Future of Client Onboarding with TIMBA. Elevate your subcontracting endeavors by providing an unparalleled onboarding experience that resonates with clients and sets the tone for collaborative success. TIMBA - Where Client Onboarding Meets Effortless Excellence."
                fs="2.625rem"
                bHero="Have a unique service !"
            />
        </Box>
    );
};
