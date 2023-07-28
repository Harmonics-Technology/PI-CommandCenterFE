import React from 'react';
import { Text } from '@chakra-ui/react';

export const MainTitle = ({
    text,
    color = '#182c51',
}: {
    text: string;
    color?: string;
}) => {
    return (
        <Text
            fontSize="2.75rem"
            color={color}
            fontWeight="700"
            fontFamily="Nunito"
            mb="0"
            lineHeight="3rem"
            textAlign="center"
            w="65%"
            mx="auto"
        >
            {text}
        </Text>
    );
};
