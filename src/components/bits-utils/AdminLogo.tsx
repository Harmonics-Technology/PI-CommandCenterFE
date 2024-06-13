import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const AdminLogo = () => {
    const router = useRouter();
    return (
        <Flex
            w="auto"
            py=".5rem"
            align="center"
            gap=".2rem"
            cursor="pointer"
            onClick={() => router.push('/')}
        >
            <Image src="/assets/newlogo.png" h={['2.5rem', '3rem']} />
            {/* <Text fontWeight="bold" mb="0" fontSize="1.1rem" fontFamily="Rubik">
                ADMIN-TIMESHEET
            </Text> */}
        </Flex>
    );
};
