import { Box, Button, Text } from '@chakra-ui/react';
import {
    useStripe,
    useElements,
    PaymentElement,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CheckoutForm = ({
    payBtnText = 'Confirm Payment',
    redirectUrl,
    isSubscription = true,
    clientId,
}: {
    payBtnText?: string;
    redirectUrl: string;
    isSubscription?: boolean;
    clientId?: string;
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const subscriptionId = router.asPath.split('/')[2]?.split('?')[0];

    // console.log({ subscriptionId });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!stripe || !elements) {
                return;
            }
            setIsLoading(true);
            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/completed?redirectUrl=${redirectUrl}&subscriptionId=${subscriptionId}&clientId=${clientId}&subscriptionPayment=${isSubscription}`,
                },
            });
            if (result.error) {
                setError(result.error.message);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            // setError(error);
            console.log({ error });
        }
    };
    return (
        <Box>
            <Text
                color="#1b1d21"
                fontWeight="700"
                p="1.2rem 2rem"
                mb="0"
                textAlign="center"
                borderBottom="2px solid #e0e0e0"
            >
                Enter Your Card Details
            </Text>
            <Box py="2rem">
                {error && (
                    <Text color="red" fontSize=".9rem">
                        {error}
                    </Text>
                )}
                <form onSubmit={handleSubmit}>
                    <PaymentElement />
                    <Button
                        bgColor="brand.400"
                        color="white"
                        w="full"
                        h="3rem"
                        my="3rem"
                        type="submit"
                        isDisabled={!stripe}
                        isLoading={isLoading}
                    >
                        {payBtnText}
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default CheckoutForm;
