import { Box, Button, Flex, Grid, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';
import { useRouter } from 'next/router';
import { BottomHero } from './Heros/BottomHero';
export const FeatureBody = ({
    topText,
    mainTitle,
    options,
    img,
    subText,
    bHero,
    fs,
}) => {
    const router = useRouter();
    return (
        <Box p={['2rem 0 0', '4.4rem 0 0rem']} mx="auto" w="100%">
            <Box w={['90%', '80%']} mx="auto">
                <Text
                    fontSize="1.125rem"
                    fontWeight={400}
                    color="#636b83"
                    textAlign="center"
                    lineHeight="1.875rem"
                >
                    {topText}
                </Text>
                <Box py={['2rem', '3rem']}>
                    <MainTitle text={mainTitle} w={['100%', '80%']} />
                </Box>
                <Grid
                    templateColumns={['1fr', 'repeat(3,1fr)']}
                    gap="2rem"
                    mb="4.6rem"
                >
                    {options?.map((x) => (
                        <ServiceCard
                            title={x?.title}
                            sub={x?.sub}
                            bg="white"
                            key={x?.title}
                        />
                    ))}
                </Grid>
            </Box>
            <Flex justify="center" w={['90%', 'full']} mx="auto">
                <Button
                    fontSize={['1rem', '1.125rem']}
                    color="white"
                    bgColor={'brand.400'}
                    borderRadius="8px"
                    px="2rem"
                    h="3.25rem"
                    fontFamily="Nunito"
                    onClick={() => router.push('/pricing')}
                    _hover={{ bgColor: 'brand.400' }}
                >
                    Sign up for FREE trial - No credit card required
                </Button>
            </Flex>
            <Box w="full" bgColor="white" mt="6.2rem" pb="3rem">
                <HStack
                    align="center"
                    h="fit-content"
                    py="5.9rem"
                    mx="auto"
                    w="85%"
                    gap="4rem"
                    justify="center"
                    flexDir={['column', 'row']}
                >
                    <Box h={['auto', '20rem']}>
                        <Image src={img} h="full" w="auto" />
                    </Box>
                    <Text
                        fontSize="1.125rem"
                        lineHeight="1.875rem"
                        color="#636b83"
                        maxW="37rem"
                    >
                        {subText}
                    </Text>
                </HStack>
                <BottomHero title={bHero} w="45%" fs={fs} />
            </Box>
        </Box>
    );
};
