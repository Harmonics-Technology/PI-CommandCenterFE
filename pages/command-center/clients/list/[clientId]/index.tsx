import { IClientInfoProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ClientSubDetails } from '@components/subpages/ClientSubDetails';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const SubscriptionDetailsPage = ({ sub }: IClientInfoProps) => {
    return <ClientSubDetails sub={sub} />;
};

export default SubscriptionDetailsPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx) => {
        const { clientId } = ctx.query;
        const pagingOptions = filterPagingSearchOptions(ctx);
        // console.log({ id });
        try {
            const currentSub =
                await SubscriptionService.listAllClientSubscriptions({
                    clientId,
                });
            // const allSub = await SubscriptionService.listClientSubscriptions({
            //     clientId: id,
            //     limit: pagingOptions.limit,
            //     offset: pagingOptions.offset,
            //     search: pagingOptions.search,
            // });
            return {
                props: {
                    sub: currentSub.data,
                    // allSub: allSub.data,
                    // id,
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
