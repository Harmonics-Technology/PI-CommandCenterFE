import { ISubscriptionProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { PricingPage } from '@components/subpages/PricingPage';
import { GetServerSideProps } from 'next';
import React from 'react';
import { OpenAPI, SubscriptionService } from 'src/services';

const pricing = ({ base }: ISubscriptionProps) => {
    return <PricingPage base={base} />;
};

export default pricing;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    OpenAPI.BASE =
        (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
        'https://timba-command-center-staging.azurewebsites.net';
    OpenAPI.TOKEN = ctx.req.cookies.token;
    const pagingOptions = filterPagingSearchOptions(ctx);
    try {
        const base = await SubscriptionService.listSubscription({});

        return {
            props: {
                base: base.data,
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
