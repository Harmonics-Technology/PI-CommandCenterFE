import { Flex, Text, Box, Button, Grid } from '@chakra-ui/react';
import { PackageCard } from '@components/bits-utils/PackageCard';
import { IManageSubProps } from '@components/generics/Schema';
import { useRouter } from 'next/router';
import React from 'react';

export const ManageSubscriptionComponent = ({
    base,
    addon,
}: IManageSubProps) => {
    const router = useRouter();
    const updateSubscription = (value) => {
        router.push(`/admin/manage-subscription/${value.id}`);
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
                    onClick={() =>
                        router.push('/admin/manage-subscription/new')
                    }
                    px="2rem"
                >
                    Add Package
                </Button>
            </Flex>
            {base?.length > 0 && (
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
                        {base?.map((x) => (
                            <PackageCard
                                id={x.id}
                                name={x.name}
                                isEdit
                                desc={x.description}
                                price={x.monthlyAmount}
                                billed={'/month'}
                                recommended={x.recommendedFor}
                                features={x.features?.split(',').map((b) => b)}
                                updateSubscription={updateSubscription}
                            />
                        ))}
                    </Grid>
                </Box>
            )}
            {addon?.length > 0 && (
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
                        {addon?.map((x) => (
                            <PackageCard
                                id={x.id}
                                name={x.name}
                                isEdit
                                desc={x.description}
                                price={x.addonAmount || 0}
                                billed={'/month'}
                                recommended={x.recommendedFor}
                                features={x.features?.split(',').map((b) => b)}
                                updateSubscription={updateSubscription}
                            />
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
};
