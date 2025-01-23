import { Box, VStack } from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const Constructions = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.100"
                btnClick={() => router.push('/pricing')}
                btnText="Get Started for Free Today"
                title="Transform Construction Management with TIMBA"
                desc="In the fast-paced construction industry, TIMBA provides the tools needed to streamline workflows, manage resources, and ensure projects stay on track from start to finish. With advanced tracking and scheduling features, TIMBA helps your team deliver projects on time and within budget."
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/cos.jpg"
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
                            image="/assets/cosa.png"
                            title="Real-Time Tracking and Time Management"
                            desc="Stay in control of your project’s progress with TIMBA’s real-time tracking, allowing you to monitor timelines and adjust resources as needed."
                            items={[
                                {
                                    sub: `<p><strong>Time Tracking:  </strong>Record hours in real-time, ensuring every team member’s contribution is accounted for accurately.</p>
                                    <p><strong>Progress Updates: </strong>Get immediate insights into project phases and milestones, keeping everyone aligned on the project’s status.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/cosb.png"
                            title="Resource Allocation for Optimized Efficiency"
                            desc="Manage materials, equipment, and personnel efficiently with TIMBA’s resource allocation tools, designed to keep your project moving forward."
                            items={[
                                {
                                    sub: `<p><strong>Centralized Resource Management: </strong>Allocate resources to each phase of the project, ensuring equipment and materials are where they’re needed.</p>
                                    <p><strong>Cost Control: </strong>Track usage to prevent resource overuse and stay within budget, keeping your project financially viable.</p>`,
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
                            image="/assets/cosc.png"
                            title="Task Scheduling and Gantt Charts"
                            desc="Coordinate tasks seamlessly with TIMBA’s scheduling tools and visualize your project’s timeline with intuitive Gantt charts."
                            items={[
                                {
                                    sub: `<p><strong>Task Scheduling:  </strong>Assign and schedule tasks based on team availability and project priorities, helping you avoid downtime and meet deadlines.</p>
                                    <p><strong>Gantt Chart Integration:  </strong>View a visual representation of your project’s progress, making it easy to identify potential bottlenecks and keep tasks on track.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/cosd.png"
                            title="GPS Monitoring for On-Site Accuracy"
                            desc="Know exactly where your team is and how resources are being utilized on-site with TIMBA’s GPS monitoring capabilities."
                            items={[
                                {
                                    sub: `<p><strong>GPS Tracking: </strong>Monitor the real-time location of your team members and equipment, ensuring effective resource deployment.</p>
                                <p><strong>Enhanced Security: </strong> Improve safety and accountability with precise tracking of personnel and assets at the construction site.</p>`,
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <SolutionHero
                title="Drive Success in Your Construction Projects with TIMBA"
                sub="Simplify your project management, enhance team coordination, and stay on schedule with TIMBA’s all-in-one solution tailored for construction teams."
            />
        </Box>
    );
};
