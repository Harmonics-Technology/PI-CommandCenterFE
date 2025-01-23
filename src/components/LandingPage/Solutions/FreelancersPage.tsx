import { Box, VStack } from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const FreelancersPage = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.900"
                btnClick={() => router.push('/pricing')}
                btnText="Get Started for Free Today"
                title="Manage Multiple Clients Effortlessly with TIMBA"
                desc="For freelancers handling diverse clients and projects, TIMBA brings structure and ease to your workflow. Automate your timesheets, streamline payments, and track each task’s progress—all from one intuitive platform. Deliver quality work on time and keep clients satisfied with minimal admin work."
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/fre.jpg"
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
                            image="/assets/frea.png"
                            title="Simplified Time Tracking and Automated Timesheets"
                            desc="Eliminate the hassle of manual timesheets. With TIMBA, you can log hours effortlessly and keep track of every minute spent on client work, ensuring you get paid for every billable hour."
                            items={[
                                {
                                    sub: `<p><strong>Automated Timesheets: </strong>Track your time on each project with TIMBA’s intuitive time logging, allowing you to generate timesheets without extra effort.</p>
                                    <p><strong>Direct Time Entry: </strong>Log hours directly into your project timelines, with the option to automatically transfer those hours to your timesheets.</p>
                                    <p><strong>Customizable Timesheets: </strong>Tailor your timesheets to match your client’s reporting needs and ensure transparent billing.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/freb.png"
                            title="Hassle-Free Payment Management"
                            desc="Managing payments across multiple clients can be challenging. TIMBA’s payment management tools help you stay organized, making invoicing and payment tracking a seamless experience"
                            items={[
                                {
                                    sub: `<p><strong>Integrated Payment Tracking: </strong>View payment statuses and manage client billing within TIMBA, so you know who’s paid and who’s due.</p>
                                    <p><strong>Automatic Invoice Generation: </strong>Generate invoices based on logged hours, ensuring accurate and timely billing for all completed work.</p>
                                    <p><strong>Payment Reminders: </strong>Set up automated reminders for clients, ensuring you receive payments promptly without the need for follow-ups.</p>`,
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
                            image="/assets/frec.png"
                            title="Real-Time Task and Progress Tracking"
                            desc="Keep track of every task you’re handling across projects, with updates that help you stay on top of deadlines and client requirements."
                            items={[
                                {
                                    sub: `<p><strong>Task Management: </strong> Easily add, edit, and delete tasks while tracking progress in real-time, so you’re always aware of what’s next.</p>
                                    <p><strong>Project Comments:  </strong>Add comments and notes directly to tasks, making it easy to communicate updates and track changes for each project.</p>
                                    <p><strong>File Attachments: </strong>Attach files directly to tasks for seamless collaboration and document sharing with clients.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/fred.png"
                            title="Client-Ready Reports for Clear Communication"
                            desc="Provide clients with transparent project updates through TIMBA’s easy-to-generate reports, showing time logged, task progress, and more."
                            items={[
                                {
                                    sub: `<p><strong>Comprehensive Reporting: </strong>Generate reports that give clients a clear view of time spent, task completion, and budget utilization.</p>
                                <p><strong>Client Transparency: </strong>Keep clients informed and involved by sharing customized reports directly from TIMBA.</p>
                                <p><strong>Exportable Reports: </strong>Easily export reports to send directly to clients, maintaining professionalism and transparency.</p>`,
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <SolutionHero
                title="Take Your Freelance Business to the Next Level with TIMBA"
                sub="Achieve seamless project delivery, accurate invoicing, and efficient time management. TIMBA’s suite of tools helps you simplify your freelance work so you can focus on delivering quality results for your clients."
            />
        </Box>
    );
};
