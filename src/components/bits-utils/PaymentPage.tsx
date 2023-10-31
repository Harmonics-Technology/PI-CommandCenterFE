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
    'pk_test_51IF5dHGrnlH0843CmoosQR3VCgXNVH6dMjYtEBIc8VynNRhWphvwP89HGlv0BsyThloFjfcADs6f6HizQ1Tn4cLc00MRRyeWVX',
);
// process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,

export default function PaymentPage({
    clientSecret,
    isOpen,
    onClose,
    redirectUrl,
    payBtnText,
    isSubscription,
    clientId,
}: {
    clientSecret: string;
    isOpen: boolean;
    onClose: any;
    redirectUrl: string;
    payBtnText?: string;
    isSubscription?: boolean;
    clientId?: string;
}) {
    const options = {
        clientSecret: clientSecret,
    };
    // console.log({ clientSecret });

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
                w={['88%', '40%']}
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
                            <CheckoutForm
                                payBtnText={payBtnText}
                                redirectUrl={redirectUrl}
                                isSubscription={isSubscription}
                                clientId={clientId}
                            />
                        </Elements>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
