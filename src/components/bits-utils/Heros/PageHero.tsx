import { Flex, VStack, Text } from '@chakra-ui/react';
import React from 'react';

export const PageHero = ({
    img,
    text,
    bg = 'brand.400',
}: {
    img?: any;
    text?: string;
    bg?: any;
}) => {
    return (
        <Flex
            w="full"
            bgImage={`url(${img})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            align="center"
            justify="center"
            h={['200px', '40vh']}
            bgColor={bg}
        >
            <VStack align="center" spacing=".5rem" w={['70%', '55%']}>
                <Text
                    fontSize={['24px', '3.125rem']}
                    color="white"
                    fontWeight="800"
                    fontFamily="Nunito"
                    mb="0"
                    lineHeight="normal"
                    textAlign="center"
                >
                    {text}
                </Text>
            </VStack>
        </Flex>
    );
};
