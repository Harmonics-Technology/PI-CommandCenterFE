import { Box, Image, VStack, Text } from '@chakra-ui/react';
import React from 'react';

export const UserCard = ({
    image,
    title,
    sub,
}: {
    image?: string;
    title?: string;
    sub?: string;
}) => {
    return (
        <VStack>
            <Box w="full" h="12.25rem" overflow="hidden" borderRadius=".937rem">
                <Image src={image} w="full" h="full" objectFit="cover" />
            </Box>
            <Box>
                <Text
                    fontSize="1.125rem"
                    fontWeight="700"
                    lineHeight="2rem"
                    color={'#253053'}
                    mb=".5rem"
                >
                    {title}
                </Text>
                <Text
                    fontSize=".875rem"
                    fontWeight="500"
                    lineHeight="1.375rem"
                    color={'#636b83'}
                    mb="0"
                >
                    {sub}
                </Text>
            </Box>
        </VStack>
    );
};
