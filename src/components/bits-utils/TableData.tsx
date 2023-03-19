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
} from '@chakra-ui/react';
import axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaEllipsisH, FaEye } from 'react-icons/fa';
import {
    ExpenseView,
    FinancialService,
    InitiateResetModel,
    InvoiceView,
    SettingsService,
    UserService,
} from 'src/services';
import fileDownload from 'js-file-download';
import { UserContext } from '@components/context/UserContext';

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
}: {
    name: any;
    border?: boolean | undefined;
    value?: string;
    borderColor?: string;
    classes?: any;
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
                {name?.toString()?.substring(0, 20) || ''}
            </Tooltip>
        </Td>
    );
}
export function TableStatus({ name }: { name: boolean | undefined }) {
    return (
        <td>
            <Box
                fontSize="10px"
                bgColor={name == true ? 'brand.400' : 'red'}
                borderRadius="4px"
                color="white"
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
                    name == 'ACTIVE' || name == 'APPROVED'
                        ? 'brand.400'
                        : name == 'PENDING'
                        ? 'brand.700'
                        : name == 'REVIEWED' || name == 'SUBMITTED'
                        ? 'brand.600'
                        : name == 'INVOICED'
                        ? '#28a3ef'
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
                fileDownload(res.data, `${url.split(' ').pop()}`);
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
export function TableActions({
    id,
    route,
    email,
}: {
    id: any;
    route: string;
    email: any;
}) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const resendInvite = async (data: InitiateResetModel) => {
        // console.log(data.email);
        try {
            setLoading(true);
            const result = await UserService.resendInvite(data);
            if (result.status) {
                // console.log({ result });
                toast({
                    title: 'Invite Sent',
                    status: 'success',
                    isClosable: true,
                    position: 'top-right',
                });
                setLoading(false);
                return;
            }
            setLoading(false);
            toast({
                title: result.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
        } catch (err: any) {
            setLoading(false);
            toast({
                title: err?.body?.message || err.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
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
                    <MenuItem onClick={() => resendInvite({ email })} w="full">
                        Resend Invite
                    </MenuItem>
                    <MenuItem w="full">
                        <NextLink href={`${route}/${id}`} passHref>
                            <Link width="100%" textDecor="none !important">
                                View Profile
                            </Link>
                        </NextLink>
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function TableContractOptions({
    id,
    extend,
    modify,
    clicked,
    data,
}: {
    id: any;
    extend?: any;
    modify?: any;
    clicked?: any;
    data: any;
}) {
    const setExtend = (data: any) => {
        clicked(data);
        extend(true);
    };
    const setModify = (data: any) => {
        clicked(data);
        modify(true);
    };
    const terminate = (data: any) => {
        clicked(data);
        id();
    };

    return (
        <td>
            <Menu>
                <MenuButton type="button">
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
                    <MenuItem onClick={() => setExtend(data)} w="full">
                        Extend
                    </MenuItem>
                    <MenuItem onClick={() => setModify(data)} w="full">
                        Modify
                    </MenuItem>
                    <MenuItem onClick={() => terminate(data)} w="full">
                        Terminate
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function TableContractAction({
    id,
    timeSheets,
    supervisor,
    date,
    team,
}: {
    id: any;
    timeSheets?: boolean;
    supervisor?: boolean;
    date?: any;
    team?: boolean;
}) {
    const { user } = useContext(UserContext);
    const role = user?.role.replaceAll(' ', '');
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
                <MenuList>
                    <MenuItem>
                        {timeSheets === true ? (
                            <NextLink
                                href={
                                    date !== undefined
                                        ? `/${role}/timesheets/${id}?date=${date}`
                                        : `/${role}/timesheets/${id}`
                                }
                                passHref
                            >
                                <Link width="100%" textDecor="none !important">
                                    View Timesheet
                                </Link>
                            </NextLink>
                        ) : supervisor === true ? (
                            <NextLink
                                href={`/Supervisor/timesheets/${id}`}
                                passHref
                            >
                                <Link width="100%" textDecor="none !important">
                                    View Timesheet
                                </Link>
                            </NextLink>
                        ) : team === true ? (
                            <NextLink
                                href={
                                    date !== undefined
                                        ? `/${role}/timesheets/my-timesheet?date=${date}`
                                        : `/${role}/timesheets/my-timesheet`
                                }
                                passHref
                            >
                                <Link width="100%" textDecor="none !important">
                                    View Timesheet
                                </Link>
                            </NextLink>
                        ) : (
                            <NextLink
                                href={`/${role}/profile-management/team-members/${id}`}
                                passHref
                            >
                                <Link width="100%" textDecor="none !important">
                                    View Profile
                                </Link>
                            </NextLink>
                        )}
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function ToggleStatus({ id, status }: { id: any; status: string }) {
    const toast = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const toggleStatus = async (data: string) => {
        // console.log(data.email);
        try {
            setLoading(true);
            const result = await SettingsService.toggleStatus(data);
            if (result.status) {
                console.log({ result });
                toast({
                    title: result.message,
                    status: 'success',
                    isClosable: true,
                    position: 'top-right',
                });
                setLoading(false);
                router.reload();
                return;
            }
            setLoading(false);
            toast({
                title: result.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
        } catch (error: any) {
            setLoading(false);
            console.log({ error });
            toast({
                title: error?.body?.message || error?.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
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
                    <MenuItem onClick={() => toggleStatus(id)} w="full">
                        {status == 'ACTIVE' ? 'Deactivate' : 'Activate'}
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}

export function ExpenseActions({
    id,
    manager = false,
}: {
    id: ExpenseView;
    manager?: boolean;
}) {
    const toast = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const Approve = async (data: string) => {
        try {
            setLoading(true);
            if (manager) {
                const result = await FinancialService.approveExpense(data);
                if (result.status) {
                    console.log({ result });
                    toast({
                        title: result.message,
                        status: 'success',
                        isClosable: true,
                        position: 'top-right',
                    });
                    setLoading(false);
                    router.reload();
                    return;
                }
                setLoading(false);
                toast({
                    title: result.message,
                    status: 'error',
                    isClosable: true,
                    position: 'top-right',
                });
            } else {
                const result = await FinancialService.reviewExpense(data);
                if (result.status) {
                    console.log({ result });
                    toast({
                        title: result.message,
                        status: 'success',
                        isClosable: true,
                        position: 'top-right',
                    });
                    setLoading(false);
                    router.reload();
                    return;
                }
                setLoading(false);
                toast({
                    title: result.message,
                    status: 'error',
                    isClosable: true,
                    position: 'top-right',
                });
            }
        } catch (error: any) {
            console.log({ error });
            setLoading(false);
            toast({
                title: error.body.message || error.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
        }
    };
    const Decline = async (data: string) => {
        try {
            setLoading(true);
            const result = await FinancialService.declineExpense(data);
            if (result.status) {
                console.log({ result });
                toast({
                    title: result.message,
                    status: 'success',
                    isClosable: true,
                    position: 'top-right',
                });
                setLoading(false);
                router.reload();
                return;
            }
            setLoading(false);
            toast({
                title: result.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
        } catch (err: any) {
            setLoading(false);
            console.log({ err });
            toast({
                title: err.body.message || err?.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
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
                    {(manager && id.status !== 'APPROVED') ||
                        (id.status === 'PENDING' && (
                            <MenuItem
                                onClick={() => Approve(id.id as string)}
                                w="full"
                            >
                                {manager ? 'Approve' : 'Review'}
                            </MenuItem>
                        ))}
                    <MenuItem onClick={() => Decline(id.id as string)} w="full">
                        Reject
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function PayrollActions({ id, userId }: { id: any; userId: any }) {
    const toast = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    // const Approve = async (data: string) => {
    //     try {
    //         setLoading(true);
    //         const result = await FinancialService.approvePayroll(data);
    //         if (result.status) {
    //             console.log({ result });
    //             toast({
    //                 title: result.message,
    //                 status: 'success',
    //                 isClosable: true,
    //                 position: 'top-right',
    //             });
    //             setLoading(false);
    //             router.reload();
    //             return;
    //         }
    //         setLoading(false);
    //         toast({
    //             title: result.message,
    //             status: 'error',
    //             isClosable: true,
    //             position: 'top-right',
    //         });
    //     } catch (error: any) {
    //         console.log({ error });
    //         setLoading(false);
    //         toast({
    //             title: error.body.message || error.message,
    //             status: 'error',
    //             isClosable: true,
    //             position: 'top-right',
    //         });
    //     }
    // };
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
                    {/* <MenuItem  onClick={() => Approve(id)} w="full">
                        Approve
                    </MenuItem> */}
                    <MenuItem w="full">
                        <NextLink
                            href={`/PayrollManager/timesheets/${userId}`}
                            passHref
                        >
                            <Link width="100%" textDecor="none !important">
                                View Timesheet
                            </Link>
                        </NextLink>
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function InvoiceAction({
    clicked,
    data,
    onOpen,
}: {
    clicked?: any;
    data: any;
    onOpen?: any;
}) {
    const showInvoice = (data: any) => {
        onOpen();
        clicked(data);
    };

    return (
        <td>
            <Box
                onClick={() => showInvoice(data)}
                fontSize="1rem"
                cursor="pointer"
            >
                <FaEye />
            </Box>
        </td>
    );
}
export function TableInvoiceActions({ id, x }: { id: any; x: InvoiceView }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const approveInvoiceItems = async () => {
        try {
            setLoading(true);
            const result = await FinancialService.treatSubmittedInvoice(id);
            if (result.status) {
                console.log({ result });
                toast({
                    title: result.message,
                    status: 'success',
                    isClosable: true,
                    position: 'top-right',
                });
                setLoading(false);
                router.reload();
                return;
            }
            setLoading(false);
            toast({
                title: result.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
        } catch (error: any) {
            console.log({ error });
            setLoading(false);
            toast({
                title: error.body.message || error.message,
                status: 'error',
                isClosable: true,
                position: 'top-right',
            });
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
                        onClick={
                            x?.status == 'APPROVED'
                                ? () => void 0
                                : () => approveInvoiceItems()
                        }
                        w="full"
                    >
                        Treat item
                    </MenuItem>
                    {/* <MenuItem w="full">
                        <NextLink href={`${route}/${id}`} passHref>
                            <Link width="100%" textDecor="none !important">
                                View Profile
                            </Link>
                        </NextLink>
                    </MenuItem> */}
                </MenuList>
            </Menu>
        </td>
    );
}
