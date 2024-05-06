import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { AdminLogo } from '@components/bits-utils/AdminLogo';
import React from 'react';
import Items, { ExternalMenuItem } from '@components/menu-item';
import { useRouter } from 'next/router';
import { MenuWithDropdown } from '@components/menu-item/MenuWithDropdown';

export const MainNav = () => {
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
                w="85%"
                mx="auto"
                py="1rem"
            >
                <AdminLogo />
                <HStack align="center" gap="2rem">
                    <MenuWithDropdown
                        menuTitle="features"
                        temp="repeat(3,1fr)"
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
                    <HStack spacing="0" gap="1rem">
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
