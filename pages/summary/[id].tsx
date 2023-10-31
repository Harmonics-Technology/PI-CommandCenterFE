import { withPageAuth } from '@components/generics/withPageAuth';
import { SummaryPage } from '@components/subpages/SummaryPage';
import { GetServerSideProps } from 'next';
import React from 'react';
import { OpenAPI, SubscriptionService } from 'src/services';

const summary = ({ data, client }: { data: any; client: string }) => {
    return <SummaryPage data={data} client={client} />;
};

export default summary;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    OpenAPI.BASE =
        (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
        'https://pi-commandcenterdev.azurewebsites.net';
    OpenAPI.TOKEN = ctx.req.cookies.token;
    const { id, client } = ctx.query;
    try {
        const data = await SubscriptionService.getClientSubscriptionById({
            id: id as any,
        });
        console.log({ data: data.data });
        return {
            props: {
                data: data.data,
                client,
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
