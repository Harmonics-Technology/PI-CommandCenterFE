import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import AdminInvoices from '@components/subpages/AdminInvoices';
import { GetServerSideProps } from 'next';
import React from 'react';
import {
    FinancialService,
    InvoiceViewPagedCollectionStandardResponse,
} from 'src/services';
interface invoiceProps {
    invoice: InvoiceViewPagedCollectionStandardResponse;
}

function invoices({ invoice }: invoiceProps) {
    return <AdminInvoices invoiceData={invoice} />;
}

export default invoices;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data = await FinancialService.listInvoicesByPaymentPartner(
                pagingOptions.offset,
                pagingOptions.limit,
                pagingOptions.search,
            );
            return {
                props: {
                    invoice: data,
                },
            };
        } catch (error: any) {
            console.log(error);
            return {
                props: {
                    data: [],
                },
            };
        }
    },
);
