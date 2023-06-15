import { Box, Button, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { IAdminProps } from '@components/generics/Schema';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import BeatLoader from 'react-spinners/BeatLoader';
import { UpdateUserModel, UserService } from 'src/services';

export const SingleUserComponent = ({ id, user }: IAdminProps) => {
    const router = useRouter();
    const data = user;
    console.log({ data });
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<UpdateUserModel>({
        mode: 'all',
        defaultValues: {
            firstName: data?.fullName,
            id: id,
            phoneNumber: data?.phoneNumber,
        },
    });

    const onSubmit = async (data: UpdateUserModel) => {
        const name = data.firstName;
        data.firstName = name?.split(' ')[0];
        data.lastName = name?.split(' ')[1] || '';
        try {
            const result = await UserService.updateUser({
                requestBody: data,
            });
            if (result.status) {
                toast.success(result?.message as string);
                router.push('/administrators');
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
                    {data?.fullName}
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
                                Administrator Details
                            </Text>
                            <PrimaryInput<UpdateUserModel>
                                label="User Name"
                                name="firstName"
                                error={errors.firstName}
                                placeholder=""
                                defaultValue=""
                                register={register}
                            />
                            <PrimaryInput<any>
                                label="Email"
                                name="email"
                                placeholder=""
                                defaultValue={data?.email}
                                register={register}
                                disableLabel={true}
                            />
                            <PrimaryPhoneInput<UpdateUserModel>
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
