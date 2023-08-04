import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const ServiceItems = ({ color, x }: { color?: string; x: any }) => {
    return (
        <Box>
            <Text
                fontSize="1.25rem"
                fontWeight="700"
                lineHeight="2rem"
                color={color ? color : '#253053'}
                mb=".5rem"
                _groupHover={{
                    color: '#253053',
                }}
            >
                {x.title}
            </Text>
            <Text
                fontSize="1rem"
                fontWeight="400"
                lineHeight="1.75rem"
                color={color ? color : '#636b83'}
                mb="0"
                _groupHover={{
                    color: '#636b83',
                }}
            >
                {x.sub}
            </Text>
        </Box>
    );
};
