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
    Icon,
} from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import { SelectrixBox } from '@components/bits-utils/Selectrix';
import router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterModel } from 'src/services';
import { RxPlusCircled } from 'react-icons/rx';
import { ISubscriptionProps } from '@components/generics/Schema';

export const SubscriptionFormComponent = ({ isEdit }: ISubscriptionProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<RegisterModel>({
        mode: 'all',
    });
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
                    <VStack gap=".8rem" align="flex-start" w="full">
                        <Text
                            color="#002861"
                            fontSize="15px"
                            fontWeight="700"
                            mb="0"
                        >
                            Enter your package details
                        </Text>
                        <SelectrixBox<RegisterModel>
                            control={control}
                            name="email"
                            error={errors.email}
                            keys="id"
                            keyLabel="label"
                            label="Select subscription Type"
                            options={[
                                { id: 1, label: 'Base Package' },
                                { id: 2, label: 'Add-ons' },
                            ]}
                        />
                        <PrimaryInput<RegisterModel>
                            label="Subscription Package Name"
                            name="email"
                            error={errors.email}
                            placeholder=""
                            defaultValue=""
                            register={register}
                        />
                        <PrimaryTextarea<RegisterModel>
                            label="Description"
                            name="organizationAddress"
                            error={errors.organizationAddress}
                            placeholder=""
                            defaultValue=""
                            register={register}
                        />
                        <PrimaryTextarea<RegisterModel>
                            label="Recommended For"
                            name="organizationAddress"
                            error={errors.organizationAddress}
                            placeholder=""
                            defaultValue=""
                            register={register}
                        />
                    </VStack>
                    <Box>
                        <Text
                            color="#002861"
                            fontSize="15px"
                            fontWeight="700"
                            my="2rem"
                        >
                            Features
                        </Text>
                        <PrimaryInput<RegisterModel>
                            label="Feature Name"
                            name="address"
                            error={errors.address}
                            placeholder=""
                            defaultValue=""
                            register={register}
                        />
                        <Flex
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
                        </Flex>
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
                        <PrimaryInput<RegisterModel>
                            label="Amount"
                            name="address"
                            error={errors.address}
                            placeholder=""
                            defaultValue=""
                            register={register}
                        />
                        <PrimaryInput<RegisterModel>
                            label="Amount"
                            name="address"
                            error={errors.address}
                            placeholder=""
                            defaultValue=""
                            register={register}
                        />
                    </Grid>

                    <FormControl display="flex" alignItems="center" my="2rem">
                        <FormLabel
                            htmlFor="email-alerts"
                            mb="0"
                            fontWeight="500"
                        >
                            Enable free trial for this package
                        </FormLabel>
                        <Switch id="email-alerts" />
                    </FormControl>

                    <Button
                        bgColor="brand.400"
                        color="white"
                        px="3rem"
                        borderRadius="5px"
                    >
                        Create
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
