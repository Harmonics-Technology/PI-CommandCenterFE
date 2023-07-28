import { Box } from '@chakra-ui/react';
import TopNav from '@components/topnav';
import { MainNav } from '@components/topnav/MainNav';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    const noNav =
        router.pathname.startsWith('/admin/login') ||
        router.pathname.startsWith('/admin/password') ||
        router.pathname.startsWith('/admin/forgot-password');
    const adminNav = router.pathname.startsWith('/admin') && !noNav;
    const admin = router.pathname.startsWith('/admin');

    return (
        <>
            <Box as="div" w="100%" mx="auto" bgColor="#ebeff2" minH="100vh">
                {adminNav ? <TopNav /> : !admin ? <MainNav /> : null}
                <Box
                    mt={!admin ? '0' : '1rem'}
                    w={noNav || !admin ? 'full' : '90%'}
                    mx="auto"
                >
                    {children}
                </Box>
                {!admin ? <Footer /> : null}
            </Box>
        </>
    );
};

export default Layout;
