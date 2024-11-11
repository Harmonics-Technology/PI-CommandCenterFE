import { Box, VStack } from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const LargeTeams = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.900"
                btnClick={() => router.push('/pricing')}
                btnText="Get Started for Free Today"
                title="Empower Your Large Teams with TIMBA"
                desc="TIMBA’s robust project management features are designed for large teams that need structure, flexibility, and comprehensive oversight. Assign multiple project managers, track progress in real-time, and ensure all tasks are on target, all from one intuitive platform."
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/laa.jpg"
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
                            image="/assets/lab.png"
                            title="Effortless Coordination for Large Teams"
                            desc="Large teams demand dynamic coordination and efficient task management. With TIMBA, you can assign multiple project managers to oversee different parts of the project, ensuring that nothing falls through the cracks."
                            items={[
                                {
                                    sub: '<p><strong>Multi-Manager Assignment: </strong>Divide and conquer by assigning multiple project managers to lead specific areas or phases of a project.</p><p><strong>Real-Time Task Updates: </strong>Edit, delete, or reassign tasks as the project evolves, keeping your team agile and responsive.</p><p><strong>Seamless Communication: </strong>Keep all stakeholders in the loop with real-time project updates and collaborative tools.</p>',
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/lac.png"
                            title="Advanced Time Tracking and Resource Management"
                            desc="TIMBA offers large teams a flexible and efficient way to manage time and resources. Track hours worked, assign resources to tasks, and ensure projects stay within budget and deadlines."
                            items={[
                                {
                                    sub: `<p><strong>Integrated Time Tracking: </strong>Log hours worked directly into project timelines, with the option to add these hours to team members' timesheets.</p>
                                    <p><strong>Resource Allocation: </strong>Manage team resources effectively by assigning tasks based on availability and skillset.</p>
                                    <p><strong>Track Progress: </strong>Use Gantt charts and task timelines to monitor every stage of your project, from planning to completion.</p>`,
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
                            image="/assets/lad.png"
                            title="Enhanced Collaboration and Transparency"
                            desc="TIMBA’s centralized platform promotes transparency and collaboration, even for large teams spread across multiple locations."
                            items={[
                                {
                                    sub: `<p><strong>Real-Time Collaboration: </strong>Share files, update task statuses, and communicate directly within the platform to keep everyone aligned.</p>
                                    <p><strong>Audit Trail: </strong>Keep track of changes with an audit trail feature that records all edits and updates to tasks and projects.</p>
                                    <p><strong>Data-Driven Insights: </strong>Get detailed reports on team performance, task completion rates, and potential project bottlenecks.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/lae.png"
                            title="Customizable Permissions and Oversight"
                            desc="For large teams, managing who can access and control specific aspects of a project is crucial. TIMBA’s customizable permissions let you control what project managers, team members, and stakeholders can see and edit."
                            items={[
                                {
                                    sub: `<p><strong>Permission Control: </strong>Set user roles and access levels to ensure that sensitive data and high-level tasks are managed by the right people.</p>
                                <p><strong>Comprehensive Reporting: </strong>Monitor team activity, project progress, and task completion from TIMBA’s centralized dashboard.</p>`,
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <SolutionHero
                title="Manage Large Projects with Ease Using TIMBA"
                sub="With TIMBA’s project management features tailored for large teams, you'll have all the tools you need to keep your team organized, productive, and on track. Take the complexity out of managing big projects—start using TIMBA today."
            />
        </Box>
    );
};
