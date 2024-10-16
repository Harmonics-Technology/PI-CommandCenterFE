import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { ServiceItems } from '../ServiceItems';
import { useRouter } from 'next/router';

export const FeaturesMenu = ({ onClose }) => {
    const menus = [
        {
            key: 1,
            title: 'Project Management',
            sub: 'Timba’s robust tools help you streamline every step of project management.',
            url: 'project-management',
        },
        {
            key: 2,
            title: 'Contract Management',
            sub: 'Timba’s contract management system keeps all your employee contracts in one place',
            url: 'contract-management',
        },
        {
            key: 3,
            title: 'Leave Management',
            sub: 'TIMBA redefines how you handle time off requests, providing platform for efficient leave management',
            url: 'leave-management',
        },
        {
            key: 4,
            title: 'Employee Onboarding',
            sub: 'Timba’s onboarding tools make welcoming new talent seamless.',
            url: 'employee-management',
        },
        {
            key: 5,
            title: 'Robust Reporting',
            sub: 'Timba’s reporting feature gives you the data to make smarter decisions',
            url: 'robust-report',
        },
        {
            key: 6,
            title: 'Operational Task Management',
            sub: 'Edit and delete operational tasks, filter them by department, reassign tasks based on type.',
            url: 'operational-task-management',
        },
        {
            key: 7,
            title: 'Automated Timesheet',
            sub: 'With Timba’s automated timesheets, you’ll have precise, real-time data.',
            url: 'automated-timesheet',
        },
        {
            key: 8,
            title: 'Client Onboarding',
            sub: 'Timba helps you onboard clients smoothly with pre-configured accounts',
            url: 'client-onboarding',
        },
        {
            key: 9,
            title: 'Training & Resources',
            sub: 'Empower your team with the tools and resources they need to succeed through tailored training programs.',
            url: 'training-resource',
        },
    ];
    const router = useRouter();
    return (
        <Box w="full" bg="white" overflow="auto" h={['70vh', '90vh']}>
            <Grid
                templateColumns={['1fr', 'repeat(4, 1fr)']}
                gap={['10px', '35px']}
                pl={['10px', '125px']}
                border="1px solid #E5E5E5"
            >
                <VStack
                    gap="27px"
                    align="flex-start"
                    mt="49px"
                    pb={['10px', '70px']}
                >
                    {menus.slice(0, 3).map((x) => (
                        <Box
                            key={x.key}
                            onClick={() => {
                                onClose();
                                // router.push(`/features/${x?.url}`);
                            }}
                            cursor="pointer"
                        >
                            <ServiceItems x={x} color={'#182C51'} />
                        </Box>
                    ))}
                    <Text
                        color="brand.400"
                        fontSize="14px"
                        fontWeight={700}
                        mt="12px"
                        cursor="pointer"
                        onClick={() => {
                            onClose();
                            router.push('/features');
                        }}
                    >
                        See All Features
                    </Text>
                </VStack>
                <VStack gap="27px" align="flex-start" mt="49px">
                    {menus.slice(3, 6).map((x) => (
                        <Box
                            key={x.key}
                            onClick={() => {
                                onClose();
                                // router.push(`/features/${x?.url}`);
                            }}
                            cursor="pointer"
                        >
                            <ServiceItems x={x} color={'#182C51'} />
                        </Box>
                    ))}
                </VStack>
                <VStack gap="27px" align="flex-start" mt="49px">
                    {menus.slice(6, 9).map((x) => (
                        <Box
                            key={x.key}
                            onClick={() => {
                                onClose();
                                // router.push(`/features/${x?.url}`);
                            }}
                            cursor="pointer"
                        >
                            <ServiceItems x={x} color={'#182C51'} />
                        </Box>
                    ))}
                </VStack>
                <VStack
                    bgColor="#F3F9F8"
                    border="1px solid #E5E5E5"
                    align="flex-start"
                    pl="27px"
                    pr="50px"
                    gap="1rem"
                    w={['full', '370px']}
                    pb={['30px', '10px']}
                >
                    <Box borderRadius="20px" mt="39px" w="257px">
                        <Image src="/assets/robust.png" w="full" h="auto" />
                    </Box>
                    <Text color="#182C51" fontWeight={600}>
                        The simple way to track productivity, save time and
                        increase profit
                    </Text>
                    <Text
                        color="brand.400"
                        fontSize="14px"
                        fontWeight={700}
                        onClick={() => router.push('/pricing')}
                    >
                        Get Started
                    </Text>
                </VStack>
            </Grid>
        </Box>
    );
};
