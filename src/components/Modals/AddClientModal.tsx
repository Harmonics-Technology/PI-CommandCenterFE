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
import { ClientModel, ClientService } from 'src/services';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
    companyName: yup.string().required(),
    companyEmail: yup.string().required(),
    companyAddress: yup.string().required(),
    companyPhoneNumber: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
});

export const AddClientModal = ({ isOpen, onClose }: IModalProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isValid },
    } = useForm<ClientModel>({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const router = useRouter();
    const onSubmit = async (data: ClientModel) => {
        try {
            const result = await ClientService.addClient({
                requestBody: data,
            });
            if (result.status) {
                toast.success('Client created successfully');
                router.reload();
                return;
            }
            toast.error(result.message as string);
        } catch (error: any) {
            toast(error?.message || error?.body?.message);
        }
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
                    <PrimaryInput<ClientModel>
                        label="Company Name"
                        name="companyName"
                        error={errors.companyName}
                        placeholder=""
                        defaultValue=""
                        register={register}
                    />
                    <PrimaryInput<ClientModel>
                        label="Email"
                        name="companyEmail"
                        error={errors.companyEmail}
                        placeholder=""
                        defaultValue=""
                        register={register}
                    />
                    <PrimaryPhoneInput<ClientModel>
                        label="Phone Number"
                        name="companyPhoneNumber"
                        error={errors.companyPhoneNumber}
                        placeholder=""
                        control={control}
                    />
                    <PrimaryTextarea<ClientModel>
                        label="Client Address"
                        name="companyAddress"
                        error={errors.companyAddress}
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
                    <PrimaryInput<ClientModel>
                        label="Name"
                        name="name"
                        error={errors.name}
                        placeholder=""
                        defaultValue=""
                        register={register}
                    />
                    <PrimaryInput<ClientModel>
                        label="Email"
                        name="email"
                        error={errors.email}
                        placeholder=""
                        defaultValue=""
                        register={register}
                    />
                    <PrimaryPhoneInput<ClientModel>
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
                            isDisabled={!isValid}
                            spinner={<BeatLoader color="white" size={10} />}
                            // boxShadow="0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%)"
                        >
                            <Box>Add Client</Box>
                        </Button>
                    </Flex>
                </DrawerFooter>
            </form>
        </DrawerWrapper>
    );
};
