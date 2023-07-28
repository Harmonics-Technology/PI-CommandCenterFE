import { Accordion, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { AccordionSingle } from '@components/AccordionSingle';

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
                    <AccordionSingle
                        title="Lorem ipsum dolor sit amet cultriciespurus mattis nisl. ?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    />
                    <AccordionSingle
                        title="Lorem ipsum dolor sit amet cultriciespurus mattis nisl. ?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    />
                    <AccordionSingle
                        title="Lorem ipsum dolor sit amet cultriciespurus mattis nisl. ?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    />
                    <AccordionSingle
                        title="Lorem ipsum dolor sit amet cultriciespurus mattis nisl. ?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    />
                </Accordion>
            </VStack>
        </Box>
    );
};
