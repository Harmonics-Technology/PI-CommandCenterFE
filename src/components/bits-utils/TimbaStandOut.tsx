import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Cubes, Doc, Rocket, Smile, Support, Todo } from '@components/Icons';
import { MainTitle } from './Heros/MainTitle';

export const TimbaStandOut = () => {
    const data = [
        {
            key: 1,
            icon: Support,
            title: 'Dedicated Support',
            sub: 'Our support team is here to help you every step of the way. Reach out via chat or call whenever you need assistance.',
        },
        {
            key: 2,
            icon: Doc,
            title: 'Customizable to Your Needs',
            sub: 'Timba adapts to your unique requirements. Whether you need tailored shifts, customized reports, or specific tools for your industry, Timba is built to fit your business.',
        },
        {
            key: 3,
            icon: Rocket,
            title: 'Customizable to Your Needs',
            sub: 'Timba adapts to your unique requirements. Whether you need tailored shifts, customized reports, or specific tools for your industry, Timba is built to fit your business.',
        },
        {
            key: 4,
            icon: Smile,
            title: 'User-Friendly Interface',
            sub: 'No steep learning curve here. Timba’s simple, intuitive design means anyone can get up and running quickly—even if you’re not tech-savvy',
        },
        {
            key: 5,
            icon: Cubes,
            title: 'Versatile for Any Industry',
            sub: 'From small businesses to large corporations, Timba is designed to fit seamlessly into any industry or team size. It’s a one-stop solution for project management, onboarding, and more.',
        },
        {
            key: 6,
            icon: Todo,
            title: 'Advanced Task Management',
            sub: 'Gain total visibility over your projects and tasks with Timba’s smart dashboards. Stay on top of deadlines and ensure nothing falls through the cracks.',
        },
    ];
    return (
        <Box bgColor="#f5f6f8" pb="6rem">
            <Box pt="3rem">
                <MainTitle text="Why Timba Stands Out" w={['100%', '60%']} />
            </Box>
            <Grid
                templateColumns={['1fr', 'repeat(3,1fr)']}
                gap="2rem"
                mt="4rem"
                w="80%"
                mx="auto"
            >
                {data?.map((x) => (
                    <ServiceCard
                        icon={x?.icon}
                        title={x?.title}
                        bg="white"
                        sub={x?.sub}
                        key={x?.key}
                    />
                ))}
            </Grid>
        </Box>
    );
};
