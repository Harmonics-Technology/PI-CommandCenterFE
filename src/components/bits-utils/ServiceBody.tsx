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
        <Box py="4rem" mx="auto" w="80%">
            <MainTitle
                text="Features of TIMBA Your seamless time tracking solution"
                w="80%"
            />
            <Grid
                templateColumns={['1fr', 'repeat(3,1fr)']}
                gap="2rem"
                mt="4rem"
            >
                <ServiceCard
                    sub="TIMBA makes it easy to onboard new 
                    employees by providing them with a 
                    pre-configured account and access to
                    all the features they need to get started."
                    title="Employee Onboarding"
                    icon={AiOutlineUserSwitch}
                    bg="white"
                />
                <ServiceCard
                    sub="TIMBA automatically tracks time spent on 
                    tasks and projects, so you don't have to 
                    worry about manually entering timesheets."
                    title="Automated timesheets"
                    icon={AiOutlineFieldTime}
                    bg="white"
                />
                <ServiceCard
                    sub="Manage all employee contracts securely in 
                    one place. Monitor contract status, start and 
                    end dates, and milestones. Generate invoices 
                    and keep tabs on payments received. 
                    Receive alerts for approaching contract 
                    expirations."
                    title="Contract Management"
                    icon={FaFileContract}
                    bg="white"
                />
                <ServiceCard
                    sub="TIMBA integrates with popular payment 
                    solutions so that you can pay your team 
                    easily."
                    title="Payment Partner"
                    icon={LuUsers}
                    bg="white"
                />
                <ServiceCard
                    sub="TIMBA provides you with reports on 
                    productivity, billable hours, and other 
                    metrics so you can track your productivity
                    progress and make adjustments"
                    title="Reports"
                    icon={MdOutlineBarChart}
                    bg="white"
                />
                <ServiceCard
                    sub="For Subcontractors, TIMBA helps you 
                    onboard new clients quickly and easily. 
                    With TIMBA, you can create pre-configured 
                    accounts for your new clients, provide 
                    them with access to all the features they 
                    need, and track your productivity."
                    title="Client Onboarding"
                    icon={TiStopwatch}
                    bg="white"
                />
            </Grid>
        </Box>
    );
};
