import { withPageAuth } from '@components/generics/withPageAuth';
import { SummaryPage } from '@components/subpages/SummaryPage';
import { GetServerSideProps } from 'next';
import React from 'react';
import { OpenAPI, SubscriptionService } from 'src/services';

const summary = ({ data }: { data: any }) => {
    return <SummaryPage data={data} />;
};

export default summary;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
    OpenAPI.TOKEN = ctx.req.cookies.token;
    const { id } = ctx.query;
    console.log({ id });
    try {
        const data = await SubscriptionService.getClientSubscriptionById({
            id: id as any,
        });
        console.log({ data });
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
};
