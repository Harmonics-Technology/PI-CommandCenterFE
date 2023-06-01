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
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';

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
                <Text color="#465568" fontSize="16px" fontWeight="300">
                    {desc}
                </Text>
            </Box>
            <Box my="2rem">
                <Text color="black" fontSize="37px" fontWeight="800" mb="0">
                    {price}
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
                onClick={() => updateSubscription(id, name)}
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

            <Box my="3rem">
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
                        {features.map((x) => (
                            <ListItem fontWeight="300" color="black" key={x.id}>
                                <ListIcon as={MdCheckCircle} color="#375982" />
                                {x.name}
                            </ListItem>
                        ))}
                    </List>
                </VStack>
            </Box>
        </Box>
    );
};
