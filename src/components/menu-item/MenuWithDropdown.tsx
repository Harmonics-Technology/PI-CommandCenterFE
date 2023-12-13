import React from 'react';
import {
    Text,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Icon,
    Grid,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { RxCaretDown } from 'react-icons/rx';
import Link from 'next/link';

interface IMenuProps {
    menus: any;
    menuIcon?: any;
    menuTitle?: any;
    temp?: any;
    gap?: any;
    bd?: boolean;
}

export const MenuWithDropdown = ({
    menus,
    menuTitle,
    menuIcon = <RxCaretDown />,
    temp = '1fr',
    gap = '0',
    bd = true,
}: IMenuProps) => {
    const url = `/${menuTitle}`;
    const router = useRouter();
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={menuIcon}
                bgColor="transparent"
                color={router.pathname.startsWith(url) ? 'brand.400' : 'black'}
                _hover={{
                    bgColor: 'transparent',
                }}
                _active={{
                    bgColor: 'transparent',
                }}
                p="0"
            >
                <Text
                    color={
                        router.pathname.startsWith(url) ? 'brand.400' : 'black'
                    }
                    fontWeight="700"
                    fontSize=".9rem"
                    fontFamily="Nunito"
                    noOfLines={1}
                    mb="0"
                    textTransform="capitalize"
                >
                    {menuTitle.replaceAll('-', ' ')}
                </Text>
            </MenuButton>
            <MenuList
                borderRadius="8px"
                p={bd ? '0' : '.5rem 0'}
                cursor="pointer"
            >
                <Grid templateColumns={temp} w="full" gap={gap}>
                    {menus.map((x: any, i: any) => (
                        <MenuItem
                            borderBottom={bd ? '1px solid' : '0'}
                            borderColor="gray.300"
                            as="div"
                            display="flex"
                            gap=".5rem"
                            py=".6rem"
                            color={
                                router.pathname.startsWith(`${url}/${x.name}`)
                                    ? 'brand.400'
                                    : 'black'
                            }
                            // onClick={}
                            key={i}
                        >
                            {x.icon && <Icon as={x.icon} />}
                            <Link href={`${url}/${x.name}`} passHref>
                                <Text
                                    fontWeight="700"
                                    fontSize=".9rem"
                                    fontFamily="Nunito"
                                    noOfLines={1}
                                    mb="0"
                                    textTransform="capitalize"
                                >
                                    {x?.name?.replaceAll('-', ' ')}
                                </Text>
                            </Link>
                        </MenuItem>
                    ))}
                </Grid>
            </MenuList>
        </Menu>
    );
};
