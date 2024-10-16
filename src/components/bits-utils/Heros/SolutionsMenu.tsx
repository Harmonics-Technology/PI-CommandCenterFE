import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { ServiceItems } from '../ServiceItems';
import { useRouter } from 'next/router';

export const SolutionsMenu = ({ onClose }) => {
    const menus = [
        {
            key: 1,
            title: 'For Remote Teams',
            sub: 'Align your remote workforce effortlessly with Timba’s improved project management tool',
            url: 'project-management',
        },
        {
            key: 2,
            title: 'For Large Teams',
            sub: 'With Timba, large teams can now assign multiple project managers to each project',
            url: 'contract-management',
        },
        {
            key: 3,
            title: 'Consultants',
            sub: 'Efficiently track billable hours, manage projects budgets, and generate detailed reports for clients',
            url: 'leave-management',
        },
        {
            key: 4,
            title: 'Freelancers',
            sub: 'Timba simplifies the process with automated timesheets and payment management tools',
            url: 'employee-management',
        },
        {
            key: 5,
            title: 'Construction',
            sub: 'Timba simplifies construction team management with real-time time tracking',
            url: 'robust-report',
        },
        {
            key: 6,
            title: 'Government',
            sub: 'Timba enhances workforce efficiency for government entities',
            url: 'operational-task-management',
        },
        {
            key: 7,
            title: 'Creative Agencies',
            sub: 'With Timba, creative agencies can focus on delivering top-notch work',
            url: 'automated-timesheet',
        },
        {
            key: 8,
            title: 'Technology',
            sub: 'For tech teams, Timba provides visibility into project workflows',
            url: 'client-onboarding',
        },
        {
            key: 9,
            title: 'Staffing & Recruiting',
            sub: 'Timba’s all-in-one platform makes it easy to track work hours',
            url: 'training-resource',
        },
        {
            key: 10,
            title: 'Subcontractors',
            sub: `Streamline your subcontracting work with Timba's intuitive project management`,
            url: 'training-resource',
        },
        {
            key: 11,
            title: 'Human Resource Managers',
            sub: `Simplify employee management tasks with Timba's comprehensive HR tools`,
            url: 'training-resource',
        },
        {
            key: 12,
            title: 'Recruiters',
            sub: `Efficiently manage your recruiting pipeline with Timba's collaborative tools`,
            url: 'training-resource',
        },
        {
            key: 13,
            title: 'Entrepreneurs',
            sub: `Grow your business with Timba's versatile project management and team management tools.`,
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
                <VStack gap="27px" align="flex-start" mt="39px" pb="70px">
                    {/* <VStack gap="10px" align="flex-start"> */}
                    <Text color="#1e1e1e" mb="5px" fontWeight={700}>
                        By Use Cases
                    </Text>
                    {menus.slice(0, 4).map((x) => (
                        <Box
                            key={x.key}
                            onClick={() => {
                                onClose();
                                // router.push(`/solutions/${x?.url}`);
                            }}
                            cursor="pointer"
                        >
                            <ServiceItems x={x} color={'#182C51'} />
                        </Box>
                    ))}
                    {/* </VStack> */}
                    <Text
                        color="brand.400"
                        fontSize="14px"
                        fontWeight={700}
                        mt="12px"
                        cursor="pointer"
                        onClick={() => {
                            onClose();
                            router.push('/solutions');
                        }}
                    >
                        See All Industries
                    </Text>
                </VStack>
                <VStack gap="27px" align="flex-start" mt="39px">
                    {/* <VStack gap="10px" align="flex-start"> */}
                    <Text color="#1e1e1e" mb="5px" fontWeight={700}>
                        By Industries
                    </Text>
                    {menus.slice(4, 9).map((x) => (
                        <Box
                            key={x.key}
                            onClick={() => {
                                onClose();
                                // router.push(`/solutions/${x?.url}`);
                            }}
                            cursor="pointer"
                        >
                            <ServiceItems x={x} color={'#182C51'} />
                        </Box>
                    ))}
                    {/* </VStack> */}
                </VStack>
                <VStack gap="27px" align="flex-start" mt="39px">
                    {/* <VStack gap="10px" align="flex-start"> */}
                    <Text color="#1e1e1e" mb="5px" fontWeight={700}>
                        By Industries
                    </Text>
                    {menus.slice(9, menus.length).map((x) => (
                        <Box
                            key={x.key}
                            onClick={() => {
                                onClose();
                                // router.push(`/solutions/${x?.url}`);
                            }}
                            cursor="pointer"
                        >
                            <ServiceItems x={x} color={'#182C51'} />
                        </Box>
                    ))}
                    {/* </VStack> */}
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
                        <Image src="/assets/grpb.png" w="full" h="auto" />
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
