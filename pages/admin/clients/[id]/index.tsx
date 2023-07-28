import { GetServerSideProps } from 'next';
import React from 'react';

const ClientDetailsPage = () => {
    return <></>;
};

export default ClientDetailsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    return {
        redirect: {
            permanent: false,
            destination: `/clients/${id}/client-information`,
        },
        props: {},
    };
};
