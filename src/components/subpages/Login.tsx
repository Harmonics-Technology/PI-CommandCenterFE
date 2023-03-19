import {
    Box,
    Flex,
    Image,
    Text,
    Link,
    VStack,
    Button,
    useToast,
    Checkbox,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
interface LoginModel {
    email: string;
    password: string;
}
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { UserContext } from '@components/context/UserContext';
import { OpenAPI, UserService, UserViewStandardResponse } from 'src/services';
import BeatLoader from 'react-spinners/BeatLoader';

const schema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
});

function Login() {
    const router = useRouter();
    const { setUser } = useContext(UserContext);
    const path = Cookies.get('path') as string;
    const toast = useToast();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const changeInputType = () => {
        setPasswordVisible(!passwordVisible);
    };
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<LoginModel>({
        resolver: yupResolver(schema),
        mode: 'all',
    });
    const onSubmit = async (data: LoginModel) => {
        try {
            const result = (await UserService.loginUser(
                data,
            )) as UserViewStandardResponse;
            if (result.status) {
                // console.log({ result });

                OpenAPI.TOKEN = result?.data?.token as string;
                toast({
                    title: `Login Successful`,
                    status: 'success',
                    isClosable: true,
                    position: 'top-right',
                });
                setUser(result.data);
                Cookies.set('user', JSON.stringify(result.data));
                result.data &&
                    Cookies.set('token', result.data.token as string);
                router.query.from
                    ? (window.location.href = decodeURIComponent(
                          router.query.from as unknown as string,
                      ))
                    : (window.location.href = `${result?.data?.role?.replaceAll(
                          ' ',
                          '',
                      )}/dashboard`);

                // window.location.href = `${result?.data?.role?.replaceAll(
                //     ' ',
                //     '',
                // )}/dashboard`;
                return;
            }
            toast({
                title: result.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
            return;
        } catch (error: any) {
            // console.log({ error });
            toast({
                title: error?.message || error?.body?.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
        }
    };
    return (
        <Flex w="full" h="100vh" justify="center" alignItems="center">
            <Box
                w={['full', '35%']}
                mx="auto"
                boxShadow="0 20px 27px 0 rgb(0 0 0 / 10%)"
                h={['full', 'auto']}
                p="1rem 3rem 4rem"
            >
                <Box display="flex" justifyContent="center" w="full" my="2rem">
                    <Image src="/assets/logo.png" h="3rem" />
                </Box>
                <Text
                    fontSize="35px"
                    fontWeight="bold"
                    w={['100%', '100%']}
                    lineHeight="1"
                    textAlign="center"
                >
                    Sign in!
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <VStack w="full" spacing=".7rem">
                        <PrimaryInput<LoginModel>
                            register={register}
                            name="email"
                            error={errors.email}
                            defaultValue=""
                            type="email"
                            placeholder="Chigozie"
                            label="Email Address"
                            fontSize="1rem"
                        />
                        <PrimaryInput<LoginModel>
                            register={register}
                            name="password"
                            error={errors.password}
                            defaultValue=""
                            placeholder="*********"
                            type={passwordVisible ? 'text' : 'password'}
                            icon={true}
                            passwordVisible={passwordVisible}
                            changeVisibility={changeInputType}
                            label="Password"
                            fontSize="1rem"
                        />
                        <Button
                            variant="solid"
                            type="submit"
                            isLoading={isSubmitting}
                            spinner={<BeatLoader color="white" size={10} />}
                            w="full"
                            p="1.5rem 0"
                            color="white"
                            bgColor="brand.400"
                            // mt={["2rem", "0"]}
                        >
                            Login
                        </Button>
                        <Flex w="full" justify="space-between">
                            <Checkbox
                                alignItems="center"
                                borderColor="none"
                                borderRadius="5px"
                                size="md"
                                textTransform="capitalize"
                            >
                                remember me.
                            </Checkbox>
                            <NextLink href="/forgot-password" passHref>
                                <Link fontSize="1rem" fontWeight="semibold">
                                    I forgot my password
                                </Link>
                            </NextLink>
                        </Flex>
                    </VStack>
                </form>
            </Box>
        </Flex>
    );
}

export default Login;
