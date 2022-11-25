import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TablesProps {
    tableHead: string[];
    children: ReactNode;
}

function Tables({ tableHead, children }: TablesProps) {
    return (
        <TableContainer maxH="500px" overflowY="hidden">
            <Table variant="striped" fontSize="11px">
                <Thead>
                    <Tr w="full" h="2rem" borderBottom="1px solid #f2f2f2">
                        {tableHead.map((x, i) => (
                            <Th
                                pl="1rem"
                                fontSize="12px"
                                color="brand.200"
                                fontWeight="600"
                                // textTransform="capitalize"
                                key={i}
                            >
                                {x}
                            </Th>
                        ))}
                    </Tr>
                </Thead>

                <Tbody>{children}</Tbody>
            </Table>
        </TableContainer>
    );
}

export default Tables;
