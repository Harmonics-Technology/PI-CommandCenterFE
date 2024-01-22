import {
    Box,
    HStack,
    Text,
    Image,
    Button,
    VStack,
    Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import { useScramble } from 'use-scramble';

export const Mainhero = ({
    title,
    sub,
    buttonTitle,
    image,
    bgColor,
    color,
    btnColor,
    gap,
    isVertical,
    fs = '3.125rem',
    bd = 0,
    isHome = false,
}: {
    title: string;
    sub?: string;
    buttonTitle: string;
    image: string;
    bgColor: string;
    color?: string;
    btnColor?: string;
    gap?: any;
    isVertical?: boolean;
    fs?: any;
    bd?: any;
    isHome?: boolean;
}) => {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');
    // const { ref } = useScramble({
    //     text: title,
    //     speed: 0.6,
    //     tick: 1,
    //     step: 1,
    //     scramble: 8,
    //     seed: 0,
    //     overflow: false,
    //     overdrive: false,
    // });

    return (
        <Box
            w="full"
            bgImage="url('/assets/bgt.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgColor={bgColor}
        >
            <HStack
                w="85%"
                mx="auto"
                h="85vh"
                align="center"
                gap={gap}
                py={isVertical ? '2.5rem' : '0'}
                flexDir={isVertical ? 'column' : 'row'}
            >
                <VStack
                    align={isVertical ? 'center' : 'flex-start'}
                    spacing="1.5rem"
                    w={isVertical ? '80%' : '60%'}
                >
                    <Text
                        fontSize={fs}
                        color={color || 'brand.100'}
                        fontWeight="800"
                        fontFamily="Nunito Sans"
                        mb="0"
                        lineHeight="normal"
                        textAlign={isVertical ? 'center' : 'left'}
                        // ref={ref}
                    >
                        {title}
                    </Text>
                    {sub && (
                        <Text
                            fontSize="1.25rem"
                            color={color || '#696969'}
                            fontWeight="600"
                            fontFamily="Nunito"
                            mb="0"
                            maxW="88%"
                            lineHeight="normal"
                        >
                            {sub}
                        </Text>
                    )}
                    {isHome ? (
                        <HStack W="90%">
                            <Input
                                placeholder="Your Work Enail"
                                border="1px solid #c4c4c4"
                                bgColor="white"
                                h="3.37rem"
                                w=""
                                borderRadius="0.5rem"
                                padding=".5 1.25rem"
                                fontFamily="Nunito"
                                onChange={(e) => setUserEmail(e.target.value)}
                                W="60%"
                            />
                            <Button
                                fontSize="1.125rem"
                                color="white"
                                bgColor={btnColor || 'brand.400'}
                                borderRadius="8px"
                                px="2rem"
                                h="3.37rem"
                                fontFamily="Nunito"
                                onClick={() =>
                                    router.push(`/pricing?email=${userEmail}`)
                                }
                                _hover={{ bgColor: 'brand.400' }}
                                w="40%"
                            >
                                Sign Up For Free
                            </Button>
                        </HStack>
                    ) : (
                        <Button
                            fontSize="1.125rem"
                            color="white"
                            bgColor={btnColor || 'brand.400'}
                            borderRadius="8px"
                            px="2rem"
                            h="3.25rem"
                            fontFamily="Nunito"
                            onClick={() => router.push('/pricing')}
                            _hover={{ bgColor: 'brand.400' }}
                        >
                            {buttonTitle}
                        </Button>
                    )}
                    {sub && (
                        <Text
                            fontSize="0.81rem"
                            color={color || '#696969'}
                            fontWeight="400"
                            fontFamily="Nunito"
                            fontStyle="italic"
                            mb="0"
                        >
                            Enjoy all features for free ( 30 days trial - No
                            credit card required.)
                        </Text>
                    )}
                </VStack>
                <Box
                    w={isVertical ? '38rem' : '41rem'}
                    h={isVertical ? '23rem' : '27rem'}
                    borderRadius={bd}
                    overflow="hidden"
                    pos={isHome ? 'absolute' : 'unset'}
                    right={0}
                >
                    <Image
                        src={image}
                        w={isVertical ? 'auto' : 'full'}
                        h="full"
                        alt="banner image"
                        mx={isVertical ? 'auto' : 'unset'}
                    />
                </Box>
            </HStack>
        </Box>
    );
};
