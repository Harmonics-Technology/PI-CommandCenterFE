import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { CAD } from '@components/generics/functions/Naira';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

export const SubScriptionCard = ({ title, price, sub, isActive, onClick }) => {
    return (
        <Box
            border={isActive ? '2px solid' : '1px solid'}
            borderColor={isActive ? 'brand.400' : '#a6a6a6'}
            p=".8rem"
            onClick={onClick}
            borderRadius="15px"
            w="223px"
        >
            <HStack justify="space-between" align="flex-start" pos="relative">
                <Box>
                    <Text fontWeight={700} mb="0">
                        {title}
                    </Text>
                    <HStack mt="0rem">
                        <Text fontWeight={700} fontSize="24px" mb="0">
                            {CAD(price)}.00
                        </Text>
                        <Text
                            fontWeight={700}
                            fontSize="14px"
                            color="#8c8c8c"
                            mb="0"
                        >
                            {sub}
                        </Text>
                    </HStack>
                </Box>
                {isActive && (
                    <Box pos="absolute" top="0" right="0">
                        <Icon
                            as={MdCheckCircle}
                            color="brand.400"
                            fontSize="20px"
                        />
                    </Box>
                )}
            </HStack>
        </Box>
    );
};
