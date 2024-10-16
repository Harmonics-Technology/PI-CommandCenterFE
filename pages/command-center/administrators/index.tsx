import { IAdminProps } from '@components/generics/Schema';
import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import { AdministratorsComponent } from '@components/subpages/AdministratorsComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { UserService } from 'src/services';

const administratorsPage = ({ data }: IAdminProps) => {
    return <AdministratorsComponent data={data} />;
};

export default administratorsPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data = await UserService.listAdmins({
                limit: pagingOptions.limit,
                offset: pagingOptions.offset,
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
