import {
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { CountChange } from '@components/bits-utils/CountChange';
import { PageHero } from '@components/bits-utils/Heros/PageHero';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimarySelect } from '@components/bits-utils/PrimarySelect';
import { SubScriptionCard } from '@components/bits-utils/SubScriptionCard';
import React, { useEffect, useState } from 'react';
import { NewClientSubscriptionModel, SubscriptionService } from 'src/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { CAD } from '@components/generics/functions/Naira';
import Cookies from 'js-cookie';
import { SingleConfirmationText } from '@components/bits-utils/SingleConfrimationText';
import dayjs from 'dayjs';
import { CustomBtn } from '@components/bits-utils/CustomBtn';
import InputBlank from '@components/bits-utils/InputBlank';

const newClientSchema = yup.object().shape({
    companyName: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
});
export const NewSignUpPage = ({ countries }: { countries: any }) => {
    const [selected, setSelected] = useState('month');
    const [userCount, setUserCount] = useState(5);
    const [confirmation, setConfirmation] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [base, setBase] = useState<any>();
    const router = useRouter();
    const { email } = router.query;
    const triggerCounter = (value: string) => {
        if (value == 'minus') {
            if (userCount <= 5) {
                setUserCount(5);
            } else {
                setUserCount((prev) => prev - 1);
            }
        }
        if (value == 'plus') {
            setUserCount((prev) => prev + 1);
        }
    };

    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors, isSubmitting, isValid },
    } = useForm<NewClientSubscriptionModel>({
        resolver: yupResolver(newClientSchema),
        mode: 'all',
        defaultValues: {
            enableFreeTrial: false,
            email: email as string,
        },
    });
    useEffect(() => {
        const selectedPackage = Cookies.get(
            'selectedPackage',
        ) as unknown as string;
        if (selectedPackage) {
            const bases = JSON.parse(selectedPackage);
            setBase(bases);
            setSelected(bases.billed);
        }
    }, []);

    const startDate = dayjs().format('DD/MM/YYYY');
    const endDate = dayjs(startDate)
        .add(1, selected as any)
        .format('DD/MM/YYYY');
    const value = selected == 'month' ? base?.price : base?.prices;
    const total =
        selected == 'month'
            ? base?.price * userCount
            : base?.prices * userCount;

    const showConfirmation = () => {
        if (!isValid) {
            trigger();
            return;
        }
        setConfirmation(true);
    };

    const onSubmit = async (data: NewClientSubscriptionModel) => {
        data.name = data.name + ' ' + lastName;
        data.totalAmount = total;
        data.annualBilling = selected == 'month' ? false : true;
        data.subscriptionId = base?.id;
        data.fromWebsite = true;
        data.numberOfLicense = userCount;
        data.duration = selected == 'month' ? 1 : 12;
        (data.companyEmail = data.email),
            (data.companyAddress = data.address),
            (data.companyPhoneNumber = data.phoneNumber);
        try {
            const result =
                await SubscriptionService.createNewClientAndSubscription({
                    requestBody: data,
                });
            if (result.status) {
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
        <Box>
            <PageHero
                img="/assets/pricing.png"
                text="Complete Your Subscription"
                bg="brand.100"
            />
            {confirmation ? (
                <Box bgColor="white" w="full">
                    <Box w="70%" mx="auto" py="4rem">
                        <Box
                            // borderRadius="5px"
                            // border="1px solid #C2CFE0"
                            p="1rem 2rem 105px"
                            mb="31px"
                            bgColor="white"
                        >
                            <Text
                                fontSize="20px"
                                fontWeight={500}
                                color="#1b1d21"
                                textAlign="center"
                            >
                                Subscription Confirmation
                            </Text>

                            <Box mt="30px">
                                <SingleConfirmationText
                                    title="Company Name"
                                    sub={watch('companyName')}
                                />
                                <SingleConfirmationText
                                    title="Duration"
                                    sub={`1 ${
                                        selected == 'year' ? 'Year' : 'Month'
                                    }`}
                                />
                                <SingleConfirmationText
                                    title="Start Date"
                                    sub={startDate}
                                />
                                <SingleConfirmationText
                                    title="Due Date"
                                    sub={endDate}
                                />
                                <SingleConfirmationText
                                    title="License Package"
                                    sub={`${base?.name}`}
                                />
                                <SingleConfirmationText
                                    title="Value of License"
                                    sub={value}
                                    color="brand.400"
                                    fw={700}
                                    price
                                />
                                <SingleConfirmationText
                                    title="Number of License"
                                    sub={userCount}
                                />
                                <SingleConfirmationText
                                    title="Total Value of License Purchased"
                                    sub={total}
                                    color="brand.400"
                                    fw={700}
                                    price
                                />
                            </Box>
                        </Box>
                        <HStack justifyContent="space-between" align="center">
                            <CustomBtn
                                color="white"
                                bg="#da5867"
                                h="44px"
                                text="Cancel"
                                onClick={() => setConfirmation(false)}
                            />
                            <CustomBtn
                                color="white"
                                bg="brand.400"
                                h="44px"
                                text="Proceed To Checkout"
                                loading={isSubmitting}
                                onClick={() => handleSubmit(onSubmit)()}
                            />
                        </HStack>
                    </Box>
                </Box>
            ) : (
                <Flex>
                    <Box bgColor="white" pb="5rem" w="60%" px="95px">
                        <Box mt="2rem">
                            <Text mb="1rem" fontWeight={700} fontSize="24px">
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
                                    borderTop="1px solid #d9d9d9"
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
                                            The minimum amount is 5 user
                                        </Text>
                                        <HStack gap="0">
                                            <CountChange
                                                value="-"
                                                onClick={() =>
                                                    triggerCounter('minus')
                                                }
                                            />
                                            <CountChange value={userCount} />
                                            <CountChange
                                                value="+"
                                                onClick={() =>
                                                    triggerCounter('plus')
                                                }
                                            />
                                        </HStack>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={700} mb="0">
                                            Select a subscription cycle
                                        </Text>
                                    </Box>
                                    <HStack gap="14px">
                                        <SubScriptionCard
                                            title="Monthly"
                                            price={base?.price}
                                            sub="/month/user"
                                            onClick={() => setSelected('month')}
                                            isActive={selected == 'month'}
                                        />
                                        <SubScriptionCard
                                            title="Annually"
                                            price={base?.prices}
                                            sub="/year/user"
                                            onClick={() => setSelected('year')}
                                            isActive={selected == 'year'}
                                        />
                                    </HStack>
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
                                    label="Country"
                                    name="country"
                                    error={errors.country}
                                    placeholder="Select Country"
                                    defaultValue=""
                                    register={register}
                                    options={countries?.map((x) => (
                                        <option value={x.name}>{x.name}</option>
                                    ))}
                                />
                                <PrimaryInput<NewClientSubscriptionModel>
                                    label="Client Address"
                                    name="address"
                                    error={errors.address}
                                    placeholder="Enter Address"
                                    defaultValue=""
                                    register={register}
                                />
                            </Grid>
                        </Box>
                    </Box>
                    <Box p="35px 50px" bgColor="#ebeff2" w="40%">
                        <Text fontWeight={700} fontSize="24px">
                            Order Summary
                        </Text>
                        <Box mt="60px">
                            <HStack align="flex-start" justify="space-between">
                                <VStack align="flex-start" gap=".2rem">
                                    <Text
                                        fontWeight={700}
                                        fontSize="18px"
                                        mb="0"
                                    >
                                        {base?.name}
                                    </Text>
                                    <Text
                                        fontWeight={700}
                                        color="#696969"
                                        mb="0"
                                    >
                                        {userCount} users
                                    </Text>
                                    <Text
                                        fontWeight={700}
                                        color="#696969"
                                        mb="0"
                                    >
                                        {selected == 'month'
                                            ? 'Monthly'
                                            : 'Yearly'}
                                        Plan
                                    </Text>
                                </VStack>
                                <Text fontWeight={700} fontSize="18px">
                                    {CAD(
                                        selected == 'month'
                                            ? base?.price
                                            : base?.prices,
                                    )}
                                    .00
                                </Text>
                            </HStack>
                            <HStack
                                align="flex-start"
                                justify="space-between"
                                py="50px"
                                border="1px dashed black"
                                borderRight="0"
                                borderLeft="0"
                                mt=".5rem"
                            >
                                <Text fontWeight={700} fontSize="18px">
                                    TOTAL
                                </Text>
                                <Text fontWeight={700} fontSize="18px">
                                    {CAD(total)}
                                    .00
                                </Text>
                            </HStack>
                            <Flex w="90%" justify="center" mx="auto">
                                <Button
                                    bgColor="brand.400"
                                    color="white"
                                    w="full"
                                    borderRadius="5px"
                                    h="46px"
                                    mt="90px"
                                    onClick={showConfirmation}
                                >
                                    Proceed
                                </Button>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};
