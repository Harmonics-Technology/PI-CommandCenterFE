import {
    Box,
    Button,
    Icon,
    List,
    ListIcon,
    ListItem,
    Text,
    VStack,
} from '@chakra-ui/react';
import { IPackageCardProps } from '@components/generics/Schema';
import { CAD } from '@components/generics/functions/Naira';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdCheck } from 'react-icons/md';

export const PackageCard = ({
    selected,
    id,
    name,
    desc,
    price,
    billed,
    recommended,
    features,
    updateSubscription,
    isEdit,
}: IPackageCardProps) => {
    return (
        <Box
            w="full"
            bgColor="white"
            borderRadius="12px"
            padding="2.5rem"
            border={selected ? '3px solid #375982' : '1px solid #CBD5E1'}
        >
            <Box>
                <Text color="black" fontSize="23px" fontWeight="800" mb="0">
                    {name}
                </Text>
                <Text
                    color="#465568"
                    fontSize="16px"
                    fontWeight="300"
                    noOfLines={2}
                >
                    {desc}
                </Text>
            </Box>
            <Box my="2rem">
                <Text color="black" fontSize="37px" fontWeight="800" mb="0">
                    {CAD(price)}
                </Text>
                <Text color="#465568" fontSize="16px" fontWeight="300" mb="0">
                    billed {billed}
                </Text>
            </Box>
            <Button
                bgColor={selected ? 'transparent' : '#375982'}
                color={selected ? '#375982' : 'white'}
                borderRadius="10px"
                border="3px solid #375982"
                h="56px"
                w="full"
                onClick={() => updateSubscription({ id, name, price })}
            >
                {selected ? (
                    'Selected'
                ) : isEdit ? (
                    <>
                        <Icon as={BsFillPencilFill} mr=".5rem" /> Edit
                    </>
                ) : (
                    'Select'
                )}
            </Button>

            <Box my="3rem" maxHeight="5rem" h="full">
                <Text
                    textTransform="uppercase"
                    color="#101729"
                    fontSize="13px"
                    fontWeight="600"
                >
                    Recommended for
                </Text>
                <Text color="#465568" fontSize="16px" fontWeight="300" mb="0">
                    {recommended}
                </Text>
            </Box>
            <Box borderTop="1px solid #CBD5E1">
                <VStack align="flex-start" pt="2rem">
                    <Text color="black" fontSize="16px" fontWeight="800">
                        Features Include:
                    </Text>
                    <List spacing="1rem">
                        {features?.map((x, i) => (
                            <ListItem fontWeight="300" color="black" key={i}>
                                <ListIcon
                                    as={MdCheck}
                                    color="white"
                                    bgColor="#375982"
                                    borderRadius="50%"
                                    w="1.3rem"
                                    h="1.3rem"
                                    p=".2rem"
                                />
                                {x}
                            </ListItem>
                        ))}
                    </List>
                </VStack>
            </Box>
        </Box>
    );
};
