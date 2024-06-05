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
import { PrimaryRadio } from '@components/bits-utils/PrimaryRadio';
import { CountChange } from '@components/bits-utils/CountChange';
import { SubScriptionCard } from '@components/bits-utils/SubScriptionCard';
import InputBlank from '@components/bits-utils/InputBlank';
import { PrimarySelect } from '@components/bits-utils/PrimarySelect';

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
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
});

export const SubscriptionComponent = ({
    base,
    clients,
    country,
}: ISubscriptionProps) => {
    const router = useRouter();
    console.log({ base });
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

    // console.log({ subList });

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

    const [lastName, setLastName] = useState(false);
    const [selected, setSelected] = useState('month');
    const [userCount, setUserCount] = useState(1);
    const triggerCounter = (value: string) => {
        if (value == 'minus') {
            if (userCount <= 1) {
                setUserCount(1);
            } else {
                setUserCount((prev) => prev - 1);
            }
        }
        if (value == 'plus') {
            setUserCount((prev) => prev + 1);
        }
    };
    const enableFreeTrial =
        (watch('enableFreeTrial') as unknown as string) ||
        (watchs('enableFreeTrial') as unknown as string) == 'Try For Free'
            ? true
            : false;
    const totalAmount =
        billing == 'month'
            ? (subList[0]?.price as any) * userCount
            : (subList[0]?.prices as any) * userCount;

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
            duration: billing == 'month' ? 1 : 12,
            startDate: watch('startDate') || watchs('startDate'),
            endDate: dayjs(watch('startDate')).add(
                billing == 'month' ? 1 : 12,
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
        data.name = data.name + ' ' + lastName;
        data.duration = billing == 'month' ? 1 : 12;
        data.totalAmount = totalAmount;
        data.numberOfLicense = userCount;
        data.enableFreeTrial = enableFreeTrial;
        data.companyEmail = data.email;
        data.companyAddress = data.address;
        data.companyPhoneNumber = data.phoneNumber;
        if (enableFreeTrial) {
            data.freeTrialStartDate = data.startDate;
            data.startDate = dayjs(data?.startDate)
                .add(subList[0]?.freeTrialDuration as number, 'day')
                .format('YYYY-MM-DD');
        }
        // data.endDate = dayjs(data?.startDate)
        //     .add(
        //         data?.duration as number,
        //         billing == 'month' ? 'month' : 'year',
        //     )
        //     .format('YYYY-MM-DD');

        try {
            const result =
                await SubscriptionService.createNewClientAndSubscription({
                    requestBody: data,
                });
            if (result.status) {
                toast.success('Successful');
                router.reload();
                return;
            }
            toast.error(result.message as string);
        } catch (error: any) {
            toast(error?.body?.message || error?.message);
        }
    };
    const existClientSubmit = async (data: ClientSubscriptionModel) => {
        data.annualBilling = billing == 'month' ? false : true;
        data.subscriptionId = subList[0]?.id;
        data.totalAmount = totalAmount;
        data.enableFreeTrial = enableFreeTrial;
        if (enableFreeTrial) {
            data.freeTrialStartDate = data.startDate;
            data.startDate = dayjs(data?.startDate)
                .add(subList[0]?.freeTrialDuration as number, 'day')
                .format('YYYY-MM-DD');
        }
        data.endDate = dayjs(data?.startDate)
            .add(data?.duration as number, 'month')
            .format('YYYY-MM-DD');
        console.log({ data });
        try {
            const result = await SubscriptionService.createClientSubscription({
                requestBody: data,
            });
            if (result.status) {
                toast.success('Successful');
                router.reload();
                return;
            }
            toast.error(result.message as string);
        } catch (error: any) {
            toast(error?.body?.message || error?.message);
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
                    onClick={() =>
                        router.push('/command-center/subscription/history')
                    }
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
                            {subList[0]?.hasFreeTrial && (
                                <PrimaryRadio<ClientSubscriptionModel>
                                    name={'enableFreeTrial'}
                                    error={isError.enableFreeTrial}
                                    control={controls}
                                    defaultValue={
                                        'Make Payment For This Package'
                                    }
                                    radios={[
                                        'Try For Free',
                                        'Make Payment For This Package',
                                    ]}
                                    bg="#263238"
                                />
                            )}
                        </VStack>
                    ) : (
                        <Box w="full">
                            <Box mt="2rem">
                                <Text
                                    mb="2.87rem"
                                    fontWeight={700}
                                    fontSize="24px"
                                    color="brand.100"
                                >
                                    Your License Plan
                                </Text>
                                <Box
                                    borderRadius="12px"
                                    border="1px solid #002861"
                                    p="1rem"
                                >
                                    <Text
                                        mb="1rem"
                                        fontWeight={700}
                                        fontSize="18px"
                                    >
                                        {base?.name}
                                    </Text>
                                    <VStack
                                        // borderTop="1px solid #d9d9d9"
                                        p="1rem"
                                        mt="1rem"
                                        gap="18px"
                                        align="flex-start"
                                    >
                                        <Box>
                                            <Text fontWeight={700} mb=".2rem">
                                                Select the number of users
                                            </Text>
                                            <Text
                                                fontSize="14px"
                                                color="#696969"
                                                mb=".5rem"
                                            >
                                                The minimum amount is 1 user
                                            </Text>
                                            <HStack gap="0" spacing={0}>
                                                <CountChange
                                                    value="-"
                                                    onClick={() =>
                                                        triggerCounter('minus')
                                                    }
                                                />
                                                <CountChange
                                                    value={userCount}
                                                />
                                                <CountChange
                                                    value="+"
                                                    onClick={() =>
                                                        triggerCounter('plus')
                                                    }
                                                />
                                            </HStack>
                                        </Box>
                                    </VStack>
                                </Box>
                            </Box>
                            <Box>
                                <Grid
                                    mt="30px"
                                    templateColumns={['1fr', 'repeat(2, 1fr)']}
                                    gap="2rem"
                                >
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="First Name"
                                        name="name"
                                        error={errors.name}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <InputBlank
                                        label="Last Name"
                                        placeholder=""
                                        defaultValue=""
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid mt="30px" templateColumns={['1fr']}>
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Company Name"
                                        name="companyName"
                                        error={errors.companyName}
                                        placeholder="Enter Company Name"
                                        defaultValue=""
                                        register={register}
                                    />
                                </Grid>
                                <Grid
                                    mt="30px"
                                    templateColumns={['1fr', 'repeat(2, 1fr)']}
                                    gap="2rem"
                                >
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Email"
                                        name="email"
                                        error={errors.email}
                                        placeholder="Enter email"
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Phone Number"
                                        name="phoneNumber"
                                        error={errors.phoneNumber}
                                        placeholder="Enter phone number"
                                        defaultValue=""
                                        register={register}
                                    />

                                    <PrimarySelect<NewClientSubscriptionModel>
                                        label="Country/Region"
                                        name="country"
                                        error={errors.country}
                                        placeholder="Select Country"
                                        defaultValue=""
                                        register={register}
                                        options={country?.map((x) => (
                                            <option value={x.name}>
                                                {x.name}
                                            </option>
                                        ))}
                                    />
                                    <PrimaryInput<NewClientSubscriptionModel>
                                        label="Address"
                                        name="address"
                                        error={errors.address}
                                        placeholder="Enter Address"
                                        defaultValue=""
                                        register={register}
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
                        w="full"
                        textAlign="center"
                    >
                        Choose a plan
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
                                                ? x.totalYearlyAmount
                                                : x.totalMonthlyAmount
                                        }
                                        billed={
                                            billing == 'year'
                                                ? 'annually'
                                                : 'monthly'
                                        }
                                        freeTrial={x.hasFreeTrial}
                                        freeTrialDuration={x.freeTrialDuration}
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
