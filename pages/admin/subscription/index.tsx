import { ISubscriptionProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionComponent } from '@components/subpages/SubscriptionComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService, SubscriptionService } from 'src/services';

const subscriptionPage = ({ base, clients }: ISubscriptionProps) => {
    return (
        <SubscriptionComponent base={base} clients={clients} />
    );
};

export default subscriptionPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const base = await SubscriptionService.listSubscription({});

            const clients = await ClientService.listClients({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit,
            });
            return {
                props: {
                    base: base.data,
                    clients: clients.data,
                },
            };
        } catch (error: any) {
            console.log({ error });
            return {
                props: {
                    data: [],
                },
            };
        }
    },
);
