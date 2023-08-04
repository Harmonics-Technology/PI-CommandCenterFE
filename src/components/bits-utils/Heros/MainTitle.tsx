import React from 'react';
import { Text, VStack } from '@chakra-ui/react';

export const MainTitle = ({
    text,
    color = 'brand.100',
    sub,
    align = 'center',
}: {
    text: string;
    color?: string;
    sub?: string;
    align?: any;
}) => {
    return (
        <VStack align={align} w="full">
            <Text
                fontSize="2.75rem"
                color={color}
                fontWeight="700"
                fontFamily="Nunito"
                mb="0"
                lineHeight="3rem"
                textAlign={align}
                // w="65%"
                mx="auto"
            >
                {text}
            </Text>
            <Text
                fontSize="1rem"
                color={color || '#636b83'}
                fontWeight="400"
                fontFamily="Nunito"
                mb="0"
                lineHeight="1.75rem"
                textAlign={align}
                // w="75%"
                mx="auto"
            >
                {sub}
            </Text>
        </VStack>
    );
};
