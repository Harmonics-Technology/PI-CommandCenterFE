import { Accordion, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { AccordionSingle } from '@components/AccordionSingle';
import FaqData from './FaqData.json';

export const Faq = () => {
    return (
        <Box py="4rem" w="70%" mx="auto" id="faq">
            <MainTitle text="FAQs" />
            <Text
                color="brand.400"
                fontSize=".87rem"
                textAlign="center"
                fontWeight="700"
            >
                FREQUENTLY ASKED QUESTIONS
            </Text>

            <VStack mt="3rem">
                <Accordion
                    defaultIndex={[0]}
                    // allowMultiple
                    gap="1.8rem"
                    display="flex"
                    flexDirection="column"
                >
                    {FaqData.map((x) => (
                        <AccordionSingle title={x.title} content={x.content} />
                    ))}
                </Accordion>
            </VStack>
        </Box>
    );
};
