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
import { ISubHistory } from '@components/generics/Schema';
import { CAD } from '@components/generics/functions/Naira';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ClientSubscriptionView } from 'src/services';

export const SubscriptionHistory = ({ data }: ISubHistory) => {
    console.log({ data });
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [subData, setSubData] = useState();
    return (
        <>
            <TableWrapper
                tableTitle="Subscription History"
                buttonTitle="Add Subscription"
                onChange={() => void 0}
                options={['Client']}
                openModal={() => router.push('/command-center/subscription')}
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
                            {data?.value?.map((x: ClientSubscriptionView) => (
                                <Tr key={x.id}>
                                    <TableData name={x.client?.companyName} />
                                    <TableData
                                        name={`${x.subscription?.name}`}
                                    />
                                    <TableData
                                        name={dayjs(x.startDate).format(
                                            'DD/MM/YYYY',
                                        )}
                                    />
                                    <TableData
                                        name={dayjs(x.endDate).format(
                                            'DD/MM/YYYY',
                                        )}
                                    />
                                    <TableData name={`${x.duration} Months`} />
                                    <TableData name={CAD(x.totalAmount)} />
                                    <TableStatus
                                        name={
                                            x.status == 'ACTIVE' ? true : false
                                        }
                                    />
                                    <TableSubscriptionActions
                                        openRenew={onOpen}
                                        setData={setSubData}
                                        x={x}
                                    />
                                </Tr>
                            ))}
                            {/* <RenewSubscription
                                isOpen={isOpen}
                                onClose={onClose}
                                data={subData}
                            /> */}
                        </>
                    </Tables>
                }
            />
        </>
    );
};
