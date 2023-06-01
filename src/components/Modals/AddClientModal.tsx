import {
    Box,
    Button,
    DrawerFooter,
    Flex,
    Text,
    VStack,
} from '@chakra-ui/react';
import DrawerWrapper from '@components/bits-utils/DrawerWrapper';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { PrimaryPhoneInput } from '@components/bits-utils/PrimaryPhoneInput';
import { PrimaryTextarea } from '@components/bits-utils/PrimaryTextArea';
import { IModalProps } from '@components/generics/Schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import BeatLoader from 'react-spinners/BeatLoader';
import { RegisterModel } from 'src/services';

export const AddClientModal = ({ isOpen, onClose }: IModalProps) => {
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
        <DrawerWrapper onClose={onClose} isOpen={isOpen} title={'Add Client'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack gap=".8rem" align="flex-start">
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
                    <PrimaryTextarea<RegisterModel>
                        label="Client Address"
                        name="organizationAddress"
                        error={errors.organizationAddress}
                        placeholder=""
                        defaultValue=""
                        register={register}
                    />
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

                <DrawerFooter my="2rem" p="0">
                    <Flex justify="space-between" w="full">
                        <Button
                            bgColor="#da586f"
                            color="white"
                            borderRadius="5px"
                            // height="3rem"
                            fontSize="14px"
                            px="2rem"
                            // boxShadow="0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%)"
                            onClick={() => onClose()}
                        >
                            Cancel
                        </Button>
                        <Button
                            bgColor="brand.400"
                            color="white"
                            borderRadius="5px"
                            // height="3rem"
                            fontSize="14px"
                            px="2rem"
                            type="submit"
                            isLoading={isSubmitting}
                            spinner={<BeatLoader color="white" size={10} />}
                            // boxShadow="0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%)"
                        >
                            <Box>Add Administrator</Box>
                        </Button>
                    </Flex>
                </DrawerFooter>
            </form>
        </DrawerWrapper>
    );
};
