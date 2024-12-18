import { IClientProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ClientComponent } from '@components/subpages/ClientComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService, SubscriptionService } from 'src/services';

const clientPage = ({ data, clients }: IClientProps) => {
    return <ClientComponent data={data} clients={clients} />;
};

export default clientPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data = await SubscriptionService.listAllClientSubscriptions({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit || 10,
                clientId: pagingOptions.client,
                staus: pagingOptions.status,
                search: pagingOptions.search,
            });

            const clients = await ClientService.listClients({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit || 50,
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
