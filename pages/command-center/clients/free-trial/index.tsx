import { IClientProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { FreeTrialComponent } from '@components/subpages/FreeTrialComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const clientPage = ({ data }: IClientProps) => {
    return <FreeTrialComponent data={data} />;
};

export default clientPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data =
                await SubscriptionService.listAllFreeTrialSubscriptions({
                    offset: pagingOptions.offset,
                    limit: pagingOptions.limit || 10,
                    staus: pagingOptions.status,
                    search: pagingOptions.search,
                });
            // const clients = await ClientService.listClients({
            //     offset: pagingOptions.offset,
            //     limit: pagingOptions.limit || 50,
            // });
            return {
                props: {
                    data: data.data,
                    // clients: clients.data,
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
