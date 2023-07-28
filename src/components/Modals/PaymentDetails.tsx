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
import BeatLoader from 'react-spinners/BeatLoader';
import { SubscriptionInfo } from '@components/bits-utils/SubscriptionInfo';
import dayjs from 'dayjs';
import { CAD } from '@components/generics/functions/Naira';

export const PaymentDetails = ({
    isOpen,
    onClose,
    data,
    isLoading,
    isValid,
    clickFn,
}: IRenewSubProps) => {
    // console.log({ isValid });
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
                    <Box
                        maxH="77vh"
                        overflowY="auto"
                        w="85%"
                        mx="auto"
                        px="1rem"
                    >
                        <SubscriptionInfo
                            label="Client Name"
                            packages={[{ type: data?.clientName }]}
                        />
                        <SubscriptionInfo
                            label="Duration"
                            packages={[
                                { type: `${data?.duration} ${data?.bill}` },
                            ]}
                        />
                        <SubscriptionInfo
                            label="Start Date"
                            packages={[
                                {
                                    type: dayjs(data?.startDate).format(
                                        'DD/MM/YYYY',
                                    ) as string,
                                },
                            ]}
                        />
                        <SubscriptionInfo
                            label="Due Date"
                            packages={[
                                {
                                    type: dayjs(data?.endDate).format(
                                        'DD/MM/YYYY',
                                    ) as string,
                                },
                            ]}
                        />
                        <SubscriptionInfo
                            label="Subscription Package"
                            packages={[
                                {
                                    type: data?.package?.name,
                                    price: CAD(data?.package?.price),
                                },
                            ]}
                        />
                        {/* <SubscriptionInfo
                            packages={data?.addons?.addonList.map((x: any) => ({
                                type: x.name,
                                price: CAD(x.price),
                            }))}
                        /> */}
                        <SubscriptionInfo
                            packages={[
                                { type: 'Total', price: CAD(data?.total) },
                            ]}
                            total
                        />
                        <VStack w="40%" mt="3rem" mx="auto" spacing="1rem">
                            <Button
                                w="full"
                                bgColor="#DA586F"
                                color="white"
                                border="5px"
                                h="3rem"
                                fontSize="14px"
                                borderRadius="5px"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>

                            <Button
                                bgColor="brand.400"
                                color="white"
                                w="full"
                                borderRadius="5px"
                                h="3rem"
                                my="3rem"
                                isLoading={isLoading}
                                isDisabled={isValid}
                                onClick={clickFn}
                                spinner={<BeatLoader color="white" size={10} />}
                            >
                                Save and Continue
                            </Button>
                        </VStack>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
