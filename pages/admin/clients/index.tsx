import { IClientProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ClientComponent } from '@components/subpages/ClientComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService } from 'src/services';

const clientPage = ({ data }: IClientProps) => {
    return <ClientComponent data={data} />;
};

export default clientPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data = await ClientService.listClients({
                offset: pagingOptions.offset,
                limit: pagingOptions.limit || 10,
                search: pagingOptions.search,
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
