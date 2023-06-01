import { IClientInfoProps } from '@components/generics/Schema';
import { ClientDetailsComponent } from '@components/subpages/ClientDetailsComponent';
import { GetServerSideProps } from 'next';
import React from 'react';

const ClientInformation = ({ id }: IClientInfoProps) => {
    return <ClientDetailsComponent id={id} />;
};

export default ClientInformation;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    return {
        props: {
            id,
        },
    };
};
