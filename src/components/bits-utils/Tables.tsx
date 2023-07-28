import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TablesProps {
    tableHead: string[];
    children: ReactNode;
    bg?: string;
    color?: string;
    variant?: string;
}

function Tables({
    tableHead,
    children,
    bg = 'brand.400',
    color = 'brand.200',
    variant = 'striped',
}: TablesProps) {
    // console.log({ children });
    return (
        <TableContainer h="auto">
            <Table variant={variant} fontSize="11px">
                <Thead>
                    <Tr w="full" h="48px" bg={bg}>
                        {tableHead.map((x, i) => (
                            <Th
                                pl="2rem"
                                fontSize="15px"
                                color={bg ? 'white' : color}
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
