import { Box, VStack, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './MainTitle';
import { useRouter } from 'next/router';

export const SolutionHero = ({
    title,
    sub,
}: {
    title: string;
    sub: string;
}) => {
    const router = useRouter();
    return (
        <Box>
            <VStack
                w="full"
                py={['2rem', '68px']}
                spacing="1.8rem"
                bgColor="brand.100"
                bgImage="/assets/revbg.png"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgBlendMode="overlay"
            >
                <MainTitle
                    text={title}
                    sub={sub}
                    color="white"
                    w={['90%', '54%']}
                />
                <VStack w={['90%', 'unset']}>
                    <Button
                        fontSize="1.125rem"
                        color="white"
                        bgColor="brand.400"
                        borderRadius="8px"
                        px="2.5rem"
                        h="4rem"
                        onClick={() => router.push('/pricing')}
                        w={['full', 'fit-content']}
                    >
                        Start Free Trial
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
                        Try Timba for free - No credit card required
                    </Text>
                </VStack>
            </VStack>
        </Box>
    );
};
