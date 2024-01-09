import { Box, Grid, HStack, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import { ServiceItems } from './ServiceItems';

export const FlexGridImage = ({
    items,
    rtl,
    color = 'white',
    imgs,
}: {
    items: any;
    rtl?: any;
    color?;
    imgs: string[];
}) => {
    return (
        <HStack
            gap="1rem"
            align="center"
            justify="space-between"
            flexDir={['column', 'row']}
        >
            <VStack align="flex-start" w="50%" gap="1rem" order={rtl ? 1 : 0}>
                {items?.map((x: any, i: any) => (
                    <ServiceItems x={x} key={i} color={color} />
                ))}
            </VStack>
            <Box w={'50%'} order={rtl ? 0 : 1}>
                <Grid templateColumns={['repeat(2, 1fr)']} gap="1.8rem">
                    {imgs?.map((img: any, i: any) => (
                        <Box w="full">
                            <Image
                                w="90%"
                                m={['0', rtl ? '0 auto 0 0' : '0 0 0 auto']}
                                h="auto"
                                src={img}
                                key={i}
                            />
                        </Box>
                    ))}
                </Grid>
            </Box>
        </HStack>
    );
};
