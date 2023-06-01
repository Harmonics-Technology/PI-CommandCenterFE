import { Tr, useDisclosure } from '@chakra-ui/react';
import { AddClientModal } from '@components/Modals/AddClientModal';
import { RenewSubscription } from '@components/Modals/RenewSubscription';
import {
    TableClientActions,
    TableData,
    TableStatus,
    TableSubscriptionActions,
} from '@components/bits-utils/TableData';
import { TableWrapper } from '@components/bits-utils/TableWrapper';
import Tables from '@components/bits-utils/Tables';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const SubscriptionHistory = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState();
    return (
        <>
            <TableWrapper
                tableTitle="Subscription History"
                buttonTitle="Add Subscription"
                onChange={() => void 0}
                options={['Client']}
                openModal={() => router.push('/subscription')}
                tables={
                    <Tables
                        tableHead={[
                            'Client Name',
                            'Subscription Type',
                            'Start Date',
                            'End Date',
                            'Duration',
                            'Amount',
                            'Status',
                            'Actions',
                        ]}
                    >
                        <>
                            {/* {adminList?.data?.value?.map((x: UserView) => ( */}
                            <Tr>
                                <TableData name={'Proinsight Consulting'} />
                                <TableData
                                    name={'Onshore + Leave & Shift Mangt '}
                                />
                                <TableData name={'01/01/2023'} />
                                <TableData name={'01/01/2023'} />
                                <TableData name={'12 months'} />
                                <TableData name={'$5,000'} />
                                <TableStatus name={true} />
                                <TableSubscriptionActions
                                    openRenew={onOpen}
                                    setData={setData}
                                    x={'any'}
                                />
                            </Tr>

                            {/* ))} */}
                            <RenewSubscription
                                isOpen={isOpen}
                                onClose={onClose}
                                data={data}
                            />
                        </>
                    </Tables>
                }
            />
        </>
    );
};
