import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';
import { BiWalletAlt } from 'react-icons/bi';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import { SiRedhatopenshift } from 'react-icons/si';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';

export const ServiceCurve = () => {
    return (
        <Box bgColor="white">
            <Box
                pt="5rem"
                // pb="8rem"
                mx="auto"
                bgColor="#182c51"
                borderRadius="0% 0% 50% 50% / 10% 10% 13% 13% "
                overflow="hidden"
            >
                <Box w="90%" mx="auto">
                    <MainTitle
                        text="Time tracking software features for managing employees"
                        color="white"
                    />
                    <Grid
                        templateColumns={['1fr', 'repeat(3,1fr)']}
                        gap="2rem"
                        mt="4rem"
                    >
                        <ServiceCard
                            sub="Review and approve employee time off
                    requests from a single location. Set up paid
                    or unpaid time off break policies for better
                    time tracking."
                            title="Time off, holidays, and breaks"
                            icon={MdOutlineHolidayVillage}
                            color="white"
                        />
                        <ServiceCard
                            sub="Use integrations with PayPal, Payoneer,
                    Wise, and Bitwage to automate payroll
                    based on billable hours. Set automatic
                    weekly or monthly payments for
                    international and local employees, or send
                    payments manually."
                            title="Payroll"
                            icon={BiWalletAlt}
                            color="white"
                        />
                        <ServiceCard
                            sub="No need to worry if someone forgets to track
            time. Our time tracking software allows you
            to add time entries manually to ensure all
            time worked is tracked."
                            title="Employee shift schedulling"
                            icon={SiRedhatopenshift}
                            color="white"
                        />
                    </Grid>
                    <Box>
                        <Image
                            src="/assets/blist.png"
                            w="full"
                            alt="banner image"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
