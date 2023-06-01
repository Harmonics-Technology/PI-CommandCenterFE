import {
    Flex,
    Box,
    Text,
    Image,
    HStack,
    Icon,
    Avatar,
    Divider,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Circle,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { UserContext } from '@components/context/UserContext';
import { useContext } from 'react';
import Items from '@components/menu-item';
import { BsSearch } from 'react-icons/bs';
import { BiPowerOff } from 'react-icons/bi';

function TopNav() {
    const router = useRouter();
    const { user } = useContext(UserContext);

    return (
        <Flex
            pos="sticky"
            top="0"
            zIndex="800"
            bgColor="white"
            h="80px"
            justify="center"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.04);"
        >
            <Flex justify="space-between" align="center" h="full" w="90%">
                {/* Logo */}
                <Flex w="auto" align="center" gap=".2rem">
                    <Image src="/assets/logo.png" h="2rem" />
                    <Text
                        fontWeight="bold"
                        mb="0"
                        fontSize="1.1rem"
                        fontFamily="Rubik"
                    >
                        ADMIN-TIMESHEET
                    </Text>
                </Flex>
                {/* Menu Items */}
                <HStack align="flex-start" gap="2rem">
                    <Items menuTitle="dashboard" />
                    <Items menuTitle="clients" />
                    <Items menuTitle="subscription" />
                    <Items menuTitle="financials" />
                    <Items menuTitle="manage-subscription" />
                    <Items menuTitle="administrators" />
                    <Icon as={BsSearch} />
                </HStack>
                {/* User Profile */}

                <Menu>
                    <MenuButton>
                        <HStack spacing="1rem">
                            <Divider
                                orientation="vertical"
                                bgColor="#C4C4C4"
                                h="60px"
                                w="1px"
                            />
                            <Avatar name="Ade Oji" src="" size="md" />
                            <Box>
                                <Text mb="0" fontWeight="700" fontSize="14px">
                                    Aderonke Akinyemi
                                </Text>
                                <Text
                                    mb="0"
                                    fontWeight="500"
                                    fontSize="11px"
                                    color="#90A0B7"
                                >
                                    a.aderonke@gmail.com
                                </Text>
                            </Box>
                        </HStack>
                    </MenuButton>
                    <MenuList p="0">
                        <MenuItem gap=".5rem" h="3rem" borderRadius="8px">
                            <Circle size="1.2rem" bgColor="#777777">
                                <Icon
                                    as={BiPowerOff}
                                    color="white"
                                    fontSize=".9rem"
                                />
                            </Circle>
                            <Text mb="0" color="#444444">
                                Logout
                            </Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
}

export default TopNav;
