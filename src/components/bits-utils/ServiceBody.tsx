import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';
import { AiOutlineFieldTime, AiOutlineUserSwitch } from 'react-icons/ai';
import { FaFileContract } from 'react-icons/fa';
import { MdOutlineBarChart } from 'react-icons/md';
import { LuUsers } from 'react-icons/lu';
import { TiStopwatch } from 'react-icons/ti';

export const ServiceBody = () => {
    return (
        <Box py="4rem" mx="auto" w="90%">
            <MainTitle text="Time tracking software features for employees" />
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
    );
};
