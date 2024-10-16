import { Box, HStack, VStack, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';

export const SingleShowCase = ({
    image,
    title,
    sub,
    color,
    onClick,
    btn,
    main,
}: {
    image: string;
    title: string;
    sub?: string;
    color?: string;
    onClick: any;
    btn: string;
    main?: string;
}) => {
    return (
        <Box bgColor="white" py={['40px', '8rem']}>
            <HStack
                gap={['39px', '5rem']}
                w={['90%', '85%']}
                mx="auto"
                flexDir={['column', 'row']}
            >
                <VStack
                    align="flex-start"
                    w={['100%', '50%']}
                    spacing={['1rem', '1.25rem']}
                >
                    <Text
                        fontSize={['24px', '2.75rem']}
                        fontWeight="700"
                        lineHeight={['2rem', '3rem']}
                        color={color ? color : '#182c51'}
                        mb="0"
                    >
                        {main}
                    </Text>
                    <Text
                        fontSize={['1rem', '1.5rem']}
                        fontWeight="400"
                        lineHeight={['21px', '2.5rem']}
                        color={color ? color : '#636b83'}
                        mb="0"
                    >
                        {title}
                    </Text>
                    <Box w="full">
                        <Button
                            fontSize={['1rem', '1.125rem']}
                            color="white"
                            bgColor="brand.400"
                            borderRadius="8px"
                            px="2.5rem"
                            h="4rem"
                            fontFamily="Nunito"
                            onClick={onClick}
                            w={['full', 'fit-content']}
                        >
                            {btn}
                        </Button>
                        {sub && (
                            <Text
                                fontSize="0.87rem"
                                color={color || '#696969'}
                                fontWeight="400"
                                fontFamily="Nunito"
                                fontStyle="italic"
                                m={['.5rem 0 0', '2rem 0 0']}
                                textAlign={['center', 'left']}
                            >
                                {sub}
                            </Text>
                        )}
                    </Box>
                </VStack>
                <Box w={['full', '50%']}>
                    <Image src={image} w="full" alt="banner image" />
                </Box>
            </HStack>
        </Box>
    );
};
