import { IClientInfoProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ClientSubDetails } from '@components/subpages/ClientSubDetails';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService, SubscriptionService } from 'src/services';

const SubscriptionDetailsPage = ({ sub, activity }: IClientInfoProps) => {
    return <ClientSubDetails sub={sub} activity={activity} />;
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
            const activity = await ClientService.getClientLicenseUpdateLogs({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit || 10,
                clientId,
                startDate: pagingOptions.from,
                endDate: pagingOptions.to,
            });
            return {
                props: {
                    sub: currentSub.data,
                    activity: activity.data?.data,
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
