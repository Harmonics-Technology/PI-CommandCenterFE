import { Box, VStack } from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const RemoteTeams = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="#285250"
                btnClick={() => router.push('/pricing')}
                btnText="Get Started for Free Today"
                title="Supercharge Your Remote Team with TIMBA"
                desc="Take control of your remote workforce with TIMBA’s all-in-one platform. From time tracking to automated invoicing and real-time collaboration, TIMBA provides everything your team needs to stay connected and productive—whether on desktop, mobile, or web."
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/rea.jpg"
            />
            <Box w="full" bgColor="white">
                <Box p={['2rem 0', '8rem 0 1rem']}>
                    <VStack
                        spacing="5rem"
                        w={['90%', '85%']}
                        mx="auto"
                        pb="4rem"
                        bgColor="white"
                    >
                        <SingleServiceLTR
                            image="/assets/reb.png"
                            title="Centralized Dashboard for Complete Team Oversight"
                            desc="Manage your remote team effortlessly with TIMBA’s intuitive dashboard. Get real-time insights into hours worked, team activity, and project status. TIMBA simplifies admin tasks, so you can spend less time managing and more time focusing on high-value work."
                            items={[
                                {
                                    title: 'Comprehensive Time Tracking',
                                    sub: 'Track work across devices and platforms. TIMBA’s detailed timesheets let you monitor time spent on tasks, view daily progress reports, and easily identify areas that need more attention.',
                                },
                                {
                                    title: 'Seamless Project and Task Management',
                                    sub: '<p><strong>Easy Task Adjustments: </strong>Reassign or delete tasks on the go, keeping your team agile and efficient.</p><p><strong>Integrated Time Tracking: </strong>Log hours directly from the project management module, with the option to transfer hours to timesheets automatically.</p>',
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/rec.png"
                            title="Amplify Productivity with Smart Tools"
                            desc="TIMBA empowers your team to do their best work by simplifying remote collaboration and task management. With real-time updates and insightful reports, TIMBA helps you avoid bottlenecks and stay on schedule."
                            items={[
                                {
                                    title: 'Track & Optimize Productivity',
                                    sub: `<p><strong>Real-Time Insights: </strong>TIMBA’s activity tracking gives you an overview of how your team is performing throughout the day.</p><p><strong>Bottleneck Detection: </strong>Identify and resolve task delays before they affect your project's timeline.</p><p><strong>Bottleneck Detection </strong>Identify and resolve task delays before they affect your project's timeline.</p>`,
                                },
                                {
                                    title: 'Reward Productivity & Growth',
                                    sub: 'Celebrate your team’s successes with TIMBA’s built-in achievement features. Recognize productivity milestones and create a positive, motivating remote work culture.',
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <Box w="full" bgColor="#F8FBFB">
                <Box p={['2rem 0', '4rem 0 3rem']}>
                    <VStack
                        spacing="5rem"
                        w={['90%', '85%']}
                        mx="auto"
                        pb="4rem"
                    >
                        <SingleServiceLTR
                            image="/assets/red.png"
                            title="Flexibility Meets Transparency"
                            desc="TIMBA is designed to offer flexibility for both team leaders and employees. Customize settings, control access, and keep everyone in sync. Screenshots, task completion data, and app usage reports provide transparency while giving team members control over their workflows."
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/ree.png"
                            title="Automate Payments & Keep Projects on Budget"
                            desc="Save time by automating payroll processes. With TIMBA, you can set pay rates for individual team members and track project costs. When the pay period ends, TIMBA will calculate the amounts due, making payments quick and hassle-free."
                            items={[
                                {
                                    sub: `<p><strong>Automated Payments: </strong>Simplify payroll with automated calculations and easy integrations.</p><p><strong>Budget Tracking: </strong>Set project budgets and track hours to ensure you stay within limits.</p>`,
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <SolutionHero
                title="Unlock the Full Potential of Your Remote Team with TIMBA"
                sub="Whether you're managing a small team or a global workforce, TIMBA’s tools ensure that everyone is aligned, productive, and working towards success. Elevate your remote work experience today."
            />
        </Box>
    );
};
