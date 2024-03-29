import { Box, Button, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUserSwitch, AiOutlineFieldTime } from 'react-icons/ai';
import { FaFileContract } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineBarChart } from 'react-icons/md';
import { TiStopwatch } from 'react-icons/ti';
import { useRouter } from 'next/router';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { SingleShowCase } from '@components/bits-utils/SingleShowCase';
import { ServiceCard } from '@components/bits-utils/ServiceCard';

export const EnItems = () => {
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
                            sub="TIMBA's intuitive interface makes time 
                            tracking a breeze. Whether you're working 
                            on tasks, projects, or client engagements, 
                            logging your time becomes second nature, 
                            eliminating the need for tedious."
                            title="Effortless Time Tracking"
                            icon={AiOutlineUserSwitch}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Simplify the onboarding process and securely
                            manage all employee contracts in one place
                            with TIMBA. Ensure new hires seamlessly 
                           transition into your organization, while 
                           monitoring attendance, managing leave 
                           requests, and streamlining your HR processes 
                           for accurate payroll calculations."
                            title="Employee Onboarding and Management"
                            icon={AiOutlineFieldTime}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Gain valuable insights into your team's 
                            performance and engagement with 
                            TIMBA's comprehensive analytics. Make 
                            data-driven decisions to optimize your 
                            workforce, allocate resources effectively,
                            and identify areas for improvement."
                            title="Real-Time Insights"
                            icon={FaFileContract}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Review and approve employee time off 
                            requests from a single location, Set up 
                            paid or unpaid time off break policies for 
                            better time tracking."
                            title="Manage Time off, holidays and Break"
                            icon={LuUsers}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Lorem ipsum dolor sit amet cultricies 
                            egestas commodo enim enim amet. 
                            Tellus pellentesque pretium a purus 
                            mattis nisl. "
                            title="Client Reporting"
                            icon={MdOutlineBarChart}
                            bg="white"
                        />
                        <ServiceCard
                            sub="Lorem ipsum dolor sit amet cultricies 
                            egestas commodo enim enim amet. 
                            Tellus pellentesque pretium a purus 
                            mattis nisl. "
                            title="Project Management"
                            icon={TiStopwatch}
                            bg="white"
                        />
                    </Grid>
                    <VStack w="full" bgColor="brand.100" pt="3rem" mt="3rem">
                        <MainTitle
                            text="Start Using TIMBA today"
                            color="white"
                        />
                        <Box>
                            <Button
                                fontSize="1.125rem"
                                color="white"
                                bgColor="brand.400"
                                borderRadius="8px"
                                px="2.5rem"
                                h="4rem"
                                onClick={() => router.push('/pricing')}
                            >
                                Start Using TIMBA Today
                            </Button>

                            <Text
                                fontSize="0.87rem"
                                color="white"
                                fontWeight="400"
                                fontFamily="Nunito"
                                fontStyle="italic"
                                m="2rem 0 0"
                            >
                                Sign up for FREE trial - No credit card required
                            </Text>
                        </Box>
                    </VStack>
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
                btn="Have a Large Team - Book a product Demo"
                image="/assets/lapb.png"
                onClick={() => router.push('/book-demo')}
                title="TIMBA is the ultimate ally that transforms how companies operate, elevates team performance, and fuels the journey to success. Experience the love for yourself and see why TIMBA is the go-to choice for businesses"
            />
        </Box>
    );
};
