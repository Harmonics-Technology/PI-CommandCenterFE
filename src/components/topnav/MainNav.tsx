import { Box, Button, Flex, HStack, Icon } from '@chakra-ui/react';
import { AdminLogo } from '@components/bits-utils/AdminLogo';
import React, { useState } from 'react';
import Items, { ExternalMenuItem } from '@components/menu-item';
import { useRouter } from 'next/router';
import { MenuWithDropdown } from '@components/menu-item/MenuWithDropdown';
import { MdMenu } from 'react-icons/md';
import { LiaTimesSolid } from 'react-icons/lia';

export const MainNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    return (
        <Box
            bgColor="white"
            w="full"
            pos="sticky"
            top="0"
            boxShadow="md"
            zIndex="800"
        >
            <Flex
                justify="space-between"
                align="center"
                bgColor="white"
                w={['90%', '85%']}
                mx="auto"
                py="1rem"
            >
                <AdminLogo />
                <Box display={['block', 'none']}>
                    <Icon
                        as={showMenu ? LiaTimesSolid : MdMenu}
                        onClick={() => setShowMenu((prev) => !prev)}
                        fontSize="2rem"
                    />
                </Box>
                <HStack
                    align={['flex-start', 'center']}
                    gap="2rem"
                    flexDir={['column', 'row']}
                    bgColor="white"
                    p={['1rem', '0']}
                    pos={['absolute', 'unset']}
                    top={['100%', '0']}
                    right={[showMenu ? '0%' : '-100%', '0']}
                    w={['60%', 'unset']}
                    transition=".4s all ease-in-out"
                    h={['100vh', 'auto']}
                >
                    <MenuWithDropdown
                        menuTitle="features"
                        temp={['1fr', 'repeat(3,1fr)']}
                        bd={false}
                        gap=".5rem 3rem"
                        menus={[
                            {
                                name: 'project-management',
                            },
                            {
                                name: 'contract-management',
                            },
                            {
                                name: 'leave-management',
                            },
                            {
                                name: 'employee-management',
                            },
                            {
                                name: 'payment-partner',
                            },
                            {
                                name: 'shift-management',
                            },
                            {
                                name: 'automated-timesheet',
                            },
                            {
                                name: 'robust-report',
                            },
                            {
                                name: 'client-onboarding',
                            },
                        ]}
                    />
                    <MenuWithDropdown
                        menuTitle="solutions"
                        menus={[
                            {
                                name: 'sub-contractors',
                            },
                            {
                                name: 'human-resource-managers',
                            },
                            {
                                name: 'entrepreneurs',
                            },
                            {
                                name: 'recruiters',
                            },
                        ]}
                    />
                    <Items menuTitle="pricing" />
                    <ExternalMenuItem
                        url="https://blog.timba.ca"
                        title="Blog"
                    />
                    <Items menuTitle="book-a-demo" />
                    {/* <Items menuTitle="contact-us" /> */}
                    <HStack
                        spacing="0"
                        gap="1rem"
                        align={['flex-start', 'center']}
                        flexDir={['column', 'row']}
                    >
                        <Button
                            variant="outline"
                            borderRadius="8px"
                            color="brand.400"
                            border="2px solid"
                            borderColor="brand.400"
                            px="2rem"
                            h="3rem"
                            onClick={() =>
                                (window.location.href = process.env
                                    .NEXT_PUBLIC_TTS as string)
                            }
                        >
                            Login
                        </Button>
                        <Button
                            borderRadius="8px"
                            color="white"
                            bgColor="brand.400"
                            px="2rem"
                            h="3rem"
                            onClick={() => router.push('/pricing')}
                        >
                            Sign up
                        </Button>
                    </HStack>
                </HStack>
            </Flex>
        </Box>
    );
};
