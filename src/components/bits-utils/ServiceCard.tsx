import { Box, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const ServiceCard = ({
    bg = 'transparent',
    title,
    color,
    icon,
    sub,
}: {
    bg?: string;
    title: string;
    color?: string;
    icon: any;
    sub: string;
}) => {
    return (
        <Box
            bgColor={bg}
            h="23rem"
            w="full"
            px="2rem"
            borderRadius=".5rem"
            transition="border ease .3s"
            role="group"
            _hover={{
                borderTop: '5px solid',
                borderColor: 'brand.400',
                bgColor: 'white',
            }}
        >
            <VStack align="flex-start" py="3.5rem" spacing="2rem">
                <Icon
                    color={color ? color : 'black'}
                    fontSize="41px"
                    as={icon}
                    _groupHover={{
                        color: 'brand.400',
                    }}
                />
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
                        {title}
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
                        {sub}
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};
