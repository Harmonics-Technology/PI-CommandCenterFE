import {
    Box,
    Flex,
    HStack,
    Icon,
    Select,
    Tr,
    Text,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import { AddClientModal } from '@components/Modals/AddClientModal';
import { TableData, TableState } from '@components/bits-utils/TableData';
import Tables from '@components/bits-utils/Tables';
import { IClientProps } from '@components/generics/Schema';
import React from 'react';
import { ClientSubscriptionView } from 'src/services';
import dayjs from 'dayjs';
import Pagination from '@components/bits-utils/Pagination';
import { LeaveTab } from '@components/bits-utils/LeaveTab';
import { SearchComponent } from '@components/bits-utils/SearchComponent';
import { HiOutlineFilter } from 'react-icons/hi';
import { useRouter } from 'next/router';

export const FreeTrialComponent = ({ data }: IClientProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    const filterBox = (type, value) => {
        router.push({
            query: {
                ...router.query,
                [type]: value,
            },
        });
    };

    return (
        <Box w="full" bgColor="white" borderRadius="10px" p="1rem" minH="80vh">
            <Text
                fontWeight="800"
                color="#1b1d21"
                pb=".5rem"
                borderBottom="2px solid #e0e0e0"
            >
                Clients
            </Text>
            <LeaveTab
                tabValue={[
                    {
                        text: 'Client List',
                        url: `/command-center/clients/list`,
                    },
                    {
                        text: 'Free Trial Subscription Lifecycle',
                        url: `/command-center/clients/free-trial`,
                    },
                ]}
            >
                <Button
                    bgColor="brand.400"
                    color="white"
                    borderRadius="5px"
                    onClick={onOpen}
                    px="2rem"
                    h="31px"
                >
                    Add
                </Button>
            </LeaveTab>

            <Flex justify="space-between" py=".8rem">
                <HStack>
                    <HStack>
                        <Icon as={HiOutlineFilter} />
                        <Text>Filter By</Text>
                    </HStack>
                    {/* <Select
                        w="200px"
                        onChange={(e) => filterBox('client', e?.target.value)}
                        borderRadius="0"
                        fontSize=".8rem"
                    >
                        <option value="">Clients</option>
                        {clients?.value?.map((x) => (
                            <option key={x.id} value={x.id}>
                                {x?.companyName}
                            </option>
                        ))}
                    </Select> */}
                    <Select
                        w="100px"
                        onChange={(e) => filterBox('status', e?.target.value)}
                        borderRadius="0"
                        fontSize=".8rem"
                    >
                        <option value="">Status</option>
                        <option value="1">Active</option>
                        <option value="2">Free Trial</option>
                        <option value="2">Inactive</option>
                    </Select>
                </HStack>
                <SearchComponent />
            </Flex>
            <Tables
                tableHead={[
                    'Company Name',
                    'Free Trial Start Date',
                    'Free Trial End Date',
                    'Subscription Start Date',
                    'Current Status',
                    'Free Trial Plan',
                    'Days In Free Trial',
                    'Trial To Active Conversion',
                ]}
            >
                <>
                    {data?.value?.map((x: ClientSubscriptionView) => {
                        const route = router.push(
                            `/command-center/clients/list/${x?.clientId}`,
                        );
                        return (
                            <Tr key={x.id}>
                                <TableData
                                    name={x?.client?.companyName}
                                    onClick={route}
                                />
                                <TableData
                                    name={dayjs(x.freeTrialStartDate).format(
                                        'DD/MM/YYYY',
                                    )}
                                    onClick={route}
                                />
                                <TableData
                                    name={dayjs(x.freeTrialStartDate)
                                        .add(1, 'M')
                                        .format('DD/MM/YYYY')}
                                    onClick={route}
                                />
                                <TableData
                                    name={dayjs(x.startDate).format(
                                        'DD/MM/YYYY',
                                    )}
                                    onClick={route}
                                />
                                <TableState name={x?.status} />
                                <TableData
                                    name={x?.subscription?.name}
                                    onClick={route}
                                />
                                <TableData
                                    name={`${
                                        dayjs(
                                            dayjs(x?.freeTrialStartDate).add(
                                                1,
                                                'M',
                                            ),
                                        ).diff(dayjs(), 'days') <= 0
                                            ? 0
                                            : dayjs(
                                                  dayjs(
                                                      x?.freeTrialStartDate,
                                                  ).add(1, 'M'),
                                              ).diff(dayjs(), 'days')
                                    } days`}
                                    onClick={route}
                                />
                                <TableData
                                    name={
                                        x?.onFreeTrial
                                            ? 'Free trial in progress'
                                            : x?.isCanceled
                                            ? 'No'
                                            : 'Yes'
                                    }
                                    full
                                    onClick={route}
                                />
                            </Tr>
                        );
                    })}
                </>
            </Tables>
            <Box px="2rem">
                <Pagination data={data} />
            </Box>

            <AddClientModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};
