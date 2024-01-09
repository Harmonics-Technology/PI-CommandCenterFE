import { Text } from '@chakra-ui/react';
import React from 'react';

export const MiniText = ({
    text,
    align = 'left',
    w,
    mx,
}: {
    text: string | undefined;
    align?: any;
    w?: any;
    mx?: any;
}) => {
    return (
        <Text
            color="#636b83"
            lineHeight="1.875rem"
            textAlign={align}
            w={w}
            mx={mx}
        >
            {text}
        </Text>
    );
};
