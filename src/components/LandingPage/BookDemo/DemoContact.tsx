import { Box, Button, Flex, Grid, VStack } from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NewClientSubscriptionModel, SubscriptionService, UtilityService } from 'src/services';
import * as yup from 'yup';
import { BookDemoModel } from 'src/services';


const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    location: yup.string().required('Location is required'),
    phoneNumber: yup.number().required('Phone Number is required'),
    numberOfUsers: yup.number().required('Number of Users is required'),
});
export const DemoContact = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<BookDemoModel>({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const router = useRouter();

    const onSubmit = async (data: BookDemoModel) => {
        console.log('hello');
        try {
            const result =
                await UtilityService.bookDemo({requestBody: data});
            if (result.status) {
                toast.success('Demo Booking Successful');
                reset();
                // router.push('/');
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
                        <PrimaryInput<BookDemoModel>
                            label="First Name"
                            name="firstName"
                            error={errors.firstName}
                            placeholder=""
                            defaultValue=""
                            register={register}
                            color="white"
                        />
                        <PrimaryInput<BookDemoModel>
                            label="Last Name"
                            name="lastName"
                            error={errors.lastName}
                            placeholder=""
                            defaultValue=""
                            register={register}
                            color="white"
                        />
                    </Grid>
                    <PrimaryInput<BookDemoModel>
                        label="Company Email"
                        name="email"
                        error={errors.email}
                        placeholder=""
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <PrimaryInput<BookDemoModel>
                        label="Location"
                        name="location"
                        error={errors.location}
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <PrimaryInput<BookDemoModel>
                        label="Phone Number"
                        name="phoneNumber"
                        error={errors.phoneNumber}
                        defaultValue=""
                        register={register}
                        color="white"
                    />
                    <PrimaryInput<BookDemoModel>
                        label="How many people will be using TIMBA"
                        name="numberOfUsers"
                        error={errors.numberOfUsers}
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
                            onClick={() => handleSubmit(onSubmit)()}
                        >
                            Save and Continue
                        </Button>
                    </Flex>
                </VStack>
            </form>
        </Box>
    );
};
