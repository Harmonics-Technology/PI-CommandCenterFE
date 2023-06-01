import {
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Box,
} from '@chakra-ui/react';
import router from 'next/router';
import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker, { DateObject } from 'react-multi-date-picker';

export const DateFilter = () => {
    const [fromDate, setFromDate] = useState<any>(new DateObject());
    const [toDate, setToDate] = useState<any>(new DateObject());
    function filterByDate() {
        router.push({
            query: {
                from: fromDate.format('YYYY-MM-DD'),
                to: toDate.format('YYYY-MM-DD'),
            },
        });
    }
    function clearfilter() {
        router.push({ query: { date: '' } });
    }
    return (
        <HStack spacing={['0', '.5rem']}>
            <HStack>
                <Text
                    mb="0"
                    fontSize=".8rem"
                    fontWeight="600"
                    display={['none', 'block']}
                >
                    From
                </Text>

                <Box marginInlineStart={['0 !important', '.5rem !important']}>
                    <DatePicker
                        value={fromDate}
                        onChange={setFromDate}
                        format="MMM DD, YYYY"
                        render={(value, openCalendar) => {
                            return (
                                <HStack
                                    w="fit-content"
                                    px="1rem"
                                    h="2.5rem"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    color="gray.500"
                                    boxShadow="sm"
                                    borderRadius="0"
                                    cursor="pointer"
                                    fontSize=".9rem"
                                    onClick={(value) => openCalendar(value)}
                                >
                                    <Text mb="0" whiteSpace="nowrap">
                                        {value}
                                    </Text>
                                    <Icon as={FaRegCalendarAlt} />
                                </HStack>
                            );
                        }}
                    />
                </Box>
            </HStack>
            <HStack>
                <Text
                    mb="0"
                    fontSize=".8rem"
                    fontWeight="600"
                    display={['none', 'block']}
                >
                    To
                </Text>
                <Text
                    mb="0"
                    fontSize=".8rem"
                    fontWeight="600"
                    display={['block', 'none']}
                >
                    -
                </Text>

                <DatePicker
                    value={toDate}
                    onChange={setToDate}
                    format="MMM DD, YYYY"
                    render={(value, openCalendar) => {
                        return (
                            <HStack
                                w="fit-content"
                                px="1rem"
                                h="2.5rem"
                                justifyContent="center"
                                alignItems="center"
                                border="1px solid"
                                borderColor="gray.300"
                                color="gray.500"
                                boxShadow="sm"
                                borderRadius="0"
                                cursor="pointer"
                                fontSize=".9rem"
                                onClick={openCalendar}
                            >
                                <Text mb="0" whiteSpace="nowrap">
                                    {value}
                                </Text>
                                <Icon as={FaRegCalendarAlt} />
                            </HStack>
                        );
                    }}
                />
            </HStack>
            <Menu>
                <MenuButton
                    ml=".5rem"
                    // bgColor="red"
                >
                    <Icon as={BsFilter} />
                </MenuButton>
                <MenuList fontSize=".8rem">
                    <MenuItem>
                        <Text
                            fontWeight="500"
                            color="brand.200"
                            mb="0"
                            onClick={filterByDate}
                        >
                            Apply filter
                        </Text>
                    </MenuItem>
                    <MenuItem>
                        <Text
                            fontWeight="500"
                            color="brand.200"
                            mb="0"
                            onClick={clearfilter}
                        >
                            Clear filter
                        </Text>
                    </MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};
