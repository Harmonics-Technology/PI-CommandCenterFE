import { Flex } from '@chakra-ui/react';
import React from 'react';

export const CountChange = ({
    value,
    onClick,
}: {
    value: any;
    onClick?: any;
}) => {
    return (
        <Flex
            justify="center"
            align="center"
            h="26px"
            w="41px"
            borderRadius="10px"
            border="1px solid #c4c4c4"
            onClick={onClick}
            cursor="pointer"
            userSelect="none"
        >
            {value}
        </Flex>
    );
};
