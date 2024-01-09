import { Box, Grid } from '@chakra-ui/react';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { UserCard } from '@components/bits-utils/UserCard';
import React from 'react';

export const BlogSection = () => {
    return (
        <Box bgColor="white">
            <Box mb="4rem" pt="4rem">
                <MainTitle
                    text="TIMBA Blog <br/> Insights for a Productive Tomorrow"
                    w="90%"
                />
            </Box>
            <Grid
                templateColumns={['1fr', 'repeat(3,1fr)']}
                gap="2rem"
                mt="3rem"
                w="80%"
                mx="auto"
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
            </Grid>
        </Box>
    );
};
