import {
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { LeaveTab } from '@components/bits-utils/LeaveTab';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import { IClientInfoProps } from '@components/generics/Schema';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import BeatLoader from 'react-spinners/BeatLoader';
import { RegisterModel } from 'src/services';

export const ClientDetailsComponent = ({ id }: IClientInfoProps) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<RegisterModel>({
        mode: 'all',
    });

    const onSubmit = async (data: RegisterModel) => {
        //
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
                    onClick={() => router.back()}
                    px="2rem"
                >
                    Back
                </Button>
            </Flex>
            <LeaveTab
                tabValue={[
                    {
                        text: 'Client Information',
                        url: `/clients/${id}/client-information`,
                    },
                    {
                        text: 'Subscription Details',
                        url: `/clients/${id}/subscription-details`,
                    },
                ]}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    w="full"
                    templateColumns={['repeat(2,1fr)']}
                    gap="4rem"
                    mt="2rem"
                    pt="1rem"
                    pos="relative"
                >
                    <Box
                        pos="absolute"
                        left="50%"
                        transform="translate(-50% -50%)"
                        w="1.5px"
                        h="100%"
                        bgColor="#e0e0e0"
                    />
                    <Box w="full">
                        <VStack
                            gap="1.5rem"
                            w="70%"
                            mx="auto"
                            // borderRight="2px solid #E0E0E0"
                        >
                            <Text
                                color="#002861"
                                fontSize="15px"
                                fontWeight="700"
                                mb="0"
                                textAlign="left"
                                w="full"
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
                            <PrimaryTextarea<RegisterModel>
                                label="Client Address"
                                name="organizationAddress"
                                error={errors.organizationAddress}
                                placeholder=""
                                defaultValue=""
                                register={register}
                            />
                        </VStack>
                    </Box>
                    <Box w="full">
                        <VStack gap="1.5rem" w="70%" mx="auto">
                            <Text
                                color="#002861"
                                fontSize="15px"
                                fontWeight="700"
                                mb="0"
                                textAlign="left"
                                w="full"
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
                            <Flex justify="flex-end" w="full">
                                <Button
                                    bgColor="brand.400"
                                    color="white"
                                    borderRadius="5px"
                                    // height="3rem"
                                    fontSize="14px"
                                    px="2rem"
                                    type="submit"
                                    isLoading={isSubmitting}
                                    spinner={
                                        <BeatLoader color="white" size={10} />
                                    }
                                    // boxShadow="0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%)"
                                >
                                    <Box>Confirm Edit</Box>
                                </Button>
                            </Flex>
                        </VStack>
                    </Box>
                </Grid>
            </form>
        </Box>
    );
};
