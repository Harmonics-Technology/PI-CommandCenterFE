import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    Text,
    Icon,
    DrawerBody,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function DrawerWrapper({
    children,
    isOpen,
    onClose,
    title,
}: {
    children: ReactNode;
    isOpen: any;
    onClose: any;
    title: string;
}) {
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                trapFocus={false}
            >
                <DrawerOverlay />
                <DrawerContent maxW={['100%', '40%']} px="1rem">
                    {/* <DrawerCloseButton /> */}
                    <DrawerHeader
                        // borderBottomWidth="1px"
                        mt="1rem"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Text mb="0">{title}</Text>
                        <Icon as={FaTimes} onClick={onClose} cursor="pointer" />
                    </DrawerHeader>
                    <DrawerBody>{children}</DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
