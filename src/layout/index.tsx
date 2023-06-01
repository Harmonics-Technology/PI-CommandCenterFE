import { Box } from '@chakra-ui/react';
import TopNav from '@components/topnav';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    const noNav =
        router.pathname.startsWith('/login') ||
        router.pathname.startsWith('/password') ||
        router.pathname.startsWith('/forgot-password');

    return (
        <>
            <Box as="div" w="100%" mx="auto" bgColor="#ebeff2" minH="100vh">
                {!noNav && <TopNav />}
                <Box mt="1rem" w={noNav ? 'full' : '90%'} mx="auto">
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default Layout;
