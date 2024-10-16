import { IClientInfoProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ClientDetailsComponent } from '@components/subpages/ClientDetailsComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ClientService } from 'src/services';

const ClientInformation = ({ id, data }: IClientInfoProps) => {
    return <ClientDetailsComponent id={id} data={data} />;
};

export default ClientInformation;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx) => {
        const { id } = ctx.query;
        try {
            const data = await ClientService.getClientById({ id });
            return {
                props: {
                    data: data.data,
                    id,
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
