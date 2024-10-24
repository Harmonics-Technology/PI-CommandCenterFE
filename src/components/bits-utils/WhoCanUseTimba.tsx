import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { UserCard } from './UserCard';

export const WhoCanUseTimba = () => {
    return (
        <Box pt="3rem" pb="10rem" mx="auto" w="full" bgColor="white">
            <MainTitle text="Who Can Use TIMBA ?" w="80%" />
            <Box mx="auto" w="85%">
                <Grid
                    templateColumns={['1fr', 'repeat(4,1fr)']}
                    gap="2rem"
                    mt="3rem"
                >
                    <UserCard
                        image="/assets/item (8).png"
                        title="SMEs Businesses"
                        sub="Timba is a good choice for small and medium businesses that need a simple and affordable project management solution. It is easy to use and does not require a lot of technical knowledge."
                    />
                    <UserCard
                        image="/assets/item (7).png"
                        title="Remote \ Virtual teams"
                        sub="Timba is a great option for remote teams that need to manage their projects, tasks, and time effectively. It can help teams stay organized, on track, and communicate effectively with each other."
                    />
                    <UserCard
                        image="/assets/item (6).png"
                        title="Human Resources Managers"
                        sub="Timba can be used to track employee performance, set goals, and provide feedback. This can help HR managers identify areas for improvement and ensure that employees are meeting their objectives."
                    />
                    <UserCard
                        image="/assets/item (5).png"
                        title="Sub-Contractors"
                        sub="TIMBA empowers subcontractors by providing tools to monitor progress, pinpoint areas for enhancement, and make informed decisions. Generate comprehensive reports on project status, time utilization and expense"
                    />
                    <UserCard
                        image="/assets/item (4).png"
                        title="Large Businesses"
                        sub="TIMBA isn't limited by scale; it's designed to empower large enterprises with data-driven insights. Gain a deep understanding of project status, resource utilization, and client engagement, enabling smarter decisions that drive success"
                    />
                    <UserCard
                        image="/assets/item (3).png"
                        title="Creative and Marketing Agencies"
                        sub="Timba can be used to track time and expenses, which can help creative agencies get paid for their work. For example, Timba can be used to track billable hours, expenses, and travel costs. It can also be used to generate reports on time and expense data."
                    />
                    <UserCard
                        image="/assets/item (2).png"
                        title="Manufacturing and IT"
                        sub="TIMBA isn't just for creative minds – it's a vital tool for manufacturing and IT industry. Harness its potential to manage projects, allocate resources, and monitor progress, achieving superior results in the manufacturing and tech world."
                    />
                    <UserCard
                        image="/assets/item (1).png"
                        title="Government Establishments"
                        sub="Government establishments can benefit from TIMBA's robust features to enhance project management, resource allocation, and communication. TIMBA brings transparency and efficiency to public sector initiatives"
                    />
                </Grid>
            </Box>
        </Box>
    );
};
