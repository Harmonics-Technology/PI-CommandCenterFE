import {
    Flex,
    Button,
    Box,
    Text,
    VStack,
    Grid,
    FormControl,
    FormLabel,
    Switch,
    HStack,
} from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import { SelectrixBox } from '@components/bits-utils/Selectrix';
import router from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubscriptionModel, SubscriptionService } from 'src/services';
import { ISubscriptionProps } from '@components/generics/Schema';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import calculatePercentage from '@components/generics/functions/calculatePercentage';
import CreatableSelect from 'react-select/creatable';

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    recommendedFor: yup.string().required(),
    // features: yup.string().required(),
    monthlyAmount: yup
        .string()
        .when('subscriptionTypeId', { is: 1, then: yup.string().required() }),
    yearlyAmount: yup
        .string()
        .when('subscriptionTypeId', { is: 1, then: yup.string().required() }),

    // freeTrialDuration: yup
    //     .string()
    //     .when('freeTrial', { is: true, then: yup.string().required() }),
});

export const SubscriptionFormComponent = ({
    isEdit,
    data,
    features,
}: ISubscriptionProps) => {
    // console.log({ features });
    const {
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors, isSubmitting, isValid },
    } = useForm<SubscriptionModel>({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: {
            description: data?.description,
            features: data?.features,
            freeTrialDuration: data?.freeTrialDuration,
            hasFreeTrial: data?.hasFreeTrial,
            id: data?.id,
            monthlyAmount: data?.monthlyAmount,
            monthlyDiscount: data?.monthlyDiscount,
            name: data?.name,
            recommendedFor: data?.recommendedFor,
            totalMonthlyAmount: data?.totalMonthlyAmount,
            totalYearlyAmount: data?.totalYearlyAmount,
            yearlyAmount: data?.yearlyAmount,
            yearlyDiscount: data?.yearlyDiscount,
        },
    });
    const [current, setCurrent] = useState(data?.discountType || '%');
    const [freeTrial, setFreeTrial] = useState(data?.hasFreeTrial || false);

    const featuresUpdate = (value) => {
        // console.log({ value });
        const data = value.map((x) => x.label);
        setValue('features', data);
    };

    const monthlyTotal =
        current == '%'
            ? (watch('monthlyAmount') as number) -
              calculatePercentage(
                  watch('monthlyAmount'),
                  watch('monthlyDiscount'),
              )
            : (watch('monthlyAmount') as number) -
              (watch('monthlyDiscount') as number);
    const yearlyTotal =
        current == '%'
            ? (watch('yearlyAmount') as number) -
              calculatePercentage(
                  watch('yearlyAmount'),
                  watch('yearlyDiscount'),
              )
            : (watch('yearlyAmount') as number) -
              (watch('yearlyDiscount') as number);

    function freeTrialFn() {
        setFreeTrial((prev) => !prev);
        setValue('hasFreeTrial', !freeTrial);
    }

    const onSubmit = async (data: SubscriptionModel) => {
        if (!isEdit) {
            data.totalMonthlyAmount = monthlyTotal;
            data.totalYearlyAmount = yearlyTotal;
            data.discountType = current;
        }
        data.totalMonthlyAmount = 0;
        data.totalYearlyAmount = 0;
        data.discountType = current;
        data.features = data.features?.toString();

        try {
            const result = isEdit
                ? await SubscriptionService.updateSubscription({
                      requestBody: data,
                  })
                : await SubscriptionService.createSubscription({
                      requestBody: data,
                  });
            if (result.status) {
                toast.success('Success');
                router.push('/admin/manage-subscription');
                return;
            }
            toast.error(result.message as string);
        } catch (error: any) {
            toast(error?.message || error?.body?.message);
        }
    };
    return (
        <Box w="full" bgColor="white" borderRadius="10px" p="1rem" minH="80vh">
            <Flex
                justify="space-between"
                pb="1rem"
                align="center"
                borderBottom="1px solid"
                borderColor="#e0e0e0"
                mb="1rem"
            >
                <Text fontWeight="800" color="#1b1d21" mb="0">
                    {isEdit ? 'Edit' : 'Add'} Subscription
                </Text>
                <Button
                    bgColor="brand.400"
                    color="white"
                    borderRadius="5px"
                    onClick={() => router.back()}
                    px="2rem"
                >
                    Back
                </Button>
            </Flex>
            <Box w="90%" mx="auto" mb="3rem">
                <Box w="50%">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack gap="1rem" align="flex-start" w="full">
                            <Text
                                color="#002861"
                                fontSize="15px"
                                fontWeight="700"
                            >
                                Enter your package details
                            </Text>

                            <PrimaryInput<SubscriptionModel>
                                label="Subscription Package Name"
                                name="name"
                                error={errors.name}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isRequired
                            />
                            <SelectrixBox<SubscriptionModel>
                                control={control}
                                name="name"
                                error={errors.name}
                                keys="label"
                                keyLabel="label"
                                label="Client "
                                options={[
                                    { id: 1, label: 'Basic' },
                                    { id: 2, label: 'Standard' },
                                    { id: 3, label: 'Premium' },
                                ]}
                            />
                            <PrimaryTextarea<SubscriptionModel>
                                label="Description"
                                name="description"
                                error={errors.description}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isRequired
                            />
                            <PrimaryTextarea<SubscriptionModel>
                                label="Recommended For"
                                name="recommendedFor"
                                error={errors.recommendedFor}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isRequired
                            />
                        </VStack>
                        <Box
                            borderY="1px solid"
                            borderColor="#e5e5e5"
                            my="2rem"
                            py="1rem"
                        >
                            <Text
                                color="#002861"
                                fontSize="15px"
                                fontWeight="700"
                                mb="1rem"
                            >
                                Features
                            </Text>
                            <PrimaryTextarea<SubscriptionModel>
                                label="Feature Name"
                                name="features"
                                error={errors.features}
                                placeholder=""
                                defaultValue={''}
                                register={register}
                                readonly
                                isRequired
                            />
                            <HStack w="full">
                                <CreatableSelect
                                    isMulti
                                    options={features?.map((x, i) => ({
                                        value: ++i,
                                        label: x.name,
                                    }))}
                                    onChange={(value) => featuresUpdate(value)}
                                    className="multi"
                                    classNamePrefix="multi-select"
                                />
                            </HStack>
                            {/* <Text fontSize=".8rem" fontWeight="800">
                                Use comma (,) to seprate each feature
                            </Text> */}
                            {/* <Flex
                            justify="flex-end"
                            color="brand.400"
                            fontSize="13px"
                            mt="1rem"
                            align="center"
                            cursor="pointer"
                        >
                            <Icon as={RxPlusCircled} />
                            <Text mb="0" fontWeight="800">
                                Add Feature
                            </Text>
                        </Flex> */}
                        </Box>
                        <Text
                            color="#002861"
                            fontSize="15px"
                            fontWeight="700"
                            my="2rem"
                        >
                            Value
                        </Text>

                        <Grid
                            w="full"
                            templateColumns={['repeat(2,1fr)']}
                            gap="2rem"
                        >
                            <PrimaryInput<SubscriptionModel>
                                label="Monthly Amount"
                                name="monthlyAmount"
                                error={errors.monthlyAmount}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isRequired
                            />
                            <PrimaryInput<SubscriptionModel>
                                label="Monthly Discount"
                                name="monthlyDiscount"
                                error={errors.monthlyDiscount}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isOptions
                                setCurrent={setCurrent}
                                current={current}
                                options={['%', '$']}
                            />
                            <PrimaryInput<SubscriptionModel>
                                label="Yearly Amount"
                                name="yearlyAmount"
                                error={errors.yearlyAmount}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isRequired
                            />
                            <PrimaryInput<SubscriptionModel>
                                label="Yearly Discount"
                                name="yearlyDiscount"
                                error={errors.yearlyDiscount}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isOptions
                                setCurrent={setCurrent}
                                current={current}
                                options={['%', '$']}
                            />
                        </Grid>
                        <Box mt="2rem">
                            <FormLabel
                                htmlFor="email-alerts"
                                mb="0"
                                fontWeight="500"
                                fontSize=".8rem"
                            >
                                Total Monthly Amount After Discount
                            </FormLabel>
                            <Flex
                                h="2.8rem"
                                w="full"
                                bgColor="gray.400"
                                color="white"
                                borderRadius="4px"
                                align="center"
                                px="1rem"
                                justify="flex-end"
                            >
                                {monthlyTotal}
                            </Flex>
                        </Box>
                        <Box mt="2rem">
                            <FormLabel
                                htmlFor="email-alerts"
                                mb="0"
                                fontWeight="500"
                                fontSize=".8rem"
                            >
                                Total Yearly Amount After Discount
                            </FormLabel>
                            <Flex
                                h="2.8rem"
                                w="full"
                                bgColor="gray.400"
                                color="white"
                                borderRadius="4px"
                                align="center"
                                px="1rem"
                                justify="flex-end"
                            >
                                {yearlyTotal}
                            </Flex>
                        </Box>

                        {/* <PrimaryInput<SubscriptionModel>
                                label="Total Amount"
                                name="totalAmount"
                                error={errors.addonAmount}
                                placeholder=""
                                defaultValue=""
                                register={register}
                                isRequired
                            /> */}

                        <Box my="2rem">
                            <FormControl
                                display="flex"
                                alignItems="center"
                                mb="1rem"
                            >
                                <FormLabel
                                    htmlFor="email-alerts"
                                    mb="0"
                                    fontWeight="500"
                                    fontSize=".9rem"
                                >
                                    Enable free trial for this package
                                </FormLabel>
                                <Switch
                                    id="email-alerts"
                                    onChange={() => freeTrialFn()}
                                    isChecked={freeTrial}
                                />
                            </FormControl>
                            {freeTrial && (
                                <PrimaryInput<SubscriptionModel>
                                    label="Duration"
                                    name="freeTrialDuration"
                                    error={errors.freeTrialDuration}
                                    placeholder=""
                                    defaultValue=""
                                    register={register}
                                    isRequired
                                />
                            )}
                        </Box>

                        <Button
                            bgColor="brand.400"
                            color="white"
                            px="3rem"
                            borderRadius="5px"
                            type="submit"
                            isLoading={isSubmitting}
                            isDisabled={!isValid}
                        >
                            {isEdit ? 'Update' : 'Create'}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
