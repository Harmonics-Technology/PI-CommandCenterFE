import { Flex, Text, Box, Button, Grid } from '@chakra-ui/react';
import { PackageCard } from '@components/bits-utils/PackageCard';
import { useRouter } from 'next/router';
import React from 'react';

export const ManageSubscriptionComponent = () => {
    const router = useRouter();
    const updateSubscription = (value, name) => {
        router.push(`/manage-subscription/${value}`);
    };
    return (
        <Box w="full" bgColor="white" borderRadius="10px" p="1rem" minH="80vh">
            <Flex
                justify="space-between"
                pb="1rem"
                align="center"
                borderBottom="1px solid"
                borderColor="#e0e0e0"
                mb="1rem"
            >
                <Text fontWeight="800" color="#1b1d21" mb="0">
                    Manage Subscription
                </Text>
                <Button
                    bgColor="brand.400"
                    color="white"
                    borderRadius="5px"
                    onClick={() => router.push('/manage-subscription/new')}
                    px="2rem"
                >
                    Add Package
                </Button>
            </Flex>
            <Box w="90%" mx="auto">
                <Text
                    my="3rem"
                    fontSize="20px"
                    fontWeight="700"
                    color="#1b1d21"
                >
                    Base Package Subscription
                </Text>
                <Grid templateColumns={['repeat(3, 1fr)']} gap=".5rem" w="full">
                    <PackageCard
                        id="abc"
                        name={'Onshore'}
                        isEdit
                        desc={
                            'It does not require a payment partner to process payments'
                        }
                        price={'$5,000'}
                        billed={'/month'}
                        recommended={'For companies and clients within Canada'}
                        features={[
                            { id: '1', name: 'Client Onboarding' },
                            { id: '2', name: 'Team Onboarding' },
                            { id: '3', name: 'Timesheet submission' },
                            { id: '4', name: 'Payroll' },
                            { id: '5', name: 'Invoice' },
                        ]}
                        updateSubscription={updateSubscription}
                    />
                </Grid>
                <Text
                    my="3rem"
                    fontSize="20px"
                    fontWeight="700"
                    color="#1b1d21"
                >
                    Add-ons
                </Text>
            </Box>
        </Box>
    );
};
