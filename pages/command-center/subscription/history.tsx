import { ISubHistory } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionHistory } from '@components/subpages/SubscriptionHistory';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const history = ({ data }: ISubHistory) => {
    return <SubscriptionHistory data={data} />;
};

export default history;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data =
                await SubscriptionService.listCurrentClientSubscription({
                    limit: pagingOptions.limit,
                    offset: pagingOptions.offset,
                    search: pagingOptions.search,
                });

            return {
                props: {
                    data: data.data,
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
