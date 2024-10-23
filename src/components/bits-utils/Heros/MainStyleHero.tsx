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
            overflow="hidden"
        >
            <HStack
                w={['100%', '100%']}
                mx="auto"
                h={mainH}
                align="center"
                gap={gap}
                pl={['30px', '115px']}
                pt={['55px', '0']}
                flexDir={['column', 'row']}
            >
                <VStack
                    w={['100%', '40%']}
                    gap={['1rem', '25px']}
                    align="flex-start"
                    pb={['2rem', '47px']}
                >
                    <Text
                        fontSize={['24px', '50px']}
                        color="white"
                        fontWeight="800"
                        fontFamily="Nunito Sans"
                        mb="0"
                        lineHeight={['32.74px', '68px']}
                        pr={['16px', '0']}
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
                        pr={['16px', '0']}
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
                <Box
                    w={['100%', '55%']}
                    h="full"
                    borderRadius="100px 0 0 100px"
                    overflow="hidden"
                >
                    <Image src={img} w="full" h="full" objectFit="cover" />
                </Box>
            </HStack>
        </Box>
    );
};
