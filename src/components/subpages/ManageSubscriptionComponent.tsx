import { Flex, Text, Box, Button, Grid } from '@chakra-ui/react';
import { PackageCard } from '@components/bits-utils/PackageCard';
import { IManageSubProps } from '@components/generics/Schema';
import { CAD } from '@components/generics/functions/Naira';
import { useRouter } from 'next/router';
import React from 'react';

export const ManageSubscriptionComponent = ({ data }: IManageSubProps) => {
    console.log({ data });
    const router = useRouter();
    const updateSubscription = (value) => {
        router.push(`/manage-subscription/${value.id}`);
    };
    return (
        <Box
            w="full"
            bgColor="white"
            borderRadius="10px"
            p="1rem"
            minH="80vh"
            pb="3rem"
        >
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
            {data.filter((x) => x.subscriptionTypeId == 1).length > 0 && (
                <Box w="90%" mx="auto">
                    <Text
                        my="3rem"
                        fontSize="20px"
                        fontWeight="700"
                        color="#1b1d21"
                    >
                        Base Package Subscription
                    </Text>
                    <Grid
                        templateColumns={['repeat(3, 1fr)']}
                        gap=".5rem"
                        w="full"
                    >
                        {data
                            .filter((x) => x.subscriptionTypeId == 1)
                            .map((x) => (
                                <PackageCard
                                    id={x.id}
                                    name={x.name}
                                    isEdit
                                    desc={x.description}
                                    price={x.monthlyAmount}
                                    billed={'/month'}
                                    recommended={x.recommendedFor}
                                    features={x.features
                                        ?.split(',')
                                        .map((b) => b)}
                                    updateSubscription={updateSubscription}
                                />
                            ))}
                    </Grid>
                </Box>
            )}
            {data.filter((x) => x.subscriptionTypeId == 2).length > 0 && (
                <Box w="90%" mx="auto">
                    <Text
                        my="3rem"
                        fontSize="20px"
                        fontWeight="700"
                        color="#1b1d21"
                    >
                        Add-ons
                    </Text>
                    <Grid
                        templateColumns={['repeat(3, 1fr)']}
                        gap=".5rem"
                        w="full"
                    >
                        {data
                            .filter((x) => x.subscriptionTypeId == 2)
                            .map((x) => (
                                <PackageCard
                                    id={x.id}
                                    name={x.name}
                                    isEdit
                                    desc={x.description}
                                    price={x.addonAmount || 0}
                                    billed={'/month'}
                                    recommended={x.recommendedFor}
                                    features={x.features
                                        ?.split(',')
                                        .map((b) => b)}
                                    updateSubscription={updateSubscription}
                                />
                            ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
};
