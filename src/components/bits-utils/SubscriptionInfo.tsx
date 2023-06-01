import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import {
    ISinglePackage,
    ISubscriptionInfoProps,
} from '@components/generics/Schema';
import React from 'react';

export const SubscriptionInfo = ({
    label,
    packages,
    total,
}: ISubscriptionInfoProps) => {
    return (
        <Flex
            justify={label ? 'space-between' : 'flex-end'}
            py="1rem"
            borderBottom="1px dashed #A6A6A6"
        >
            {label && (
                <Text color="#1E1E1E" fontWeight="700" fontSize="14px" mb="0">
                    {label}:
                </Text>
            )}
            <VStack align="flex-end">
                {packages.map((x: ISinglePackage) => (
                    <HStack gap="3rem">
                        <Text
                            color="#696969"
                            mb="0"
                            fontWeight={total ? '700' : '400'}
                        >
                            {x.type}
                        </Text>
                        {x?.price && (
                            <Text
                                color={total ? 'brand.400' : '#696969'}
                                mb="0"
                            >
                                {x?.price}
                            </Text>
                        )}
                    </HStack>
                ))}
            </VStack>
        </Flex>
    );
};
