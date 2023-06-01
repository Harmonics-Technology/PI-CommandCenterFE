import {
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    Text,
    Icon,
    Flex,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import TableNoContentWrapper from './TableNoContentWrapper';
import { BsFillInfoCircleFill } from 'react-icons/bs';

interface TablesProps {
    tableHead: string[];
    children: ReactNode;
}

function Tables({ tableHead, children }: TablesProps) {
    console.log({ children });
    return (
        <TableContainer h="auto">
            <Table variant="striped" fontSize="11px">
                <Thead>
                    <Tr w="full" h="48px" bgColor="brand.400">
                        {tableHead.map((x, i) => (
                            <Th
                                pl="1rem"
                                fontSize="15px"
                                color="#ebeff2"
                                fontWeight="700"
                                textTransform="capitalize"
                                key={i}
                            >
                                {x}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>{children}</Tbody>
                {/* {
                    //@ts-ignore
                    children?.props?.children?.length > 0 ||
                    //@ts-ignore
                    children[0]?.props?.children?.length > 0 ? (
                        <Tbody>{children}</Tbody>
                    ) : (
                        <TableNoContentWrapper
                            elements={
                                <Flex
                                    align="center"
                                    fontSize=".9rem"
                                    gap=".5rem"
                                >
                                    <Icon as={BsFillInfoCircleFill} />
                                    <Text mb="0">
                                        There's currently no data available.
                                        Check back later
                                    </Text>
                                </Flex>
                            }
                        />
                    )
                } */}
            </Table>
        </TableContainer>
    );
}

export default Tables;
