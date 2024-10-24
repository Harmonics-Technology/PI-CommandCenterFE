import {
    Box,
    Button,
    Grid,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { NewHomeStack } from '@components/bits-utils/NewHomeStack';
import { featuresIcons } from '@components/Icons/featuresIcons';
import { useRouter } from 'next/router';
import React from 'react';

export const NewBox = ({ icon, label, title, desc, router, url }) => {
    return (
        <Box
            borderRight={['0', '1px solid #d9d9d9']}
            border={['1px solid #d9d9d9', '0']}
            _last={{ border: [0, 'unset'] }}
        >
            <VStack w="full" px="2rem">
                <Icon as={icon} fontSize="50px" />
                <Text
                    mt="8px"
                    fontSize="18px"
                    fontWeight={700}
                    color="brand.100"
                    textAlign="center"
                >
                    {label}
                </Text>
                <Text
                    mt="10px"
                    fontSize="18px"
                    fontWeight={700}
                    color="#636B83"
                    textAlign="center"
                >
                    {title}
                </Text>
                <Text
                    mt="6px"
                    fontSize="16px"
                    fontWeight={400}
                    color="#636B83"
                    textAlign="center"
                >
                    {desc}
                </Text>
                <Text
                    mt="13px"
                    fontSize="14px"
                    fontWeight={700}
                    color="brand.400"
                    onClick={() => router.push(`/${url}`)}
                    cursor="pointer"
                >
                    Learn More
                </Text>
            </VStack>
        </Box>
    );
};

export const FeaturesHomePage = () => {
    const options = [
        {
            key: 1,
            icon: featuresIcons.one,
            label: 'Project Management',
            title: 'Streamline Project Planning, Coordination, and Tracking',
            desc: 'Add multiple project managers to oversee projects, maintain an audit trail, and manage comments effectively. Easily track time spent on tasks without submitting a timesheet.',
            url: '/',
        },
        {
            key: 2,
            icon: featuresIcons.second,
            label: 'Employee Onboarding & Management',
            title: 'Simplify Hiring and Onboarding Processes',
            desc: 'Assign team members to multiple departments for cross-functional teamwork, ensuring everyone is in the right place for collaboration.',
            url: '/',
        },
        {
            key: 3,
            icon: featuresIcons.third,
            label: 'Operational Task Management',
            title: 'Manage Tasks Efficiently',
            desc: 'Edit and delete operational tasks, filter them by department, reassign tasks based on type, and optionally include hours on completed tasks for better tracking.',
            url: '/',
        },
        {
            key: 4,
            icon: featuresIcons.fourth,
            label: 'Automated Timesheets',
            title: 'Accurately Track Employee Hours',
            desc: 'Eliminate manual entries and streamline time tracking with automated timesheets for reliable data.',
            url: '/',
        },
        {
            key: 5,
            icon: featuresIcons.fifth,
            label: 'Contract Management',
            title: 'Efficiently Manage Workforce Contracts',
            desc: 'Keep all your contracts organized and accessible, ensuring compliance and easy reference.',
            url: '/',
        },
        {
            key: 6,
            icon: featuresIcons.sixth,
            label: 'Leave Management',
            title: 'Simplify Leave Requests and Tracking',
            desc: 'Easily manage employee leave requests, approvals, and tracking for seamless operations.',
            url: '/',
        },
        {
            key: 7,
            icon: featuresIcons.seventh,
            label: 'Robust Reporting',
            title: 'Generate Insightful Reports for Data-Driven Decisions',
            desc: 'Access comprehensive reports on performance, productivity, and project progress to inform your strategy.',
            url: '/',
        },
        {
            key: 8,
            icon: featuresIcons.eight,
            label: 'Client Onboarding & Management',
            title: 'Attract and Manage Clients with Ease',
            desc: 'Streamline your client onboarding process, ensuring a smooth transition and effective relationship management.',
            url: '/',
        },
        {
            key: 9,
            icon: featuresIcons.night,
            label: 'Training and Resources',
            title: 'Provide Comprehensive Training and Resources to Employees',
            desc: 'Empower your team with the tools and resources they need to succeed through tailored training programs.',
            url: '/',
        },
    ];
    const router = useRouter();
    return (
        <Box>
            <Mainhero
                title="Timba all-in-one complete Features"
                sub="Timba is an all-in-one platform designed to enhance collaboration, improve productivity, and simplify operations across your team. Explore our robust features that cater to diverse business needs"
                buttonTitle="Sign up for free"
                image="/assets/grp.png"
                bgColor="brand.100"
                color="white"
                btnColor="brand.400"
                bd={'0'}
                h="100%"
                gap={['33px']}
                mainH={['72vh', '80vh']}
                isVertical
                p="0"
                w="100%"
                pt="3rem"
            />
            <Box pt="80px" bgColor="white">
                <Box mx="auto" w={['90%', '80%']}>
                    <NewHomeStack
                        title="Why Timba?"
                        multiSub="Managing a team can be challenging. Here are some pain points that many businesses face:"
                        sub={[
                            {
                                title: 'Fragmented Communication',
                                sub: 'Teams struggle to stay aligned, leading to miscommunication and delays.',
                            },
                            {
                                title: 'Manual Processes',
                                sub: 'Time-consuming manual entries can lead to errors and inefficiencies in tracking hours and managing tasks.',
                            },
                            {
                                title: 'Complex Project Oversight',
                                sub: 'Difficulty in managing multiple projects, tasks, and team members often leads to missed deadlines and lost productivity.',
                            },
                            {
                                title: 'Inadequate Reporting',
                                sub: 'Lack of insights into team performance and project progress hampers data-driven decision-making.',
                            },
                        ]}
                        isMulti
                        img={'/assets/home-k.png'}
                        rtl
                    />
                </Box>
            </Box>
            <Box pt="58px" bgColor="#f8fbfa">
                <Box mx="auto" w={['90%', '85%']}>
                    <MainTitle
                        text="Timba addresses these pain points with innovative features designed for your success."
                        w={['100%', '70%']}
                    />
                    <Grid
                        templateColumns={['1fr', 'repeat(3,1fr)']}
                        borderBottom={['0', '1px solid #d9d9d9']}
                        gap={['1rem', '0']}
                        mb="22px"
                        pb="32px"
                        mt="90px"
                    >
                        {options?.slice(0, 3).map((x) => (
                            <NewBox
                                key={x?.key}
                                title={x?.title}
                                label={x?.label}
                                desc={x?.desc}
                                icon={x?.icon}
                                router={router}
                                url={x?.url}
                            />
                        ))}
                    </Grid>
                    <Grid
                        templateColumns={['1fr', 'repeat(3,1fr)']}
                        borderBottom={['0', '1px solid #d9d9d9']}
                        gap={['1rem', '0']}
                        mb="22px"
                        pb="32px"
                    >
                        {options?.slice(3, 6).map((x) => (
                            <NewBox
                                key={x?.key}
                                title={x?.title}
                                label={x?.label}
                                desc={x?.desc}
                                icon={x?.icon}
                                router={router}
                                url={x?.url}
                            />
                        ))}
                    </Grid>
                    <Grid
                        templateColumns={['1fr', 'repeat(3,1fr)']}
                        // borderBottom="1px solid #d9d9d9"
                        // mb="22px"
                        gap={['1rem', '0']}
                        pb="52px"
                    >
                        {options?.slice(6, 9).map((x) => (
                            <NewBox
                                key={x?.key}
                                title={x?.title}
                                label={x?.label}
                                desc={x?.desc}
                                icon={x?.icon}
                                router={router}
                                url={x?.url}
                            />
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box>
                <VStack
                    w="full"
                    py={['2rem', '68px']}
                    spacing="1.8rem"
                    bgColor="brand.100"
                    bgImage="/assets/revbg.png"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgBlendMode="overlay"
                >
                    <MainTitle
                        text="Join the Revolution with Timba!"
                        sub="Transform your workforce management with our powerful features. Experience how Timba can help you overcome challenges and boost productivity."
                        color="white"
                        w={['90%', '45%']}
                    />
                    <Box w={['90%', 'unset']}>
                        <Button
                            fontSize="1.125rem"
                            color="white"
                            bgColor="brand.400"
                            borderRadius="8px"
                            px="2.5rem"
                            h="4rem"
                            onClick={() => router.push('/pricing')}
                            w={['full', 'fit-content']}
                        >
                            Book A Demo
                        </Button>

                        <Text
                            fontSize="0.87rem"
                            color="white"
                            fontWeight="400"
                            fontFamily="Nunito"
                            fontStyle="italic"
                            m="1rem 0 0"
                            textAlign={['center', 'left']}
                        >
                            Try Timba for free - No credit card required
                        </Text>
                    </Box>
                </VStack>
            </Box>
            <Box py="85px" bgColor="white">
                <HStack
                    pt={['2rem', '47px']}
                    spacing="1.8rem"
                    bgColor="brand.100"
                    borderRadius="40px"
                    justify="space-between"
                    w={['90%', '80%']}
                    mx="auto"
                    pl={['30px', '63px']}
                    pr={['30px', '0']}
                    align="flex-end"
                    flexDir={['column', 'row']}
                >
                    <VStack
                        w={['100%', '40%']}
                        gap="25px"
                        align="flex-start"
                        pb={['2rem', '47px']}
                    >
                        <Text
                            fontSize={['24px', '2.5rem']}
                            color="white"
                            fontWeight="800"
                            fontFamily="Nunito Sans"
                            mb="0"
                            lineHeight={['32.74px', '3rem']}
                        >
                            Get Started with Timba Today!{' '}
                            <Icon as={featuresIcons.rocket} />
                        </Text>
                        <Text
                            fontSize={['14px', '1rem']}
                            color={'white'}
                            fontWeight="400"
                            fontFamily="Nunito"
                            mb="0"
                            lineHeight={['19.1px', '1.75rem']}
                        >
                            Explore all our features and see how Timba can
                            transform your workforce management. Join thousands
                            of businesses that trust Timba to streamline their
                            operations and enhance productivity.
                        </Text>

                        <Box w={['90%', '100%']}>
                            <Button
                                fontSize="1.125rem"
                                color="white"
                                bgColor="brand.400"
                                borderRadius="8px"
                                px="2.5rem"
                                h="4rem"
                                onClick={() => router.push('/pricing')}
                                w={['full', 'fit-content']}
                            >
                                Start Your Free Trial Now
                            </Button>

                            <Text
                                fontSize="0.87rem"
                                color="white"
                                fontWeight="400"
                                fontFamily="Nunito"
                                fontStyle="italic"
                                m="1rem 0 0"
                                textAlign={['center', 'left']}
                            >
                                Sign up for FREE trial - No credit card required
                            </Text>
                        </Box>
                    </VStack>
                    <Box w={['100%', '45%']}>
                        <Image src="/assets/opt.png" />
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};
