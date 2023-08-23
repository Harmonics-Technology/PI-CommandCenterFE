import { Completed } from '@components/subpages/Completed';
import { GetServerSideProps } from 'next';
import React from 'react';
import { OpenAPI, SubscriptionService } from 'src/services';

const completed = ({ data }) => {
    return <Completed data={data} />;
};

export default completed;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    OpenAPI.BASE =
        (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
        'https://pi-commandcenterdev.azurewebsites.net';
    OpenAPI.TOKEN = ctx.req.cookies.token;
    const { clientId, subscriptionId, subscriptionPayment } = ctx.query;
    console.log({ clientId, subscriptionPayment, subscriptionId });
    try {
        const data = await SubscriptionService.paymentSuccess({
            clientId: clientId as any,
            subscriptionPayment: subscriptionPayment as unknown as boolean,
            subscriptionId:
                (subscriptionId as string) == 'null'
                    ? undefined
                    : (subscriptionId as string),
        });
        // console.log({ data: data });
        return {
            props: {
                data: data,
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
