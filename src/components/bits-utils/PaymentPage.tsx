import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {
    Box,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export default function PaymentPage({
    clientSecret,
    isOpen,
    onClose,
}: {
    clientSecret: string;
    isOpen: boolean;
    onClose: any;
}) {
    const options = {
        clientSecret: clientSecret,
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
                <ModalBody>
                    <Box
                        maxH="77vh"
                        overflowY="auto"
                        w="85%"
                        mx="auto"
                        px="1rem"
                    >
                        <Elements stripe={stripePromise} options={options}>
                            <CheckoutForm />
                        </Elements>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
