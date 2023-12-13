import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const Timesheet = () => {
    return (
        <Box>
            <Mainhero
                title="Effortless Time Tracking Made Simple: TIMBA's Automated Timesheet Solution"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (5).png"
                bgColor="brand.400"
                color="white"
                gap="2.25rem"
                fs="2.75rem"
                isVertical
            />
            <FeatureBody
                topText="Gone are the days of painstakingly recording every minute spent on tasks and projects. TIMBA introduces a game-changing automated timesheet solution, ensuring accuracy, efficiency, and peace of mind for you and your team."
                mainTitle="Maximize Productivity with TIMBA's Innovative Automated Timesheet Feature"
                options={[
                    {
                        title: 'Visualize Your Project',
                        sub: "Dive into the heart of your project through TIMBA's immersive visualizations. Craft Gantt charts and timelines that offer a comprehensive overview of task interdependencies and project milestones.",
                    },
                    {
                        title: 'Seamless Coordination',
                        sub: 'TIMBA ensures a harmonious workflow by allowing you to coordinate tasks seamlessly. Identify task relationships, overlaps, and resource allocation with ease.',
                    },
                    {
                        title: 'Unveil Potential Bottlenecks',
                        sub: "TIMBA's intelligent analysis empowers you to detect bottlenecks before they hinder progress. Stay proactive in resolving potential roadblocks and maintain the project's momentum.",
                    },
                    {
                        title: 'Precise Project Tracking',
                        sub: "With TIMBA, your project's status is at your fingertips. Monitor progress, completion rates, and task duration to ensure your project stays on course.",
                    },
                    {
                        title: 'Efficient Resource Allocation',
                        sub: "Optimize resource distribution with TIMBA's resource allocation feature. Ensure that each task receives the attention and resources it needs for successful execution.",
                    },
                    {
                        title: 'Real-time Collaboration',
                        sub: 'TIMBA fosters collaboration by enabling real-time sharing and updates. Team members stay aligned, informed, and engaged, facilitating smoother teamwork.',
                    },
                ]}
                img="/assets/pr (1).png"
                subText="Redefine your project management experience with TIMBA's revolutionary project planning capabilities. Unleash your project's true potential and watch as every task seamlessly fits into the grand scheme of success. Your journey to impeccable project execution begins with TIMBA."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
