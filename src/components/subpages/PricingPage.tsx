import {
    Box,
    Flex,
    VStack,
    Text,
    HStack,
    Switch,
    Grid,
    Button,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { PackageCard } from '@components/bits-utils/PackageCard';
import { ISubscriptionProps } from '@components/generics/Schema';
import { useRouter } from 'next/router';
import { SubscriptionView } from 'src/services';
import Cookies from 'js-cookie';
import { BottomHero } from '@components/bits-utils/Heros/BottomHero';

export const PricingPage = ({ base }: ISubscriptionProps) => {
    const [billing, setBilling] = useState('month');
    const [subList, setSubList] = useState<any>([]);
    const router = useRouter();
    console.log({ subList });

    const btn = useRef<any>(null);

    const updateSubscription = (base) => {
        const exists = subList.find((x) => x.id == base?.id);
        if (exists) {
            setSubList(subList.filter((x) => x.id !== base?.id));
            return;
        }
        setSubList([base]);
        btn.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const changePackagetype = () => {
        setBilling(billing == 'month' ? 'year' : 'month');
        setSubList([]);
    };

    const showSignUp = () => {
        Cookies.set('selectedPackage', JSON.stringify(subList[0]));
        router.push(`/sign-up?package=${subList[0].id}`);
    };

    return (
        <Box bgColor="white" pb="5rem">
            <Flex
                w="full"
                bgImage="url('/assets/pricing.png')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                align="center"
                justify="center"
                h="40vh"
                bgColor="brand.100"
            >
                <VStack align="center" spacing=".5rem" w="45%">
                    <Text
                        fontSize="3.125rem"
                        color="white"
                        fontWeight="800"
                        fontFamily="Nunito"
                        mb="0"
                        lineHeight="normal"
                        textAlign="center"
                    >
                        Pricing Plans
                    </Text>
                    <Text
                        fontSize="0.875rem"
                        color="white"
                        fontWeight="600"
                        fontFamily="Nunito"
                        mb="0"
                        textAlign="center"
                    >
                        Lorem ipsum dolor sit amet cultricies egestas commodo
                        enim enim amet.
                    </Text>
                </VStack>
            </Flex>
            <Box w="70%" mx="auto">
                <HStack justify="center" my="5rem">
                    <HStack>
                        <Text
                            mb="0"
                            color={billing == 'month' ? 'black' : '#6f7f95'}
                            fontWeight={billing == 'month' ? '500' : '300'}
                        >
                            Monthly Billing
                        </Text>
                    </HStack>
                    <Switch
                        onChange={() => changePackagetype()}
                        isChecked={billing == 'year'}
                    />
                    <HStack>
                        <Text
                            mb="0"
                            color={billing == 'year' ? 'black' : '#6f7f95'}
                            fontWeight={billing == 'year' ? '500' : '300'}
                        >
                            Annual Billing
                        </Text>
                        <Box
                            bgColor="#CDF9D3"
                            color="#0C7A52"
                            borderRadius="4px"
                            fontSize=".8rem"
                            p=".2rem .5rem"
                        >
                            Up to 25% OFF
                        </Box>
                    </HStack>
                </HStack>
                <Grid templateColumns={['repeat(3, 1fr)']} gap=".5rem" w="full">
                    {base?.map((x: SubscriptionView) => (
                        <PackageCard
                            id={x.id}
                            key={x.id}
                            name={x.name}
                            selected={
                                subList.find(
                                    (a) => a.id == x.id,
                                ) as unknown as boolean
                            }
                            desc={x.description}
                            prices={x.yearlyAmount}
                            price={x.monthlyAmount}
                            billed={billing == 'year' ? 'year' : 'month'}
                            recommended={x.recommendedFor}
                            features={x.features?.split(',').map((b) => b)}
                            updateSubscription={updateSubscription}
                        />
                    ))}
                </Grid>
                <Box ref={btn} pt="7rem" />
                {subList.length > 0 && (
                    <Flex w="full" justify="center">
                        <Button
                            bgColor="brand.400"
                            color="white"
                            w="30%"
                            borderRadius="5px"
                            h="3rem"
                            mb="3rem"
                            onClick={showSignUp}
                        >
                            Save and Continue
                        </Button>
                    </Flex>
                )}
            </Box>
            <BottomHero
                title="Simple Time Tracking System
For Your Employees"
            />
        </Box>
    );
};
