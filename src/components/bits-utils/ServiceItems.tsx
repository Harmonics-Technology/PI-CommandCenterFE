import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import parse from 'react-html-parser';

export const ServiceItems = ({ color, x }: { color?: string; x: any }) => {
    return (
        <Box>
            {x?.title && (
                <Text
                    fontSize={{ base: '18px', xl: '1rem' }}
                    fontWeight="700"
                    lineHeight="1.5rem"
                    color={color ? color : '#253053'}
                    mb={['.3rem', '.5rem']}
                    _groupHover={{
                        color: '#253053',
                    }}
                >
                    {x.title}
                </Text>
            )}
            <Text
                fontSize={['14px', '.9rem']}
                fontWeight="400"
                lineHeight="1.5rem"
                color={color ? color : '#636b83'}
                mb="0"
                _groupHover={{
                    color: '#636b83',
                }}
            >
                {parse(x.sub || '')}
            </Text>
        </Box>
    );
};
