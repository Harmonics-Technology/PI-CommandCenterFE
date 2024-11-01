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
    btnColor = 'brand.400',
}: {
    bgColor: string;
    mainH: any;
    gap: any;
    title: any;
    desc: any;
    btnClick: any;
    btnText: any;
    sub: any;
    img: any;
    btnColor?: any;
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
                        fontSize={['14px', '1.1rem']}
                        color={'white'}
                        fontWeight="400"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight={['19.1px', '1.75rem']}
                        pr={['16px', '0']}
                        w={['100%', '90%']}
                    >
                        {desc}
                    </Text>

                    <Box w={['90%', 'unset']}>
                        <Button
                            fontSize="1.125rem"
                            color="white"
                            bgColor={btnColor}
                            borderRadius="8px"
                            px="2.5rem"
                            h="4rem"
                            onClick={btnClick}
                            w={['full', 'fit-content']}
                            fontWeight={400}
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
