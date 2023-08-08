import { Box, Circle, Grid, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiWalletAlt } from 'react-icons/bi';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import { SiRedhatopenshift } from 'react-icons/si';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';

export const ServiceCurve = () => {
    const [selected, setSelected] = useState(0);
    return (
        <Box bgColor="white">
            <Box
                pt="5rem"
                // pb="8rem"
                mx="auto"
                bgColor="brand.100"
                borderRadius="0% 0% 50% 50% / 10% 10% 23% 23%"
                // borderRadius="0rem 0rem 18.5625rem 18.5625rem"
                // p='0 39.2rem'
                overflow="hidden"
                h="70.1rem"
            >
                <Box w="80%" mx="auto">
                    <MainTitle
                        text="Time tracking software features for managing employees"
                        color="white"
                        w="60%"
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
                            title="Manage Time off, holidays and Break"
                            icon={MdOutlineHolidayVillage}
                            color="white"
                            selected={selected === 0}
                            onClick={() => setSelected(0)}
                        />
                        <ServiceCard
                            sub="Use integrations with PayPal, Payoneer, 
                            Wise, and Bitwage to automate payroll 
                            based on billable hours. Set automatic
                             weekly or monthly payments for 
                            international and local employees, or 
                            send payments manually."
                            title="Manage Payroll"
                            icon={BiWalletAlt}
                            color="white"
                            selected={selected === 1}
                            onClick={() => setSelected(1)}
                        />
                        <ServiceCard
                            sub="You can create shift schedules, assign shifts to employees, and track employee availability. You can also generate reports on shift scheduling to see how well your schedules are working."
                            title="Employee shift schedulling"
                            icon={SiRedhatopenshift}
                            color="white"
                            selected={selected === 2}
                            onClick={() => setSelected(2)}
                        />
                    </Grid>
                    <Box w="80%" pos="relative" mx="auto" mt="5rem">
                        <Box
                            w="90%"
                            mx="auto"
                            overflow="hidden"
                            zIndex="2"
                            pos="relative"
                        >
                            <Image
                                src={
                                    selected == 0
                                        ? '/assets/blist.png'
                                        : selected == 1
                                        ? '/assets/bpay.png'
                                        : '/assets/bshift.png'
                                }
                                w="full"
                                alt="banner image"
                            />
                        </Box>
                        <Circle
                            size="8rem"
                            bgColor="#FBC953"
                            pos="absolute"
                            right="0"
                            top="-8%"
                            zIndex="1"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
