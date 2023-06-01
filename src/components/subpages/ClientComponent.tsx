import { Tr, useDisclosure } from '@chakra-ui/react';
import { AddClientModal } from '@components/Modals/AddClientModal';
import {
    TableClientActions,
    TableData,
    TableStatus,
} from '@components/bits-utils/TableData';
import { TableWrapper } from '@components/bits-utils/TableWrapper';
import Tables from '@components/bits-utils/Tables';
import React from 'react';

export const ClientComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <TableWrapper
                tableTitle="Clients"
                buttonTitle="Add Client"
                onChange={() => void 0}
                options={['Client']}
                openModal={onOpen}
                tables={
                    <Tables
                        tableHead={[
                            'Client Name',
                            'Email',
                            'Current Subscription Type',
                            'Amount',
                            'Onboarding Date',
                            'Status',
                            'Actions',
                        ]}
                    >
                        <>
                            {/* {adminList?.data?.value?.map((x: UserView) => ( */}
                            <Tr>
                                <TableData name={'Proinsight Consulting'} />
                                <TableData name={'info@proinsight.com'} />
                                <TableData
                                    name={'Onshore + Leave & Shift Mangt '}
                                />
                                <TableData name={'$5,000'} />
                                <TableData name={'01/01/2023'} />
                                <TableStatus name={true} />
                                <TableClientActions id={'01'} />
                            </Tr>
                            <Tr>
                                <TableData name={'Proinsight Consulting'} />
                                <TableData name={'info@proinsight.com'} />
                                <TableData
                                    name={'Onshore + Leave & Shift Mangt '}
                                />
                                <TableData name={'$5,000'} />
                                <TableData name={'01/01/2023'} />
                                <TableStatus name={true} />
                                <TableClientActions id={'01'} />
                            </Tr>
                            {/* ))} */}
                        </>
                    </Tables>
                }
            />
            <AddClientModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};
