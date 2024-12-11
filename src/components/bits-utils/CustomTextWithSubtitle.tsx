import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const CustomTextWithSubtitle = ({
    title,
    sub,
}: {
    title: string;
    sub: any;
}) => {
    return (
        <VStack align="flex-start">
            <Text fontSize="14px" color="#696969" fontWeight={400} mb="0">
                {title}
            </Text>
            <Text fontSize="14px" color="#2D3748" fontWeight={700} mb="0">
                {sub}
            </Text>
        </VStack>
    );
};
