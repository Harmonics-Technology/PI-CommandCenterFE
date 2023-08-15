import {
    Flex,
    Grid,
    VStack,
    Box,
    Text,
    Radio,
    RadioGroup,
    Stack,
    HStack,
    Switch,
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
    ClientSubscriptionModel,
    NewClientSubscriptionModel,
    SubscriptionService,
    SubscriptionView,
} from 'src/services';
import { useForm } from 'react-hook-form';
import { SelectrixBox } from '@components/bits-utils/Selectrix';
import { PrimaryDate } from '@components/bits-utils/PrimaryDate';
import { DateObject } from 'react-multi-date-picker';
import { PackageCard } from '@components/bits-utils/PackageCard';
import { ISubscriptionProps } from '@components/generics/Schema';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { PaymentDetails } from '@components/Modals/PaymentDetails';

const schema = yup.object().shape({
    clientId: yup.string().required(),
    startDate: yup.string().required(),
    subscriptionId: yup.string().required(),
    duration: yup
        .number()
        .max(
            11,
            'Maximum number of month is 11, please select annual for more than 11 months',
        ),
});

const newClientSchema = yup.object().shape({
    companyName: yup.string().required(),
    companyEmail: yup.string().required(),
    companyAddress: yup.string().required(),
    companyPhoneNumber: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    startDate: yup.string().required(),
    subscriptionId: yup.string().required(),
    duration: yup
        .number()
        .max(
            11,
            'Maximum number of month is 11, please select annual for more than 11 months',
        ),
});

