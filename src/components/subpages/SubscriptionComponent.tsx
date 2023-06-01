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
} from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { RegisterModel } from 'src/services';
import { useForm } from 'react-hook-form';
import { SelectrixBox } from '@components/bits-utils/Selectrix';
import { PrimaryDate } from '@components/bits-utils/PrimaryDate';
import { DateObject } from 'react-multi-date-picker';
import { PackageCard } from '@components/bits-utils/PackageCard';

export const SubscriptionComponent = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<RegisterModel>({
        mode: 'all',
    });
    const [value, setValue] = useState('1');
    const [billing, setBilling] = useState('month');
    const [subList, setSubList] = useState<any>([]);

    const onSubmit = async (data: RegisterModel) => {
        //
    };
    const updateSubscription = (id, name) => {
        console.log('Here');
        const exists = subList.find((x) => x.id == id);
        if (exists) {
            setSubList(subList.filter((x) => x.id !== id));
            return;
        }
        setSubList([...subList, { id, name }]);
    };
    console.log({ subList });
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
                    onClick={() => router.push('/subscription/history')}
                    px="2rem"
                >
                    Subscription History
                </Button>
            </Flex>
            <Box w="full" borderBottom="1px solid #e0e0e0" pb=".5rem">
                <RadioGroup
                    onChange={setValue}
                    value={value}
                    defaultValue={value}
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    {value == '1' ? (
                        <VStack w="50%" gap="1rem">
                            <SelectrixBox<RegisterModel>
                                control={control}
                                name="email"
                                error={errors.email}
                                keys="fee"
                                keyLabel="fee"
                                label="Client "
                                options={[]}
                            />
                            <Grid
                                w="full"
                                templateColumns={['repeat(2,1fr)']}
                                gap="2rem"
                            >
                                <PrimaryDate<RegisterModel>
                                    control={control}
                                    name="email"
                                    label={'Start Date'}
                                    error={errors.email}
                                    min={new DateObject().add(3, 'days')}
                                    disableWeekend
                                />
                                <PrimaryInput<RegisterModel>
                                    label="Duration"
                                    name="address"
                                    error={errors.address}
                                    placeholder=""
                                    defaultValue=""
                                    register={register}
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
                                    <PrimaryInput<RegisterModel>
                                        label="Company Name"
                                        name="lastName"
                                        error={errors.lastName}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryInput<RegisterModel>
                                        label="Email"
                                        name="email"
                                        error={errors.email}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryPhoneInput<RegisterModel>
                                        label="Phone Number"
                                        name="phoneNumber"
                                        error={errors.phoneNumber}
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
                                    <PrimaryInput<RegisterModel>
                                        label="Name"
                                        name="lastName"
                                        error={errors.lastName}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryInput<RegisterModel>
                                        label="Email"
                                        name="email"
                                        error={errors.email}
                                        placeholder=""
                                        defaultValue=""
                                        register={register}
                                    />
                                    <PrimaryPhoneInput<RegisterModel>
                                        label="Phone Number"
                                        name="phoneNumber"
                                        error={errors.phoneNumber}
                                        placeholder=""
                                        control={control}
                                    />
                                </VStack>
                            </Grid>
                            <PrimaryTextarea<RegisterModel>
                                label="Client Address"
                                name="organizationAddress"
                                error={errors.organizationAddress}
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
                                    <PrimaryDate<RegisterModel>
                                        control={control}
                                        name="email"
                                        label={'Start Date'}
                                        error={errors.email}
                                        min={new DateObject().add(3, 'days')}
                                        disableWeekend
                                    />
                                    <PrimaryInput<RegisterModel>
                                        label="Duration"
                                        name="address"
                                        error={errors.address}
                                        placeholder=""
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
                            onChange={() =>
                                setBilling(
                                    billing == 'month' ? 'annual' : 'month',
                                )
                            }
                        />
                        <HStack>
                            <Text
                                mb="0"
                                color={
                                    billing == 'annual' ? 'black' : '#6f7f95'
                                }
                                fontWeight={billing == 'annual' ? '500' : '300'}
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
                                25% OFF
                            </Box>
                        </HStack>
                    </HStack>
                    <Grid templateColumns={['repeat(3, 1fr)']} gap=".5rem">
                        <PackageCard
                            selected={subList.find((x) => x.id == 'abc')}
                            id="abc"
                            name={'Onshore'}
                            desc={
                                'It does not require a payment partner to process payments'
                            }
                            price={'$5,000'}
                            billed={billing == 'month' ? 'monthly' : 'annually'}
                            recommended={
                                'For companies and clients within Canada'
                            }
                            features={[
                                { id: '1', name: 'Client Onboarding' },
                                { id: '2', name: 'Team Onboarding' },
                                { id: '3', name: 'Timesheet submission' },
                                { id: '4', name: 'Payroll' },
                                { id: '5', name: 'Invoice' },
                            ]}
                            updateSubscription={updateSubscription}
                        />
                    </Grid>
                    <Text
                        my="3rem"
                        fontSize="20px"
                        fontWeight="700"
                        color="#1b1d21"
                    >
                        Enter Client Details & Duration Of Subscription
                    </Text>
                    <Grid templateColumns={['repeat(3, 1fr)']} gap=".5rem">
                        <PackageCard
                            selected={false}
                            id="x"
                            name={undefined}
                            desc={undefined}
                            price={undefined}
                            billed={undefined}
                            recommended={undefined}
                            features={[]}
                            updateSubscription={updateSubscription}
                        />
                    </Grid>

                    <Flex w="full" justify="center">
                        <Button
                            bgColor="brand.400"
                            color="white"
                            w="30%"
                            borderRadius="5px"
                            h="3rem"
                            my="3rem"
                        >
                            Save and Continue
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
};
