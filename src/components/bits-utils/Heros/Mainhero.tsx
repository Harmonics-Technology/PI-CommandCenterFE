import { Box, HStack, Text, Image, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export const Mainhero = ({
    title,
    sub,
    buttonTitle,
    image,
    bgColor,
    color,
    btnColor,
}: {
    title: string;
    sub: string;
    buttonTitle: string;
    image: string;
    bgColor: string;
    color?: string;
    btnColor?: string;
}) => {
    const router = useRouter();
    return (
        <Box
            w="full"
            bgImage="url('/assets/bgt.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgColor={bgColor}
        >
            <HStack w="90%" mx="auto" h="85vh" align="center" gap="3rem">
                <VStack align="flex-start" spacing="1.5rem" w="45%">
                    <Text
                        fontSize="3.125rem"
                        color={color || 'brand.100'}
                        fontWeight="800"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight="normal"
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize="1.25rem"
                        color={color || '#696969'}
                        fontWeight="600"
                        fontFamily="Nunito"
                        mb="0"
                    >
                        {sub}
                    </Text>
                    <Button
                        fontSize="1.125rem"
                        color="white"
                        bgColor={btnColor || 'brand.400'}
                        borderRadius="8px"
                        px="2rem"
                        h="3.25rem"
                        onClick={() => router.push('/pricing')}
                    >
                        {buttonTitle}
                    </Button>
                    <Text
                        fontSize="0.81rem"
                        color={color || '#696969'}
                        fontWeight="400"
                        fontFamily="Nunito"
                        fontStyle="italic"
                        mb="0"
                    >
                        Enjoy all features for free ( 30 days trial - No credit
                        card required.)
                    </Text>
                </VStack>
                <Box w="60%">
                    <Image src={image} w="full" alt="banner image" />
                </Box>
            </HStack>
        </Box>
    );
};
