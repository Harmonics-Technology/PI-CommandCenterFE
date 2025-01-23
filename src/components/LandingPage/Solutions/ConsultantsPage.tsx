import { Box, VStack } from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const ConsultantsPage = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.100"
                btnClick={() => router.push('/pricing')}
                btnText="Get Started for Free Today"
                title="Boost Your Consulting Efficiency with TIMBA"
                desc="TIMBA’s project management tools empower consultants to streamline their workflows. Track every billable hour, manage project budgets with precision, and generate detailed client reports—all from a single, intuitive platform. Deliver exceptional client results while optimizing your project delivery."
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/coa.jpg"
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
                            image="/assets/cob.png"
                            title="Accurate Billable Hours Tracking for Maximum Revenue"
                            desc="As a consultant, tracking your time efficiently is key to getting paid for every billable minute. TIMBA makes it easy to log time spent on specific tasks, ensuring accurate invoicing and improved profitability."
                            items={[
                                {
                                    sub: `<p><strong>Precise Time Tracking: </strong>Easily track time spent on individual tasks, so you can generate accurate invoices without the hassle</p>
                                    <p><strong>Direct Time Entry: </strong>Log hours directly into your project timelines, with the option to automatically transfer those hours to your timesheets.</p>
                                    <p><strong>Customizable Timesheets: </strong>Tailor your timesheets to match your client’s reporting needs and ensure transparent billing.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/coc.png"
                            title="Manage Project Budgets with Confidence"
                            desc="Keeping project budgets under control is essential for consultants working with clients. TIMBA allows you to set clear project budgets, monitor spending, and ensure profitability without compromising quality."
                            items={[
                                {
                                    sub: `<p><strong>Budget Management: </strong>Set and monitor project budgets, track expenses, and adjust costs in real-time.</p>
                                    <p><strong>Resource Allocation: </strong>Efficiently allocate resources to tasks based on your project’s financial goals.</p>
                                    <p><strong>Client-Specific Reporting: </strong>Generate reports that break down how your budget is being spent, giving clients full visibility into project costs.</p>`,
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
                            title="Generate Detailed Client Reports with Ease"
                            desc="Communicating project progress is vital for maintaining strong client relationships. With TIMBA, you can easily create detailed reports that showcase the time spent, progress made, and budget status, helping you keep clients in the loop."
                            items={[
                                {
                                    sub: `<p><strong>Comprehensive Reporting: </strong> Produce detailed reports that highlight task completion, hours worked, and budget performance.</p>
                                    <p><strong>Client Transparency: </strong>Provide clients with insights into project timelines, ensuring clear communication and accountability.</p>
                                    <p><strong>Exportable Reports: </strong>Share project reports directly with clients in customizable formats, making client updates effortless.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/lae.png"
                            title="Reassess Workloads and Optimize Project Delivery"
                            desc="TIMBA’s flexible tools allow consultants to reassess workloads, balance resources, and optimize project timelines to ensure on-time delivery and client satisfaction."
                            items={[
                                {
                                    sub: `<p><strong>Workload Reassessment: </strong>Use Gantt charts and timelines to ensure every task is progressing smoothly and meeting client expectations.</p>
                                <p><strong>Timeline Optimization: </strong>Monitor team activity, project progress, and task completion from TIMBA’s centralized dashboard.</p>
                                <p><strong>Bottleneck Detection: </strong>Unveil potential delays with TIMBA’s intelligent analysis, ensuring you stay ahead of any project challenges.</p>`,
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <SolutionHero
                title="Elevate Your Consulting Practice with TIMBA"
                sub="Take control of your consulting projects with TIMBA’s powerful project management features. Track time, manage budgets, and deliver exceptional results to your clients—start using TIMBA today and elevate your consulting practice."
            />
        </Box>
    );
};
