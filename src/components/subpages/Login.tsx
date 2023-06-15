import {
    Box,
    Flex,
    Image,
    Text,
    Link,
    VStack,
    Button,
    Checkbox,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { PrimaryInput } from '@components/bits-utils/PrimaryInput';
import { UserContext } from '@components/context/UserContext';
import {
    LoginModel,
    OpenAPI,
    UserService,
    UserViewStandardResponse,
} from 'src/services';
import BeatLoader from 'react-spinners/BeatLoader';

const schema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
});

function Login() {
    const router = useRouter();
    const { setUser } = useContext(UserContext);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [rememberedData, setRememberedData] = useState<any>();
    const [rememberMe, setRememberMe] = useState<boolean>();
    console.log({ rememberedData, rememberMe });
    const changeInputType = () => {
        setPasswordVisible(!passwordVisible);
    };
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<LoginModel>({
        resolver: yupResolver(schema),
        mode: 'all',
    });
    const onSubmit = async (data: LoginModel) => {
        try {
            const result = await UserService.loginUser({ requestBody: data });
            if (result.status) {
                rememberMe &&
                    Cookies.set(
                        'details',
                        JSON.stringify({
                            email: data.email,
                            pass: data.password,
                            rememberMe: rememberMe,
                        }),
                    );

                !rememberMe &&
                    Cookies.get('details') !== undefined &&
                    Cookies.remove('details');

                setUser(result.data);

                Cookies.set('user', JSON.stringify(result.data));
                OpenAPI.TOKEN = result?.data?.token as string;
                result.data &&
                    Cookies.set('token', result.data.token as string);
                // if (result.data?.twoFactorEnabled) {
                //     router.push('/login/twofalogin');
                //     return;
                // }
                toast.success('Login Successful');
                router.query.from
                    ? (window.location.href = decodeURIComponent(
                          router.query.from as unknown as string,
                      ))
                    : (window.location.href = '/dashboard');

                return;
            }
            toast.error(result.message as string);
            return;
        } catch (error: any) {
            toast(error?.message || error?.body?.message);
        }
    };
    // console.log(watch('email'), watch('password'));

    useEffect(() => {
        const isUser = Cookies.get('details');
        if (isUser !== undefined) {
            const userDetails = JSON.parse(isUser as unknown as string);
            setRememberedData(userDetails);
            setRememberMe(userDetails?.rememberMe || false);
            reset({
                email: userDetails.email,
                password: userDetails.pass,
            });
        }
    }, []);
    return (
        <Box bgColor="white" w="full" h="100vh">
            <Flex justify="flex-start" bgColor="white" w="90%" mx="auto">
                <Flex w="auto" py=".5rem" align="center" gap=".2rem">
                    <Image src="/assets/logo.png" h="2rem" />
                    <Text
                        fontWeight="bold"
                        mb="0"
                        fontSize="1.1rem"
                        fontFamily="Rubik"
                    >
                        ADMIN-TIMESHEET
                    </Text>
                </Flex>
            </Flex>
            <Flex w="full" h="75vh" justify="center" alignItems="center">
                <Box
                    w={['full', '40%']}
                    mx="auto"
                    // boxShadow={['0', '0 20px 27px 0 rgb(0 0 0 / 10%)']}
                    h={['auto', 'auto']}
                    p="1rem 3rem 4rem"
                >
                    {/* <Box display="flex" justifyContent="center" w="full" my="2rem">
                    <Image src="/assets/logo.png" h="3rem" />
                </Box> */}
                    <Text
                        fontSize="35px"
                        fontWeight="800"
                        w={['100%', '100%']}
                        lineHeight="1"
                        textAlign="center"
                    >
                        Welcome
                    </Text>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack w="full" spacing=".7rem">
                            <PrimaryInput<LoginModel>
                                register={register}
                                name="email"
                                error={errors.email}
                                defaultValue={''}
                                type="email"
                                placeholder="name@company.com"
                                label="Work Email"
                                fontSize="1rem"
                            />
                            <PrimaryInput<LoginModel>
                                register={register}
                                name="password"
                                error={errors.password}
                                defaultValue={''}
                                placeholder="password"
                                type={passwordVisible ? 'text' : 'password'}
                                icon={true}
                                passwordVisible={passwordVisible}
                                changeVisibility={changeInputType}
                                label="Password"
                                fontSize="1rem"
                            />
                            <Flex
                                w="full"
                                justify="space-between"
                                mb="2rem !important"
                            >
                                <Checkbox
                                    alignItems="center"
                                    borderColor="none"
                                    borderRadius="5px"
                                    size="sm"
                                    textTransform="capitalize"
                                    onChange={() =>
                                        setRememberMe((prev) => !prev)
                                    }
                                    isChecked={rememberMe}
                                    fontSize=".9rem"
                                >
                                    Keep me signed in.
                                </Checkbox>
                                <NextLink href="/forgot-password" passHref>
                                    <Link fontSize=".9rem" fontWeight="400">
                                        Forgot Password?
                                    </Link>
                                </NextLink>
                            </Flex>
                            <Button
                                variant="solid"
                                type="submit"
                                isLoading={isSubmitting}
                                spinner={<BeatLoader color="white" size={10} />}
                                w="full"
                                p="1.5rem 0"
                                color="white"
                                bgColor="brand.400"
                                isDisabled={!isValid}
                                // mt={["2rem", "0"]}
                            >
                                Login
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
}

export default Login;
