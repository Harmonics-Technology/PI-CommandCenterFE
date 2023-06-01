import { Circle, Flex, HStack, Text } from '@chakra-ui/react';
import { IActivitySingleProps } from '@components/generics/Schema';
import React from 'react';

export const ActivitySingle = ({ error, text, time }: IActivitySingleProps) => {
    return (
        <HStack justify="space-between" w="full">
            <HStack>
                <Circle size="8px" bgColor={error ? '#E84C85' : 'brand.400'} />
                <Flex>
                    <Text
                        fontSize=".8rem"
                        mb="0"
                        color={error ? '#E84C85' : 'brand.400'}
                        pr='.2rem'
                    >
                        {text.split(' ', 1)}
                    </Text>
                    <Text fontSize=".8rem" mb="0">
                        {text.split(' ').slice(1).join(' ')}
                    </Text>
                </Flex>
            </HStack>
            <Text fontSize=".8rem" mb="0">
                {time}
            </Text>
        </HStack>
    );
};
