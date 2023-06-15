import { HStack, Square } from '@chakra-ui/react';
import React from 'react';

export const OptionSelection = ({
    name,
    current,
    setCurrent,
}: {
    name: string[] | undefined;
    current: any;
    setCurrent: any;
}) => {
    // console.log({ current, name });
    return (
        <HStack cursor="pointer">
            {name?.map((x) => {
                return (
                    <Square
                        size="min"
                        p=".2rem .3rem"
                        color={current == x ? 'brand.400' : 'black'}
                        fontWeight={current == x ? '700' : '400'}
                        // boxShadow="md"
                        // color={current == x ? 'white' : 'black'}
                        fontSize=".9rem"
                        borderRadius="4px"
                        onClick={() => setCurrent(x)}
                    >
                        {x.charAt(0)}
                    </Square>
                );
            })}
        </HStack>
    );
};
