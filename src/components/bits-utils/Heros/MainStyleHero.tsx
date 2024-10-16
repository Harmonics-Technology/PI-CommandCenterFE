import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const MainStyleHero = ({
    bgColor,
    mainH,
    gap,
    title,
    desc,
    btnClick,
    btnText,
    sub,
    img,
}) => {
    return (
        <Box
            w="full"
            bgImage="url('/assets/bgt.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgColor={bgColor}
        >
            <HStack
                w={['100%', '100%']}
                mx="auto"
                h={mainH}
                align="center"
                gap={gap}
                pl="115px"
            >
                <VStack
                    w="40%"
                    gap="25px"
                    align="flex-start"
                    pb={['2rem', '47px']}
                >
                    <Text
                        fontSize={['24px', '2.5rem']}
                        color="white"
                        fontWeight="800"
                        fontFamily="Nunito Sans"
                        mb="0"
                        lineHeight={['32.74px', '3rem']}
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize={['14px', '1rem']}
                        color={'white'}
                        fontWeight="400"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight={['19.1px', '1.75rem']}
                    >
                        {desc}
                    </Text>

                    <Box w={['90%', 'unset']}>
                        <Button
                            fontSize="1.125rem"
                            color="white"
                            bgColor="brand.400"
                            borderRadius="8px"
                            px="2.5rem"
                            h="4rem"
                            onClick={btnClick}
                            w={['full', 'fit-content']}
                        >
                            {btnText}
                        </Button>

                        <Text
                            fontSize="0.87rem"
                            color="white"
                            fontWeight="400"
                            fontFamily="Nunito"
                            fontStyle="italic"
                            m="1rem 0 0"
                            textAlign={['center', 'left']}
                        >
                            {sub}
                        </Text>
                    </Box>
                </VStack>
                <Box w="55%" h="full">
                    <Image src={img} w="full" h="auto" />
                </Box>
            </HStack>
        </Box>
    );
};
