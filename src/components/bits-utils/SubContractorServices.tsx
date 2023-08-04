import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUserSwitch, AiOutlineFieldTime } from 'react-icons/ai';
import { FaFileContract } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineBarChart } from 'react-icons/md';
import { TiStopwatch } from 'react-icons/ti';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';
import { SingleShowCase } from './SingleShowCase';
import { useRouter } from 'next/router';

export const SubContractorServices = () => {
    const router = useRouter();
    return (
        <Box>
            <Box bgColor="brand.100" pos="relative">
                <Box p="4rem 0 8rem" mx="auto" w="90%">
                    <MainTitle
                        text="Track every minute of your billable time. We know this means a lot you"
                        sub="Discover the features that make TIMBA the ultimate solution for your needs."
                        color="white"
                    />
                    <Grid
                        templateColumns={['1fr', 'repeat(3,1fr)']}
                        gap="2rem"
                        mt="4rem"
                    >
                        <ServiceCard
                            sub="Track every minute spent on tasks and learn
                how long it takes to complete projects. Track
                time with one click using the simple
                employee stopwatch."
                            title="Employee Onboarding"
                            icon={AiOutlineUserSwitch}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Generate timesheets automatically based on
            time entries. See a detailed breakdown of
            employees’ hours by date, client, and project.
            Review, approve or reject timesheets from a
            single location."
                            title="Automated timesheets"
                            icon={AiOutlineFieldTime}
                            bg="white"
                        />
                        <ServiceCard
                            sub="No need to worry if someone forgets to track
            time. Our time tracking software allows you
            to add time entries manually to ensure all
            time worked is tracked."
                            title="Contract Management"
                            icon={FaFileContract}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Track every minute spent on tasks and learn
                how long it takes to complete projects. Track
                time with one click using the simple
                employee stopwatch."
                            title="Payment Partner"
                            icon={LuUsers}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Generate timesheets automatically based on
            time entries. See a detailed breakdown of
            employees’ hours by date, client, and project.
            Review, approve or reject timesheets from a
            single location."
                            title="Reports"
                            icon={MdOutlineBarChart}
                            bg="white"
                        />
                        <ServiceCard
                            sub="No need to worry if someone forgets to track
            time. Our time tracking software allows you
            to add time entries manually to ensure all
            time worked is tracked."
                            title="Client Onboarding"
                            icon={TiStopwatch}
                            bg="white"
                        />
                    </Grid>
                </Box>
                <Box pos="absolute" top="0" left="0">
                    <Image src="/assets/cu.png" w="full" alt="banner image" />
                </Box>
                <Box
                    pos="absolute"
                    bottom="0"
                    right="0"
                    transform="rotate(180deg)"
                >
                    <Image src="/assets/cu.png" w="full" alt="banner image" />
                </Box>
            </Box>
            <SingleShowCase
                btn="Start Using TIMBA Today"
                image="/assets/lapb.png"
                onClick={() => router.push('/pricing')}
                sub="Sign up for FREE trial - No credit card required"
                title="With TIMBA as your HR management ally, embrace a new era of efficiency, accuracy, and productivity. Simplify payroll processing, safeguard employee data, and elevate your HR operations to new heights."
            />
        </Box>
    );
};
