import {
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast,
    Link,
    Spinner,
    Th,
    Td,
    Tooltip,
    Icon,
    Text,
} from '@chakra-ui/react';
import axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaAppStore, FaEllipsisH, FaEye } from 'react-icons/fa';
import { RiInboxArchiveFill } from 'react-icons/ri';
import { InitiateResetModel, UserService, UserView } from 'src/services';
// import fileDownload from 'js-file-download';
import { UserContext } from '@components/context/UserContext';
import { BiTrash } from 'react-icons/bi';
import { MdVerified, MdCancel } from 'react-icons/md';
import { BsEye, BsEyeFill, BsPencil } from 'react-icons/bs';
import toast from 'react-hot-toast';

export function TableHead({
    name,
    border,
    value,
    borderColor,
}: {
    name: string | number | undefined | null;
    border?: boolean | undefined;
    value?: string;
    borderColor?: string;
}) {
    return (
        <Th
            borderRight={border ? value : 0}
            borderColor={borderColor}
            borderRightColor={borderColor}
            color="inherit"
        >
            {name}
        </Th>
    );
}

export function TableData({
    name,
    border,
    value,
    borderColor,
    classes,
    full,
    isRed,
}: {
    name: any;
    border?: boolean | undefined;
    value?: string;
    borderColor?: string;
    classes?: any;
    full?: boolean;
    isRed?: boolean;
}) {
    return (
        <Td
            borderColor={borderColor}
            borderRight={border ? value : 0}
            borderRightColor={borderColor}
            paddingInlineStart="1rem"
            className={classes}
            // maxW="120px"
            // textOverflow=""
            // overflow="hidden"
            // noOfLines={1}
            color={
                isRed ? '#FF5B79' : name == 'ONSHORE' ? 'brand.400' : 'black'
            }
        >
            <Tooltip label={name} hasArrow>
                {full ? name : name?.toString()?.substring(0, 20) || ''}
            </Tooltip>
        </Td>
    );
}
export function TableDataShiftDate({
    name,
    border,
    value,
    borderColor,
    classes,
    full,
    date,
}: {
    name: any;
    border?: boolean | undefined;
    value?: string;
    borderColor?: string;
    classes?: any;
    full?: boolean;
    date?: any;
}) {
    return (
        <Td
            borderColor={borderColor}
            borderRight={border ? value : 0}
            borderRightColor={borderColor}
            paddingInlineStart="1rem"
            className={classes}
            // maxW="120px"
            // textOverflow=""
            // overflow="hidden"
            // noOfLines={1}
            color={
                name == 'OFFSHORE'
                    ? 'brand.700'
                    : name == 'ONSHORE'
                    ? 'brand.400'
                    : 'black'
            }
        >
            <Tooltip label={name} hasArrow>
                {full ? name : name?.toString()?.substring(0, 20) || ''}
            </Tooltip>
            <Text fontSize="11px" color="#b8b9b9" mb="0" fontWeight="500">
                {date}
            </Text>
        </Td>
    );
}
export function TableStatus({ name }: { name: boolean | undefined }) {
    return (
        <td>
            <Box
                fontSize="10px"
                bgColor={name == true ? '#BFF1DF' : '#F9C3CD'}
                borderRadius="4px"
                color={name == true ? '#2EB67D' : '#E45771'}
                fontWeight="bold"
                padding=".2rem 1rem"
                width="fit-content"
                cursor="pointer"
                textTransform="uppercase"
            >
                {name == true ? 'Active' : 'Inactive'}
            </Box>
        </td>
    );
}
export function TableState({ name }: { name: string | undefined | null }) {
    return (
        <td>
            <Box
                fontSize="10px"
                bgColor={
                    name == 'ACTIVE' ||
                    name == 'APPROVED' ||
                    name == 'Completed'
                        ? 'brand.400'
                        : name == 'PENDING'
                        ? 'brand.700'
                        : name == 'REVIEWED' || name == 'SUBMITTED'
                        ? 'brand.600'
                        : name == 'INVOICED'
                        ? '#28a3ef'
                        : name == 'In progress'
                        ? 'gray.400'
                        : 'red'
                }
                borderRadius="4px"
                color="white"
                fontWeight="bold"
                padding=".2rem 1rem"
                width="fit-content"
                cursor="pointer"
                textTransform="uppercase"
            >
                {name || 'Inactive'}
            </Box>
        </td>
    );
}
export function TableContract({ url }: { url: any }) {
    // console.log({ url });
    const [loading, setLoading] = useState(false);
    const downloadFile = (url: string) => {
        setLoading(true);
        axios
            .get(url, {
                responseType: 'blob',
            })
            .then((res) => {
                // fileDownload(res.data, `${url.split(' ').pop()}`);
                setLoading(false);
            });
    };
    return (
        <td>
            <Box
                fontSize="1.4rem"
                fontWeight="bold"
                padding=".2rem 1rem"
                width="fit-content"
                cursor="pointer"
                onClick={() => downloadFile(url)}
            >
                {loading ? <Spinner size="sm" /> : <AiOutlineDownload />}
            </Box>
        </td>
    );
}
export function TableActions({ x }: { x: UserView }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const toggleUser = async (data: boolean) => {
        try {
            setLoading(true);
            const result = await UserService.activateOrDeactivateUser({
                userId: x.id,
                active: data,
            });
            if (result.status) {
                // console.log({ result });
                toast.success(result.message as string);
                setLoading(false);
                router.reload();
                return;
            }
            setLoading(false);
            toast.error(result.message as string);
        } catch (err: any) {
            toast.error(err?.message || err?.body?.message);
            setLoading(false);
        }
    };
    return (
        <td>
            <Menu>
                <MenuButton>
                    <Box
                        fontSize="1rem"
                        pl="1rem"
                        fontWeight="bold"
                        cursor="pointer"
                        color="brand.300"
                    >
                        {loading ? <Spinner size="sm" /> : <FaEllipsisH />}
                    </Box>
                </MenuButton>
                <MenuList w="full">
                    <MenuItem
                        onClick={() => router.push(`/administrators/${x.id}`)}
                        w="full"
                    >
                        <Icon as={BsPencil} mr=".5rem" color="#777777" />
                        Edit User
                    </MenuItem>
                    <MenuItem
                        onClick={() => (x.isActive ? void 0 : toggleUser(true))}
                        w="full"
                    >
                        <Icon as={MdVerified} mr=".5rem" color="#777777" />
                        Reactivate User
                    </MenuItem>
                    <MenuItem
                        onClick={() =>
                            x.isActive ? toggleUser(false) : void 0
                        }
                        w="full"
                    >
                        <Icon
                            as={RiInboxArchiveFill}
                            mr=".5rem"
                            color="#777777"
                        />
                        Deactivate User
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function TableClientActions({ id }: { id: any }) {
    const toast = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    return (
        <td>
            <Menu>
                <MenuButton>
                    <Box
                        fontSize="1rem"
                        pl="1rem"
                        fontWeight="bold"
                        cursor="pointer"
                        color="brand.300"
                    >
                        {loading ? <Spinner size="sm" /> : <FaEllipsisH />}
                    </Box>
                </MenuButton>
                <MenuList w="full">
                    <MenuItem
                        onClick={() => router.push(`/clients/${id}`)}
                        w="full"
                    >
                        <Icon as={BsEyeFill} mr=".5rem" color="#777777" />
                        View
                    </MenuItem>
                    {/* <MenuItem onClick={() => resendInvite(id)} w="full">
                        <Icon as={MdVerified} mr=".5rem" color="#777777" />
                        Reactivate subscription
                    </MenuItem>
                    <MenuItem onClick={() => resendInvite(id)} w="full">
                        <Icon
                            as={RiInboxArchiveFill}
                            mr=".5rem"
                            color="#777777"
                        />
                        Deactivate sub
                    </MenuItem> */}
                </MenuList>
            </Menu>
        </td>
    );
}
export function TableSubscriptionActions({
    x,
    openRenew,
    // openPayment,
    setData,
}: {
    x: any;
    openRenew: any;
    // openPayment: any;
    setData: any;
}) {
    const openRenewSub = () => {
        setData(x);
        openRenew();
    };
    const upgradeSub = () => {
        setData(x);
        // openPayment();
    };
    return (
        <td>
            <Menu>
                <MenuButton>
                    <Box
                        fontSize="1rem"
                        pl="1rem"
                        fontWeight="bold"
                        cursor="pointer"
                        color="brand.300"
                    >
                        <FaEllipsisH />
                    </Box>
                </MenuButton>
                <MenuList w="full">
                    <MenuItem onClick={openRenewSub} w="full">
                        <Icon as={MdVerified} mr=".5rem" color="#777777" />
                        Renew Subscription
                    </MenuItem>
                    <MenuItem onClick={upgradeSub} w="full">
                        <Icon
                            as={RiInboxArchiveFill}
                            mr=".5rem"
                            color="#777777"
                        />
                        Upgrade Subscription
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
