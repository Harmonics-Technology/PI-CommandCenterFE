import { Tr, useDisclosure } from '@chakra-ui/react';
import { AddAdminModal } from '@components/Modals/AddAdminModal';
import {
    TableData,
    TableStatus,
    TableActions,
} from '@components/bits-utils/TableData';
import { TableWrapper } from '@components/bits-utils/TableWrapper';
import Tables from '@components/bits-utils/Tables';
import { IAdminProps } from '@components/generics/Schema';
import dayjs from 'dayjs';
import React from 'react';
import { UserView } from 'src/services';

export const AdministratorsComponent = ({ data }: IAdminProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log({ data });
    return (
        <>
            <TableWrapper
                tableTitle="Users"
                buttonTitle="Add Administrator"
                onChange={() => void 0}
                options={['User']}
                openModal={onOpen}
                tables={
                    <Tables
                        tableHead={[
                            'User Name',
                            'Email',
                            'Phone Number',
                            'Date Created',
                            'Status',
                            'Actions',
                        ]}
                    >
                        <>
                            {data?.value?.map((x: UserView) => (
                                <Tr key={x.id}>
                                    <TableData name={x.fullName} />
                                    <TableData name={x.email} full />
                                    <TableData name={x.phoneNumber} />
                                    <TableData
                                        name={dayjs(x.dateCreated).format(
                                            'DD/MM/YYYY',
                                        )}
                                    />
                                    <TableStatus name={x.isActive} />
                                    <TableActions x={x} />
                                </Tr>
                            ))}
                        </>
                    </Tables>
                }
            />
            <AddAdminModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};
