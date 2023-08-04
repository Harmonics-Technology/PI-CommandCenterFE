import { Box, VStack, Button, Text } from '@chakra-ui/react';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const HrService = () => {
    const router = useRouter();
    return (
        <Box p="8rem 0 8rem" bgColor="white">
            <VStack spacing="8rem" w="90%" mx="auto" pb="4rem">
                <SingleServiceLTR
                    image="/assets/hra.png"
                    title="Streamlined Payroll Management"
                    items={[
                        {
                            title: 'Centralized Payroll Processing',
                            sub: "Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process. Easily track employee hours, calculate payments, and automate payroll submission.",
                        },
                        {
                            title: 'Accurate Payments, On Time',
                            sub: 'TIMBA ensures error-free calculations and punctual payments, boosting employee satisfaction and overall efficiency. Rest assured, payroll submission becomes a breeze with TIMBA by your side.',
                        },
                    ]}
                    rtl
                />
                <SingleServiceLTR
                    image="/assets/hrb.png"
                    title="Secure Employee Data Management"
                    items={[
                        {
                            title: 'Robust Data Security',
                            sub: "Protect your employees' sensitive information with TIMBA's state-of-the-art data encryption and secure storage. Your data remains safe and compliant with industry standards.",
                        },
                        {
                            title: 'Centralized Data Access',
                            sub: "Access, update, and manage employee data with ease. TIMBA's centralized data management allows for efficient handling of employee information, ensuring accuracy and consistency.",
                        },
                    ]}
                />
            </VStack>
            <VStack
                w="full"
                bgColor="brand.100"
                py="5rem"
                my="3rem"
                spacing="3rem"
            >
                <Box w='80%' mx='auto'>
                    <MainTitle
                        text="The average HR manager spends 20% of their time on administrative tasks. Time-tracking software can help HR managers save time and improve productivity."
                        color="white"
                    />
                </Box>
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
            <VStack spacing="8rem" w="90%" mx="auto" pt="4rem">
                <SingleServiceLTR
                    image="/assets/hrc.png"
                    title="Boost Administrative Efficiency"
                    items={[
                        {
                            title: 'Automated HR Processes',
                            sub: 'Let automation work its magic. TIMBA automates repetitive HR tasks, reducing the administrative burden and freeing up valuable time for strategic initiatives.',
                        },
                        {
                            title: 'User-Friendly Interface',
                            sub: "TIMBA's intuitive interface is designed with HR managers in mind. Effortlessly navigate through tasks and access vital information at your fingertips.",
                        },
                    ]}
                    rtl
                />
                <SingleServiceLTR
                    image="/assets/hrd.png"
                    title="Advanced Reporting and Insights"
                    items={[
                        {
                            title: 'Comprehensive HR Analytics',
                            sub: "Gain valuable insights into your HR processes with TIMBA's comprehensive analytics and reporting tools. Identify trends, spot areas for improvement, and make data-driven decisions.",
                        },
                        {
                            title: 'Enhanced Decision-Making',
                            sub: "TIMBA empowers HR managers with the data and insights needed to make informed decisions, driving the organization's success and growth.",
                        },
                    ]}
                />
            </VStack>
        </Box>
    );
};
