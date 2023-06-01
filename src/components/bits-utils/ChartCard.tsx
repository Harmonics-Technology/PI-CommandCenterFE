import { Box, Circle, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Chart } from './Chart';
import { IChartCardProps } from '@components/generics/Schema';

export const ChartCard = ({
    title,
    count,
    from,
    rise,
    chart,
}: IChartCardProps) => {
    return (
        <Box
            boxShadow="0px 2px 10px rgba(51, 51, 79, 0.02)"
            borderRadius="10px"
            bgColor="white"
            p="1rem"
        >
            <Text color="#7171A6" fontWeight="400">
                {title}
            </Text>
            <Flex justify="space-between">
                <HStack>
                    <Text
                        mb="0"
                        fontSize="24px"
                        fontWeight="600"
                        color="#33334F"
                    >
                        {count}
                    </Text>
                    <Text mb="0" fontSize="14px" color="#B8B8D9">
                        from {from}
                    </Text>
                </HStack>
                <HStack>
                    <Circle
                        color="rgba(232, 76, 133, 0.1)"
                        size="25px"
                    ></Circle>
                    <Text mb="0" fontSize="18px" color="#E84C85">
                        {rise}%
                    </Text>
                </HStack>
            </Flex>
            <Box h="150px" w="90%" mx="auto" bgColor="white">
                {chart && <Chart chart={chart} />}
            </Box>
        </Box>
    );
};
