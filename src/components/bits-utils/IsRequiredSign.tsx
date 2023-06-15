import React from 'react';
import { Text } from '@chakra-ui/react';

export const IsRequiredSign = () => {
    return (
        <Text
            color="red"
            mb="0"
            fontSize=".8rem"
            fontWeight="800"
            pointerEvents="none"
        >
            *
        </Text>
    );
};