export const SubscriptionComponent = ({
    base,
    clients,
}: ISubscriptionProps) => {
    const router = useRouter();
    // console.log({ data });
    const {
        register,
        handleSubmit,
        control,
        watch: watchs,
        setValue: setValuee,
        trigger,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<NewClientSubscriptionModel>({
        resolver: yupResolver(newClientSchema),
        mode: 'all',
    });
    const {
        register: registers,
        handleSubmit: handleSubmits,
        watch,
        setValue,
        control: controls,
        trigger: triggers,
        reset: resets,
        formState: {
            errors: isError,
            isValid: existClientValid,
            isSubmitting: existSumbit,
        },
    } = useForm<ClientSubscriptionModel>({
        resolver: yupResolver(schema),
        mode: 'all',
    });
    const [values, setValues] = useState('1');
    const [billing, setBilling] = useState('month');
    const [subList, setSubList] = useState<any>([]);
    const [current, setCurrent] = useState('Month');
    const [readonly, setReadOnly] = useState(false);

    const selectValue = (data) => {
        setValues(data);
        reset();
        resets();
    };

    console.log(watch('clientId'));
    const noSub =
        watch('subscriptionId') == undefined &&
        watchs('subscriptionId') == undefined;

    console.log({ isValid });

    const updateSubscription = (base) => {
        const exists = subList.find((x) => x.id == base?.id);
        values == '1'
            ? setValue('subscriptionId', base?.id)
            : setValuee('subscriptionId', base?.id);
        if (exists) {
            setSubList(subList.filter((x) => x.id !== base?.id));
            values == '1'
                ? setValue('subscriptionId', undefined)
                : setValuee('subscriptionId', undefined);
            return;
        }
        setSubList([base]);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selection, setSelection] = useState<any>();

    console.log({ subList });

    const changePackagetype = () => {
        setBilling(billing == 'month' ? 'year' : 'month');
        if (billing == 'month') {
            setValue('duration', 1);
            setValuee('duration', 1);
            setCurrent('Year');
            setReadOnly(true);
            return;
        }
        setCurrent('Month');
        setReadOnly(false);
    };
    const totalAmount =
        billing == 'month'
            ? (subList[0]?.price as any) * (watch('duration') as number) ||
              (subList[0]?.price as any) * (watchs('duration') as number)
            : (subList[0]?.price as any) *
                  ((watch('duration') as number) * 12) ||
              (subList[0]?.price as any) *
                  ((watchs('duration') as number) * 12);

    const openModal = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        if (
            values == '1' &&
            !existClientValid &&
            watch('subscriptionId') == undefined
        ) {
            triggers();
            return;
        }
        if (
            values == '2' &&
            !isValid &&
            watchs('subscriptionId') == undefined
        ) {
            trigger();
            return;
        }
        setSelection({
            clientName:
                clients?.value?.filter((x) => x.id == watch('clientId'))[0]
                    ?.companyName || watchs('companyName'),
            duration: watch('duration') || watchs('duration'),
            startDate: watch('startDate') || watchs('startDate'),
            endDate: watch('startDate')
                ? dayjs(watch('startDate')).add(
                      watch('duration') as number,
                      'month',
                  )
                : dayjs(watchs('startDate')).add(
                      watchs('duration') as number,
                      'month',
                  ),
            package: {
                name: subList[0]?.name,
                price: subList[0]?.price as any,
            },
            total: totalAmount,
            bill: billing,
        });
        onOpen();
    };
    // console.log({ addonList });

    const onSubmit = async (data: NewClientSubscriptionModel) => {
        data.annualBilling = billing == 'month' ? false : true;
        data.subscriptionId = subList[0]?.id;
        data.endDate = dayjs(data?.startDate)
            .add(data?.duration as number, 'month')
            .format('YYYY-MM-DD');

        data.totalAmount = totalAmount;

        try {
            const result =
                await SubscriptionService.createNewClientAndSubscription({
                    requestBody: data,
                });
            if (result.status) {
                toast.success('Successfully');
                router.reload();
                return;
            }
            toast.error(result.message as string);
        } catch (error: any) {
            toast(error?.message || error?.body?.message);
        }
    };
    const existClientSubmit = async (data: ClientSubscriptionModel) => {
        data.annualBilling = billing == 'month' ? false : true;
        data.subscriptionId = subList[0]?.id;
        data.endDate = dayjs(data?.startDate)
            .add(data?.duration as number, 'month')
            .format('YYYY-MM-DD');
        data.totalAmount = totalAmount;
        console.log({ data });
        try {
            const result = await SubscriptionService.createClientSubscription({
                requestBody: data,
            });
            if (result.status) {
                toast.success('Successfully');
                router.reload();
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
                    {'Proinsight Consulting'}
                </Text>
                <Button
                    bgColor="brand.400"
                    color="white"
                    borderRadius="5px"
                    onClick={() => router.push('/admin/subscription/history')}
                    px="2rem"
                >
                    Subscription History
                </Button>
            </Flex>
            <Box w="full" borderBottom="1px solid #e0e0e0" pb=".5rem">
                <RadioGroup
                    onChange={(value) => selectValue(value)}
                    value={values}
                    defaultValue={values}
                >
                    <Stack direction="row">
                        <Radio value="1">Existing Client</Radio>
                        <Radio value="2">New Client</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            <Box w="90%" mx="auto">
                <Text
                    my="3rem"
                    fontSize="20px"
                    fontWeight="700"
                    color="#1b1d21"
                >
                    Enter Client Details & Duration Of Subscription
                </Text>
                <form>
                    {values == '1' ? (
                        <VStack w="50%" gap="1rem">
                            <SelectrixBox<ClientSubscriptionModel>
                                control={controls}
                                name="clientId"
                                error={isError.clientId}
                                keys="id"
                                keyLabel="companyName"
                                label="Client "
                                options={clients?.value}
                            />
                            <Grid
                                w="full"
                                templateColumns={['repeat(2,1fr)']}
                                gap="2rem"
                            >
                                <PrimaryDate<ClientSubscriptionModel>
                                    control={controls}
                                    name="startDate"
                                    label={'Start Date'}
                                    error={isError.startDate}
                                    min={new DateObject()}
                                    disableWeekend
                                />
                                <PrimaryInput<ClientSubscriptionModel>
                                    label="Duration"
                                    name="duration"
                                    error={isError.duration}
                                    placeholder=""
                                    defaultValue=""
                                    register={registers}
                                    isOptions
                                    setCurrent={changePackagetype}
                                    current={current}
                                    options={['Month', 'Year']}
                                    readonly={readonly}
                                />
                            </Grid>
                        </VStack>
                    ) : (
                        <Box w="full">
                            <Grid
                                templateColumns={['repeat(2, 1fr)']}
                                gap="2rem"
                                mb="1rem"
                            >
                                <VStack gap=".8rem" align="flex-start" w="full">
                                    <Text
                                        color="#002861"
                                        fontSize="15px"
                                        fontWeight="700"
                                        mb="0"
                                    >
                                        Company Details
                                    </Text>
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Company Name"
                                        name="companyName"
                                        error={errors.companyName}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Company Email"
                                        name="companyEmail"
                                        error={errors.companyEmail}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryPhoneInput<NewClientSubscriptionModel>
                                        label="Company Phone Number"
                                        name="companyPhoneNumber"
                                        error={errors.companyPhoneNumber}
                                        placeholder=""
                                        control={control}
                                    />
                                </VStack>
                                <VStack gap=".8rem" align="flex-start" w="full">
                                    <Text
                                        color="#002861"
                                        fontSize="15px"
                                        fontWeight="700"
                                        mb="0"
                                    >
                                        Person Of Contact Details
                                    </Text>
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Name"
                                        name="name"
                                        error={errors.name}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Email"
                                        name="email"
                                        error={errors.email}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryPhoneInput<NewClientSubscriptionModel>
                                        label="Phone Number"
                                        name="phoneNumber"
                                        error={errors.phoneNumber}
                                        placeholder=""
                                        control={control}
                                    />
                                </VStack>
                            </Grid>
                            <PrimaryTextarea<NewClientSubscriptionModel>
                                label="Client Address"
                                name="companyAddress"
                                error={errors.companyAddress}
                                placeholder=""
                                defaultValue=""
                                register={register}
                            />
                            <Box w="50%" mt="1rem">
                                <Grid
                                    w="full"
                                    templateColumns={['repeat(2,1fr)']}
                                    gap="2rem"
                                >
                                    <PrimaryDate<NewClientSubscriptionModel>
                                        control={control}
                                        name="startDate"
                                        label={'Start Date'}
                                        error={errors.startDate}
                                        min={new DateObject()}
                                        // disableWeekend
                                        placeholder="Select start date"
                                    />
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Duration"
                                        name="duration"
                                        error={errors.duration}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                        isOptions
                                        setCurrent={changePackagetype}
                                        current={current}
                                        options={['Month', 'Year']}
                                    />
                                </Grid>
                            </Box>
                        </Box>
                    )}
                    <Text
                        my="3rem"
                        fontSize="20px"
                        fontWeight="700"
                        color="#1b1d21"
                    >
                        Enter Client Details & Duration Of Subscription
                    </Text>
                    <HStack justify="center" mb="2rem">
                        <HStack>
                            <Text
                                mb="0"
                                color={billing == 'month' ? 'black' : '#6f7f95'}
                                fontWeight={billing == 'month' ? '500' : '300'}
                            >
                                Monthly Billing
                            </Text>
                        </HStack>
                        <Switch
                            onChange={() => changePackagetype()}
                            isChecked={billing == 'year'}
                        />
                        <HStack>
                            <Text
                                mb="0"
                                color={billing == 'year' ? 'black' : '#6f7f95'}
                                fontWeight={billing == 'year' ? '500' : '300'}
                            >
                                Annual Billing
                            </Text>
                            <Box
                                bgColor="#CDF9D3"
                                color="#0C7A52"
                                borderRadius="4px"
                                fontSize=".8rem"
                                p=".2rem .5rem"
                            >
                                Up to 25% OFF
                            </Box>
                        </HStack>
                    </HStack>
                    {base?.length > 0 && (
                        <Box w="90%" mx="auto">
                            <Text
                                my="3rem"
                                fontSize="20px"
                                fontWeight="700"
                                color="#1b1d21"
                            >
                                Package Subscription
                            </Text>
                            {noSub && (
                                <Text
                                    fontSize="13px"
                                    fontWeight="500"
                                    color="red"
                                    textAlign="center"
                                >
                                    Select a package to continue
                                </Text>
                            )}
                            <Grid
                                templateColumns={['repeat(3, 1fr)']}
                                gap=".5rem"
                                w="full"
                            >
                                {base?.map((x: SubscriptionView) => (
                                    <PackageCard
                                        id={x.id}
                                        key={x.id}
                                        name={x.name}
                                        selected={
                                            subList.find(
                                                (a) => a.id == x.id,
                                            ) as unknown as boolean
                                        }
                                        desc={x.description}
                                        price={
                                            billing == 'year'
                                                ? x.yearlyAmount
                                                : x.monthlyAmount
                                        }
                                        billed={
                                            billing == 'annual'
                                                ? 'annually'
                                                : 'monthly'
                                        }
                                        recommended={x.recommendedFor}
                                        features={x.features
                                            ?.split(',')
                                            .map((b) => b)}
                                        updateSubscription={updateSubscription}
                                    />
                                ))}
                            </Grid>
                        </Box>
                    )}

                    <Flex w="full" justify="center">
                        <Button
                            bgColor="brand.400"
                            color="white"
                            w="30%"
                            borderRadius="5px"
                            h="3rem"
                            my="3rem"
                            onClick={openModal}
                        >
                            Save and Continue
                        </Button>
                    </Flex>

                    {/* <Flex w="full" justify="center">
                        <Button
                            bgColor="brand.400"
                            color="white"
                            w="30%"
                            borderRadius="5px"
                            h="3rem"
                            my="3rem"
                            isLoading={
                                values == '1' ? existSumbit : isSubmitting
                            }
                            isDisabled={
                                values == '2' ? !isValid : !existClientValid
                            }
                            onClick={
                                values == '2'
                                    ? handleSubmit(onSubmit)
                                    : handleSubmits(existClientSubmit)
                            }
                            spinner={<BeatLoader color="white" size={10} />}
                        >
                            Save and Continue
                        </Button>
                    </Flex> */}
                </form>
            </Box>
            <PaymentDetails
                isOpen={isOpen}
                onClose={onClose}
                data={selection}
                isLoading={values == '1' ? existSumbit : isSubmitting}
                isValid={values == '2' ? isValid : existClientValid}
                clickFn={
                    values == '2'
                        ? handleSubmit(onSubmit)
                        : handleSubmits(existClientSubmit)
                }
            />
        </Box>
    );
};
