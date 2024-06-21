import { Box, Button, Icon, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const ServiceCard = ({
    bg = 'transparent',
    title,
    color,
    icon,
    sub,
    onClick,
    selected,
    btnClick,
    btn,
}: {
    bg?: string;
    title: string;
    color?: string;
    icon?: any;
    sub: string;
    onClick?: () => void;
    selected?: boolean;
    btnClick?: any;
    btn?: string;
}) => {
    return (
        <Box
            bgColor={selected ? 'white' : bg}
            borderTop={selected ? '5px solid' : 'none'}
            borderColor={selected ? 'brand.400' : 'none'}
            h="full"
            w="full"
            px={['30px', '2rem']}
            borderRadius=".5rem"
            transition="border ease .3s"
            role="group"
            onClick={onClick}
            // _hover={{
            //     borderTop: '5px solid',
            //     borderColor: 'brand.400',
            //     bgColor: 'white',
            // }}
        >
            <VStack
                align="flex-start"
                py={['28px', '3.5rem']}
                spacing={['25px', '2rem']}
            >
                {icon && (
                    <Icon
                        color={selected ? 'brand.400' : color ? color : 'black'}
                        fontSize="41px"
                        as={icon}
                        // _groupHover={{
                        //     color: 'brand.400',
                        // }}
                    />
                )}
                <Box>
                    <Text
                        fontSize={['18px', '1.25rem']}
                        fontWeight="700"
                        lineHeight="2rem"
                        color={selected ? '#253053' : color ? color : '#253053'}
                        mb=".5rem"
                        _groupHover={{
                            color: '#253053',
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize={['14px', '1rem']}
                        fontWeight="400"
                        lineHeight={['16.8px', '1.75rem']}
                        color={selected ? '#636b83' : color ? color : '#636b83'}
                        mb="0"
                        _groupHover={{
                            color: '#636b83',
                        }}
                    >
                        {sub}
                    </Text>
                </Box>
                {btn && (
                    <Link passHref href={btnClick || ''}>
                        <Button
                            borderRadius="0.5rem"
                            bgColor="#0CA59D"
                            px=".84rem"
                            h="2.18rem"
                            color="white"
                            fontWeight={600}
                            fontSize=".875rem"
                        >
                            {btn}
                        </Button>
                    </Link>
                )}
            </VStack>
        </Box>
    );
};
