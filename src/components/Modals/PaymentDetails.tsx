import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Flex,
    ModalBody,
    Box,
    Text,
    Button,
    VStack,
} from '@chakra-ui/react';
import { IRenewSubProps } from '@components/generics/Schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import BeatLoader from 'react-spinners/BeatLoader';
import { LeaveModel } from 'src/services';
import { SubscriptionInfo } from '@components/bits-utils/SubscriptionInfo';

export const PaymentDetails = ({ isOpen, onClose }: IRenewSubProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isValid },
    } = useForm<LeaveModel>({
        mode: 'all',
    });

    const onSubmit = async (data: LeaveModel) => {
        //
    };
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            isCentered
            trapFocus={false}
        >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />

            <ModalContent
                py={5}
                borderRadius="0px"
                w={['88%', '60%']}
                // overflow="hidden"
                maxH="100vh"
                pos="fixed"
                mt="1rem"
                mb="1rem"
                maxW="100%"
            >
                <ModalHeader textAlign="center">
                    <Flex justify="center">
                        <Text
                            color="black"
                            fontSize="20px"
                            textAlign="center"
                            fontWeight="bold"
                        >
                            Payment Details
                        </Text>
                        {/* <Icon as={GrClose} onClick={onClose} cursor="pointer" /> */}
                    </Flex>
                </ModalHeader>

                <ModalBody>
                    <Box maxH="77vh" overflowY="auto" w="85%" mx="auto" px='1rem'>
                        <SubscriptionInfo
                            label="Client Name"
                            packages={[{ type: 'Proinsight Consulting' }]}
                        />
                        <SubscriptionInfo
                            label="Duration"
                            packages={[{ type: '6 Months' }]}
                        />
                        <SubscriptionInfo
                            label="Start Date"
                            packages={[{ type: '01/01/2023' }]}
                        />
                        <SubscriptionInfo
                            label="Due Date"
                            packages={[{ type: '06/30/2023' }]}
                        />
                        <SubscriptionInfo
                            label="Client Name"
                            packages={[
                                {
                                    type: 'Proinsight Consulting',
                                    price: '$5,000',
                                },
                            ]}
                        />
                        <SubscriptionInfo
                            packages={[
                                { type: 'Leave Management', price: '$500' },
                                { type: 'Shift Management', price: '$500' },
                                { type: 'Project Management', price: '$500' },
                            ]}
                        />
                        <SubscriptionInfo
                            packages={[{ type: 'Total', price: '$6,500' }]}
                            total
                        />
                        <VStack w="40%" mt="3rem" mx="auto">
                            <Button
                                w="full"
                                bgColor="#DA586F"
                                color="white"
                                border="5px"
                                fontSize="14px"
                                borderRadius="5px"
                            >
                                Cancel
                            </Button>
                            <Button
                                w="full"
                                bgColor="brand.400"
                                color="white"
                                border="5px"
                                fontSize="14px"
                                isLoading={isSubmitting}
                                isDisabled={!isValid}
                                borderRadius="5px"
                            >
                                Proceed to Payment
                            </Button>
                        </VStack>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
