import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const Report = () => {
    return (
        <Box>
            <Mainhero
                title="Insightful Reports for Informed Progress: Navigate Your Path to Excellence with TIMBA"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (5).png"
                bgColor="brand.100"
                color="white"
                h="auto"
                gap={['33px', '2.25rem']}
                mainH={['55vh', '80vh']}
                fs={{
                    base: '24px',
                    xl: '2.3rem',
                    '2xl': '2.75rem',
                }}
            />
            <FeatureBody
                topText="TIMBA empowers you to make informed decisions and optimize your productivity journey through a robust array of reports. From billable hours to productivity metrics, TIMBA's reporting feature provides you with the tools to track progress, make strategic adjustments, and achieve your goals."
                mainTitle="Unveil Actionable Insights with TIMBA's Comprehensive Reporting Feature"
                options={[
                    {
                        title: 'Productivity Metrics',
                        sub: 'TIMBA delves into your workflow, presenting you with detailed productivity metrics. Visualize your performance trends, enabling you to identify areas of improvement and capitalize on strengths.',
                    },
                    {
                        title: 'Effortless Progress Tracking',
                        sub: "Stay on course with TIMBA's comprehensive progress reports. Track project milestones, task completion rates, and overall project advancement with ease.",
                    },
                    {
                        title: 'Billable Hours Insights',
                        sub: "Unlock financial transparency with TIMBA's billable hours reports. Monitor billable hours for accurate client billing and financial planning.",
                    },
                    {
                        title: 'Customizable Data Visualization',
                        sub: 'TIMBA allows you to tailor reports to your preferences. Choose from a range of data visualizations that suit your analytical style.',
                    },
                    {
                        title: 'Performance Trends',
                        sub: "TIMBA's historical data tracking offers insights into performance trends over time. Use this data to make strategic adjustments and drive consistent improvement.",
                    },
                    {
                        title: 'Project Efficiency Analysis',
                        sub: "Dive into project efficiency with TIMBA's project-specific reports. Analyze resource allocation, task dependencies, and project timelines to ensure optimal project management.",
                    },
                ]}
                img="/assets/pr (5).png"
                subText="Uncover key performance indicators, track progress, and fine-tune your strategies with ease. TIMBA - Your Gateway to Informed Progress and Sustainable Success."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
