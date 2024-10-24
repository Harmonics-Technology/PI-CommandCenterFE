import { IClientInfoProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionDetails } from '@components/subpages/SubscriptionDetails';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const SubscriptionDetailsPage = ({
    id,
    currentSub,
    allSub,
}: IClientInfoProps) => {
    return (
        <SubscriptionDetails id={id} currentSub={currentSub} allSub={allSub} />
    );
};

export default SubscriptionDetailsPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx) => {
        const { id } = ctx.query;
        const pagingOptions = filterPagingSearchOptions(ctx);
        // console.log({ id });
        try {
            const currentSub =
                await SubscriptionService.getCurrentClientSubscription({
                    clientId: id,
                });
            const allSub = await SubscriptionService.listClientSubscriptions({
                clientId: id,
                limit: pagingOptions.limit,
                offset: pagingOptions.offset,
                search: pagingOptions.search,
            });
            return {
                props: {
                    currentSub: currentSub.data,
                    allSub: allSub.data,
                    id,
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
