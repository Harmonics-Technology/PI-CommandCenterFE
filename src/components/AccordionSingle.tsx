import {
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    Circle,
} from '@chakra-ui/react';
import React from 'react';
import { TfiAngleDown, TfiAngleRight } from 'react-icons/tfi';

export const AccordionSingle = ({ title, content }) => {
    return (
        <AccordionItem>
            {({ isExpanded }) => (
                <Box
                    border={isExpanded ? '1px solid' : 'none'}
                    borderColor="brand.400"
                    py="2rem"
                    borderRadius="1.125rem"
                    boxShadow="md"
                    bgColor="white"
                >
                    <h2>
                        <AccordionButton
                            h="80px"
                            px="2.5rem"
                            display="flex"
                            justifyContent="space-between"
                            _hover={{
                                bgColor: 'transparent',
                            }}
                        >
                            <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                fontSize={['1rem', '1.375rem']}
                                lineHeight="1.75rem"
                                color="#073367"
                                noOfLines={1}
                                fontWeight="700"
                                maxW="65%"
                            >
                                {title}
                            </Box>
                            {isExpanded ? (
                                <Circle bgColor="brand.400" size="3.1rem">
                                    <TfiAngleDown
                                        fontSize="1rem"
                                        color="white"
                                    />
                                </Circle>
                            ) : (
                                <Circle boxShadow="sm" size="3.1rem">
                                    <TfiAngleRight
                                        fontSize="1rem"
                                        color="brand.400"
                                    />
                                </Circle>
                            )}
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        pb={6}
                        textAlign="left"
                        fontSize={['1rem', '1.125rem']}
                        lineHeight="1.875rem"
                        color="#6f6c90"
                        w="95%"
                        px="2.5rem"
                    >
                        {content}
                    </AccordionPanel>
                </Box>
            )}
        </AccordionItem>
    );
};
