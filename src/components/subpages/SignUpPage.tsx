import {
    Box,
    Grid,
    VStack,
    Text,
    useDisclosure,
    Button,
    Flex,
} from '@chakra-ui/react';
import { PrimaryDate } from '@components/bits-utils/PrimaryDate';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import React, { useEffect, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NewClientSubscriptionModel, SubscriptionService } from 'src/services';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { PackageCard } from '@components/bits-utils/PackageCard';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { PaymentDetails } from '@components/Modals/PaymentDetails';
import { PrimaryRadio } from '@components/bits-utils/PrimaryRadio';

const newClientSchema = yup.object().shape({
    companyName: yup.string().required(),
    companyEmail: yup.string().required(),
    companyAddress: yup.string().required(),
    companyPhoneNumber: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    startDate: yup.string().required(),
    duration: yup
        .number()
        .max(
            11,
            'Maximum number of month is 11, please select annual for more than 11 months',
        ),
});

export const SignUpPage = () => {
    const [billing, setBilling] = useState('month');
    const [current, setCurrent] = useState('Month');
    const [readonly, setReadOnly] = useState(false);
    const [selection, setSelection] = useState<any>();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [base, setBase] = useState<any>();
    const router = useRouter();

    useEffect(() => {
        const selectedPackage = Cookies.get(
            'selectedPackage',
        ) as unknown as string;
        if (selectedPackage) {
            const bases = JSON.parse(selectedPackage);
            setBase(bases);
            setBilling(bases.billed);
            setCurrent(
                bases.billed.charAt(0).toUpperCase() + bases.billed.slice(1),
            );
            setValue('duration', 1);
            setReadOnly(bases.billed == 'year' ? true : false);
        }
    }, []);
    console.log({ base });
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        trigger,
        formState: { errors, isSubmitting, isValid },
    } = useForm<NewClientSubscriptionModel>({
        resolver: yupResolver(newClientSchema),
        mode: 'all',
        defaultValues: { enableFreeTrial: false },
    });

    const changePackagetype = () => {
        setBilling(billing == 'month' ? 'year' : 'month');
        if (billing == 'month') {
            setValue('duration', 1);
            setCurrent('Year');
            setReadOnly(true);
            return;
        }
        setCurrent('Month');
        setReadOnly(false);
    };
    const enableFreeTrial =
        (watch('enableFreeTrial') as unknown as string) == 'Try For Free'
            ? true
            : false;
    // console.log(enableFreeTrial);

    const totalAmount =
        billing == 'month'
            ? base?.price * (watch('duration') as number)
            : base?.prices * (watch('duration') as number);

    const openModal = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        if (!isValid) {
            trigger();
            return;
        }

        setSelection({
            clientName: watch('companyName'),
            duration: watch('duration'),
            startDate: watch('startDate'),
            endDate: dayjs(watch('startDate')).add(
                watch('duration') as number,
                billing == 'month' ? 'month' : 'year',
            ),

            package: {
                name: base?.name,
                price: billing == 'month' ? (base?.price as any) : base?.prices,
            },
            total: totalAmount,
            bill: billing,
        });
        onOpen();
    };
    // console.log({ addonList });

    const onSubmit = async (data: NewClientSubscriptionModel) => {
        data.annualBilling = billing == 'month' ? false : true;
        data.subscriptionId = base?.id;
        data.totalAmount = totalAmount;
        data.fromWebsite = true;
        data.enableFreeTrial = enableFreeTrial;
        if (enableFreeTrial) {
            data.freeTrialStartDate = data.startDate;
            data.startDate = dayjs(data?.startDate)
                .add(base?.freeTrialDuration as number, 'day')
                .format('YYYY-MM-DD');
        }
        data.endDate = dayjs(data?.startDate)
            .add(
                data?.duration as number,
                billing == 'month' ? 'month' : 'year',
            )
            .format('YYYY-MM-DD');
        console.log({ data });

        try {
            const result =
                await SubscriptionService.createNewClientAndSubscription({
                    requestBody: data,
                });
            if (result.status) {
                // console.log({ result });
                // toast.success('Successful');
                console.log({ result });
                if (result?.data?.clientSecret) {
                    router.push(
                        `/summary/${result.data?.id}?client_secret=${result?.data?.clientSecret}&clientId=${result?.data?.clientId}`,
                    );
                    return;
                }
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
        <Box w="full" py="5rem" bgColor="white">
            <Box w="80%" mx="auto">
                <MainTitle text="Complete your subscription" />
                <form>
                    <Grid
                        templateColumns={['repeat(2, 1fr)']}
                        gap="2rem"
                        my="4rem"
                        w="full"
                    >
                        <VStack spacing="2rem" w="full">
                            <VStack gap=".8rem" align="flex-start" w="full">
                                <Text
                                    // color="white"
                                    fontSize="15px"
                                    fontWeight="700"
                                    // p="1rem 2rem"
                                    // bgColor="#002861"
                                    color="#002861"
                                    w="50%"
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
                                    // color="white"
                                    fontSize="15px"
                                    fontWeight="700"
                                    // p="1rem 2rem"
                                    // bgColor="#002861"
                                    w="50%"
                                    color="#002861"
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
                            <PrimaryTextarea<NewClientSubscriptionModel>
                                label="Client Address"
                                name="companyAddress"
                                error={errors.companyAddress}
                                placeholder=""
                                defaultValue=""
                                register={register}
                            />
                            {base?.freeTrial && (
                                <PrimaryRadio<NewClientSubscriptionModel>
                                    name={'enableFreeTrial'}
                                    error={errors.enableFreeTrial}
                                    control={control}
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
                            <Box w="full">
                                <Text
                                    // color="white"
                                    fontSize="15px"
                                    fontWeight="700"
                                    // p="1rem 2rem"
                                    // bgColor="#002861"
                                    mb="2rem"
                                    w="50%"
                                    color="#002861"
                                >
                                    Subscription Details
                                </Text>
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
                                        readonly={readonly}
                                    />
                                </Grid>
                            </Box>
                        </VStack>

                        <Box w="80%" ml="auto" pos="sticky">
                            <PackageCard
                                id={base?.id}
                                name={base?.name}
                                desc={base?.description}
                                prices={
                                    base?.prices *
                                    ((watch('duration') as number) || 1)
                                }
                                price={
                                    base?.price *
                                    ((watch('duration') as number) || 1)
                                }
                                selected
                                billed={
                                    billing == 'year'
                                        ? 'year'
                                        : `every ${watch('duration')} month`
                                }
                                recommended={base?.recommended}
                                freeTrial={base?.freeTrial}
                                freeTrialDuration={base?.freeTrialDuration}
                                features={base?.features}
                                updateSubscription={void 0}
                                isDisabled
                            />
                            <Flex w="full" justify="center">
                                <Button
                                    bgColor="brand.400"
                                    color="white"
                                    w="80%"
                                    borderRadius="5px"
                                    h="4rem"
                                    my="3rem"
                                    onClick={openModal}
                                >
                                    Save and Continue
                                </Button>
                            </Flex>
                        </Box>
                    </Grid>
                </form>
            </Box>
            {isOpen && (
                <PaymentDetails
                    isOpen={isOpen}
                    onClose={onClose}
                    data={selection}
                    isLoading={isSubmitting}
                    isValid={!isValid}
                    clickFn={handleSubmit(onSubmit)}
                />
            )}
        </Box>
    );
};
