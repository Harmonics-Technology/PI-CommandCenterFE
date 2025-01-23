import { Box, Circle, Grid } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';
import { SingleShowCase } from './SingleShowCase';
import { useRouter } from 'next/router';
import {
    Collab,
    PayPartner,
    PrjMadeSimple,
    PunctualPay,
    TTE,
    Tax,
} from '@components/Icons';

export const SubContractorServices = () => {
    const router = useRouter();
    return (
        <Box>
            <Box bgColor="brand.100" pos="relative">
                <Box
                    p={['2rem 0 4rem', '4rem 0 8rem']}
                    mx="auto"
                    w={['90%', '85%']}
                >
                    <MainTitle
                        text="Track every minute of your billable time. We know this means a lot you"
                        sub="Discover the features that make TIMBA the ultimate solution for your needs."
                        color="white"
                        w={['100%', '60%']}
                    />
                    <Grid
                        templateColumns={['1fr', 'repeat(3,1fr)']}
                        gap="2rem"
                        mt={['20px', '4rem']}
                    >
                        <ServiceCard
                            sub="Effortlessly track your time with TIMBA's 
                            user-friendly online timesheet system. 
                            Say goodbye to manual spreadsheets and 
                            welcome precise time tracking, allowing 
                            you to make every minute count."
                            title="Time Tracking Excellence"
                            icon={TTE}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Stay on top of your projects with TIMBA's 
                            project management tools. Organize tasks, 
                            set deadlines, and enjoy seamless 
                            collaboration, ensuring you meet project 
                            goals with ease."
                            title="Project Management Made Simple"
                            icon={PrjMadeSimple}
                            bg="white"
                        />
                        <ServiceCard
                            sub="TIMBA's automated payment system 
                            ensures you get paid on time for your 
                            hard work. Accurate billable hour 
                            tracking guarantees no payment delays."
                            title="Punctual Payments"
                            icon={PunctualPay}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Collaborate seamlessly with clients and 
                            fellow subcontractors using TIMBA's 
                            communication tools. Share information 
                            and work together to achieve project success.x"
                            title="Enhanced Collaboration"
                            icon={Collab}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Gain valuable insights into your productivity 
                            with TIMBA's comprehensive reports and 
                            analytics. Use data-driven decisions to 
                            optimize your performance and grow 
                            your subcontracting business."
                            title="Detailed Reports for Insights"
                            icon={PayPartner}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Simplify tax season with TIMBA's tax 
                            management features. Organize 
                            tax-related information effortlessly, 
                            ensuring compliance and peace of mind."
                            title="Hassle-Free Tax Management"
                            icon={Tax}
                            bg="white"
                        />
                    </Grid>
                </Box>
                <Circle
                    size="8rem"
                    bgColor="#FBC953"
                    pos="absolute"
                    left="-5%"
                    top="0%"
                    zIndex="1"
                    display={['none', 'block']}
                />
                <Circle
                    size="8rem"
                    bgColor="#FBC953"
                    pos="absolute"
                    right="-5%"
                    bottom="0%"
                    zIndex="1"
                    display={['none', 'block']}
                />
            </Box>
            <SingleShowCase
                btn="Start Using TIMBA Today"
                image="/assets/pr (7).png"
                onClick={() => router.push('/pricing')}
                sub="Sign up for FREE trial - No credit card required"
                main="Embrace a New Era of Efficiency, Precision, and Productivity"
                title="Empower your journey and elevate your operations to unprecedented heights with TIMBA."
            />
        </Box>
    );
};
