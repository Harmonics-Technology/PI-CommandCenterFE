import {
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    Progress,
    Text,
    Tr,
} from '@chakra-ui/react';
// import { PaymentDetails } from '@components/Modals/PaymentDetails';
import { CustomTextWithSubtitle } from '@components/bits-utils/CustomTextWithSubtitle';
import { LeaveTab } from '@components/bits-utils/LeaveTab';
import { TableData, TableState } from '@components/bits-utils/TableData';
import Tables from '@components/bits-utils/Tables';
import { CAD } from '@components/generics/functions/Naira';
import { IClientInfoProps } from '@components/generics/Schema';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

export const ClientSubDetails = ({ sub }: IClientInfoProps) => {
    const router = useRouter();
    const data = sub?.value?.at(0);
    // const [data, setData] = useState();
    // // console.log({ currentSub, allSub });

    // const dateDiff = dayjs(currentSub?.endDate).diff(
    //     currentSub?.startDate,
    //     'day',
    // );
    // const dateUsed = dayjs().diff(dayjs(currentSub?.startDate), 'day');
    // const datePercent = Math.round((dateUsed / dateDiff) * 100);

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
                    {data?.client?.companyName}
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
                        text: 'Subscription Details',
                        url: ``,
                    },
                ]}
            />
            <Box borderBottom="1px solid #E0E0E0" py="1rem">
                <Text my="1.5rem" fontWeight="700" fontSize=".9rem">
                    Client Information
                </Text>
                <Grid
                    templateColumns={['1fr', 'repeat(5,1fr)']}
                    gap="1rem"
                    mb="1rem"
                >
                    <CustomTextWithSubtitle
                        title="First Name"
                        sub={data?.client?.name?.split(' ')[0]}
                    />
                    <CustomTextWithSubtitle
                        title="Phone Number"
                        sub={data?.client?.phoneNumber}
                    />
                    <CustomTextWithSubtitle
                        title="Country"
                        sub={data?.client?.country}
                    />
                </Grid>
                <Grid
                    templateColumns={['1fr', 'repeat(5,1fr)']}
                    gap="1rem"
                    mb="1rem"
                >
                    <CustomTextWithSubtitle
                        title="Last Name"
                        sub={data?.client?.name?.split(' ')[1]}
                    />
                    <CustomTextWithSubtitle
                        title="Email"
                        sub={data?.client?.email}
                    />
                    <CustomTextWithSubtitle
                        title="Address"
                        sub={data?.client?.address}
                    />
                </Grid>
            </Box>
            <Box borderBottom="1px solid #E0E0E0" py="1rem">
                <Text my="1.5rem" fontWeight="700" fontSize=".9rem">
                    Current Subscription: {sub?.size} Active subscription
                </Text>
                {sub?.value?.map((x) => (
                    <Grid
                        templateColumns={['1fr', 'repeat(5,1fr)']}
                        gap="1rem"
                        mb="1rem"
                    >
                        <CustomTextWithSubtitle
                            title="Subscription Type"
                            sub={x?.subscription?.name}
                        />
                        <CustomTextWithSubtitle
                            title="Billing Frequency"
                            sub={`${
                                x?.annualBilling ? 'Annually' : 'Monthly'
                            } }`}
                        />
                        <CustomTextWithSubtitle
                            title="Last Payment Date"
                            sub={dayjs(x?.startDate).format('dddd MMM YYYY')}
                        />
                        <CustomTextWithSubtitle
                            title="Upcoming Payment Date"
                            sub={dayjs(x?.endDate).format('dddd MMM YYYY')}
                        />
                    </Grid>
                ))}
            </Box>
            <Box borderBottom="1px solid #E0E0E0">
                {(sub?.value as any)?.length > 0 ? (
                    <Tables
                        tableHead={[
                            'Subscription type',
                            'Start date',
                            'Number of days left',
                            'Amount',
                            'Status',
                            'Number of license used',
                        ]}
                    >
                        <>
                            {sub?.value?.map((x) => (
                                <Tr>
                                    <TableData
                                        name={`${x?.subscription?.name} `}
                                    />
                                    <TableData
                                        name={dayjs(x?.startDate).format(
                                            'DD/MM/YYYY',
                                        )}
                                    />
                                    <TableData
                                        name={`${dayjs(x?.endDate).diff(
                                            dayjs(),
                                            'days',
                                        )} days`}
                                    />
                                    <TableData name={CAD(x?.totalAmount)} />
                                    <TableState name={x?.status} />
                                    <td style={{ width: '290px' }}>
                                        <Box w="full">
                                            <HStack
                                                fontSize="11px"
                                                fontWeight="500"
                                                w="full"
                                                justify="flex-end"
                                            >
                                                <Text
                                                    color="#8c8c8c"
                                                    fontFamily="Rubik"
                                                    mb="0.2rem"
                                                    fontSize=".6rem"
                                                >
                                                    {x?.numberOfLicenseUsed}/
                                                    {x?.numberOfLicense}
                                                </Text>
                                            </HStack>
                                            <Progress
                                                colorScheme="brand"
                                                size="sm"
                                                value={
                                                    ((x?.numberOfLicenseUsed as number) /
                                                        (x?.numberOfLicense as number)) *
                                                    100
                                                }
                                                borderRadius="25px"
                                                bgColor="#C4C4C4"
                                                boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
                                            />
                                        </Box>
                                    </td>
                                </Tr>
                            ))}
                        </>
                    </Tables>
                ) : (
                    <Text
                        my="2rem"
                        textAlign="center"
                        fontWeight="800"
                        color="red"
                    >
                        No subscription currently active
                    </Text>
                )}
            </Box>
            <Box borderTop="1px solid #E0E0E0" mt="2rem">
                <Text my="1.5rem" fontWeight="700" fontSize=".8rem">
                    Subscription Activities
                </Text>
                {/* <Flex justify="flex-end" mb="1rem">
                    <SearchComponent />
                </Flex> */}
                {([] as any)?.length > 0 ? (
                    <Tables
                        tableHead={[
                            'Subscription Type',
                            'Activities',
                            'Date & Time',
                        ]}
                    >
                        <>
                            {[].map((x: any) => (
                                <Tr>
                                    <TableData name={`Premium `} />
                                    <TableData
                                        name={`Super Admin assigns a Premium License to a user`}
                                    />
                                    <TableData
                                        name={dayjs().format('DD/MM/YY')}
                                    />
                                </Tr>
                            ))}
                        </>
                    </Tables>
                ) : (
                    <Text
                        my="2rem"
                        textAlign="center"
                        fontWeight="800"
                        color="red"
                    >
                        No activity to show!!!
                    </Text>
                )}
            </Box>
        </Box>
    );
};
