import { Box, HStack, Stack, Text, Tr } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TableData, TableStatus } from "./TableData";
import Tables from "./Tables";

interface TableCardsProps {
    title: string;
    url: string;
}
function TableCards({ title, url }: TableCardsProps) {
    return (
        <Box
            bgColor="white"
            borderRadius="15px"
            padding="1.5rem"
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
            <Text
                fontWeight="600"
                fontSize="1rem"
                opacity=".8"
                mb="1rem"
                textTransform="capitalize"
                fontFamily="Open Sans"
                color="brand.200"
            >
                {title}
            </Text>
            <Tables tableHead={["CLIENT NAME", "EMAIL", "STATUS"]}>
                <Link href={"/admin/rent/applications/"} key={1}>
                    <>
                        <Tr>
                            <TableData name={"Olade"} />
                            <TableData name={"dotunbrown@gmail.com"} />
                            <TableStatus name={"ACTIVE"} />
                        </Tr>
                        <Tr>
                            <TableData name={"Olade"} />
                            <TableData name={"dotunbrown@gmail.com"} />
                            <TableStatus name={"ACTIVE"} />
                        </Tr>
                        <Tr>
                            <TableData name={"Olade"} />
                            <TableData name={"dotunbrown@gmail.com"} />
                            <TableStatus name={"ACTIVE"} />
                        </Tr>
                    </>
                </Link>
            </Tables>
            <Stack direction="column" align="flex-end" mt="1rem">
                <Link passHref href={url}>
                    <HStack
                        align="center"
                        color="brand.600"
                        fontSize=".7rem"
                        fontWeight="bold"
                        cursor="pointer"
                    >
                        <Text mb="0">View more</Text>
                        <FaArrowRight />
                    </HStack>
                </Link>
            </Stack>
        </Box>
    );
}

export default TableCards;
