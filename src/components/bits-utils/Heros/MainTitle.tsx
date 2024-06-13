import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import parse from 'react-html-parser';

export const MainTitle = ({
    text,
    color = 'brand.100',
    sub,
    align = 'center',
    w = 'full',
    mx = 'auto',
}: {
    text: string | undefined;
    color?: string;
    sub?: string;
    align?: any;
    w?: any;
    mx?: any;
}) => {
    return (
        <VStack align={align} w={w} mx={mx}>
            <Text
                fontSize={['24px', '2.5rem']}
                color={color}
                fontWeight="700"
                fontFamily="Nunito Sans"
                mb="0"
                lineHeight={['32.74px', '3rem']}
                textAlign={align}
                // w="65%"
                mx={mx}
            >
                {parse(text)}
            </Text>
            <Text
                fontSize={['14px', '1rem']}
                color={color || '#636b83'}
                fontWeight="400"
                fontFamily="Nunito"
                mb="0"
                lineHeight={['19.1px', '1.75rem']}
                textAlign={align}
                // w="75%"
                mx={mx}
            >
                {sub}
            </Text>
        </VStack>
    );
};
