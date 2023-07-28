import { withPageAuth } from '@components/generics/withPageAuth';
import { SummaryPage } from '@components/subpages/SummaryPage';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const summary = ({ data }: { data: any }) => {
    return <SummaryPage data={data} />;
};

export default summary;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx) => {
        const { id } = ctx.query;
        try {
            const data = await SubscriptionService.getClientSubscriptionById({
                id,
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
