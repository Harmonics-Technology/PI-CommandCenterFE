import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    Select,
    Text,
} from '@chakra-ui/react';
import { ITableWrapperProps } from '@components/generics/Schema';
import { useRouter } from 'next/router';
import React from 'react';

import { HiOutlineFilter } from 'react-icons/hi';
import { SearchComponent } from './SearchComponent';
import Pagination from './Pagination';

export const TableWrapper = ({
    tableTitle,
    buttonTitle,
    onChange,
    options,
    tables,
    openModal,
    data,
}: ITableWrapperProps) => {
    const router = useRouter();

    return (
        <Box pb="2rem">
            <Box
                w="full"
                bgColor="white"
                borderRadius="10px"
                p="1rem"
                minH="80vh"
            >
                <Text fontWeight="800" color="#1b1d21">
                    {tableTitle}
                </Text>
                <Box
                    w="full"
                    borderY="1px solid"
                    borderColor="#e0e0e0"
                    py="1rem"
                >
                    <Button
                        bgColor="brand.400"
                        fontSize="13px"
                        borderRadius="5px"
                        color="white"
                        px="1rem"
                        onClick={openModal}
                    >
                        {buttonTitle}
                    </Button>
                </Box>
                <Flex justify="space-between" py=".8rem">
                    <HStack>
                        <HStack>
                            <Icon as={HiOutlineFilter} />
                            <Text>Filter</Text>
                        </HStack>
                        <Select
                            w="200px"
                            onChange={onChange}
                            borderRadius="0"
                            fontSize=".8rem"
                        >
                            {options?.map((x) => (
                                <option key={x} value={x}>
                                    {x}
                                </option>
                            ))}
                        </Select>
                    </HStack>
                    <SearchComponent />
                </Flex>
                {tables}
                <Box px="2rem">
                    <Pagination data={data} />
                </Box>
            </Box>
        </Box>
    );
};
