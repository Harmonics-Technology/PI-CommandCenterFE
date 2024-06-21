import { Box, Button, Flex, Grid, VStack } from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NewClientSubscriptionModel, SubscriptionService } from 'src/services';
import * as yup from 'yup';

const schema = yup.object().shape({});
export const DemoContact = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors, isSubmitting, isValid },
    } = useForm<NewClientSubscriptionModel>({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const router = useRouter();

    const onSubmit = async (data: NewClientSubscriptionModel) => {
        try {
            const result =
                await SubscriptionService.createNewClientAndSubscription({
                    requestBody: data,
                });
            if (result.status) {
                toast.success('Successful');
                router.push('/');
                return;
            }
            toast.error(result.message as string);
        } catch (error: any) {
            toast(error?.body?.message || error?.message);
        }
    };
    return (
        <Box
            bgColor="brand.100"
            borderRadius={['0', '1.25rem']}
            p={['2rem 1rem', '3rem']}
        >
            <form>
                <VStack spacing="2rem">
                    <Grid
                        templateColumns={['1fr', 'repeat(2,1fr)']}
                        gap="1rem"
                        w="full"
                    >
                        <PrimaryInput<NewClientSubscriptionModel>
                            label="First Name"
                            name="name"
                            error={errors.name}
                            placeholder=""
                            defaultValue=""
                            register={register}
                            color="white"
                        />
                        <PrimaryInput<NewClientSubscriptionModel>
                            label="Last Name"
                            name="name"
                            error={errors.name}
                            placeholder=""
                            defaultValue=""
                            register={register}
                            color="white"
                        />
                    </Grid>
                    <PrimaryInput<NewClientSubscriptionModel>
                        label="Company Email"
                        name="companyEmail"
                        error={errors.companyEmail}
                        placeholder=""
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <PrimaryInput<NewClientSubscriptionModel>
                        label="Location"
                        name="phoneNumber"
                        error={errors.phoneNumber}
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <PrimaryInput<NewClientSubscriptionModel>
                        label="Phone Number"
                        name="phoneNumber"
                        error={errors.phoneNumber}
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <PrimaryInput<NewClientSubscriptionModel>
                        label="How many people will be using TIMBA"
                        name="phoneNumber"
                        error={errors.phoneNumber}
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <Flex w="full" justify="center">
                        <Button
                            bgColor="brand.400"
                            color="white"
                            w="full"
                            borderRadius="0.5rem"
                            h="3.3rem"
                            isLoading={isSubmitting}
                            isDisabled={!isValid}
                            onClick={() => handleSubmit(onSubmit)}
                        >
                            Save and Continue
                        </Button>
                    </Flex>
                </VStack>
            </form>
        </Box>
    );
};
