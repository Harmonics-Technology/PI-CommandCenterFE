import { Tr, useDisclosure } from '@chakra-ui/react';
import { AddAdminModal } from '@components/Modals/AddAdminModal';
import {
    TableActions,
    TableData,
    TableStatus,
} from '@components/bits-utils/TableData';
import { TableWrapper } from '@components/bits-utils/TableWrapper';
import Tables from '@components/bits-utils/Tables';
import React from 'react';

export const AdministratorsComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                            {/* {adminList?.data?.value?.map((x: UserView) => ( */}
                            <Tr>
                                <TableData name={'Busayo Moses'} />
                                <TableData name={'busayo.moses@sample.com'} />
                                <TableData name={'+1-674-6788-690'} />
                                <TableData name={'01/01/2023'} />
                                <TableStatus name={true} />
                                <TableActions id={'01'} />
                            </Tr>
                            <Tr>
                                <TableData name={'Busayo Moses'} />
                                <TableData name={'busayo.moses@sample.com'} />
                                <TableData name={'+1-674-6788-690'} />
                                <TableData name={'01/01/2023'} />
                                <TableStatus name={true} />
                                <TableActions id={'01'} />
                            </Tr>
                            {/* ))} */}
                        </>
                    </Tables>
                }
            />
            <AddAdminModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};
