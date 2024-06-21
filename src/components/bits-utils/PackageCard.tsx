import {
    Box,
    Button,
    Flex,
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
    prices,
    billed,
    recommended,
    features,
    updateSubscription,
    isEdit,
    isDisabled,
    freeTrial,
    freeTrialDuration,
}: IPackageCardProps) => {
    return (
        <Box
            w="full"
            bgColor="white"
            borderRadius="12px"
            padding={['24px', '2.5rem']}
            border="3px solid #375982"
            // border={selected ? '3px solid #375982' : '1px solid #CBD5E1'}
        >
            <Box>
                {freeTrial && freeTrialDuration > 0 && (
                    <Box h="2rem" mb="1rem">
                        <Flex
                            w={['100%', '60%']}
                            justify="center"
                            align="center"
                            textTransform="uppercase"
                            color="#1B487D"
                            borderRadius="2.5rem"
                            fontSize=".56rem"
                            bgColor="brand.700"
                            fontFamily="Nunito"
                            fontWeight="800"
                            padding="0rem 1rem"
                            h="full"
                        >
                            <Text mb="0">
                                {freeTrialDuration || 0} Days free trial
                            </Text>
                        </Flex>
                    </Box>
                )}
                <Text color="black" fontSize="23px" fontWeight="800" mb="0">
                    {name}
                </Text>
                <Text
                    color="#465568"
                    fontSize="16px"
                    fontWeight="300"
                    // noOfLines={2}
                >
                    {desc}
                </Text>
            </Box>
            <Box my="2rem">
                <Text color="black" fontSize="37px" fontWeight="800" mb="0rem">
                    {CAD(billed == 'year' ? prices : price)}
                </Text>
                <Text color="#465568" fontSize="16px" fontWeight="300" mb="0">
                    billed per {billed}
                </Text>
            </Box>
            <Button
                bgColor={selected ? 'transparent' : '#375982'}
                color={selected ? '#375982' : 'white'}
                borderRadius="10px"
                border="3px solid #375982"
                h="56px"
                w="full"
                onClick={
                    isDisabled
                        ? void 0
                        : () =>
                              updateSubscription({
                                  id,
                                  name,
                                  price,
                                  prices,
                                  desc,
                                  billed,
                                  recommended,
                                  features,
                                  freeTrial,
                                  freeTrialDuration,
                              })
                }
            >
                {selected ? (
                    'Selected'
                ) : isEdit ? (
                    <>
                        <Icon as={BsFillPencilFill} mr=".5rem" /> Edit
                    </>
                ) : (
                    'Get Started'
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
