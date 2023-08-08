import { Accordion, Box, Text, VStack, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { AccordionSingle } from '@components/AccordionSingle';
import FaqData from './FaqData.json';
import { useRouter } from 'next/router';

export const Faq = () => {
    const router = useRouter();
    return (
        <Box bgColor="white" w="full">
            <Box p="4rem 0 5.5rem" w="70%" mx="auto" id="faq">
                <MainTitle text="FAQs" />
                <Text
                    color="brand.400"
                    fontSize=".87rem"
                    textAlign="center"
                    fontWeight="700"
                    fontFamily="Nunito"
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
                            <AccordionSingle
                                title={x.title}
                                content={x.content}
                            />
                        ))}
                    </Accordion>
                </VStack>
            </Box>
            <Text
                color="#182c51"
                fontSize="2.125rem"
                textAlign="center"
                fontWeight="600"
                fontFamily="Nunito"
                mb="1.5rem"
            >
                Have a Large Team - Book a product Demo
            </Text>
            <Flex w="full" justify="center">
                <Button
                    fontSize="1.125rem"
                    color="white"
                    bgColor="brand.400"
                    borderRadius="8px"
                    px="3rem"
                    fontFamily="Nunito"
                    h="4rem"
                    onClick={() => router.push('/pricing')}
                >
                    Start Using TIMBA Today
                </Button>
            </Flex>
        </Box>
    );
};
