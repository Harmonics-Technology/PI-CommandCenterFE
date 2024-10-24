import { Text } from '@chakra-ui/react';
import React from 'react';

export const FooterHeadings = ({ text }: { text: string }) => {
    return (
        <Text
            fontSize={['1rem', '1.5rem']}
            fontWeight="700"
            color="brand.100"
            mb="0"
            textTransform="capitalize"
        >
            {text}
        </Text>
    );
};
