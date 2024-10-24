import { Completed } from '@components/subpages/Completed';
import { GetServerSideProps } from 'next';
import React from 'react';
import { OpenAPI, SubscriptionService } from 'src/services';

const completed = ({ data, redirectUrl }) => {
    // data = { status: true };
    return <Completed data={data} redirectUrl={redirectUrl} />;
};

export default completed;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    OpenAPI.BASE =
        (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
        'https://timba-command-center-staging.azurewebsites.net';
    OpenAPI.TOKEN = ctx.req.cookies.token;
    const { clientId, subscriptionId, subscriptionPayment, redirectUrl } =
        ctx.query;
    try {
        const data = await SubscriptionService.paymentSuccess({
            clientId: clientId as any,
            subscriptionPayment: subscriptionPayment == 'true' ? true : false,
            subscriptionId:
                (subscriptionId as string) == 'null'
                    ? undefined
                    : (subscriptionId as string),
        });
        // console.log({ data: data });
        return {
            props: {
                data: data,
                redirectUrl,
            },
        };
    } catch (error: any) {
        // console.log({ error: error.body.errors });
        return {
            props: {
                data: error.body,
            },
        };
    }
};
