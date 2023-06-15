import { Tr, useDisclosure } from '@chakra-ui/react';
import { AddClientModal } from '@components/Modals/AddClientModal';
import {
    TableClientActions,
    TableData,
    TableStatus,
} from '@components/bits-utils/TableData';
import { TableWrapper } from '@components/bits-utils/TableWrapper';
import Tables from '@components/bits-utils/Tables';
import { IClientProps } from '@components/generics/Schema';
import React from 'react';
import { ClientView } from 'src/services';
import dayjs from 'dayjs';

export const ClientComponent = ({ data }: IClientProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log({ data });
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
                            // 'Current Subscription Type',
                            // 'Amount',
                            'Onboarding Date',
                            'Status',
                            'Actions',
                        ]}
                    >
                        <>
                            {data?.value?.map((x: ClientView) => (
                                <Tr key={x.id}>
                                    <TableData name={x.companyName} />
                                    <TableData name={x.companyEmail} full />
                                    {/* <TableData name={x.subscription?.name} /> */}
                                    {/* <TableData
                                        name={CAD(
                                            x.subscription?.monthlyAmount,
                                        )}
                                    /> */}
                                    <TableData
                                        name={dayjs(x.dateCreated).format(
                                            'DD/MM/YYYY',
                                        )}
                                    />
                                    <TableStatus
                                        name={
                                            x.subscriptionStatus == 'ACTIVE'
                                                ? true
                                                : false
                                        }
                                    />
                                    <TableClientActions id={x.id} />
                                </Tr>
                            ))}
                        </>
                    </Tables>
                }
            />
            <AddClientModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};
