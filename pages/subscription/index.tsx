import { ISubscriptionProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionComponent } from '@components/subpages/SubscriptionComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService, SubscriptionService } from 'src/services';

const subscriptionPage = ({ data, clients }: ISubscriptionProps) => {
    return <SubscriptionComponent data={data} clients={clients} />;
};

export default subscriptionPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data = await SubscriptionService.listSubscription({});
            const clients = await ClientService.listClients({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit,
            });
            return {
                props: {
                    data: data.data,
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
