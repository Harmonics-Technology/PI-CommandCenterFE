import {
    Box,
    Flex,
    Grid,
    HStack,
    Select,
    Text,
    VStack,
} from '@chakra-ui/react';
import { ActivitySingle } from '@components/bits-utils/ActivitySingle';
import { ChartCard } from '@components/bits-utils/ChartCard';
import { DateFilter } from '@components/bits-utils/DateFilter';
import React from 'react';

export const DashboardComponent = () => {
    return (
        <Box mt="2rem">
            <Flex
                justify="space-between"
                p="1rem 1rem"
                bgColor="white"
                mb="2rem"
            >
                <Text fontWeight="800" fontSize="20px" mb="0">
                    Dashboard
                </Text>
                <DateFilter />
            </Flex>
            <Flex gap="2rem">
                <Grid templateColumns={['repeat(2, 1fr)']} gap="2rem" w="65%">
                    <ChartCard
                        title="New Subscription"
                        count="22"
                        from="31"
                        rise="29.0"
                    />
                    <ChartCard
                        title="New Subscription"
                        count="22"
                        from="31"
                        rise="29.0"
                    />
                </Grid>
                <Box
                    w="35%"
                    bgColor="white"
                    borderRadius="10px"
                    boxShadow="0px 2px 10px rgba(51, 51, 79, 0.02);"
                    p="1rem"
                >
                    <HStack mb="2rem" justify="space-between">
                        <Text
                            mb="0"
                            color="#33334F"
                            fontSize="18px"
                            fontWeight="600"
                        >
                            Activity Stream
                        </Text>
                        <Select w="40%">
                            <option>Everything </option>
                        </Select>
                    </HStack>
                    <VStack w="full" gap=".5rem">
                        <ActivitySingle
                            text="$129 paid by Proinsignt for onshore + shift mangt"
                            time="5 min ago"
                        />
                        <ActivitySingle
                            text="$129 paid by Proinsignt for onshore + shift mangt"
                            time="5 min ago"
                            error
                        />
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
};
