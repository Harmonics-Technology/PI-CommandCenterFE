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
        <Box bgColor="white" py="8rem">
            <HStack gap="5rem" w="85%" mx="auto">
                <VStack align="flex-start" w="50%" spacing="1.25rem">
                    <Text
                        fontSize="2.75rem"
                        fontWeight="700"
                        lineHeight="3rem"
                        color={color ? color : '#182c51'}
                        mb="0"
                    >
                        {main}
                    </Text>
                    <Text
                        fontSize="1.5rem"
                        fontWeight="400"
                        lineHeight="2.5rem"
                        color={color ? color : '#636b83'}
                        mb="0"
                    >
                        {title}
                    </Text>
                    <Box>
                        <Button
                            fontSize="1.125rem"
                            color="white"
                            bgColor="brand.400"
                            borderRadius="8px"
                            px="2.5rem"
                            h="4rem"
                            fontFamily="Nunito"
                            onClick={onClick}
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
                                m="2rem 0 0"
                            >
                                {sub}
                            </Text>
                        )}
                    </Box>
                </VStack>
                <Box w="50%">
                    <Image src={image} w="full" alt="banner image" />
                </Box>
            </HStack>
        </Box>
    );
};
