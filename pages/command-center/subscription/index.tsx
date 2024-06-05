import { ISubscriptionProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionComponent } from '@components/subpages/SubscriptionComponent';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService, SubscriptionService } from 'src/services';

const subscriptionPage = ({ base, clients, country }: ISubscriptionProps) => {
    return (
        <SubscriptionComponent
            base={base}
            clients={clients}
            country={country}
        />
    );
};

export default subscriptionPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const base = await SubscriptionService.listSubscription({});
            const country = await axios.get(
                'https://countriesnow.space/api/v0.1/countries/flag/images',
            );

            const clients = await ClientService.listClients({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit,
            });
            return {
                props: {
                    base: base.data,
                    clients: clients.data,
                    country: country.data.data,
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
