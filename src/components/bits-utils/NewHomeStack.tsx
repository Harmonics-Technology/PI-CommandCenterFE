import { Button, HStack, VStack, Box, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { MiniText } from './MiniText';
// import Link from 'next/link';
import { ServiceItems } from './ServiceItems';

export const NewHomeStack = ({
    title,
    sub,
    btn,
    btnClick,
    btnText = 'Learn More',
    img,
    rtl,
    isMulti,
    multiSub,
}: {
    title?: string;
    sub?: any;
    btn?: boolean;
    btnClick?: any;
    btnText?: any;
    img?: any;
    rtl?: boolean;
    isMulti?: boolean;
    multiSub?: string;
}) => {
    return (
        <HStack
            gap={['53px', '1rem']}
            align="center"
            justify="space-between"
            flexDir={['column', 'row']}
        >
            <VStack align="flex-start" w={['100%', '45%']} order={rtl ? 1 : 0}>
                <MainTitle text={title} w="100%" align="left" mx="unset" />
                {isMulti ? (
                    <VStack
                        align="flex-start"
                        w="100%"
                        gap="1rem"
                        order={rtl ? 1 : 0}
                    >
                        <>
                            <MiniText text={multiSub} align="left" w="100%" />
                            {sub?.map((x: any, i: any) => (
                                <ServiceItems x={x} key={i} color={'black'} />
                            ))}
                        </>
                    </VStack>
                ) : (
                    <MiniText text={sub} align="left" w="100%" />
                )}
                {btn && (
                    <Link href={btnClick || ''}>
                        <Button
                            borderRadius="0.5rem"
                            bgColor="#0CA59D"
                            px=".84rem"
                            h="2.18rem"
                            color="white"
                            fontWeight={600}
                            fontSize=".875rem"
                        >
                            {btnText}
                        </Button>
                    </Link>
                )}
            </VStack>
            <Box w={['100%', rtl ? '55%' : '45%']} order={[1, rtl ? 0 : 1]}>
                <Image
                    w="90%"
                    m={['auto', rtl ? '0 auto 0 0' : '0 0 0 auto']}
                    h="auto"
                    src={img}
                />
            </Box>
        </HStack>
    );
};
