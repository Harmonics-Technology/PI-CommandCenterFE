import { Flex, Box, Image, Button, VStack, Text } from '@chakra-ui/react';
import image from 'next/image';
import router from 'next/router';
import React from 'react';
import { ServiceItems } from './ServiceItems';

export const SingleServiceLTR = ({
    image,
    color,
    title,
    items,
    btn,
    onClick,
    rtl = false,
    bd = 0,
}: {
    image: string;
    color?: string;
    title?: string;
    items?: any[];
    btn?: any;
    onClick?: any;
    rtl?: boolean;
    bd?: any;
}) => {
    return (
        <Flex
            gap={['2.5rem', '5.5rem']}
            align="center"
            justify="space-between"
            flexDir={['column', 'row']}
        >
            <Box
                w="full"
                order={['1', rtl ? 1 : 0]}
                overflow="hidden"
                borderRadius={bd}
            >
                <Image src={image} w="full" h="full" alt="banner image" />
            </Box>
            <VStack
                align="flex-start"
                spacing={['18px', '2rem']}
                w="full"
                order={['0', rtl ? 0 : 1]}
            >
                {title && (
                    <Text
                        fontSize={['24px', '2.75rem']}
                        color={color || 'brand.100'}
                        fontWeight="700"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight={['32px', '3rem']}
                    >
                        {title}
                    </Text>
                )}

                {items?.map((x: any, i: any) => (
                    <ServiceItems x={x} key={i} color={color} />
                ))}
                {btn && (
                    <Button
                        fontSize="1.125rem"
                        color="white"
                        bgColor="brand.400"
                        borderRadius="8px"
                        px="2.5rem"
                        h="4rem"
                        fontFamily="Nunito"
                        onClick={onClick}
                    >
                        {btn}
                    </Button>
                )}
            </VStack>
        </Flex>
    );
};
